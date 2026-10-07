export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  sections: { h: string; p: string[] }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "run-every-campaign-as-a-project",
    category: "Campaign Management",
    title: "Why every call center campaign should be run as a project",
    excerpt: "Most outsourced campaigns are run as a block of seats. The ones that perform are run as projects — with an owner, a plan, sign-offs and a weekly review.",
    date: "18 Jun 2026",
    readTime: "6 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Seats are not a strategy",
        p: [
          "Ask many call centers what a client is buying and the answer is agent hours. Ask the client and the answer is different: qualified leads, booked meetings, sales, happy customers. The gap between those two answers is where campaigns quietly fail.",
          "When a campaign is treated as a block of seats, nobody owns the result. Scripts drift, lists go stale and the client only learns what happened when the monthly invoice arrives.",
        ],
      },
      {
        h: "What changes when it's a project",
        p: [
          "A project has a named owner, an agreed goal and a plan to reach it. For a calling campaign that means a project manager who owns the targets, a launch checklist, approved scripts, a trained team and a Salesforce workspace built for the work.",
          "It also means sign-offs. Scripts and CRM setup are approved before launch, a pilot group goes live first, and changes go through a simple change process so agents and Salesforce are updated together.",
        ],
      },
      {
        h: "The weekly review is the heartbeat",
        p: [
          "The single most useful habit is a short weekly review with the client: calls, contacts, conversions, quality scores and what we'll change next week. It keeps everyone honest and turns data into decisions.",
        ],
      },
    ],
  },
  {
    slug: "salesforce-setup-for-calling-campaigns",
    category: "Salesforce",
    title: "The Salesforce setup every calling campaign needs",
    excerpt: "You don't need a complex org to run a great campaign. You need the right objects, a handful of clean fields, sensible stages and dashboards people actually open.",
    date: "02 Jun 2026",
    readTime: "7 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Start from the call, not the CRM",
        p: [
          "Before touching Salesforce, map what happens on a call: who is called, what can happen, what the agent records and where the record goes next. That call flow becomes your lead stages, dispositions and follow-up rules.",
          "Most messy orgs are messy because they were configured before anyone agreed how the work actually runs.",
        ],
      },
      {
        h: "The essentials",
        p: [
          "Leads or contacts with clean, de-duplicated data. A small set of call dispositions every agent uses the same way. Tasks for callbacks with due dates. Opportunities or cases for anything that moves forward. And activity logging that happens automatically wherever the dialer allows it.",
          "Add fields only when someone will report on them. Every unused field is another place for inconsistent data to hide.",
        ],
      },
      {
        h: "Dashboards that earn their place",
        p: [
          "One dashboard for agents (today's activity against target), one for team leaders (team performance and quality), and one for the client (results and trends). If a chart doesn't change a decision, remove it.",
        ],
      },
    ],
  },
  {
    slug: "qa-scorecards-that-improve-calls",
    category: "Quality Assurance",
    title: "QA scorecards that actually improve calls",
    excerpt: "Most quality scorecards measure whether the script was read. The useful ones measure whether the customer was helped — and turn every score into coaching.",
    date: "21 May 2026",
    readTime: "5 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Measure outcomes, not just compliance",
        p: [
          "A good scorecard has a few non-negotiables — required disclosures, consent, correct data capture — and then focuses on what makes calls work: clear openings, good questions, listening, handling objections and agreeing a next step.",
        ],
      },
      {
        h: "Sample with a plan",
        p: [
          "Agree a weekly sampling plan with the client: a fixed number of calls per agent, plus extra reviews for new agents and anyone whose results dip. Random listening when there's time is not a QA program.",
          "Run calibration sessions so team leaders, QA analysts and the client score the same call the same way.",
        ],
      },
      {
        h: "Every score becomes coaching",
        p: [
          "A score with no conversation changes nothing. Share specific moments from the recording, agree one thing to practise, and re-score within the week. Agents improve fastest when feedback is quick, specific and kind.",
        ],
      },
    ],
  },
  {
    slug: "speed-to-lead",
    category: "Lead Generation",
    title: "Speed to lead: why the first hour decides the sale",
    excerpt: "An enquiry called back in minutes is far more likely to convert than one called back tomorrow. Here's how to build a follow-up process that never lets leads go cold.",
    date: "07 May 2026",
    readTime: "6 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Interest fades fast",
        p: [
          "A prospect who fills in a form is thinking about you right now. A few hours later they are thinking about something else — or talking to a competitor. Real estate launches, education intakes and insurance quotes all show the same pattern.",
        ],
      },
      {
        h: "Build the route before the leads arrive",
        p: [
          "New leads should land in Salesforce automatically, be assigned to an available agent and trigger a call task straight away. Out-of-hours leads need a first-call rule for the next morning.",
          "Set a cadence for leads you can't reach: several attempts across different times of day, a message, and then a nurture list — all tracked so nothing is forgotten.",
        ],
      },
      {
        h: "Measure it",
        p: [
          "Track time-to-first-call and contact rate by lead source every week. They are the two numbers that most often explain why one campaign converts and another doesn't.",
        ],
      },
    ],
  },
  {
    slug: "customer-support-service-levels",
    category: "Customer Support",
    title: "Service levels your customers can feel",
    excerpt: "Answering quickly matters, but customers remember whether their problem was solved. Good support balances speed, first-contact resolution and a full case history.",
    date: "23 Apr 2026",
    readTime: "5 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Agree what good looks like",
        p: [
          "Set a small number of service levels with the client: how fast calls, emails and chats are answered, how many issues are solved on first contact, and customer satisfaction after the interaction.",
        ],
      },
      {
        h: "Staff to the pattern, not the average",
        p: [
          "Contact volumes rise and fall by hour, day and season. Staffing to the average guarantees long queues at peak times. Use history from Salesforce and the phone system to schedule agents where demand really is.",
        ],
      },
      {
        h: "No customer should repeat themselves",
        p: [
          "When every contact is logged against one case in Salesforce, any agent can pick up the conversation. That single change cuts handling time and frustration at the same time.",
        ],
      },
    ],
  },
  {
    slug: "first-30-days-as-an-agent",
    category: "Careers & Training",
    title: "Your first 30 days as a Stream Biz agent",
    excerpt: "What new agents can expect — from product training and mock calls to their first live shift, daily huddles and weekly coaching.",
    date: "09 Apr 2026",
    readTime: "6 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Week 1: learn the client and the tools",
        p: [
          "You'll learn the client's products, customers and common questions, practise the approved scripts and get hands-on Salesforce training: finding records, logging calls, booking callbacks and updating stages.",
        ],
      },
      {
        h: "Week 2: mock calls and certification",
        p: [
          "Trainers and team leaders play customers so you can practise real scenarios, including tough objections. When you pass certification, you're ready for live calls.",
        ],
      },
      {
        h: "Weeks 3–4: live calls with support",
        p: [
          "You start live calls alongside experienced colleagues. Each shift begins with a team huddle, your calls are reviewed against the QA scorecard, and you get one-to-one coaching every week.",
          "By the end of the month you'll know your targets, your dashboard and exactly what to work on next.",
        ],
      },
    ],
  },
];

export const ARTICLE_CATEGORIES = [...new Set(ARTICLES.map((a) => a.category))];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
