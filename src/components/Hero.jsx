import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Asset from './Asset'
import CTAButton from './CTAButton'

gsap.registerPlugin(ScrollTrigger)

/**
 * Premium architecture workspace hero.
 * Left: headline. Center: Higgsfield workspace render with floating objects.
 * Right: supporting copy + CTA. Background scales 100%->120% on scroll, objects
 * drift toward the viewer, and text reveals line by line.
 */
export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line-by-line intro reveal
      gsap.from('.hero-line > span', {
        yPercent: 120,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.12,
        delay: 0.2,
      })
      gsap.from('.hero-fade', {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.7,
      })

      // Cinematic scroll: background zoom 100 -> 120
      gsap.to('.hero-bg', {
        scale: 1.2,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      // Floating objects move independently with depth; settle on scroll-up
      const floaters = gsap.utils.toArray('.floater')
      floaters.forEach((el, i) => {
        const depth = parseFloat(el.dataset.depth || '1')
        gsap.to(el, {
          y: -120 * depth,
          x: (i % 2 === 0 ? -1 : 1) * 40 * depth,
          rotate: (i % 2 === 0 ? -1 : 1) * 6 * depth,
          scale: 1 + 0.08 * depth,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 },
        })
      })

      // Whole stage pushes toward the user
      gsap.to('.hero-stage', {
        scale: 1.06,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={root} className="relative min-h-screen overflow-hidden pt-20 md:pt-24"  >
      {/* background render + grid */}
      <div className="hero-bg absolute inset-0 will-change-transform">
        <Asset
          src="/assets/hero-workspace.jpg"
          alt="Premium architecture studio workspace with model, blueprints and tools"
          className="h-full w-full object-cover opacity-90"
          label="Higgsfield · Architecture Workspace"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/70 via-canvas/30 to-canvas/85" />
        <div className="absolute inset-0 blueprint-grid opacity-40" />
      </div>

      <div className="hero-stage relative mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-8 md:py-12 lg:grid-cols-12 perspective-1000">
        {/* LEFT */}
        <div className="lg:col-span-4">
          <p className="hero-fade mb-6 text-[11px] tracking-[0.4em] text-gold uppercase">
            Architecture Mentorship
          </p>
          <h1 className="font-display text-4xl leading-[1.05] text-ink md:text-6xl">
            <span className="reveal-line hero-line"><span>Guidance.</span></span>
            <span className="reveal-line hero-line"><span>Clarity.</span></span>
            <span className="reveal-line hero-line"><span className="italic text-gold">Better Design.</span></span>
          </h1>
          <div className="hero-fade mt-9">
            <CTAButton variant="solid">Get Guidance</CTAButton>
          </div>
        </div>

        {/* CENTER stage with floating objects */}
        <div className="relative lg:col-span-4">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm preserve-3d">
            <div className="floater absolute inset-0 z-10 overflow-hidden rounded-[2rem] shadow-2xl" data-depth="0.6">
              <Asset
                src="/assets/hero-model.jpg"
                alt="Physical architecture massing model"
                className="h-full w-full object-cover"
                label="Architecture Model"
                accent="#C9A66B"
              />
            </div>
            {/* floating blueprint */}
            <div
              className="floater absolute -left-10 top-10 z-20 h-40 w-32 rotate-[-8deg] overflow-hidden rounded-xl glass"
              data-depth="1.6"
            >
              <div className="h-full w-full blueprint-grid bg-white/40" />
              <svg viewBox="0 0 100 120" className="absolute inset-2 h-[90%] w-[90%]" fill="none" stroke="#C9A66B" strokeWidth="1.2">
                <rect x="14" y="20" width="56" height="44" />
                <line x1="14" y1="42" x2="70" y2="42" />
                <path d="M70 64 l18 0 0 30 -74 0 0 -30 18 0" />
              </svg>
            </div>
            {/* floating tracing paper */}
            <div
              className="floater absolute -right-8 top-24 z-30 h-28 w-28 rotate-[10deg] rounded-lg glass"
              data-depth="2.1"
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/60 to-white/10" />
            </div>
            {/* scale ruler */}
            <div
              className="floater absolute -bottom-6 left-6 z-30 h-6 w-44 rotate-[-4deg] rounded bg-ink/85"
              data-depth="1.3"
            >
              <div className="flex h-full items-end justify-between px-1 pb-0.5">
                {Array.from({ length: 18 }).map((_, i) => (
                  <span key={i} className="w-px bg-gold/70" style={{ height: i % 3 === 0 ? '70%' : '40%' }} />
                ))}
              </div>
            </div>
            {/* technical pen */}
            <div className="floater absolute -right-2 bottom-10 z-40 h-24 w-2 rotate-[24deg] rounded-full bg-gradient-to-b from-ink to-gold" data-depth="2.6" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 lg:pl-6">
          <p className="hero-fade max-w-sm text-base leading-relaxed text-muted">
            Helping architecture students transform ideas into professional projects through expert
            mentorship, portfolio reviews, software training, project guidance, visualization support,
            presentation development, and thesis mentoring.
          </p>
          <div className="hero-fade mt-8 grid grid-cols-3 gap-4 max-w-sm">
            {[
              ['11+', 'Disciplines'],
              ['1:1', 'Mentorship'],
              ['24h', 'Fast Response'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-ink">{n}</div>
                <div className="mt-1 text-[11px] tracking-[0.18em] text-muted uppercase">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="hero-fade absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.4em] text-muted uppercase">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
