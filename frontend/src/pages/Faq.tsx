import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero, SectionHeading } from "@/components/Section";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import { SITE_FAQS } from "@/data/site";

export default function Faq() {
  usePageMeta(
    "FAQ | Stream Biz Call Center Services",
    "Answers to common questions about Stream Biz call center services, Salesforce, call quality, languages, launch times and careers."
  );

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers to practical questions."
        sub="The questions clients — and job candidates — ask most about Stream Biz, answered directly."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading eyebrow="Common Questions" title="Everything you're probably wondering." className="mb-10" />
          <div data-testid="faq-list">
            <FaqAccordion items={SITE_FAQS} />
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Still have questions?"
        title="Ask us about your specific campaign."
        sub="General answers only go so far — a short conversation about your situation goes further."
      />
    </>
  );
}
