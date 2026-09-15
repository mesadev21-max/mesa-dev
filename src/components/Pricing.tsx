import { useState } from "react";
import { PLANS } from "@/data";
import { cn } from "@/utils/cn";
import { ArrowRight, Button, Check, Reveal, SectionHeading } from "./ui";

export default function Pricing() {
  const [installments, setInstallments] = useState(false);

  return (
    <section id="pricing" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(243,236,226,0.9),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Packages"
          title="One project fee. No agency retainers,"
          accent="no surprises."
          body="Each package is a fixed price agreed before we start. Hosting and care plans are optional and transparent — you'll never receive an invoice you didn't approve."
        />

        <Reveal delay={170}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3">
              <span
                className={cn(
                  "text-[13.5px] font-semibold transition-colors",
                  !installments ? "text-ink" : "text-muted",
                )}
              >
                Pay once
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={installments}
                aria-label="Show 3-month installment pricing"
                onClick={() => setInstallments((v) => !v)}
                className={cn(
                  "relative h-8 w-[3.75rem] rounded-full border transition-colors duration-400",
                  installments
                    ? "border-transparent bg-gradient-to-r from-saffron-400 to-terra-400"
                    : "border-ink/10 bg-ink/10",
                )}
              >
                <span
                  className={cn(
                    "absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-soft transition-transform duration-400 ease-out",
                    installments && "translate-x-7",
                  )}
                />
              </button>
              <span
                className={cn(
                  "text-[13.5px] font-semibold transition-colors",
                  installments ? "text-ink" : "text-muted",
                )}
              >
                3× interest-free
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const shown = installments ? Math.round(plan.price / 3) : plan.price;
            return (
              <Reveal key={plan.name} delay={i * 120} className="h-full">
                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] p-7 transition-all duration-500 sm:p-8",
                    plan.featured
                      ? "bg-espresso text-white shadow-lift lg:-translate-y-4 lg:scale-[1.02] hover:lg:-translate-y-6"
                      : "border border-ink/7 bg-white/70 shadow-soft backdrop-blur-xl hover:-translate-y-1.5 hover:border-saffron-200 hover:bg-white hover:shadow-lift",
                  )}
                >
                  {plan.featured && (
                    <>
                      <div
                        aria-hidden
                        className="animate-drift pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(233,169,74,0.4),transparent_66%)] blur-3xl"
                      />
                      <div
                        aria-hidden
                        className="noise absolute inset-0 opacity-[0.18] mix-blend-overlay"
                      />
                      <span className="relative mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10.5px] font-bold tracking-[0.16em] text-saffron-300 uppercase">
                        Most chosen by restaurants
                      </span>
                    </>
                  )}

                  <div className="relative">
                    <h3
                      className={cn(
                        "font-display text-[26px] leading-none",
                        plan.featured ? "text-white" : "text-ink",
                      )}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 text-[13.5px] leading-snug",
                        plan.featured ? "text-white/60" : "text-muted",
                      )}
                    >
                      {plan.tagline}
                    </p>

                    <div className="mt-6 flex items-end gap-1.5">
                      <span
                        className={cn(
                          "text-[2.9rem] leading-none font-extrabold tracking-[-0.05em] tabular-nums",
                          plan.featured ? "text-white" : "text-ink",
                        )}
                      >
                        €{shown.toLocaleString("en-US")}
                      </span>
                      <span
                        className={cn(
                          "pb-1.5 text-[13px] font-medium",
                          plan.featured ? "text-white/50" : "text-muted",
                        )}
                      >
                        {installments ? "× 3 months" : "one-off"}
                      </span>
                    </div>
                    <p
                      className={cn(
                        "mt-2 text-[12.5px]",
                        plan.featured ? "text-saffron-300" : "text-saffron-600",
                      )}
                    >
                      + €{plan.monthly}/month hosting &amp; care plan (optional)
                    </p>

                    <p
                      className={cn(
                        "mt-4 rounded-xl px-3 py-2 text-[12px] font-medium",
                        plan.featured
                          ? "bg-white/8 text-white/65"
                          : "bg-cream/70 text-ink-soft",
                      )}
                    >
                      Best for: {plan.best}
                    </p>
                  </div>

                  <ul className="relative mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check
                          className={cn(
                            "mt-0.5",
                            plan.featured ? "text-saffron-300" : "text-saffron-500",
                          )}
                        />
                        <span
                          className={cn(
                            "text-[14px] leading-snug",
                            plan.featured ? "text-white/80" : "text-ink-soft",
                          )}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-8">
                    <Button
                      href="#contact"
                      size="lg"
                      variant={plan.featured ? "primary" : "outline"}
                      className="w-full"
                    >
                      {plan.cta}
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160}>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] text-muted">
            {[
              "Fixed price, agreed up front",
              "You own the site and the domain",
              "Free migration from your current provider",
              "Cancel the care plan anytime",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="text-saffron-500" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 text-center text-[13.5px] text-ink-soft">
            Running a group, a hotel chain or something unusual?{" "}
            <a
              href="#contact"
              className="font-semibold text-saffron-600 underline decoration-saffron-300 underline-offset-4 transition-colors hover:text-terra-500"
            >
              Ask for a custom quote
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
