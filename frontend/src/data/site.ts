export const PROBLEM_CARDS = [
  { num: "01", icon: "target", title: "Unclear Priorities", text: "Teams work hard without a shared project direction." },
  { num: "02", icon: "eye", title: "Limited Visibility", text: "Leadership lacks a reliable view of progress, cost, risks and dependencies." },
  { num: "03", icon: "alert", title: "Delivery Risk", text: "Issues are identified late instead of being managed early." },
  { num: "04", icon: "messages", title: "Fragmented Communication", text: "Stakeholders, contractors and internal teams operate without one source of truth." },
];

export const TRANSFORM_STEPS = [
  { key: "PLAN", does: "Scope, schedule, resources, dependencies", gets: "A realistic, agreed delivery baseline", artifact: "Integrated master schedule" },
  { key: "ALIGN", does: "Roles, governance, stakeholders, communication", gets: "One team with clear decision rights", artifact: "Governance & RACI structure" },
  { key: "CONTROL", does: "Cost, risk, quality, progress, change", gets: "A live, honest view of delivery", artifact: "Project control dashboard" },
  { key: "DELIVER", does: "Execution, coordination, issue resolution", gets: "Steady progress against milestones", artifact: "Milestone & delivery tracker" },
  { key: "IMPROVE", does: "Lessons learned, reporting, optimization", gets: "Capability that outlasts the project", artifact: "Close-out & lessons report" },
];

export const PROCESS_PHASES = [
  {
    num: "01",
    name: "DISCOVER",
    objective: "Understand the project, the organization and what success actually requires.",
    activities: ["Stakeholder interviews", "Document and plan review", "Constraint and dependency mapping", "Success criteria definition"],
    outputs: ["Discovery findings", "Success criteria", "Constraint register", "Mobilization brief"],
    stakeholders: "Sponsors, key stakeholders, delivery leads",
    controls: "Baseline review of current documentation and readiness",
  },
  {
    num: "02",
    name: "DEFINE",
    objective: "Turn ambition into a clear, agreed definition of scope, governance and approach.",
    activities: ["Scope and work breakdown", "Governance and decision rights design", "Delivery strategy", "Resource and vendor model"],
    outputs: ["Project charter", "Governance structure", "Delivery strategy", "Scope baseline"],
    stakeholders: "Sponsor, steering group, workstream owners",
    controls: "Charter sign-off and scope baseline gate",
  },
  {
    num: "03",
    name: "PLAN",
    objective: "Build a credible, logic-driven plan the whole team can commit to.",
    activities: ["Integrated schedule development", "Cost baseline and budget", "Risk identification and response planning", "Communication and reporting design"],
    outputs: ["Master schedule", "Cost baseline", "Risk register", "Reporting framework"],
    stakeholders: "Delivery team, planners, finance, vendors",
    controls: "Baseline approval gate — schedule, cost and risk",
  },
  {
    num: "04",
    name: "EXECUTE",
    objective: "Drive the work forward with clear ownership and coordinated delivery.",
    activities: ["Workstream coordination", "Vendor and contractor management", "Decision facilitation", "Team leadership and unblocking"],
    outputs: ["Delivered work packages", "Decision log", "Coordination rhythm", "Escalation handling"],
    stakeholders: "All delivery parties, steering group",
    controls: "Weekly delivery rhythm and decision tracking",
  },
  {
    num: "05",
    name: "CONTROL",
    objective: "Keep the project honest — measure progress, manage change, catch risk early.",
    activities: ["Progress and cost measurement", "Risk and issue management", "Change control", "Executive reporting"],
    outputs: ["Status and executive reports", "Updated forecasts", "Change log", "Risk & issue position"],
    stakeholders: "Sponsor, steering group, PMO",
    controls: "Measurement rules, change thresholds, gate reviews",
  },
  {
    num: "06",
    name: "CLOSE",
    objective: "Finish deliberately — handover, acceptance, and lessons that improve the next project.",
    activities: ["Completion verification", "Handover and documentation", "Benefits handover to operations", "Lessons learned"],
    outputs: ["Acceptance certificates", "Handover pack", "Close-out report", "Lessons register"],
    stakeholders: "Operations, sponsor, support teams",
    controls: "Completion criteria and formal acceptance",
  },
];

