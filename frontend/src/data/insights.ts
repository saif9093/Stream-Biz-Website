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
    slug: "project-controls-executive-table",
    category: "Project Controls",
    title: "Why project controls belong at the executive table",
    excerpt: "Controls are too often treated as back-office administration. In reality they are the executive's earliest warning system — if they are designed to answer the right questions.",
    date: "18 Jun 2026",
    readTime: "6 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Controls are a leadership tool, not an admin function",
        p: [
          "Ask a project team what controls are for and you will usually hear about reporting. Ask a sponsor what they need and you will hear something different: confidence. Confidence that the date is real, that the money is understood, and that problems will surface while there is still time to act.",
          "The gap between those two answers is where most project controls fail. They are built to record the project rather than to steer it.",
        ],
      },
      {
        h: "The questions that matter",
        p: [
          "Good controls answer four questions at any moment: Where are we against the baseline? Where will we finish? What could stop us? And what decisions do we need from leadership this month?",
          "If your reporting pack cannot answer all four in the first two pages, the controls are measuring activity, not delivery.",
        ],
      },
      {
        h: "Designing controls that get used",
        p: [
          "Start with the decisions, not the data. Identify the forums where project decisions are actually made, then build the minimum measurement and reporting needed to make those decisions well.",
          "Everything beyond that minimum is cost without benefit — and it is usually the first thing the delivery team stops maintaining.",
        ],
      },
    ],
  },
  {
    slug: "five-schedules-every-project-needs",
    category: "Planning",
    title: "The five schedules every project actually needs",
    excerpt: "One Gantt chart cannot serve the board, the delivery team and the contractor at once. Mature projects maintain a small family of schedules — each built for a specific audience.",
    date: "02 Jun 2026",
    readTime: "7 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "One schedule, many audiences",
        p: [
          "The executive who needs three milestone dates and the engineer sequencing next month's work are looking at the same project — but they should never be looking at the same schedule. Forcing one document to serve both produces something useful to neither.",
        ],
      },
      {
        h: "The working set",
        p: [
          "Most well-run projects maintain five views of time: a one-page milestone summary for leadership; a logic-linked master schedule as the single source of truth; a rolling lookahead for the delivery team; interface schedules for third parties; and a change-controlled baseline that never moves without a decision.",
          "Each is derived from the master schedule, so there is never a debate about which version is right.",
        ],
      },
      {
        h: "Keeping the family consistent",
        p: [
          "The discipline that makes this work is derivation, not duplication. Every view is generated from the same underlying logic, updated on one cadence, by one accountable planner.",
        ],
      },
    ],
  },
  {
    slug: "pmo-or-project-office",
    category: "PMO",
    title: "PMO or project office? Choosing the right governance model",
    excerpt: "The letters PMO cover everything from a report-collation desk to a delivery powerhouse. The model matters less than the mandate.",
    date: "21 May 2026",
    readTime: "5 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Start with the mandate",
        p: [
          "Before choosing tools or templates, decide what the PMO is for. Supporting PMOs provide standards and consolidate reporting. Controlling PMOs enforce compliance and run assurance. Directing PMOs take over delivery of the projects themselves.",
          "Most organizations need a blend — but one mode must be primary, or the PMO becomes everything to everyone and useful to no one.",
        ],
      },
      {
        h: "Right-sizing the structure",
        p: [
          "A PMO should be the smallest structure that gives leadership reliable visibility and gives project teams genuine support. Every report it demands should have a named consumer; every standard should remove more friction than it adds.",
        ],
      },
      {
        h: "Earning the right to govern",
        p: [
          "PMOs fail when they are seen as overhead. The fastest route to credibility is service: solve real problems for project teams in the first ninety days, and governance stops feeling like inspection.",
        ],
      },
    ],
  },
  {
    slug: "risk-registers-people-use",
    category: "Risk Management",
    title: "Risk registers that people actually use",
    excerpt: "Most risk registers are written once at kickoff and reopened at the audit. Turning risk management into a working discipline takes three changes.",
    date: "07 May 2026",
    readTime: "6 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Why registers die",
        p: [
          "Risk registers fail for predictable reasons: they are too long to review, scored so cautiously that nothing stands out, and owned so vaguely that no one acts. A register with ninety risks and no owners is not risk management — it is risk decoration.",
        ],
      },
      {
        h: "Three fixes",
        p: [
          "First, cap the register. Twenty live risks, honestly scored, beat a hundred stale ones. Second, every risk gets a named owner with the authority to respond — not a department, a person. Third, review risks in the delivery meeting, not a separate ceremony nobody attends.",
        ],
      },
      {
        h: "Connecting risk to decisions",
        p: [
          "The test of a living risk process is whether it changes behaviour: contingency drawn down, dates moved early, scope traded before the risk lands. If risks never trigger decisions, the process is reporting, not managing.",
        ],
      },
    ],
  },
  {
    slug: "status-reporting-without-theatre",
    category: "Project Reporting",
    title: "Status reporting without the theatre",
    excerpt: "Weekly report writing consumes hours and changes nothing. Here's how to make reporting a by-product of delivery instead of a parallel industry.",
    date: "23 Apr 2026",
    readTime: "5 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "The cost of performative reporting",
        p: [
          "On many projects, the reporting cycle consumes a day a week of senior time — gathering updates, formatting decks, reconciling numbers that disagree with last week's version. That is time not spent delivering, and the output usually tells leadership less than a fifteen-minute honest conversation would.",
        ],
      },
      {
        h: "Report from the system, not the slide",
        p: [
          "The fix is structural: maintain one live source of project truth and generate reports from it. When the dashboard is the report, the weekly deck-writing ritual disappears and the numbers stop drifting between versions.",
        ],
      },
      {
        h: "Design for the reader",
        p: [
          "Executives need exceptions and decisions, not completeness. A great status report fits on one page: RAG against baseline, top risks with owners, decisions needed, and what changed since last time.",
        ],
      },
    ],
  },
  {
    slug: "project-kickoff-first-30-days",
    category: "Project Management",
    title: "What good looks like: the first 30 days of a project",
    excerpt: "Projects rarely recover from a weak start. The first month sets the trajectory — here is the sequence that gets it right.",
    date: "09 Apr 2026",
    readTime: "8 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Week one: clarity of purpose",
        p: [
          "Before any planning, write down what success means in measurable terms, who decides, and what is explicitly out of scope. If the sponsor cannot articulate the outcome in two sentences, the project is not ready to plan.",
        ],
      },
      {
        h: "Weeks two and three: structure",
        p: [
          "Stand up the skeleton: governance forums with real decision rights, a first-principles plan with named workstream owners, and the risk conversation while honesty is still cheap.",
        ],
      },
      {
        h: "Week four: rhythm",
        p: [
          "By day thirty the project should have its heartbeat: a weekly delivery rhythm, one source of truth for status, and a team that knows exactly what it is doing next. Momentum built now compounds; confusion tolerated now compounds faster.",
        ],
      },
    ],
  },
  {
    slug: "tools-follow-process",
    category: "Digital Transformation",
    title: "Digital project management: tools follow process",
    excerpt: "Buying a project platform before designing the process is how organizations end up with expensive, empty dashboards.",
    date: "26 Mar 2026",
    readTime: "6 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "The platform-first trap",
        p: [
          "The demo is compelling, the licence is signed, and six months later the platform holds three stale project plans while the real work runs in spreadsheets and chat. The tool was never the constraint — the process was.",
        ],
      },
      {
        h: "Design the workflow first",
        p: [
          "Map how information should move: who updates what, when, and who consumes it. Only then configure the tool to enforce that flow. A platform that mirrors a working process gets adopted; one that imposes an imaginary one gets ignored.",
        ],
      },
      {
        h: "Adoption is the deliverable",
        p: [
          "Measure success by usage, not installation. The project is finished when the weekly report is generated from the platform without anyone being chased.",
        ],
      },
    ],
  },
  {
    slug: "leading-through-delivery-pressure",
    category: "Leadership",
    title: "Leading through delivery pressure",
    excerpt: "Every serious project hits a period where everything is late and everyone is tired. How leaders behave in that window decides the outcome.",
    date: "12 Mar 2026",
    readTime: "5 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Pressure reveals the system",
        p: [
          "Under pressure, projects revert to their real culture. If bad news was punished in calm times, it will be hidden in hard times — precisely when leadership needs it most.",
        ],
      },
      {
        h: "What teams need from leaders mid-crisis",
        p: [
          "Three things: honesty about the position, decisiveness on the trade-offs, and protection from noise. The leader's job in a hard phase is to shrink the problem space, not to amplify the anxiety.",
        ],
      },
      {
        h: "Recovery is a plan, not a mood",
        p: [
          "Motivational speeches do not recover projects. A credible recovery plan does: re-baselined reality, a small number of decisive actions, and visible early wins that rebuild belief.",
        ],
      },
    ],
  },
  {
    slug: "reading-project-dashboard-sponsors",
    category: "Industry Insights",
    title: "Reading a project dashboard: a sponsor's field guide",
    excerpt: "Five questions that cut through any status report — and the dashboard patterns that should make every sponsor suspicious.",
    date: "25 Feb 2026",
    readTime: "7 min read",
    author: "Stream Biz Editorial Team",
    sections: [
      {
        h: "Green is not a status",
        p: [
          "A wall of green RAG indicators tells you about the reporting culture, not the project. Healthy dashboards show movement: amber that turns green because actions worked, and red that gets named early.",
        ],
      },
      {
        h: "The five questions",
        p: [
          "What changed since last month? What is the forecast finish, and how has it moved? What are the top three risks and who owns them? What decisions do you need from me? And what are you not telling me because it isn't measured?",
          "A project team that can answer all five crisply is a team in control of its delivery.",
        ],
      },
      {
        h: "Patterns that deserve a second look",
        p: [
          "Forecasts that always show recovery 'next quarter', milestones that slip one week at a time, and contingency that shrinks without corresponding risks closing — each is a signal to dig, not a number to accept.",
        ],
      },
    ],
  },
];

export const ARTICLE_CATEGORIES = [...new Set(ARTICLES.map((a) => a.category))];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
