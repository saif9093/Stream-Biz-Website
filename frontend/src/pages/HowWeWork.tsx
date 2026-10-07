import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Users, ShieldCheck, FileOutput } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero, SectionHeading } from "@/components/Section";
import { Reveal, EASE } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { PROCESS_PHASES, OPERATING_MODEL } from "@/data/site";

export default function HowWeWork() {
  usePageMeta(
    "How We Work | Stream Biz Delivery Methodology",
    "A structured six-phase delivery approach — discover, define, plan, execute, control, close — with clear gates and project controls at every stage."
  );
  const [active, setActive] = useState(0);
  const phase = PROCESS_PHASES[active];

  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A structured approach from kickoff to completion."
        sub="Six phases, each with a clear objective, defined outputs and the controls that keep delivery honest. Explore each phase below."
        meta={[
          { value: "6 phases", label: "From mobilisation through closeout" },
          { value: "Defined gates", label: "Each phase has an exit condition" },
          { value: "Named outputs", label: "Artifacts your team keeps afterwards" },
          { value: "Weekly cadence", label: "Reporting rhythm leadership can rely on" },
        ]}
      />

      {/* Interactive lifecycle */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Phase selector */}
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" role="tablist" aria-label="Project lifecycle phases">
              {PROCESS_PHASES.map((p, i) => (
                <button
                  key={p.num}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  data-testid={`phase-tab-${p.name.toLowerCase()}`}
                  onClick={() => setActive(i)}
                  className={`flex flex-col gap-2 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    active === i
                      ? "border-brand-orange bg-brand-navy text-white shadow-lg shadow-brand-navy/20"
                      : "border-line bg-soft text-ink hover:border-brand-navy/30"
                  }`}
                >
                  <span className={`font-mono text-xs font-bold ${active === i ? "text-brand-orange" : "text-faint/60"}`}>{p.num}</span>
                  <span className="font-heading text-base font-extrabold tracking-tight">{p.name}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Phase detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-10 grid gap-8 rounded-3xl border border-line bg-soft p-8 sm:p-10 lg:grid-cols-[1fr_1fr_1fr]"
              data-testid="phase-detail"
            >
              <div className="flex flex-col gap-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">Objective</p>
                <p className="font-heading text-xl font-extrabold leading-snug tracking-tight text-ink">{phase.objective}</p>
                <div className="mt-2 flex items-start gap-3 rounded-xl bg-white p-4">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-faint">Stakeholder involvement</p>
                    <p className="mt-1 text-sm font-semibold text-body">{phase.stakeholders}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-white p-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-navy" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-faint">Key project controls</p>
                    <p className="mt-1 text-sm font-semibold text-body">{phase.controls}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-faint">Core activities</p>
                {phase.activities.map((a) => (
                  <div key={a} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3.5">
                    <Check className="h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                    <span className="text-sm font-semibold text-body">{a}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-faint">Outputs</p>
                {phase.outputs.map((o) => (
                  <div key={o} className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5">
                    <FileOutput className="h-4 w-4 shrink-0 text-brand-navy" />
                    <span className="text-sm font-semibold text-body">{o}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Operating model */}
      <section className="band-dark grain relative overflow-hidden py-20 sm:py-28">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 hidden" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            dark
            eyebrow="The Project Operating Model"
            title="How strategy becomes delivery — visibly."
            sub="Every Stream Biz engagement installs this chain: each link feeds the next, and nothing moves forward in the dark."
          />
          <div className="mt-16 flex flex-col items-center">
            {OPERATING_MODEL.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.05} className="w-full max-w-2xl">
                <div className="relative">
                  <div className="flex items-center gap-6 rounded-2xl border border-white/12 bg-white/5 px-6 py-5 backdrop-blur-sm transition-colors hover:border-brand-orange/50">
                    <span className="font-mono text-sm font-bold text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex-1">
                      <p className="font-heading text-lg font-extrabold tracking-tight text-white">{item.step}</p>
                      <p className="text-sm text-white/60">{item.text}</p>
                    </div>
                  </div>
                  {i < OPERATING_MODEL.length - 1 && (
                    <div className="mx-auto h-5 w-px bg-gradient-to-b from-brand-orange to-white/20" aria-hidden="true" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="See it applied"
        title="Watch this methodology run on your project."
        sub="Start with a health check or a consultation — either way, you'll see the structure within the first conversation."
        secondaryLabel="Take the Project Health Check"
        secondaryTo="/project-health-check"
      />
    </>
  );
}
