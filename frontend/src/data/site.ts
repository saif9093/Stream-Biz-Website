export const PROBLEM_CARDS = [
  { num: "01", icon: "target", title: "Campaigns Without an Owner", text: "Calls get made, but nobody is accountable for the targets, the scripts or the results." },
  { num: "02", icon: "eye", title: "No Live Visibility", text: "Clients wait for a monthly report to learn how many calls, leads and sales actually happened." },
  { num: "03", icon: "alert", title: "Quality Drifts Quietly", text: "Scripts go stale and poor calls go unnoticed until a customer complains." },
  { num: "04", icon: "messages", title: "Data Scattered Everywhere", text: "Leads, call notes and outcomes live in dialers, spreadsheets and inboxes instead of one Salesforce record." },
];

export const TRANSFORM_STEPS = [
  { key: "PLAN", does: "Campaign goals, targets, scripts, team size", gets: "A launch plan everyone has agreed", artifact: "Campaign plan & launch checklist" },
  { key: "BUILD", does: "Agent hiring, training, Salesforce setup", gets: "A trained team working in a ready CRM", artifact: "Configured Salesforce workspace" },
  { key: "RUN", does: "Daily calling, huddles, callbacks, follow-ups", gets: "Steady activity against daily targets", artifact: "Live campaign dashboard" },
  { key: "MEASURE", does: "Call QA, conversions, service levels", gets: "An honest, live view of results", artifact: "QA scorecards & weekly report" },
  { key: "IMPROVE", does: "Script tests, coaching, list refresh", gets: "Better results every week", artifact: "Optimization log & review notes" },
];

export const PROCESS_PHASES = [
  {
    num: "01",
    name: "DISCOVER",
    objective: "Understand your offer, your customers and what a successful campaign looks like.",
    activities: ["Kick-off call with your team", "Review of products, pricing and FAQs", "Current CRM and data review", "Agree KPIs and success measures"],
    outputs: ["Campaign brief", "Agreed KPIs", "Data and CRM review", "Launch timeline"],
    stakeholders: "Your sales, marketing or service lead; our project manager",
    controls: "Signed-off brief before any build work starts",
  },
  {
    num: "02",
    name: "DESIGN",
    objective: "Design the call flow, scripts and Salesforce setup the campaign will run on.",
    activities: ["Script and call flow writing", "Objection handling guide", "Salesforce fields, stages and dashboards", "Reporting and review rhythm"],
    outputs: ["Approved scripts", "Call flow map", "Salesforce design", "Reporting template"],
    stakeholders: "Your campaign owner, our project manager and Salesforce lead",
    controls: "Script and CRM sign-off gate",
  },
  {
    num: "03",
    name: "BUILD",
    objective: "Recruit, train and certify the agent team and get Salesforce ready for day one.",
    activities: ["Agent selection and onboarding", "Product and script training", "Salesforce configuration and data load", "Mock calls and certification"],
    outputs: ["Certified agent team", "Configured Salesforce org", "Clean call lists", "Go-live checklist"],
    stakeholders: "Team leaders, trainers, Salesforce admin",
    controls: "Agents certified through mock calls before go-live",
  },
  {
    num: "04",
    name: "LAUNCH",
    objective: "Go live with a controlled ramp-up so early issues are found and fixed fast.",
    activities: ["Soft launch with a pilot group", "Daily huddles and live call listening", "Fast script and process fixes", "Full team ramp-up"],
    outputs: ["Live campaign", "Pilot learnings", "Updated scripts", "Daily activity report"],
    stakeholders: "Agents, team leaders, project manager, your campaign owner",
    controls: "Daily review of calls, contacts and conversions",
  },
  {
    num: "05",
    name: "MANAGE",
    objective: "Run the campaign to target every day — calls, quality, coaching and reporting.",
    activities: ["Daily targets and huddles", "QA call scoring and coaching", "Callback and follow-up management", "Weekly client review calls"],
    outputs: ["Live Salesforce dashboard", "QA scorecards", "Weekly performance report", "Change log"],
    stakeholders: "Project manager, QA team, your campaign owner",
    controls: "Agreed KPIs, QA thresholds and change approvals",
  },
  {
    num: "06",
    name: "OPTIMIZE",
    objective: "Use the data to improve results — and report clearly on what the campaign delivered.",
    activities: ["Script and offer A/B tests", "List refresh and re-segmentation", "Monthly results review", "Next-phase recommendations"],
    outputs: ["Monthly results review", "Optimization log", "Campaign close-out report", "Next-phase plan"],
    stakeholders: "Your leadership team and our project manager",
    controls: "Results reviewed against the original brief",
  },
];

