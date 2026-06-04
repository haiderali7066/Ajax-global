export interface HosRole {
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

export const hosRoles: HosRole[] = [
  {
    slug: "customer-support",
    color: "#7c3aed",
    title: "Customer Support",
    tagline: "Brand-trained agents, zero downtime",
    desc: "Brand-trained agents, zero downtime",
    overview:
      "Our customer support agents are fully trained on your brand voice, product catalogue, and escalation procedures. We deliver 24/7 omnichannel coverage across phone, email, live chat, and social — so your customers always feel heard, fast. Every agent is onboarded with your tone, your FAQs, and your escalation logic before their first interaction.",
    stats: [
      { label: "Avg. First Response", value: "<60s" },
      { label: "CSAT Score", value: "97%" },
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Languages", value: "10+" },
    ],
    features: [
      { title: "Brand Voice Training", desc: "Every agent studies your tone, FAQs, and product docs before their first interaction." },
      { title: "Omnichannel Coverage", desc: "Phone, email, live chat, WhatsApp, and social media — all unified under one roof." },
      { title: "Escalation Workflows", desc: "Tiered escalation paths ensure complex issues reach the right specialist instantly." },
      { title: "Real-Time Monitoring", desc: "Live dashboards let you track every ticket, response time, and satisfaction score." },
      { title: "CRM Integration", desc: "Seamless sync with HubSpot, Salesforce, Zendesk, and any custom CRM you run." },
      { title: "Quality Assurance", desc: "Weekly call audits and coaching sessions maintain elite performance standards." },
    ],
    useCases: [
      "SaaS product helpdesks",
      "E-commerce order support",
      "Healthcare patient enquiries",
      "Subscription billing disputes",
      "Onboarding & activation support",
    ],
    industries: ["SaaS", "E-Commerce", "Healthcare", "Finance", "Hospitality"],
    deliverables: [
      "Dedicated support team trained on your brand",
      "Weekly QA reports and CSAT scores",
      "CRM-integrated ticket management",
      "24/7 coverage with zero gaps",
    ],
  },
  {
    slug: "sales-lead-generation",
    color: "#2563eb",
    title: "Sales & Lead Generation",
    tagline: "Closers who treat every lead as sacred",
    desc: "Closers who treat every lead as sacred",
    overview:
      "From cold outreach to warm close, our sales agents combine proven scripts with genuine relationship-building. Every lead is treated as a real opportunity — no spray-and-pray, just intentional pipeline development built around your ICP, your product, and your close process.",
    stats: [
      { label: "Lead-to-Meeting Rate", value: "38%" },
      { label: "Sales Cycle Reduction", value: "40%" },
      { label: "Pipeline Coverage", value: "3×" },
      { label: "Outreach Channels", value: "5" },
    ],
    features: [
      { title: "Cold Outreach Campaigns", desc: "Multi-touch sequences across email, LinkedIn, and phone crafted for your ICP." },
      { title: "Lead Qualification", desc: "BANT and MEDDIC frameworks applied to every prospect before handoff." },
      { title: "Demo Scheduling", desc: "Automated booking flows that put qualified prospects directly into your AE's calendar." },
      { title: "CRM Pipeline Management", desc: "Every interaction logged, every stage updated — your pipeline always reflects reality." },
      { title: "Objection Handling", desc: "Scripts and live coaching so agents navigate objections with confidence." },
      { title: "Reporting & Attribution", desc: "Clear ROI tracking from first touch to closed-won across every channel." },
    ],
    useCases: [
      "B2B SaaS demo bookings",
      "Agency new business development",
      "Real estate buyer prospecting",
      "Insurance policy renewals",
      "Franchise lead qualification",
    ],
    industries: ["B2B SaaS", "Real Estate", "Insurance", "Agency", "Manufacturing"],
    deliverables: [
      "Dedicated SDR or BDR team",
      "Weekly pipeline and activity reports",
      "CRM updates on every interaction",
      "Qualified meetings booked directly to your calendar",
    ],
  },
  {
    slug: "virtual-admin-assistants",
    color: "#059669",
    title: "Virtual & Admin Assistants",
    tagline: "Executive support and admin excellence",
    desc: "Executive support and admin excellence",
    overview:
      "Our virtual assistants act as true extensions of your team. Calendar management, inbox triage, research, document prep — handled with the discretion and accuracy of an in-house EA, at a fraction of the cost. Onboarded within 48 hours and matched to your tools, timezone, and working style.",
    stats: [
      { label: "Hours Saved / Week", value: "20+" },
      { label: "Task Accuracy Rate", value: "99.2%" },
      { label: "Onboarding Time", value: "48hrs" },
      { label: "Cost vs In-House", value: "–65%" },
    ],
    features: [
      { title: "Calendar & Scheduling", desc: "Full ownership of your calendar — booking, rescheduling, reminders, and conflict resolution." },
      { title: "Inbox Management", desc: "Priority filtering, template replies, and zero-inbox methodology applied daily." },
      { title: "Research & Briefings", desc: "Competitor research, meeting prep docs, and market summaries delivered on demand." },
      { title: "Document Preparation", desc: "Proposals, decks, reports — formatted to your brand standards every time." },
      { title: "Travel Coordination", desc: "Flights, hotels, ground transport, and itineraries managed end-to-end." },
      { title: "Tool Proficiency", desc: "Notion, Asana, Monday, Google Workspace, Microsoft 365 — wherever you work." },
    ],
    useCases: [
      "Executive diary management",
      "Startup founder admin offload",
      "Investor report preparation",
      "Event and conference logistics",
      "Vendor & supplier communication",
    ],
    industries: ["Startups", "Professional Services", "Consulting", "Legal", "Finance"],
    deliverables: [
      "Dedicated VA matched to your tools & timezone",
      "Daily activity summaries",
      "Inbox zero reports",
      "Document and research turnaround within 24hrs",
    ],
  },
  {
    slug: "ecommerce-management",
    color: "#d97706",
    title: "E-Commerce Management",
    tagline: "Shopify, WooCommerce, Amazon — 24/7",
    desc: "Shopify, WooCommerce, Amazon — 24/7",
    overview:
      "End-to-end e-commerce operations managed for you. Product listings, inventory sync, order fulfilment coordination, returns, and customer queries — all handled so you can focus on growth, not firefighting. We operate across Shopify, WooCommerce, Amazon, eBay, Etsy, and any custom platform.",
    stats: [
      { label: "Order Error Rate", value: "<0.3%" },
      { label: "Return Resolution", value: "<24hrs" },
      { label: "Listing Accuracy", value: "99.8%" },
      { label: "Platforms Supported", value: "8+" },
    ],
    features: [
      { title: "Product Listing Management", desc: "SEO-optimised titles, descriptions, and images kept current across all platforms." },
      { title: "Inventory Sync", desc: "Real-time stock level management across Shopify, Amazon, eBay, and Etsy." },
      { title: "Order Fulfilment Coordination", desc: "3PL liaison, shipment tracking, and proactive delay communication to customers." },
      { title: "Returns & Refunds", desc: "Full returns workflow management — from customer request to credit processed." },
      { title: "Review Management", desc: "Prompt, professional responses to reviews that protect and build your reputation." },
      { title: "Promotions & Campaigns", desc: "Flash sale setup, discount code management, and seasonal campaign execution." },
    ],
    useCases: [
      "DTC brand operations",
      "Amazon FBA seller support",
      "Multi-channel retail management",
      "Subscription box coordination",
      "Dropshipping store management",
    ],
    industries: ["DTC / E-Commerce", "Retail", "FMCG", "Fashion", "Health & Beauty"],
    deliverables: [
      "Daily listing and inventory audits",
      "Order error rate tracking",
      "Returns dashboard",
      "Monthly platform performance reports",
    ],
  },
  {
    slug: "property-management",
    color: "#dc2626",
    title: "Property Management",
    tagline: "Tenant care, maintenance, rent coordination",
    desc: "Tenant care, maintenance, rent coordination",
    overview:
      "Our property management VAs handle the full tenant lifecycle — from enquiry to move-out. Maintenance ticket coordination, rent reminders, lease admin, and vendor management all handled with professionalism. We free up your time while ensuring every tenant interaction reflects your standards.",
    stats: [
      { label: "Maintenance Response", value: "<2hrs" },
      { label: "Rent Collection Rate", value: "98.5%" },
      { label: "Tenant Satisfaction", value: "96%" },
      { label: "Admin Hours Freed", value: "25/wk" },
    ],
    features: [
      { title: "Tenant Communications", desc: "All inbound enquiries, complaints, and requests handled promptly and professionally." },
      { title: "Maintenance Coordination", desc: "Ticket logging, vendor dispatch, and follow-up until every issue is resolved." },
      { title: "Rent Collection Support", desc: "Automated reminders, arrears escalation, and payment reconciliation." },
      { title: "Lease Administration", desc: "Renewal notices, documentation prep, and compliance tracking across your portfolio." },
      { title: "Property Inspections Scheduling", desc: "Routine and ad-hoc inspection booking coordinated with tenants and inspectors." },
      { title: "Vacancy Management", desc: "Listing creation, viewing scheduling, and applicant screening for vacant units." },
    ],
    useCases: [
      "Residential portfolio management",
      "Short-term rental (Airbnb/VRBO) ops",
      "Commercial property admin",
      "Student accommodation management",
      "HMO landlord support",
    ],
    industries: ["Residential", "Commercial", "Short-Term Rental", "Student Housing", "BTR"],
    deliverables: [
      "Tenant communication logs",
      "Maintenance tracker with resolution times",
      "Monthly rent collection reports",
      "Vacancy and occupancy dashboard",
    ],
  },
  {
    slug: "it-cybersecurity",
    color: "#475569",
    title: "IT & Cybersecurity",
    tagline: "Technical teams and MSP-level operations",
    desc: "Technical teams and MSP-level operations",
    overview:
      "Dedicated IT support and cybersecurity professionals embedded into your operation. From helpdesk L1/L2 to security monitoring and compliance reporting — enterprise-grade capability without the enterprise headcount. Our teams operate within your systems, your tools, and your SLAs.",
    stats: [
      { label: "Ticket Resolution SLA", value: "98%" },
      { label: "Avg. Resolution Time", value: "47min" },
      { label: "Security Incidents Caught", value: "99.1%" },
      { label: "Compliance Frameworks", value: "6+" },
    ],
    features: [
      { title: "L1 / L2 Helpdesk", desc: "Password resets to complex troubleshooting — fast, documented, and fully escalable." },
      { title: "Security Monitoring", desc: "24/7 SIEM alerts reviewed and triaged by trained cybersecurity analysts." },
      { title: "Patch Management", desc: "Scheduled patching cycles keeping your endpoints, servers, and software secure." },
      { title: "Compliance Reporting", desc: "SOC2, ISO 27001, HIPAA, and GDPR evidence collection and audit prep." },
      { title: "Vendor Management", desc: "ISP, SaaS, and hardware vendor liaison so your tech stack runs without friction." },
      { title: "Disaster Recovery Support", desc: "Documented DR playbooks and regular backup verification to protect your data." },
    ],
    useCases: [
      "MSP client helpdesk overflow",
      "SaaS company internal IT",
      "Healthcare HIPAA compliance ops",
      "Financial services security monitoring",
      "Remote team IT onboarding",
    ],
    industries: ["MSP", "SaaS", "Healthcare", "Finance", "Legal"],
    deliverables: [
      "Weekly ticket resolution reports",
      "Monthly security audit summaries",
      "Patch compliance logs",
      "Incident response documentation",
    ],
  },
  {
    slug: "seo-social-media",
    color: "#7c3aed",
    title: "SEO & Social Media",
    tagline: "Visibility, content, and digital presence",
    desc: "Visibility, content, and digital presence",
    overview:
      "A full digital presence team at your disposal. Technical SEO, content strategy, social scheduling, community management, and performance reporting — everything needed to dominate your channel and rank above the competition. We combine human creativity with data-driven precision.",
    stats: [
      { label: "Avg. Organic Traffic Lift", value: "+134%" },
      { label: "Content Published / Mo", value: "40+" },
      { label: "Engagement Rate", value: "5.8%" },
      { label: "Platforms Managed", value: "7" },
    ],
    features: [
      { title: "Technical SEO Audits", desc: "Site speed, Core Web Vitals, crawlability, and schema markup — fully optimised." },
      { title: "Content Strategy & Writing", desc: "Keyword-driven blog posts, landing pages, and pillar content built for rankings." },
      { title: "Social Media Scheduling", desc: "Platform-native content planned, designed, and published on your behalf." },
      { title: "Community Management", desc: "Comments, DMs, and mentions responded to — brand voice maintained at scale." },
      { title: "Link Building", desc: "White-hat outreach campaigns to earn authoritative backlinks in your niche." },
      { title: "Analytics & Reporting", desc: "Monthly performance reports with actionable insights on rankings, traffic, and ROI." },
    ],
    useCases: [
      "Local business SEO domination",
      "E-commerce product page optimisation",
      "B2B thought leadership content",
      "Personal brand growth on LinkedIn",
      "Multi-location franchise social management",
    ],
    industries: ["E-Commerce", "Local Business", "B2B SaaS", "Personal Brand", "Franchise"],
    deliverables: [
      "Monthly SEO performance report",
      "Content calendar delivered weekly",
      "Social engagement analytics",
      "Backlink acquisition log",
    ],
  },
  {
    slug: "custom-remote-teams",
    color: "#2563eb",
    title: "Custom Remote Teams",
    tagline: "Fully bespoke for your exact industry",
    desc: "Fully bespoke for your exact industry",
    overview:
      "When off-the-shelf doesn't fit, we build from scratch. Describe your workflow, your industry, your standards — and we assemble a dedicated remote team trained specifically around your operation. Every hire, every process, every KPI designed entirely around your requirements.",
    stats: [
      { label: "Avg. Team Build Time", value: "7 days" },
      { label: "Retention Rate", value: "94%" },
      { label: "Industries Served", value: "30+" },
      { label: "Custom Roles Built", value: "200+" },
    ],
    features: [
      { title: "Needs Assessment", desc: "Deep-dive discovery to map your workflows, tools, pain points, and growth goals." },
      { title: "Role Architecture", desc: "We design the exact org structure and role definitions your operation requires." },
      { title: "Talent Sourcing", desc: "Screened candidates matched on skill, culture fit, and timezone compatibility." },
      { title: "Custom Training Programs", desc: "Bespoke onboarding built around your SOPs, tools, and brand standards." },
      { title: "Dedicated Team Manager", desc: "A senior AJAX Global manager embedded with your team to maintain performance." },
      { title: "Scaling on Demand", desc: "Add or adjust team size as your business grows — no lengthy recruitment cycles." },
    ],
    useCases: [
      "Logistics & supply chain ops teams",
      "Healthcare back-office processing",
      "Legal document review teams",
      "Financial services data entry",
      "Recruitment research & sourcing",
    ],
    industries: ["Logistics", "Healthcare", "Legal", "Finance", "Recruitment"],
    deliverables: [
      "Custom role definitions and org chart",
      "Team onboarding documentation",
      "Weekly performance KPIs",
      "Dedicated team manager point-of-contact",
    ],
  },
  {
    slug: "client-retention",
    color: "#ec4899",
    title: "Client Retention",
    tagline: "Proactive relationship defence & loyalty",
    desc: "Proactive relationship defence & loyalty",
    overview:
      "Keeping clients is more valuable than winning new ones. Our retention specialists proactively monitor health scores, identify churn risk, and run loyalty initiatives that turn at-risk accounts into advocates. We protect your revenue while building relationships that last.",
    stats: [
      { label: "Churn Reduction", value: "–42%" },
      { label: "NPS Improvement", value: "+28pts" },
      { label: "Upsell Conversion", value: "22%" },
      { label: "At-Risk Accounts Saved", value: "89%" },
    ],
    features: [
      { title: "Health Score Monitoring", desc: "Usage patterns, support ticket trends, and NPS signals tracked to flag churn risk early." },
      { title: "Proactive Check-ins", desc: "Scheduled outreach to key accounts before they have a reason to leave." },
      { title: "Churn Intervention Playbooks", desc: "Scripted and personalised plays for every risk tier — from mild concern to critical." },
      { title: "Loyalty & Rewards Management", desc: "Programme administration that recognises and rewards your best clients." },
      { title: "Win-Back Campaigns", desc: "Structured re-engagement sequences for recently churned accounts." },
      { title: "Retention Reporting", desc: "Monthly cohort analysis, churn reason breakdowns, and LTV trend reporting." },
    ],
    useCases: [
      "SaaS subscription renewal management",
      "Agency account health monitoring",
      "Membership programme administration",
      "Enterprise account executive support",
      "Insurance policy renewal campaigns",
    ],
    industries: ["SaaS", "Agency", "Membership", "Insurance", "Finance"],
    deliverables: [
      "Monthly churn and health score report",
      "At-risk account intervention log",
      "NPS tracking dashboard",
      "Retention campaign performance summary",
    ],
  },
  {
    slug: "scheduling-dispatch",
    color: "#0ea5e9",
    title: "Scheduling & Dispatch",
    tagline: "60-second rule — every lead captured",
    desc: "60-second rule — every lead captured",
    overview:
      "Speed-to-lead is everything. Our scheduling and dispatch agents operate on the 60-second rule — every inbound lead contacted, every appointment booked, every job assigned before a competitor even picks up the phone. We run 24/7 so no opportunity ever goes cold.",
    stats: [
      { label: "Lead Response Time", value: "<60s" },
      { label: "Booking Conversion", value: "71%" },
      { label: "No-Show Reduction", value: "–38%" },
      { label: "Dispatch Accuracy", value: "99.4%" },
    ],
    features: [
      { title: "Inbound Lead Response", desc: "Every web form, call, and message answered within 60 seconds — guaranteed." },
      { title: "Appointment Booking", desc: "Calendar management and booking across your team with instant confirmations sent." },
      { title: "Reminder Sequences", desc: "Automated SMS and email reminders that slash no-show rates dramatically." },
      { title: "Field Crew Dispatch", desc: "Job assignment matched to technician availability, location, and skill set." },
      { title: "Route Optimisation Coordination", desc: "Dispatch sequencing designed to minimise travel time and maximise daily jobs." },
      { title: "After-Hours Coverage", desc: "24/7 answering so urgent jobs and after-hours leads never go to voicemail." },
    ],
    useCases: [
      "Home services (HVAC, plumbing, electrical)",
      "Medical appointment scheduling",
      "Trucking & freight dispatch",
      "Field sales territory management",
      "Property maintenance dispatching",
    ],
    industries: ["Home Services", "Healthcare", "Trucking", "Field Sales", "Property"],
    deliverables: [
      "Daily lead response time logs",
      "Booking conversion rate report",
      "No-show tracking dashboard",
      "Dispatch accuracy and route reports",
    ],
  },
  {
    slug: "multilingual-support",
    color: "#14b8a6",
    title: "Multilingual Support",
    tagline: "English, Spanish, French, Arabic coverage",
    desc: "English, Spanish, French, Arabic coverage",
    overview:
      "Break language barriers and expand your total addressable market. Our multilingual agents deliver native-level support across English, Spanish, French, and Arabic — with additional languages available on request. Every agent is a native or C2-level speaker, culturally trained, not just linguistically capable.",
    stats: [
      { label: "Languages Available", value: "10+" },
      { label: "Native Speakers", value: "100%" },
      { label: "Market Reach Increase", value: "+340%" },
      { label: "Translation Accuracy", value: "99.5%" },
    ],
    features: [
      { title: "Native-Level Agents", desc: "Every agent is a native or C2-level speaker — no machine translation, no awkward phrasing." },
      { title: "Cultural Competence", desc: "Agents trained in regional customs, sensitivities, and communication norms." },
      { title: "Document Translation", desc: "Contracts, FAQs, marketing materials, and product docs translated with precision." },
      { title: "Multilingual Live Chat", desc: "Real-time chat support in the customer's preferred language across all platforms." },
      { title: "Localisation Support", desc: "Website copy, emails, and campaigns adapted for regional markets — not just translated." },
      { title: "Cross-Language Escalation", desc: "Seamless handoffs between language teams with full context preserved." },
    ],
    useCases: [
      "Global SaaS customer success",
      "International e-commerce support",
      "Immigration & legal document services",
      "Healthcare patient communications",
      "Government & NGO multilingual helplines",
    ],
    industries: ["Global SaaS", "E-Commerce", "Legal", "Healthcare", "Government"],
    deliverables: [
      "Language-specific CSAT scores",
      "Translation accuracy audits",
      "Monthly multilingual engagement report",
      "Cultural alignment review notes",
    ],
  },
  {
    slug: "data-reporting",
    color: "#8b5cf6",
    title: "Data & Reporting",
    tagline: "KPI dashboards and performance analytics",
    desc: "KPI dashboards and performance analytics",
    overview:
      "Turn raw data into decisions. Our data and reporting specialists build and maintain KPI dashboards, automate reporting workflows, and surface the insights your leadership team needs to act — without drowning in spreadsheets. Every dashboard built to your exact metrics.",
    stats: [
      { label: "Reports Automated", value: "100%" },
      { label: "Data Accuracy", value: "99.7%" },
      { label: "Dashboard Build Time", value: "3 days" },
      { label: "Tools Supported", value: "20+" },
    ],
    features: [
      { title: "KPI Dashboard Design", desc: "Custom dashboards in Looker, Power BI, Tableau, or Google Data Studio built to your spec." },
      { title: "Automated Report Delivery", desc: "Scheduled reports land in the right inboxes at the right time — every time." },
      { title: "Data Cleaning & Normalisation", desc: "Messy spreadsheets and inconsistent data sources unified into reliable datasets." },
      { title: "CRM & Ad Platform Integration", desc: "Salesforce, HubSpot, Google Ads, Meta Ads — all feeding one source of truth." },
      { title: "Executive Summaries", desc: "Weekly and monthly narrative reports that translate numbers into strategic decisions." },
      { title: "Anomaly Detection", desc: "Proactive flagging of unusual patterns — spend spikes, churn signals, revenue dips." },
    ],
    useCases: [
      "Marketing performance reporting",
      "Sales pipeline analytics",
      "Operational efficiency tracking",
      "Financial consolidation reporting",
      "Product usage and adoption metrics",
    ],
    industries: ["SaaS", "Marketing", "E-Commerce", "Finance", "Operations"],
    deliverables: [
      "Live KPI dashboard",
      "Weekly automated reports",
      "Monthly executive summary",
      "Anomaly alert system",
    ],
  },
];

export function getHosRoleBySlug(slug: string): HosRole | undefined {
  return hosRoles.find((r) => r.slug === slug);
}