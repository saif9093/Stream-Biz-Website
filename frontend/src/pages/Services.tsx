import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/Section";
import { ServiceCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/data/services";

export default function Services() {
  usePageMeta(
    "Call Center Services | Stream Biz",
    "Eight managed call center services — outbound sales, lead generation, appointment setting, customer support, retention, Salesforce CRM operations and quality assurance."
  );

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Call center projects, managed end to end."
        sub="Companies hire Stream Biz to call their prospects and customers. Each service below is run as a managed project — with trained agents, a named project manager and every call recorded in Salesforce."
        meta={[
          { value: "8 services", label: "Sales, support and CRM under one team" },
          { value: "6 steps", label: "From client brief to live campaign" },
          { value: "Salesforce", label: "Every lead, call and case in one place" },
          { value: "EN / AR", label: "English and Arabic-speaking agents" },
        ]}
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-testid="services-grid">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="Not sure where to start?"
        title="Tell us about your campaign — we'll recommend the right service."
        sub="A short call is usually enough to agree the right team size, scripts and Salesforce setup."
        secondaryLabel="Take the Health Check"
        secondaryTo="/project-health-check"
      />
    </>
  );
}
