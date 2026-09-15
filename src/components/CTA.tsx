import { useState } from "react";
import { FACES } from "@/data";
import { cn } from "@/utils/cn";
import { ArrowRight, Button, Check, Eyebrow, Reveal } from "./ui";

const VENUE_TYPES = ["Restaurant", "Guesthouse / Inn", "Café / Bistro", "Hotel with restaurant"];

export default function CTA() {
  const [sent, setSent] = useState(false);
  const [type, setType] = useState(0);
  const [form, setForm] = useState({ name: "", venue: "", email: "", site: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const field =
    "w-full rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-[14.5px] text-white placeholder:text-white/35 transition-colors duration-300 focus:border-saffron-300/60 focus:bg-white/10 focus:outline-none";

  return (
    <section id="contact" className="relative scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-espresso text-white shadow-lift sm:rounded-[2.6rem]">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="animate-drift absolute -top-44 -left-28 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(233,169,74,0.4),transparent_66%)] blur-3xl" />
            <div className="animate-drift absolute -right-24 -bottom-44 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(212,113,74,0.34),transparent_66%)] blur-3xl [animation-delay:-10s]" />
            <div className="grid-lines absolute inset-0 opacity-50" />
            <div className="noise absolute inset-0 opacity-[0.18] mix-blend-overlay" />
          </div>

          <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-16">
            {/* Pitch */}
            <div>
              <Eyebrow tone="dark">Free proposal · No obligation</Eyebrow>

              <h2 className="mt-6 text-balance text-[2.2rem] leading-[1.05] font-extrabold tracking-[-0.04em] sm:text-[3rem] lg:text-[3.3rem]">
                See how your restaurant
                <br />
                <span className="font-display text-gradient text-[1.1em] font-normal italic">
                  could look online.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-pretty text-[16px] leading-relaxed text-white/60">
                Tell us about your place and within 48 hours you&apos;ll receive a free audit of
                your current site plus a real design mockup of your new homepage — yours to keep,
                whether you hire us or not.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "A visual mockup of your new homepage",
                  "An audit of your Google visibility and page speed",
                  "A fixed price and a launch date, in writing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] text-white/75">
                    <Check className="mt-0.5 text-saffron-300" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-white/8 pt-7">
                <div className="flex -space-x-2.5">
                  {FACES.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-9 w-9 rounded-full border-2 border-espresso object-cover transition-transform duration-300 hover:-translate-y-1"
                    />
                  ))}
                </div>
                <p className="text-[13.5px] text-white/55">
                  <span className="font-semibold text-white">3 proposal slots</span> left this month
                  — we only take 6 projects at a time.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="relative">
              <div className="glass-dark rounded-[1.6rem] p-6 shadow-lift sm:p-7">
                {sent ? (
                  <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-saffron-300 to-terra-400 text-espresso">
                      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden>
                        <path
                          d="m5 12.5 4.5 4.5L19 7.5"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h3 className="font-display mt-5 text-[24px]">Request received</h3>
                    <p className="mt-2 max-w-xs text-[14.5px] text-white/60">
                      Obrigado, {form.name.split(" ")[0] || "chef"}. We&apos;re already looking at{" "}
                      {form.venue || "your restaurant"}. Your audit and mockup land in your inbox
                      within 48 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 text-[13px] font-semibold text-saffron-300 underline underline-offset-4 transition-colors hover:text-saffron-200"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="space-y-4"
                  >
                    <h3 className="text-[17px] font-bold tracking-[-0.02em]">
                      Request your free proposal
                    </h3>

                    <div>
                      <span className="mb-2 block text-[12px] font-semibold tracking-[0.1em] text-white/45 uppercase">
                        What do you run?
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {VENUE_TYPES.map((t, i) => (
                          <button
                            key={t}
                            type="button"
                            aria-pressed={type === i}
                            onClick={() => setType(i)}
                            className={cn(
                              "rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition-all duration-300",
                              type === i
                                ? "bg-gradient-to-r from-saffron-400 to-terra-400 text-espresso"
                                : "border border-white/12 bg-white/5 text-white/60 hover:border-white/25 hover:text-white",
                            )}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="cta-name" className="sr-only">
                          Your name
                        </label>
                        <input
                          id="cta-name"
                          required
                          value={form.name}
                          onChange={update("name")}
                          placeholder="Your name"
                          className={field}
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-venue" className="sr-only">
                          Restaurant name
                        </label>
                        <input
                          id="cta-venue"
                          required
                          value={form.venue}
                          onChange={update("venue")}
                          placeholder="Restaurant name"
                          className={field}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cta-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update("email")}
                        placeholder="Email address"
                        className={field}
                      />
                    </div>

                    <div>
                      <label htmlFor="cta-site" className="sr-only">
                        Current website, if you have one
                      </label>
                      <input
                        id="cta-site"
                        value={form.site}
                        onChange={update("site")}
                        placeholder="Current website (optional)"
                        className={field}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Request a free proposal
                      <ArrowRight />
                    </Button>

                    <p className="text-center text-[12px] leading-relaxed text-white/40">
                      We reply within 24 hours, in Portuguese or English. No cold calls, no
                      mailing lists — your details stay with us.
                    </p>
                  </form>
                )}
              </div>

              <div className="animate-float glass-dark absolute -bottom-5 -left-3 hidden rounded-2xl px-4 py-3 sm:block">
                <p className="text-[10px] tracking-[0.16em] text-white/45 uppercase">
                  Average reply
                </p>
                <p className="text-[14px] font-bold">Under 3 hours</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
