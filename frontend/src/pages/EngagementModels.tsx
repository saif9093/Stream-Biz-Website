import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero, SectionHeading, btnPrimary } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ENGAGEMENT_MODELS } from "@/data/site";

export default function EngagementModels() {
  usePageMeta(
    "Engagement Models | Stream Biz",
    "Five ways to work with Stream Biz — pilot campaigns, dedicated agent teams, managed campaigns, Salesforce operations and overflow support."
  );

  return (
    <>
      <PageHero
        eyebrow="Engagement Models"
        title="The right way to work with us for your campaign."
        sub="Every client needs something different. These five models cover the range — from a short pilot to a fully managed, multi-campaign program — each shaped to your volumes and goals."
        meta={[
          { value: "5 models", label: "From pilot campaigns to full programs" },
          { value: "Scalable", label: "Add or reduce agents as volumes change" },
          { value: "Flexible terms", label: "Pilot, monthly or longer-term" },
          { value: "One accountable lead", label: "A named project manager throughout" },
        ]}
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-testid="engagement-models-grid">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <Reveal key={model.num} delay={(i % 3) * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-5 rounded-3xl border border-line bg-soft p-8 transition-colors duration-300 hover:border-brand-orange/50 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand-orange">{model.num}</span>
                    <span className="h-2 w-2 rotate-45 bg-brand-orange" aria-hidden="true" />
                  </div>
                  <h2 className="font-heading text-2xl font-extrabold tracking-tight text-ink">{model.title}</h2>
                  <p className="text-sm font-semibold leading-relaxed text-brand-navy">{model.for}</p>
                  <ul className="flex flex-col gap-2.5 border-t border-line pt-5">
                    {model.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    data-testid={`engagement-${model.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-bold text-brand-navy transition-colors hover:text-brand-orange"
                  >
                    Discuss Your Requirements
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.16} className="h-full">
              <div className="band-dark grain relative flex h-full flex-col items-start justify-center gap-5 overflow-hidden rounded-3xl border border-white/10 p-8">
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-white">How pricing works</h2>
                <p className="text-sm leading-relaxed text-white/70">
                  Pricing is based on team size, hours, campaign type, languages and Salesforce setup. You'll receive a
                  clear proposal before any campaign begins — no hidden costs.
                </p>
                <Link to="/start-a-project" data-testid="engagement-start" className={btnPrimary}>
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-soft py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Not sure which model fits?"
            title="That's what the consultation is for."
            sub="Describe your campaign and we'll recommend the model that fits your volumes and goals."
          />
        </div>
      </section>
      <CTASection
        eyebrow="Ready when you are"
        title="Let's scope the right campaign."
        sub="A focused conversation about your customers and goals is all it takes to recommend the right model."
      />
    </>
  );
}
