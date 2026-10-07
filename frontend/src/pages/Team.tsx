import { Linkedin } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { TEAM } from "@/data/site";

export default function Team() {
  usePageMeta(
    "Our Team | Stream Biz",
    "Meet the team behind your project — senior project delivery professionals across programme leadership, PMO, project controls and digital delivery."
  );

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet the team behind your project."
        sub="Senior project professionals with delivery experience across industries. Profile details are placeholders until individual bios are confirmed — nothing here is invented."
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2" data-testid="team-grid">
            {TEAM.map((member, i) => (
              <Reveal key={member.role} delay={(i % 2) * 0.1}>
                <article className="group flex flex-col gap-6 overflow-hidden rounded-3xl border border-line bg-soft p-7 transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-navy/[0.06] sm:flex-row">
                  <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={`${member.role} — profile photo placeholder`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top grayscale transition-[filter,transform] duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0B1226]/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-30"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h2 className="font-heading text-xl font-extrabold tracking-tight text-ink">{member.name}</h2>
                      <p className="mt-0.5 text-sm font-bold text-brand-orange">{member.role}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-faint">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialisms.map((s) => (
                        <span key={s} className="rounded-full bg-bluegray px-3 py-1 text-[11px] font-bold text-brand-navy">
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-faint/60">
                      <Linkedin className="h-3.5 w-3.5" />
                      [LinkedIn profile]
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        eyebrow="The people make the difference"
        title="Put senior delivery experience on your project."
        sub="Tell us what you're delivering and we'll match the right people to it."
      />
    </>
  );
}
