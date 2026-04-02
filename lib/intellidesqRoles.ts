export interface IntelliDesqRole {
  slug: string;
  color: string;
  title: string;
  tagline: string;
  desc: string;
  overview: string;
  stats: { label: string; value: string }[];
  features: { title: string; desc: string }[];
  useCases: string[];
  industries: string[];
  deliverables: string[];
}

export const intellidesqRoles: IntelliDesqRole[] = [
  {
    slug: "ai-automation",
    color: "#7c3aed",
    title: "AI & Automation",
    tagline: "Intelligent workflows, zero manual overhead",
    desc: "Intelligent workflows, zero manual overhead",
    overview:
      "We design and deploy end-to-end AI automation systems that eliminate repetitive work and accelerate your operations. From LLM-powered pipelines to no-code workflow orchestration, every solution is built around your exact processes — not generic templates. Ship faster, scale leaner, and let your team focus on work that actually matters.",
    stats: [
      { label: "Manual Tasks Eliminated", value: "80%" },
      { label: "Avg. Time Saved / Week", value: "30hrs" },
      { label: "Deployment Time", value: "7 days" },
      { label: "Integrations Supported", value: "50+" },
    ],
    features: [
      { title: "LLM Pipeline Design", desc: "Custom GPT-4 / Claude workflows built around your data, tone, and business logic." },
      { title: "No-Code Orchestration", desc: "Make, n8n, and Zapier flows architected for reliability and scale." },
      { title: "Document Intelligence", desc: "Automated extraction, classification, and routing of invoices, contracts, and reports." },
      { title: "API & Webhook Integration", desc: "Connect any tool in your stack — CRMs, ERPs, databases, and SaaS platforms." },
      { title: "AI Agent Development", desc: "Autonomous agents that research, draft, and act on your behalf 24/7." },
      { title: "Monitoring & Alerting", desc: "Real-time dashboards tracking every automation run, failure, and cost metric." },
    ],
    useCases: [
      "Lead enrichment and CRM auto-population",
      "Invoice processing and AP automation",
      "AI-powered email triage and drafting",
      "Competitive intelligence gathering",
      "Automated content repurposing pipelines",
    ],
    industries: ["SaaS", "Finance", "Legal", "E-Commerce", "Consulting"],
    deliverables: [
      "Fully deployed automation workflows",
      "Technical documentation and SOPs",
      "Monitoring dashboard with alert rules",
      "30-day post-launch optimisation support",
    ],
  },
  {
    slug: "ui-ux-design",
    color: "#ec4899",
    title: "UI / UX Design",
    tagline: "Interfaces that convert and delight",
    desc: "Interfaces that convert and delight",
    overview:
      "Beautiful products that work. Our design team combines deep user research with pixel-perfect execution to deliver interfaces that reduce friction, increase conversion, and make your users feel understood. Every screen is validated, every flow is intentional — from wireframe to production-ready Figma.",
    stats: [
      { label: "Avg. Conversion Lift", value: "+62%" },
      { label: "Design System Components", value: "200+" },
      { label: "User Testing Rounds", value: "3" },
      { label: "Figma Handoff Time", value: "48hrs" },
    ],
    features: [
      { title: "User Research & Personas", desc: "Interviews, surveys, and heatmap analysis to understand your users before touching a pixel." },
      { title: "Information Architecture", desc: "Site maps, user flows, and navigation structures designed for intuitive journeys." },
      { title: "Wireframing & Prototyping", desc: "Low and high-fidelity prototypes for stakeholder sign-off and user testing." },
      { title: "Design System Creation", desc: "Scalable component libraries in Figma with tokens, variants, and documentation." },
      { title: "Accessibility Audit", desc: "WCAG 2.1 AA compliance checks built into every screen, not bolted on at the end." },
      { title: "Developer Handoff", desc: "Annotated Figma files, asset exports, and live collaboration with your engineering team." },
    ],
    useCases: [
      "SaaS product redesign",
      "Mobile app UI from scratch",
      "Onboarding flow optimisation",
      "Design system for scaling startups",
      "E-commerce checkout conversion uplift",
    ],
    industries: ["SaaS", "Fintech", "HealthTech", "E-Commerce", "Marketplace"],
    deliverables: [
      "Research report and user personas",
      "High-fidelity Figma prototype",
      "Design system and component library",
      "Annotated developer handoff file",
    ],
  },
  {
    slug: "web-development",
    color: "#2563eb",
    title: "Web Development",
    tagline: "Fast, scalable, and built to last",
    desc: "Fast, scalable, and built to last",
    overview:
      "Production-grade web applications engineered for performance and maintainability. We build with Next.js, React, and modern tooling — shipping code that your team can own, extend, and scale. No black boxes, no vendor lock-in, just clean architecture and obsessive attention to performance.",
    stats: [
      { label: "Avg. Lighthouse Score", value: "97" },
      { label: "Core Web Vitals Pass Rate", value: "100%" },
      { label: "Avg. Build Time", value: "3 wks" },
      { label: "Post-Launch Support", value: "30 days" },
    ],
    features: [
      { title: "Next.js & React Engineering", desc: "Server components, app router, and streaming SSR for maximum performance." },
      { title: "CMS Integration", desc: "Contentful, Sanity, Prismic, or Payload — headless CMS architected for your editors." },
      { title: "API Development", desc: "RESTful and GraphQL APIs built with Node.js, Hono, or tRPC." },
      { title: "Database Architecture", desc: "PostgreSQL, Supabase, PlanetScale — schema design built for your query patterns." },
      { title: "Authentication & Auth", desc: "Clerk, NextAuth, or custom auth with RBAC, SSO, and MFA support." },
      { title: "CI/CD & Deployment", desc: "GitHub Actions pipelines, Vercel/Railway deployments, and IaC with Terraform." },
    ],
    useCases: [
      "SaaS product development",
      "Marketing site with CMS",
      "Internal tooling and dashboards",
      "API-first platform architecture",
      "Legacy system modernisation",
    ],
    industries: ["SaaS", "Startups", "Enterprise", "Agency", "E-Commerce"],
    deliverables: [
      "Production-deployed web application",
      "Full source code on your repository",
      "Technical documentation and README",
      "CI/CD pipeline and deployment guide",
    ],
  },
  {
    slug: "mobile-app-development",
    color: "#059669",
    title: "Mobile App Development",
    tagline: "iOS & Android, shipped on time",
    desc: "iOS & Android, shipped on time",
    overview:
      "Cross-platform and native mobile apps built with React Native and Swift/Kotlin. We handle the full mobile lifecycle — from architecture and design to App Store submission and post-launch iteration. Every app is optimised for performance, offline resilience, and store approval on the first submission.",
    stats: [
      { label: "App Store Approval Rate", value: "100%" },
      { label: "Avg. App Rating", value: "4.8★" },
      { label: "Crash-Free Session Rate", value: "99.6%" },
      { label: "Avg. Ship Time", value: "6 wks" },
    ],
    features: [
      { title: "React Native Development", desc: "Single codebase for iOS and Android with near-native performance and UX." },
      { title: "Native Swift / Kotlin", desc: "Platform-specific builds when performance, AR, or hardware APIs demand it." },
      { title: "Offline-First Architecture", desc: "Local-first data sync with conflict resolution for reliable offline use." },
      { title: "Push Notification System", desc: "FCM and APNS integration with segmentation, scheduling, and deep links." },
      { title: "In-App Purchases", desc: "Subscription, one-time, and consumable IAP with RevenueCat or native StoreKit." },
      { title: "App Store Optimisation", desc: "Screenshots, metadata, and keyword strategy for maximum organic discovery." },
    ],
    useCases: [
      "B2C consumer mobile app",
      "Field service technician tooling",
      "Mobile companion to web platform",
      "Healthcare patient-facing app",
      "Real estate property search app",
    ],
    industries: ["Consumer", "Healthcare", "Real Estate", "Field Services", "SaaS"],
    deliverables: [
      "Published iOS and Android apps",
      "Full source code and CI pipeline",
      "App Store listing assets",
      "Crash reporting and analytics setup",
    ],
  },
  {
    slug: "brand-identity",
    color: "#d97706",
    title: "Brand Identity",
    tagline: "Brands built to be remembered",
    desc: "Brands built to be remembered",
    overview:
      "Strategic brand identity that does the heavy lifting before you say a word. Logo, colour system, typography, tone of voice — all developed from a deep understanding of your market position, audience, and ambition. Every brand we build is a system, not just a logo — designed to scale across every touchpoint.",
    stats: [
      { label: "Brand Consistency Score", value: "98%" },
      { label: "Deliverables per Project", value: "40+" },
      { label: "Revision Rounds", value: "Unlimited" },
      { label: "Avg. Turnaround", value: "10 days" },
    ],
    features: [
      { title: "Logo & Mark Design", desc: "Primary, secondary, and icon marks designed for digital, print, and motion use." },
      { title: "Colour System", desc: "Primary, secondary, and semantic palettes with accessibility-verified combinations." },
      { title: "Typography Selection", desc: "Type pairing with hierarchy rules, size scales, and web-optimised font loading." },
      { title: "Brand Guidelines", desc: "Comprehensive PDF and Figma brand book covering every usage rule and misuse example." },
      { title: "Tone of Voice", desc: "Vocabulary, personality traits, and writing samples that define how your brand speaks." },
      { title: "Collateral Templates", desc: "Business cards, decks, email signatures, and social templates ready to use immediately." },
    ],
    useCases: [
      "Early-stage startup brand from scratch",
      "Rebrand ahead of Series A fundraise",
      "Sub-brand for product line extension",
      "White-label brand for reseller partner",
      "Personal brand for founder thought leadership",
    ],
    industries: ["Startups", "SaaS", "Professional Services", "Consumer", "Agency"],
    deliverables: [
      "Logo files in all formats (SVG, PNG, PDF)",
      "Brand guidelines document",
      "Tone of voice guide",
      "Editable collateral templates",
    ],
  },
  {
    slug: "product-strategy",
    color: "#0ea5e9",
    title: "Product Strategy",
    tagline: "Roadmaps that align teams and ship value",
    desc: "Roadmaps that align teams and ship value",
    overview:
      "Product strategy that bridges business goals and user needs. We run discovery, prioritise ruthlessly, and produce roadmaps your engineering team can actually execute. Whether you're pre-launch, scaling, or pivoting — we bring the frameworks and the experience to make the right bets.",
    stats: [
      { label: "Roadmap Accuracy", value: "91%" },
      { label: "Discovery Sprint Length", value: "2 wks" },
      { label: "Features Shipped on Time", value: "88%" },
      { label: "Stakeholder Alignment Score", value: "94%" },
    ],
    features: [
      { title: "Discovery & Problem Framing", desc: "Jobs-to-be-done interviews and competitive analysis to validate the right problems to solve." },
      { title: "Opportunity Scoring", desc: "ICE / RICE framework applied across your entire backlog — no more gut-feel prioritisation." },
      { title: "Roadmap Development", desc: "Quarterly roadmaps with clear themes, milestones, and success metrics." },
      { title: "OKR Alignment", desc: "Every roadmap item mapped to a business objective so effort is always justifiable." },
      { title: "Go-to-Market Planning", desc: "Launch checklists, rollout strategies, and feature flag coordination." },
      { title: "Stakeholder Reporting", desc: "Executive-ready product updates that keep leadership informed without noise." },
    ],
    useCases: [
      "Pre-launch MVP scoping",
      "Post-Series A feature roadmap",
      "Product-market fit iteration",
      "Platform migration planning",
      "Enterprise product team augmentation",
    ],
    industries: ["SaaS", "Marketplace", "Fintech", "HealthTech", "EdTech"],
    deliverables: [
      "Discovery research report",
      "Prioritised product roadmap",
      "OKR framework documentation",
      "Go-to-market launch checklist",
    ],
  },
  {
    slug: "seo-content",
    color: "#14b8a6",
    title: "SEO & Content",
    tagline: "Organic growth that compounds over time",
    desc: "Organic growth that compounds over time",
    overview:
      "Technical SEO and content strategy that builds durable organic growth. We audit, fix, and scale — combining engineering-level technical SEO with high-quality content that ranks and converts. Every article, every optimisation, every link is part of a compounding system designed around your target keywords and competitive landscape.",
    stats: [
      { label: "Avg. Organic Traffic Lift", value: "+178%" },
      { label: "Keywords in Top 10", value: "3× more" },
      { label: "Content Published / Mo", value: "20+" },
      { label: "Core Web Vitals Pass", value: "100%" },
    ],
    features: [
      { title: "Technical SEO Audit", desc: "Crawl errors, site speed, Core Web Vitals, structured data, and indexation — all fixed." },
      { title: "Keyword & Topical Research", desc: "Topical authority maps and keyword clusters built around your buyer journey." },
      { title: "Content Production", desc: "Expert-written, EEAT-optimised long-form content that earns rankings and backlinks." },
      { title: "Internal Linking Strategy", desc: "Silo architecture and link equity distribution to amplify every page on your site." },
      { title: "Link Acquisition", desc: "White-hat digital PR and outreach campaigns targeting DR 50+ referring domains." },
      { title: "Rank Tracking & Reporting", desc: "Weekly keyword rank reports with traffic value estimates and competitor gap analysis." },
    ],
    useCases: [
      "SaaS blog scaling to 100k+ monthly visits",
      "E-commerce category page optimisation",
      "Local business multi-location SEO",
      "B2B thought leadership content programme",
      "Technical documentation SEO",
    ],
    industries: ["SaaS", "E-Commerce", "Local Business", "B2B", "Media"],
    deliverables: [
      "Technical SEO audit and fix list",
      "Topical authority keyword map",
      "Monthly content calendar",
      "Rank tracking dashboard",
    ],
  },
  {
    slug: "data-analytics",
    color: "#8b5cf6",
    title: "Data & Analytics",
    tagline: "Turn your data into your unfair advantage",
    desc: "Turn your data into your unfair advantage",
    overview:
      "From messy spreadsheets to boardroom-ready dashboards. We instrument your product, unify your data sources, and build the analytics layer that turns raw events into strategic decisions. Our data engineers and analysts work as an embedded team — not consultants who disappear after the kickoff.",
    stats: [
      { label: "Dashboard Build Time", value: "3 days" },
      { label: "Data Accuracy", value: "99.8%" },
      { label: "Reports Automated", value: "100%" },
      { label: "Tools Supported", value: "30+" },
    ],
    features: [
      { title: "Product Analytics Instrumentation", desc: "Mixpanel, Amplitude, or PostHog event tracking designed around your key user actions." },
      { title: "Data Warehouse Setup", desc: "BigQuery, Snowflake, or Redshift — schema design and ETL pipelines built for scale." },
      { title: "Dashboard Design", desc: "Looker, Metabase, or Power BI dashboards tailored to each team's exact KPIs." },
      { title: "Automated Reporting", desc: "Scheduled reports delivered to Slack, email, or Notion — no manual exports." },
      { title: "Cohort & Funnel Analysis", desc: "Retention cohorts, conversion funnels, and LTV models built on your real data." },
      { title: "A/B Test Infrastructure", desc: "Experimentation frameworks with statistical significance tracking and automated analysis." },
    ],
    useCases: [
      "Product analytics from zero to one",
      "Marketing attribution modelling",
      "Revenue and churn cohort analysis",
      "Operational efficiency dashboards",
      "Investor metrics and board reporting",
    ],
    industries: ["SaaS", "E-Commerce", "Fintech", "Marketplace", "Media"],
    deliverables: [
      "Instrumentation plan and event dictionary",
      "Data warehouse and ETL pipeline",
      "Live KPI dashboard",
      "Automated weekly and monthly reports",
    ],
  },
  {
    slug: "growth-marketing",
    color: "#dc2626",
    title: "Growth Marketing",
    tagline: "Paid and organic engines, built to scale",
    desc: "Paid and organic engines, built to scale",
    overview:
      "Full-funnel growth marketing from first impression to closed revenue. We run paid acquisition, conversion rate optimisation, and retention campaigns as one integrated motion — not siloed tactics. Every pound and dollar spent is tracked to pipeline, not just impressions.",
    stats: [
      { label: "Avg. ROAS", value: "4.8×" },
      { label: "CAC Reduction", value: "–34%" },
      { label: "Landing Page CVR Lift", value: "+89%" },
      { label: "Channels Managed", value: "8" },
    ],
    features: [
      { title: "Paid Media Management", desc: "Google Ads, Meta, LinkedIn, and TikTok campaigns managed with relentless optimisation." },
      { title: "Conversion Rate Optimisation", desc: "Landing page testing, form optimisation, and checkout flow improvements." },
      { title: "Email Marketing", desc: "Klaviyo and HubSpot lifecycle sequences that nurture, convert, and retain." },
      { title: "Performance Creative", desc: "Ad creative concepts, copy, and iteration designed specifically to drive CAC down." },
      { title: "Attribution Modelling", desc: "First-touch, last-touch, and data-driven attribution so budget follows real ROI." },
      { title: "Growth Experimentation", desc: "Structured test-and-learn sprints across channels, messages, and audiences." },
    ],
    useCases: [
      "SaaS PLG top-of-funnel expansion",
      "D2C brand paid social scaling",
      "B2B demand generation campaigns",
      "App install and retention campaigns",
      "Event and webinar promotion",
    ],
    industries: ["SaaS", "D2C", "B2B", "Mobile App", "E-Commerce"],
    deliverables: [
      "Channel strategy and media plan",
      "Live performance dashboard",
      "Weekly optimisation report",
      "Monthly attribution and ROI summary",
    ],
  },
  {
    slug: "devops-infrastructure",
    color: "#475569",
    title: "DevOps & Infrastructure",
    tagline: "Ship faster with zero-downtime confidence",
    desc: "Ship faster with zero-downtime confidence",
    overview:
      "Cloud infrastructure and DevOps engineering that removes the bottlenecks between code and production. We design, build, and manage your cloud architecture so your engineering team can ship with confidence — and your operations team sleeps at night. AWS, GCP, Azure, and modern IaC tooling.",
    stats: [
      { label: "Deployment Frequency", value: "10×" },
      { label: "Incident Response SLA", value: "<15min" },
      { label: "Infrastructure Cost Reduction", value: "–38%" },
      { label: "Uptime SLA", value: "99.95%" },
    ],
    features: [
      { title: "Cloud Architecture Design", desc: "AWS / GCP / Azure environments built for high availability, security, and cost efficiency." },
      { title: "CI/CD Pipeline Engineering", desc: "GitHub Actions, CircleCI, and GitLab pipelines that ship to production in minutes." },
      { title: "Kubernetes & Container Orchestration", desc: "EKS, GKE, or self-managed K8s clusters with Helm charts and auto-scaling." },
      { title: "Infrastructure as Code", desc: "Terraform and Pulumi modules for repeatable, auditable, version-controlled infrastructure." },
      { title: "Observability Stack", desc: "Datadog, Grafana, and PagerDuty integrated for full-stack visibility and alerting." },
      { title: "Security & Compliance", desc: "IAM policies, secrets management, and SOC2 / ISO 27001 evidence automation." },
    ],
    useCases: [
      "Cloud migration from monolith to microservices",
      "CI/CD pipeline from scratch",
      "Kubernetes cluster setup and management",
      "SOC2 infrastructure compliance",
      "Multi-region disaster recovery design",
    ],
    industries: ["SaaS", "Fintech", "HealthTech", "Enterprise", "Marketplace"],
    deliverables: [
      "Cloud architecture diagram and IaC codebase",
      "CI/CD pipeline in your repository",
      "Monitoring and alerting setup",
      "Infrastructure runbook and documentation",
    ],
  },
  {
    slug: "crm-revops",
    color: "#f59e0b",
    title: "CRM & RevOps",
    tagline: "Revenue systems that actually work together",
    desc: "Revenue systems that actually work together",
    overview:
      "Revenue operations infrastructure that aligns your marketing, sales, and success teams around a single source of truth. CRM implementation, data hygiene, process automation, and reporting — all built to reduce friction in your pipeline and surface the insights that drive revenue growth.",
    stats: [
      { label: "Pipeline Visibility", value: "100%" },
      { label: "CRM Data Accuracy", value: "97%" },
      { label: "Sales Cycle Reduction", value: "–28%" },
      { label: "Reporting Setup Time", value: "5 days" },
    ],
    features: [
      { title: "CRM Implementation", desc: "HubSpot, Salesforce, or Pipedrive configured to mirror your exact sales process." },
      { title: "Data Hygiene & Enrichment", desc: "Deduplication, normalisation, and enrichment via Clay, Clearbit, or Apollo." },
      { title: "Sales Process Automation", desc: "Sequences, tasks, and deal stage automations that remove manual sales admin." },
      { title: "Lead Scoring Models", desc: "Behavioural and firmographic scoring that surfaces your hottest prospects first." },
      { title: "Revenue Reporting", desc: "Pipeline health, forecast accuracy, and cohort LTV dashboards built in your CRM." },
      { title: "Tech Stack Integration", desc: "CRM connected to your MAP, billing, product, and support tools without data loss." },
    ],
    useCases: [
      "HubSpot or Salesforce implementation from scratch",
      "CRM migration and data consolidation",
      "Sales team onboarding to new process",
      "Marketing and sales alignment project",
      "Revenue forecast and pipeline model build",
    ],
    industries: ["B2B SaaS", "Agency", "Professional Services", "Fintech", "Manufacturing"],
    deliverables: [
      "Configured CRM with documented processes",
      "Lead scoring model",
      "Revenue reporting dashboard",
      "Integration architecture diagram",
    ],
  },
  {
    slug: "custom-solutions",
    color: "#6366f1",
    title: "Custom Solutions",
    tagline: "Built entirely around your problem",
    desc: "Built entirely around your problem",
    overview:
      "When your challenge doesn't fit a standard service, we build from first principles. Discovery, architecture, design, engineering, and deployment — assembled specifically for your workflow, your team, and your goals. Bring us your hardest problems and the strangest requirements. That's where we do our best work.",
    stats: [
      { label: "Avg. Discovery Sprint", value: "1 wk" },
      { label: "Custom Projects Delivered", value: "150+" },
      { label: "Client Retention Rate", value: "96%" },
      { label: "Industries Served", value: "25+" },
    ],
    features: [
      { title: "Deep Discovery Process", desc: "Stakeholder interviews, process mapping, and technical audit before a line is designed or written." },
      { title: "Solution Architecture", desc: "Technology selection and system design documentation presented before build begins." },
      { title: "Dedicated Project Team", desc: "A consistent team of designers, engineers, and a PM embedded in your project from day one." },
      { title: "Agile Delivery", desc: "Two-week sprints with demo calls, retrospectives, and visible progress every step of the way." },
      { title: "QA & Testing", desc: "Unit, integration, and E2E test suites written alongside production code — never as an afterthought." },
      { title: "Ongoing Partnership", desc: "Post-launch retainer options to iterate, optimise, and scale your solution over time." },
    ],
    useCases: [
      "Internal ops tooling for unique workflows",
      "AI-powered proprietary platform build",
      "Multi-system integration architecture",
      "Legacy software replacement project",
      "R&D prototype to production pipeline",
    ],
    industries: ["Any industry", "Enterprise", "Startups", "Government", "NGO"],
    deliverables: [
      "Discovery and solution architecture doc",
      "Fully deployed custom solution",
      "Complete source code ownership",
      "Documentation, runbooks, and training",
    ],
  },
];

export function getIntelliDesqRoleBySlug(slug: string): IntelliDesqRole | undefined {
  return intellidesqRoles.find((r) => r.slug === slug);
}
