import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/Section";
import { IndustryGrid } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import { INDUSTRIES } from "@/data/industries";

export default function Industries() {
  usePageMeta(
    "Industries We Serve | Stream Biz",
    "Project management expertise tailored to construction, real estate, technology, engineering, healthcare, professional services and complex multi-stakeholder programmes."
  );

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Project expertise that adapts to your industry."
        sub="The discipline of good project management is constant. Its application is not. We tailor structure, controls and governance to the constraints, regulators and delivery rhythms of your sector."
        meta={[
          { value: "8 sectors", label: "Industries we structure delivery for" },
          { value: "Sector controls", label: "Controls tuned to your regulators" },
          { value: "Live interfaces", label: "Delivery around operations, not instead of it" },
          { value: "One rhythm", label: "A governance cadence teams can sustain" },
        ]}
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <IndustryGrid industries={INDUSTRIES} testId="industries-grid" />
        </div>
      </section>
      <CTASection
        eyebrow="Your industry, your constraints"
        title="Tell us about your project's environment."
        sub="We'll show you how our delivery approach adapts to the realities of your sector."
        secondaryLabel="See How We Work"
        secondaryTo="/how-we-work"
      />
    </>
  );
}
