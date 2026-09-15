import { FEATURES, PROCESS } from "@/data";
import { Icon, Reveal, SectionHeading } from "./ui";

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(253,241,220,0.9),transparent_72%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What's included"
          title="Everything a restaurant site needs."
          accent="Nothing it doesn't."
          body="No page builders, no templates recycled from a dentist's website. Each site is built around one job: getting someone who is hungry, nearby and undecided to choose you."
        />

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 110} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-ink/6 bg-white/70 p-6 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-saffron-200 hover:bg-white hover:shadow-lift">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-16 h-44 w-44 rounded-full bg-saffron-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-saffron-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-espresso to-espresso-2 text-saffron-300 shadow-[0_10px_24px_-14px_rgba(14,12,10,0.9)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={f.icon} />
                </div>

                <h3 className="relative mt-5 text-[17.5px] leading-snug font-bold tracking-[-0.02em] text-ink">
                  {f.title}
                </h3>
                <p className="relative mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  {f.body}
                </p>

                <p className="relative mt-5 border-t border-ink/7 pt-4 text-[11.5px] font-semibold tracking-[0.1em] text-saffron-600 uppercase">
                  {f.meta}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Process timeline */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="text-[1.6rem] font-extrabold tracking-[-0.035em] text-ink sm:text-[2rem]">
                From first call to first booking in{" "}
                <span className="font-display text-gradient-dark text-[1.1em] font-normal italic">
                  fourteen days
                </span>
              </h3>
              <p className="text-[14px] text-muted sm:max-w-xs sm:text-right">
                Your current site stays live the whole time. Zero downtime, zero lost rankings.
              </p>
            </div>
          </Reveal>

          <div className="relative grid gap-4 md:grid-cols-3">
            <div
              aria-hidden
              className="absolute top-[4.4rem] right-[14%] left-[14%] hidden h-px bg-[linear-gradient(90deg,transparent,rgba(233,169,74,0.5),rgba(212,113,74,0.45),transparent)] md:block"
            />
            {PROCESS.map((s, i) => (
              <Reveal key={s.step} delay={i * 130}>
                <div className="group relative h-full overflow-hidden rounded-[1.6rem] border border-ink/6 bg-gradient-to-b from-white/85 to-white/55 p-7 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="font-display grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-saffron-200 to-saffron-400 text-[16px] text-espresso transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {s.step}
                    </span>
                    <span className="rounded-full border border-ink/8 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-muted">
                      {s.days}
                    </span>
                  </div>
                  <h4 className="mt-5 text-[18px] font-bold tracking-[-0.02em] text-ink">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
