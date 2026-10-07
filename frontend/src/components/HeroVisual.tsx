import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import { EASE } from "./Reveal";

const GANTT_ROWS = [
  { label: "Discovery", start: 0, width: 22, done: 100 },
  { label: "Design", start: 14, width: 30, done: 100 },
  { label: "Procurement", start: 36, width: 26, done: 82 },
  { label: "Build", start: 52, width: 34, done: 46 },
  { label: "Handover", start: 78, width: 22, done: 0 },
];

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yCard1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yCard2 = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div ref={ref} className="relative" data-testid="hero-visual">
      <div
        className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-bluegray/60 via-transparent to-brand-orange/10"
        aria-hidden="true"
      />
      {/* Main control center card */}
      <motion.div
        style={{ y: yMain }}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
        className="relative rounded-3xl border border-line bg-white p-6 shadow-2xl shadow-brand-navy/10 sm:p-7"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-faint">Project Control Center</p>
            <p className="mt-1 font-heading text-lg font-extrabold text-ink">Riverside Quarter — Phase 2</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF3] px-3 py-1.5 text-[11px] font-bold text-[#027A48]">
            <span className="h-1.5 w-1.5 rounded-full bg-rag-green" />
            ON TRACK
          </span>
        </div>

        {/* Mini gantt */}
        <div className="mt-6 flex flex-col gap-3">
          {GANTT_ROWS.map((row, i) => (
            <div key={row.label} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-[11px] font-semibold text-faint">{row.label}</span>
              <div className="relative h-5 flex-1 overflow-hidden rounded-md bg-soft">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${row.width}%` }}
                  transition={{ duration: 1, delay: 0.9 + i * 0.15, ease: EASE }}
                  className="absolute top-0 h-full rounded-md bg-brand-navy/15"
                  style={{ left: `${row.start}%` }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(row.width * row.done) / 100}%` }}
                  transition={{ duration: 1.1, delay: 1.1 + i * 0.15, ease: EASE }}
                  className={`absolute top-0 h-full rounded-md ${row.done === 100 ? "bg-brand-navy" : row.done > 0 ? "bg-brand-orange" : "bg-transparent"}`}
                  style={{ left: `${row.start}%` }}
                />
              </div>
              <span className="w-9 text-right font-mono text-[11px] font-bold text-brand-navy">{row.done}%</span>
            </div>
          ))}
        </div>

        {/* Timeline strip */}
        <div className="mt-6 border-t border-line pt-5">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-line" aria-hidden="true" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "58%" }}
              transition={{ duration: 1.6, delay: 1.6, ease: EASE }}
              className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-brand-orange"
              aria-hidden="true"
            />
            {["Kickoff", "Design", "Build", "Test", "Handover"].map((m, i) => (
              <div key={m} className="relative flex flex-col items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full border-2 ${
                    i < 3 ? "border-brand-orange bg-brand-orange" : "border-line bg-white"
                  }`}
                />
                <span className={`text-[10px] font-bold uppercase tracking-wider ${i < 3 ? "text-ink" : "text-faint/60"}`}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating milestone card */}
      <motion.div
        style={{ y: yCard1 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
        className="absolute -right-4 -top-8 sm:-right-8"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-xl shadow-brand-navy/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFDF3]">
            <CheckCircle2 className="h-5 w-5 text-rag-green" />
          </span>
          <div>
            <p className="text-xs font-bold text-ink">Milestone reached</p>
            <p className="text-[11px] text-faint">Design approval — 2 days early</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating budget card */}
      <motion.div
        style={{ y: yCard2 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.7, ease: EASE }}
        className="absolute -bottom-10 -left-4 sm:-left-10"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-52 rounded-2xl border border-line bg-white p-4 shadow-xl shadow-brand-navy/10"
        >
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-wider text-faint">Budget used</p>
            <TrendingUp className="h-4 w-4 text-brand-navy" />
          </div>
          <p className="mt-1 font-heading text-2xl font-extrabold text-brand-navy">92%</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-soft">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 1.4, delay: 2, ease: EASE }}
              className="h-full rounded-full bg-brand-navy"
            />
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-[#B54708]">
            <AlertTriangle className="h-3.5 w-3.5" />
            2 risks under review
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
