import { useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero, Eyebrow, btnPrimary } from "@/components/Section";
import { Reveal, CountUp, EASE } from "@/components/Reveal";
import { apiPost } from "@/lib/api";
import { HEALTH_QUESTIONS } from "@/data/site";
import { PROJECT_TYPES, SIZES, STAGES } from "@/lib/formOptions";

const CATEGORIES = ["Planning", "Team", "CRM", "Quality", "Reporting"];
const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-faint/60 transition-colors focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/15";

const ADVICE: Record<string, string> = {
  Planning: "Your campaign would benefit most from clear, agreed targets and an approved, version-controlled script every agent works from.",
  Team: "Your team is the gap: structured training, mock-call certification and regular coaching would lift results quickly.",
  CRM: "Your data needs attention: logging every call and outcome in Salesforce, with clean lists, would make every other area easier.",
  Quality: "Quality is your weakest area — a QA scorecard, weekly call sampling and a fast escalation path would protect your brand.",
  Reporting: "Reporting is the gap: live dashboards that trace leads and sales back to campaigns would give managers one trusted view.",
};

export default function HealthCheck() {
  usePageMeta(
    "Call Center Health Check | Stream Biz",
    "How healthy is your call center operation? Answer ten focused questions and get an instant score across planning, team, CRM, quality and reporting."
  );

  const [step, setStep] = useState(-1); // -1 intro, 0..9 questions, 10 results
  const [answers, setAnswers] = useState<number[]>(Array(HEALTH_QUESTIONS.length).fill(-1));
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", projectType: "", projectStage: "", budgetRange: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { categoryScores, totalScore, weakest } = useMemo(() => {
    const scores: Record<string, number> = {};
    for (const cat of CATEGORIES) {
      const idxs = HEALTH_QUESTIONS.map((q, i) => (q.category === cat ? i : -1)).filter((i) => i >= 0);
      const sum = idxs.reduce((acc, i) => acc + Math.max(answers[i], 0), 0);
      scores[cat] = Math.round((sum / (idxs.length * 4)) * 100);
    }
    const total = Math.round(
      (answers.reduce((acc, a) => acc + Math.max(a, 0), 0) / (HEALTH_QUESTIONS.length * 4)) * 100
    );
    const weak = CATEGORIES.reduce((a, b) => (scores[a] <= scores[b] ? a : b));
    return { categoryScores: scores, totalScore: total, weakest: weak };
  }, [answers]);

  const tier = totalScore >= 80 ? "Strong" : totalScore >= 60 ? "Stable" : totalScore >= 40 ? "At Risk" : "Critical";

  const answer = (optionIdx: number) => {
    const next = [...answers];
    next[step] = optionIdx + 1;
    setAnswers(next);
    setTimeout(() => setStep(step + 1), 280);
  };

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiPost("/health-check", { ...form, scores: categoryScores, totalScore });
      setSubmitted(true);
      toast.success("Your health check results have been sent. We'll be in touch.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Call Center Health Check"
        title="How healthy is your calling operation?"
        sub="Ten focused questions across planning, team, CRM, quality and reporting — and an instant, honest score. This is an indicative self-assessment, not an industry certification."
        meta={[
          { value: "10 questions", label: "Two per area" },
          { value: "5 areas", label: "Planning, team, CRM, quality, reporting" },
          { value: "~2 minutes", label: "No sign-up needed to see your score" },
          { value: "Instant score", label: "A visual read you can share internally" },
        ]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* INTRO */}
            {step === -1 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-soft p-10"
                data-testid="health-check-intro"
              >
                <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-5">
                  {CATEGORIES.map((cat) => (
                    <span key={cat} className="rounded-xl border border-line bg-white px-3 py-2.5 text-center text-xs font-bold text-brand-navy">
                      {cat}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-faint">
                  You'll answer two questions per area. For each, pick the statement closest to how your calling operation runs today —
                  honesty gets you a useful result. It takes about two minutes.
                </p>
                <button type="button" data-testid="health-check-start" onClick={() => setStep(0)} className={btnPrimary}>
                  Start the assessment
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            )}

            {/* QUESTIONS */}
            {step >= 0 && step < HEALTH_QUESTIONS.length && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="rounded-3xl border border-line bg-soft p-8 sm:p-10"
                data-testid="health-check-question"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                    {HEALTH_QUESTIONS[step].category}
                  </span>
                  <span className="font-mono text-xs font-bold text-faint">
                    {step + 1} / {HEALTH_QUESTIONS.length}
                  </span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-line">
                  <motion.div
                    animate={{ width: `${((step + 1) / HEALTH_QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="h-full rounded-full bg-brand-orange"
                  />
                </div>
                <h2 className="mt-6 font-heading text-xl font-extrabold leading-snug tracking-tight text-ink sm:text-2xl">
                  {HEALTH_QUESTIONS[step].q}
                </h2>
                <div className="mt-6 flex flex-col gap-2.5">
                  {HEALTH_QUESTIONS[step].options.map((option, i) => (
                    <button
                      key={option}
                      type="button"
                      data-testid={`health-option-${i}`}
                      onClick={() => answer(i)}
                      className={`group flex items-center gap-4 rounded-xl border px-5 py-4 text-left text-sm font-semibold transition-all duration-200 ${
                        answers[step] === i + 1
                          ? "border-brand-orange bg-brand-orange-soft text-brand-orange-dark"
                          : "border-line bg-white text-body hover:-translate-y-0.5 hover:border-brand-navy/40 hover:shadow-md"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-bold transition-colors ${
                          answers[step] === i + 1
                            ? "bg-brand-orange text-white"
                            : "bg-bluegray text-brand-navy group-hover:bg-brand-navy group-hover:text-white"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  data-testid="health-back"
                  onClick={() => setStep(step - 1)}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-faint transition-colors hover:text-brand-navy"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
              </motion.div>
            )}

            {/* RESULTS */}
            {step === HEALTH_QUESTIONS.length && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex flex-col gap-8"
                data-testid="health-check-results"
              >
                <div className="band-dark grain relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl shadow-brand-navy/20 sm:p-10">
                  <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
                  <div className="relative flex flex-wrap items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div className="relative h-32 w-32 shrink-0">
                        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="9" />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="42"
                            fill="none"
                            stroke="#F47426"
                            strokeWidth="9"
                            strokeLinecap="round"
                            strokeDasharray={264}
                            initial={{ strokeDashoffset: 264 }}
                            animate={{ strokeDashoffset: 264 * (1 - totalScore / 100) }}
                            transition={{ duration: 1.4, ease: EASE }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center font-heading text-3xl font-extrabold text-white">
                          <CountUp to={totalScore} />
                        </span>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                          Call Center Health
                        </p>
                        <p className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white">
                          {totalScore}
                          <span className="text-xl text-white/40"> / 100</span>
                        </p>
                        <span className="mt-3 h-2.5 w-28 bg-ticks block opacity-50" aria-hidden="true" />
                      </div>
                    </div>
                    <span
                      className={`rounded-full border px-5 py-2.5 text-sm font-bold ${
                        totalScore >= 70
                          ? "border-rag-green/40 bg-rag-green/15 text-rag-green"
                          : totalScore >= 45
                            ? "border-rag-amber/40 bg-rag-amber/15 text-rag-amber"
                            : "border-rag-red/40 bg-rag-red/15 text-rag-red"
                      }`}
                      data-testid="health-tier"
                    >
                      {tier}
                    </span>
                  </div>
                  <div className="relative mt-10 flex flex-col gap-4">
                    {CATEGORIES.map((cat, i) => (
                      <div key={cat} className="flex items-center gap-4">
                        <span className="w-28 text-sm font-bold text-white/70">{cat}</span>
                        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/12">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${categoryScores[cat]}%` }}
                            transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: EASE }}
                            className={`h-full rounded-full ${categoryScores[cat] >= 70 ? "bg-white/80" : "bg-brand-orange"}`}
                          />
                        </div>
                        <span className="w-10 text-right font-mono text-sm font-bold text-white">{categoryScores[cat]}</span>
                      </div>
                    ))}
                  </div>
                  <p
                    className="relative mt-8 rounded-xl border border-brand-orange/30 bg-brand-orange/12 px-5 py-4 text-sm font-semibold leading-relaxed text-brand-orange"
                    data-testid="health-advice"
                  >
                    {ADVICE[weakest]}
                  </p>
                </div>

                {/* Lead form */}
                {!submitted ? (
                  <form onSubmit={submit} className="rounded-3xl border border-line bg-soft p-8 sm:p-10" data-testid="health-lead-form">
                    <Eyebrow>Discuss Your Results</Eyebrow>
                    <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-ink">
                      Want a professional read on these results?
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-faint">
                      Share your details and a senior member of our operations team will review your score with you — and
                      show where better scripts, coaching or Salesforce reporting would make the biggest difference.
                    </p>
                    <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input data-testid="health-name" required placeholder="Name *" value={form.name} onChange={set("name")} className={inputCls} aria-label="Name" />
                      <input data-testid="health-company" required placeholder="Company *" value={form.company} onChange={set("company")} className={inputCls} aria-label="Company" />
                      <input data-testid="health-email" required type="email" placeholder="Work email *" value={form.email} onChange={set("email")} className={inputCls} aria-label="Work email" />
                      <input data-testid="health-phone" placeholder="Phone" value={form.phone} onChange={set("phone")} className={inputCls} aria-label="Phone" />
                      <select data-testid="health-project-type" value={form.projectType} onChange={set("projectType")} className={inputCls} aria-label="Campaign type">
                        <option value="">Campaign type</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <select data-testid="health-stage" value={form.projectStage} onChange={set("projectStage")} className={inputCls} aria-label="Where are you today?">
                        <option value="">Where are you today?</option>
                        {STAGES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <select data-testid="health-budget" value={form.budgetRange} onChange={set("budgetRange")} className={`${inputCls} sm:col-span-2`} aria-label="Team size (optional)">
                        <option value="">Team size (optional)</option>
                        {SIZES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" data-testid="health-submit" disabled={submitting} className={`${btnPrimary} mt-6`}>
                      {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                      {submitting ? "Sending..." : "Discuss My Results"}
                    </button>
                  </form>
                ) : (
                  <Reveal>
                    <div className="flex flex-col items-start gap-4 rounded-3xl border border-line bg-soft p-10" data-testid="health-success">
                      <CheckCircle2 className="h-10 w-10 text-rag-green" />
                      <h2 className="font-heading text-2xl font-extrabold text-ink">Results received.</h2>
                      <p className="max-w-md text-sm leading-relaxed text-faint">
                        Thank you, {form.name}. We've logged your health score of {totalScore}/100 and will be in touch
                        to walk through what it means for your calling operation.
                      </p>
                    </div>
                  </Reveal>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
