import { Globe, Ship, Package, Handshake, Factory, Users, Clock, Star } from "lucide-react";

export const heroFeatures = [
  {
    title: "Connected strategy & execution",
    tags: ["Portfolio management", "Standardized processes", "Agile platform infrastructure"],
    bg: "linear-gradient(135deg, #ede9fe, #c4b5fd)",
    textColor: "#4c1d95",
    tagBg: "rgba(255,255,255,0.65)",
    accentColor: "#7c3aed",
  },
  {
    title: "Operational efficiency",
    tags: ["AI-powered workflows", "Resource management", "Automations"],
    bg: "linear-gradient(135deg, #d1fae5, #6ee7b7)",
    textColor: "#065f46",
    tagBg: "rgba(255,255,255,0.65)",
    accentColor: "#10b981",
  },
  {
    title: "Real-time risk identification",
    tags: ["Dashboards", "Portfolio management", "Gantt View"],
    bg: "linear-gradient(135deg, #1e1b4b, #312e81)",
    textColor: "#ffffff",
    tagBg: "rgba(255,255,255,0.15)",
    accentColor: "#a78bfa",
  },
];

export const clients = ["Citizens", "Coca-Cola", "Nasdaq", "Lionsgate", "Carrefour", "BD", "Indosuez"];

export const featureSections = [
  {
    title: "Connected strategy & execution",
    subtitle: "Set cross-organizational goals and OKRs with clear ownership and execute them effectively across business units.",
    color: "#ede9fe",
    accentColor: "#7c3aed",
    sectionBg: "white",
    items: [
      { title: "Portfolio management", desc: "Connect projects and stakeholders across the organization" },
      { title: "Standardized processes", desc: "Align your organization's processes and data for reliable reporting" },
      { title: "Agile platform infrastructure", desc: "Quickly adapt plans and execution to market changes" },
    ],
    mockup: "okr",
  },
  {
    title: "Operational efficiency",
    subtitle: "Accelerate time-to-market by breaking down cross-team siloes, streamlining workflows, and uniting systems.",
    color: "#d1fae5",
    accentColor: "#059669",
    sectionBg: "#f5f3ff",
    items: [
      { title: "AI-powered workflows", desc: "Work smarter across every use case with built-in AI" },
      { title: "Resource management", desc: "Allocate resources based on skills and availability" },
      { title: "Automations", desc: "Automate workflows and reduce manual work" },
    ],
    mockup: "tickets",
  },
  {
    title: "Real-time risk identification",
    subtitle: "Consolidate high volumes of data across the organization to inform immediate action when execution is at risk.",
    color: "#fce7f3",
    accentColor: "#db2777",
    sectionBg: "white",
    items: [
      { title: "Dashboards", desc: "Easily visualize data for accurate decision-making" },
      { title: "Portfolio management", desc: "Identify and mitigate risks across your organization" },
      { title: "Gantt View", desc: "Visualize tasks, dependencies, and milestones across project timelines" },
    ],
    mockup: "dashboard",
  },
];

export const businessNeeds = [
  { title: "Projects & Tasks", bg: "linear-gradient(135deg, #7c3aed, #4f46e5)", product: "ajax work management" },
  { title: "Sales & CRM", bg: "linear-gradient(135deg, #10b981, #0ea5e9)", product: "ajax CRM" },
  { title: "IT & Support", bg: "linear-gradient(135deg, #f43f5e, #f59e0b)", product: "ajax service" },
  { title: "Product & Software", bg: "linear-gradient(135deg, #0ea5e9, #8b5cf6)", product: "ajax dev" },
];

export const tradeServices = [
  {
    icon: Globe,
    title: "Global Sourcing & Procurement",
    description: "We identify and secure high-quality products from verified international suppliers.",
    features: ["Supplier verification", "Quality inspection", "Price negotiation", "Contract management", "Risk assessment"],
    idealFor: "Retailers, wholesalers, manufacturers",
    color: "#ede9fe",
    accentColor: "#7c3aed",
  },
  {
    icon: Ship,
    title: "Import & Export Management",
    description: "Complete documentation and compliance handling for international trade.",
    features: ["Customs documentation", "HS code classification", "Regulatory compliance", "Shipping coordination", "Duty/tax optimization"],
    idealFor: "Import/export businesses, trading companies",
    color: "#d1fae5",
    accentColor: "#059669",
  },
  {
    icon: Package,
    title: "Supply Chain & Logistics Solutions",
    description: "End-to-end logistics management from supplier to final destination.",
    features: ["Freight forwarding (Air/Sea/Land)", "Warehousing", "Distribution", "Inventory tracking", "Route optimization"],
    idealFor: "Manufacturers, e-commerce, distributors",
    color: "#fce7f3",
    accentColor: "#be185d",
  },
  {
    icon: Handshake,
    title: "Trade Consulting & Market Entry",
    description: "Strategic advisory services for companies entering new markets.",
    features: ["Market research", "Import/export regulations guidance", "Trade feasibility analysis", "Local partnership connections"],
    idealFor: "Businesses expanding internationally",
    color: "#fef3c7",
    accentColor: "#d97706",
  },
  {
    icon: Factory,
    title: "Industrial & Commodity Trading",
    description: "Trading of raw materials and industrial goods across global markets.",
    features: ["Agricultural commodities", "Textiles", "Machinery", "Consumer goods", "Construction materials"],
    idealFor: "Traders, manufacturers, procurement teams",
    color: "#dbeafe",
    accentColor: "#1d4ed8",
  },
];

