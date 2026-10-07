import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageHero, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArticleCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/data/insights";
import { RESOURCES } from "@/data/site";

export default function Insights() {
  usePageMeta(
    "Insights & Resources | Stream Biz",
    "Practical thinking on call center campaigns, call quality, lead generation and Salesforce — plus templates and checklists."
  );
  const [category, setCategory] = useState("All");
  const filtered =
    category === "All" ? ARTICLES.filter((a) => a.slug !== ARTICLES[0].slug) : ARTICLES.filter((a) => a.category === category);

  return (
    <>
      <PageHero
        eyebrow="Insights & Resources"
        title="Field notes from the call center floor."
        sub="Practical thinking on campaigns, call quality and Salesforce — written by people who run call center projects every day."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Featured read */}
          <Reveal className="mb-14">
            <Link
              to={`/insights/${ARTICLES[0].slug}`}
              data-testid="insights-feature"
              className="band-dark grain group relative grid overflow-hidden rounded-[1.75rem] border border-white/10 lg:grid-cols-[1.1fr_1fr]"
            >
              <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="relative flex flex-col gap-5 p-8 sm:p-10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-brand-orange">
                  Featured read · {ARTICLES[0].category}
                </span>
                <h2 className="font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                  {ARTICLES[0].title}
                </h2>
                <p className="text-sm leading-relaxed text-white/65 md:text-base">{ARTICLES[0].excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-white transition-colors group-hover:text-brand-orange">
                  Read the article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <div className="relative flex flex-col justify-end gap-5 border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0">
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Author</p>
                  <p className="font-heading text-lg font-extrabold text-white">{ARTICLES[0].author}</p>
                  <p className="text-xs font-semibold text-white/50">
                    {ARTICLES[0].date} · {ARTICLES[0].readTime}
                  </p>
                </div>
                <span className="h-2.5 w-40 bg-ticks opacity-50" aria-hidden="true" />
              </div>
            </Link>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Article categories">
              {["All", ...ARTICLE_CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  data-testid={`category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    category === cat
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-line bg-white text-body hover:border-brand-navy/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-testid="insights-grid">
            {filtered.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Templates & Downloads"
            title="Working tools, free to use."
            sub="The checklists and templates we use on real campaigns. Request any resource and we'll send it over."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((resource, i) => (
              <Reveal key={resource.title} delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-orange-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-orange-dark">
                      {resource.type}
                    </span>
                    <Download className="h-4 w-4 text-faint/50" />
                  </div>
                  <h3 className="font-heading text-lg font-extrabold tracking-tight text-ink">{resource.title}</h3>
                  <p className="text-sm leading-relaxed text-faint">{resource.desc}</p>
                  <Link
                    to="/contact"
                    data-testid={`resource-${resource.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-bold text-brand-navy transition-colors hover:text-brand-orange"
                  >
                    Request this resource
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Beyond the reading"
        title="See how this thinking applies to your campaign."
        sub="Insights are useful. A campaign built for your customers is better."
        secondaryLabel="Take the Health Check"
        secondaryTo="/project-health-check"
      />
    </>
  );
}