export const OPERATING_MODEL = [
  { step: "Strategy", text: "Where the organization is going and why this project exists" },
  { step: "Project Governance", text: "Who decides, at what level, with what information" },
  { step: "Planning", text: "Turning intent into a credible, resourced, scheduled path" },
  { step: "Execution", text: "Coordinated delivery by people who own their part" },
  { step: "Project Controls", text: "Measurement that keeps the picture honest" },
  { step: "Reporting", text: "The right truth to the right people at the right time" },
  { step: "Delivery", text: "Milestones met, outcomes handed over, value realized" },
  { step: "Lessons Learned", text: "Every project makes the next one stronger" },
];

export const DELIVERY_INPUTS = [
  { icon: "clipboard", label: "Scope" },
  { icon: "calendar", label: "Timeline" },
  { icon: "users", label: "People" },
  { icon: "wallet", label: "Budget" },
  { icon: "risk", label: "Risk" },
  { icon: "network", label: "Stakeholders" },
  { icon: "layers", label: "Dependencies" },
];

export const DELIVERY_OUTPUTS = [
  "Visibility",
  "Accountability",
  "Early Risk Detection",
  "Better Decisions",
  "Controlled Execution",
  "Successful Delivery",
];

export const VALUES = [
  { title: "Accountability", text: "We take ownership of outcomes, not just activities. When we hold the plan, we hold the responsibility that comes with it." },
  { title: "Clarity", text: "Complex projects fail in ambiguity. We make the position, the plan and the decisions unmistakably clear." },
  { title: "Collaboration", text: "We work inside your team, not around it. The best project controls are the ones your people keep using after we leave." },
  { title: "Practicality", text: "Methodology serves delivery, never the reverse. We apply the minimum structure that creates real control." },
  { title: "Continuous Improvement", text: "Every project teaches something. We capture it, share it and build it into how the next one runs." },
  { title: "Delivery Focus", text: "Reports, plans and governance exist for one reason: finished projects that deliver what was promised." },
];

export const TEAM = [
  {
    name: "[Name]",
    role: "Managing Director, Project Delivery",
    bio: "[Bio — replace with team member background, delivery focus and sector experience.]",
    specialisms: ["Programme leadership", "Delivery assurance", "Executive advisory"],
    image: "/media/team-1.jpg",
  },
  {
    name: "[Name]",
    role: "Director, PMO & Governance",
    bio: "[Bio — replace with team member background, delivery focus and sector experience.]",
    specialisms: ["PMO design", "Portfolio controls", "Governance frameworks"],
    image: "/media/team-2.jpg",
  },
  {
    name: "[Name]",
    role: "Head of Project Controls",
    bio: "[Bio — replace with team member background, delivery focus and sector experience.]",
    specialisms: ["Planning & scheduling", "Cost control", "Project reporting"],
    image: "/media/team-3.jpg",
  },
  {
    name: "[Name]",
    role: "Senior Project Manager, Digital Delivery",
    bio: "[Bio — replace with team member background, delivery focus and sector experience.]",
    specialisms: ["Digital transformation", "Vendor management", "Agile & hybrid delivery"],
    image: "/media/team-4.jpg",
  },
];

