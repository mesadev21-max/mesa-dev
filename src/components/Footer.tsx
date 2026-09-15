import { Logo } from "./Navbar";
import { Reveal } from "./ui";

const COLUMNS = [
  {
    title: "Services",
    links: [
      "Restaurant websites",
      "Guesthouse & inn websites",
      "Website redesign",
      "Local SEO",
      "Food photography",
      "Menu management",
    ],
  },
  {
    title: "Studio",
    links: ["Our work", "How we work", "Pricing", "About Mesa Dev's", "Careers", "Blog"],
  },
  {
    title: "Support",
    links: ["Hosting & care plans", "Client login", "Report an issue", "Book a call", "FAQ"],
  },
];

const SOCIALS = [
  {
    name: "Instagram",
    d: "M7.8 4h8.4A3.8 3.8 0 0 1 20 7.8v8.4a3.8 3.8 0 0 1-3.8 3.8H7.8A3.8 3.8 0 0 1 4 16.2V7.8A3.8 3.8 0 0 1 7.8 4Zm4.2 4.6a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8Zm4.4-1.4a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z",
  },
  {
    name: "LinkedIn",
    d: "M4.5 4.5h15v15h-15v-15ZM8 10.5v6M8 7.6v.01M11.5 16.5v-3.4c0-1 .8-1.7 1.8-1.7s1.7.7 1.7 1.7v3.4m-3.5 0v-6",
  },
  {
    name: "Facebook",
    d: "M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.5-1.5h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.7v8h3.5Z",
  },
  {
    name: "WhatsApp",
    d: "M20 11.7a8 8 0 0 1-11.9 7L4 20l1.4-4a8 8 0 1 1 14.6-4.3Zm-11.3-3c-.3 0-.7.1-1 .5-.4.4-.9 1-.9 2.2s.9 2.5 1 2.7c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3l-1.7-.8c-.2 0-.4-.1-.6.2l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.2-.5-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4Z",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-drift absolute -top-52 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(233,169,74,0.18),transparent_68%)] blur-3xl" />
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="noise absolute inset-0 opacity-[0.14] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
          <Reveal>
            <div>
              <Logo />
              <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-white/55">
                A small studio in Lisbon building websites for people who cook. Since 2019 we&apos;ve
                delivered 140+ sites for restaurants, inns and guesthouses across Iberia.
              </p>

              <div className="mt-6 space-y-2.5 text-[14px]">
                <a
                  href="mailto:ola@mesadevs.com"
                  className="group flex items-center gap-2.5 text-white/70 transition-colors hover:text-saffron-300"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" aria-hidden>
                    <path
                      d="M3.5 6.5h17v11h-17v-11Zm0 .5 8.5 6 8.5-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  ola@mesadevs.com
                </a>
                <a
                  href="tel:+351210000000"
                  className="group flex items-center gap-2.5 text-white/70 transition-colors hover:text-saffron-300"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" aria-hidden>
                    <path
                      d="M5 4.5h3l1.5 4-2 1.4a12 12 0 0 0 6.6 6.6l1.4-2 4 1.5v3c0 .8-.7 1.5-1.5 1.5A15.5 15.5 0 0 1 3.5 6c0-.8.7-1.5 1.5-1.5Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  +351 210 000 000
                </a>
                <p className="flex items-start gap-2.5 text-white/55">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="none" aria-hidden>
                    <path
                      d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.2a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Rua da Boavista 112, 1200-070 Lisboa, Portugal
                </p>
              </div>

              <div className="mt-6 flex gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href="#top"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-saffron-300/60 hover:bg-white/10 hover:text-saffron-300"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                      <path
                        d={s.d}
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col, i) => (
              <Reveal key={col.title} delay={i * 90}>
                <div>
                  <h3 className="text-[11px] font-bold tracking-[0.18em] text-white uppercase">
                    {col.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#top"
                          className="group inline-flex items-center gap-1.5 text-[14px] text-white/55 transition-colors duration-300 hover:text-white"
                        >
                          <span
                            aria-hidden
                            className="h-px w-0 bg-saffron-400 transition-all duration-300 group-hover:w-3"
                          />
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col gap-4 border-t border-white/8 pt-7 text-[12.5px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Mesa Dev&apos;s, Lda. · NIF 515 000 000 · All rights
              reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {["Privacy policy", "Terms of service", "Cookie policy", "Livro de Reclamações"].map(
                (l) => (
                  <li key={l}>
                    <a href="#top" className="transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
