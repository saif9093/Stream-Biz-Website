import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Eyebrow, SectionHeading, btnGhost, btnPrimary } from "@/components/Section";
import { EASE, Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import NotFound from "@/pages/NotFound";
import { getIndustry, INDUSTRIES } from "@/data/industries";
import { SERVICES } from "@/data/services";
import { getIcon } from "@/lib/icons";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = slug ? getIndustry(slug) : undefined;

  usePageMeta(
    industry ? `${industry.title} Call Center Services | Stream Biz` : "Industry | Stream Biz",
    industry?.short
  );

  if (!industry) return <NotFound />;

  const relevant = SERVICES.filter((s) => industry.services.includes(s.slug));
  const others = INDUSTRIES.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      {/* Full-bleed image hero */}
      <section
        className="relative flex min-h-[640px] items-end overflow-hidden bg-[#0B1430] pb-14 pt-36 sm:min-h-[78svh] sm:pt-44"
        data-testid="industry-hero"
      >
        <motion.img
          key={industry.slug}
          src={industry.image}
          alt={industry.imageAlt}
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
              "linear-gradient(97deg, rgba(8,14,38,0.86) 0%, rgba(13,22,56,0.66) 38%, rgba(25,39,99,0.22) 70%, rgba(44,59,123,0) 100%)",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0B1430] via-[#0B1430]/10 to-[#0B1430]/40"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <Reveal className="flex max-w-3xl flex-col gap-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-white/60">
              <Link to="/industries" className="transition-colors hover:text-white">
                Industries
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{industry.title}</span>
            </nav>
            <Eyebrow dark>Industry expertise</Eyebrow>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.03] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.3)] sm:text-6xl">
              Call center campaigns for <span className="text-brand-orange">{industry.title.toLowerCase()}.</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{industry.intro}</p>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <Link to="/start-a-project" data-testid="industry-hero-cta" className={btnPrimary}>
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-we-work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15"
              >
                How We Work
              </Link>
            </div>
          </Reveal>

          {/* Services strip — real data from the industry's service mapping */}
          <Reveal delay={0.2} className="mt-14">
            <div className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:gap-6 sm:p-6">
              <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">
                Services we bring
              </span>
              <div className="flex flex-wrap gap-2">
                {relevant.map((service) => {
                  const Icon = getIcon(service.icon);
                  return (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:border-brand-orange hover:bg-brand-orange"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {service.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenges + typical campaigns */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
          <div>
            <SectionHeading eyebrow="Typical Challenges" title="What makes calling hard here." className="max-w-none" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {industry.challenges.map((challenge, i) => (
                <Reveal key={challenge} delay={i * 0.06} className="h-full">
                  <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-soft p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/[0.07]">
                    <span
                      className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-orange transition-transform duration-500 group-hover:scale-x-100"
                      aria-hidden="true"
                    />
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy font-mono text-xs font-bold text-white transition-colors duration-300 group-hover:bg-brand-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] font-semibold leading-relaxed text-ink">{challenge}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1} className="h-full">
            <div className="hero-dark grain relative h-full overflow-hidden rounded-3xl p-8 sm:p-10 lg:sticky lg:top-28">
              <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-6">
                <Eyebrow dark>Typical Campaigns</Eyebrow>
                <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white">
                  The calls we make for this sector.
                </h2>
                <ul className="flex flex-col">
                  {industry.typical.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 border-b border-white/10 py-4 text-sm font-semibold text-white/85 last:border-0"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brand-orange"
                >
                  Discuss your campaign
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Relevant services */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Relevant Services" title={`How Stream Biz supports ${industry.title.toLowerCase()}.`} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relevant.map((service, i) => {
              const Icon = getIcon(service.icon);
              return (
                <Reveal key={service.slug} delay={i * 0.07} className="h-full">
                  <Link
                    to={`/services/${service.slug}`}
                    data-testid={`industry-service-${service.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bluegray text-brand-navy transition-colors group-hover:bg-brand-orange group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-base font-extrabold tracking-tight text-ink">{service.title}</h3>
                    <p className="text-xs leading-relaxed text-faint">{service.short}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-faint">Also working in:</span>
              {others.map((other) => (
                <Link key={other.slug} to={`/industries/${other.slug}`} className={btnGhost}>
                  {other.title}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow={`Calling customers in ${industry.title.toLowerCase()}?`}
        title="Let's talk about your customers."
        sub="We'll bring trained agents, sector-ready scripts and a Salesforce setup built for your industry."
      />
    </>
  );
}