export const SITE_FAQS = [
  { q: "What types of projects do you manage?", a: "We manage complex, business-critical projects across construction and infrastructure, technology and digital, real estate, engineering, healthcare and corporate transformation — typically where multiple stakeholders, vendors or workstreams must be coordinated against a fixed outcome." },
  { q: "Do you work with internal project teams?", a: "Yes — that is our default model. We lead alongside your internal team, adding structure, controls and senior delivery experience while your people retain ownership of their workstreams." },
  { q: "Can you provide PMO support?", a: "Yes. We design, set up, strengthen or operate PMO functions — from governance frameworks and standards to portfolio reporting and delivery assurance." },
  { q: "Can you take over a project already in progress?", a: "Yes. We begin with a structured review of the current position, then transition leadership with a clear mobilization plan so the project keeps moving while control is established." },
  { q: "Can you support troubled projects?", a: "Yes. Our delivery assurance work starts with an independent, evidence-based assessment, followed by a practical recovery plan — and, where needed, hands-on leadership through the recovery." },
  { q: "Do you provide project reporting?", a: "Yes. Reporting is core to our project controls service: dashboards, KPIs, cost and schedule visibility, and executive reporting designed around the decisions leadership needs to make." },
  { q: "Can you work alongside contractors and consultants?", a: "Yes. We regularly coordinate multi-party delivery — contractors, vendors, designers and other consultants — providing the single integrated plan and control environment all parties work to." },
  { q: "Can you support multi-project portfolios?", a: "Yes. We establish portfolio-level governance, consistent measurement and consolidated reporting so leadership can compare, prioritize and intervene across the whole portfolio." },
  { q: "How long does an engagement typically last?", a: "It depends on the need: a project health assessment may take a few weeks, while full delivery leadership runs the life of the project. Engagements are scoped and agreed up front." },
  { q: "Can services be customized?", a: "Yes. Every engagement is shaped around your project's stage, constraints and internal capability — from a single specialist service to full end-to-end delivery management." },
];

export const ENGAGEMENT_MODELS = [
  { num: "01", title: "Advisory", for: "For organizations that need project expertise and guidance.", includes: ["Sponsor and executive advisory", "Independent reviews and challenge", "Methodology and governance guidance", "On-call senior expertise"] },
  { num: "02", title: "Managed Project Support", for: "For organizations that need ongoing project management capacity.", includes: ["Embedded project managers and controllers", "Planning, controls and reporting operation", "Coordination across teams and vendors", "Flexible capacity as the project evolves"] },
  { num: "03", title: "PMO Support", for: "For businesses building or strengthening their project management office.", includes: ["PMO design and setup", "Standards, templates and tooling", "Portfolio reporting operation", "Capability transfer to internal teams"] },
  { num: "04", title: "Project Recovery", for: "For projects that need independent assessment, intervention or recovery planning.", includes: ["Independent delivery assessment", "Recovery roadmap and re-baseline", "Hands-on turnaround leadership", "Board-level reporting through recovery"] },
  { num: "05", title: "Fractional Project Management", for: "For organizations that need experienced project leadership without a full-time internal hire.", includes: ["Senior project leadership, part-time", "Governance and control environment", "Team mentoring and capability building", "Scales with the project's phases"] },
];

export const ENGAGEMENT_STEPS = [
  { num: "01", name: "Assess", text: "Understand the project position, constraints and what support will make the biggest difference." },
  { num: "02", name: "Design", text: "Shape the right structure, controls and team model for your reality — right-sized, never boilerplate." },
  { num: "03", name: "Implement", text: "Stand up the plan, governance and reporting quickly, with minimal disruption to work in flight." },
  { num: "04", name: "Manage", text: "Run the delivery rhythm: coordination, measurement, risk and executive visibility." },
  { num: "05", name: "Optimize", text: "Review, refine and strengthen — so delivery capability keeps improving beyond the engagement." },
];

export const NEXT_STEPS = [
  { num: "01", title: "We review your project requirements", text: "Your submission is read by a senior project professional — not routed through a sales queue." },
  { num: "02", title: "We identify the right areas of support", text: "We map your situation to the services and engagement model that fit — and tell you honestly if we're not the right partner." },
  { num: "03", title: "We schedule a consultation", text: "A focused conversation about your project, its constraints and where control is needed most." },
  { num: "04", title: "We define the next steps", text: "You receive a clear, practical proposal: scope, approach, team and how we'd start." },
];

