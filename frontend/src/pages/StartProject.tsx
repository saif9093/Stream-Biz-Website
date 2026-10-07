import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { NEXT_STEPS } from "@/data/site";

export default function StartProject() {
  usePageMeta(
    "Start a Project | Stream Biz",
    "Tell us about your project — its goals, constraints and stage — and a senior project professional will identify where Stream Biz can make the biggest difference."
  );

  return (
    <>
      <PageHero
        eyebrow="Start a Project"
        title="Tell us what you're delivering."
        sub="The more we know about your project — its stage, stakeholders and constraints — the faster we can identify where structure and control will make the biggest difference."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
          <Reveal>
            <LeadForm source="start-a-project" />
          </Reveal>
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="band-dark grain relative overflow-hidden rounded-3xl border border-white/10 p-8">
                <h2 className="font-heading text-xl font-extrabold tracking-tight text-white">What happens next</h2>
                <div className="mt-6 flex flex-col gap-5">
                  {NEXT_STEPS.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-orange/60 font-mono text-xs font-bold text-brand-orange">
                        {step.num}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{step.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-white/60">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-dashed border-line bg-soft p-8">
                <h2 className="font-heading text-base font-extrabold tracking-tight text-ink">Prefer to diagnose first?</h2>
                <p className="mt-2 text-sm leading-relaxed text-faint">
                  Take the two-minute Project Health Check and bring the results to the conversation.
                </p>
                <a
                  href="/project-health-check"
                  data-testid="start-health-check-link"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition-colors hover:text-brand-orange-dark"
                >
                  Take the Project Health Check
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
