import { useLocation } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const CONTENT: Record<string, { title: string; sections: { h: string; p: string }[] }> = {
  "/privacy": {
    title: "Privacy Policy",
    sections: [
      { h: "What we collect", p: "When you submit a form on this website, we collect the details you provide — name, company, work email, phone number and campaign information — solely to respond to your enquiry." },
      { h: "How we use it", p: "Your information is used to review your requirements, contact you about your enquiry and, where relevant, prepare a proposal. We do not sell or share your data with third parties for marketing." },
      { h: "Retention & your rights", p: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. [Placeholder — replace with the official policy before launch.]" },
    ],
  },
  "/terms": {
    title: "Terms & Conditions",
    sections: [
      { h: "Use of this website", p: "This website provides general information about Stream Biz call center services. Content is provided in good faith and does not constitute professional advice for any specific campaign." },
      { h: "Engagements", p: "All services are provided under a separate written agreement defining scope, deliverables, timelines and fees. Nothing on this website constitutes a binding offer." },
      { h: "Liability", p: "[Placeholder — replace with the official terms before launch.]" },
    ],
  },
  "/cookies": {
    title: "Cookie Policy",
    sections: [
      { h: "What cookies we use", p: "This website uses only the cookies strictly necessary for it to function. We do not use advertising or tracking cookies." },
      { h: "Managing cookies", p: "You can control or delete cookies through your browser settings. [Placeholder — replace with the official policy before launch.]" },
    ],
  },
};

export default function Legal() {
  const { pathname } = useLocation();
  const content = CONTENT[pathname] ?? CONTENT["/privacy"];

  usePageMeta(`${content.title} | Stream Biz`, `${content.title} for the Stream Biz website.`);

  return (
    <>
      <PageHero eyebrow="Legal" title={content.title} />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 lg:px-8">
          {content.sections.map((section) => (
            <Reveal key={section.h}>
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-brand-navy">{section.h}</h2>
              <p className="mt-3 text-base leading-relaxed text-body">{section.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