export const OPERATING_MODEL = [
  { step: "Client Brief", text: "What you sell, who you're calling and what success looks like" },
  { step: "Project Manager", text: "One named owner for targets, team and reporting" },
  { step: "Scripts & Call Flows", text: "Tested words for every call type and objection" },
  { step: "Agent Team", text: "Recruited, trained and certified for your campaign" },
  { step: "Salesforce", text: "Every lead, call, case and outcome in one record" },
  { step: "Quality Assurance", text: "Calls scored, agents coached, standards kept" },
  { step: "Reporting", text: "Live dashboards and a weekly review with you" },
  { step: "Optimization", text: "Each week's data makes the next week better" },
];

export const DELIVERY_INPUTS = [
  { icon: "clipboard", label: "Brief" },
  { icon: "users", label: "Agents" },
  { icon: "messages", label: "Scripts" },
  { icon: "layers", label: "Call Lists" },
  { icon: "network", label: "Salesforce" },
  { icon: "calendar", label: "Schedules" },
  { icon: "risk", label: "Compliance" },
];

export const DELIVERY_OUTPUTS = [
  "Qualified Leads",
  "Booked Meetings",
  "Closed Sales",
  "Resolved Cases",
  "Retained Customers",
  "Live Reporting",
];

export const VALUES = [
  { title: "Accountability", text: "Every campaign has one named owner. We own the targets, the team and the results — not just the call volume." },
  { title: "Clarity", text: "Clear scripts, clear targets and clear reports. Clients and agents always know where the campaign stands." },
  { title: "Respect for Every Call", text: "Each call carries your brand. We train agents to be polite, accurate and genuinely helpful." },
  { title: "Data Discipline", text: "If it isn't in Salesforce, it didn't happen. Clean records make honest reporting possible." },
  { title: "Continuous Coaching", text: "Agents improve through daily feedback, call reviews and one-to-one coaching." },
  { title: "Results Focus", text: "Dials are a means, not the goal. We measure ourselves on leads, meetings, sales and satisfied customers." },
];

export const TEAM = [
  {
    name: "[Name]",
    role: "Managing Director",
    bio: "[Bio — replace with team member background, call center and client experience.]",
    specialisms: ["Client partnerships", "Call center operations", "Business growth"],
    image: "/media/team-1.jpg",
  },
  {
    name: "[Name]",
    role: "Head of Operations",
    bio: "[Bio — replace with team member background, call center and client experience.]",
    specialisms: ["Campaign management", "Workforce planning", "Service levels"],
    image: "/media/team-2.jpg",
  },
  {
    name: "[Name]",
    role: "Salesforce Lead",
    bio: "[Bio — replace with team member background, call center and client experience.]",
    specialisms: ["Salesforce configuration", "Automation", "Dashboards & reporting"],
    image: "/media/team-3.jpg",
  },
  {
    name: "[Name]",
    role: "Quality & Training Manager",
    bio: "[Bio — replace with team member background, call center and client experience.]",
    specialisms: ["QA scorecards", "Agent training", "Coaching programs"],
    image: "/media/team-4.jpg",
  },
];

