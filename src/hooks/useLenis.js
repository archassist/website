import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Initializes Lenis smooth scrolling and syncs it with GSAP ScrollTrigger.
 * `enabled` lets us hold scrolling at the lock until the user enters the site.
 */
export function useLenis(enabled = true) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduce,
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.refresh()

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])

  useEffect(() => {
    const lenis = window.__lenis
    if (!lenis) return
    if (enabled) lenis.start()
    else lenis.stop()
  }, [enabled])
}

export function scrollTo(target) {
  const lenis = window.__lenis
  if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 })
  else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}
