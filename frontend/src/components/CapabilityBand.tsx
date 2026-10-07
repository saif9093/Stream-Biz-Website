import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, ClipboardCheck, Cloud, GraduationCap, Headset, Users } from "lucide-react";
import { CountUp, Reveal } from "./Reveal";
import { Eyebrow, btnGhost } from "./Section";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { PROCESS_PHASES } from "@/data/site";
import { SUPPORT_STRUCTURES } from "@/data/growth";

// Counts are derived from the site's own data so they can never drift from what the site actually offers.
const STATS = [
  { to: SERVICES.length, label: "Call center services" },
  { to: INDUSTRIES.length, label: "Industries we call for" },
  { to: PROCESS_PHASES.length, label: "Step campaign method" },
  { to: SUPPORT_STRUCTURES.length, label: "Flexible team models" },
];

const SPECIALISTS = [
  { icon: Briefcase, role: "Campaign Project Managers" },
  { icon: Headset, role: "Call Center Agents" },
  { icon: Users, role: "Team Leaders" },
  { icon: Cloud, role: "Salesforce Specialists" },
  { icon: ClipboardCheck, role: "Quality Analysts" },
  { icon: GraduationCap, role: "Trainers" },
];

/** Right-after-hero proof band: what we do, in numbers, and the roles behind every campaign. */
export default function CapabilityBand() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24" data-testid="capability-band">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Your Call Center Partner</Eyebrow>
            <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Client campaigns, run as <span className="text-brand-orange">managed projects</span> — in Salesforce.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-faint md:text-lg">
              Skip the months of hiring and training a calling team. Stream Biz gives you trained agents, a named
              project manager and a Salesforce setup built for your campaign — from the first script to the weekly
              results review.
            </p>
            <div>
              <Link to="/services" className={btnGhost}>
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col gap-2 overflow-hidden rounded-3xl p-7 ${
                    i === 0 ? "band-dark grain text-white" : "border border-line bg-soft"
                  }`}
                >
                  {i === 0 && <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />}
                  <span className="relative font-heading text-5xl font-extrabold tracking-tight text-brand-orange sm:text-6xl">
                    <CountUp to={s.to} />
                  </span>
                  <span className={`relative text-sm font-semibold leading-snug ${i === 0 ? "text-white/75" : "text-faint"}`}>
                    {s.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Specialists on demand */}
        <Reveal className="mt-16">
          <div className="flex flex-col gap-6 rounded-3xl border border-line bg-soft p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="shrink-0 lg:w-56">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">On demand</p>
              <p className="mt-1.5 font-heading text-xl font-extrabold leading-tight text-ink">Call center specialists ready to run your campaign</p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
              {SPECIALISTS.map(({ icon: Icon, role }) => (
                <div
                  key={role}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-white px-3 py-5 text-center transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-orange/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bluegray text-brand-navy transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[13px] font-bold leading-tight text-ink">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