export const SITE_FAQS = [
  { q: "What does Stream Biz do?", a: "Stream Biz is a Dubai-based call center that runs outsourced calling projects for other companies — outbound sales, lead generation, appointment setting, customer support and retention — with every project managed in Salesforce." },
  { q: "What is a \"project\" at Stream Biz?", a: "Each client campaign is run as a project: a named project manager, a trained agent team, approved scripts, a Salesforce workspace, daily targets and weekly reporting to the client." },
  { q: "Why Salesforce?", a: "Salesforce keeps every lead, call, case and outcome in one place. That gives our agents full customer history on every call and gives clients live, trustworthy reporting." },
  { q: "Can you work in our Salesforce org?", a: "Yes. We can work directly in your Salesforce org with your licences, or run the campaign in ours and sync leads and results to you." },
  { q: "Which languages and markets do you cover?", a: "We cover English and Arabic-speaking markets from our Dubai office. Other languages can be discussed during scoping." },
  { q: "How quickly can a campaign go live?", a: "It depends on team size, training and Salesforce setup. We agree a launch plan with dates during scoping, and start with a pilot group before full ramp-up." },
  { q: "How do you make sure call quality stays high?", a: "Every campaign has an agreed QA scorecard. We score a sample of calls every week, coach agents on the findings and share quality scores with you alongside results." },
  { q: "Can we listen to the calls?", a: "Yes. Call recordings, QA scores and Salesforce dashboards are available to you, and we run regular calibration sessions together." },
  { q: "Do you handle calling compliance?", a: "Yes. We follow the calling rules for each market, record consent where required and keep do-not-call lists up to date in Salesforce." },
  { q: "Are you hiring?", a: "We regularly hire call center agents, sales development reps, support executives, team leaders, QA analysts and Salesforce admins. See our Careers page for open roles." },
];

export const ENGAGEMENT_MODELS = [
  { num: "01", title: "Pilot Campaign", for: "For companies that want to test outsourced calling before committing.", includes: ["Small trained agent team", "Fixed pilot period with clear targets", "Salesforce call logging", "Pilot results review"] },
  { num: "02", title: "Dedicated Agent Team", for: "For companies that need an ongoing team working only on their campaign.", includes: ["Dedicated, trained agents", "Named project manager", "Weekly QA and reporting", "Team size that scales with demand"] },
  { num: "03", title: "Managed Campaign", for: "For companies that want us to own the campaign results end to end.", includes: ["Campaign planning and scripts", "Agents, team leaders and QA", "Live Salesforce dashboards", "Weekly client review calls"] },
  { num: "04", title: "Salesforce CRM Operations", for: "For teams whose Salesforce needs setup, clean-up or ongoing administration.", includes: ["Process and data review", "Configuration and automation", "Data cleansing and de-duplication", "Dashboards and user training"] },
  { num: "05", title: "Overflow & Seasonal Support", for: "For businesses with peaks — launches, sales seasons or intakes.", includes: ["Trained agents on standby", "Fast ramp-up for peaks", "Shared scripts and knowledge base", "Pay for the hours used"] },
];

export const ENGAGEMENT_STEPS = [
  { num: "01", name: "Brief", text: "Understand your offer, customers, targets and how you measure success." },
  { num: "02", name: "Design", text: "Scripts, call flows, team size and Salesforce setup shaped for your campaign." },
  { num: "03", name: "Launch", text: "Train and certify agents, load data and go live with a pilot group first." },
  { num: "04", name: "Manage", text: "Daily targets, huddles, QA coaching and live Salesforce reporting." },
  { num: "05", name: "Optimize", text: "Test scripts, refresh lists and coach agents so results improve every week." },
];

export const NEXT_STEPS = [
  { num: "01", title: "We review your requirements", text: "Your submission is read by a senior member of our operations team — not routed through a sales queue." },
  { num: "02", title: "We match the right campaign model", text: "We map your goals to the services and team model that fit — and tell you honestly if we're not the right partner." },
  { num: "03", title: "We schedule a call", text: "A focused conversation about your customers, call volumes, Salesforce setup and targets." },
  { num: "04", title: "We send a clear proposal", text: "You receive a practical proposal: team, scripts, launch plan, reporting and pricing." },
];

