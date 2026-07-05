import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../config/site";
import { scrollTo } from "../hooks/useLenis";
import CTAButton from "./CTAButton";
import logo from "../assets/logo/logo-black.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (href) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-4 z-[100] w-full max-w-[100vw] px-2.5 flex justify-center"
      >
        <div
          className="
            w-full
            max-w-7xl
            h-16
            rounded-full
            glass
            px-5
            md:px-7
            flex
            items-center
            justify-between
            shadow-xl
          "
        >
          {/* ---------------- LOGO ---------------- */}

          <button
            onClick={() => go("#home")}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src={logo}
              alt="ARCH ASSIST"
              className="
                h-8
                w-8
                md:h-10
                md:w-10
                object-contain
                rounded-sm
                flex-shrink-0
              "
            />

            <span
              className="
                font-display
                text-[15px]
                md:text-base
                tracking-[0.30em]
                text-ink
                whitespace-nowrap
              "
            >
              ARCH ASSIST
            </span>
          </button>

          {/* ---------------- DESKTOP NAV ---------------- */}

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="
                  group
                  relative
                  text-sm
                  tracking-wide
                  text-ink/80
                  transition-colors
                  hover:text-ink
                "
              >
                {l.label}

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-0
                    bg-gold
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </button>
            ))}
          </nav>

          {/* ---------------- CTA ---------------- */}

          <div className="hidden md:flex items-center">
            <CTAButton
              variant="solid"
              className="!px-5 !py-2.5 !text-[13px]"
            >
              Get Guidance
            </CTAButton>
          </div>

          {/* ---------------- MOBILE MENU ---------------- */}

          <button
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              flex
              h-10
              w-10
              items-center
              justify-center
              relative
              flex-shrink-0
            "
            aria-label="Menu"
          >
            <span
              className={`absolute h-[2px] w-6 bg-ink transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />

            <span
              className={`absolute h-[2px] w-6 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute h-[2px] w-6 bg-ink transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              top-24
              left-3
              right-3
              z-[99]
              rounded-3xl
              glass
              p-5
              md:hidden
            "
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.href}
                  onClick={() => go(l.href)}
                  className="
                    rounded-2xl
                    px-4
                    py-3
                    text-left
                    text-sm
                    tracking-wide
                    text-ink
                    hover:bg-white/40
                    transition
                  "
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <CTAButton
                variant="solid"
                className="w-full justify-center"
              >
                Get Guidance
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}