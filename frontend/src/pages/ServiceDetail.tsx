import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, FileText } from "lucide-react";
import { motion } from "motion/react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SectionHeading, Eyebrow, btnGhost, btnPrimary } from "@/components/Section";
import { EASE, Reveal } from "@/components/Reveal";
import { scrollToId } from "@/lib/lenis";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import NotFound from "@/pages/NotFound";
import { getService, serviceImage, SERVICES } from "@/data/services";
import { ENGAGEMENT_STEPS } from "@/data/site";
import { getIcon } from "@/lib/icons";

const SERVICE_SECTIONS = [
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Approach" },
  { id: "deliverables", label: "Deliverables" },
  { id: "engagement", label: "Engagement" },
  { id: "impact", label: "Impact" },
  { id: "faqs", label: "FAQs" },
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  usePageMeta(
    service ? `${service.title} | Stream Biz` : "Service | Stream Biz",
    service?.short
  );

  if (!service) return <NotFound />;

  const Icon = getIcon(service.icon);
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Full-bleed image hero */}
      <section
        className="relative flex min-h-[620px] items-end overflow-hidden bg-[#0B1430] pb-16 pt-40 sm:min-h-[74svh]"
        data-testid="service-hero"
      >
        <motion.img
          key={service.slug}
          src={serviceImage(service.slug)}
          alt={`${service.title} — Stream Biz project delivery`}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(97deg, rgba(8,14,38,0.88) 0%, rgba(13,22,56,0.68) 40%, rgba(25,39,99,0.22) 72%, rgba(44,59,123,0) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1430] via-[#0B1430]/10 to-[#0B1430]/40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <Reveal className="flex max-w-3xl flex-col gap-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-white/60">
              <Link to="/services" className="transition-colors hover:text-white">
                Services
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{service.title}</span>
            </nav>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white shadow-lg shadow-brand-orange/30">
                <Icon className="h-5 w-5" />
              </span>
              <Eyebrow dark>Service {service.num}</Eyebrow>
            </div>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.3)] sm:text-6xl">
              {service.heroTitle}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{service.heroSub}</p>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Link to="/start-a-project" data-testid="service-hero-cta" className={btnPrimary}>
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => scrollToId("approach")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15"
              >
                See Our Approach
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sticky in-page nav */}
      <nav
        className="sticky top-[88px] z-30 border-b border-line bg-white/92 backdrop-blur-xl"
        aria-label="Service sections"
        data-testid="service-subnav"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-6 lg:px-8">
          {SERVICE_SECTIONS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              data-testid={`service-subnav-${s.id}`}
              onClick={() => scrollToId(s.id)}
              className="group flex shrink-0 items-center gap-2 px-4 py-4 text-xs font-bold uppercase tracking-wider text-faint transition-colors hover:text-brand-orange"
            >
              <span className="font-mono text-[10px] text-faint/50 group-hover:text-brand-orange">0{i + 1}</span>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* The Challenge */}
      <section id="challenge" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>The Challenge</Eyebrow>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">What typically goes wrong</h2>
            <p className="text-base leading-relaxed text-faint md:text-lg">{service.challenge}</p>
          </Reveal>
          <div className="flex flex-col gap-3">
            {service.challengePoints.map((point, i) => (
              <Reveal key={point} delay={i * 0.07}>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-soft p-5">
                  <span className="font-mono text-xs font-bold text-brand-orange">0{i + 1}</span>
                  <p className="text-sm font-semibold leading-relaxed text-ink">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach + What We Manage */}
      <section id="approach" className="scroll-mt-24 bg-soft py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">How Stream Biz solves it</h2>
            <p className="text-base leading-relaxed text-faint md:text-lg">{service.approach}</p>
            <div className="mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-navy text-white">
              <Icon className="h-7 w-7" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h3 className="font-heading text-xl font-extrabold tracking-tight text-ink">What we manage</h3>
            </Reveal>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {service.manage.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl border border-line bg-white px-4 py-3.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                    <span className="text-sm font-semibold text-body">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section id="deliverables" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="What You Receive" title="Deliverables you can hold us to." />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {service.deliverables.map((item, i) => (
                <Reveal key={item} delay={i * 0.05}>
                  <div className="flex items-center gap-3 rounded-xl border border-line bg-soft px-4 py-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-navy">
                      <FileText className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-ink">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="band-dark grain relative overflow-hidden rounded-3xl border border-white/10 p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-orange">{service.packageLabel}</p>
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {service.outputs.map((output) => (
                    <div key={output} className="flex items-center gap-2.5 rounded-lg border border-white/12 bg-white/5 px-3.5 py-3">
                      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-orange" aria-hidden="true" />
                      <span className="text-xs font-semibold text-white">{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section id="engagement" className="scroll-mt-24 bg-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="How Engagement Works" title="Five steps from first call to controlled delivery." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6">
                  <span className="font-mono text-xs font-bold text-brand-orange">{step.num}</span>
                  <h3 className="font-heading text-lg font-extrabold tracking-tight text-ink">{step.name}</h3>
                  <p className="text-xs leading-relaxed text-faint">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section id="impact" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Business Impact" title="What changes when this is in place." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.07}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border-t-2 border-brand-orange bg-soft p-6">
                  <span className="font-heading text-2xl font-extrabold text-brand-navy/20">0{i + 1}</span>
                  <p className="text-sm font-bold leading-snug text-ink">{benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="scroll-mt-24 bg-soft py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked."
            sub={`Straight answers about our ${service.title.toLowerCase()} service.`}
            className="max-w-none"
          />
          <Reveal>
            <FaqAccordion items={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-xl font-extrabold tracking-tight text-ink">Related services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} data-testid={`related-service-${s.slug}`} className={btnGhost}>
                {s.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need stronger project control?"
        title={`Talk to us about ${service.title.toLowerCase()}.`}
        sub="Tell us where your project stands and we'll show you exactly how this service would apply."
        primaryLabel="Talk to a Project Manager"
        primaryTo="/contact"
        secondaryLabel="Start a Project"
        secondaryTo="/start-a-project"
      />
    </>
  );
}
