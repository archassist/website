import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from './hooks/useLenis'
import Preloader from './components/Preloader'
import Entrance from './components/Entrance'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TransitionSection from "./components/TransitionSection";
import SEO from "./seo/SEO";
import Meta from "./seo/Meta";
import Schema from "./seo/Schema";

export default function App() {
  const [phase, setPhase] = useState('loading') // loading -> entrance -> site
  const entered = phase === 'site'

  // smooth scroll only runs (and is unlocked) once the user enters
  useLenis(entered)

  // lock body scroll until entered
  useEffect(() => {
    document.body.classList.toggle('no-scroll', !entered)
    return () => document.body.classList.remove('no-scroll')
  }, [entered])

  // refresh ScrollTrigger after the site mounts & fonts settle
  useEffect(() => {
    if (!entered) return
    const t = setTimeout(() => ScrollTrigger.refresh(), 300)
    return () => clearTimeout(t)
  }, [entered])

  return (
  <>
    {/* SEO */}
    <SEO />
    <Meta />
    <Schema />

    <AnimatePresence>
      {phase === "loading" && (
        <Preloader
          key="pre"
          onDone={() => setPhase("entrance")}
        />
      )}

      {phase === "entrance" && (
        <Entrance
          key="ent"
          onEnter={() => setPhase("site")}
        />
      )}
    </AnimatePresence>

    {/* Navbar */}
    {entered && <Navbar />}

    {/* Website */}
    <main
      className={
        entered
          ? "opacity-100"
          : "pointer-events-none opacity-0"
      }
    >
      <Hero />

      <TransitionSection />

      <Services />

      <Contact />

      <Footer />
    </main>
  </>
);
}
