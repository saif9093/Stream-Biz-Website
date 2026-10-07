import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, ArrowRight, Activity } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";

interface DropItem {
  to: string;
  title: string;
  short: string;
}

const RESOURCE_LINKS: DropItem[] = [
  { to: "/insights", title: "Insights & Articles", short: "Field notes and practical guidance on project delivery." },
  { to: "/project-health-check", title: "Project Health Check", short: "Score your project in ten questions and get tailored advice." },
  { to: "/cost-of-delay-calculator", title: "Cost of Delay Calculator", short: "Estimate what slippage and overruns could cost you." },
  { to: "/engagement-models", title: "Engagement Models", short: "Five ways to work with us, from advisory to recovery." },
  { to: "/faq", title: "FAQ", short: "Straight answers to the questions we hear most." },
  { to: "/careers", title: "Careers", short: "Build your project delivery career with Stream Biz." },
];

function NavDropdown({
  label,
  items,
  testid,
  onDark,
}: {
  label: string;
  items: DropItem[];
  testid: string;
  onDark: boolean;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        data-testid={testid}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 whitespace-nowrap py-2 text-[15px] font-semibold transition-colors hover:text-brand-orange ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-[580px] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-2xl shadow-ink/10">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-testid={`dropdown-${item.to.split("/").pop()}`}
              className="group/item flex flex-col gap-1 rounded-xl px-4 py-3 transition-colors hover:bg-soft"
            >
              <span className="text-sm font-bold text-ink transition-colors group-hover/item:text-brand-orange">
                {item.title}
              </span>
              <span className="text-xs leading-relaxed text-faint">{item.short}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const navLinkCls = (onDark: boolean) => ({ isActive }: { isActive: boolean }) =>
  `whitespace-nowrap py-2 text-[15px] font-semibold transition-colors hover:text-brand-orange ${
    isActive ? "text-brand-orange" : onDark ? "text-white" : "text-ink"
  }`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const serviceItems: DropItem[] = SERVICES.map((s) => ({ to: `/services/${s.slug}`, title: s.title, short: s.short }));
  const industryItems: DropItem[] = INDUSTRIES.map((i) => ({ to: `/industries/${i.slug}`, title: i.title, short: i.short }));
  const resourceItems: DropItem[] = RESOURCE_LINKS;
  const onDark = !scrolled;
  const linkCls = navLinkCls(onDark);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-white/92 shadow-[0_4px_24px_rgba(23,32,51,0.05)] backdrop-blur-xl"
          : "bg-gradient-to-b from-[#080E26]/70 via-[#080E26]/30 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between gap-8 px-6 lg:px-10">
        <Logo dark={onDark} className="h-[66px]" />
        <nav className="hidden flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-9" aria-label="Main navigation">
          <NavLink to="/" end className={linkCls} data-testid="nav-home">Home</NavLink>
          <NavLink to="/about" className={linkCls} data-testid="nav-about">About</NavLink>
          <NavDropdown label="Services" items={serviceItems} testid="nav-services-dropdown" onDark={onDark} />
          <NavDropdown label="Industries" items={industryItems} testid="nav-industries-dropdown" onDark={onDark} />
          <NavLink to="/how-we-work" className={linkCls} data-testid="nav-how-we-work">How We Work</NavLink>
          <NavLink to="/pricing" className={linkCls} data-testid="nav-pricing">Pricing</NavLink>
          <NavDropdown label="Resources" items={resourceItems} testid="nav-resources-dropdown" onDark={onDark} />
        </nav>
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            to="/project-health-check"
            data-testid="nav-health-check"
            aria-label="Project Health Check"
            title="Project Health Check"
            className={`flex h-11 items-center gap-2 whitespace-nowrap rounded-full border px-3.5 text-sm font-semibold transition-colors hover:border-brand-orange hover:text-brand-orange 2xl:px-5 ${
              onDark ? "border-white/25 bg-white/5 text-white backdrop-blur-md" : "border-line text-brand-navy"
            }`}
          >
            <Activity className="h-4 w-4" />
            <span className="hidden 2xl:inline">Health Check</span>
          </Link>
          <Link
            to="/start-a-project"
            data-testid="nav-start-project"
            className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-brand-orange px-6 text-sm font-bold text-white transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/25 active:scale-[0.98]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            data-testid="mobile-menu-button"
            className={`flex h-11 w-11 items-center justify-center rounded-full border xl:hidden ${
              onDark ? "border-white/30 bg-white/10 text-white backdrop-blur-md" : "border-line bg-white text-ink"
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-md overflow-y-auto bg-white p-0">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex flex-col gap-1 px-6 py-8">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  data-testid={`mobile-nav-${l.to === "/" ? "home" : l.to.slice(1)}`}
                  className="border-b border-line py-4 font-heading text-lg font-bold text-ink hover:text-brand-orange"
                >
                  {l.label}
                </Link>
              ))}
              {[
                { label: "Services", items: serviceItems },
                { label: "Industries", items: industryItems },
                { label: "Resources", items: resourceItems },
              ].map((group) => (
                <div key={group.label} className="border-b border-line">
                  <button
                    type="button"
                    data-testid={`mobile-${group.label.toLowerCase()}-toggle`}
                    onClick={() => setExpanded(expanded === group.label ? null : group.label)}
                    className="flex w-full items-center justify-between py-4 font-heading text-lg font-bold text-ink"
                  >
                    {group.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded === group.label ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${expanded === group.label ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      {group.items.map((item) => (
                        <Link key={item.to} to={item.to} className="block py-2 pl-4 text-sm font-medium text-body hover:text-brand-orange">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {[
                { to: "/how-we-work", label: "How We Work" },
                { to: "/pricing", label: "Pricing" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  data-testid={`mobile-nav-${l.to.slice(1)}`}
                  className="border-b border-line py-4 font-heading text-lg font-bold text-ink hover:text-brand-orange"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/start-a-project"
                data-testid="mobile-start-project"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-4 text-sm font-bold text-white"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
