// Content for the conversion sections: campaign toolkit, team models, service tiers,
// testimonials, careers.
// Testimonials and anything client-specific stay as [PLACEHOLDERS] until real content is supplied.

export interface ToolkitItem {
  icon: string;
  label: string;
  title: string;
  text: string;
}

export const TOOLKIT_TABS: { key: string; tab: string; intro: string; cta: { label: string; to: string }; items: ToolkitItem[] }[] = [
  {
    key: "controls",
    tab: "What We Set Up",
    intro:
      "Before the first call goes out, every campaign gets a connected set of tools — all running in Salesforce, so the whole project works from one version of the truth.",
    cta: { label: "Explore Salesforce CRM Operations", to: "/services/salesforce-crm" },
    items: [
      { icon: "clipboard", label: "Campaign Plan", title: "One plan everyone works to", text: "Goals, targets, team size, hours and launch dates agreed with you up front — so success is defined before the first dial." },
      { icon: "messages", label: "Scripts & Call Flows", title: "The right words on every call", text: "Tested scripts, call flows and objection handling for every call type, version-controlled so agents always use the latest one." },
      { icon: "cloud", label: "Salesforce Workspace", title: "Every call in one record", text: "Leads, contacts, cases, call logs and outcomes captured in Salesforce, with fields and stages built around your campaign." },
      { icon: "database", label: "Clean Call Lists", title: "Lists worth calling", text: "Data cleaned, de-duplicated and segmented before calling starts, with do-not-call rules applied automatically." },
      { icon: "shield", label: "QA Scorecard", title: "Quality you can measure", text: "A scorecard agreed with you, used to score sampled calls every week and drive agent coaching." },
      { icon: "report", label: "Live Dashboard", title: "Results you see first", text: "A live Salesforce dashboard of calls, contacts, leads, meetings, sales and quality — no waiting for a monthly report." },
    ],
  },
  {
    key: "rhythm",
    tab: "Our Daily Rhythm",
    intro:
      "Tools only work when they're used. Every campaign runs on a steady daily and weekly rhythm that keeps agents, team leaders and your team pulling in the same direction.",
    cta: { label: "See How We Work", to: "/how-we-work" },
    items: [
      { icon: "target", label: "Fast Launch", title: "Live in weeks, not months", text: "A launch checklist covering hiring, training, Salesforce setup and data — with a pilot group going live first." },
      { icon: "users", label: "Daily Huddles", title: "Every shift starts focused", text: "Short team huddles to share targets, script updates and yesterday's wins and lessons." },
      { icon: "headset", label: "Live Call Listening", title: "Coaching in the moment", text: "Team leaders listen to live and recorded calls and give agents specific feedback the same day." },
      { icon: "alert", label: "Escalation Path", title: "Problems fixed fast", text: "A clear route for complaints, technical issues and hot leads to reach the right person in minutes." },
      { icon: "calendar", label: "Weekly Client Review", title: "You always know where you stand", text: "A weekly call with your project manager to review results, quality and next week's priorities." },
      { icon: "trending", label: "Continuous Improvement", title: "Better results every week", text: "Script tests, list refreshes and coaching plans driven by the data, so performance keeps climbing." },
    ],
  },
];

export const SUPPORT_STRUCTURES = [
  {
    key: "fractional",
    name: "Shared Team",
    tag: "Flexible capacity",
    text: "Trained agents shared across a small number of campaigns. Ideal for pilots, overflow support or lower call volumes.",
    points: ["Pay for the hours you need", "Fast start with trained agents", "Shared team leader and QA"],
  },
  {
    key: "dedicated",
    name: "Dedicated Team",
    tag: "Most popular",
    text: "A dedicated team of agents who work only on your campaign, trained on your products and led by a named project manager.",
    points: ["Agents who know your brand", "Named project manager", "Dedicated QA and weekly reporting"],
  },
  {
    key: "programme",
    name: "Multi-Campaign Program",
    tag: "Enterprise scale",
    text: "Several campaigns run together — for example sales, support and retention — with shared Salesforce reporting and one account lead.",
    points: ["Account director across campaigns", "Combined Salesforce dashboards", "Cross-campaign insights"],
  },
];

