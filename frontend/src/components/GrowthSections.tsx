import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, BarChart3, Check, CircleCheckBig, Clock, Gauge, PieChart, Quote } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { EASE, Reveal } from "./Reveal";
import { SectionHeading, btnGhost, btnPrimary } from "./Section";
import { SERVICE_TIERS, SUPPORT_STRUCTURES, TESTIMONIALS, TOOLKIT_TABS } from "@/data/growth";

/** Tabbed breakdown of the controls we install and the rhythm we run. */
export function DeliveryToolkit() {
  const [tab, setTab] = useState(0);
  const [item, setItem] = useState(0);
  const current = TOOLKIT_TABS[tab];
  const active = current.items[item];
  const ActiveIcon = getIcon(active.icon);

  return (
    <section className="bg-white py-24 sm:py-32" data-testid="delivery-toolkit">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We're Different"
          title="A complete delivery toolkit — not just a project manager."
          sub="Most firms send a person. We bring a proven system: the controls that make a project visible, and the operating rhythm that keeps it on course."
        />

        <Reveal delay={0.1} className="mt-10">
          <div className="inline-flex flex-wrap gap-1.5 rounded-full border border-line bg-soft p-1.5" role="tablist">
            {TOOLKIT_TABS.map((t, i) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={tab === i}
                data-testid={`toolkit-tab-${t.key}`}
                onClick={() => {
                  setTab(i);
                  setItem(0);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  tab === i ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20" : "text-faint hover:text-ink"
                }`}
              >
                {t.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Step list */}
          <div className="flex flex-col gap-2">
            <p className="mb-3 max-w-xl text-sm leading-relaxed text-faint">{current.intro}</p>
            {current.items.map((it, i) => {
              const Icon = getIcon(it.icon);
              const on = i === item;
              return (
                <button
                  key={it.label}
                  type="button"
                  data-testid={`toolkit-item-${i}`}
                  onClick={() => setItem(i)}
                  onMouseEnter={() => setItem(i)}
                  className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                    on ? "border-brand-orange/50 bg-brand-orange-soft shadow-md shadow-brand-orange/10" : "border-line bg-white hover:border-brand-navy/25"
                  }`}
                >
                  <span className={`font-mono text-xs font-bold ${on ? "text-brand-orange" : "text-faint/50"}`}>0{i + 1}</span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      on ? "bg-brand-orange text-white" : "bg-bluegray text-brand-navy"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className={`flex-1 text-[15px] font-bold ${on ? "text-ink" : "text-body"}`}>{it.label}</span>
                  <ArrowRight className={`h-4 w-4 transition-all ${on ? "translate-x-0 text-brand-orange" : "-translate-x-1 text-faint/30"}`} />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="hero-dark grain relative min-h-[420px] overflow-hidden rounded-3xl p-8 sm:p-12 lg:sticky lg:top-32">
            <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={`${tab}-${item}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative flex h-full flex-col gap-6"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-xl shadow-brand-orange/30">
                  <ActiveIcon className="h-7 w-7" />
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">
                  {String(item + 1).padStart(2, "0")} / {String(current.items.length).padStart(2, "0")} · {active.label}
                </span>
                <h3 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">{active.title}</h3>
                <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">{active.text}</p>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                  <Link to={current.cta.to} className={btnPrimary}>
                    {current.cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex gap-1.5 pt-2" aria-hidden="true">
                  {current.items.map((_, i) => (
                    <span key={i} className={`h-1 flex-1 rounded-full ${i <= item ? "bg-brand-orange" : "bg-white/15"}`} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const STRUCTURE_ICONS = [PieChart, Clock, BarChart3];
const TIER_ICONS = [Clock, Gauge, CircleCheckBig];

/** Stacked-bars motif: `level` of 3 bars filled, the rest muted. */
function TierStack({ level }: { level: number }) {
  const shades = ["bg-brand-navy", "bg-[#4A5BA6]", "bg-brand-orange"];
  return (
    <span className="flex w-[72px] shrink-0 flex-col gap-1" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-[18px] -skew-x-[18deg] rounded-[3px] ${i < level ? shades[i] : "bg-line"}`}
          style={{ width: `${100 - i * 9}%` }}
        />
      ))}
    </span>
  );
}

