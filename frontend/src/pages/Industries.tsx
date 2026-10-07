import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/Section";
import { IndustryGrid } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import { INDUSTRIES } from "@/data/industries";

export default function Industries() {
  usePageMeta(
    "Industries We Serve | Stream Biz",
    "Call center campaigns tailored to real estate, banking and insurance, telecom, healthcare, e-commerce, technology, education and travel."
  );

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Call center campaigns tailored to your industry."
        sub="The way we run campaigns is constant. The scripts, compliance rules, call times and Salesforce setup are tailored to your sector and your customers."
        meta={[
          { value: "8 sectors", label: "Industries we run campaigns for" },
          { value: "Sector scripts", label: "Language and offers your customers know" },
          { value: "Compliance", label: "Calling rules and consent for each market" },
          { value: "Salesforce", label: "Industry-ready fields, stages and reports" },
        ]}
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <IndustryGrid industries={INDUSTRIES} testId="industries-grid" />
        </div>
      </section>
      <CTASection
        eyebrow="Your industry, your constraints"
        title="Tell us about your customers."
        sub="We'll show you how a Stream Biz campaign would work for your sector."
        secondaryLabel="See How We Work"
        secondaryTo="/how-we-work"
      />
    </>
  );
}
