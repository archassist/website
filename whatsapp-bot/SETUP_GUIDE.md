# ARCH ASSIST — WhatsApp Service Menu (100% free setup)

This makes WhatsApp automatically reply to anyone who messages you with a
selectable list of your 10 services (checkboxes), a **Submit** button, and a
**"We will wire you with a mentor shortly"** confirmation.

It uses two free things:

- **Meta WhatsApp Cloud API** — free, includes 1,000 conversations/month.
- **Cloudflare Workers** — free, always-on, no credit card.

You only set this up **once**. Budget about 1–2 hours the first time. No coding
needed — just copy, paste, and click.

> ⚠️ Important: your number can be on a **personal WhatsApp OR the Cloud API,
> not both at the same time**. Pick a number you're willing to move over. While
> testing you can use Meta's free **test number** and not touch your real one.

---

## Part 1 — Create the Meta app (free)

1. Go to <https://developers.facebook.com/> and log in. Click **My Apps → Create App**.
2. Choose use case **"Other" → Business**, give it a name (e.g. "ARCH ASSIST"),
   create it.
3. On the app dashboard, find **WhatsApp** and click **Set up**.
4. You'll land on the WhatsApp **API Setup** page. Note these (you'll need them):
   - **Temporary access token** (top of page) — this is your `WHATSAPP_TOKEN`.
     ⚠️ It expires in 24 hours; Part 5 shows how to make a permanent one.
   - **Phone number ID** — this is your `PHONE_NUMBER_ID`.
   - A free **test number** is provided. Under "To", add your own personal
     number so you can test (test mode only messages numbers you add here).

---

## Part 2 — Create & publish the Flow (the service menu)

1. Open **WhatsApp Manager**: <https://business.facebook.com/wa/manage/flows/>
2. Click **Create Flow**. Name it "Service Menu". Choose **"Build your own"** /
   start blank, and pick the **endpoint: None** option (no server needed for the form).
3. Switch to the **JSON editor** (look for a `</>` or "Edit JSON" toggle).
4. Delete what's there and paste the entire contents of **`flow.json`** from this folder.
5. Click **Save**, then **Publish**. Confirm publish.
6. Copy the **Flow ID** (shown in the flow's list/details) — this is your `FLOW_ID`.

---

## Part 3 — Deploy the webhook on Cloudflare (free)

1. Go to <https://dash.cloudflare.com/> and sign up / log in (free, no card).
2. Left menu: **Workers & Pages → Create → Workers → Create Worker**.
3. Give it a name like `arch-assist-bot`, click **Deploy** (it deploys a hello-world).
4. Click **Edit code**. Delete everything, paste the entire contents of
   **`worker.js`** from this folder, then **Deploy** again.
5. Copy your Worker URL — it looks like
   `https://arch-assist-bot.<your-name>.workers.dev`. You'll need it in Part 4.

### Add your settings (Variables & Secrets)

In the Worker, go to **Settings → Variables and Secrets** and add:

| Name              | Type   | Value                                            |
|-------------------|--------|--------------------------------------------------|
| `WHATSAPP_TOKEN`  | Secret | the access token from Part 1 (or Part 5)         |
| `PHONE_NUMBER_ID` | Text   | the Phone number ID from Part 1                  |
| `VERIFY_TOKEN`    | Text   | any random word you invent, e.g. `archassist123` |
| `FLOW_ID`         | Text   | the Flow ID from Part 2                          |
| `OWNER_NUMBER`    | Text   | (optional) `919344701251` to receive leads       |

Click **Deploy** after saving the variables.

---

## Part 4 — Connect the webhook to WhatsApp

1. Back in your Meta app: **WhatsApp → Configuration**.
2. Under **Webhook**, click **Edit** and enter:
   - **Callback URL**: your Worker URL from Part 3.
   - **Verify token**: the exact `VERIFY_TOKEN` you set (e.g. `archassist123`).
3. Click **Verify and save**. (If it fails, double-check the URL and that the
   verify token matches exactly.)
4. Click **Manage** next to Webhook fields and **Subscribe** to **`messages`**.

---

## Part 5 — Make the token permanent (so it doesn't expire in 24h)

The temporary token dies daily. For a token that lasts:

1. Go to **business.facebook.com → Business Settings → Users → System users**.
2. **Add** a system user (Admin role).
3. Click **Generate token**, pick your app, and select permissions
   `whatsapp_business_messaging` and `whatsapp_business_management`.
4. Copy the token (you only see it once) and paste it into the Worker's
   `WHATSAPP_TOKEN` secret (Part 3), then **Deploy**.

---

## Part 6 — Test it

1. From the personal number you added in Part 1, send **"hi"** to the test number.
2. You should receive the **ARCH ASSIST** message with a **View Services** button.
3. Tap it → check one or more services → tap **Submit**.
4. You'll see **"We will wire you with a mentor shortly."** and get a ✅ text.
5. If you set `OWNER_NUMBER`, you'll receive the list of chosen services.

---

## Going live to real clients

Test mode only messages numbers you manually add. To accept anyone:

1. In the Meta app, **add your real phone number** under WhatsApp → API Setup
   (this is where your number leaves personal WhatsApp).
2. Complete **Business Verification** in Business Settings (free; can take a few days).
3. Update `PHONE_NUMBER_ID` in the Worker to your real number's ID.

Then publish your `wa.me/919344701251` link / QR anywhere, and every new chat
gets the menu automatically.

---

## Quick troubleshooting

- **Webhook won't verify** → URL wrong, or `VERIFY_TOKEN` doesn't match exactly.
- **No reply when you message** → token expired (do Part 5), or you didn't
  subscribe to the `messages` field (Part 4, step 4).
- **Flow button missing** → the Flow isn't **Published**, or `FLOW_ID` is wrong.
- **See errors** → in the Worker, open **Logs → Begin log stream** and message
  the number to watch what happens.
