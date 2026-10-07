import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { EASE } from "./Reveal";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items, dark = false }: { items: FaqItem[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`divide-y rounded-2xl border ${dark ? "divide-white/10 border-white/15" : "divide-line border-line bg-white"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              data-testid={`faq-toggle-${i}`}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className={`font-heading text-base font-bold ${dark ? "text-white" : "text-ink"}`}>{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                  isOpen
                    ? "rotate-45 border-brand-orange bg-brand-orange text-white"
                    : dark
                      ? "border-white/20 text-white"
                      : "border-line text-brand-navy"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className={`px-6 pb-6 text-sm leading-relaxed md:text-base ${dark ? "text-white/70" : "text-faint"}`}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function FaqAccordionWithChildren({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
