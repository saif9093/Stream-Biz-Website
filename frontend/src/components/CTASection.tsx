import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow, btnPrimary, btnWhite } from "./Section";

export default function CTASection({
  eyebrow = "START THE CONVERSATION",
  title = "Let's bring clarity to your next project.",
  sub = "Tell us what you're working on and we'll help identify where stronger project management can make the biggest difference.",
  primaryLabel = "Start a Project",
  primaryTo = "/start-a-project",
  secondaryLabel,
  secondaryTo,
}: {
  eyebrow?: string;
  title?: string;
  sub?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="band-dark grain relative overflow-hidden rounded-[2rem] px-8 py-16 sm:px-16 sm:py-20">
            <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-orange/25 blur-[100px]"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" aria-hidden="true" />
            <div className="relative flex max-w-2xl flex-col gap-6">
              <Eyebrow dark>{eyebrow}</Eyebrow>
              <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h2>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">{sub}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <Link to={primaryTo} data-testid="cta-primary-btn" className={btnPrimary}>
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {secondaryLabel && secondaryTo && (
                  <Link to={secondaryTo} data-testid="cta-secondary-btn" className={btnWhite}>
                    {secondaryLabel}
                  </Link>
                )}
              </div>
              <div className="mt-6 h-2.5 w-40 bg-ticks opacity-50" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
