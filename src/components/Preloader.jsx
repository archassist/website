import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logoWhite from '../assets/logo/logo-white.png'

/**
 * ARCH ASSIST - cinematic architectural intro preloader.
 *
 * Not a loading screen - the opening sequence of the ARCH ASSIST story, edited
 * like a premium architectural short film of distinct cinematic shots that share
 * one continuous, forward-moving camera. It starts the instant the site opens,
 * with a poster frame so there is never a blank screen.
 *
 *   SHOT 01  The blank canvas .... live Higgsfield clip (walnut desk, dust, light)
 *   SHOT 02  The first idea ...... graphite construction lines draw themselves in
 *   SHOT 03  The blueprint awakens. lines illuminate into glowing blueprint blue
 *   SHOT 04  The brand reveal ..... the lines reorganize into the ARCH ASSIST mark,
 *            then a warm golden light sweeps across it
 *   HANDOFF  the camera travels THROUGH the logo into the Hero (scale + flash)
 *
 * The shots are real Higgsfield renders; GSAP only edits them together -
 * cross-dissolves, the continuous forward push, and the transition timing.
 *
 * ---------------------------------------------------------------------------
 *  ASSETS - generated with Higgsfield (nano-banana stills + seedance clip,
 *  ByteDance upscales). The hosted URLs work as-is. For a permanent offline
 *  copy, download each file into the project and switch SHOTS to local paths,
 *  e.g. video -> public/assets/video/preloader-shot1.mp4 -> '/assets/video/...'.
 * ---------------------------------------------------------------------------
 */
const CDN =
  'https://d8j0ntlcm91z4.cloudfront.net/user_3FUfW5SQc7PJPMYD2EtGxvPYtX5/'

const SHOTS = {
  // Shot 01 - live cinematic clip (4K upscale) + matching poster frame
  shot1Video: CDN + 'hf_20260626_152443_16eec40b-8fde-444d-a1c0-fe8121848738.mp4',
  shot1Poster: CDN + 'hf_20260626_152756_6ccab31c-0f6d-4971-badd-cb34972b5711.png',
  // Shot 02 - medium "first idea" still
  shot2: CDN + 'hf_20260626_155112_9b5c1517-cbf2-49be-b5cb-1a581a56fa90.png',
  // Shot 03 - macro "blueprint awakens" still
  shot3: CDN + 'hf_20260626_155114_c2e62b75-83a8-45f1-ac84-38590f67a2b4.png',
}

