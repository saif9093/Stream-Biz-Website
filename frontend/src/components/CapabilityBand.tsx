import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, CalendarRange, ClipboardCheck, LineChart, ShieldAlert, Users } from "lucide-react";
import { CountUp, Reveal } from "./Reveal";
import { Eyebrow, btnGhost } from "./Section";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { PROCESS_PHASES } from "@/data/site";
import { SUPPORT_STRUCTURES } from "@/data/growth";

// Counts are derived from the site's own data so they can never drift from what the site actually offers.
const STATS = [
  { to: SERVICES.length, label: "Specialist project services" },
  { to: INDUSTRIES.length, label: "Industries we deliver in" },
  { to: PROCESS_PHASES.length, label: "Phase delivery method" },
  { to: SUPPORT_STRUCTURES.length, label: "Flexible team structures" },
];

const SPECIALISTS = [
  { icon: Briefcase, role: "Project Directors" },
  { icon: Users, role: "Project Managers" },
  { icon: CalendarRange, role: "Planners & Schedulers" },
  { icon: LineChart, role: "Cost Controllers" },
  { icon: ShieldAlert, role: "Risk Managers" },
  { icon: ClipboardCheck, role: "PMO Analysts" },
];

/** Right-after-hero proof band: what we deliver, in numbers, and the specialists on call. */
export default function CapabilityBand() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24" data-testid="capability-band">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Your Project Delivery Partner</Eyebrow>
            <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Critical projects, delivered with <span className="text-brand-orange">control</span> — in every sector.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-faint md:text-lg">
              Skip the scramble of building a delivery function from scratch. Stream Biz brings experienced project
              professionals and a proven control system that plug straight into your organization — from first plan
              through final handover.
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
              <p className="mt-1.5 font-heading text-xl font-extrabold leading-tight text-ink">Delivery specialists ready to join your team</p>
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
