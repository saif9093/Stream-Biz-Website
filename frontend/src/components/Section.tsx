import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-bold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-brand-orange/25 active:scale-[0.98]";
export const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-7 py-3.5 text-sm font-bold text-brand-navy transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-brand-navy/40 hover:shadow-lg active:scale-[0.98]";
export const btnNavy =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-bold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-brand-navy-deep hover:shadow-xl hover:shadow-brand-navy/25 active:scale-[0.98]";
export const btnWhite =
  "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-navy transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]";
export const btnOutlineLight =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15 active:scale-[0.98]";

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.24em] ${
        dark ? "text-brand-orange" : "text-brand-orange"
      }`}
    >
      <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
      {children}
    </span>
  );
}

/** Brand signature motif — a measurement baseline with tick marks. */
export function TickRule({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-2.5 w-full ${dark ? "bg-ticks" : "bg-ticks-light"} opacity-60 ${className}`}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`${center ? "mx-auto text-center items-center" : ""} flex max-w-3xl flex-col gap-5 ${className}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`font-heading text-3xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`text-base leading-relaxed md:text-lg ${dark ? "text-white/70" : "text-faint"}`}>{sub}</p>
      )}
    </Reveal>
  );
}

export interface HeroMeta {
  label: string;
  value: string;
}

/**
 * Dark editorial page hero used at the top of every interior page.
 * Navy surface + grain + measurement rule, so the brand owns the first viewport.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  meta,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  meta?: HeroMeta[];
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="hero-dark grain relative overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44" data-testid="page-hero">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-brand-navy/40 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid gap-14 ${aside ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center" : ""}`}>
          <Reveal className="flex max-w-3xl flex-col gap-6">
            <Eyebrow dark>{eyebrow}</Eyebrow>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {sub && <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{sub}</p>}
            {children}
          </Reveal>
          {aside}
        </div>
        {meta && meta.length > 0 && (
          <Reveal delay={0.2} className="mt-14">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((m, i) => (
                <div key={m.label} className="flex flex-col gap-2 bg-[#0B1226]/80 px-6 py-6" data-testid={`hero-meta-${i}`}>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                    0{i + 1}
                  </span>
                  <span className="font-heading text-xl font-extrabold tracking-tight text-white">{m.value}</span>
                  <span className="text-xs leading-relaxed text-white/50">{m.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" aria-hidden="true" />
    </section>
  );
}
