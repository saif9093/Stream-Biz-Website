// Content for the conversion sections added after the reference-site review:
// delivery toolkit, support structures, service tiers, testimonials, careers.
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
    tab: "The Controls We Install",
    intro:
      "Within the first weeks of an engagement we stand up a connected set of controls — each one feeding the next, so the whole project runs from one version of the truth.",
    cta: { label: "Explore Project Controls", to: "/services/project-controls-reporting" },
    items: [
      { icon: "calendar", label: "Integrated Schedule", title: "One plan everyone works to", text: "A logic-linked master schedule connecting scope, resources, contractors and dependencies — baselined, so slippage is measured rather than argued about." },
      { icon: "wallet", label: "Cost & Commitments", title: "Know the cost position live", text: "Budget, commitments, actuals and forecast tracked together, so overruns show up as early warnings instead of month-end surprises." },
      { icon: "risk", label: "Risk & Issue Register", title: "Every risk has an owner", text: "A living register with named owners, response actions and review dates — reviewed weekly, not written once at kickoff and forgotten." },
      { icon: "workflow", label: "Change Control", title: "No change without impact", text: "Every scope change is assessed for cost, schedule and risk impact before approval, with a clear audit trail of who decided what." },
      { icon: "messages", label: "Decision Log", title: "Decisions made, recorded, actioned", text: "Stakeholder decisions captured with context and owners, so the same question is never debated twice and accountability is visible." },
      { icon: "report", label: "Executive Dashboard", title: "Leadership sees it first", text: "A one-page view of progress, cost, risk and milestones — built around the decisions leadership needs to make, not the data teams happen to have." },
    ],
  },
  {
    key: "rhythm",
    tab: "Our Delivery Rhythm",
    intro:
      "Controls only work when they are used. We run a steady operating rhythm that keeps every team, vendor and sponsor moving in the same direction, week after week.",
    cta: { label: "See How We Work", to: "/how-we-work" },
    items: [
      { icon: "target", label: "Rapid Mobilization", title: "Up and running in weeks", text: "A structured start: current-position review, stakeholder map and a mobilization plan that establishes control without stopping work in flight." },
      { icon: "eye", label: "Weekly Measurement", title: "Progress measured, not reported", text: "Progress captured against the baseline every week from real project data, so status reflects reality rather than optimism." },
      { icon: "users", label: "Coordination Forums", title: "The right people, the right meeting", text: "Short, purposeful forums for delivery teams, vendors and contractors — each with a clear agenda, inputs and outputs." },
      { icon: "alert", label: "Escalation Path", title: "Problems surface early", text: "A defined route for issues to reach the people who can solve them, with thresholds that trigger escalation before it becomes a crisis." },
      { icon: "shield", label: "Governance Cadence", title: "Sponsors decide, on time", text: "A predictable steering rhythm that puts the right decisions in front of sponsors with the evidence to make them." },
      { icon: "trending", label: "Continuous Improvement", title: "Every phase gets sharper", text: "Lessons captured at each stage and fed back into the plan and controls, so delivery capability keeps improving across the life of the project." },
    ],
  },
];

export const SUPPORT_STRUCTURES = [
  {
    key: "fractional",
    name: "Fractional",
    tag: "Targeted expertise",
    text: "Senior project leadership for a set number of days each week. Ideal when you need experienced oversight, governance or controls without a full-time hire.",
    points: ["Part-time senior project lead", "Governance and reporting set-up", "Mentoring for your internal team"],
  },
  {
    key: "dedicated",
    name: "Dedicated",
    tag: "Day-to-day delivery",
    text: "A dedicated project manager and controls support embedded in your team, running day-to-day delivery so your people can focus on their specialist work.",
    points: ["Full-time embedded project manager", "Planning, controls and reporting operated for you", "Vendor and contractor coordination"],
  },
  {
    key: "programme",
    name: "Programme & PMO",
    tag: "Portfolio scale",
    text: "A multi-disciplinary team for complex programmes and portfolios — programme leadership, PMO, planners and controllers working as one delivery function.",
    points: ["Programme director and PMO lead", "Portfolio-wide standards and dashboards", "Capability transfer to your organization"],
  },
];