export const HEALTH_QUESTIONS = [
  { category: "Planning", q: "How clearly are your campaign goals and targets defined?", options: ["Not defined", "Rough idea only", "Defined but not tracked", "Defined, agreed and tracked daily"] },
  { category: "Planning", q: "Do your agents work from a current, approved script?", options: ["No script", "Script exists but outdated", "Current but loosely followed", "Current, approved and version-controlled"] },
  { category: "Team", q: "How are new agents trained before taking live calls?", options: ["Learn on the job", "Short informal briefing", "Structured training", "Training plus mock-call certification"] },
  { category: "Team", q: "How often do agents receive coaching on their calls?", options: ["Never", "Only when there's a complaint", "Monthly", "Weekly or daily"] },
  { category: "CRM", q: "Where are leads, calls and outcomes recorded?", options: ["Spreadsheets or paper", "Partly in a CRM", "In a CRM but inconsistently", "Every call logged in Salesforce or a CRM"] },
  { category: "CRM", q: "How clean is your customer and lead data?", options: ["Lots of duplicates and gaps", "Cleaned occasionally", "Mostly clean", "Clean, de-duplicated and maintained"] },
  { category: "Quality", q: "How many calls are reviewed for quality?", options: ["None", "Random, when time allows", "A few each month", "A planned sample every week with scorecards"] },
  { category: "Quality", q: "How quickly do complaints and hot leads reach the right person?", options: ["They often get lost", "Within days", "Same day", "Within minutes, via a clear escalation path"] },
  { category: "Reporting", q: "How do managers see campaign results?", options: ["They don't, until month-end", "Manual weekly spreadsheets", "Regular reports with debated numbers", "Live dashboards everyone trusts"] },
  { category: "Reporting", q: "Can you tell which campaigns and lists produce sales?", options: ["No idea", "Rough guess", "For some campaigns", "Yes, tracked end to end in the CRM"] },
];

export const RESOURCES = [
  { title: "Campaign Launch Checklist", type: "Checklist", desc: "Everything to set up before the first call: team, scripts, data, Salesforce and reporting." },
  { title: "Call Center Health Checklist", type: "Checklist", desc: "Ten questions that reveal how well your calling operation is really running." },
  { title: "Call Script Template", type: "Template", desc: "A proven structure for openings, discovery questions, objection handling and closing." },
  { title: "QA Scorecard Template", type: "Template", desc: "A ready-to-use call quality scorecard with weighting and coaching notes." },
  { title: "Salesforce Call Center Setup Guide", type: "Guide", desc: "The objects, fields, stages and dashboards a calling campaign needs in Salesforce." },
  { title: "Agent Onboarding Checklist", type: "Checklist", desc: "The first two weeks for a new agent — training, certification and first live calls." },
];

export const TRUST_PLACEHOLDERS = ["[CLIENT LOGO]", "[CLIENT LOGO]", "[CLIENT LOGO]", "[CLIENT LOGO]", "[CERTIFICATION]", "[PARTNER LOGO]", "[INDUSTRY MEMBERSHIP]", "[AWARD]"];

export const DASHBOARD_MILESTONES = [
  { label: "Scripts Approved", status: "complete" as const, date: "Completed" },
  { label: "Agents Certified", status: "complete" as const, date: "Completed" },
  { label: "Pilot Go-Live", status: "current" as const, date: "This week" },
  { label: "Full Ramp-Up", status: "upcoming" as const, date: "In 2 weeks" },
  { label: "Month-1 Review", status: "upcoming" as const, date: "In 4 weeks" },
];

export const OFFICE = {
  name: "Stream Biz — Dubai Office",
  lines: ["Office # 2, Mezzanine Floor", "Silver Building, Hor Al Anz East", "Dubai, U.A.E"],
  full: "Office # 2, Mezzanine Floor, Silver Building, Hor Al Anz East, Dubai, U.A.E",
  mapQuery: "Silver Building, Hor Al Anz East, Dubai, United Arab Emirates",
};
export const officeMapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE.mapQuery)}&z=16&output=embed`;
export const officeDirections = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE.mapQuery)}`;