export const HEALTH_QUESTIONS = [
  { category: "Planning", q: "How clearly is your project's scope defined and agreed?", options: ["Not documented", "Partially documented", "Documented but disputed", "Documented, agreed and controlled"] },
  { category: "Planning", q: "Does a current, realistic plan exist that the team actually works to?", options: ["No plan", "A plan exists but is outdated", "Plan is current but loosely followed", "Plan is current and drives weekly work"] },
  { category: "Schedule", q: "How confident are you in the project's key dates?", options: ["Dates are guesses", "Dates set but not validated", "Dates validated but slipping", "Dates validated, tracked and holding"] },
  { category: "Schedule", q: "Are dependencies between teams, vendors and third parties managed?", options: ["Not tracked", "Known but unmanaged", "Tracked informally", "Formally tracked with owners"] },
  { category: "Budget", q: "Do you know your current cost position against budget?", options: ["No visibility", "Known at month-end", "Tracked weekly", "Live view including commitments"] },
  { category: "Budget", q: "Are changes assessed for cost impact before approval?", options: ["Rarely", "Sometimes", "Usually", "Always, via change control"] },
  { category: "Risk", q: "Is there a living risk register with named owners?", options: ["No register", "Written once at kickoff", "Reviewed occasionally", "Reviewed weekly with owners"] },
  { category: "Risk", q: "How early do issues typically reach decision-makers?", options: ["When they become crises", "Late, via escalation", "Through regular reporting", "Early, through a defined path"] },
  { category: "Governance", q: "Are stakeholders aligned on priorities and decision rights?", options: ["Frequent conflict", "Alignment assumed, not tested", "Mostly aligned", "Aligned with clear decision rights"] },
  { category: "Governance", q: "Does leadership get a reliable, regular view of delivery?", options: ["Ad hoc updates", "Inconsistent reporting", "Regular but debated numbers", "One trusted source of truth"] },
];

export const RESOURCES = [
  { title: "Project Management Checklist", type: "Checklist", desc: "The essential setup, control and close-out actions for any serious project." },
  { title: "Project Health Checklist", type: "Checklist", desc: "Ten questions that reveal how your project is really doing." },
  { title: "Project Risk Register Template", type: "Template", desc: "A working risk register structure with ownership and response tracking." },
  { title: "Project Status Report Template", type: "Template", desc: "One-page executive reporting that surfaces decisions, not just data." },
  { title: "Project Kickoff Checklist", type: "Checklist", desc: "Everything the first 30 days of a well-run project should establish." },
  { title: "PMO Readiness Checklist", type: "Checklist", desc: "Assess whether your organization is ready to stand up a PMO — and which model fits." },
];

export const TRUST_PLACEHOLDERS = ["[CLIENT LOGO]", "[CLIENT LOGO]", "[CLIENT LOGO]", "[CLIENT LOGO]", "[CERTIFICATION]", "[PARTNER LOGO]", "[INDUSTRY MEMBERSHIP]", "[AWARD]"];

export const DASHBOARD_MILESTONES = [
  { label: "Design Approval", status: "complete" as const, date: "Completed" },
  { label: "Procurement", status: "complete" as const, date: "Completed" },
  { label: "Site Mobilization", status: "current" as const, date: "This week" },
  { label: "Testing", status: "upcoming" as const, date: "In 5 weeks" },
  { label: "Final Handover", status: "upcoming" as const, date: "In 11 weeks" },
];

export const OFFICE = {
  name: "Stream Biz — Dubai Office",
  lines: ["Office # 2, Mezzanine Floor", "Silver Building, Hor Al Anz East", "Dubai, U.A.E"],
  full: "Office # 2, Mezzanine Floor, Silver Building, Hor Al Anz East, Dubai, U.A.E",
  mapQuery: "Silver Building, Hor Al Anz East, Dubai, United Arab Emirates",
};
export const officeMapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE.mapQuery)}&z=16&output=embed`;
export const officeDirections = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE.mapQuery)}`;
