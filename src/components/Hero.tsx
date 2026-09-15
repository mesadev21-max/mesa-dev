import { useEffect, useRef, useState } from "react";
import { FACES } from "@/data";
import { useCountUp, useInView } from "@/lib/hooks";
import { cn } from "@/utils/cn";
import { AfterSite, BrowserFrame, PhoneFrame, PhoneMenuScreen } from "./Mockups";
import { ArrowRight, Button, Eyebrow, Stars } from "./ui";

function Metric({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.6 });
  const n = useCountUp(value, 1700, inView);
  return (
    <div ref={ref}>
      <p className="text-[26px] leading-none font-extrabold tracking-[-0.04em] text-white tabular-nums sm:text-[30px]">
        {prefix}
        {n}
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className="mt-1.5 text-[12.5px] leading-snug text-white/45">{label}</p>
    </div>
  );
}

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setTilt({
        x: ((e.clientX - r.left) / r.width - 0.5) * 2,
        y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-espresso pt-28 pb-16 text-white sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -top-48 -left-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(233,169,74,0.28),transparent_66%)] blur-3xl" />
        <div className="animate-drift absolute -top-24 right-[-14rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(212,113,74,0.26),transparent_66%)] blur-3xl [animation-delay:-11s]" />
        <div className="animate-drift absolute bottom-[-20rem] left-1/4 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(110,127,82,0.22),transparent_66%)] blur-3xl [animation-delay:-18s]" />
        <div className="grid-lines absolute inset-0 opacity-60" />
        <div className="noise absolute inset-0 opacity-[0.17] mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ivory" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
        {/* Copy column */}
        <div className="flex flex-col items-start">
          <div className="animate-rise">
            <Eyebrow tone="dark">Websites for restaurants, inns &amp; guesthouses</Eyebrow>
          </div>

          <h1
            className="animate-rise mt-6 text-balance text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.042em] sm:text-[3.6rem] lg:text-[4.1rem]"
            style={{ animationDelay: "90ms" }}
          >
            Your website should
            <br className="hidden sm:block" />{" "}
            <span className="font-display text-gradient text-[1.1em] font-normal italic">
              fill tables
            </span>
            , not just exist.
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-pretty text-[16.5px] leading-relaxed text-white/60 sm:text-[18px]"
            style={{ animationDelay: "180ms" }}
          >
            Mesa Dev&apos;s designs and rebuilds restaurant websites that turn curious visitors into
            booked tables and paid orders — with a menu you control, reservations wired in, and
            local SEO that puts you above the aggregators.
          </p>

          <div
            className="animate-rise mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "260ms" }}
          >
            <Button href="#contact" size="lg" className="w-full sm:w-auto">
              Request a free proposal
              <ArrowRight />
            </Button>
            <Button href="#showcase" variant="outline-dark" size="lg" className="w-full sm:w-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-saffron-300" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron-400" />
              </span>
              See how your site could look
            </Button>
          </div>

          <p
            className="animate-rise mt-4 text-[13px] text-white/40"
            style={{ animationDelay: "320ms" }}
          >
            Free audit of your current site · No obligation · Answer within 24h
          </p>

          {/* Inline proof */}
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/8 pt-7"
            style={{ animationDelay: "400ms" }}
          >
            <Metric value={140} suffix="+" label="sites delivered" />
            <span aria-hidden className="hidden h-8 w-px bg-white/10 sm:block" />
            <Metric value={42} suffix="%" prefix="+" label="more direct bookings" />
            <span aria-hidden className="hidden h-8 w-px bg-white/10 sm:block" />
            <Metric value={14} suffix=" days" label="to launch" />
          </div>

          <div
            className="animate-rise mt-7 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "470ms" }}
          >
            <div className="flex -space-x-2.5">
              {FACES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-espresso object-cover transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                  style={{ zIndex: FACES.length - i }}
                />
              ))}
            </div>
            <div className="text-[13px]">
              <Stars />
              <p className="text-white/55">
                <span className="font-semibold text-white">4.9/5</span> from 86 owners across
                Portugal &amp; Spain
              </p>
            </div>
          </div>
        </div>

        {/* Visual column */}
        <div
          ref={stageRef}
          className="animate-rise relative mx-auto w-full max-w-xl lg:max-w-none"
          style={{ perspective: "1400px", animationDelay: "240ms" }}
        >
          <div
            className="relative transition-transform duration-500 ease-out"
            style={{
              transform: `rotateY(${tilt.x * 4.5}deg) rotateX(${-tilt.y * 4.5}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              aria-hidden
              className="animate-spin-slow absolute -inset-10 rounded-[3rem] bg-[conic-gradient(from_0deg,rgba(233,169,74,0.3),rgba(212,113,74,0.28),rgba(110,127,82,0.22),rgba(233,169,74,0.3))] opacity-60 blur-3xl"
            />

            {/* Desktop mockup */}
            <div className="relative shadow-screen" style={{ transform: "translateZ(40px)" }}>
              <BrowserFrame url="casaoliveira.pt">
                <AfterSite />
              </BrowserFrame>
            </div>

            {/* Phone mockup */}
            <div
              className="animate-float absolute -bottom-10 -left-4 w-[7.5rem] sm:-left-10 sm:w-[9.5rem]"
              style={{ transform: "translateZ(90px)" }}
            >
              <PhoneFrame>
                <PhoneMenuScreen />
              </PhoneFrame>
            </div>

            {/* Floating stat cards */}
            <div
              className="animate-float glass-dark absolute -top-6 -right-2 rounded-2xl px-4 py-3 sm:-right-8"
              style={{ transform: "translateZ(120px)", animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-olive-500/25 text-olive-300">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
                    <path
                      d="M4 17.5 9.5 12l3.5 3.5L20 8m0 0h-4.5M20 8v4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.14em] text-white/45 uppercase">
                    Reservations
                  </p>
                  <p className="text-[15px] font-bold">+68 / week</p>
                </div>
              </div>
            </div>

            <div
              className="animate-float glass-dark absolute top-1/2 -right-3 hidden rounded-2xl px-4 py-3 sm:block lg:-right-10"
              style={{ transform: "translateZ(100px)", animationDelay: "2.4s" }}
            >
              <p className="text-[10px] tracking-[0.14em] text-white/45 uppercase">PageSpeed</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="relative grid h-9 w-9 place-items-center rounded-full border-2 border-olive-300/70 text-[12px] font-bold text-olive-300">
                  98
                </span>
                <span className="text-[11px] leading-tight text-white/55">
                  Loads in
                  <br />
                  1.2 seconds
                </span>
              </div>
            </div>

            <div
              className="animate-float glass-dark absolute -bottom-6 right-4 rounded-2xl px-3.5 py-2.5 sm:right-10"
              style={{ transform: "translateZ(80px)", animationDelay: "3.1s" }}
            >
              <div className="flex items-center gap-2">
                {["PT", "EN", "ES", "FR"].map((l, i) => (
                  <span
                    key={l}
                    className={cn(
                      "rounded-md px-1.5 py-0.5 text-[9px] font-bold",
                      i === 1 ? "bg-saffron-400 text-espresso" : "bg-white/10 text-white/55",
                    )}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div
            aria-hidden
            className="mx-auto mt-6 h-16 w-[85%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(233,169,74,0.22),transparent_70%)] blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}