export const differenceItems = [
  { label: "Intuitive customization", title: "Flexible yet standardized" },
  { label: "Designed with everyone in mind", title: "People love to use it" },
  { label: "Smooth cross-org adoption", title: "Fast time to value" },
  { label: "Connect your entire organization", title: "Alignment at every level" },
];

export const securityItems = [
  {
    title: "World-class security solutions",
    color: "#ede9fe",
    accentColor: "#7c3aed",
    features: [
      { title: "Bring Your Own Key", desc: "Maintain total data governance by bringing your own encryption key." },
      { title: "Multiple SSO", desc: "Ensure secured access across your org by implementing multiple SSO vendors." },
    ],
  },
  {
    title: "Advanced admin control",
    color: "#d1fae5",
    accentColor: "#059669",
    features: [
      { title: "Audit log API", desc: "Log and monitor user actions to protect against unwanted access." },
      { title: "Advanced account permissions", desc: "Manage everything from who can view or access certain information." },
    ],
  },
];

export const expertServices = [
  {
    icon: Package,
    title: "Implementation packages",
    desc: "Experience top-priority implementation, optimization, and handover with 60–90 hour packages",
    color: "#ede9fe",
    accent: "#7c3aed",
  },
  {
    icon: Users,
    title: "Continued success plan",
    desc: "Receive strategic guidance from a dedicated customer success manager for smooth adoption",
    color: "#d1fae5",
    accent: "#059669",
  },
  {
    icon: Clock,
    title: "24/7 Premium support",
    desc: "Work with a designated technical support team that knows your workflows for super fast SLAs",
    color: "#fce7f3",
    accent: "#be185d",
  },
  {
    icon: Star,
    title: "Tailored services",
    desc: "Hire certified experts for bespoke technical code or no-code projects for your account",
    color: "#fef3c7",
    accent: "#d97706",
  },
];

export const testimonials = [
  {
    metric: "18%",
    metricLabel: "cost reduction",
    quote: "AJAX Global streamlined our international sourcing and reduced costs significantly. Their verified supplier network gave us confidence from day one.",
    name: "James Thornton",
    title: "VP of Procurement, NorthEdge Manufacturing",
    initials: "JT",
    gradFrom: "#7c3aed",
    gradTo: "#4f46e5",
    accentColor: "#7c3aed",
  },
  {
    metric: "3×",
    metricLabel: "faster customs clearance",
    quote: "The customs documentation and compliance support alone saved us weeks of delays. AJAX Global is our go-to partner for all cross-border trade.",
    name: "Priya Mehta",
    title: "Director of Operations, Meridian Retail Group",
    initials: "PM",
    gradFrom: "#0ea5e9",
    gradTo: "#10b981",
    accentColor: "#0ea5e9",
  },
  {
    metric: "3",
    metricLabel: "new markets entered",
    quote: "From initial consultation to final delivery, the team was professional and proactive. We expanded into three new markets with zero disruption.",
    name: "Carlos Reyes",
    title: "CEO, Reyes Agricultural Exports",
    initials: "CR",
    gradFrom: "#f59e0b",
    gradTo: "#ef4444",
    accentColor: "#f59e0b",
  },
];

export const awards = [
  "Highest User Adoption", "Best Results", "Users Most Likely To Recommend", "Leader",
  "Best Usability", "Easiest Admin", "Best Relationship", "Most Implementable",
];

export const faqs = [
  {
    question: "How long does international shipping take?",
    answer: "Transit times vary depending on origin, destination, and shipping method. Sea freight takes 15–45 days, air freight 3–7 days, and land freight 5–15 days. We provide real-time tracking and accurate ETAs for every shipment.",
  },
  {
    question: "Do you handle customs clearance?",
    answer: "Yes. We manage all customs documentation, HS code classification, duty and tax calculations, and regulatory compliance on your behalf, ensuring smooth clearance at every border.",
  },
  {
    question: "Can you source custom or branded products?",
    answer: "Absolutely. We work with manufacturers to source custom-specification or private-label products. Our team handles supplier vetting, sample review, quality inspections, and contract management.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve manufacturing, retail, agriculture, construction, automotive, energy, and FMCG. Our team has deep expertise across each sector.",
  },
  {
    question: "How do you ensure product quality?",
    answer: "We conduct rigorous supplier verification and on-site quality inspections before shipment. Our QA process includes factory audits, product testing, and compliance checks against your specifications.",
  },
];
