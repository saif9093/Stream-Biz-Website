import { Check, Minus } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SupportModels } from "@/components/GrowthSections";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";
import { getIcon } from "@/lib/icons";
import { PRICING_FACTORS, SERVICE_TIERS, TIER_MATRIX } from "@/data/growth";

// No figures are published on purpose — every campaign is scoped and quoted individually.
const PRICING_FAQS = [
  { q: "Why don't you publish fixed prices?", a: "No two campaigns need the same team size, hours, languages or Salesforce setup. We scope every campaign against your real volumes so you pay for what you need — no more, no less." },
  { q: "How quickly can I get a proposal?", a: "After a short call we send a written proposal with team, scripts, launch plan, reporting and fees." },
  { q: "Can we start small and scale up?", a: "Yes. Many clients begin with a pilot or a shared team, then move to a dedicated team or a multi-campaign program as results come in." },
  { q: "How are campaigns billed?", a: "Usually per agent per month or per hour worked. Setup work such as Salesforce configuration can be quoted as a fixed fee. Performance-linked options can be discussed." },
];

export default function Pricing() {
  usePageMeta(
    "Pricing & Service Tiers | Stream Biz",
    "Compare Stream Biz service tiers and team models, see what shapes the cost of a managed call center campaign, and request a tailored proposal."
  );

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing built around your campaign — not a price list."
        sub="Choose a team model and service tier, compare what each includes, and request a proposal built around your real call volumes and goals."
        meta={[
          { value: "3 tiers", label: "Launch, Managed, Growth" },
          { value: "3 team models", label: "Shared, dedicated, multi-campaign" },
          { value: "Flexible", label: "Scale agents up or down with demand" },
          { value: "Clear", label: "Written scope and fees before launch" },
        ]}
      />

      <SupportModels showPricingLink={false} />

      {/* Comparison table */}
      <section className="bg-white py-20 sm:py-24" data-testid="tier-matrix">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading eyebrow="Compare Tiers" title="What each tier includes." center />
          <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="px-6 py-5 text-sm font-bold">Capability</th>
                  {SERVICE_TIERS.map((t) => (
                    <th key={t.num} className={`px-4 py-5 text-center ${t.featured ? "bg-brand-orange" : ""}`}>
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{t.num}</span>
                      <span className="font-heading text-base font-extrabold">{t.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIER_MATRIX.map((row, i) => (
                  <tr key={row.feature} className={i % 2 ? "bg-soft" : "bg-white"}>
                    <td className="px-6 py-4 text-sm font-semibold text-body">{row.feature}</td>
                    {row.tiers.map((on, j) => (
                      <td key={j} className={`px-4 py-4 text-center ${SERVICE_TIERS[j].featured ? "bg-brand-orange-soft/40" : ""}`}>
                        {on ? (
                          <Check className="mx-auto h-5 w-5 text-brand-orange" aria-label="Included" />
                        ) : (
                          <Minus className="mx-auto h-5 w-5 text-faint/30" aria-label="Not included" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* What shapes cost */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="What Shapes the Cost" title="Four factors drive every proposal." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRICING_FACTORS.map((f, i) => {
              const Icon = getIcon(f.icon);
              return (
                <Reveal key={f.title} delay={i * 0.07} className="h-full">
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-extrabold text-ink">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-faint">{f.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Request pricing */}
      <section id="request" className="scroll-mt-28 bg-white py-20 sm:py-24" data-testid="pricing-request">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Request Pricing"
              title="Get a tailored proposal."
              sub="Tell us about your campaign and the support you're considering. We'll come back with team, launch plan and fees."
              className="max-w-none"
            />
            <Reveal>
              <h3 className="mb-4 font-heading text-lg font-extrabold text-ink">Pricing questions</h3>
              <FaqAccordion items={PRICING_FAQS} />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-brand-navy/[0.05] sm:p-10">
              <LeadForm source="pricing" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