export const SERVICE_TIERS = [
  {
    num: "Tier 1",
    name: "Launch",
    summary: "Agents + scripts + reporting",
    line1: "Trained agents",
    line2: "on your campaign",
    text: "A trained agent team working from approved scripts, with every call logged and a weekly report on activity and results.",
    includes: ["Trained agent team", "Approved scripts and call flows", "Call logging in Salesforce", "Weekly activity and results report"],
  },
  {
    num: "Tier 2",
    name: "Managed",
    summary: "Launch + project management & QA",
    line1: "A managed campaign",
    line2: "with QA & live dashboards",
    text: "Everything in Launch, plus a named project manager, structured quality assurance and live Salesforce dashboards.",
    includes: ["Everything in Tier 1", "Named project manager", "QA scoring and agent coaching", "Live Salesforce dashboards"],
    featured: true,
  },
  {
    num: "Tier 3",
    name: "Growth",
    summary: "Managed + Salesforce ops & optimization",
    line1: "Multi-channel growth",
    line2: "& Salesforce operations",
    text: "Everything in Managed, plus Salesforce configuration and automation, multi-campaign programs and ongoing optimization.",
    includes: ["Everything in Tier 2", "Salesforce setup and automation", "Multi-campaign programs", "Script and list optimization"],
  },
];

/** Comparison matrix for the pricing page: feature → which tiers include it. */
export const TIER_MATRIX: { feature: string; tiers: [boolean, boolean, boolean] }[] = [
  { feature: "Trained, dedicated agent team", tiers: [true, true, true] },
  { feature: "Approved scripts & call flows", tiers: [true, true, true] },
  { feature: "Every call logged in Salesforce", tiers: [true, true, true] },
  { feature: "Weekly activity & results report", tiers: [true, true, true] },
  { feature: "Named project manager", tiers: [false, true, true] },
  { feature: "QA call scoring & agent coaching", tiers: [false, true, true] },
  { feature: "Live Salesforce dashboards", tiers: [false, true, true] },
  { feature: "Salesforce configuration & automation", tiers: [false, false, true] },
  { feature: "Multi-campaign programs", tiers: [false, false, true] },
  { feature: "Script A/B tests & list optimization", tiers: [false, false, true] },
  { feature: "Monthly leadership review", tiers: [false, false, true] },
];

export const PRICING_FACTORS = [
  { icon: "users", title: "Team size & hours", text: "How many agents you need, and which days, hours and time zones they cover." },
  { icon: "headset", title: "Campaign type", text: "Outbound sales, lead generation, appointment setting, support or retention." },
  { icon: "messages", title: "Languages & channels", text: "English, Arabic or other languages, and whether we cover calls, email and chat." },
  { icon: "cloud", title: "Salesforce setup", text: "Whether we work in your Salesforce org or configure one for the campaign." },
];

// DRAFT testimonials: written to reflect typical client feedback. Replace each with a real, client-approved
// quote (and name/company if the client agrees) before the site goes live.
export const TESTIMONIALS = [
  {
    quote: "Our launch enquiries used to sit in inboxes for days. Stream Biz now calls every new lead within the hour, books the viewings and logs everything in Salesforce — our sales team finally knows which campaigns actually sell units.",
    name: "Head of Sales",
    role: "Property Developer, Dubai",
    sector: "Real Estate",
  },
  {
    quote: "We handed over our support line during a busy product launch. Queues came down, every case was tracked in Service Cloud, and the weekly QA reviews gave us real confidence in how our customers were being treated.",
    name: "Customer Experience Manager",
    role: "Telecom Provider, UAE",
    sector: "Telecom",
  },
  {
    quote: "Our account executives were spending half their week prospecting. Now Stream Biz books qualified demos straight into their calendars, and the Salesforce dashboard shows exactly where every meeting came from.",
    name: "VP of Sales",
    role: "B2B Software Company",
    sector: "Technology & SaaS",
  },
];

export const HOME_FAQ_COUNT = 6;

export const CAREER_VALUES = [
  { icon: "headset", title: "Real projects, real clients", text: "Work on live campaigns for brands across real estate, finance, telecom, healthcare and more — every shift makes a visible difference." },
  { icon: "users", title: "Training from day one", text: "Paid product and script training, daily huddles and one-to-one coaching from experienced team leaders." },
  { icon: "cloud", title: "Learn Salesforce", text: "Use Salesforce every day — a CRM skill employers across the world look for." },
  { icon: "trending", title: "Clear path to grow", text: "Move from agent to senior agent, QA analyst, team leader or project coordinator based on performance." },
];

export const CAREER_ROLES = [
  { title: "Call Center Agent (English / Arabic)", type: "Full-time", area: "Outbound & Inbound Campaigns" },
  { title: "Sales Development Representative", type: "Full-time", area: "Lead Generation & Appointment Setting" },
  { title: "Customer Support Executive", type: "Full-time / Shifts", area: "Inbound Support" },
  { title: "Team Leader", type: "Full-time", area: "Campaign Operations" },
  { title: "Quality Analyst", type: "Full-time", area: "Quality Assurance" },
  { title: "Salesforce Administrator", type: "Full-time", area: "CRM Operations" },
];
