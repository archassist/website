import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CONTACT, FAQS } from "../config/site";

import CTAButton from "./CTAButton";
import FAQItem from "./FAQItem";
import ModelViewer from "./ModelViewer";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".contact-bg", {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".contact-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      });

      gsap.from(".faq-row", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={root}
      className="relative overflow-hidden py-16 md:py-28"
    >
      {/* Background */}
      <div className="contact-bg absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/60 to-canvas" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}
        <div className="mb-10 md:mb-16 text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase text-gold">
            Begin the conversation
          </p>

          <h2 className="mt-4 font-display text-4xl md:text-6xl text-ink">
            Let's design your next move
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ================= LEFT ================= */}

          <div className="contact-card glass rounded-3xl overflow-hidden p-5 md:p-9">

            <h3 className="font-display text-3xl text-ink">
              Talk to Your Assistant 
            </h3>

            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
              Send your brief, sketches and deadline on WhatsApp.
              We'll reply with a clear roadmap and a fair quotation,
              usually within 24 hours.
            </p>

            <div className="mt-6">
              <CTAButton
                variant="gold"
                className="!w-full sm:!w-auto !px-8 !py-4 !text-base"
              >
                Chat on WhatsApp
              </CTAButton>
            </div>

            {/* MODEL VIEWER */}

            <div
              className="
                relative
                mt-8
                h-[220px]
                sm:h-[280px]
                md:h-[360px]
                lg:h-[420px]
                overflow-hidden
                rounded-[28px]
              "
            >
              <ModelViewer />
            </div>

            {/* CONTACT INFO */}

            <dl
              className="
                mt-6
                border-t
                border-gold/10
                pt-6
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-6
              "
            >
              <div>
                <dt className="text-[11px] tracking-[0.3em] uppercase text-gold">
                  Email
                </dt>

                <dd className="mt-2 text-sm text-ink">
                  {CONTACT.email}
                </dd>
              </div>

              

              <div>
                <dt className="text-[11px] tracking-[0.3em] uppercase text-gold">
                  Studio
                </dt>

                <dd className="mt-2 text-sm text-ink">
                  {CONTACT.studio}
                </dd>
              </div>
            </dl>

          </div>

          {/* ================= RIGHT ================= */}

          <div
            id="faqs"
            className="faq-list space-y-3"
          >
            {FAQS.map((faq, index) => (
              <div
                key={faq.q}
                className="faq-row"
              >
                <FAQItem
                  item={faq}
                  index={index}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}