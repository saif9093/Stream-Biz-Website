import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { apiPost } from "@/lib/api";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { btnPrimary } from "./Section";
import { inputCls, labelCls, PROJECT_TYPES, STAGES, SIZES, TIMELINES } from "@/lib/formOptions";

export default function LeadForm({ source, showServices = true }: { source: string; showServices?: boolean }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    projectType: "",
    projectStage: "",
    projectSize: "",
    timeline: "",
    message: "",
  });
  const [services, setServices] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const toggleService = (title: string) =>
    setServices((s) => (s.includes(title) ? s.filter((x) => x !== title) : [...s, title]));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await apiPost("/leads", { ...form, services, source });
      setDone(true);
    } catch {
      toast.error("Something went wrong sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div
        data-testid="lead-form-success"
        className="band-dark grain relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl border border-white/10 p-10"
      >
        <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
        <CheckCircle2 className="relative h-10 w-10 text-rag-green" />
        <h3 className="relative font-heading text-2xl font-extrabold text-white">Request received.</h3>
        <p className="relative max-w-md text-sm leading-relaxed text-white/70 md:text-base">
          Thank you, {form.firstName}. We've received your project details and will review your requirements, identify
          the right areas of support and get in touch to schedule a consultation.
        </p>
        <span className="relative mt-2 h-2.5 w-32 bg-ticks opacity-50" aria-hidden="true" />
      </div>
    );
  }

  return (
    <form onSubmit={submit} data-testid="lead-form" className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="firstName" className={labelCls}>First Name *</label>
        <input id="firstName" data-testid="lead-first-name" required value={form.firstName} onChange={set("firstName")} className={inputCls} placeholder="Jane" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="lastName" className={labelCls}>Last Name *</label>
        <input id="lastName" data-testid="lead-last-name" required value={form.lastName} onChange={set("lastName")} className={inputCls} placeholder="Cooper" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className={labelCls}>Work Email *</label>
        <input id="email" data-testid="lead-email" type="email" required value={form.email} onChange={set("email")} className={inputCls} placeholder="jane@company.com" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className={labelCls}>Company *</label>
        <input id="company" data-testid="lead-company" required value={form.company} onChange={set("company")} className={inputCls} placeholder="Company Ltd." />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className={labelCls}>Phone</label>
        <input id="phone" data-testid="lead-phone" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+1 ..." />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="industry" className={labelCls}>Industry</label>
        <select id="industry" data-testid="lead-industry" value={form.industry} onChange={set("industry")} className={inputCls}>
          <option value="">Select industry</option>
          {INDUSTRIES.map((i) => (
            <option key={i.slug} value={i.title}>{i.title}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectType" className={labelCls}>Project Type</label>
        <select id="projectType" data-testid="lead-project-type" value={form.projectType} onChange={set("projectType")} className={inputCls}>
          <option value="">Select project type</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectStage" className={labelCls}>Current Project Stage</label>
        <select id="projectStage" data-testid="lead-stage" value={form.projectStage} onChange={set("projectStage")} className={inputCls}>
          <option value="">Select stage</option>
          {STAGES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectSize" className={labelCls}>Estimated Project Size</label>
        <select id="projectSize" data-testid="lead-size" value={form.projectSize} onChange={set("projectSize")} className={inputCls}>
          <option value="">Select size</option>
          {SIZES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="timeline" className={labelCls}>Expected Timeline</label>
        <select id="timeline" data-testid="lead-timeline" value={form.timeline} onChange={set("timeline")} className={inputCls}>
          <option value="">Select timeline</option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      {showServices && (
        <fieldset className="sm:col-span-2">
          <legend className={`mb-3 block ${labelCls}`}>Services Required</legend>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <label
                key={s.slug}
                className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-3 text-xs font-semibold transition-colors ${
                  services.includes(s.title)
                    ? "border-brand-orange bg-brand-orange-soft text-brand-orange-dark"
                    : "border-line bg-white text-body hover:border-brand-navy/30"
                }`}
              >
                <input
                  type="checkbox"
                  data-testid={`lead-service-${s.slug}`}
                  checked={services.includes(s.title)}
                  onChange={() => toggleService(s.title)}
                  className="h-4 w-4 accent-brand-orange"
                />
                {s.title}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="message" className={labelCls}>Message</label>
        <textarea
          id="message"
          data-testid="lead-message"
          rows={5}
          value={form.message}
          onChange={set("message")}
          className={inputCls}
          placeholder="Tell us about your project — goals, constraints, stakeholders, and where you need support."
        />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" data-testid="lead-submit-button" disabled={submitting} className={`${btnPrimary} w-full sm:w-auto`}>
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {submitting ? "Sending..." : "Request a Consultation"}
        </button>
      </div>
    </form>
  );
}
