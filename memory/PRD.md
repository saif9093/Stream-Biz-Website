# Stream Biz — PRD

## Original Problem Statement
Build a premium, modern, conversion-focused, multi-page corporate website for **STREAM BIZ — Project Management Services**, a professional project management and project delivery services company. Architecture inspired (high-level only) by sophisticated B2B services sites: what we do, who we help, problems solved, process, proof, services, industries, case studies, resources, consultation. Strict brand system: navy #2C3B7B / orange #F47426 on 70–80% light space; Manrope headings + Inter body; no fabricated clients, metrics, certifications or contact details (placeholders until supplied). Original visual language: "Turning complex projects into controlled, visible, predictable delivery" with a signature "Delivery Control System" diagram and an interactive Project Health Check tool.

## Architecture
- **Frontend**: Vite + React 19 + TypeScript (strict), Tailwind v4, shadcn/ui, motion (framer-motion) for reveals/micro-interactions, lenis for smooth scrolling, recharts for dashboard chart, react-router-dom. All content data-driven from `src/data/*.ts`.
- **Backend**: FastAPI + motor/MongoDB. Endpoints: `POST/GET /api/leads` (consultation + start-a-project forms), `POST /api/health-check` + `GET /api/health-checks` (health check results with tier), all under `/api`.
- **Layout**: `src/components/Layout.tsx` (Header + Outlet + Footer + lenis + scroll restore + Toaster).

## User Personas
- **Executive / Sponsor**: needs confidence and visibility; lands on hero, dashboard demo, case studies, health check.
- **Delivery / Operations leader**: needs capacity and structure; lands on services, engagement models, methodology.
- **Procurement / PMO lead**: evaluates credibility; reads case studies, FAQs, insights, about/team.

## Core Requirements (static)
Multi-page site: Home (15 sections), Services landing + 8 detail pages, Industries landing + 8 detail pages, How We Work (6-phase interactive lifecycle + operating model), Case Studies + detail pages (placeholders), Project Health Check (scored tool + lead capture), About, Team, Insights hub + article pages + downloadable resources, Contact, Start a Project, FAQ, Engagement Models, Legal pages, mega footer, SEO metadata, responsive, accessible, subtle premium animation.

## Implemented (July 2026)
- Full 19-page site, all routes live, all content data-driven (`src/data/services.ts`, `industries.ts`, `caseStudies.ts`, `insights.ts`, `site.ts`).
- Homepage v2 (revamped): full-width cinematic hero slider — 4 auto-advancing editorial slides (Delivery / Controls / Planning / Governance) with photographic backdrops, masked line-by-line headline reveals, per-slide project-control visual widgets, progress-fill tabs, slide counter and prev/next arrows, pause-on-hover; plus an editorial parallax statement band with animated counters.
- Signature visuals: Delivery Control System diagram (7 inputs → engine → 6 outputs), interactive PROJECT ALPHA dashboard (RAG, progress vs plan chart, milestones, counters).
- Project Health Check: 10 questions, 5 category bars, /100 score, tier, tailored advice, lead capture to backend.
- Working lead capture: contact + start-a-project forms stored in MongoDB with success states.
- Sticky nav with Services/Industries dropdowns, mobile drawer, brand SVG logo mark + favicon, robots.txt + sitemap.xml, per-page titles/meta.
- Verified: yarn typecheck clean; API curls (lead POST, health-check POST w/ tier, 422 negative); browser pass through public URL (hero, quiz→results→submit, contact submit, methodology tabs).

## Backlog
- **P0**: Replace placeholders — client logos/certifications/awards, case study client names + outcomes ([CLIENT NAME]/[OUTCOME]), team names/bios/LinkedIn, footer contact details.
- **P1**: Email notification on new lead (Resend); downloadable resource files (actual PDFs) with email gating; admin view for leads.
- **P2**: Scheduling integration (Calendly/Cal.com); blog CMS; real OG images per page; JSON-LD schema markup; full sitemap of all service/industry/case-study URLs.

## Next Tasks
1. Collect real brand assets (logos, certifications, team photos) and swap placeholders.
2. Wire Resend email notifications for `/api/leads` and `/api/health-check`.
3. Produce the 6 downloadable resource PDFs.
