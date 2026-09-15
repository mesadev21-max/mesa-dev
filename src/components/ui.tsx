import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";
import { useInView } from "@/lib/hooks";
import { cn } from "@/utils/cn";

/* ---------------------------------- Reveal --------------------------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

/** Scroll-triggered fade + rise reveal with optional stagger delay. */
export function Reveal({ children, className, delay = 0, as }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* --------------------------------- Eyebrow --------------------------------- */

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase",
        tone === "light"
          ? "border-saffron-200 bg-white/70 text-saffron-600 shadow-soft"
          : "border-white/12 bg-white/6 text-saffron-300 backdrop-blur",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-saffron-400" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-saffron-500" />
      </span>
      {children}
    </span>
  );
}

/* --------------------------------- Button ---------------------------------- */

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "light" | "outline" | "outline-dark" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-[-0.01em] transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out will-change-transform active:scale-[0.97]";

  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-[15px] sm:text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-saffron-400 via-saffron-500 to-terra-400 text-espresso shadow-[0_14px_34px_-14px_rgba(217,137,36,0.85)] hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-16px_rgba(217,137,36,0.95)]",
    light: "bg-white text-espresso shadow-lift hover:-translate-y-0.5",
    outline:
      "border border-ink/12 bg-white/60 text-ink backdrop-blur hover:-translate-y-0.5 hover:border-saffron-300 hover:bg-white",
    "outline-dark":
      "border border-white/18 bg-white/5 text-white backdrop-blur hover:-translate-y-0.5 hover:border-saffron-300/60 hover:bg-white/10",
    ghost: "text-ink/70 hover:text-ink",
  };

  const inner = (
    <>
      {(variant === "primary" || variant === "light") && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={rest.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...rest}>
      {inner}
    </button>
  );
}

/* ---------------------------------- Icons ---------------------------------- */

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={cn(
        "h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1",
        className,
      )}
    >
      <path
        d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICON_PATHS: Record<string, string> = {
  devices:
    "M3 5.5h12v9H3v-9Zm0 9h12m2-6h4v11h-4v-11ZM7.5 18h4M19 16.5h.01",
  menu: "M5 3.5h14v17l-2.3-1.6-2.4 1.6-2.3-1.6-2.4 1.6L7.3 19 5 20.5v-17Zm3.5 5h7m-7 4h7m-7 4h4",
  calendar:
    "M4.5 6.5h15v13h-15v-13Zm0 4h15M8.5 3.5v4m7-4v4M9 14.5l1.8 1.8 3.7-3.8",
  pin: "M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.2a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z",
  bolt: "M13.2 2.5 4.5 13.4h6.1l-.8 8.1 8.7-10.9h-6.1l.8-8.1Z",
  camera:
    "M3.5 8.5A2 2 0 0 1 5.5 6.5h2l1.3-2h6.4l1.3 2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9Zm8.5 2.2a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5.2-1.8L21 21",
  globe:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-8.7-6.5h17.4M3.3 9.5h17.4M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z",
  languages:
    "M3.5 5.5h9m-4.5-2v2m2.8 2c-.6 4-3 6.6-6.3 8m1.6-4.4c1.3 2.4 3.2 3.8 5.4 4.6M13 20.5l4-10 4 10m-6.7-3h5.4",
  chat: "M20 12.2c0 4-3.6 7.2-8 7.2a9 9 0 0 1-2.6-.4L4.5 20.5l1.2-3.4A6.9 6.9 0 0 1 4 12.2C4 8.2 7.6 5 12 5s8 3.2 8 7.2Z",
  shield: "M12 3.5 5 6.4v5c0 4.2 2.9 7.5 7 9.1 4.1-1.6 7-4.9 7-9.1v-5l-7-2.9Zm-2.6 8.2 2 2 4-4.2",
  chart: "M4 19.5h16M7 16V9.5M12 16V5.5M17 16v-4.5",
};

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={cn("h-5 w-5", className)}>
      <path
        d={ICON_PATHS[name] ?? ICON_PATHS.bolt}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={cn("h-4 w-4 shrink-0", className)}>
      <circle cx="10" cy="10" r="9" className="fill-current opacity-15" />
      <path
        d="m6 10.3 2.6 2.6L14 7.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex gap-0.5 text-saffron-400", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
          <path d="M10 1.6l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6 4.9 17.3l1-5.7-4.1-4 5.7-.8L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

/* -------------------------------- Ambience --------------------------------- */

export function WarmOrbs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="animate-drift absolute -top-40 -left-24 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(233,169,74,0.4),transparent_66%)] blur-3xl" />
      <div className="animate-drift absolute -top-20 right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,113,74,0.32),transparent_66%)] blur-3xl [animation-delay:-9s]" />
      <div className="animate-drift absolute bottom-[-16rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(110,127,82,0.28),transparent_66%)] blur-3xl [animation-delay:-16s]" />
    </div>
  );
}

/** Section heading block used across the page. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  body,
  tone = "light",
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  body?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <Reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            "mt-5 text-balance text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.035em] sm:text-[2.85rem] lg:text-[3.1rem]",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {title}
          {accent && (
            <>
              {" "}
              <span
                className={cn(
                  "font-display text-[1.12em] font-normal italic",
                  tone === "dark" ? "text-gradient" : "text-gradient-dark",
                )}
              >
                {accent}
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={140}>
          <p
            className={cn(
              "mt-4 text-pretty text-[16.5px] leading-relaxed sm:text-[17px]",
              tone === "dark" ? "text-white/60" : "text-ink-soft",
            )}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
