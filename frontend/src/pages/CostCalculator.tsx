import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero, SectionHeading, btnPrimary } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";

const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Math.max(0, Math.round(n)));

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  hint,
  testid,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  hint?: string;
  testid: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <label className="flex flex-col gap-3">
      <span className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-bold text-ink">{label}</span>
        <span className="font-mono text-base font-bold text-brand-navy">{format(value)}</span>
      </span>
      <input
        type="range"
        data-testid={testid}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-brand-orange"
        style={{ background: `linear-gradient(to right, #F47426 ${pct}%, #E4E8F1 ${pct}%)` }}
      />
      {hint && <span className="text-xs leading-relaxed text-faint">{hint}</span>}
    </label>
  );
}

export default function CostCalculator() {
  usePageMeta(
    "Cost of Delay Calculator | Stream Biz",
    "Estimate what schedule slippage and cost overruns could cost your project — and how much value stronger project controls could protect."
  );

  const [budget, setBudget] = useState(5_000_000);
  const [duration, setDuration] = useState(18);
  const [slip, setSlip] = useState(3);
  const [overrun, setOverrun] = useState(10);
  const [benefit, setBenefit] = useState(100_000);
  const [recovery, setRecovery] = useState(30);

  const r = useMemo(() => {
    const monthlyRun = budget / duration;
    const delayCost = monthlyRun * slip;
    const overrunCost = budget * (overrun / 100);
    const lostBenefit = benefit * slip;
    const exposure = delayCost + overrunCost + lostBenefit;
    return { monthlyRun, delayCost, overrunCost, lostBenefit, exposure, protectedValue: exposure * (recovery / 100) };
  }, [budget, duration, slip, overrun, benefit, recovery]);

  const bars = [
    { label: "Extended running costs", v: r.delayCost, color: "bg-brand-navy" },
    { label: "Cost overrun", v: r.overrunCost, color: "bg-brand-orange" },
    { label: "Delayed benefits", v: r.lostBenefit, color: "bg-[#8E9BC7]" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Cost of Delay Calculator"
        title="What is a late project really costing you?"
        sub="Slipping dates and creeping costs add up faster than most dashboards show. Enter a few numbers to see your project's exposure — and how much value stronger controls could protect."
      />

      <section className="bg-soft py-20 sm:py-24" data-testid="cost-calculator">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-8 rounded-3xl border border-line bg-white p-7 sm:p-10">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">Your project</p>
                <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-ink">Enter your numbers</h2>
              </div>
              <Slider testid="calc-budget" label="Total project budget" value={budget} min={250_000} max={100_000_000} step={250_000} onChange={setBudget} format={money} />
              <Slider testid="calc-duration" label="Planned duration" value={duration} min={3} max={60} step={1} onChange={setDuration} format={(v) => `${v} months`} />
              <Slider testid="calc-slip" label="Expected schedule slip" value={slip} min={0} max={24} step={1} onChange={setSlip} format={(v) => `${v} months`} hint="How late do you realistically expect to finish against plan?" />
              <Slider testid="calc-overrun" label="Expected cost overrun" value={overrun} min={0} max={60} step={1} onChange={setOverrun} format={(v) => `${v}%`} />
              <Slider
                testid="calc-benefit"
                label="Monthly benefit once live"
                value={benefit}
                min={0}
                max={5_000_000}
                step={25_000}
                onChange={setBenefit}
                format={money}
                hint="Revenue, savings or value the finished project delivers each month. Set to $0 if not applicable."
              />
              <div className="rounded-2xl border border-dashed border-brand-orange/40 bg-brand-orange-soft/50 p-5">
                <Slider
                  testid="calc-recovery"
                  label="Share of exposure recovered by stronger controls"
                  value={recovery}
                  min={0}
                  max={80}
                  step={5}
                  onChange={setRecovery}
                  format={(v) => `${v}%`}
                  hint="Your assumption — adjust it to match your own view. It drives the 'value protected' estimate only."
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="hero-dark grain relative flex flex-col gap-7 overflow-hidden rounded-3xl p-7 sm:p-10 lg:sticky lg:top-32">
              <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-white/50">Total exposure</p>
                <p className="mt-2 font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl" data-testid="calc-exposure">
                  {money(r.exposure)}
                </p>
                <p className="mt-2 text-sm text-white/60">Running costs: {money(r.monthlyRun)} per month</p>
              </div>
              <div className="relative flex flex-col gap-4">
                {bars.map((b) => (
                  <div key={b.label} className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-white/75">{b.label}</span>
                      <span className="font-mono font-bold text-white">{money(b.v)}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full rounded-full ${b.color} transition-[width] duration-500`} style={{ width: `${r.exposure ? (b.v / r.exposure) * 100 : 0}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative rounded-2xl border border-brand-orange/40 bg-brand-orange/10 p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">Value protected at {recovery}%</p>
                <p className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white" data-testid="calc-protected">
                  {money(r.protectedValue)}
                </p>
              </div>
              <Link to="/start-a-project" className={`relative ${btnPrimary}`}>
                Talk to us about protecting it
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="relative flex items-start gap-2 text-xs leading-relaxed text-white/45">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                An illustrative estimate built only from the numbers you enter. It is not a quote or a guarantee of results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="How It's Calculated" title="Three ways delay quietly costs money." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: "Extended running costs", d: "Every extra month keeps the team, site, vendors and overheads running. We estimate this as your budget divided by planned months, multiplied by the expected slip." },
              { t: "Cost overrun", d: "Rework, change and inefficiency push spend past budget. We apply your expected overrun percentage to the total budget." },
              { t: "Delayed benefits", d: "Value the project should be producing — revenue, savings or capacity — arrives later. We multiply your monthly benefit by the months of slip." },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-soft p-7">
                  <span className="font-mono text-xs font-bold text-brand-orange">0{i + 1}</span>
                  <h3 className="font-heading text-lg font-extrabold text-ink">{x.t}</h3>
                  <p className="text-sm leading-relaxed text-faint">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Know where you stand"
        title="Turn exposure into a plan."
        sub="Our Project Health Check and free Project Snapshot show exactly where control is weakest — and what to fix first."
        primaryLabel="Take the Health Check"
        primaryTo="/project-health-check"
        secondaryLabel="Start a Project"
        secondaryTo="/start-a-project"
      />
    </>
  );
}
