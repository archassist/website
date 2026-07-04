# ARCH ASSIST

A premium, cinematic architecture mentorship website for architecture students —
built to feel like a luxury architecture exhibition, a digital museum, and an
Apple-style storytelling experience combined.

## Tech stack
- React + Vite
- Tailwind CSS
- GSAP + ScrollTrigger (cinematic scroll, pinning, parallax)
- Framer Motion (interactions, FAQ accordion)
- Lenis (smooth scroll)

## Quick start
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the build
```

## Experience map
1. **Preloader** — blueprint draws itself in real time, logo reveals.
2. **Entrance** — glassmorphism logo orb ("TAP TO ENTER"); the logo *is* the
   button. Click → scale, 3D rotate, glow, motion blur, white flash → morph into
   the homepage.
3. **Home** — workspace hero, floating architectural objects, background zoom
   100%→120%, line-by-line text reveals.
4. **Services** — the centerpiece: a pinned, dark cinematic **3D Shape Card
   Carousel** of all 10 services with a dynamic info panel, depth transitions and
   mouse-reactive movement.
5. **Contact** — split layout: large WhatsApp CTA + details, glassmorphism FAQ
   accordion (18 FAQs).
6. **Footer** — cinematic closing scene with a giant shimmering wordmark.

## Two things to configure
1. **WhatsApp number** — open `src/config/site.js` and set `WHATSAPP_NUMBER`
   (international format, digits only). Every CTA routes to WhatsApp.
2. **Higgsfield assets** — generate the renders and drop them into
   `public/assets/` using the filenames and prompts in
   `public/assets/ASSETS_AND_HIGGSFIELD_PROMPTS.md`. Until then the site shows
   elegant animated blueprint placeholders, so it always looks finished.

## Editing content
All services, FAQs, contact details, nav and footer links live in
`src/config/site.js` — no component edits needed for copy changes.
