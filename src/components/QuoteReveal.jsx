import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/quoteReveal.css";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteReveal() {
  const section = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".word", {
        color: "#d7d2ca",
      });

      gsap.to(".word", {
        color: "#1d1d1d",
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top 75%",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.from(".gold-line", {
        scaleX: 0,
        transformOrigin: "center",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top 85%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="quote-section">
      <div className="quote-container">

        <div className="gold-line"></div>

        <h2>
          <span className="word">We</span>{" "}
          <span className="word">believe</span>{" "}
          <span className="word">every</span>{" "}
          <span className="word">student</span>{" "}
          <span className="word">already</span>{" "}
          <span className="word">has</span>{" "}
          <span className="word">the</span>{" "}
          <span className="word">idea.</span>

          <br />

          <span className="word">Our</span>{" "}
          <span className="word">work</span>{" "}
          <span className="word">is</span>{" "}
          <span className="word">to</span>{" "}
          <span className="word">give</span>{" "}
          <span className="word">it</span>{" "}
          <span className="word">clarity,</span>{" "}
          <span className="word">craft</span>{" "}
          <span className="word">and</span>{" "}
          <span className="word">the</span>{" "}
          <span className="word">confidence</span>{" "}
          <span className="word">to</span>{" "}
          <span className="word">stand</span>{" "}
          <span className="word">in</span>{" "}
          <span className="word">front</span>{" "}
          <span className="word">of</span>{" "}
          <span className="word">any</span>{" "}
          <span className="word">jury.</span>
        </h2>

      </div>
    </section>
  );
}