import {
  // Operational Icons
  Phone, TrendingUp, UserCheck, ShoppingCart, Home, Lock,
  BarChart3, Users, Target, RefreshCw, MessageSquare, Database,
  // Tech/Creative Icons
  Cpu, Palette, Code2, Smartphone, Fingerprint, Map, Search, Server, Layers,
  CheckCircle2, ArrowLeft, ArrowRight
} from "lucide-react";
import Link from "next/link";

// Unified dataset containing all 24 services
const allServices = [
  {
    icon: Phone,
    slug: "customer-support",
    title: "Customer Support",
    desc: "Brand-trained agents, zero downtime support systems.",
    longDesc: "Deliver exceptional, round-the-clock service with dedicated professionals trained specifically on your brand guidelines, product details, and internal workflows. We ensure full coverage across phone, live chat, and email channels.",
    color: "#7c3aed",
    features: ["24/7 Omnichannel Management", "SLA & Response Time Optimization", "CSAT & Net Promoter Score Tracking", "Ticket Escalation & Mapping"]
  },
  {
    icon: TrendingUp,
    slug: "sales-lead-generation",
    title: "Sales & Lead Generation",
    desc: "Closers who treat every lead as sacred.",
    longDesc: "Accelerate your pipeline velocity with expert SDRs and outbound closers. We handle prospecting, cold outreach tracking, qualification loops, and high-ticket closing structures to consistently convert opportunities.",
    color: "#2563eb",
    features: ["B2B Prospecting & Data Cleanse", "Cold Outbound Email & Calling", "Pipeline Velocity Audits", "Custom CRM Action Sequencing"]
  },
  {
    icon: UserCheck,
    slug: "virtual-admin-assistants",
    title: "Virtual & Admin Assistants",
    desc: "Executive support and administrative excellence.",
    longDesc: "Free your core executive team from baseline operational friction. Our admin experts manage complex scheduling matrices, high-volume travel routing, presentation builds, and critical daily data entry tasks.",
    color: "#059669",
    features: ["Complex Calendar Synchronization", "Inbox Zero Management", "Expense & Expense Routing Tracking", "Executive Level Presentation Builds"]
  },
  {
    icon: ShoppingCart,
    slug: "ecommerce-management",
    title: "E-Commerce Management",
    desc: "Shopify, WooCommerce, Amazon — managed 24/7.",
    longDesc: "Complete operational tracking for high-volume stores. From catalog maintenance and inventory updates to chargeback resolutions and merchant system administration across multiple global storefronts.",
    color: "#d97706",
    features: ["Inventory & Supplier Coordination", "Multi-platform Listing Optimization", "Chargeback & Fraud Resolution", "Storefront Front-end Spot Audits"]
  },
  {
    icon: Home,
    slug: "property-management",
    title: "Property Management",
    desc: "Tenant care, maintenance, and rent coordination.",
    longDesc: "Streamline multi-family or single-family real estate portfolios. We act as the frontline interface for tenant maintenance dispatch ticketing, lease application screenings, and rental ledger coordination.",
    color: "#dc2626",
    features: ["Automated Maintenance Routing", "Tenant Onboarding Systems", "Rent Collection Reminders", "Vendor Invoice Verification"]
  },
  {
    icon: Lock,
    slug: "it-cybersecurity",
    title: "IT & Cybersecurity",
    desc: "Technical teams and MSP-level operations.",
    longDesc: "Scale your managed IT offerings with a dedicated offshore operations center. We track internal helpdesks, manage system patches, deploy configurations, and monitor real-time security logs around the clock.",
    color: "#475569",
    features: ["L1 / L2 Desktop Support Loops", "SOC Log Monitoring & Isolation", "Patch Management Systems", "MDM Device Provisioning Profiles"]
  },
  {
    icon: BarChart3,
    slug: "seo-social-media",
    title: "SEO & Social Media",
    desc: "Visibility, content production, and digital presence.",
    longDesc: "Maintain continuous platform pacing. We build monthly asset distribution engines, coordinate brand engagement matrices across core social networks, and monitor algorithmic ranking swings.",
    color: "#7c3aed",
    features: ["Content Calendar Architecture", "Community Engagement Loops", "Social Listening & Trends", "Local Schema Optimization Profiles"]
  },
  {
    icon: Users,
    slug: "custom-remote-teams",
    title: "Custom Remote Teams",
    desc: "Fully bespoke structures built for your exact industry.",
    longDesc: "When a standardized role profile does not fit your operational context, we assemble bespoke units. We source, screen, onboard, and continuously monitor specialists tailored directly to your custom workflows.",
    color: "#2563eb",
    features: ["Custom Candidate Profiles", "Bespoke SOP Asset Translation", "Dedicated Line-manager Loops", "Hardware Provisioning Controls"]
  },
  {
    icon: Target,
    slug: "client-retention",
    title: "Client Retention",
    desc: "Proactive relationship defense and customer loyalty.",
    longDesc: "Protect your recurring revenue blocks. Our retention professionals implement proactive account monitoring metrics, manage upcoming renewal options, and structure churn prevention systems.",
    color: "#ec4899",
    features: ["Account Health Audits", "Churn Prevention Playbooks", "Renewal Trigger Optimizations", "Customer Milestone Engagements"]
  },
  {
    icon: RefreshCw,
    slug: "scheduling-dispatch",
    title: "Scheduling & Dispatch",
    desc: "The 60-second rule — every field lead captured.",
    longDesc: "Optimize field technician dispatch logistics. We monitor incoming service request queues and assign field operators instantly via route planning systems to maximize utilization rates.",
    color: "#0ea5e9",
    features: ["Real-time Fleet Route Mapping", "60-Second Lead Response Rule", "Emergency Dispatch Matrixing", "SMS Customer Arrival Pings"]
  },
  {
    icon: MessageSquare,
    slug: "multilingual-support",
    title: "Multilingual Support",
    desc: "English, Spanish, French, Arabic coverage.",
    longDesc: "Scale your company globally without regional language barriers. We deploy certified native and bilingual support specialists to deliver consistent helpdesk experiences across territories.",
    color: "#14b8a6",
    features: ["Bilingual / Native Asset Matching", "Localized Idiom Translation", "Multi-timezone Scheduling Blocks", "Cross-cultural Customer Success"]
  },
  {
    icon: Database,
    slug: "data-reporting",
    title: "Data & Reporting",
    desc: "KPI dashboards and ongoing performance analytics.",
    longDesc: "Convert high-volume operational metrics into decision-ready business intelligence. We collect, clean, structure, and format raw operational records into digestible executive dashboards.",
    color: "#8b5cf6",
    features: ["Raw Data Cleaning Pipelines", "Automated Daily KPI Updates", "Custom Looker / BI Reporting", "Trend Deviation Notifications"]
  },
  {
    icon: Cpu,
    slug: "ai-automation",
    title: "AI & Automation",
    desc: "Intelligent workflows, zero manual overhead.",
    longDesc: "Architect custom LLM integrations, deterministic autonomous workflow pipelines, and cross-platform database connections using modern AI infrastructure to remove human processing bottlenecks.",
    color: "#7c3aed",
    features: ["Custom LLM Model Vector Embeddings", "Deterministic Workflows (Make/Zapier)", "Internal Knowledge Base Agents", "API Interface Middleware Builds"]
  },
  {
    icon: Palette,
    slug: "ui-ux-design",
    title: "UI / UX Design",
    desc: "Interfaces that convert visitors and delight users.",
    longDesc: "Transform raw technical requirements into visually compelling digital platforms. We build systemic interface libraries, user journeys, interactive high-fidelity prototypes, and design languages.",
    color: "#ec4899",
    features: ["Comprehensive Component Libraries", "Interactive Figma Prototype Flows", "Detailed UX Friction Audits", "User Persona Research Loops"]
  },
  {
    icon: Code2,
    slug: "web-development",
    title: "Web Development",
    desc: "Fast, highly scalable, and built to perform.",
    longDesc: "Production-grade codebase builds with deep search optimization. We craft high-speed user interfaces, handle API state management, and ensure perfect rendering profiles across modern viewports.",
    color: "#2563eb",
    features: ["Next.js SSR Production Systems", "Headless CMS Framework Architecture", "Edge Performance Speed Tuning", "Semantically Structured Layouts"]
  },
  {
    icon: Smartphone,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    desc: "iOS & Android solutions, shipped cleanly on time.",
    longDesc: "Native and multi-platform mobile system architectures engineered for performance. We manage feature builds, build background synchronization tasks, and oversee app store deployments.",
    color: "#059669",
    features: ["Cross-platform React Native Builds", "Offline-first Database States", "Biometric Hardware Security Hooks", "App Store Compliance Pipelines"]
  },
  {
    icon: Fingerprint,
    slug: "brand-identity",
    title: "Brand Identity",
    desc: "Brands structured to be remembered.",
    longDesc: "Establish a clear market presence. We design comprehensive visual design parameters, structural logo configurations, unified typography hierarchies, and tone-of-voice frameworks.",
    color: "#d97706",
    features: ["Vector Logo Engineering Plans", "Unified Typography Frameworks", "Production Design Strategy Manuals", "Collateral Media Asset Suites"]
  },
  {
    icon: Map,
    slug: "product-strategy",
    title: "Product Strategy",
    desc: "Roadmaps that align teams and ship real value.",
    longDesc: "De-risk early phase technical builds. We validate value propositions, map step-by-step release timelines, structure agile sprint tracking mechanisms, and set actionable feature scopes.",
    color: "#0ea5e9",
    features: ["MVP Feature Slicing Frameworks", "Agile Product Backlog Pruning", "Competitive Feature Gap Audits", "User Story Integration Mapping"]
  },
  {
    icon: Search,
    slug: "seo-content",
    title: "SEO & Content",
    desc: "Organic compounding search engine visibility.",
    longDesc: "Dominate search results with systemic data-driven content models. We build internal keyword maps, engineer technical optimization passes, and handle content generation pipelines.",
    color: "#14b8a6",
    features: ["Keyword Target Mapping Matrices", "Technical Core Web Vital Fixes", "Content Clustering Architecture", "Backlink Strategy Development"]
  },
  {
    icon: BarChart3,
    slug: "data-analytics",
    title: "Data & Analytics",
    desc: "Turn your event data into your unfair advantage.",
    longDesc: "Stop guessing what users are doing. We setup advanced behavioral event tracking, clean mixed marketing data points, and produce interactive management analytics tools.",
    color: "#8b5cf6",
    features: ["Server-side Tracking Architectures", "Custom Attribution Event Paths", "Mixpanel / Amplitude Implementation", "Retention cohort analysis maps"]
  },
  {
    icon: TrendingUp,
    slug: "growth-marketing",
    title: "Growth Marketing",
    desc: "Paid and organic growth loops, built to scale.",
    longDesc: "Deploy high-efficiency advertising allocations. We manage ad creatives, configure targeted conversion algorithms, analyze performance drops, and optimize landing page conversions.",
    color: "#dc2626",
    features: ["Multi-platform Paid Ad Operations", "A/B Conversion Rate Optimizations", "Creative Iteration Schedules", "Customer Acquisition Cost Tracking"]
  },
  {
    icon: Server,
    slug: "devops-infrastructure",
    title: "DevOps & Infrastructure",
    desc: "Ship features with zero-downtime deployment confidence.",
    longDesc: "Establish secure, automated infrastructure pipelines. We transition platforms into containerized clusters, build validation pipelines, and structure automated backup routines.",
    color: "#64748b",
    features: ["Infrastructure as Code Templates", "Secure CI/CD Deployment Pipelines", "Docker Container Deployments", "Auto-scaling Cloud Architecture"]
  },
  {
    icon: Database,
    slug: "crm-revops",
    title: "CRM & RevOps",
    desc: "Revenue pipelines that work seamlessly together.",
    longDesc: "Connect fragmented sales systems. We optimize your CRM databases, build sales routing routines, and synchronize operations across Sales, Marketing, and Support.",
    color: "#f59e0b",
    features: ["HubSpot & Salesforce Architecture", "Sales Route Automation Pipelines", "Cross-platform Field Syncs", "Lifecycle Funnel Stage Cleansing"]
  },
  {
    icon: Layers,
    slug: "custom-solutions",
    title: "Custom Solutions",
    desc: "Engineered specifically around your operational constraints.",
    longDesc: "When out-of-the-box software packages fail to resolve specialized internal business logic requirements, our team designs custom application systems engineered for your exact parameters.",
    color: "#6366f1",
    features: ["Bespoke API Integration Layers", "Legacy Database Modernizations", "Proprietary Automation Engines", "Dedicated Platform SLA Matrices"]
  }
];

