import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { EASE, Reveal } from "./Reveal";
import { Eyebrow, btnPrimary } from "./Section";
import { PROCESS_PHASES } from "@/data/site";

const title = (n: string) => n.charAt(0) + n.slice(1).toLowerCase();

/** Home "How We Work" — connected 6-phase timeline with an auto-advancing detail panel. */
export default function ProcessTimeline() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const phase = PROCESS_PHASES[active];

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % PROCESS_PHASES.length), 4500);
    return () => clearTimeout(t);
  }, [active, auto]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const progress = (active / (PROCESS_PHASES.length - 1)) * 100;

  return (
    <section className="hero-dark grain relative overflow-hidden py-24 sm:py-32" data-testid="process-timeline">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-brand-orange/15 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal className="flex max-w-2xl flex-col gap-5">
            <Eyebrow dark>How We Work</Eyebrow>
            <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              A structured approach from kickoff to <span className="text-brand-orange">completion.</span>
            </h2>
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              Six phases, clear gates, and controls that keep every stage honest.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/how-we-work" data-testid="how-we-work-cta" className={btnPrimary}>
              See the Full Method
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal delay={0.1} className="mt-16">
          <div className="relative">
            <div className="absolute left-[8.33%] right-[8.33%] top-7 hidden h-[3px] rounded-full bg-white/10 md:block" aria-hidden="true">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-brand-orange to-[#FFA066]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.7, ease: EASE }}
              />
            </div>
            <div className="grid grid-cols-3 gap-y-8 md:grid-cols-6" role="tablist" aria-label="Delivery phases">
              {PROCESS_PHASES.map((p, i) => {
                const on = i === active;
                const done = i < active;
                return (
                  <button
                    key={p.num}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    data-testid={`process-phase-${i}`}
                    onClick={() => pick(i)}
                    className="group relative flex flex-col items-center gap-4 text-center"
                  >
                    <span
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 font-mono text-sm font-bold transition-all duration-500 ${
                        on
                          ? "scale-110 border-brand-orange bg-brand-orange text-white shadow-[0_0_0_8px_rgba(244,116,38,0.18)]"
                          : done
                            ? "border-brand-orange bg-[#16204a] text-brand-orange"
                            : "border-white/20 bg-[#101a3d] text-white/50 group-hover:border-white/50 group-hover:text-white"
                      }`}
                    >
                      {done ? <CheckCircle2 className="h-5 w-5" /> : p.num}
                    </span>
                    <span className={`font-heading text-sm font-extrabold uppercase tracking-[0.14em] transition-colors ${on ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                      {title(p.name)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Detail panel */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-10"
            >
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">
                  Phase {phase.num} of 0{PROCESS_PHASES.length}
                </span>
                <h3 className="font-heading text-4xl font-extrabold tracking-tight text-white">{title(phase.name)}</h3>
                <p className="text-base leading-relaxed text-white/75">{phase.objective}</p>
                <div className="mt-auto flex items-start gap-3 rounded-2xl border border-brand-orange/30 bg-brand-orange/10 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">Control gate</p>
                    <p className="mt-1 text-sm font-semibold text-white/85">{phase.controls}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:border-l lg:border-white/10 lg:pl-10">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Key activities</p>
                <ul className="flex flex-col gap-3">
                  {phase.activities.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm font-semibold text-white/85">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rotate-45 bg-brand-orange" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 lg:border-l lg:border-white/10 lg:pl-10">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">What you get</p>
                <div className="flex flex-wrap gap-2">
                  {phase.outputs.map((o) => (
                    <span key={o} className="rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-xs font-bold text-white">
                      {o}
                    </span>
                  ))}
                </div>
                <p className="mt-auto text-xs leading-relaxed text-white/50">
                  <span className="font-bold text-white/70">Who's involved: </span>
                  {phase.stakeholders}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          {auto && (
            <div className="h-[3px] bg-white/5">
              <motion.div
                key={`bar-${active}`}
                className="h-full bg-brand-orange/70"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.5, ease: "linear" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
