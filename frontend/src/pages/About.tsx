import { Link } from "react-router-dom";
import { ArrowRight, Eye, Handshake, Repeat, UserCheck } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Eyebrow, PageHero, SectionHeading, btnPrimary } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { VALUES } from "@/data/site";

const COMMITMENTS = [
  { icon: UserCheck, title: "A named project manager", text: "Every client campaign has one accountable owner for targets, team, scripts and reporting." },
  { icon: Handshake, title: "An extension of your team", text: "Our agents represent your brand on every call, trained on your products and working to your standards." },
  { icon: Eye, title: "Live Salesforce visibility", text: "Calls, leads, meetings, sales and quality scores in live dashboards — no waiting for month-end reports." },
  { icon: Repeat, title: "Better every week", text: "Call reviews, coaching and script tests mean results keep improving for as long as the campaign runs." },
];

export default function About() {
  usePageMeta(
    "About Stream Biz | Dubai Call Center",
    "Stream Biz is a Dubai call center that runs outbound sales, lead generation, appointment setting and customer support projects for clients — every campaign managed in Salesforce."
  );

  return (
    <>
      <PageHero
        eyebrow="About Stream Biz"
        title="A call center that runs every client campaign as a managed project."
        sub="Stream Biz is a Dubai-based call center. Companies hire us to call their prospects and customers — selling, qualifying leads, booking meetings and providing support — and we manage each campaign end to end in Salesforce."
        meta={[
          { value: "Dubai-based", label: "English and Arabic-speaking agent teams" },
          { value: "8 services", label: "From outbound sales to customer support" },
          { value: "Salesforce-first", label: "Every lead, call and case in one CRM" },
          { value: "Project-managed", label: "A named manager on every campaign" },
        ]}
      />

      {/* Our story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col gap-5">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Our story</h2>
            <p className="text-base leading-relaxed text-faint">
              Stream Biz was founded on a pattern its team had seen again and again in outsourced calling: agents working
              hard, but campaigns with no clear owner. Scripts that drifted after launch. Leads lost in spreadsheets.
              Clients who only found out what happened when the monthly report arrived.
            </p>
            <p className="text-base leading-relaxed text-faint">
              We built Stream Biz to fix that. Every client campaign is run as a project — with a named project manager,
              a trained agent team, approved scripts and a Salesforce workspace where every call and outcome is
              recorded. Clients see results live, and agents get the coaching to keep improving.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-line shadow-2xl shadow-brand-navy/10">
              <img
                src="/media/hero-3-planning.jpg"
                alt="Stream Biz team leader briefing call center agents before a shift"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col gap-5">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Our philosophy</h2>
            <p className="text-base leading-relaxed text-faint">
              Dials are a means, not the goal. We measure ourselves on what clients actually care about — qualified
              leads, booked meetings, closed sales, resolved cases and customers who stay.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Who we are</h2>
            <p className="text-base leading-relaxed text-faint">
              A team of call center agents, team leaders, project managers, quality analysts and Salesforce specialists
              working from our Dubai office — running campaigns for clients in real estate, finance, telecom,
              healthcare, e-commerce, technology, education and travel.
            </p>
            <div>
              <Link to="/how-we-work" data-testid="about-methodology-link" className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange transition-colors hover:text-brand-orange-dark">
                See how we work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="What we hold every campaign to." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-soft p-7 transition-colors duration-300 hover:border-brand-orange/50 hover:bg-white">
                  <span className="font-mono text-xs font-bold text-brand-orange">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-heading text-xl font-extrabold tracking-tight text-ink">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-faint">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work with you — replaces the team teaser until team profiles are finalized */}
      <section className="hero-dark grain relative overflow-hidden py-20 sm:py-28" data-testid="about-commitments">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/40">
              <img
                src="/media/svc-quality-assurance.jpg"
                alt="Stream Biz quality coach reviewing a recorded call with an agent"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1430]/80 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">Our promise</p>
                <p className="mt-2 font-heading text-lg font-extrabold leading-snug text-white">
                  Every call measured. Every agent coached. Every client informed.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow dark>Working With Us</Eyebrow>
              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-[2.6rem]">
                What every campaign looks like.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/70">
                However large or small the campaign, the same four commitments shape how we work for every client.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {COMMITMENTS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08} className="h-full">
                  <div className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:bg-white/[0.09]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-extrabold tracking-tight text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/65">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Link to="/how-we-work" className={btnPrimary}>
                See How We Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Put a managed call center team behind your next campaign."
        sub="Start the conversation — we'll show you how our team, scripts and Salesforce setup would work for your campaign."
      />
    </>
  );
}