export default function DetailedServicesPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-pink-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* Visual Ambient Patterns */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed0a 0%, transparent 70%)", transform: "translate(-50%, -20%)" }} />
      <div className="absolute top-[1500px] right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #ec489905 0%, transparent 70%)", transform: "translate(50%, 0%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #c4beed 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.15 }} />

      {/* Hero Header Section */}
      <section className="relative pt-24 pb-20 text-center border-b border-gray-100" style={{ background: "linear-gradient(180deg, #f7f6ff 0%, #ffffff 100%)" }}>
        <div className="max-w-4xl px-6 mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-[#0d0d1a] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <h1 
            className="text-[clamp(2.5rem,6vw,4.25rem)] font-black leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif", color: "#0d0d1a" }}
          >
            Capabilities Deep <span style={{ color: "#ec4899" }}>Dive</span>
          </h1>
          <p 
            className="max-w-2xl mx-auto mt-5 text-base sm:text-lg font-light leading-relaxed text-[#9896b8]"
          >
            A granular blueprint of our 24 specialized capabilities. Explore execution models, technologies, and core deliverables built to scale your infrastructure.
          </p>
        </div>
      </section>

      {/* Continuous List of All 24 Services */}
      <main className="relative max-w-5xl px-6 py-24 mx-auto space-y-32">
        {allServices.map((service, i) => {
          const Icon = service.icon;
          // Alternate layout left-and-right for scannability
          const isEven = i % 2 === 0;

          return (
            <section
              key={service.slug}
              id={service.slug}
              // scroll-mt-28 targets native browser anchors nicely below sticky navs
              className="relative flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16 scroll-mt-28 group"
            >
              {/* Highlight accent left border visible only when targeted directly via hash anchor */}
              <div className="absolute top-0 left-0 w-1 h-full opacity-0 group-target:opacity-100 transition-opacity duration-500 rounded-full" style={{ backgroundColor: service.color }} />

              {/* Visual Presentation Element */}
              <div className={`w-full md:w-5/12 flex justify-center ${isEven ? "md:order-1" : "md:order-2"}`}>
                <div 
                  className="relative flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 rounded-3xl transition-all duration-300 group-hover:scale-[1.02]"
                  style={{ background: `${service.color}06`, border: `1px solid ${service.color}15` }}
                >
                  <div className="absolute inset-0 blur-3xl opacity-10 transition-all duration-300 group-hover:opacity-20 rounded-3xl" style={{ background: service.color }} />
                  <div 
                    className="relative flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{ background: `${service.color}10`, border: `1.5px solid ${service.color}25` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                </div>
              </div>

              {/* Descriptive Content */}
              <div className={`w-full md:w-7/12 space-y-6 ${isEven ? "md:order-2" : "md:order-1"}`}>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: service.color, fontFamily: "'Syne', sans-serif" }}>
                    {service.desc}
                  </span>
                  <h2 className="text-3xl font-black tracking-tight text-[#0d0d1a] sm:text-4xl" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {service.title}
                  </h2>
                  <div className="w-12 h-[3px] mt-4 rounded-full" style={{ background: service.color }} />
                </div>
                
                <p className="text-base font-light leading-relaxed text-gray-600">
                  {service.longDesc}
                </p>

                {/* Grid checklist of sub-features */}
                <div className="p-6 bg-[#fcfbfe] border border-gray-100 rounded-2xl">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0d0d1a]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Core Deliverables & Proficiencies
                  </h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 font-medium leading-tight">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* Global Contact / CTA Footer Section */}
      <section className="relative py-20 bg-[#0d0d1a] overflow-hidden text-white border-t border-gray-800">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-3xl rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)" }} />

        <div className="relative max-w-4xl px-6 mx-auto text-center space-y-8">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-tight leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>
            Ready to deploy your <span style={{ color: "#ec4899" }}>infrastructure?</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base font-light text-gray-400 leading-relaxed">
            Whether you need a single specialized resource or a custom built end-to-end operation team, we design systems tailored uniquely to your workload targets.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0d0d1a] font-bold text-sm rounded-xl transition-all duration-300 hover:bg-[#ec4899] hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}