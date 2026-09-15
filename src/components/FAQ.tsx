import { useState } from "react";
import { FAQS } from "@/data";
import { cn } from "@/utils/cn";
import { ArrowRight, Button, Eyebrow, Reveal } from "./ui";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-balance text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.035em] text-ink sm:text-[2.6rem]">
              The things owners ask us{" "}
              <span className="font-display text-gradient-dark text-[1.12em] font-normal italic">
                before signing
              </span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-4 max-w-sm text-[15.5px] leading-relaxed text-ink-soft">
              Can&apos;t find your answer? Send us a message — a real person from the team replies,
              usually within a couple of hours.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-7 rounded-[1.4rem] border border-ink/7 bg-white/70 p-5 shadow-soft backdrop-blur-xl">
              <p className="text-[14px] font-bold text-ink">Prefer to talk it through?</p>
              <p className="mt-1 text-[13.5px] text-ink-soft">
                Book a 15-minute call. We&apos;ll open your current site together and tell you
                honestly what&apos;s worth fixing.
              </p>
              <Button href="#contact" size="md" variant="outline" className="mt-4 w-full">
                Book a 15-min call
                <ArrowRight />
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-[1.3rem] border transition-all duration-500",
                    isOpen
                      ? "border-saffron-200 bg-white shadow-lift"
                      : "border-ink/7 bg-white/60 backdrop-blur-xl hover:border-ink/15 hover:bg-white/85",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="text-[15.5px] font-semibold tracking-[-0.015em] text-ink sm:text-[16.5px]">
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-400",
                          isOpen
                            ? "rotate-180 border-transparent bg-gradient-to-br from-saffron-400 to-terra-400 text-espresso"
                            : "border-ink/12 text-ink-soft",
                        )}
                      >
                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden>
                          <path
                            d="m5 8 5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 text-[14.5px] leading-relaxed text-ink-soft sm:px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
