import { useRef } from "react";
import { TESTIMONIALS } from "@/data";
import { Reveal, SectionHeading, Stars } from "./ui";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  };

  return (
    <section aria-label="Client testimonials" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_15%_10%,rgba(253,241,220,0.9),transparent_62%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Owner stories"
            title="They didn't want a website."
            accent="They wanted a fuller dining room."
          />
          <Reveal delay={140}>
            <div className="flex items-center gap-2">
              {([-1, 1] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => scrollBy(dir)}
                  aria-label={dir === -1 ? "Previous testimonials" : "Next testimonials"}
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-saffron-300 hover:bg-white active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                    <path
                      d={dir === -1 ? "M14.5 6 8.5 12l6 6" : "M9.5 6l6 6-6 6"}
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div
            ref={trackRef}
            className="hide-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8"
          >
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="group relative flex w-[85vw] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[1.6rem] border border-ink/6 bg-white/75 p-7 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-saffron-200 hover:bg-white hover:shadow-lift sm:w-[25rem]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full bg-saffron-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="font-display absolute top-2 right-6 text-[64px] leading-none text-saffron-200 transition-transform duration-500 group-hover:scale-110"
                >
                  &rdquo;
                </span>

                <div className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <Stars />
                    <span className="rounded-full bg-olive-300/25 px-2.5 py-1 text-[11px] font-bold text-olive-700">
                      {t.metric}
                    </span>
                  </div>
                  <blockquote className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
                    {t.quote}
                  </blockquote>
                </div>

                <figcaption className="relative mt-7 flex items-center gap-3 border-t border-ink/7 pt-5">
                  <img
                    src={t.face}
                    alt=""
                    loading="lazy"
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-bold tracking-[-0.01em] text-ink">
                      {t.name}
                    </p>
                    <p className="truncate text-[13px] text-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-3 text-[12.5px] text-muted">Swipe or drag to read more →</p>
        </Reveal>
      </div>
    </section>
  );
}
