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
    "Missed Revenue Calculator | Stream Biz",
    "Estimate what missed leads, lost customers and messy CRM data cost your business each month — and how much a managed call center campaign could recover."
  );

  const [leads, setLeads] = useState(1_000);
  const [missed, setMissed] = useState(30);
  const [conversion, setConversion] = useState(8);
  const [dealValue, setDealValue] = useState(1_500);
  const [churn, setChurn] = useState(20);
  const [customerValue, setCustomerValue] = useState(3_000);
  const [agents, setAgents] = useState(10);
  const [hoursLost, setHoursLost] = useState(4);
  const [hourlyCost, setHourlyCost] = useState(12);
  const [recovery, setRecovery] = useState(40);

  const r = useMemo(() => {
    const missedLeads = leads * (missed / 100) * (conversion / 100) * dealValue;
    const lostCustomers = churn * customerValue;
    const wastedTime = agents * hoursLost * hourlyCost * 4.3;
    const exposure = missedLeads + lostCustomers + wastedTime;
    return { missedLeads, lostCustomers, wastedTime, exposure, protectedValue: exposure * (recovery / 100) };
  }, [leads, missed, conversion, dealValue, churn, customerValue, agents, hoursLost, hourlyCost, recovery]);

  const bars = [
    { label: "Leads never followed up", v: r.missedLeads, color: "bg-brand-navy" },
    { label: "Customers lost to slow service", v: r.lostCustomers, color: "bg-brand-orange" },
    { label: "Agent time lost to manual admin", v: r.wastedTime, color: "bg-[#8E9BC7]" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Missed Revenue Calculator"
        title="What are missed calls really costing you?"
        sub="Leads that are never called back, customers who leave after a bad experience and agents buried in admin add up fast. Enter a few numbers to see your monthly exposure."
      />

      <section className="bg-soft py-20 sm:py-24" data-testid="cost-calculator">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <Reveal>
            <div className="flex flex-col gap-8 rounded-3xl border border-line bg-white p-7 sm:p-10">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">Your business</p>
                <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-ink">Enter your monthly numbers</h2>
              </div>
              <Slider testid="calc-leads" label="New leads or enquiries per month" value={leads} min={50} max={20_000} step={50} onChange={setLeads} format={(v) => v.toLocaleString("en-US")} />
              <Slider testid="calc-missed" label="Leads not contacted within a day" value={missed} min={0} max={80} step={1} onChange={setMissed} format={(v) => `${v}%`} hint="Leads that are never called, or called too late to still be interested." />
              <Slider testid="calc-conversion" label="Conversion rate when contacted" value={conversion} min={1} max={40} step={1} onChange={setConversion} format={(v) => `${v}%`} />
              <Slider testid="calc-deal" label="Average sale value" value={dealValue} min={50} max={50_000} step={50} onChange={setDealValue} format={money} />
              <Slider testid="calc-churn" label="Customers lost per month" value={churn} min={0} max={500} step={1} onChange={setChurn} format={(v) => `${v}`} hint="Customers who leave or don't renew because nobody followed up or service was slow." />
              <Slider testid="calc-customer-value" label="Average customer value" value={customerValue} min={50} max={100_000} step={50} onChange={setCustomerValue} format={money} />
              <Slider testid="calc-agents" label="Agents or sales reps" value={agents} min={1} max={200} step={1} onChange={setAgents} format={(v) => `${v}`} />
              <Slider testid="calc-hours" label="Hours per person per week on manual admin" value={hoursLost} min={0} max={15} step={1} onChange={setHoursLost} format={(v) => `${v} h`} hint="Logging calls by hand, fixing duplicates, building reports in spreadsheets." />
              <Slider testid="calc-hourly" label="Hourly cost per person" value={hourlyCost} min={5} max={60} step={1} onChange={setHourlyCost} format={money} />
              <div className="rounded-2xl border border-dashed border-brand-orange/40 bg-brand-orange-soft/50 p-5">
                <Slider
                  testid="calc-recovery"
                  label="Share recovered by a managed campaign"
                  value={recovery}
                  min={0}
                  max={80}
                  step={5}
                  onChange={setRecovery}
                  format={(v) => `${v}%`}
                  hint="Your assumption — adjust it to match your own view. It drives the 'revenue recovered' estimate only."
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="hero-dark grain relative flex flex-col gap-7 overflow-hidden rounded-3xl p-7 sm:p-10 lg:sticky lg:top-32">
              <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-white/50">Monthly revenue at risk</p>
                <p className="mt-2 font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl" data-testid="calc-exposure">
                  {money(r.exposure)}
                </p>
                <p className="mt-2 text-sm text-white/60">About {money(r.exposure * 12)} a year</p>
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
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange">Revenue recovered at {recovery}%</p>
                <p className="mt-2 font-heading text-4xl font-extrabold tracking-tight text-white" data-testid="calc-protected">
                  {money(r.protectedValue)} <span className="text-lg text-white/50">/ month</span>
                </p>
              </div>
              <Link to="/start-a-project" className={`relative ${btnPrimary}`}>
                Talk to us about recovering it
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
          <SectionHeading eyebrow="How It's Calculated" title="Three ways missed calls quietly cost money." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: "Leads never followed up", d: "Interested prospects who are never called, or called too late. We multiply your monthly leads by the share missed, your conversion rate and your average sale value." },
              { t: "Customers lost to slow service", d: "Customers who leave or don't renew because nobody followed up. We multiply customers lost per month by your average customer value." },
              { t: "Agent time lost to manual admin", d: "Hours spent logging calls by hand, fixing duplicates and building reports. We multiply people × weekly hours × hourly cost × 4.3 weeks." },
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
        title="Turn missed calls into a plan."
        sub="Our Call Center Health Check and free Campaign Snapshot show exactly where leads and customers are slipping away — and what to fix first."
        primaryLabel="Take the Health Check"
        primaryTo="/project-health-check"
        secondaryLabel="Start a Project"
        secondaryTo="/start-a-project"
      />
    </>
  );
}
