import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NAV_LINKS, POLICIES, SOCIALS, CONTACT } from '../config/site'
import { scrollTo } from '../hooks/useLenis'
import CTAButton from './CTAButton'
import logo from "../assets/logo/logo-white.png";

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const root = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-inner', {
        scale: 1.08,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 85%' },
      })
      gsap.to('.footer-word', {
        backgroundPositionX: '200%',
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom bottom', scrub: true },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={root} className="relative overflow-hidden bg-[#100f0c] text-white">
      <div className="absolute inset-0 blueprint-grid-dark opacity-50" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{ background: 'radial-gradient(80% 100% at 50% 0%, rgba(201,166,107,0.18), transparent 70%)' }}
      />

      <div className="footer-inner relative mx-auto max-w-7xl px-6 pt-24 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
  <img
    src={logo}
    alt="ARCH ASSIST"
    className="h-12 w-12 object-contain shrink-0"
  />

  <span className="font-display text-xl tracking-[0.30em] text-white">
    ARCH ASSIST
  </span>
</div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {CONTACT.tagline}. Mentoring architecture students from first idea to final jury.
            </p>
            <div className="mt-8">
              <CTAButton variant="gold">Get Guidance</CTAButton>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.3em] text-gold uppercase">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button onClick={() => scrollTo(l.href)} className="text-sm text-white/65 hover:text-white">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.3em] text-gold uppercase">Policies</h4>
            <ul className="mt-5 space-y-3">
              {POLICIES.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="text-sm text-white/65 hover:text-white">{p.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.3em] text-gold uppercase">Connect</h4>
            <ul className="mt-5 space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* giant cinematic wordmark */}
        <div className="mt-20 overflow-hidden">
          <h2
            className="footer-word font-display text-[18vw] leading-none tracking-tight text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #2a2820, #C9A66B, #2a2820)',
              backgroundSize: '200% 100%',
            }}
          >
            ARCH ASSIST
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs tracking-[0.2em] text-white/40">© 2026 ARCH ASSIST · All Rights Reserved.</p>
          <p className="text-xs tracking-[0.2em] text-white/40">Designed as an architectural experience.</p>
        </div>
      </div>
    </footer>
  )
}
