import { IMG } from "@/data";
import { cn } from "@/utils/cn";

/* ------------------------------ Browser frame ------------------------------ */

export function BrowserFrame({
  url,
  children,
  className,
  tone = "dark",
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border sm:rounded-[18px]",
        tone === "dark" ? "border-white/12 bg-espresso-2" : "border-ink/10 bg-white",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b px-3 py-2 sm:px-4 sm:py-2.5",
          tone === "dark" ? "border-white/8 bg-white/4" : "border-ink/8 bg-cream/70",
        )}
      >
        <div className="flex gap-1.5">
          {["#E8685B", "#E9B949", "#5CB176"].map((c) => (
            <span
              key={c}
              className="h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <div
          className={cn(
            "mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-full px-3 py-1 text-[9px] sm:text-[10px]",
            tone === "dark" ? "bg-white/8 text-white/50" : "bg-white text-muted",
          )}
        >
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 shrink-0" fill="none" aria-hidden>
            <path
              d="M7 10V7.5a5 5 0 0 1 10 0V10M5.5 10h13v9.5h-13V10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

/* --------------------------- "After" restaurant site ------------------------ */

export function AfterSite({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative bg-espresso text-white">
      {/* Nav */}
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-2.5 sm:px-6 sm:py-3">
        <span className="font-display text-[11px] tracking-[0.18em] text-saffron-300 uppercase sm:text-[13px]">
          Casa Oliveira
        </span>
        <div className="hidden items-center gap-4 text-[9px] text-white/55 sm:flex sm:text-[10px]">
          {["Menu", "Our story", "Wine list", "Contact"].map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
        <span className="rounded-full bg-gradient-to-r from-saffron-400 to-terra-400 px-2.5 py-1 text-[8px] font-bold text-espresso sm:px-3.5 sm:text-[10px]">
          Book a table
        </span>
      </div>

      {/* Hero */}
      <div className="relative">
        <img
          src={IMG.candlelit}
          alt=""
          loading="lazy"
          className={cn("w-full object-cover", compact ? "h-28 sm:h-40" : "h-36 sm:h-52")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <p className="text-[8px] tracking-[0.3em] text-saffron-300 uppercase sm:text-[9px]">
            Lisboa · Since 1974
          </p>
          <p className="font-display mt-1 text-[17px] leading-tight sm:text-[26px]">
            Cooked over fire,
            <br />
            served with time.
          </p>
          <div className="mt-2.5 flex gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-[8px] font-bold text-espresso sm:text-[10px]">
              Reserve · 2 clicks
            </span>
            <span className="rounded-full border border-white/25 px-3 py-1 text-[8px] font-medium text-white/80 sm:text-[10px]">
              View menu
            </span>
          </div>
        </div>
      </div>

      {/* Menu strip */}
      <div className="grid grid-cols-3 gap-2 px-4 py-3.5 sm:gap-3 sm:px-6 sm:py-5">
        {[
          { n: "Polvo à lagareiro", p: "24" },
          { n: "Arroz de pato", p: "19" },
          { n: "Leite creme", p: "8" },
        ].map((d, i) => (
          <div
            key={d.n}
            className="rounded-lg border border-white/8 bg-white/4 p-2 sm:rounded-xl sm:p-2.5"
          >
            <img
              src={IMG.dishes[i]}
              alt=""
              loading="lazy"
              className="mb-1.5 h-8 w-full rounded object-cover sm:h-12"
            />
            <p className="truncate text-[8px] font-semibold sm:text-[10px]">{d.n}</p>
            <p className="text-[8px] text-saffron-300 sm:text-[10px]">€{d.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- "Before" legacy site --------------------------- */

export function BeforeSite({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="relative bg-[#e7e4d8] p-3 text-[#1a1a1a] sm:p-4"
      style={{ fontFamily: "Times New Roman, Times, serif" }}
    >
      <div className="border-2 border-[#8b0000] bg-[#fffdf2] p-2.5 sm:p-3.5">
        <div className="flex items-center justify-between border-b border-dashed border-[#8b0000] pb-2">
          <div>
            <p className="text-[13px] leading-none font-bold text-[#8b0000] sm:text-[17px]">
              CASA OLIVEIRA
            </p>
            <p className="mt-0.5 text-[7px] text-[#555] italic sm:text-[9px]">
              Restaurante Tipico ~ Bem Vindo!
            </p>
          </div>
          <span className="bg-[#ffe97f] px-1.5 py-0.5 text-[6px] font-bold text-[#8b0000] sm:text-[8px]">
            NOVO!
          </span>
        </div>

        <div className="mt-2 flex gap-2">
          <div className="w-1/3 space-y-1 border-r border-[#ccc] pr-2">
            {["Inicio", "Ementa.pdf", "Fotos", "Contactos", "Livro de visitas"].map((l) => (
              <p key={l} className="text-[7px] text-[#0000ee] underline sm:text-[9px]">
                » {l}
              </p>
            ))}
          </div>
          <div className="flex-1">
            <div
              className={cn(
                "grid place-items-center border border-[#999] bg-[#d8d4c4] text-center",
                compact ? "h-10" : "h-14 sm:h-16",
              )}
            >
              <span className="px-2 text-[6px] text-[#777] sm:text-[8px]">
                [ imagem_restaurante_final2.jpg ]
              </span>
            </div>
            <p className="mt-1.5 text-[6.5px] leading-tight text-[#333] sm:text-[8px]">
              Bem vindos ao nosso restaurante. Temos comida tradicional portuguesa há mais de 40
              anos. Para reservas telefone 21 000 0000 (horário de expediente).
            </p>
            <p className="mt-1 text-[6.5px] text-[#8b0000] sm:text-[8px]">
              Última actualização: 14/03/2011
            </p>
          </div>
        </div>
      </div>
      <p className="mt-1.5 text-center text-[6px] text-[#666] sm:text-[7px]">
        Best viewed in Internet Explorer 1024×768
      </p>
    </div>
  );
}

/* -------------------------------- Phone frame ------------------------------- */

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] border border-white/15 bg-espresso-2 p-1.5 shadow-screen",
        className,
      )}
    >
      <div className="absolute top-2.5 left-1/2 z-10 h-1 w-12 -translate-x-1/2 rounded-full bg-white/20" />
      <div className="overflow-hidden rounded-[1.6rem] bg-espresso">{children}</div>
    </div>
  );
}

/** Mobile menu/reservation screen shown inside the phone frame. */
export function PhoneMenuScreen() {
  return (
    <div className="relative text-white">
      <div className="relative">
        <img src={IMG.cozy} alt="" loading="lazy" className="h-28 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-2 px-3.5">
          <p className="text-[7px] tracking-[0.28em] text-saffron-300 uppercase">Menu · Jantar</p>
          <p className="font-display text-[15px] leading-tight">Casa Oliveira</p>
        </div>
      </div>

      <div className="flex gap-1.5 px-3 py-2">
        {["Entradas", "Peixe", "Carne", "Vinhos"].map((t, i) => (
          <span
            key={t}
            className={cn(
              "rounded-full px-2 py-0.5 text-[7px] font-semibold whitespace-nowrap",
              i === 1 ? "bg-saffron-400 text-espresso" : "bg-white/8 text-white/55",
            )}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-1.5 px-3 pb-14">
        {[
          { n: "Polvo à lagareiro", d: "Batata a murro, alho, azeite", p: "24", i: 0 },
          { n: "Robalo na brasa", d: "Legumes da horta, limão", p: "26", i: 2 },
          { n: "Bacalhau confitado", d: "Broa, grelos, azeitona", p: "22", i: 4 },
        ].map((d) => (
          <div key={d.n} className="flex items-center gap-2 rounded-xl bg-white/5 p-1.5">
            <img
              src={IMG.dishes[d.i]}
              alt=""
              loading="lazy"
              className="h-9 w-9 shrink-0 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[8.5px] font-semibold">{d.n}</p>
              <p className="truncate text-[7px] text-white/45">{d.d}</p>
            </div>
            <span className="text-[8.5px] font-bold text-saffron-300">€{d.p}</span>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/8 bg-espresso/90 p-2.5 backdrop-blur">
        <div className="relative flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-saffron-400 to-terra-400 py-1.5 text-[9px] font-bold text-espresso">
          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" aria-hidden>
            <path
              d="M4.5 6.5h15v13h-15v-13Zm0 4h15M8.5 3.5v4m7-4v4"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
          Reservar mesa
        </div>
      </div>
    </div>
  );
}
