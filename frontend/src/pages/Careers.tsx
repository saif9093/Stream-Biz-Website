import { useState, type FormEvent } from "react";
import { ArrowRight, Briefcase, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero, SectionHeading, btnPrimary } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { inputCls, labelCls } from "@/lib/formOptions";
import { apiPost } from "@/lib/api";
import { getIcon } from "@/lib/icons";
import { CAREER_ROLES, CAREER_VALUES } from "@/data/growth";

export default function Careers() {
  usePageMeta(
    "Careers | Stream Biz",
    "Build your project delivery career at Stream Biz — senior-led teams, varied sectors and work that matters."
  );

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", projectType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Reuses the leads endpoint; projectType carries the role of interest, company the current employer.
      await apiPost("/leads", { ...form, source: "careers" });
      setDone(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const applyFor = (role: string) => {
    setForm((f) => ({ ...f, projectType: role }));
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career delivering projects that matter."
        sub="Join a team of project professionals who bring structure, visibility and accountability to complex work across construction, technology, healthcare and transformation."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Why Stream Biz" title="What working here is like." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_VALUES.map((v, i) => {
              const Icon = getIcon(v.icon);
              return (
                <Reveal key={v.title} delay={i * 0.07} className="h-full">
                  <div className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-soft p-7 transition-[transform,background-color,border-color] duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:bg-white">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white transition-colors group-hover:bg-brand-orange">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-extrabold text-ink">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-faint">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Roles We Hire For"
            title="Where you could fit."
            sub="Specific openings are posted here as they become available. Register your interest and we'll reach out when a matching role opens."
          />
          <div className="mt-10 flex flex-col gap-3">
            {CAREER_ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bluegray text-brand-navy">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-extrabold text-ink">{r.title}</h3>
                      <p className="text-xs font-semibold text-faint">
                        {r.area} · {r.type}
                      </p>
                    </div>
                  </div>
                  <button type="button" onClick={() => applyFor(r.title)} className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition-colors hover:text-brand-orange">
                    Register interest <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-28 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading eyebrow="Register Your Interest" title="Tell us about yourself." center />
          <Reveal className="mt-10">
            {done ? (
              <div className="band-dark grain relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl p-10" data-testid="careers-success">
                <CheckCircle2 className="h-10 w-10 text-rag-green" />
                <h3 className="font-heading text-2xl font-extrabold text-white">Thanks, {form.firstName}.</h3>
                <p className="text-sm leading-relaxed text-white/70">We've received your details and will be in touch when a matching role opens.</p>
              </div>
            ) : (
              <form onSubmit={submit} data-testid="careers-form" className="grid gap-5 rounded-3xl border border-line p-7 sm:grid-cols-2 sm:p-10">
                <label className="flex flex-col gap-1.5"><span className={labelCls}>First name *</span><input required value={form.firstName} onChange={set("firstName")} className={inputCls} /></label>
                <label className="flex flex-col gap-1.5"><span className={labelCls}>Last name *</span><input required value={form.lastName} onChange={set("lastName")} className={inputCls} /></label>
                <label className="flex flex-col gap-1.5"><span className={labelCls}>Email *</span><input required type="email" value={form.email} onChange={set("email")} className={inputCls} /></label>
                <label className="flex flex-col gap-1.5"><span className={labelCls}>Current company *</span><input required value={form.company} onChange={set("company")} className={inputCls} /></label>
                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className={labelCls}>Role of interest</span>
                  <select value={form.projectType} onChange={set("projectType")} className={inputCls}>
                    <option value="">Select a role</option>
                    {CAREER_ROLES.map((r) => <option key={r.title} value={r.title}>{r.title}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className={labelCls}>Experience & LinkedIn</span>
                  <textarea rows={4} value={form.message} onChange={set("message")} className={inputCls} placeholder="A short summary of your experience and a link to your LinkedIn profile." />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={submitting} className={`${btnPrimary} disabled:opacity-60`}>
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    Register Interest
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
