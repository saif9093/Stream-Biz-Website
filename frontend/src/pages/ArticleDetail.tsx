import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react";
import { toast } from "sonner";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Reveal } from "@/components/Reveal";
import { ArticleCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";
import NotFound from "@/pages/NotFound";
import { getArticle, ARTICLES } from "@/data/insights";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  usePageMeta(
    article ? `${article.title} | Stream Biz Insights` : "Insights | Stream Biz",
    article?.excerpt
  );

  if (!article) return <NotFound />;

  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category);
  const fallback = ARTICLES.filter((a) => a.slug !== article.slug);
  const relatedArticles = (related.length >= 2 ? related : fallback).slice(0, 2);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard.");
    } catch {
      toast.error("Could not copy the link.");
    }
  };

  return (
    <>
      {/* Dark editorial header */}
      <section className="hero-dark grain relative overflow-hidden pb-16 pt-36 sm:pt-44" data-testid="article-hero">
        <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <Link to="/insights" data-testid="article-back" className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-brand-orange">
              <ArrowLeft className="h-4 w-4" />
              All insights
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 flex flex-col gap-6">
            <span className="w-fit rounded-full border border-brand-orange/40 bg-brand-orange/15 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-brand-orange">
              {article.category}
            </span>
            <h1 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 border-y border-white/10 py-4 text-xs font-semibold text-white/55">
              <span>{article.author}</span>
              <span aria-hidden="true">·</span>
              <span>{article.date}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <button
                type="button"
                data-testid="article-share"
                onClick={copyLink}
                className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 font-bold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <Link2 className="h-3.5 w-3.5" />
                Share
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <article className="relative overflow-hidden bg-white pb-20 pt-16">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
            <div>
              <div className="flex flex-col gap-10">
                {article.sections.map((section, i) => (
                  <Reveal key={section.h} delay={0.05}>
                    <section id={`section-${i}`}>
                      <h2 className="font-heading text-2xl font-extrabold tracking-tight text-brand-navy">{section.h}</h2>
                      <div className="mt-4 flex flex-col gap-4">
                        {section.p.map((para, j) => (
                          <p key={j} className="text-base leading-relaxed text-body">
                            {para}
                          </p>
                        ))}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-12">
                <div className="rounded-2xl border border-line bg-soft p-6">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-faint">Written by</p>
                  <p className="mt-1 font-heading text-base font-extrabold text-ink">{article.author}</p>
                  <p className="mt-1 text-sm text-faint">
                    Practical thinking from the Stream Biz call center operations team.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-4 rounded-2xl border border-line bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-faint">In this article</p>
                <nav className="flex flex-col gap-2.5" aria-label="Table of contents">
                  {article.sections.map((section, i) => (
                    <a
                      key={section.h}
                      href={`#section-${i}`}
                      data-testid={`toc-${i}`}
                      className="text-sm font-semibold text-body transition-colors hover:text-brand-orange"
                    >
                      {section.h}
                    </a>
                  ))}
                </nav>
                <Link
                  to="/project-health-check"
                  data-testid="article-health-cta"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  Take the Health Check
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="bg-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-ink">Related reading</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {relatedArticles.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Put it into practice"
        title="Reading helps. A managed campaign delivers."
        sub="Talk to us about putting these ideas to work on your next campaign."
      />
    </>
  );
}
