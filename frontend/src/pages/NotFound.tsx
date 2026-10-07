import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { btnPrimary, btnGhost } from "@/components/Section";

export default function NotFound() {
  usePageMeta("Page Not Found | Stream Biz");

  return (
    <section className="hero-dark grain relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-start gap-6 px-6">
        <span className="font-mono text-sm font-bold text-brand-orange" data-testid="not-found-code">404</span>
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          This milestone doesn't exist.
        </h1>
        <p className="text-base leading-relaxed text-white/70">
          The page you're looking for has moved, been re-baselined, or never made it past planning. Let's get you back
          on the critical path.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/" data-testid="not-found-home" className={btnPrimary}>
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" data-testid="not-found-services" className={btnGhost}>
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
