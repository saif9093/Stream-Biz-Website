import { motion } from "motion/react";
import { ArrowRight, CalendarRange, FileText, Gauge, Headset, TrendingUp, Users, X, Check, type LucideIcon } from "lucide-react";
import { EASE, Reveal } from "./Reveal";
import { Eyebrow } from "./Section";
import { TRANSFORM_STEPS } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  PLAN: CalendarRange,
  BUILD: Users,
  RUN: Headset,
  MEASURE: Gauge,
  IMPROVE: TrendingUp,
};

// Card heights climb left → right so the row reads as a staircase from complexity to control.
const STEP_HEIGHT = ["lg:min-h-[360px]", "lg:min-h-[392px]", "lg:min-h-[424px]", "lg:min-h-[456px]", "lg:min-h-[488px]"];

const BEFORE = ["Scripts that drift after launch", "Results you hear about at month-end", "Poor calls nobody listens to"];
const AFTER = ["One approved script every agent uses", "Live Salesforce results, every day", "Calls scored and agents coached weekly"];

const title = (k: string) => k.charAt(0) + k.slice(1).toLowerCase();

/** "The Stream Biz Difference" — five campaign steps shown as a rising staircase. */
export default function DifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32" data-testid="difference-section">
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-brand-orange/[0.07] blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header: claim on the left, before/after proof on the right */}
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>The Stream Biz Difference</Eyebrow>
            <h2 className="font-heading text-3xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-4xl lg:text-[3.1rem]">
              From client brief to <span className="text-brand-orange">measurable results.</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-faint md:text-lg">
              Five steps run through every campaign we manage — each one leaves behind something concrete you keep.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid overflow-hidden rounded-3xl border border-line sm:grid-cols-2">
              <div className="flex flex-col gap-3.5 bg-soft p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-faint">Without structure</p>
                {BEFORE.map((t) => (
                  <p key={t} className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-faint">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-rag-red/12 text-rag-red">
                      <X className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </p>
                ))}
              </div>
              <div className="band-dark grain relative flex flex-col gap-3.5 overflow-hidden p-6">
                <p className="relative font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">With Stream Biz</p>
                {AFTER.map((t) => (
                  <p key={t} className="relative flex items-start gap-2.5 text-sm font-semibold leading-snug text-white">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Staircase */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
          {TRANSFORM_STEPS.map((step, i) => {
            const Icon = ICONS[step.key] ?? Gauge;
            const last = i === TRANSFORM_STEPS.length - 1;
            return (
              <Reveal key={step.key} delay={i * 0.1} className={`h-full lg:h-auto ${last ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-[transform,box-shadow] duration-500 hover:-translate-y-2 ${STEP_HEIGHT[i]} ${
                    last
                      ? "band-dark grain text-white shadow-2xl shadow-brand-navy/30"
                      : "border border-line bg-white shadow-[0_8px_30px_rgba(23,32,51,0.05)] hover:shadow-[0_24px_60px_rgba(23,32,51,0.12)]"
                  }`}
                >
                  {last && <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />}
                  {/* Oversized step number as a watermark */}
                  <span
                    className={`pointer-events-none absolute -right-2 -top-5 font-heading text-[7rem] font-extrabold leading-none tracking-tighter ${
                      last ? "text-white/[0.06]" : "text-brand-navy/[0.05]"
                    }`}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  {/* Accent bar that grows on hover */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-orange transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-center gap-3">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                        last ? "bg-brand-orange text-white" : "bg-bluegray text-brand-navy group-hover:bg-brand-orange group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className={`font-mono text-[11px] font-bold ${last ? "text-white/50" : "text-brand-orange"}`}>Step 0{i + 1}</span>
                  </div>

                  <h3 className={`relative mt-6 font-heading text-2xl font-extrabold tracking-tight ${last ? "text-white" : "text-ink"}`}>
                    {title(step.key)}
                  </h3>
                  <p className={`relative mt-2 text-sm leading-relaxed ${last ? "text-white/70" : "text-faint"}`}>{step.does}</p>

                  <div className={`relative mt-auto flex flex-col gap-4 pt-6`}>
                    <p className={`flex items-start gap-2 text-sm font-bold leading-snug ${last ? "text-white" : "text-ink"}`}>
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                      {step.gets}
                    </p>
                    <div
                      className={`flex items-center gap-3 rounded-2xl border px-3.5 py-3 ${
                        last ? "border-white/15 bg-white/[0.07]" : "border-line bg-soft"
                      }`}
                    >
                      <FileText className={`h-4 w-4 shrink-0 ${last ? "text-brand-orange" : "text-brand-navy"}`} />
                      <span className="flex flex-col">
                        <span className={`font-mono text-[9px] font-bold uppercase tracking-[0.18em] ${last ? "text-white/45" : "text-faint/70"}`}>
                          You keep
                        </span>
                        <span className={`text-xs font-bold leading-snug ${last ? "text-white" : "text-brand-navy"}`}>{step.artifact}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Complexity → Control rail */}
        <Reveal delay={0.2} className="mt-8 hidden lg:block">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-faint">Complexity</span>
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-line">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#B8C1DD] via-brand-navy to-brand-orange"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.8, ease: EASE }}
              />
            </div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-brand-orange">Control</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
