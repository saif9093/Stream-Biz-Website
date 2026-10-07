export interface Service {
  slug: string;
  num: string;
  title: string;
  short: string;
  icon: string;
  heroTitle: string;
  heroSub: string;
  challenge: string;
  challengePoints: string[];
  approach: string;
  manage: string[];
  deliverables: string[];
  packageLabel: string;
  outputs: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "campaign-management",
    num: "01",
    title: "Call Center Project Management",
    short: "Every client project run as a managed campaign — from launch to reporting.",
    icon: "compass",
    heroTitle: "Your call center project, planned, staffed and run end to end",
    heroSub: "A dedicated project manager owns your campaign: scripts, team, Salesforce setup, daily targets and the reporting that proves results.",
    challenge:
      "Most outsourced call center work fails quietly. Campaigns launch without clear targets, agents work from outdated scripts, and the client only learns what happened when the monthly report arrives — too late to fix anything.",
    challengePoints: [
      "No single owner for the campaign's results",
      "Targets and scripts that drift after launch",
      "Call data scattered across dialers and spreadsheets",
      "Reporting that arrives weeks after the calls",
    ],
    approach:
      "Every Stream Biz project gets a named project manager who plans the campaign, builds the team, configures Salesforce for the work and runs a daily rhythm of targets, coaching and reporting — so you always know where the project stands.",
    manage: [
      "Campaign brief, goals and success measures",
      "Agent recruitment, training and scheduling",
      "Scripts, call flows and objection handling",
      "Salesforce setup for leads, cases and activities",
      "Daily targets, huddles and performance coaching",
      "Client reporting and weekly review calls",
    ],
    deliverables: [
      "Campaign plan and launch checklist",
      "Trained, dedicated agent team",
      "Approved scripts and call flows",
      "Configured Salesforce workspace",
      "Live campaign dashboard",
      "Weekly performance report",
    ],
    packageLabel: "CAMPAIGN LAUNCH PACKAGE",
    outputs: ["Campaign Plan", "Agent Team", "Call Scripts", "Salesforce Setup", "Live Dashboard", "Daily Targets", "QA Scorecards", "Weekly Reports"],
    benefits: [
      "One accountable owner for your project",
      "Faster launch with a proven checklist",
      "Live visibility of every call and outcome",
      "Problems caught and fixed within days",
    ],
    faqs: [
      { q: "How quickly can a new project go live?", a: "It depends on team size, training needs and how much Salesforce setup is required. We agree a launch plan with dates during scoping, before any work begins." },
      { q: "Do we get a dedicated project manager?", a: "Yes. Every project has a named project manager who is your single point of contact for targets, changes and reporting." },
      { q: "Can we change the script or targets mid-campaign?", a: "Yes. Changes go through a simple change process so the team is retrained and Salesforce is updated before the new version goes live." },
    ],
  },
  {
    slug: "outbound-sales",
    num: "02",
    title: "Outbound Sales Campaigns",
    short: "Trained agents calling your prospects and closing or qualifying sales.",
    icon: "outbound",
    heroTitle: "Outbound calling that turns lists into revenue",
    heroSub: "Dedicated sales agents work your prospect lists from Salesforce, follow a tested script and log every conversation and outcome.",
    challenge:
      "Outbound sales is hard to run in-house: hiring and training callers takes months, lists go stale, and without disciplined follow-up most interested prospects are never called back.",
    challengePoints: [
      "Hiring and training callers takes too long",
      "Lists worked once, then forgotten",
      "Follow-ups missed because nobody owns them",
      "No clear view of calls, contacts and conversions",
    ],
    approach:
      "We build a dedicated outbound team for your offer, load and segment your lists in Salesforce, and run structured call cadences with automated follow-up tasks — so every prospect is worked properly and every result is recorded.",
    manage: [
      "List preparation, cleansing and segmentation",
      "Sales scripts and objection handling",
      "Call cadences and callback scheduling",
      "Salesforce lead and opportunity tracking",
      "Daily call, contact and conversion targets",
      "Compliance with calling rules and consent",
    ],
    deliverables: [
      "Segmented call lists in Salesforce",
      "Tested sales script library",
      "Cadence and callback rules",
      "Daily activity and outcome reports",
      "Opportunity pipeline view",
      "Campaign learnings summary",
    ],
    packageLabel: "OUTBOUND SALES PACKAGE",
    outputs: ["Clean Lists", "Sales Scripts", "Call Cadences", "Callbacks", "Opportunities", "Daily Reports", "Call Recordings", "Pipeline View"],
    benefits: [
      "A sales team running without hiring one",
      "Every prospect worked to a set cadence",
      "Every call and outcome logged in Salesforce",
      "Clear view of what converts and why",
    ],
    faqs: [
      { q: "Do you provide the calling lists?", a: "Usually you provide the lists or CRM data. We clean, de-duplicate and segment them in Salesforce before calling begins." },
      { q: "Can your agents close sales on the call?", a: "Yes, where your product and process allow it. For more complex sales we qualify the prospect and hand over a warm opportunity to your team." },
      { q: "How do you stay compliant?", a: "We follow the calling rules for each market we dial, record consent where required, and keep do-not-call lists up to date in Salesforce." },
    ],
  },
  {
    slug: "lead-generation",
    num: "03",
    title: "B2B Lead Generation",
    short: "Finding, qualifying and nurturing decision-makers for your sales team.",
    icon: "target",
    heroTitle: "Qualified B2B leads, delivered into your pipeline",
    heroSub: "We research your ideal accounts, reach decision-makers by phone and email, and pass on only the leads that meet your criteria.",
    challenge:
      "Sales teams waste most of their time on prospecting instead of selling. Without a steady flow of qualified leads, pipelines dry up and good reps spend their days cold calling.",
    challengePoints: [
      "Sales reps stuck prospecting instead of selling",
      "Leads passed over without real qualification",
      "No agreed definition of a good lead",
      "Lead sources impossible to measure",
    ],
    approach:
      "We agree your ideal customer profile and qualification rules up front, then research accounts, reach decision-makers and qualify interest. Every lead is logged in Salesforce with full call notes before it reaches your team.",
    manage: [
      "Ideal customer profile and target accounts",
      "Contact research and data enrichment",
      "Multi-touch calling and email sequences",
      "Qualification against agreed criteria",
      "Lead handover with full notes in Salesforce",
      "Nurture lists for not-yet-ready prospects",
    ],
    deliverables: [
      "Agreed lead qualification criteria",
      "Target account and contact lists",
      "Outreach sequences and scripts",
      "Qualified leads in Salesforce",
      "Lead source and conversion reports",
      "Nurture pipeline",
    ],
    packageLabel: "LEAD GENERATION PACKAGE",
    outputs: ["Target Profile", "Account Lists", "Contact Data", "Outreach Sequences", "Qualified Leads", "Call Notes", "Nurture List", "Source Reports"],
    benefits: [
      "Sales time spent selling, not prospecting",
      "Leads that meet criteria you agreed",
      "Full history on every lead in Salesforce",
      "Clear measurement of what each campaign returns",
    ],
    faqs: [
      { q: "What counts as a qualified lead?", a: "You decide. We agree the criteria with you — such as company size, role, need and timeframe — and only hand over leads that meet them." },
      { q: "Do you work in our Salesforce or yours?", a: "Either. We can work directly in your Salesforce org or run the campaign in ours and sync leads across to you." },
      { q: "Which markets can you cover?", a: "We cover English and Arabic-speaking markets from our Dubai office. Other languages can be discussed during scoping." },
    ],
  },
  {
    slug: "appointment-setting",
    num: "04",
    title: "Appointment Setting",
    short: "Booking qualified meetings straight into your sales team's calendars.",
    icon: "appointment",
    heroTitle: "A calendar full of qualified sales meetings",
    heroSub: "Our agents reach and qualify prospects, then book meetings directly into your reps' calendars — confirmed, reminded and logged in Salesforce.",
    challenge:
      "Interested prospects go cold when nobody follows up quickly. Reps juggle scheduling, reminders and no-shows instead of running the meetings that actually close deals.",
    challengePoints: [
      "Interest lost before a meeting is booked",
      "High no-show rates on booked meetings",
      "Reps spending hours on scheduling",
      "No record of how meetings were sourced",
    ],
    approach:
      "We qualify each prospect against your criteria, book the meeting into the right rep's calendar, send confirmations and reminders, and record every booking in Salesforce so you can see exactly where your pipeline comes from.",
    manage: [
      "Meeting qualification criteria",
      "Calendar access and booking rules",
      "Booking scripts and confirmations",
      "Reminder calls and messages",
      "No-show follow-up and rebooking",
      "Meeting outcome tracking in Salesforce",
    ],
    deliverables: [
      "Booking rules and qualification guide",
      "Confirmed meetings in rep calendars",
      "Reminder and rebooking process",
      "Salesforce meeting records",
      "Show-rate and outcome reports",
      "Weekly pipeline review",
    ],
    packageLabel: "APPOINTMENT SETTING PACKAGE",
    outputs: ["Qualification Guide", "Booked Meetings", "Confirmations", "Reminders", "Rebookings", "Meeting Notes", "Show-Rate Report", "Pipeline Review"],
    benefits: [
      "Reps focus on meetings, not scheduling",
      "Fewer no-shows through reminders",
      "Every meeting traced back to its source",
      "Predictable flow of sales conversations",
    ],
    faqs: [
      { q: "Do you need access to our calendars?", a: "Yes, through a booking link or calendar integration, so agents can book directly into available slots." },
      { q: "What happens if a prospect doesn't show?", a: "We follow up, find out why and offer to rebook. Every no-show and rebooking is recorded in Salesforce." },
      { q: "Can you book for several reps or regions?", a: "Yes. Booking rules route each meeting to the right rep by territory, product or availability." },
    ],
  },
  {
    slug: "customer-support",
    num: "05",
    title: "Inbound Customer Support",
    short: "Answering your customers' calls, emails and chats with care.",
    icon: "headset",
    heroTitle: "Customer support your customers will actually notice",
    heroSub: "Trained agents answer calls, emails and chats as part of your brand, with every case tracked in Salesforce Service Cloud.",
    challenge:
      "Customers expect fast, consistent answers on every channel. When support is understaffed or poorly organized, queues grow, issues are repeated and good customers quietly leave.",
    challengePoints: [
      "Long waits and abandoned calls",
      "Customers repeating themselves to every agent",
      "Cases lost between channels",
      "No clear view of service levels",
    ],
    approach:
      "We build a support team trained on your products and policies, organize every case in Salesforce with clear routing and escalation, and manage staffing to the service levels we agree with you.",
    manage: [
      "Knowledge base and support scripts",
      "Call, email and chat handling",
      "Case routing, priorities and escalation",
      "Staffing to agreed service levels",
      "Customer satisfaction surveys",
      "Service reporting and trends",
    ],
    deliverables: [
      "Trained support team",
      "Support knowledge base",
      "Salesforce case setup and routing",
      "Escalation matrix",
      "Service level dashboard",
      "Monthly service review",
    ],
    packageLabel: "CUSTOMER SUPPORT PACKAGE",
    outputs: ["Support Team", "Knowledge Base", "Case Routing", "Escalations", "Service Levels", "CSAT Surveys", "Trend Reports", "Monthly Review"],
    benefits: [
      "Faster answers for your customers",
      "Full case history on every contact",
      "Service levels tracked, not guessed",
      "Recurring issues spotted and fed back",
    ],
    faqs: [
      { q: "Which channels can you cover?", a: "Phone, email and chat. We agree channels and hours with you during scoping." },
      { q: "Can you work in our Service Cloud?", a: "Yes. We can work in your existing Salesforce Service Cloud setup or configure one for the project." },
      { q: "How do you learn our products?", a: "We build a knowledge base with your team, train agents before launch, and keep it updated as products and policies change." },
    ],
  },
  {
    slug: "customer-retention",
    num: "06",
    title: "Retention & Follow-Up Campaigns",
    short: "Renewals, win-backs, surveys and follow-up calls that keep customers.",
    icon: "repeat",
    heroTitle: "Keep the customers you've already won",
    heroSub: "Renewal reminders, win-back calls, satisfaction surveys and follow-ups — run as structured campaigns and tracked in Salesforce.",
    challenge:
      "Winning a customer costs far more than keeping one, yet renewals, follow-ups and feedback calls are the first tasks to slip when teams are busy.",
    challengePoints: [
      "Renewals noticed only after they lapse",
      "Lost customers never asked why they left",
      "Feedback collected but never acted on",
      "Upsell chances missed on existing accounts",
    ],
    approach:
      "We set up retention campaigns triggered by Salesforce data — upcoming renewals, inactive accounts, recent purchases — and call customers at the right moment, recording feedback and outcomes for your team.",
    manage: [
      "Renewal and expiry call campaigns",
      "Win-back calls to lapsed customers",
      "Customer satisfaction and NPS surveys",
      "Post-purchase and onboarding follow-ups",
      "Upsell and cross-sell conversations",
      "Feedback reports for your team",
    ],
    deliverables: [
      "Retention campaign calendar",
      "Salesforce triggers and call lists",
      "Retention and win-back scripts",
      "Survey results and verbatims",
      "Renewal and win-back reports",
      "Customer feedback summary",
    ],
    packageLabel: "RETENTION PACKAGE",
    outputs: ["Renewal Calls", "Win-Back Calls", "Surveys", "Follow-Ups", "Upsell Leads", "Feedback Notes", "Retention Report", "Campaign Calendar"],
    benefits: [
      "Fewer renewals lost through silence",
      "Real reasons customers leave — and stay",
      "Feedback your team can act on",
      "New revenue from existing accounts",
    ],
    faqs: [
      { q: "Can calls be triggered automatically?", a: "Yes. We use Salesforce data such as renewal dates or inactivity to build call lists automatically." },
      { q: "Do you run customer surveys?", a: "Yes. We run phone surveys, record answers in Salesforce and summarize the findings for your team." },
      { q: "Can this run alongside a sales campaign?", a: "Yes. Many clients run retention and outbound sales together, managed by the same project manager." },
    ],
  },
  {
    slug: "salesforce-crm",
    num: "07",
    title: "Salesforce CRM Operations",
    short: "Setup, data hygiene, automation and dashboards that make Salesforce work for your calls.",
    icon: "cloud",
    heroTitle: "Salesforce set up for how your call center really works",
    heroSub: "We configure, clean and run Salesforce so every lead, call, case and outcome sits in one place — with dashboards your managers trust.",
    challenge:
      "Salesforce is powerful, but many teams use a fraction of it. Duplicate records, missing call notes and manual reports mean nobody trusts the numbers.",
    challengePoints: [
      "Duplicate and incomplete records",
      "Calls and outcomes not logged consistently",
      "Reports built by hand every week",
      "Workflows that don't match how agents work",
    ],
    approach:
      "We design Salesforce around your call center process — lead and case flows, call logging, automation and dashboards — then keep the data clean and the reports running for the life of the project.",
    manage: [
      "Lead, contact and case configuration",
      "Call logging and activity tracking",
      "Routing rules and automation",
      "Data import, cleansing and de-duplication",
      "Dashboards and scheduled reports",
      "User training for agents and managers",
    ],
    deliverables: [
      "Salesforce process design",
      "Configured objects, fields and layouts",
      "Automation and routing rules",
      "Clean, de-duplicated data",
      "Manager and client dashboards",
      "Agent user guides",
    ],
    packageLabel: "SALESFORCE OPERATIONS PACKAGE",
    outputs: ["Process Design", "Configured Org", "Automation", "Clean Data", "Call Logging", "Dashboards", "Scheduled Reports", "User Guides"],
    benefits: [
      "One trusted source for every customer",
      "Reports that build themselves",
      "Less admin for agents, more calls",
      "Data that stays clean over time",
    ],
    faqs: [
      { q: "Do we need our own Salesforce licence?", a: "Not necessarily. We can work inside your org with your licences or run the project in ours and share the data with you." },
      { q: "Can you fix an existing messy Salesforce org?", a: "Yes. We start with a data and setup review, then clean, simplify and re-configure in stages without stopping live work." },
      { q: "Can you connect our dialer to Salesforce?", a: "In most cases, yes. We review your phone system and set up call logging so activity flows into Salesforce automatically." },
    ],
  },
  {
    slug: "quality-assurance",
    num: "08",
    title: "Quality Assurance & Reporting",
    short: "Call monitoring, scorecards, coaching and client-ready reporting.",
    icon: "shield",
    heroTitle: "Every call measured, every agent improving",
    heroSub: "A dedicated QA team listens to calls, scores them against your standards, coaches agents and reports quality alongside results.",
    challenge:
      "Volume without quality damages your brand. Without structured monitoring, poor calls go unnoticed, agents never improve and clients have no way to see how they're being represented.",
    challengePoints: [
      "No one listening to calls consistently",
      "Feedback to agents that is vague or late",
      "Quality standards that differ by supervisor",
      "Clients unable to see call quality",
    ],
    approach:
      "We agree a quality scorecard with you, review a sample of calls every week, coach agents on what we find and share quality scores with you in the same dashboard as campaign results.",
    manage: [
      "Quality scorecards built with you",
      "Weekly call sampling and scoring",
      "One-to-one agent coaching",
      "Compliance and script adherence checks",
      "Calibration sessions with your team",
      "Quality and performance reporting",
    ],
    deliverables: [
      "Agreed QA scorecard",
      "Scored call reviews",
      "Agent coaching plans",
      "Compliance check log",
      "Quality dashboard",
      "Monthly quality review",
    ],
    packageLabel: "QUALITY PACKAGE",
    outputs: ["QA Scorecard", "Call Reviews", "Coaching Plans", "Compliance Log", "Calibration", "Quality Dashboard", "Agent Trends", "Monthly Review"],
    benefits: [
      "Consistent quality on every campaign",
      "Agents who improve week after week",
      "Compliance risks caught early",
      "Full transparency on how you're represented",
    ],
    faqs: [
      { q: "Can we listen to the calls?", a: "Yes. Call recordings and quality scores are available to you, and we run regular calibration sessions together." },
      { q: "How many calls do you review?", a: "We agree a sampling plan with you based on campaign size and risk, then report against it every week." },
      { q: "What happens when an agent scores poorly?", a: "They receive specific coaching within days, followed by re-scoring. Persistent issues are escalated to the project manager." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Banner photo for a service's detail page (generated per service, see public/media/svc-*.jpg). */
export function serviceImage(slug: string): string {
  return `/media/svc-${slug}.jpg`;
}
