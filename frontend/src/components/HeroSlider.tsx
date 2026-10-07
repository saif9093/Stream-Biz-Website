import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EASE } from "./Reveal";
import { btnPrimary } from "./Section";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

interface Slide {
  eyebrow: string;
  tab: string;
  lines: { text: string; accent?: boolean }[];
  sub: string;
  cta: { label: string; to: string };
  cta2?: { label: string; to: string };
  image: string;
  imageAlt: string;
  video?: string;
  duration: number;
  pan: { x: [string, string]; y: [string, string] };
}

const SLIDES: Slide[] = [
  {
    eyebrow: "Call Center Project Management",
    tab: "Campaigns",
    lines: [
      { text: "Every call." },
      { text: "Every campaign." },
      { text: "Managed to results.", accent: true },
    ],
    sub: "Stream Biz is a Dubai call center that runs outbound sales, lead generation and customer support projects for clients — each one managed end to end in Salesforce.",
    cta: { label: "Start a Campaign", to: "/start-a-project" },
    cta2: { label: "Explore Our Services", to: "/services" },
    image: "/media/hero-1-delivery.jpg",
    imageAlt: "Stream Biz agents on headsets in a bright Dubai call center",
    duration: 7000,
    pan: { x: ["0%", "-2.5%"], y: ["0%", "1.5%"] },
  },
  {
    eyebrow: "Salesforce CRM Operations",
    tab: "Salesforce",
    lines: [
      { text: "Every lead, call" },
      { text: "and case in one place." },
      { text: "Live in Salesforce.", accent: true },
    ],
    sub: "Calls, contacts, leads, meetings and outcomes logged in Salesforce — with live dashboards clients can check any time.",
    cta: { label: "Explore Salesforce Operations", to: "/services/salesforce-crm" },
    image: "/media/hero-2-controls.jpg",
    imageAlt: "Team leader coaching an agent beside a live Salesforce dashboard",
    duration: 7000,
    pan: { x: ["-2%", "1.5%"], y: ["1%", "-1.5%"] },
  },
  {
    eyebrow: "Outbound Sales & Lead Generation",
    tab: "Sales",
    lines: [
      { text: "Trained agents" },
      { text: "turning lists into" },
      { text: "qualified pipeline.", accent: true },
    ],
    sub: "Dedicated teams that call your prospects, qualify interest and book meetings straight into your sales calendar.",
    cta: { label: "Explore Lead Generation", to: "/services/lead-generation" },
    image: "/media/hero-3-planning.jpg",
    imageAlt: "Campaign manager briefing a call center team in front of a results screen",
    duration: 7000,
    pan: { x: ["1.5%", "-2%"], y: ["-1%", "1.5%"] },
  },
  {
    eyebrow: "Customer Support & Quality",
    tab: "Support",
    lines: [
      { text: "Customer care" },
      { text: "that sounds like" },
      { text: "your brand.", accent: true },
    ],
    sub: "Calls, emails and chats answered by trained agents — with every call scored, coached and reported against agreed service levels.",
    cta: { label: "Explore Customer Support", to: "/services/customer-support" },
    image: "/media/hero-4-governance.jpg",
    imageAlt: "Support agent taking notes during a customer call",
    duration: 7000,
    pan: { x: ["-1.5%", "2%"], y: ["1.5%", "-1%"] },
  },
];

function useMotionAllowed() {
  const [allowed, setAllowed] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)");
    const update = () => setAllowed(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return allowed;
}

