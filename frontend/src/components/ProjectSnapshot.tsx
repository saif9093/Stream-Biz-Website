import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { apiPost } from "@/lib/api";
import { EASE, Reveal } from "./Reveal";
import { Eyebrow, btnPrimary } from "./Section";
import { PROJECT_TYPES, STAGES, SIZES } from "@/lib/formOptions";

const CONCERNS = [
  "Not enough qualified leads",
  "Low contact or conversion rates",
  "Inconsistent call quality",
  "Messy Salesforce data",
  "Reporting nobody trusts",
  "Hard to hire and train agents",
];

const STEPS = ["Your campaign", "Biggest concern", "Your details"];

const darkInput =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/35 transition-[border-color,background-color] focus:border-brand-orange focus:bg-white/10 focus:outline-none";
const darkLabel = "font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/55";

function Choice({ label, active, onClick, testid }: { label: string; active: boolean; onClick: () => void; testid: string }) {
  return (
    <button
      type="button"
      data-testid={testid}
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
        active
          ? "border-brand-orange bg-brand-orange text-white"
          : "border-white/15 bg-white/[0.04] text-white/80 hover:border-white/35 hover:bg-white/[0.08]"
      }`}
    >
      {label}
    </button>
  );
}

/** Free Campaign Snapshot — a 3-step lead magnet. Submits to /api/leads with source "project-snapshot". */
export default function ProjectSnapshot() {
  const [step, setStep] = useState(0);
  const [project, setProject] = useState({ projectType: "", projectStage: "", projectSize: "" });
  const [concerns, setConcerns] = useState<string[]>([]);
  const [contact, setContact] = useState({ firstName: "", lastName: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const canNext = step === 0 ? Boolean(project.projectType && project.projectStage) : step === 1 ? concerns.length > 0 : true;

  const toggleConcern = (c: string) => setConcerns((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiPost("/leads", {
        ...contact,
        ...project,
        message: [`Concerns: ${concerns.join(", ")}`, contact.message].filter(Boolean).join("\n\n"),
        source: "project-snapshot",
      });
      setDone(true);
    } catch {
      toast.error("Something went wrong sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="hero-dark grain relative overflow-hidden py-24 sm:py-32" data-testid="project-snapshot">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:sticky lg:top-32">
          <Eyebrow dark>Free Campaign Snapshot</Eyebrow>
          <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Get an expert view of your calling campaign — <span className="text-brand-orange">free.</span>
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Answer three quick questions. A senior call center manager reviews your situation and comes back with a short,
            practical snapshot: what to fix first in your scripts, team, Salesforce setup or reporting.
          </p>
          <ul className="flex flex-col gap-3">
            {["Reviewed by a senior call center manager", "Practical priorities, not a sales pitch", "No obligation — yours to keep"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-orange" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-9">
            {done ? (
              <div className="flex flex-col items-start gap-4 py-8" data-testid="snapshot-success">
                <CheckCircle2 className="h-12 w-12 text-rag-green" />
                <h3 className="font-heading text-2xl font-extrabold text-white">Request received.</h3>
                <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                  Thank you, {contact.firstName}. A senior member of our team will review your answers and send your project
                  snapshot, then suggest a short call if it would help.
                </p>
              </div>
            ) : (
              <>
                {/* Stepper */}
                <div className="mb-8 flex items-center gap-3">
                  {STEPS.map((label, i) => (
                    <div key={label} className="flex flex-1 flex-col gap-2">
                      <span className={`h-1 rounded-full transition-colors duration-500 ${i <= step ? "bg-brand-orange" : "bg-white/15"}`} />
                      <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${i === step ? "text-white" : "text-white/40"}`}>
                        0{i + 1} {label}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={submit} data-testid="snapshot-form">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="flex min-h-[330px] flex-col gap-6"
                    >
                      {step === 0 && (
                        <>
                          <div className="flex flex-col gap-3">
                            <span className={darkLabel}>What kind of campaign is it? *</span>
                            <div className="grid gap-2 sm:grid-cols-2">
                              {PROJECT_TYPES.map((t) => (
                                <Choice key={t} label={t} testid={`snapshot-type-${t}`} active={project.projectType === t} onClick={() => setProject((p) => ({ ...p, projectType: t }))} />
                              ))}
                            </div>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <label className="flex flex-col gap-1.5">
                              <span className={darkLabel}>Where are you today? *</span>
                              <select data-testid="snapshot-stage" value={project.projectStage} onChange={(e) => setProject((p) => ({ ...p, projectStage: e.target.value }))} className={darkInput}>
                                <option value="" className="text-ink">Select stage</option>
                                {STAGES.map((s) => <option key={s} value={s} className="text-ink">{s}</option>)}
                              </select>
                            </label>
                            <label className="flex flex-col gap-1.5">
                              <span className={darkLabel}>Approximate team size</span>
                              <select data-testid="snapshot-size" value={project.projectSize} onChange={(e) => setProject((p) => ({ ...p, projectSize: e.target.value }))} className={darkInput}>
                                <option value="" className="text-ink">Select size</option>
                                {SIZES.map((s) => <option key={s} value={s} className="text-ink">{s}</option>)}
                              </select>
                            </label>
                          </div>
                        </>
                      )}

                      {step === 1 && (
                        <div className="flex flex-col gap-3">
                          <span className={darkLabel}>What worries you most right now? (pick any) *</span>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {CONCERNS.map((c) => (
                              <Choice key={c} label={c} testid={`snapshot-concern-${c}`} active={concerns.includes(c)} onClick={() => toggleConcern(c)} />
                            ))}
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="grid gap-4 sm:grid-cols-2">
                          {(
                            [
                              ["firstName", "First name *", "Jane", "text"],
                              ["lastName", "Last name *", "Cooper", "text"],
                              ["email", "Work email *", "jane@company.com", "email"],
                              ["company", "Company *", "Company Ltd.", "text"],
                            ] as const
                          ).map(([key, label, ph, type]) => (
                            <label key={key} className="flex flex-col gap-1.5">
                              <span className={darkLabel}>{label}</span>
                              <input
                                required
                                type={type}
                                data-testid={`snapshot-${key}`}
                                value={contact[key]}
                                onChange={(e) => setContact((c) => ({ ...c, [key]: e.target.value }))}
                                placeholder={ph}
                                className={darkInput}
                              />
                            </label>
                          ))}
                          <label className="flex flex-col gap-1.5 sm:col-span-2">
                            <span className={darkLabel}>Anything else we should know?</span>
                            <textarea
                              rows={3}
                              data-testid="snapshot-message"
                              value={contact.message}
                              onChange={(e) => setContact((c) => ({ ...c, message: e.target.value }))}
                              placeholder="A sentence or two about your campaign and what's going on."
                              className={darkInput}
                            />
                          </label>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                    {step > 0 ? (
                      <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-white">
                        <ArrowLeft className="h-4 w-4" /> Back
                      </button>
                    ) : (
                      <span />
                    )}
                    {step < 2 ? (
                      <button
                        type="button"
                        data-testid="snapshot-next"
                        disabled={!canNext}
                        onClick={() => setStep((s) => s + 1)}
                        className={`${btnPrimary} disabled:pointer-events-none disabled:opacity-40`}
                      >
                        Next step <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button type="submit" data-testid="snapshot-submit" disabled={submitting} className={`${btnPrimary} disabled:opacity-60`}>
                        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                        Get My Free Snapshot
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
