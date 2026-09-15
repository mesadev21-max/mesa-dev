import { useCallback, useRef, useState } from "react";
import { IMG } from "@/data";
import { cn } from "@/utils/cn";
import { AfterSite, BeforeSite, BrowserFrame, PhoneFrame, PhoneMenuScreen } from "./Mockups";
import { ArrowRight, Button, Reveal, SectionHeading } from "./ui";

/* ----------------------------- Before / after ------------------------------ */

function BeforeAfter() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(6, Math.min(94, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div className="relative">
      <div
        ref={wrapRef}
        className="group relative touch-none overflow-hidden rounded-[1.4rem] select-none sm:rounded-[1.8rem]"
        onPointerDown={(e) => {
          setDragging(true);
          (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging && setFromClientX(e.clientX)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
      >
        {/* After (base layer) */}
        <div className="shadow-screen">
          <BrowserFrame url="casaoliveira.pt">
            <AfterSite />
          </BrowserFrame>
        </div>

        {/* Before (clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden={pos < 10}
        >
          <BrowserFrame url="casa-oliveira.pt.vu/index.htm" tone="light" className="h-full">
            <BeforeSite />
          </BrowserFrame>
        </div>

        {/* Labels */}
        <span
          className={cn(
            "pointer-events-none absolute top-14 left-3 rounded-full bg-espresso/80 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-white/80 uppercase backdrop-blur transition-opacity duration-300 sm:top-16 sm:left-5",
            pos < 18 ? "opacity-0" : "opacity-100",
          )}
        >
          Before
        </span>
        <span
          className={cn(
            "pointer-events-none absolute top-14 right-3 rounded-full bg-gradient-to-r from-saffron-400 to-terra-400 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-espresso uppercase transition-opacity duration-300 sm:top-16 sm:right-5",
            pos > 82 ? "opacity-0" : "opacity-100",
          )}
        >
          After
        </span>

        {/* Handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white/90 shadow-[0_0_24px_rgba(255,255,255,0.65)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-white text-espresso shadow-lift transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
              <path
                d="M9.5 8 6 12l3.5 4M14.5 8l3.5 4-3.5 4"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-2">
        <label htmlFor="ba-range" className="sr-only">
          Drag to compare the old website with the new one
        </label>
        <input
          id="ba-range"
          type="range"
          min={6}
          max={94}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="h-1.5 w-full max-w-md cursor-ew-resize appearance-none rounded-full bg-ink/10 accent-saffron-500"
        />
        <p className="text-[12.5px] text-muted">
          Drag the handle — real redesign for Casa Oliveira, Lisboa
        </p>
      </div>
    </div>
  );
}

/* --------------------------------- Section --------------------------------- */

const GALLERY = [
  { src: IMG.bar, label: "Wine bar · Guimarães", tag: "Events page" },
  { src: IMG.inn, label: "Solar dos Figos · Alentejo", tag: "Rooms + table" },
  { src: IMG.terrace, label: "Maré Alta · Algarve", tag: "6 languages" },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="relative scroll-mt-24 overflow-hidden bg-espresso py-20 text-white sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -top-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(233,169,74,0.24),transparent_66%)] blur-3xl" />
        <div className="animate-drift absolute -right-20 -bottom-48 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(212,113,74,0.22),transparent_66%)] blur-3xl [animation-delay:-12s]" />
        <div className="grid-lines absolute inset-0 opacity-50" />
        <div className="noise absolute inset-0 opacity-[0.18] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Before / After"
          title="The same restaurant."
          accent="A completely different business."
          body="Most restaurant sites were built once, years ago, by someone's nephew. Here's what changes when the site is designed to sell."
        />

        <Reveal delay={120} className="mt-14">
          <BeforeAfter />
        </Reveal>

        {/* Outcome chips */}
        <Reveal delay={160}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { k: "Bounce rate", v: "68% → 22%", d: "Visitors stay and read the menu" },
              { k: "Mobile bookings", v: "0 → 61/wk", d: "Booking button on every screen" },
              { k: "Google position", v: "#14 → #2", d: "For 'restaurante Alfama'" },
            ].map((o) => (
              <div
                key={o.k}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-saffron-300/40 hover:bg-white/10"
              >
                <p className="text-[11px] font-semibold tracking-[0.16em] text-white/40 uppercase">
                  {o.k}
                </p>
                <p className="mt-1.5 text-[22px] font-extrabold tracking-[-0.03em] text-white">
                  {o.v}
                </p>
                <p className="mt-1 text-[13px] text-white/50">{o.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Device showcase */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <Reveal>
            <div>
              <h3 className="text-[1.7rem] font-extrabold tracking-[-0.035em] sm:text-[2.1rem]">
                Designed on the phone first — because that&apos;s where your guests are standing.
              </h3>
              <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-white/60">
                Elegant menus that are actually readable without pinching. A dish gallery that makes
                people hungry. A reservation button that never leaves the screen. Every element is
                placed to shorten the distance between &ldquo;looks good&rdquo; and
                &ldquo;booked&rdquo;.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  {
                    t: "Sticky reservation bar",
                    d: "Always one thumb-tap away, on every page and section.",
                  },
                  {
                    t: "Menu with real photography",
                    d: "Dishes, prices, allergens and daily specials you edit yourself.",
                  },
                  {
                    t: "Language switcher",
                    d: "Guests land in their own language — automatically, by browser.",
                  },
                ].map((item, i) => (
                  <li
                    key={item.t}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-400 hover:-translate-y-0.5 hover:border-saffron-300/40 hover:bg-white/10"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-saffron-300 to-terra-400 text-[12px] font-bold text-espresso transition-transform duration-400 group-hover:scale-110">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold">{item.t}</span>
                      <span className="block text-[13.5px] text-white/50">{item.d}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <Button href="#contact" size="lg" className="mt-8">
                See how your site could look
                <ArrowRight />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto flex max-w-sm justify-center gap-4 sm:max-w-md">
              <PhoneFrame className="animate-float w-[11rem] sm:w-[13rem]">
                <PhoneMenuScreen />
              </PhoneFrame>
              <div className="hidden pt-14 sm:block">
                <PhoneFrame className="animate-float w-[11rem] [animation-delay:-4s]">
                  <div className="relative text-white">
                    <img
                      src={IMG.wine}
                      alt=""
                      loading="lazy"
                      className="h-24 w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-espresso/60 to-transparent" />
                    <div className="p-3">
                      <p className="text-[7px] tracking-[0.26em] text-saffron-300 uppercase">
                        Reservar
                      </p>
                      <p className="font-display mt-0.5 text-[13px]">Sexta, 14 Março</p>
                      <div className="mt-2 grid grid-cols-4 gap-1">
                        {["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"].map(
                          (t, i) => (
                            <span
                              key={t}
                              className={cn(
                                "rounded-md py-1 text-center text-[7px] font-semibold",
                                i === 3
                                  ? "bg-saffron-400 text-espresso"
                                  : i === 5
                                    ? "bg-white/5 text-white/25 line-through"
                                    : "bg-white/8 text-white/60",
                              )}
                            >
                              {t}
                            </span>
                          ),
                        )}
                      </div>
                      <div className="mt-2.5 flex items-center justify-between rounded-lg bg-white/6 px-2 py-1.5">
                        <span className="text-[7.5px] text-white/50">Pessoas</span>
                        <span className="text-[9px] font-bold">4</span>
                      </div>
                      <div className="mt-2 rounded-full bg-gradient-to-r from-saffron-400 to-terra-400 py-1.5 text-center text-[8.5px] font-bold text-espresso">
                        Confirmar reserva
                      </div>
                      <p className="mt-1.5 text-center text-[6.5px] text-white/35">
                        Sem comissões · Confirmação imediata
                      </p>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mini gallery */}
        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.label} delay={i * 110}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-[1.4rem] border border-white/10">
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="h-full w-full scale-105 object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                  <span className="font-display text-[15px] text-white">{g.label}</span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/80 backdrop-blur transition-colors duration-400 group-hover:border-saffron-300/60 group-hover:text-saffron-200">
                    {g.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
