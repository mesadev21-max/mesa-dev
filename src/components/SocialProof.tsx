import { CLIENTS, STATS } from "@/data";
import { useCountUp, useInView } from "@/lib/hooks";
import { Reveal, Stars } from "./ui";

function Stat({ value, suffix, label }: (typeof STATS)[number]) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const n = useCountUp(value, 1700, inView);
  return (
    <div ref={ref} className="group relative px-3 text-center">
      <p className="text-[2rem] leading-none font-extrabold tracking-[-0.045em] text-ink tabular-nums sm:text-[2.4rem]">
        {n}
        <span className="text-gradient-dark">{suffix}</span>
      </p>
      <p className="mx-auto mt-2 max-w-[18ch] text-[13px] leading-snug text-muted">{label}</p>
      <span
        aria-hidden
        className="absolute inset-x-8 -bottom-2 h-px scale-x-0 bg-gradient-to-r from-transparent via-saffron-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </div>
  );
}

export default function SocialProof() {
  const row = [...CLIENTS, ...CLIENTS];

  return (
    <section aria-label="Clients and results" className="relative -mt-2 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold tracking-[0.24em] text-muted uppercase">
            Trusted by kitchens, dining rooms and guesthouses
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="marquee-mask mt-7 overflow-hidden">
            <div className="animate-marquee flex w-max items-stretch gap-4 pr-4 hover:[animation-play-state:paused]">
              {row.map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="group flex min-w-[13.5rem] items-center gap-3 rounded-2xl border border-ink/7 bg-white/60 px-4 py-3 backdrop-blur transition-all duration-400 hover:-translate-y-1 hover:border-saffron-300 hover:bg-white hover:shadow-soft"
                >
                  <span className="font-display grid h-9 w-9 shrink-0 place-items-center rounded-full border border-saffron-200 bg-saffron-100 text-[13px] text-saffron-600 transition-colors duration-400 group-hover:bg-saffron-300 group-hover:text-espresso">
                    {c.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="font-display block truncate text-[15px] leading-tight text-ink">
                      {c.name}
                    </span>
                    <span className="block truncate text-[11px] text-muted">{c.type}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={130}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-ink/6 bg-white/65 shadow-soft backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-y-8 p-7 sm:p-9 lg:grid-cols-4 lg:divide-x lg:divide-ink/8">
              {STATS.map((s) => (
                <Stat key={s.label} {...s} />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-2.5 border-t border-ink/7 bg-gradient-to-r from-saffron-100/70 via-white/40 to-cream/60 px-6 py-4 text-center sm:flex-row sm:gap-4">
              <Stars />
              <p className="text-[13.5px] text-ink-soft">
                <span className="font-semibold text-ink">4.9 out of 5</span> from 86 verified owner
                reviews on Google — and a 100% on-time delivery record.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
