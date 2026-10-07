import { Link } from "react-router-dom";
import { ArrowRight, Eye, Handshake, Repeat, UserCheck } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Eyebrow, PageHero, SectionHeading, btnPrimary } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { VALUES } from "@/data/site";

const COMMITMENTS = [
  { icon: UserCheck, title: "Senior people, hands-on", text: "Experienced project professionals do the work — not a pitch team that hands over to juniors." },
  { icon: Handshake, title: "Embedded in your team", text: "We sit inside your governance and delivery rhythm, working alongside your people rather than around them." },
  { icon: Eye, title: "One honest view", text: "Progress, cost, risk and decisions reported plainly, so leadership can act early instead of reacting late." },
  { icon: Repeat, title: "Capability that stays", text: "Templates, controls and know-how are handed over so your team can sustain delivery without us." },
];

export default function About() {
  usePageMeta(
    "About Stream Biz | Project Management Services",
    "Stream Biz is a project management and project delivery services company built on one belief: better project management starts with better visibility."
  );

  return (
    <>
      <PageHero
        eyebrow="About Stream Biz"
        title="Better project management starts with better visibility."
        sub="Stream Biz is a professional project management and project delivery services company. We help organizations plan, control, coordinate and successfully deliver complex projects."
        meta={[
          { value: "Delivery-led", label: "Practitioners who run projects, not observers" },
          { value: "8 services", label: "Specialist disciplines under one team" },
          { value: "Visibility first", label: "One honest view of progress and risk" },
          { value: "Built to transfer", label: "Capability stays with your team" },
        ]}
      />

      {/* Our story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="flex flex-col gap-5">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Our story</h2>
            <p className="text-base leading-relaxed text-faint">
              Stream Biz was founded on a pattern its team had seen across industries: capable organizations, committed
              people and important projects — undermined not by effort but by missing structure. Plans that didn't
              reflect reality. Risks that surfaced too late. Leadership flying on instruments nobody trusted.
            </p>
            <p className="text-base leading-relaxed text-faint">
              We built Stream Biz to be the partner that fixes that: senior project professionals who establish the
              structure, visibility and accountability a project needs to move forward with confidence — and who leave
              that capability behind in your team.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-line shadow-2xl shadow-brand-navy/10">
              <img
                src="/media/about-team.jpg"
                alt="Stream Biz project team in a delivery review session"
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
              Methodology serves delivery — never the reverse. We apply the minimum structure that creates real control,
              and we measure our work by one standard: projects that finish, delivering what was promised.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Who we are</h2>
            <p className="text-base leading-relaxed text-faint">
              A team of project directors, planners, controllers and PMO specialists who have run delivery from the
              inside — across construction, technology, engineering, healthcare and corporate transformation. We work
              as part of your team, not adjacent to it.
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
          <SectionHeading eyebrow="Our Values" title="What we hold every engagement to." />
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
                src="/media/svc-project-management.jpg"
                alt="Stream Biz project manager leading a project kickoff"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1430]/80 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">Our promise</p>
                <p className="mt-2 font-heading text-lg font-extrabold leading-snug text-white">
                  Structure that stays with your team long after we leave.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="flex flex-col gap-10">
            <Reveal className="flex flex-col gap-5">
              <Eyebrow dark>Working With Us</Eyebrow>
              <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-[2.6rem]">
                What every engagement looks like.
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/70">
                However large or small the brief, the same four commitments shape how we work alongside your people.
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
        title="Bring senior delivery experience to your project."
        sub="Start the conversation — we'll show you how our team would approach your specific situation."
      />
    </>
  );
}
