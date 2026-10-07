import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { Reveal } from "./Reveal";
import type { Service } from "@/data/services";
import type { Industry } from "@/data/industries";
import type { Article } from "@/data/insights";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = getIcon(service.icon);
  return (
    <Reveal delay={(index % 4) * 0.07} className="h-full">
      <Link
        to={`/services/${service.slug}`}
        data-testid={`service-card-${service.slug}`}
        className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/[0.07]"
      >
        <span
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-orange transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden="true"
        />
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-bluegray text-brand-navy transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-mono text-xs font-bold text-faint/40">{service.num}</span>
        </div>
        <h3 className="font-heading text-xl font-extrabold tracking-tight text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-faint">{service.short}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-bold text-brand-navy transition-colors group-hover:text-brand-orange">
          Explore service
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

// Bento rhythm for the 8-sector grid: 3 rows of 4 columns, wide tiles where the rows need them.
const INDUSTRY_WIDE = new Set([0, 5, 6, 7]);

export function IndustryCard({ industry, index = 0, wide = false }: { industry: Industry; index?: number; wide?: boolean }) {
  return (
    <Reveal delay={(index % 4) * 0.07} className={`h-full ${wide ? "sm:col-span-2" : ""}`}>
      <Link
        to={`/industries/${industry.slug}`}
        data-testid={`industry-card-${industry.slug}`}
        className="group relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl bg-brand-navy p-6 shadow-sm ring-1 ring-black/5 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-navy/25 sm:p-7"
      >
        <img
          src={industry.image}
          alt={industry.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0B1430] via-[#0B1430]/45 to-[#0B1430]/0 transition-opacity duration-500"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0B1430]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <div className="relative flex items-start justify-between">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-brand-orange group-hover:bg-brand-orange">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="relative flex flex-col gap-2.5">
          <h3
            className={`font-heading font-extrabold leading-tight tracking-tight text-white ${
              wide ? "text-2xl sm:text-[1.7rem]" : "text-xl"
            }`}
          >
            {industry.title}
          </h3>
          <p className={`text-sm leading-relaxed text-white/75 ${wide ? "max-w-md" : ""}`}>{industry.short}</p>
          <span className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
            Explore sector
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span
            className="mt-1 h-[3px] w-10 origin-left rounded-full bg-brand-orange transition-[width] duration-500 group-hover:w-24"
            aria-hidden="true"
          />
        </div>
      </Link>
    </Reveal>
  );
}

export function IndustryGrid({ industries, testId }: { industries: Industry[]; testId?: string }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-testid={testId}>
      {industries.map((industry, i) => (
        <IndustryCard key={industry.slug} industry={industry} index={i} wide={INDUSTRY_WIDE.has(i)} />
      ))}
    </div>
  );
}

export function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <Link
        to={`/insights/${article.slug}`}
        data-testid={`article-card-${article.slug}`}
        className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/[0.07]"
      >
        <span
          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-navy transition-transform duration-500 group-hover:scale-x-100"
          aria-hidden="true"
        />
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-brand-orange-soft px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-orange-dark">
            {article.category}
          </span>
          <ArrowUpRight className="h-4 w-4 text-faint/40 transition-all duration-300 group-hover:text-brand-orange" />
        </div>
        <h3 className="font-heading text-lg font-extrabold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand-navy">
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-faint">{article.excerpt}</p>
        <p className="mt-auto pt-2 text-xs font-semibold text-faint/70">
          {article.date} · {article.readTime}
        </p>
      </Link>
    </Reveal>
  );
}
