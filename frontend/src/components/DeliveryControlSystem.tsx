import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { DELIVERY_INPUTS, DELIVERY_OUTPUTS } from "@/data/site";
import { EASE } from "./Reveal";

export default function DeliveryControlSystem() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]" data-testid="delivery-control-system">
      {/* Inputs */}
      <div className="flex flex-col gap-2.5">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">Inputs — what every campaign needs</p>
        {DELIVERY_INPUTS.map((input, i) => {
          const Icon = getIcon(input.icon);
          return (
            <motion.div
              key={input.label}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/5 px-4 py-3 backdrop-blur-sm transition-colors hover:border-brand-orange/50"
            >
              <Icon className="h-4 w-4 shrink-0 text-brand-orange" />
              <span className="text-sm font-semibold text-white">{input.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Engine */}
      <div className="relative flex flex-col items-center gap-4">
        <ArrowDown className="h-6 w-6 text-brand-orange lg:hidden" aria-hidden="true" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative"
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0, 0.35] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-3xl border-2 border-brand-orange"
            aria-hidden="true"
          />
          <div className="relative flex w-64 flex-col items-center gap-4 rounded-3xl border border-brand-orange/60 bg-white/[0.07] px-6 py-10 text-center backdrop-blur-md">
            <div className="flex items-end gap-1" aria-hidden="true">
              {[10, 18, 26, 18, 30].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ height: [h, h + 8, h] }}
                  transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-2 rounded-sm ${i === 4 ? "bg-brand-orange" : "bg-white/60"}`}
                  style={{ height: h }}
                />
              ))}
            </div>
            <p className="font-heading text-lg font-extrabold leading-tight tracking-tight text-white">
              STREAM BIZ
              <br />
              <span className="text-brand-orange">CAMPAIGN ENGINE</span>
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
              People · Process · Salesforce
            </p>
          </div>
        </motion.div>
        <ArrowRight className="hidden h-6 w-6 text-brand-orange lg:hidden" aria-hidden="true" />
      </div>

      {/* Outputs */}
      <div className="flex flex-col gap-2.5">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">Outputs — what clients get</p>
        {DELIVERY_OUTPUTS.map((output, i) => (
          <motion.div
            key={output}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
            className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/5 px-4 py-3 backdrop-blur-sm transition-colors hover:border-brand-orange/50"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange">
              <Check className="h-3 w-3 text-white" strokeWidth={3} />
            </span>
            <span className="text-sm font-semibold text-white">{output}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