/** Team structures + service tiers (reference layout: "choose your team structure / service tier"). */
export function SupportModels({ showPricingLink = true }: { showPricingLink?: boolean }) {
  return (
    <section className="bg-soft py-24 sm:py-32" data-testid="support-models">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Choose Your Support"
          title="Choose your team structure."
          sub="Start with the level of support your project needs today, and scale up or down as it moves through its phases."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SUPPORT_STRUCTURES.map((s, i) => {
            const Icon = STRUCTURE_ICONS[i];
            return (
              <Reveal key={s.key} delay={i * 0.08} className="h-full">
                <Link
                  to="/engagement-models"
                  data-testid={`structure-${s.key}`}
                  className="group flex h-full flex-col gap-5 rounded-3xl bg-white p-9 shadow-[0_10px_50px_rgba(23,32,51,0.07)] ring-1 ring-black/[0.03] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(23,32,51,0.13)]"
                >
                  <div className="flex items-center gap-5">
                    <Icon className="h-14 w-14 shrink-0 text-brand-orange" strokeWidth={1.75} />
                    <h3 className="font-heading text-[1.65rem] font-extrabold tracking-tight text-ink">{s.name}</h3>
                    <ArrowRight className="h-5 w-5 shrink-0 text-brand-orange transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                  <p className="text-base font-semibold text-ink">Project Team</p>
                  <p className="text-[15px] leading-[1.85] text-faint">{s.text}</p>
                  <span className="mt-auto inline-flex w-fit rounded-full bg-brand-orange-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-orange-dark">
                    {s.tag}
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Service tiers */}
        <div className="mt-28">
          <SectionHeading center eyebrow="Service Tiers" title="Choose the right service tier." />
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICE_TIERS.map((t, i) => {
            const Icon = TIER_ICONS[i];
            const fill = ((i + 1) / SERVICE_TIERS.length) * 100;
            return (
              <Reveal key={t.num} delay={i * 0.08} className="h-full">
                <div className="group relative flex h-full flex-col gap-7 rounded-3xl bg-white px-9 pb-14 pt-10 shadow-[0_10px_50px_rgba(23,32,51,0.07)] ring-1 ring-black/[0.03] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(23,32,51,0.13)]">
                  <div className="flex items-start gap-6">
                    <TierStack level={i + 1} />
                    <div className="flex flex-col gap-2">
                      <h3 className="flex items-center gap-3 font-heading text-[1.75rem] font-extrabold leading-none tracking-tight text-ink">
                        {t.num}
                        <ArrowRight className="h-5 w-5 text-brand-orange transition-transform duration-300 group-hover:translate-x-1.5" />
                      </h3>
                      <p className="mt-2 text-base leading-snug text-body">
                        {t.line1}
                        <br />
                        <span className="font-bold text-ink">{t.line2}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-[15px] leading-[1.85] text-faint">{t.text}</p>
                  <ul className="flex flex-col gap-2.5">
                    {t.includes.map((x) => (
                      <li key={x} className="flex items-start gap-2.5 text-sm font-semibold text-body">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  {/* Progress rail on the bottom edge */}
                  <div className="absolute inset-x-9 bottom-0 translate-y-1/2" aria-hidden="true">
                    <div className="relative h-1 rounded-full bg-[#E1E5EF]">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-brand-orange"
                        initial={{ width: "0%" }}
                        animate={{ width: `${fill}%` }}
                        transition={{ duration: 1.4, delay: 0.6 + i * 0.2, ease: EASE }}
                      />
                      <span className="absolute -left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-orange bg-white text-brand-orange">
                        <Icon className="h-4 w-4" strokeWidth={2.25} />
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 flex flex-wrap justify-center gap-4">
          {showPricingLink && (
            <Link to="/pricing" data-testid="support-pricing-link" className={btnPrimary}>
              Compare Tiers & Request Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          <Link to="/start-a-project" data-testid="tiers-start-project" className={showPricingLink ? btnGhost : btnPrimary}>
            Start a Project
            {!showPricingLink && <ArrowRight className="h-4 w-4" />}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/** Client testimonials — placeholder copy until real quotes are approved. */
export function Testimonials() {
  return (
    <section className="bg-white py-24 sm:py-32" data-testid="testimonials">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Voices"
          center
          title="Don't just take our word for it."
          sub="What the people we deliver alongside say about working with Stream Biz."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08} className="h-full">
              <figure
                className={`relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  i === 1 ? "band-dark grain border-white/10" : "border-line bg-soft"
                }`}
              >
                <Quote className={`h-9 w-9 ${i === 1 ? "text-brand-orange" : "text-brand-orange/70"}`} />
                <blockquote className={`flex-1 font-heading text-lg font-bold leading-snug ${i === 1 ? "text-white" : "text-ink"}`}>
                  {t.quote}
                </blockquote>
                <figcaption className={`flex items-center gap-4 border-t pt-5 ${i === 1 ? "border-white/10" : "border-line"}`}>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-heading text-sm font-extrabold ${
                      i === 1 ? "bg-white/10 text-white" : "bg-brand-navy text-white"
                    }`}
                  >
                    SB
                  </span>
                  <span className="flex flex-col">
                    <span className={`text-sm font-bold ${i === 1 ? "text-white" : "text-ink"}`}>{t.name}</span>
                    <span className={`text-xs ${i === 1 ? "text-white/55" : "text-faint"}`}>{t.role}</span>
                    <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-brand-orange">{t.sector}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
