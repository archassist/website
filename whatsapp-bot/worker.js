/**
 * ARCH ASSIST — WhatsApp service-menu bot (Cloudflare Worker)
 * -----------------------------------------------------------
 * What it does:
 *   1. Verifies the webhook with Meta (GET request).
 *   2. When a client sends ANY message, it replies with the 10-service
 *      selection Flow (checkboxes + Submit).
 *   3. When the client submits the Flow, it sends a short text confirmation
 *      and forwards the chosen services to you (the owner) if OWNER_NUMBER is set.
 *
 * Set these as Worker "Variables and Secrets" (see SETUP_GUIDE.md):
 *   WHATSAPP_TOKEN   - your permanent (or temporary) access token   [secret]
 *   PHONE_NUMBER_ID  - the WhatsApp phone number ID from Meta
 *   VERIFY_TOKEN     - any random string you make up (used once during setup)
 *   FLOW_ID          - the published Flow's ID
 *   OWNER_NUMBER     - (optional) your number to receive leads, e.g. 919344701251
 *   GRAPH_VERSION    - (optional) defaults to v22.0
 */

const SERVICE_LABELS = {
  site_analysis: "Site Analysis",
  concept_development: "Concept Development",
  "2d_drawings": "2D Drawings",
  working_drawings: "Working Drawings",
  "3d_modeling": "3D Modeling",
  bim_modelling: "BIM Modelling",
  renders: "Renders",
  sheet_presentation: "Sheet Presentation",
  walkthrough_video: "Walkthrough Video",
  thesis: "Thesis",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // --- 1. Webhook verification (Meta calls this once during setup) ---
    if (request.method === "GET") {
      const mode = url.searchParams.get("hub.mode");
      const token = url.searchParams.get("hub.verify_token");
      const challenge = url.searchParams.get("hub.challenge");
      if (mode === "subscribe" && token === env.VERIFY_TOKEN) {
        return new Response(challenge, { status: 200 });
      }
      return new Response("Forbidden", { status: 403 });
    }

    // --- 2. Incoming events ---
    if (request.method === "POST") {
      let body;
      try {
        body = await request.json();
      } catch {
        return new Response("Bad Request", { status: 400 });
      }

      // Always answer 200 quickly so Meta doesn't retry; do the work after.
      try {
        const value = body?.entry?.[0]?.changes?.[0]?.value;
        const message = value?.messages?.[0];

        if (message) {
          const from = message.from;

          if (
            message.type === "interactive" &&
            message.interactive?.type === "nfm_reply"
          ) {
            // The client submitted the Flow.
            await handleSubmission(env, from, message.interactive.nfm_reply);
          } else {
            // Any other message -> send the service menu Flow.
            await sendFlow(env, from);
          }
        }
      } catch (e) {
        console.log("handler error:", e);
      }

      return new Response("EVENT_RECEIVED", { status: 200 });
    }

    return new Response("OK", { status: 200 });
  },
};

// Parse the submitted selections and confirm to the client (+ notify owner).
async function handleSubmission(env, from, nfmReply) {
  let ids = [];
  try {
    const parsed = JSON.parse(nfmReply.response_json || "{}");
    ids = parsed.services || [];
  } catch {
    /* ignore */
  }

  const names = ids.map((id) => SERVICE_LABELS[id] || id);
  await sendText(
    env,
    from,
    "✅ Got it! We will wire you with a mentor shortly."
  );

  if (env.OWNER_NUMBER && names.length) {
    await sendText(
      env,
      env.OWNER_NUMBER,
      `New lead from +${from}\nServices: ${names.join(", ")}`
    );
  }
}

// Send the interactive Flow (the service menu).
async function sendFlow(env, to) {
  const payload = {
    messaging_product: "whatsapp",
    to,
    type: "interactive",
    interactive: {
      type: "flow",
      header: { type: "text", text: "ARCH ASSIST" },
      body: {
        text: "Welcome! Tap below to choose the services you need help with.",
      },
      footer: { text: "Architecture mentorship" },
      action: {
        name: "flow",
        parameters: {
          flow_message_version: "3",
          flow_token: crypto.randomUUID(),
          flow_id: env.FLOW_ID,
          flow_cta: "View Services",
          flow_action: "navigate",
          flow_action_payload: { screen: "SERVICE_MENU" },
        },
      },
    },
  };
  return callGraph(env, payload);
}

// Send a plain text message.
async function sendText(env, to, text) {
  const payload = {
    messaging_product: "whatsapp",
    to,
    type: "text",
    text: { body: text },
  };
  return callGraph(env, payload);
}

async function callGraph(env, payload) {
  const version = env.GRAPH_VERSION || "v22.0";
  const res = await fetch(
    `https://graph.facebook.com/${version}/${env.PHONE_NUMBER_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  if (!res.ok) {
    console.log("Graph error:", res.status, await res.text());
  }
  return res;
}