export const SERVICE_TIERS = [
  {
    num: "Tier 1",
    name: "Visibility",
    summary: "Controls & reporting",
    line1: "Project",
    line2: "visibility",
    text: "We establish the plan, controls and reporting so leadership finally has one reliable view of progress, cost and risk.",
    includes: ["Integrated schedule and baseline", "Cost and commitment tracking", "Risk and issue register", "Weekly status and executive dashboard"],
  },
  {
    num: "Tier 2",
    name: "Control",
    summary: "Visibility + delivery leadership",
    line1: "Project visibility",
    line2: "& delivery leadership",
    text: "Everything in Visibility, plus hands-on project leadership that drives the delivery rhythm and resolves problems before they escalate.",
    includes: ["Everything in Tier 1", "Embedded project leadership", "Stakeholder and vendor coordination", "Change control and decision management"],
    featured: true,
  },
  {
    num: "Tier 3",
    name: "Assurance",
    summary: "Control + governance & PMO",
    line1: "Visibility, delivery leadership",
    line2: "& governance assurance",
    text: "Everything in Control, plus portfolio governance, independent assurance and the PMO capability to make good delivery repeatable.",
    includes: ["Everything in Tier 2", "PMO design and operation", "Stage-gate and independent reviews", "Capability transfer to internal teams"],
  },
];

/** Comparison matrix for the pricing page: feature → which tiers include it. */
export const TIER_MATRIX: { feature: string; tiers: [boolean, boolean, boolean] }[] = [
  { feature: "Integrated master schedule & baseline", tiers: [true, true, true] },
  { feature: "Cost, commitment & forecast tracking", tiers: [true, true, true] },
  { feature: "Risk & issue register with owners", tiers: [true, true, true] },
  { feature: "Executive dashboard & weekly reporting", tiers: [true, true, true] },
  { feature: "Embedded project leadership", tiers: [false, true, true] },
  { feature: "Vendor & contractor coordination", tiers: [false, true, true] },
  { feature: "Change control & decision log", tiers: [false, true, true] },
  { feature: "PMO design & operation", tiers: [false, false, true] },
  { feature: "Stage-gate & independent assurance reviews", tiers: [false, false, true] },
  { feature: "Portfolio-level governance & reporting", tiers: [false, false, true] },
  { feature: "Capability transfer & team coaching", tiers: [false, false, true] },
];

export const PRICING_FACTORS = [
  { icon: "layers", title: "Project scale & complexity", text: "Number of workstreams, contractors and interfaces we need to coordinate." },
  { icon: "calendar", title: "Duration & stage", text: "Whether we join at planning, mid-delivery or recovery — and for how long." },
  { icon: "users", title: "Team structure", text: "Fractional, dedicated or programme-scale support, and the mix of roles." },
  { icon: "shield", title: "Governance needs", text: "Board, regulator or funder reporting requirements and assurance depth." },
];

export const TESTIMONIALS = [
  { quote: "[CLIENT TESTIMONIAL — a short quote on how Stream Biz brought visibility and control to the project.]", name: "[CLIENT NAME]", role: "[ROLE], [COMPANY]", sector: "Construction & Infrastructure" },
  { quote: "[CLIENT TESTIMONIAL — a short quote on the reporting, governance or recovery outcome achieved.]", name: "[CLIENT NAME]", role: "[ROLE], [COMPANY]", sector: "Technology & Digital" },
  { quote: "[CLIENT TESTIMONIAL — a short quote on working alongside the internal team and capability left behind.]", name: "[CLIENT NAME]", role: "[ROLE], [COMPANY]", sector: "Healthcare" },
];

export const HOME_FAQ_COUNT = 6;

export const CAREER_VALUES = [
  { icon: "target", title: "Work that matters", text: "Lead projects that change how hospitals, cities and organizations operate — not reports that sit on a shelf." },
  { icon: "users", title: "Senior-led teams", text: "Learn alongside experienced project directors who still do the work, with real mentoring and room to grow." },
  { icon: "layers", title: "Variety across sectors", text: "Move between construction, technology, healthcare and transformation, building breadth few roles offer." },
  { icon: "trending", title: "Grow your craft", text: "Structured development in planning, controls, governance and leadership, with support for professional certification." },
];

export const CAREER_ROLES = [
  { title: "Project Manager", type: "Full-time / Contract", area: "Project Delivery" },
  { title: "Project Controls Analyst", type: "Full-time", area: "Controls & Reporting" },
  { title: "Planner / Scheduler", type: "Full-time / Contract", area: "Planning & Scheduling" },
  { title: "PMO Analyst", type: "Full-time", area: "PMO & Governance" },
];
