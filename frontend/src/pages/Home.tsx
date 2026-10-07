import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Calculator, MapPin } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Reveal, CountUp, EASE } from "@/components/Reveal";
import { SectionHeading, Eyebrow, btnPrimary, btnGhost } from "@/components/Section";
import HeroSlider from "@/components/HeroSlider";
import DeliveryControlSystem from "@/components/DeliveryControlSystem";
import ProjectDashboard from "@/components/ProjectDashboard";
import { ServiceCard, IndustryGrid, ArticleCard } from "@/components/Cards";
import { DeliveryToolkit, SupportModels, Testimonials } from "@/components/GrowthSections";
import ProjectSnapshot from "@/components/ProjectSnapshot";
import ProcessTimeline from "@/components/ProcessTimeline";
import CapabilityBand from "@/components/CapabilityBand";
import DifferenceSection from "@/components/DifferenceSection";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";
import { HOME_FAQ_COUNT } from "@/data/growth";
import { getIcon } from "@/lib/icons";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { ARTICLES } from "@/data/insights";
import { PROBLEM_CARDS, SITE_FAQS, NEXT_STEPS, OFFICE, officeDirections } from "@/data/site";

function EditorialBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-navy-abyss" data-testid="editorial-band">
      <motion.img
        src="/media/band-governance.jpg"
        alt="Project delivery team in a governance review session"
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,14,38,0.97) 0%, rgba(13,22,56,0.92) 50%, rgba(25,39,99,0.72) 100%)",
        }}
      />
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-28 sm:py-36 lg:px-8">
        <Reveal>
          <Eyebrow dark>Our Position</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[3.2rem]">
            We establish the{" "}
            <span className="text-brand-orange">structure</span>,{" "}
            <span className="text-brand-orange">visibility</span> and{" "}
            <span className="text-brand-orange">accountability</span>{" "}
            your project needs to move forward with confidence.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-10 border-t border-white/12 pt-8">
            {[
              { to: 6, suffix: "", label: "Delivery disciplines in every engagement" },
              { to: 8, suffix: "", label: "Specialist services, one accountable team" },
              { to: 1, suffix: "", label: "Source of truth for every stakeholder" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <span className="font-heading text-5xl font-extrabold tracking-tight text-brand-orange">
                  <CountUp to={stat.to} />
                </span>
                <span className="max-w-[180px] text-xs font-semibold leading-snug text-white/55">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta(
    "Stream Biz | Project Management Services",
    "Stream Biz helps organizations plan, manage and control critical projects with disciplined project management, practical governance and real-time visibility."
  );

  return (
    <>
      {/* ── HERO SLIDER ──────────────────────────────────── */}
      <HeroSlider />

      {/* ── CAPABILITY BAND ──────────────────────────────── */}
      <CapabilityBand />

      {/* ── EDITORIAL STATEMENT BAND ─────────────────────── */}
      <EditorialBand />

      {/* ── PROBLEM ──────────────────────────────────────── */}
      <section className="bg-soft py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Project Challenge"
            title="Projects rarely fail because people aren't working hard."
            sub="They fail when planning, ownership, communication and control break down. These are the four failure patterns we are brought in to fix most often."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {PROBLEM_CARDS.map((card, i) => {
              const Icon = getIcon(card.icon);
              const span = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-4"][i] ?? "lg:col-span-3";
              const dark = i === 0;
              return (
                <Reveal key={card.num} delay={i * 0.08} className={`h-full ${span}`}>
                  <div
                    data-testid={`problem-card-${i}`}
                    className={`group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 sm:p-8 ${
                      dark
                        ? "band-dark grain border border-white/10 text-white hover:shadow-2xl hover:shadow-brand-navy/30"
                        : "border border-line bg-white hover:shadow-xl hover:shadow-brand-navy/[0.07]"
                    }`}
                  >
                    {dark && <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />}
                    <div className="relative flex items-center justify-between">
                      <span
                        className={`font-heading text-5xl font-extrabold transition-colors duration-300 ${
                          dark ? "text-white/15 group-hover:text-brand-orange/40" : "text-bluegray group-hover:text-brand-orange/30"
                        }`}
                      >
                        {card.num}
                      </span>
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${
                          dark
                            ? "bg-white/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                            : "bg-soft text-brand-navy group-hover:bg-brand-orange group-hover:text-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3
                      className={`relative font-heading font-extrabold tracking-tight ${
                        dark ? "text-2xl text-white sm:text-3xl" : "text-lg text-ink"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p className={`relative text-sm leading-relaxed ${dark ? "text-white/65 md:text-base" : "text-faint"}`}>
                      {card.text}
                    </p>
                    <div className="relative mt-auto flex items-end gap-1 pt-3" aria-hidden="true">
                      {[38, 62, 46, 80, 30].map((h, j) => (
                        <span
                          key={j}
                          className={`w-full rounded-sm ${
                            j === 3 ? "bg-brand-orange/80" : dark ? "bg-white/15" : "bg-bluegray"
                          }`}
                          style={{ height: `${h / 2.4}px` }}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE STREAM BIZ DIFFERENCE ───────────────────── */}
      <DifferenceSection />

      {/* ── DELIVERY CONTROL SYSTEM ──────────────────────── */}
      <section className="band-dark grain relative overflow-hidden py-24 sm:py-32">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            dark
            center
            eyebrow="The Delivery Control System"
            title="One system that turns project inputs into predictable delivery."
            sub="Every engagement runs on the same operating core: the complexity your project carries on one side, the clarity leadership needs on the other."
          />
          <div className="mt-16">
            <DeliveryControlSystem />
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Core Services"
              title="Project management built around your reality."
              sub="Eight specialist services that provide the structure and expertise your project needs — at the stage where you need it most."
            />
            <Reveal delay={0.1}>
              <Link to="/services" data-testid="services-view-all" className={btnGhost}>
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature tile — the lead service, dark so the grid has a focal point */}
            <Reveal className="h-full sm:col-span-2 lg:row-span-2">
              <Link
                to={`/services/${SERVICES[0].slug}`}
                data-testid="service-feature-tile"
                className="group relative flex h-full min-h-[460px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-brand-navy p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-navy/30"
              >
                <img
                  src="/media/service-project-management.jpg"
                  alt="Project manager leading a delivery review with the project team"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1430] via-[#0B1430]/70 to-[#0B1430]/5"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B1430]/50 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg shadow-brand-orange/30">
                    {(() => {
                      const FeatureIcon = getIcon(SERVICES[0].icon);
                      return <FeatureIcon className="h-6 w-6" />;
                    })()}
                  </span>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs font-bold text-white/80 backdrop-blur-md">
                    {SERVICES[0].num}
                  </span>
                </div>
                <div className="relative mt-10 flex flex-col gap-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">
                    Lead discipline
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                    {SERVICES[0].title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/80 md:text-base">{SERVICES[0].short}</p>
                  <span className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
            {SERVICES.slice(1).map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
            {/* Closing tile keeps the bento grid complete */}
            <Reveal delay={0.1} className="h-full">
              <Link
                to="/services"
                data-testid="services-bento-view-all"
                className="group flex h-full flex-col justify-between gap-6 rounded-2xl border border-dashed border-line bg-soft p-7 transition-[border-color,background-color] duration-300 hover:border-brand-orange/60 hover:bg-white"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">
                  All disciplines
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-xl font-extrabold leading-tight tracking-tight text-ink">
                    See how the eight services fit together.
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition-colors group-hover:text-brand-orange">
                    View all services
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DELIVERY TOOLKIT ─────────────────────────────── */}
      <DeliveryToolkit />

      {/* ── PROJECT DASHBOARD DEMO ───────────────────────── */}
      <section className="bg-soft py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Project Visibility"
                title="See every project the way leadership needs to."
                sub="This is what delivery looks like when it's properly controlled: one honest view of progress, cost, risk and milestones — updated from real project data, not assembled for the meeting."
              />
              <Reveal delay={0.15}>
                <ul className="flex flex-col gap-3.5">
                  {[
                    "RAG status leadership can trust",
                    "Progress measured against baseline, not opinion",
                    "Risks and issues visible before they land",
                    "Milestones tracked to the week",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-body">
                      <span className="h-2 w-2 shrink-0 rotate-45 bg-brand-orange" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <Link to="/services/project-controls-reporting" data-testid="dashboard-cta" className={btnPrimary}>
                  Explore Project Controls
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <ProjectDashboard />
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────── */}
      <ProcessTimeline />

      {/* ── SUPPORT MODELS & TIERS ───────────────────────── */}
      <SupportModels />

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section className="bg-soft py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Industries"
              title="Project expertise that adapts to your industry."
              sub="The discipline is constant; the application is tailored to the constraints, regulators and rhythms of your sector."
            />
            <Reveal delay={0.1}>
              <Link to="/industries" data-testid="industries-view-all" className={btnGhost}>
                All industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14">
            <IndustryGrid industries={INDUSTRIES} testId="home-industries-grid" />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <Testimonials />

      {/* ── HEALTH CHECK CTA ─────────────────────────────── */}
      <section className="band-dark grain relative overflow-hidden py-24 sm:py-32" data-testid="health-check-band">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <SectionHeading
                dark
                eyebrow="Project Health Check"
                title="Is your project on track — or just reporting that it is?"
                sub="Answer ten focused questions and get an instant, visual read on your project's planning, schedule, budget, risk and governance health."
              />
              <Reveal delay={0.15}>
                <Link to="/project-health-check" data-testid="health-check-cta" className={btnPrimary}>
                  Take the Project Health Check
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="flex items-end justify-between">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">Project Health</p>
                  <p className="font-heading text-4xl font-extrabold text-white">
                    <CountUp to={78} />
                    <span className="text-lg text-white/40"> / 100</span>
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3.5">
                  {[
                    { label: "Planning", v: 84 },
                    { label: "Schedule", v: 72 },
                    { label: "Budget", v: 80 },
                    { label: "Risk", v: 56 },
                    { label: "Governance", v: 90 },
                  ].map((bar, i) => (
                    <div key={bar.label} className="flex items-center gap-4">
                      <span className="w-24 text-xs font-bold text-white/70">{bar.label}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/12">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.v}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.3 + i * 0.1, ease: EASE }}
                          className={`h-full rounded-full ${bar.v >= 70 ? "bg-white/80" : "bg-brand-orange"}`}
                        />
                      </div>
                      <span className="w-8 text-right font-mono text-xs font-bold text-white">{bar.v}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 rounded-xl border border-brand-orange/30 bg-brand-orange/12 px-4 py-3 text-xs font-semibold leading-relaxed text-brand-orange">
                  Example result: strong planning, but risk visibility needs strengthening.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FREE PROJECT SNAPSHOT ────────────────────────── */}
      <ProjectSnapshot />

      {/* ── INSIGHTS ─────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Insights & Resources"
              title="Field notes from the delivery front line."
              sub="Practical thinking on project management, controls and governance — written by people who run projects, not comment on them."
            />
            <Reveal delay={0.1}>
              <Link to="/insights" data-testid="insights-view-all" className={btnGhost}>
                Explore Insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {ARTICLES.slice(0, 3).map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + COST OF DELAY ──────────────────────────── */}
      <section className="bg-soft py-24 sm:py-32" data-testid="home-faq">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="FAQs"
              title="Questions we hear most."
              sub="Straight answers about how we work, who we work with and what to expect."
              className="max-w-none"
            />
            <Reveal delay={0.1}>
              <Link
                to="/cost-of-delay-calculator"
                data-testid="home-calculator-card"
                className="band-dark grain group relative flex flex-col gap-4 overflow-hidden rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/25 blur-3xl" aria-hidden="true" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange text-white">
                  <Calculator className="h-5 w-5" />
                </span>
                <h3 className="relative font-heading text-2xl font-extrabold leading-tight text-white">
                  What is a late project costing you?
                </h3>
                <p className="relative text-sm leading-relaxed text-white/70">
                  Use our Cost of Delay Calculator to estimate your exposure from slippage, overruns and delayed benefits.
                </p>
                <span className="relative inline-flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-brand-orange">
                  Open the calculator
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.05}>
            <FaqAccordion items={SITE_FAQS.slice(0, HOME_FAQ_COUNT)} />
            <Link to="/faq" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-navy transition-colors hover:text-brand-orange">
              See all FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32" data-testid="home-contact">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Contact Us"
              title="Let's bring clarity to your next project."
              sub="Tell us what you're working on. A senior project professional will read it and get back to you."
              className="max-w-none"
            />
            <div className="flex flex-col gap-5">
              {NEXT_STEPS.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.06}>
                  <div className="flex gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-navy font-mono text-xs font-bold text-white">
                      {step.num}
                    </span>
                    <div>
                      <p className="font-heading text-base font-extrabold text-ink">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-faint">{step.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <a
                href={officeDirections}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="home-office"
                className="group flex items-start gap-4 rounded-2xl border border-line bg-soft p-5 transition-colors hover:border-brand-orange/50 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">Our office</span>
                  <span className="mt-1 text-sm font-semibold leading-relaxed text-ink">{OFFICE.full}</span>
                  <span className="mt-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-orange">Get directions →</span>
                </span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-[0_20px_60px_rgba(23,32,51,0.08)] sm:p-10">
              <LeadForm source="home-contact" showServices={false} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
