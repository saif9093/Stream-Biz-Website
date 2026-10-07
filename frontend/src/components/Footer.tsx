import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { OFFICE, officeDirections } from "@/data/site";

const columns = [
  {
    title: "Services",
    links: SERVICES.slice(0, 6).map((s) => ({ to: `/services/${s.slug}`, label: s.title })),
  },
  {
    title: "Industries",
    links: INDUSTRIES.slice(0, 6).map((i) => ({ to: `/industries/${i.slug}`, label: i.title.replace(/ & .*/, "") })),
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/how-we-work", label: "How We Work" },
      { to: "/pricing", label: "Pricing" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/project-health-check", label: "Project Health Check" },
      { to: "/cost-of-delay-calculator", label: "Cost of Delay Calculator" },
      { to: "/engagement-models", label: "Engagement Models" },
      { to: "/insights", label: "Templates & Guides" },
      { to: "/faq", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="band-dark grain relative overflow-hidden text-white" data-testid="site-footer">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-5">
            <Logo dark className="h-20" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Stream Biz helps organizations plan, manage and control critical projects with disciplined project
              management, practical governance and real-time visibility.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <a
                href={officeDirections}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-address"
                className="flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span className="leading-relaxed">
                  {OFFICE.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </span>
              </a>
              <span className="flex items-center gap-2.5 text-white/45">
                <Mail className="h-4 w-4 shrink-0 text-brand-orange" />
                [work email]
              </span>
              <span className="flex items-center gap-2.5 text-white/45">
                <Phone className="h-4 w-4 shrink-0 text-brand-orange" />
                [phone number]
              </span>
            </div>
            <Link
              to="/project-health-check"
              data-testid="footer-health-check-cta"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Run a Project Health Check
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      data-testid={`footer-${col.title.toLowerCase()}-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-sm text-white/70 transition-colors hover:text-brand-orange"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 h-2.5 w-full bg-ticks opacity-50" aria-hidden="true" />
        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Stream Biz. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" data-testid="footer-privacy" className="text-xs text-white/50 transition-colors hover:text-brand-orange">Privacy Policy</Link>
            <Link to="/terms" data-testid="footer-terms" className="text-xs text-white/50 transition-colors hover:text-brand-orange">Terms &amp; Conditions</Link>
            <Link to="/cookies" data-testid="footer-cookies" className="text-xs text-white/50 transition-colors hover:text-brand-orange">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
