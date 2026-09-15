import { useState } from "react";
import { BENEFITS, IMG } from "@/data";
import { cn } from "@/utils/cn";
import { Icon, Reveal, SectionHeading, Stars } from "./ui";

const LANGS = [
  { code: "PT", flag: "🇵🇹", title: "Reservar mesa", sub: "Menu de degustação · 6 momentos" },
  { code: "EN", flag: "🇬🇧", title: "Book a table", sub: "Tasting menu · 6 courses" },
  { code: "ES", flag: "🇪🇸", title: "Reservar mesa", sub: "Menú degustación · 6 pases" },
  { code: "FR", flag: "🇫🇷", title: "Réserver une table", sub: "Menu dégustation · 6 services" },
  { code: "DE", flag: "🇩🇪", title: "Tisch reservieren", sub: "Degustationsmenü · 6 Gänge" },
  { code: "IT", flag: "🇮🇹", title: "Prenota un tavolo", sub: "Menu degustazione · 6 portate" },
];

function GoogleCard() {
  return (
    <div className="rounded-2xl border border-ink/8 bg-white p-4 shadow-soft sm:p-5">
      <div className="flex items-center gap-2 rounded-full border border-ink/8 bg-cream/60 px-3.5 py-2">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-muted" fill="none" aria-hidden>
          <path
            d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5.2-1.8L21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-[12.5px] text-ink-soft">
          restaurante perto de mim
          <span className="ml-0.5 inline-block h-3.5 w-px translate-y-0.5 animate-pulse bg-saffron-500" />
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="group relative rounded-xl border border-saffron-300/70 bg-saffron-100/50 p-3 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-soft">
          <span className="absolute -top-2 left-3 rounded-full bg-gradient-to-r from-saffron-400 to-terra-400 px-2 py-0.5 text-[9px] font-bold tracking-[0.1em] text-espresso uppercase">
            Your restaurant
          </span>
          <div className="flex items-start gap-3">
            <img
              src={IMG.dishes[1]}
              alt=""
              loading="lazy"
              className="h-11 w-11 shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-[13.5px] font-semibold text-[#1a0dab]">
                Casa Oliveira — Cozinha de fogo · Alfama
              </p>
              <p className="truncate text-[11px] text-olive-700">casaoliveira.pt › reservas</p>
              <div className="mt-1 flex items-center gap-1.5">
                <Stars className="scale-90" />
                <span className="text-[11px] text-muted">4.8 · 412 reviews · €€</span>
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {["Reserve a table", "Menu", "Directions"].map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink/10 bg-white px-2 py-0.5 text-[10px] font-medium text-ink-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {["TheFork — Top restaurants in Lisboa", "TripAdvisor — 10 best places to eat"].map((t) => (
          <div key={t} className="rounded-xl border border-ink/6 p-3 opacity-55">
            <p className="truncate text-[12.5px] text-[#1a0dab]">{t}</p>
            <p className="truncate text-[10.5px] text-muted">
              Commission 12% per cover · sponsored placement
            </p>
          </div>
        ))}
      </div>

      <p className="mt-3.5 border-t border-ink/7 pt-3 text-[11.5px] text-muted">
        We build you above the aggregators — so the booking (and the margin) stays yours.
      </p>
    </div>
  );
}

function LanguageCard() {
  const [active, setActive] = useState(1);
  const lang = LANGS[active];

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/8 bg-espresso text-white shadow-soft">
      <div className="relative">
        <img src={IMG.wine} alt="" loading="lazy" className="h-28 w-full object-cover sm:h-32" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p key={lang.code} className="animate-rise">
            <span className="font-display block text-[19px] leading-tight">{lang.title}</span>
            <span className="mt-0.5 block text-[12px] text-white/55">{lang.sub}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 p-3.5" role="tablist" aria-label="Site language">
        {LANGS.map((l, i) => (
          <button
            key={l.code}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11.5px] font-semibold transition-all duration-300",
              active === i
                ? "bg-gradient-to-r from-saffron-400 to-terra-400 text-espresso"
                : "bg-white/8 text-white/55 hover:bg-white/14 hover:text-white",
            )}
          >
            <span aria-hidden>{l.flag}</span>
            {l.code}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_55%_at_75%_15%,rgba(253,241,220,0.85),transparent_68%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What it changes"
          title="A website that earns its place on your"
          accent="balance sheet"
          body="Design is the means, not the point. Every decision we make is measured against four outcomes that show up in your covers, your margin and your reputation."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Benefit list */}
          <div className="space-y-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 110}>
                <article className="group relative flex gap-5 overflow-hidden rounded-[1.5rem] border border-ink/6 bg-white/70 p-5 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-saffron-200 hover:bg-white hover:shadow-lift sm:p-6">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -left-10 h-40 w-40 rounded-full bg-saffron-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-espresso to-espresso-2 text-saffron-300 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
                    <Icon name={b.icon} />
                  </div>
                  <div className="relative min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-[17.5px] font-bold tracking-[-0.02em] text-ink">
                        {b.title}
                      </h3>
                      <span className="rounded-full bg-olive-300/25 px-2.5 py-0.5 text-[12px] font-extrabold tracking-[-0.01em] text-olive-700">
                        {b.stat}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11.5px] font-medium tracking-[0.08em] text-muted uppercase">
                      {b.statLabel}
                    </p>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{b.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Visual proof */}
          <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={80}>
              <GoogleCard />
            </Reveal>
            <Reveal delay={160}>
              <LanguageCard />
            </Reveal>
            <Reveal delay={220}>
              <div className="flex items-center gap-4 rounded-2xl border border-ink/7 bg-white/65 p-4 backdrop-blur-xl">
                <div className="relative grid h-14 w-14 shrink-0 place-items-center">
                  <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90" aria-hidden>
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="currentColor"
                      className="text-ink/8"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="url(#g)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="97.4"
                      strokeDashoffset="1.9"
                    />
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#E9A94A" />
                        <stop offset="100%" stopColor="#6E7F52" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute text-[15px] font-extrabold text-ink">98</span>
                </div>
                <div>
                  <p className="text-[14.5px] font-bold text-ink">Google PageSpeed, mobile</p>
                  <p className="mt-0.5 text-[13px] text-ink-soft">
                    Median score across our last 30 launches. The industry average for restaurant
                    sites is 41.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