function SlideMedia({ slide, motionAllowed }: { slide: Slide; motionAllowed: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const showVideo = Boolean(slide.video) && motionAllowed;

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [showVideo]);

  return (
    <motion.div
      className="absolute inset-0 origin-center"
      initial={{ scale: motionAllowed ? 1.16 : 1, x: slide.pan.x[0], y: slide.pan.y[0] }}
      animate={{ scale: 1.02, x: slide.pan.x[1], y: slide.pan.y[1] }}
      transition={{ duration: slide.duration / 1000 + 2, ease: "linear" }}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          data-testid="hero-video"
          poster={slide.image}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label={slide.imageAlt}
          className="h-full w-full object-cover"
        >
          <source src={slide.video!.replace(".mp4", ".webm")} type="video/webm" />
          <source src={slide.video} type="video/mp4" />
        </video>
      ) : (
        <img src={slide.image} alt={slide.imageAlt} className="h-full w-full object-cover" />
      )}
    </motion.div>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const motionAllowed = useMotionAllowed();

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), []);

  const slide = SLIDES[index];

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, slide.duration);
    return () => clearTimeout(t);
  }, [index, paused, next, slide.duration]);

  return (
    <section
      className="relative h-[100svh] max-h-[1000px] min-h-[660px] overflow-hidden bg-[#0B122B]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-testid="hero-slider"
      aria-roledescription="carousel"
      aria-label="Stream Biz highlights"
    >
      {/* Media + Ken Burns */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <SlideMedia slide={slide} motionAllowed={motionAllowed} />
        </motion.div>
      </AnimatePresence>

      {/* Navy gradient overlays */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(97deg, rgba(8,14,38,0.78) 0%, rgba(13,22,56,0.6) 30%, rgba(25,39,99,0.28) 60%, rgba(44,59,123,0) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 90% at 85% 15%, rgba(244,116,38,0.12) 0%, rgba(244,116,38,0) 55%), linear-gradient(to top, rgba(8,13,34,0.8) 0%, rgba(8,13,34,0) 35%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        aria-hidden="true"
        style={{ backgroundImage: GRAIN }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-36 pt-28 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div key={index} className="flex max-w-3xl flex-col gap-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-orange"
            >
              <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
              {slide.eyebrow}
            </motion.p>
            <h1 className="font-heading text-[2.7rem] font-extrabold leading-[1.03] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-[4.6rem]">
              {slide.lines.map((line, i) => (
                <span key={line.text} className="block overflow-hidden pb-1.5">
                  <motion.span
                    className={`block ${line.accent ? "text-brand-orange" : "text-white"}`}
                    initial={{ y: "112%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-112%" }}
                    transition={{ duration: 0.85, delay: 0.1 + i * 0.13, ease: EASE }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              {slide.sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to={slide.cta.to} data-testid={`hero-cta-${index}`} className={btnPrimary}>
                {slide.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              {slide.cta2 && (
                <Link
                  to={slide.cta2.to}
                  data-testid={`hero-cta2-${index}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-[transform,background-color,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15 active:scale-[0.98]"
                >
                  {slide.cta2.label}
                </Link>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-32 left-6 z-20 hidden items-center gap-3 lg:left-8 lg:flex">
        <span className="h-10 w-px overflow-hidden bg-white/20">
          <motion.span
            className="block h-4 w-px bg-brand-orange"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">Scroll</span>
      </div>

      {/* Bottom controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#080E26]/55 backdrop-blur-xl">        <div className="mx-auto flex max-w-7xl items-stretch justify-between gap-6 px-6 lg:px-8">
          <div className="flex flex-1 items-stretch gap-0 overflow-x-auto" role="tablist" aria-label="Hero slides">
            {SLIDES.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                role="tab"
                aria-selected={index === i}
                data-testid={`hero-tab-${i}`}
                onClick={() => setIndex(i)}
                className={`group flex min-w-[120px] flex-1 flex-col gap-2.5 border-r border-white/10 px-4 py-4 text-left transition-colors sm:min-w-[140px] ${
                  index === i ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
                }`}
              >
                <span className={`font-mono text-[10px] font-bold ${index === i ? "text-brand-orange" : "text-white/35"}`}>
                  0{i + 1}
                </span>
                <span
                  className={`text-xs font-bold uppercase tracking-wider sm:text-[13px] ${
                    index === i ? "text-white" : "text-white/55 group-hover:text-white/80"
                  }`}
                >
                  {s.tab}
                </span>
                <span className="relative h-0.5 w-full overflow-hidden rounded-full bg-white/15">
                  {index === i && (
                    <motion.span
                      key={`progress-${index}-${paused}`}
                      initial={{ width: paused ? undefined : 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: paused ? 0 : slide.duration / 1000, ease: "linear" }}
                      className="absolute inset-y-0 left-0 bg-brand-orange"
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-3 px-2 md:flex">
            <span className="font-mono text-xs font-bold text-white/70" data-testid="hero-counter">
              0{index + 1} <span className="text-white/35">/ 0{SLIDES.length}</span>
            </span>
            <button
              type="button"
              data-testid="hero-prev"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-brand-navy"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              data-testid="hero-next"
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
