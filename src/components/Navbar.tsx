import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data";
import { useActiveSection, useScrollProgress, useScrollY } from "@/lib/hooks";
import { cn } from "@/utils/cn";
import { ArrowRight, Button } from "./ui";

const SECTION_IDS = ["features", "showcase", "benefits", "pricing", "faq"];

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[12px] bg-gradient-to-br from-saffron-300 via-saffron-500 to-terra-500 shadow-[0_8px_20px_-8px_rgba(217,137,36,0.9)]">
        <span
          aria-hidden
          className="animate-float-slow absolute -top-3 -right-2 h-6 w-6 rounded-full bg-white/35 blur-[7px]"
        />
        {/* Plate + cutlery mark */}
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-espresso" aria-hidden>
          <circle cx="12" cy="12" r="6.4" stroke="currentColor" strokeWidth="1.7" fill="none" />
          <circle cx="12" cy="12" r="2.6" fill="currentColor" opacity="0.9" />
          <path
            d="M3.6 4.6v3.2a1.6 1.6 0 0 0 3.2 0V4.6M5.2 8v4.2M20.4 4.6c-1 .9-1.5 2-1.5 3.4v1.2h1.5V4.6Zm0 4.6v3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[18px] font-extrabold tracking-[-0.035em]",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          Mesa Dev&apos;s
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[9px] font-semibold tracking-[0.22em] uppercase",
            tone === "dark" ? "text-white/40" : "text-muted",
          )}
        >
          Restaurant web studio
        </span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const y = useScrollY();
  const progress = useScrollProgress();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const condensed = y > 30;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        aria-hidden
        className="fixed top-0 left-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-saffron-300 via-saffron-500 to-terra-400 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          condensed ? "py-2" : "py-4",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-5 rounded-full px-3.5 transition-all duration-500 ease-out sm:px-4",
            condensed
              ? "glass-dark w-[calc(100%-1.5rem)] py-2 shadow-[0_18px_40px_-24px_rgba(14,12,10,0.9)]"
              : "w-[calc(100%-2rem)] border border-transparent py-2.5",
          )}
        >
          <a href="#top" aria-label="Mesa Dev's — home" className="shrink-0">
            <Logo />
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-300",
                      isActive ? "text-white" : "text-white/60 hover:text-white",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-px origin-center bg-gradient-to-r from-transparent via-saffron-400 to-transparent transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="tel:+351210000000"
              className="rounded-full px-3 py-2 text-[13.5px] font-semibold text-white/70 transition-colors hover:text-white"
            >
              +351 210 000 000
            </a>
            <Button href="#contact" size="md">
              Free proposal
              <ArrowRight />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white backdrop-blur sm:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 h-[1.6px] w-4 rounded bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-[1.6px] w-4 rounded bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[45] transition-all duration-400 sm:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-espresso/55 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "glass-dark absolute inset-x-3 top-[4.75rem] rounded-3xl p-4 shadow-lift transition-all duration-400 ease-out",
            open ? "translate-y-0 scale-100" : "-translate-y-4 scale-[0.97]",
          )}
        >
          <ul className="space-y-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-3.5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/8"
                >
                  {link.label}
                  <ArrowRight className="text-saffron-300" />
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" size="lg" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Request a free proposal
            <ArrowRight />
          </Button>
          <a
            href="tel:+351210000000"
            className="mt-3 block text-center text-[13px] text-white/55 transition-colors hover:text-white"
          >
            Or call us · +351 210 000 000
          </a>
        </div>
      </div>
    </>
  );
}
