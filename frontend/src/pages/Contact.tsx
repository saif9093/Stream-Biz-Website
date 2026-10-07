import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import { ArrowUpRight, MapPin } from "lucide-react";
import { NEXT_STEPS, OFFICE, officeDirections, officeMapEmbed } from "@/data/site";

export default function Contact() {
  usePageMeta(
    "Contact Stream Biz | Request a Consultation",
    "Tell us about your campaign and we'll recommend the right call center team, scripts and Salesforce setup."
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's launch your next campaign."
        sub="Tell us about your campaign and we'll recommend the right call center team, scripts and Salesforce setup."
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
          <Reveal>
            <LeadForm source="contact" />
          </Reveal>
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1}>
              <div className="band-dark grain relative overflow-hidden rounded-3xl border border-white/10 p-8">
                <h2 className="font-heading text-xl font-extrabold tracking-tight text-white">What happens next</h2>
                <div className="mt-6 flex flex-col gap-5">
                  {NEXT_STEPS.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-orange/60 font-mono text-xs font-bold text-brand-orange">
                        {step.num}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{step.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-white/60">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-3xl border border-line bg-white" data-testid="contact-office">
                <iframe
                  title="Stream Biz office location map"
                  src={officeMapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-56 w-full border-0 grayscale-[30%]"
                />
                <div className="flex flex-col gap-4 p-7">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-heading text-base font-extrabold tracking-tight text-ink">Visit our office</h2>
                      <address className="mt-1 text-sm not-italic leading-relaxed text-faint">
                        {OFFICE.lines.map((l) => (
                          <span key={l} className="block">{l}</span>
                        ))}
                      </address>
                    </div>
                  </div>
                  <a
                    href={officeDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 text-sm font-bold text-brand-navy transition-colors hover:text-brand-orange"
                  >
                    Get directions
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <div className="flex flex-col gap-1.5 border-t border-line pt-4 text-sm text-faint">
                    <p>Email: [work email]</p>
                    <p>Phone: [phone number]</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
