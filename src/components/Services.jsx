import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "../config/site";
import Asset from "./Asset";
import CTAButton from "./CTAButton";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const root = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const progress = useRef(0);

  const [active, setActive] = useState(0);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  /* -----------------------------
     CARD LAYOUT
  ------------------------------*/

  const layout = (p) => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const offset = i - p;
      const abs = Math.abs(offset);

      gsap.set(card, {
        xPercent: -50,
        yPercent: -50,

        x: offset * 320,
        z: -abs * 420,

        rotateY: -offset * 16,

        scale: Math.max(0.55, 1 - abs * 0.14),

        opacity: abs > 3 ? 0 : 1 - abs * 0.28,

        filter: `blur(${abs * 2}px)`,

        zIndex: 100 - Math.round(abs * 10),
      });
    });
  };

  /* -----------------------------
      GSAP
  ------------------------------*/

  useEffect(() => {
    const ctx = gsap.context(() => {
      layout(0);

      const total = SERVICES.length - 1;

      ScrollTrigger.create({
  trigger: root.current,

  start: "top top",

  end: () => {
    if (window.innerWidth < 640) {
      return "+=3200";
    }

    if (window.innerWidth < 1024) {
      return "+=4200";
    }

    return `+=${SERVICES.length * 120}%`;
  },

  pin: true,

  pinSpacing: true,

  anticipatePin: 1,

  invalidateOnRefresh: true,

  scrub: 0.5,

  onUpdate: (self) => {
    const p = self.progress * total;

    progress.current = p;

    layout(p);

    setActive(Math.round(p));
  },
});

      gsap.to(".svc-bg-layer", {
        backgroundPositionY: "40%",
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  /* -----------------------------
      PARALLAX
  ------------------------------*/

  const onMove = (e) => {
    const rect =
      trackRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouse.current.x =
      ((e.clientX - rect.left) / rect.width - 0.5) *
      2;

    mouse.current.y =
      ((e.clientY - rect.top) / rect.height - 0.5) *
      2;

    gsap.to(trackRef.current, {
      rotateY: mouse.current.x * 6,
      rotateX: -mouse.current.y * 5,
      duration: 0.8,
      ease: "power2.out",
      transformPerspective: 1400,
    });
  };

  const svc = SERVICES[active];

  return (
    <section
  id="services"
  ref={root}
  className="relative overflow-x-clip bg-[#100f0c] text-white"
>
  <div
    className="
      svc-pin
      relative
      flex
      min-h-screen
      lg:h-screen
      items-start
      lg:items-center
      overflow-visible
      py-12
      lg:py-0
    "
  >
    {/* ================= BACKGROUND VIDEO ================= */}

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
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        />
      ))}
    </div>

    {/* Overlay */}

    <div className="absolute inset-0 z-10 bg-black/65" />

    {/* Blueprint */}

    <div className="absolute inset-0 z-20 svc-bg-layer blueprint-grid-dark opacity-60" />

    {/* Golden glow */}

    <div
      className="absolute inset-0 z-20"
      style={{
        background:
          "radial-gradient(120% 80% at 30% 20%, rgba(201,166,107,.18), transparent 55%), radial-gradient(100% 90% at 80% 90%, rgba(40,60,80,.25), transparent 60%)",
      }}
    />

    {/* Light beams */}

    <div className="pointer-events-none absolute -top-1/3 left-1/4 z-20 h-[140%] w-40 rotate-12 bg-gradient-to-b from-gold/12 to-transparent blur-2xl" />

    <div className="pointer-events-none absolute -top-1/3 right-1/3 z-20 h-[140%] w-24 -rotate-12 bg-gradient-to-b from-white/8 to-transparent blur-2xl" />

    {/* ================= CONTENT ================= */}

    <div
      className="
        relative
        z-30
        mx-auto
        grid
        w-full
        max-w-7xl
        grid-cols-1
        items-start
        gap-4
        px-5
        sm:px-8
        lg:grid-cols-12
      "
    >
      {/* ================= LEFT ================= */}

      <div className="lg:col-span-7 lg:-ml-20">
        <div className="mb-5 flex items-center gap-4">
          <span className="text-[11px] tracking-[0.4em] text-gold uppercase">
            The Exhibition
          </span>

          <span className="gold-line h-px w-16" />
        </div>

        <div
          className="
            relative
            h-[220px]
            min-[390px]:h-[260px]
            sm:h-[380px]
            lg:h-[72vh]
            perspective-1000
          "
          onMouseMove={onMove}
          onMouseLeave={() =>
            gsap.to(trackRef.current, {
              rotateX: 0,
              rotateY: 0,
              duration: 1,
              ease: "power3.out",
            })
          }
        >
          <div
            ref={trackRef}
            className="absolute inset-0 preserve-3d"
          >
            {SERVICES.map((s, i) => (
              <article
                key={s.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[220px]
                  w-[170px]
                  min-[390px]:h-[260px]
                  min-[390px]:w-[190px]
                  sm:h-[380px]
                  sm:w-[280px]
                  lg:h-[70vh]
                  lg:w-[550px]
                  overflow-hidden
                  rounded-[2rem]
                  preserve-3d
                "
                style={{
                  boxShadow:
                    "0 40px 90px -30px rgba(0,0,0,.8)",
                  border:
                    "1px solid rgba(201,166,107,.25)",
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
                <div
                  className="
                    absolute
                    top-0
                    right-0
                    rounded-2xl
                    border border-white/10
                    bg-white/10
                    backdrop-blur-md
                    px-4
                    py-2.5
                    shadow-[5px_10px_25px_rgba(0,0,0,.35)]">
                      <p className="text-[10px] tracking-[0.4em] uppercase text-black/55">
  PRICE
</p>
  <h4 className="font-display font-semibold text-2xl lg:text-3xl text-[#222222] leading-none">
  {s.price}
</h4>
</div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${s.accent}40, transparent 60%)`,
                  }}
                />

                <div className="absolute left-5 top-5 font-display text-sm tracking-[0.3em] text-white/80">
                  {s.id}
                </div>

                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-display text-2xl leading-tight">
                    {s.title}
                  </h3>

                  <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-white/60">
                    {s.tag}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Progress */}

        <div className="mt-6 flex items-center gap-2">
          {SERVICES.map((s, i) => (
            <span
              key={s.id}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === active
                  ? "w-10 bg-gold"
                  : "w-4 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
            {/* ================= RIGHT PANEL ================= */}

      <div
        className="
          mt-2
          lg:mt-0
          lg:col-span-5
          lg:pl-28
          xl:pl-40
        "
      >
        <div key={svc.id} className="svc-panel">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-gold/90">
              {svc.id}
            </span>

            <span className="text-[11px] tracking-[0.35em] uppercase text-white/50">
              Service
            </span>
          </div>

          <h2 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl leading-tight">
            {svc.title}
          </h2>

          <p className="mt-2 text-[12px] tracking-[0.25em] uppercase text-gold/80">
            {svc.tag}
          </p>

          <p className="mt-4 max-w-md text-sm lg:text-base leading-relaxed text-white/70">
            {svc.blurb}
          </p>

          <ul className="mt-4 space-y-2 lg:mt-6 lg:space-y-3">
            {svc.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 lg:mt-9">
            <CTAButton
              variant="gold"
              message={`Hi ARCH ASSIST! I'd like guidance on ${svc.title} for my architecture project.`}
            >
              Enquire about {svc.title}
            </CTAButton>
          </div>
        </div>

        {/* Progress Text */}

        <p className="hidden sm:block mt-6 text-[11px] tracking-[0.3em] uppercase text-white/30">
          Scroll to walk the exhibition · {active + 1} / {SERVICES.length}
        </p>
      </div>
    </div>
  </div>
</section>
  );
}