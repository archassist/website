import { useRef, useState } from 'react'
import { gsap } from 'gsap'

/**
 * Premium architectural entrance scene.
 * The logo lives inside a circular glassmorphism element and IS the button.
 * On click it scales, rotates in 3D, intensifies its glow, expands beyond the
 * viewport, blurs, triggers a white flash and morphs into the homepage.
 */
export default function Entrance({ onEnter }) {
  const root = useRef(null)
  const orb = useRef(null)
  const flash = useRef(null)
  const [entering, setEntering] = useState(false)

  const handleEnter = () => {
    if (entering) return
    setEntering(true)

    const tl = gsap.timeline({ onComplete: () => onEnter?.() })
    tl.to(orb.current, {
      scale: 1.18,
      duration: 0.25,
      ease: 'power2.in',
    })
      .to(orb.current, {
        scale: 14,
        rotateY: 28,
        rotateX: -10,
        filter: 'blur(14px)',
        duration: 1.0,
        ease: 'power3.in',
      })
      .to(
        '.entrance-glow',
        { opacity: 1, scale: 1.5, duration: 0.7, ease: 'power2.in' },
        '<'
      )
      .to(
        '.entrance-content',
        { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in' },
        '<'
      )
      .to(flash.current, { opacity: 1, duration: 0.28, ease: 'power2.in' }, '-=0.35')
      .to(root.current, { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.05')
  }

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-canvas perspective-1000"
    >
      {/* atmospheric backdrop */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div
        className="entrance-glow pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(201,166,107,0.35) 0%, rgba(201,166,107,0.06) 45%, transparent 70%)',
        }}
      />

      <div className="entrance-content relative flex flex-col items-center">
        {/* the glass orb logo — the button itself */}
        <button
          ref={orb}
          onClick={handleEnter}
          aria-label="Tap to enter ARCH ASSIST"
          className="group relative grid h-[42vmin] max-h-80 min-h-56 w-[42vmin] min-w-56 max-w-80 place-items-center rounded-full glass animate-pulseGlow preserve-3d transition-transform duration-500 hover:scale-[1.04]"
          style={{ cursor: 'pointer' }}
        >
          {/* glass reflection sweep */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute -inset-x-10 -top-1/2 h-1/2 rotate-12 bg-gradient-to-b from-white/70 to-transparent blur-md opacity-60" />
          </span>
          <span className="pointer-events-none absolute inset-3 rounded-full border border-white/40" />
          <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-gold/30" />

          <span className="animate-floaty">
            <img
              src="/assets/logo.svg"
              alt="ARCH ASSIST"
              className="h-[42%] w-[42%] mx-auto drop-shadow-[0_18px_30px_rgba(201,166,107,0.45)]"
              style={{ minWidth: 96, minHeight: 96 }}
            />
          </span>
        </button>

        <div className="mt-12 flex flex-col items-center">
          <span className="font-display text-lg tracking-[0.5em] text-ink">TAP TO ENTER</span>
          <span className="mt-3 h-px w-16 gold-line" />
          <span className="mt-4 text-[11px] tracking-[0.35em] text-muted uppercase">
            An architectural experience
          </span>
        </div>
      </div>

      {/* white flash */}
      <div ref={flash} className="pointer-events-none absolute inset-0 z-[95] bg-white opacity-0" />
    </div>
  )
}
