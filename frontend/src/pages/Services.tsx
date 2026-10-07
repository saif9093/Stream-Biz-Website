import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/Section";
import { ServiceCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/data/services";

export default function Services() {
  usePageMeta(
    "Project Management Services | Stream Biz",
    "Eight specialist project management services — from end-to-end delivery leadership and PMO governance to project controls, planning, risk and delivery assurance."
  );

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Project management built around your reality."
        sub="Every project has different constraints, stakeholders and delivery expectations. Our services are designed to provide the structure and expertise needed at the stage where you need it most."
        meta={[
          { value: "8 services", label: "Specialist disciplines, one accountable team" },
          { value: "6 phases", label: "A structured path from kickoff to closeout" },
          { value: "1 source of truth", label: "Every stakeholder sees the same picture" },
          { value: "Any stage", label: "Engaged from concept through recovery" },
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
        title="Tell us about the project — we'll identify the right support."
        sub="A short consultation is usually enough to pinpoint where structure, controls or leadership will make the biggest difference."
        secondaryLabel="Take the Project Health Check"
        secondaryTo="/project-health-check"
      />
    </>
  );
}
