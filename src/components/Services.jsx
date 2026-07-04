import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SERVICES } from '../config/site'
import Asset from './Asset'
import CTAButton from './CTAButton'

gsap.registerPlugin(ScrollTrigger)

/**
 * SERVICES — the visual centerpiece.
 * A pinned, dark cinematic exhibition. Vertical scroll drives a 3D depth
 * carousel of premium shape cards: the active card moves toward the camera,
 * the previous recedes, the next emerges from depth. The right panel updates
 * dynamically. Cards are mouse-reactive and float.
 */
export default function Services() {
  const root = useRef(null)
  const trackRef = useRef(null)
  const cardRefs = useRef([])
  const videoRef = useRef(null)
  const progress = useRef(0)
  const [active, setActive] = useState(0)
  const mouse = useRef({ x: 0, y: 0 })

  const layout = (p) => {
    const cards = cardRefs.current
    cards.forEach((card, i) => {
      if (!card) return
      const offset = i - p
      const abs = Math.abs(offset)
      const x = offset * 340
      const z = -abs * 430
      const rotateY = gsap.utils.clamp(-38, 38, -offset * 16)
      const scale = gsap.utils.clamp(0.55, 1, 1 - abs * 0.14)
      const opacity = abs > 3 ? 0 : gsap.utils.clamp(0, 1, 1 - abs * 0.28)
      const blur = gsap.utils.clamp(0, 7, abs * 2.4)
      gsap.set(card, {
        xPercent: -50,
        yPercent: -50,
        x,
        z,
        rotateY,
        scale,
        opacity,
        filter: `blur(${blur}px)`,
        zIndex: 100 - Math.round(abs * 10),
      })
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      layout(0)
      const total = SERVICES.length - 1

      const st = ScrollTrigger.create({
        trigger: root.current,
        start: 'top top',
        end: () => `+=${SERVICES.length * 45}%`,
        pin: '.svc-pin',
        scrub: 0.3,
        onUpdate: (self) => {
          const p = self.progress * total
          progress.current = p
          layout(p)
          const idx = Math.round(p)
          setActive((prev) => (prev !== idx ? idx : prev))
        },
      })

      // ambient background drift
      gsap.to('.svc-bg-layer', {
        backgroundPositionY: '40%',
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: true },
      })

      return () => st.kill()
    }, root)
    return () => ctx.revert()
  }, [])

  // mouse-reactive parallax on the whole stage
  const onMove = (e) => {
    const r = trackRef.current?.getBoundingClientRect()
    if (!r) return
    mouse.current.x = ((e.clientX - r.left) / r.width - 0.5) * 2
    mouse.current.y = ((e.clientY - r.top) / r.height - 0.5) * 2
    gsap.to(trackRef.current, {
      rotateY: mouse.current.x * 6,
      rotateX: -mouse.current.y * 5,
      duration: 0.8,
      ease: 'power2.out',
      transformPerspective: 1400,
    })
  }

  const svc = SERVICES[active]
  useEffect(() => {
  if (!videoRef.current) return

  const video = videoRef.current

  gsap.to(video, {
    opacity: 0,
    duration: 0.35,
    onComplete: () => {
      video.src = svc.video
      video.load()

      video.onloadeddata = () => {
        video.play().catch(() => {})
      }

      gsap.fromTo(
        video,
        {
          opacity: 0,
          scale: 1.08,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }
      )
    },
  })
}, [svc])

  return (
    <section id="services" ref={root} className="relative overflow-x-clip bg-[#100f0c] text-white">
      <div className="svc-pin relative flex min-h-[100svh] lg:h-screen items-start lg:items-center overflow-visible py-24 lg:py-0">
        {/* Background Videos */}
<div className="absolute inset-0 z-0 overflow-hidden">
  {SERVICES.map((service, index) => (
    <video
      key={service.id}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      src={service.video}
      className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
        active === index
          ? "opacity-100 scale-100 service-video-active"
          : "opacity-0 scale-110"
      }`}
    />
  ))}
</div>

{/* Dark Overlay */}
<div className="absolute inset-0 z-10 bg-black/65" />

{/* Blueprint Grid */}
<div className="absolute inset-0 z-20 svc-bg-layer blueprint-grid-dark opacity-60" />

{/* Golden Glow */}
<div
  className="absolute inset-0 z-20"
  style={{
    background:
      "radial-gradient(120% 80% at 30% 20%, rgba(201,166,107,.18), transparent 55%), radial-gradient(100% 90% at 80% 90%, rgba(40,60,80,.25), transparent 60%)",
  }}
/>

{/* Volumetric Beams */}
<div className="pointer-events-none absolute -top-1/3 left-1/4 z-20 h-[140%] w-40 rotate-12 bg-gradient-to-b from-gold/12 to-transparent blur-2xl" />

<div className="pointer-events-none absolute -top-1/3 right-1/3 z-20 h-[140%] w-24 -rotate-12 bg-gradient-to-b from-white/8 to-transparent blur-2xl" />
        {/* dark cinematic environment */}
        <div className="absolute inset-0 svc-bg-layer blueprint-grid-dark opacity-70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 80% at 30% 20%, rgba(201,166,107,0.16), transparent 55%), radial-gradient(100% 90% at 80% 90%, rgba(40,60,80,0.35), transparent 60%)',
          }}
        />
        {/* volumetric beams */}
        <div className="pointer-events-none absolute -top-1/3 left-1/4 h-[140%] w-40 rotate-12 bg-gradient-to-b from-gold/12 to-transparent blur-2xl" />
        <div className="pointer-events-none absolute -top-1/3 right-1/3 h-[140%] w-24 -rotate-12 bg-gradient-to-b from-white/8 to-transparent blur-2xl" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-12">
          {/* LEFT — carousel */}
          <div className="lg:col-span-7 ml-0 lg:-ml-20">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[11px] tracking-[0.4em] text-gold uppercase">The Exhibition</span>
              <span className="h-px w-16 gold-line" />
            </div>
            <div
              className="relative h-[260px] sm:h-[420px] lg:h-[72vh] perspective-1000"
              onMouseMove={onMove}
              onMouseLeave={() =>
                gsap.to(trackRef.current, { rotateX: 0, rotateY: 0, duration: 1, ease: 'power3.out' })
              }
            >
              <div ref={trackRef} className="absolute inset-0 preserve-3d">
                {SERVICES.map((s, i) => (
                  <article
                    key={s.id}
                    ref={(el) => (cardRefs.current[i] = el)}
                    className="absolute left-1/2 top-1/2 h-[300px] w-[220px] sm:h-[420px] sm:w-[300px] lg:h-[70vh] lg:w-[550px] overflow-hidden rounded-[2rem] preserve-3d"
                    style={{
                      boxShadow: '0 40px 90px -30px rgba(0,0,0,0.8)',
                      border: '1px solid rgba(201,166,107,0.25)',
                    }}
                  >
                    <Asset
                      src={s.image}
                      alt={s.title}
                      dark
                      accent={s.accent}
                      label={`Higgsfield · ${s.title}`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{ background: `radial-gradient(circle at 50% 0%, ${s.accent}40, transparent 60%)` }}
                    />
                    <div className="absolute left-5 top-5 font-display text-sm tracking-[0.3em] text-white/80">
                      {s.id}
                    </div>
                    <div className="absolute inset-x-5 bottom-5">
                      <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
                      <p className="mt-1 text-[11px] tracking-[0.2em] text-white/60 uppercase">{s.tag}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* progress dots */}
            <div className="mt-6 flex items-center gap-2">
              {SERVICES.map((s, i) => (
                <span
                  key={s.id}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active ? 'w-10 bg-gold' : 'w-4 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — dynamic info panel */}
          <div className="mt-5 lg:mt-0 lg:col-span-5 lg:pl-28 xl:pl-40">
            <div key={svc.id} className="svc-panel">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-gold/90">{svc.id}</span>
                <span className="text-[11px] tracking-[0.35em] text-white/50 uppercase">Service</span>
              </div>
              <h2 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl leading-tight">{svc.title}</h2>
              <p className="mt-2 text-[12px] tracking-[0.25em] text-gold/80 uppercase">{svc.tag}</p>
              <p className="mt-4 max-w-md text-sm lg:text-base leading-relaxed text-white/70">{svc.blurb}</p>
              <ul className="mt-3 space-y-1 lg:mt-5 lg:space-y-3">
                {svc.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 lg:mt-9">
                <CTAButton variant="gold" message={`Hi ARCH ASSIST! I'd like guidance on ${svc.title} for my architecture project.`}>
                  Enquire about {svc.title}
                </CTAButton>
              </div>
            </div>
            <p className="mt-10 text-[11px] tracking-[0.3em] text-white/30 uppercase">
              Scroll to walk the exhibition · {active + 1} / {SERVICES.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}