import { motion } from "motion/react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AlertTriangle, CircleAlert, Flag } from "lucide-react";
import { CountUp, EASE } from "./Reveal";
import { DASHBOARD_MILESTONES } from "@/data/site";

const CHART_DATA = [
  { w: "W1", planned: 8, actual: 6 },
  { w: "W2", planned: 16, actual: 15 },
  { w: "W3", planned: 26, actual: 24 },
  { w: "W4", planned: 38, actual: 36 },
  { w: "W5", planned: 48, actual: 47 },
  { w: "W6", planned: 58, actual: 58 },
  { w: "W7", planned: 66, actual: 67 },
  { w: "W8", planned: 74, actual: 74 },
];

const RAG_ROWS = [
  { label: "Contact Rate", value: 74, rag: "On Target", color: "bg-rag-green", text: "text-[#027A48]", bar: "bg-brand-navy" },
  { label: "QA Score", value: 92, rag: "Strong", color: "bg-rag-green", text: "text-[#027A48]", bar: "bg-brand-orange" },
  { label: "Conversion", value: 40, rag: "Watch", color: "bg-rag-amber", text: "text-[#B54708]", bar: "bg-rag-amber" },
  { label: "Attendance", value: 86, rag: "Healthy", color: "bg-rag-green", text: "text-[#027A48]", bar: "bg-brand-navy" },
];

export default function ProjectDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="overflow-hidden rounded-3xl border border-line bg-white shadow-2xl shadow-brand-navy/10"
      data-testid="project-dashboard"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line bg-soft px-7 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy font-heading text-xs font-extrabold text-white">SF</span>
          <div>
            <p className="font-heading text-base font-extrabold text-ink">CAMPAIGN ALPHA</p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-faint">Sample Salesforce dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF3] px-3.5 py-1.5 text-xs font-bold text-[#027A48]">
            <span className="h-1.5 w-1.5 rounded-full bg-rag-green" />
            Overall: ON TRACK
          </span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
        {/* Left: metrics */}
        <div className="border-b border-line p-7 lg:border-b-0 lg:border-r">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-faint">Monthly target</p>
              <p className="mt-1 font-heading text-5xl font-extrabold tracking-tight text-brand-navy">
                <CountUp to={74} suffix="%" />
              </p>
            </div>
            <div className="flex gap-6 pb-1">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-rag-amber" />
                <div>
                  <p className="font-heading text-lg font-extrabold text-ink"><CountUp to={18} /></p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-faint">Hot leads</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CircleAlert className="h-4 w-4 text-brand-orange" />
                <div>
                  <p className="font-heading text-lg font-extrabold text-ink"><CountUp to={42} /></p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-faint">Callbacks due</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-soft">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "74%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.3, ease: EASE }}
              className="h-full rounded-full bg-brand-orange"
            />
          </div>

          <div className="mt-7 flex flex-col gap-4">
            {RAG_ROWS.map((row, i) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.color}`} aria-hidden="true" />
                <span className="w-24 text-sm font-semibold text-ink">{row.label}</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-soft">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 + i * 0.12, ease: EASE }}
                    className={`h-full rounded-full ${row.bar}`}
                  />
                </div>
                <span className={`w-20 text-right text-xs font-bold ${row.text}`}>{row.rag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: chart + milestones */}
        <div className="p-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-faint">Qualified leads vs target</p>
          <div className="mt-3 h-36" aria-hidden="true">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CHART_DATA} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
                <defs>
                  <linearGradient id="actualFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F47426" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#F47426" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="w" tick={{ fontSize: 10, fill: "#667085" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#667085" }} axisLine={false} tickLine={false} unit="%" />
                <Tooltip
                  formatter={(value: number, name: string) => [`${value}%`, name === "actual" ? "Actual" : "Target"]}
                  labelFormatter={(label: string) => `Week ${label.replace("W", "")}`}
                  contentStyle={{ borderRadius: 12, border: "1px solid #E2E6EF", fontSize: 12 }}
                />
                <Area type="monotone" dataKey="planned" stroke="#2C3B7B" strokeWidth={2} strokeDasharray="5 4" fill="none" />
                <Area type="monotone" dataKey="actual" stroke="#F47426" strokeWidth={2.5} fill="url(#actualFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-faint">
            <Flag className="h-3.5 w-3.5" /> Launch milestones
          </p>
          <div className="mt-3 flex flex-col">
            {DASHBOARD_MILESTONES.map((m) => (
              <div key={m.label} className="flex items-center gap-3 border-b border-line/70 py-2.5 last:border-0">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rotate-45 ${
                    m.status === "complete" ? "bg-brand-navy" : m.status === "current" ? "bg-brand-orange" : "border border-line bg-white"
                  }`}
                  aria-hidden="true"
                />
                <span className={`flex-1 text-sm font-semibold ${m.status === "upcoming" ? "text-faint" : "text-ink"}`}>{m.label}</span>
                <span className={`text-[11px] font-bold uppercase tracking-wide ${m.status === "current" ? "text-brand-orange" : "text-faint/70"}`}>
                  {m.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