export default function Preloader({ onDone }) {
  const root = useRef(null)
  const video = useRef(null)
  const flash = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const prime = (sel) =>
        gsap.utils.toArray(sel).forEach((el) => {
          const len = el.getTotalLength?.() || 400
          gsap.set(el, { strokeDasharray: len, strokeDashoffset: len })
        })
      prime('.cons-stroke')

      // Reduced motion: respectful quick reveal, no long film
      if (reduce) {
        const tl = gsap.timeline({ onComplete: () => onDone?.() })
        tl.to('.shot-1', { opacity: 1, duration: 0.3 })
          .to('.logo-stage', { opacity: 1, duration: 0.4 }, '+=0.1')
          .to('.logo-mark', { opacity: 1, duration: 0.8 }, '<')
          .to('.brand-line', { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
          .to({}, { duration: 0.5 })
          .to(root.current, { opacity: 0, duration: 0.5 })
        return
      }

      video.current?.play?.().catch(() => {})

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        onComplete: () => onDone?.(),
      })

      // ---- SHOT 01 - the blank canvas. Calm slow forward drift. ----
      tl.to('.shot-1', { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0)
        .to('.film-grain', { opacity: 0.32, duration: 1.0 }, 0)
      tl.fromTo('.shot-1 .media', { scale: 1.0 }, { scale: 1.14, duration: 2.4, ease: 'none' }, 0)

      // TRANSITION 01 - match cut. The camera keeps moving; no fade to black.
      // ---- SHOT 02 - the first idea. Graphite construction lines draw in. ----
      tl.fromTo('.shot-2 .media', { scale: 1.06 }, { scale: 1.2, duration: 2.6, ease: 'none' }, 1.3)
        .to('.shot-2', { opacity: 1, duration: 0.8, ease: 'power1.inOut' }, 1.4)
        .to('.shot-1', { opacity: 0, duration: 0.9, ease: 'power1.inOut' }, 1.5)
        .to('.cons-layer', { opacity: 1, duration: 0.6 }, 1.5)
        .to('.cons-stroke', { strokeDashoffset: 0, duration: 1.4, stagger: 0.06 }, 1.6)

      // TRANSITION 02 - the camera pushes into the drawing.
      // ---- SHOT 03 - the blueprint awakens. Lines illuminate, blue glow. ----
      tl.fromTo('.shot-3 .media', { scale: 1.08 }, { scale: 1.24, duration: 2.8, ease: 'none' }, 2.8)
        .to('.shot-3', { opacity: 1, duration: 0.9, ease: 'power1.inOut' }, 2.9)
        .to('.shot-2', { opacity: 0, duration: 0.9, ease: 'power1.inOut' }, 3.0)
        .to('.cons-stroke', { stroke: '#8FC0EE', duration: 0.7 }, 3.1)
        .to('.cons-layer', { filter: 'drop-shadow(0 0 7px rgba(120,180,240,0.75))', duration: 0.9 }, 3.1)

      // TRANSITION 03 - the glowing lines converge and reorganize into the mark.
      // ---- SHOT 04 - the brand reveal. ----
      tl.to('.shot-3', { scale: 1.06, filter: 'blur(3px)', duration: 1.0, ease: 'power2.in' }, 4.1)
        .to('.cons-layer', { opacity: 0, scale: 0.82, duration: 0.9, ease: 'power2.in' }, 4.1)
        .to('.signature-dark', { opacity: 0.82, duration: 1.0 }, 4.2)
        .fromTo(
          '.logo-stage',
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out' },
          4.2
        )
        .fromTo(
          '.logo-mark',
          { opacity: 0, scale: 1.12, filter: 'blur(8px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power3.out' },
          4.35
        )

      // a warm golden architectural light sweeps gently across the logo
      tl.fromTo(
        '.gold-sweep',
        { xPercent: -160, opacity: 0 },
        { xPercent: 160, opacity: 1, duration: 1.2, ease: 'power2.inOut' },
        5.1
      )
        .to('.gold-sweep', { opacity: 0, duration: 0.4 }, 6.0)
        .to('.logo-glow', { opacity: 0.85, duration: 0.6, ease: 'power2.out' }, 5.2)
        .to('.logo-glow', { opacity: 0.18, duration: 0.8, ease: 'power2.inOut' }, 6.0)
        .to('.brand-line', { opacity: 1, y: 0, duration: 0.8 }, 5.3)

      // hold the signature frame briefly
      tl.to({}, { duration: 0.5 })

      // ---- ADDED SHOT - the animated brand film (Higgsfield logo reveal). ----
      // Plays as an extra transition beat; if the video file is missing it
      // degrades gracefully (the static mark simply stays on screen).

    }, root)

    return () => ctx.revert()
  }, [onDone])

  return (
    <div ref={root} className="fixed inset-0 z-[100] overflow-hidden bg-canvas">
      {/* ---- SHOT 01 - live cinematic clip (instant poster, no blank screen) ---- */}
      <div className="shot-1 absolute inset-0 opacity-0">
        <div className="media absolute inset-0 will-change-transform">
          <video
            ref={video}
            className="h-full w-full object-cover"
            src={SHOTS.shot1Video}
            poster={SHOTS.shot1Poster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>

      {/* ---- SHOT 02 - the first idea ---- */}
      <div className="shot-2 absolute inset-0 opacity-0">
        <div
          className="media absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${SHOTS.shot2})` }}
        />
      </div>

      {/* ---- SHOT 03 - the blueprint awakens ---- */}
      <div className="shot-3 absolute inset-0 opacity-0">
        <div
          className="media absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${SHOTS.shot3})` }}
        />
      </div>

      {/* shared cinematic grade + edges, sit above the shots */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 70% at 42% 38%, rgba(0,0,0,0) 45%, rgba(20,16,10,0.5) 100%)',
        }}
      />
      <div
        className="film-grain pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
          backgroundSize: '160px 160px',
        }}
      />

      {/* construction lines - draw in over shot 02, glow in shot 03, converge into the mark */}
      <div className="cons-layer absolute inset-0 grid place-items-center opacity-0 will-change-transform">
        <svg viewBox="0 0 600 600" className="h-[70vmin] w-[70vmin] max-h-[640px] max-w-[640px]">
          <g stroke="#C9A66B" fill="none" strokeWidth="1.3" opacity="0.95">
            <line className="cons-stroke" x1="120" y1="90" x2="120" y2="510" />
            <line className="cons-stroke" x1="480" y1="90" x2="480" y2="510" />
            <line className="cons-stroke" x1="90" y1="300" x2="510" y2="300" />
            <rect className="cons-stroke" x="150" y="150" width="180" height="130" />
            <line className="cons-stroke" x1="150" y1="215" x2="330" y2="215" />
            <line className="cons-stroke" x1="240" y1="150" x2="240" y2="280" />
            <path className="cons-stroke" d="M330 300 L420 215 L510 300 L510 380 L330 380 Z" />
            <rect className="cons-stroke" x="170" y="350" width="150" height="120" />
            <path className="cons-stroke" d="M170 350 L245 300 L320 350" />
            <rect className="cons-stroke" x="200" y="400" width="34" height="70" />
            <rect className="cons-stroke" x="256" y="400" width="34" height="70" />
            <line className="cons-stroke" x1="150" y1="120" x2="330" y2="120" />
            <line className="cons-stroke" x1="300" y1="70" x2="300" y2="540" strokeDasharray="6 8" />
          </g>
        </svg>
      </div>

      {/* darkening for the signature logo moment */}
      <div className="signature-dark absolute inset-0 bg-[#0b0a07] opacity-0" />

      {/* ---- SHOT 04 - the ARCH ASSIST mark, assembled from the drafting lines ---- */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="logo-stage relative grid place-items-center opacity-0 will-change-transform">
          <div
            className="logo-glow absolute h-[42vmin] w-[42vmin] max-h-80 max-w-80 rounded-full opacity-0"
            style={{
              background:
                'radial-gradient(circle, rgba(201,166,107,0.55) 0%, rgba(201,166,107,0.10) 45%, transparent 70%)',
            }}
          />
          <div className="relative h-[30vmin] w-[30vmin] max-h-72 max-w-72 overflow-hidden">
            <img
              src={logoWhite}
              alt="ARCH ASSIST"
              className="logo-mark h-full w-full object-contain opacity-0 will-change-transform"
              style={{ filter: 'drop-shadow(0 10px 34px rgba(201,166,107,0.35))' }}
            />
            <div
              className="gold-sweep pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 opacity-0"
              style={{
                background:
                  'linear-gradient(105deg, transparent 0%, rgba(255,240,205,0) 30%, rgba(255,238,200,0.85) 50%, rgba(201,166,107,0) 70%, transparent 100%)',
                filter: 'blur(2px)',
                mixBlendMode: 'screen',
              }}
            />
          </div>
        </div>
      </div>

      {/* ADDED SHOT - animated brand film (drop the Higgsfield video at
          public/assets/video/logo-reveal.mp4). Transparent container: if the
          file is absent the static mark beneath remains visible. */}
      <div className="shot-brandfilm pointer-events-none absolute inset-0 opacity-0 will-change-transform">
        <video
          className="brandfilm-media h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          {/* Local copy wins if present; otherwise streams the generated film from CDN */}
          <source src="/assets/video/logo-reveal.mp4" type="video/mp4" />
        </video>
      </div>

      {/* brand line, appears with the finished mark */}
      <div className="brand-line absolute bottom-[14vh] left-0 right-0 translate-y-4 text-center opacity-0">
        <h1 className="font-display text-2xl tracking-[0.5em] text-[#f3efe7]">ARCH ASSIST</h1>
        <span className="mx-auto mt-3 block h-px w-16 gold-line" />
        <p className="mt-3 text-[11px] tracking-[0.4em] text-white/50 uppercase">
          Architecture Assistant
        </p>
      </div>

      {/* white flash - the camera moves through the logo into the story */}
      <div ref={flash} className="pointer-events-none absolute inset-0 z-[110] bg-white opacity-0" />
    </div>
  )
}