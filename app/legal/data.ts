export interface LegalDocument {
  id: string;
  title: string;
  effectiveDate: string;
  description?: string;
  blocks: ContentBlock[];
}

export type ContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'blockquote'; text: string };

export const legalDocuments: LegalDocument[] = [
  {
    id: 'terms-of-service',
    title: 'Terms of Service',
    effectiveDate: 'January 1, 2026',
    description: 'Governing rules for accessing our website and business services.',
    blocks: [
      { type: 'h2', text: '1. Acceptance of Terms and Corporate Overview' },
      { type: 'p', text: 'These Terms of Service ("Terms") constitute a legally binding contract between you ("User," "Client," "you") and AJAX Global LLC ("Company," "we," "us"), a Colorado limited liability company. This Agreement governs your access to https://ajaxglobal.com (the "Website") and all related consulting, BPO, AI automation, and outsourcing services (collectively, the "Services").' },
      { type: 'p', text: 'By visiting the Website, filling out forms, booking via Calendly, or checking opt-in boxes, you agree to these Terms and our Privacy Policy. If you do not agree, you must cease use immediately.' },

      { type: 'h2', text: '2. Eligibility and Account Registration' },
      { type: 'ul', items: [
        'You must be at least 18 years of age and possess full legal capacity.',
        'Children under 18 are strictly prohibited from accessing our systems.',
        'All interactions are structured as B2B commercial transactions.'
      ]},

      { type: 'h2', text: '3. Scope and Description of BPO & AI Services' },
      { type: 'ol', items: [
        'AI Automation and Workflows: Crafting, implementing, and hosting automated software flows, API integrations, and data transformation programs.',
        'Autonomous AI Agents: Creating software programs powered by LLMs for customer inquiries, lead qualification, and document indexing.',
        'Human Outsourcing (BPO): Recruiting, training, and providing outsourced teams for customer service, appointment setting, and administrative support.',
        'Corporate Business Consulting: Strategic systems evaluations, workflow analysis, and technical pipeline consulting.'
      ]},
      { type: 'p', text: 'The Website serves as an informational portal and appointment booking system. We do not accept automated online payments or process retail credit cards. All engagements are formalized through customized Master Services Agreements (MSAs), Statements of Work (SOWs), and Service Level Agreements (SLAs).' },

      { type: 'h2', text: '4. Authorized Use of Website and Critical Restrictions' },
      { type: 'p', text: 'You are granted a limited, non-exclusive, non-transferable, revocable license to access public pages for informational and scheduling purposes.' },
      { type: 'ul', items: [
        'Data Scraping and Harvesting: Using bots or crawlers to extract content or contact directories.',
        'System Disruption: Interfering with proper working of the Website, introducing malware, or executing DDoS attacks.',
        'Identity Falsification: Submitting fraudulent contact details or pretending to represent an entity without authorization.',
        'Reverse Engineering: Attempting to decompile or replicate our code, CSS, or automation models.',
        'Legal Violations: Transmitting threatening, harassing, defamatory, or offensive materials.'
      ]},

      { type: 'h2', text: '5. Service Inquiries, Consultations, and Schedule Management' },
      { type: 'ul', items: [
        'Provide accurate, current, and complete contact metadata and system requirements.',
        'If scheduling via Calendly, provide at least 24 hours notice for cancellations or rescheduling.',
        'AJAX Global LLC reserves the absolute right to refuse service or cancel consultations without liability.'
      ]},

      { type: 'h2', text: '6. Intellectual Property Rights and Ownership Allocation' },
      { type: 'h3', text: 'A. AJAX Global LLC Proprietary Material' },
      { type: 'p', text: 'The Website, content, layout, graphics, code, workflows, and trademarks (including "AJAX Global" and "AJAX Global LLC") are our exclusive property. No ownership is transferred by virtue of your access.' },
      { type: 'h3', text: 'B. Foundational Automation Modules' },
      { type: 'p', text: 'We retain full ownership of proprietary foundational components, code templates, standardized API scripts, and pre-built LLM instructions ("Foundational Modules").' },
      { type: 'h3', text: 'C. Custom Work-Product and License Grant' },
      { type: 'p', text: 'Unless otherwise negotiated, we grant the Client an exclusive, royalty-free, perpetual, worldwide, non-transferable license to use customized workflows and bespoke connections developed under an active SOW, provided all fees are paid and the Client does not resell Foundational Modules.' },

      { type: 'h2', text: '7. Client-Provided Data, Source Assets, and Sovereignty' },
      { type: 'ul', items: [
        'Client-Provided Data remains the exclusive property of the Client.',
        'The Client grants us a non-exclusive, limited license to ingest, host, transfer, and analyze data solely to perform our duties.',
        'You warrant that you possess all necessary rights and consents to share data with us.'
      ]},

      { type: 'h2', text: '8. User and Client Representations and Responsibilities' },
      { type: 'ul', items: [
        'Conduct business in accordance with all applicable laws.',
        'Maintain confidentiality of access credentials and account safety.',
        'Do not share API keys or logins containing malware.'
      ]},

      { type: 'h2', text: '9. Human Outsourcing and BPO Operational Protocols' },
      { type: 'ul', items: [
        'AJAX Global LLC acts as an independent contractor. No joint-employment relationship is established.',
        'The Client provides day-to-day operational guidance and reviews work quality.',
        'The Client agrees not to directly recruit or hire any BPO personnel introduced by us during the engagement and for 12 months after termination. Breach incurs a liquidation fee equal to 100% of the candidate\'s projected annual compensation.'
      ]},

      { type: 'h2', text: '10. AI System Use, Custom Workflows, and LLM Parameters' },
      { type: 'ul', items: [
        'Automations depend on third-party API providers (OpenAI, Anthropic, Google). We are not responsible for their outages or policy changes.',
        'Generative AI is subject to rapid change. We do not guarantee identical results indefinitely without updates.'
      ]},

      { type: 'h2', text: '11. Strict General Disclaimer and No Guarantee of Results' },
      { type: 'ul', items: [
        'No guarantees regarding lead conversion rates, revenue, profit margins, sales performance, or ROI.',
        'Results depend on market conditions, product-market fit, sales execution, and external factors.',
        'Case studies and marketing materials are for informational purposes only and do not constitute binding guarantees.'
      ]},

      { type: 'h2', text: '12. Specific Artificial Intelligence Output Disclaimer' },
      { type: 'ul', items: [
        'AI-generated content may contain errors, misinterpretations, or hallucinations.',
        'The Client is solely responsible for implementing a "human-in-the-loop" review process before deploying AI outputs publicly.',
        'We are not liable for damages arising from unreviewed AI-generated outputs.'
      ]},

      { type: 'h2', text: '13. Telecommunications Compliance and Mobile Messaging Rules' },
      { type: 'ul', items: [
        'Text messaging services require explicit, verifiable opt-in consent.',
        'Mobile phone numbers and SMS consent logs will never be sold, rented, or shared with third parties for marketing.',
        'All messages support the STOP opt-out keyword.',
        'Standard carrier messaging fees may apply.'
      ]},

      { type: 'h2', text: '14. Confidentiality and Non-Disclosure Standards' },
      { type: 'ul', items: [
        '"Confidential Information" includes technical data, trade secrets, software code, strategies, and business plans.',
        'Exclusions: information already public, legally possessed prior to disclosure, or independently developed.',
        'The receiving party must use at least the same degree of care as for its own sensitive data.'
      ]},

      { type: 'h2', text: '15. Limitation of Liability Exhaustive Disclosures' },
      { type: 'p', text: 'To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, including lost revenues, data integrity failures, system outages, or third-party AI output issues.' },
      { type: 'blockquote', text: 'LIABILITY CAP: In no event will our total aggregate liability exceed the total fees actually paid by the Client in the three (3) months immediately preceding the event giving rise to the claim.' },

      { type: 'h2', text: '16. Indemnification Obligations' },
      { type: 'p', text: 'You agree to defend, indemnify, and hold harmless AJAX Global LLC and its affiliates from claims arising out of:' },
      { type: 'ul', items: [
        'Your breach of these Terms or our Privacy Policy.',
        'Your misuse of the Website, AI systems, or communication tools.',
        'TCPA, CTIA, or A2P 10DLC violations from unverified phone numbers you provide.',
        'Third-party IP infringement from materials you provide.'
      ]},

      { type: 'h2', text: '17. Contract Term, Suspension, and Termination Procedures' },
      { type: 'ul', items: [
        'We may suspend or terminate access immediately for policy violations.',
        'Active monthly agreements require at least 30 days written notice before the next billing cycle unless otherwise specified in an SOW.',
        'Survival: Sections on Proprietary Rights, Disclaimer, AI Output, Confidentiality, Liability, and Dispute Resolution survive termination.'
      ]},

      { type: 'h2', text: '18. Governing Law and Venue Selective Criteria' },
      { type: 'p', text: 'These Terms are governed by the laws of the State of Colorado, without regard to conflict of law principles. Legal actions must be filed exclusively in state or federal courts located in Denver, Colorado.' },

      { type: 'h2', text: '19. Mandatory Dispute Resolution and Class Action Waiver' },
      { type: 'h3', text: 'A. Direct Negotiation' },
      { type: 'p', text: 'Before formal proceedings, submit a written claim to info@ajaxglobal.com. We will coordinate a video meeting to seek resolution.' },
      { type: 'h3', text: 'B. Binding Arbitration' },
      { type: 'p', text: 'If unresolved within 45 days, either party may submit to binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules in Denver, Colorado. The arbitrator may not award punitive damages or exceed the liability cap.' },
      { type: 'h3', text: 'C. Class Action Waiver' },
      { type: 'blockquote', text: 'YOU AND AJAX GLOBAL LLC AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS. YOU WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTION LAWSUITS, COLLECTIVE ACTIONS, OR REPRESENTATIVE PROCEEDINGS.' },

      { type: 'h2', text: '20. Force Majeure and System Dependency Outages' },
      { type: 'p', text: 'We are not liable for failures caused by circumstances beyond our reasonable control, including natural disasters, pandemics, national infrastructure outages, cellular carrier blocks, or sudden third-party platform outages (including OpenAI, Anthropic, Google, Calendly, or GoHighLevel).' },

      { type: 'h2', text: '21. General Administrative Provisions and Integration' },
      { type: 'ul', items: [
        'Entire Agreement: These Terms and our Privacy Policy supersede all prior agreements.',
        'Severability: Invalid provisions will be modified to the minimum extent necessary.',
        'No Waiver: Failure to enforce a provision does not waive future enforcement.',
        'Assignment: You may not assign your rights without prior written consent. We may assign rights to an affiliate or successor.'
      ]},

      { type: 'h2', text: '22. Amendments, Procedural Changes, and Contact Details' },
      { type: 'p', text: 'We may modify these Terms at any time. Material changes will be posted on the Website with an updated Effective Date. Continued use constitutes acceptance.' },
      { type: 'p', text: 'For questions, contact: AJAX Global LLC, 1500 N. Grant St., Suite R, Denver, CO 80203, United States. Email: info@ajaxglobal.com' }
    ]
  },

  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    effectiveDate: 'January 1, 2026',
    description: 'How we collect, process, store, and protect personal data.',
    blocks: [
      { type: 'h2', text: '1. Scope of Governance and Corporate Overview' },
      { type: 'p', text: 'This Privacy Policy establishes the standards governing personal data processing by AJAX Global LLC, a Colorado limited liability company located at 1500 N. Grant St., Suite R, Denver, CO 80203. It applies to https://ajaxglobal.com and associated digital portals. For BPO and client workflow data, we act as a data processor under written MSAs and DPAs.' },

      { type: 'h2', text: '2. Taxonomy of Legal and Technical Definitions' },
      { type: 'table', headers: ['Term', 'Application to AJAX Global LLC'], rows: [
        ['Personal Data', 'User-submitted contact details, IP logs, CRM data, and operational parameters.'],
        ['Sensitive Data', 'Not systematically collected for marketing; protected under heightened frameworks if processed for specialized workflows.'],
        ['Controller', 'AJAX Global LLC acts as Controller for promotional and sales activities.'],
        ['Processor', 'We act as Processor when deploying BPO personnel, support environments, and AI agents for corporate clients.'],
        ['A2P 10DLC', 'Compliance parameters for business messaging, consent mapping, and carrier routing.'],
        ['Consent', 'Secured via affirmative, unchecked, voluntary web actions for email and SMS registrations.']
      ]},

      { type: 'h2', text: '3. Regulatory Standards and Compliance Foundations' },
      { type: 'h3', text: '3.1 Colorado Privacy Act (CPA)' },
      { type: 'p', text: 'We comply with C.R.S. § 6-1-1301 et seq., including the elimination of the 60-day cure period effective January 1, 2025, and upcoming biometric (July 1, 2025) and minor (October 1, 2025) rules.' },
      { type: 'h3', text: '3.2 CCPA/CPRA' },
      { type: 'p', text: 'We provide all required disclosures for California residents regarding data sales, sharing, and targeted profiling.' },
      { type: 'h3', text: '3.3 GDPR' },
      { type: 'p', text: 'For EEA, UK, and Swiss users, we act as an independent Controller and utilize Standard Contractual Clauses (SCCs) for U.S. data transfers.' },
      { type: 'h3', text: '3.4 Telecommunications Compliance (TCPA and CTIA)' },
      { type: 'p', text: 'We enforce strict opt-in verification, clear disclosures, and automated opt-out architectures for all mobile communications.' },

      { type: 'h2', text: '4. Comprehensive Information Collection Architecture' },
      { type: 'table', headers: ['Data Category', 'Fields Processed', 'Ingestion Pathway', 'Storage Host'], rows: [
        ['Contact Identifiers', 'Name, email, phone, title, employer', 'Web forms, email', 'GoHighLevel, Google Workspace, Microsoft 365'],
        ['Communication Content', 'Inquiries, support tickets, requirements', 'Forms, email', 'GoHighLevel, internal ticketing'],
        ['Technical Telemetry', 'IP, browser, OS, network identifiers', 'Automatic', 'Google Analytics, Meta Pixel, cloud hosting'],
        ['Interaction Metrics', 'Clickstream, page duration, referrals', 'Passive browsing', 'Analytics platforms'],
        ['Scheduling Telemetry', 'Event types, times, timezones', 'Calendly bookings', 'Calendly, CRM, corporate calendars'],
        ['Mobile Metadata', 'Phone numbers, carrier codes, consent logs', 'SMS consent forms', 'GoHighLevel, A2P 10DLC platforms']
      ]},

      { type: 'h2', text: '5. Interactive Portals, Contact Forms, and Scheduling Integrations' },
      { type: 'p', text: 'Contact forms use standardized validation to filter malicious scripts. Calendly integrations use automated webhooks to synchronize schedules with GoHighLevel and Google Workspace in real time.' },

      { type: 'h2', text: '6. Data Processing Pathways and Lawful Bases of Processing' },
      { type: 'table', headers: ['Purpose', 'Lawful Basis (GDPR)', 'CPA/CCPA Category', 'Recipient Platforms'], rows: [
        ['Responding to inquiries', 'Performance of a Contract', 'Customer Service', 'GoHighLevel, Calendly, Google Workspace'],
        ['AI and BPO delivery', 'Performance of a Contract', 'Core Operations', 'Internal BPO teams, cloud providers'],
        ['Website tuning', 'Legitimate Interests', 'Quality Control', 'Google Analytics, hosting'],
        ['Promotional emails', 'Consent', 'Direct Marketing', 'GoHighLevel, email systems'],
        ['SMS compliance', 'Explicit Consent', 'Mobile Communications', 'GoHighLevel, carriers'],
        ['Security safeguards', 'Legal Obligation / Legitimate Interests', 'Fraud Detection', 'Hosting, firewall operators']
      ]},

      { type: 'h2', text: '7. Technical Cookie Infrastructure and Active Tracking Analytics' },
      { type: 'h3', text: '7.1 Cookie Registry' },
      { type: 'table', headers: ['Cookie Class', 'Function', 'Origin', 'Lifetime'], rows: [
        ['Strictly Necessary', 'Session state, security, load balancing', 'ajaxglobal.com', 'Session'],
        ['Functional & Performance', 'Timezone preferences, UI choices', 'Calendly, GoHighLevel', '12 Months'],
        ['Analytical & Telemetry', 'Traffic metrics, clickstream, regions', 'Google Analytics', '14 Months'],
        ['Targeting & Attribution', 'Campaign performance from social channels', 'Meta Pixel', '90 Days']
      ]},
      { type: 'h3', text: '7.2 Management Controls' },
      { type: 'p', text: 'Users are presented with a consent banner to manage preferences. You may also configure browser settings to block or delete cookies. Blocking may limit scheduling widgets and form validation.' },

      { type: 'h2', text: '8. Customer Relationship Management and CRM Data Governance' },
      { type: 'ul', items: [
        'Data is transmitted to GoHighLevel via encrypted HTTPS connections.',
        'Lead records and communication logs are stored in separate database segments to prevent overlap.',
        'Access is restricted via RBAC and all access events are logged and audited.'
      ]},

      { type: 'h2', text: '9. Artificial Intelligence Engines, Large Language Models, and Automated Workflows' },
      { type: 'h3', text: '9.1 Third-Party AI Integrations' },
      { type: 'ul', items: [
        'Zero Model Training: Developer-tier APIs prohibit providers from using our data payloads to train foundational models.',
        'Transient Ingestion: Personal data is held only as long as necessary to execute the request.',
        'Data Minimization: Automated filters strip unnecessary personal identifiers before external API transmission.'
      ]},
      { type: 'h3', text: '9.2 Human-in-the-Loop Safeguards' },
      { type: 'p', text: 'We do not use automated AI for high-risk consequential decisions regarding employment, credit, housing, healthcare, or legal rights. Human review is required for outcomes affecting contractual or legal positions.' },

      { type: 'h2', text: '10. Strict Telecommunications Compliance and SMS Verification Protocols' },
      { type: 'h3', text: '10.1 Express Written Opt-In' },
      { type: 'p', text: 'SMS consent is collected via an unchecked, voluntary checkbox. It is never bundled with general Terms of Service or email registrations. Phone number inputs are optional unless a service requires SMS delivery.' },
      { type: 'h3', text: '10.2 SMS Consent Protection' },
      { type: 'blockquote', text: 'All mobile phone numbers and SMS consent records obtained by AJAX Global LLC will not be shared with, sold to, or rented to third parties, affiliates, or partners for marketing or promotional purposes under any circumstances.' },
      { type: 'h3', text: '10.3 Interaction and Disclosures' },
      { type: 'ul', items: [
        'Message and data rates may apply based on your mobile plan.',
        'Message frequency varies by interaction level and service requests.',
        'Reply STOP to opt out at any time.',
        'Reply HELP for assistance.'
      ]},

      { type: 'h2', text: '11. Data Retention, Archival, and Secure Sanitization Schedules' },
      { type: 'table', headers: ['Data Category', 'Retention', 'Justification', 'Disposal'], rows: [
        ['Sales & Lead Data', '24 months from last interaction', 'B2B communication cycles', 'CRM erasure'],
        ['Active Client Profiles', 'Contract duration + 7 years', 'Tax and legal audits', 'Secure deletion'],
        ['BPO Service Ingestion', '90 days post-termination', 'Project verification', 'Cryptographic erasure'],
        ['SMS Tracking Logs', '5 years from cancellation', 'TCPA compliance', 'Truncation of identifiers'],
        ['Analytics Telemetry', '14 months from first visit', 'Performance optimization', 'Automated deletion'],
        ['System Audit Logs', '12 months', 'Security monitoring', 'Automated purges']
      ]},

      { type: 'h2', text: '12. Technical, Operational, and Administrative Safeguards' },
      { type: 'table', headers: ['Safeguard', 'Technology / Protocol', 'Standard'], rows: [
        ['Transit Encryption', 'TLS 1.3 (HTTPS Only)', 'Industry standard'],
        ['At-Rest Encryption', 'AES-256-bit', 'FIPS 140-2'],
        ['Access Control', 'RBAC + MFA', 'Least-privilege'],
        ['Vulnerability Analysis', 'Regular server and API scans', 'OWASP Top 10'],
        ['Vendor Auditing', 'Annual third-party reviews', 'SOC 2 Type II'],
        ['Employee Training', 'Mandatory privacy training', 'Continuous governance']
      ]},

      { type: 'h2', text: '13. GDPR and International Data Transfer Protocols' },
      { type: 'p', text: 'We utilize Standard Contractual Clauses (SCCs) and formal Data Processing Addenda (DPAs) to govern cross-border data flows from Europe to the United States.' },

      { type: 'h2', text: '14. State-Specific Privacy Disclosures (CCPA/CPRA)' },
      { type: 'p', text: 'During the preceding 12 months, we collected Identifiers, Commercial Information, Internet Activity, and Professional Information. These are disclosed only to verified service providers (GoHighLevel, Calendly, cloud hosts) for business operations.' },
      { type: 'p', text: 'We do not sell or share personal information for cross-context behavioral advertising.' },

      { type: 'h2', text: '15. Colorado Privacy Act (CPA) Rule Alignment' },
      { type: 'p', text: 'Colorado residents have rights to access, correct, delete, and port data, and to opt out of targeted advertising. The 60-day cure period ended January 1, 2025. We do not collect biometric identifiers and do not process minor data for targeted advertising without explicit consent.' },

      { type: 'h2', text: '16. Data Subject Rights Execution and Identity Verification Protocol' },
      { type: 'p', text: 'Submit requests via info@ajaxglobal.com. We verify identity by matching name and email against our records. Authorized agents must provide signed written permission.' },
      { type: 'ul', items: [
        'Standard response time: 45 calendar days.',
        'Complexity extension: additional 45 days with written notice.',
        'Right of Appeal: Submit appeals with subject "CPA Request Appeal" for senior management review within 45 days.'
      ]},

      { type: 'h2', text: '17. Children\'s Privacy Protection and Age-Restricted Data Safeguards' },
      { type: 'p', text: 'Our services are not directed at children under 13. We comply with COPPA and do not knowingly collect data from children under 13. If discovered, we delete such data immediately. We do not process data of individuals under 18 for targeted advertising without explicit consent.' },

      { type: 'h2', text: '18. Client Data Sovereignty, Confidentiality, and BPO Operational Demarcation' },
      { type: 'ul', items: [
        'Client datasets remain the exclusive property of the client.',
        'BPO employees are bound by enforceable non-disclosure agreements.',
        'Data is stored in isolated environments to prevent cross-contamination.',
        'Processing is limited to explicit instructions in the service agreement.'
      ]},

      { type: 'h2', text: '19. Administrative Policy Governance, System Audits, and Amendments' },
      { type: 'p', text: 'We conduct periodic audits of databases, integrations, and CRM systems. Material changes to this Policy will be posted on the Website with an updated Effective Date. Active clients will be notified via email. New uses of personal data require affirmative consent where required by law.' },

      { type: 'h2', text: '20. Corporate Contact Information and Dispute Resolution Pathways' },
      { type: 'p', text: 'AJAX Global LLC, 1500 N. Grant St., Suite R, Denver, CO 80203, United States. Compliance Email: info@ajaxglobal.com' }
    ]
  },

  {
    id: 'cookie-policy',
    title: 'Cookie Policy',
    effectiveDate: 'January 1, 2026',
    description: 'Information about tracking technologies used on our website.',
    blocks: [
      { type: 'h2', text: '1. Background and Intent of Data Ingestion via Tracking' },
      { type: 'p', text: 'AJAX Global LLC uses cookies, web beacons, tracking pixels, and local storage on https://ajaxglobal.com to secure, optimize, and analyze our platforms. Tracking is designed to align with strict data minimization principles.' },

      { type: 'h2', text: '2. Technical Classification and Anatomy of HTTP Cookies' },
      { type: 'ul', items: [
        'Session Cookies: Temporary files deleted when the browser closes.',
        'Persistent Cookies: Stored for a set duration to recognize subsequent visits.',
        'Web Beacons: Transparent graphics tracking page views and email opens.',
        'Local Storage (HTML5): Stores data in browser cache for faster access.'
      ]},
      { type: 'p', text: 'We configure cookies with Secure, HttpOnly, and SameSite=Lax attributes to mitigate security risks.' },

      { type: 'h2', text: '3. Classified Cookie Registry and Exhaustive Telemetry Logs' },
      { type: 'table', headers: ['Cookie Identifier', 'Provider', 'Classification', 'Duration', 'Purpose'], rows: [
        ['__cf_bm', 'Cloudflare', 'Strictly Necessary', '30 Minutes', 'Bot mitigation and DDoS prevention'],
        ['_ga', 'Google Analytics', 'Analytical', '14 Months', 'Unique ID for visit metrics'],
        ['ga*', 'Google Analytics', 'Analytical', '14 Months', 'Telemetry and visit states'],
        ['_fbp', 'Meta Platforms', 'Targeting', '90 Days', 'Traffic origin mapping'],
        ['__ghl_track', 'GoHighLevel', 'Functional', '1 Year', 'Marketing source and form states'],
        ['Calendly_Session', 'Calendly', 'Functional', 'Session', 'Scheduling and timezone retention'],
        ['cookie_consent_state', 'AJAX Global LLC', 'Strictly Necessary', '1 Year', 'Consent preference storage']
      ]},

      { type: 'h2', text: '4. Strictly Necessary Cookies and Security Parameters' },
      { type: 'p', text: 'These essential cookies maintain core functionality and security. Under GDPR and CPA, they do not require prior consent. They prevent malicious access, support session state, and store consent choices. Blocking them may degrade core features.' },

      { type: 'h2', text: '5. Functional Cookies, Localizations, and User Preferences' },
      { type: 'p', text: 'Functional cookies remember choices and enhance interactivity. Calendly uses them for timezone verification and booking availability. GoHighLevel uses them to route form data securely.' },

      { type: 'h2', text: '6. Analytical and Performance Systems (Google Analytics)' },
      { type: 'ul', items: [
        'IP masking truncates the last octet of IP addresses at collection.',
        'Analytical tracking is disabled by default and activates only with explicit consent.',
        'Data retention is set to 14 months, the minimum allowed by the platform.'
      ]},

      { type: 'h2', text: '7. Advertising, Remarketing, and Attribution Scripts (Meta Pixel)' },
      { type: 'ul', items: [
        'Measures B2B conversion rates from corporate updates and case studies.',
        'Disabled by default; loads only with explicit opt-in.',
        'California and Colorado residents may opt out via the preference center or by emailing info@ajaxglobal.com.'
      ]},

      { type: 'h2', text: '8. First-Party vs. Third-Party Cookie Boundaries' },
      { type: 'p', text: 'First-party cookies are set by ajaxglobal.com for core security and preferences. Third-party cookies are set by partners (Google, Calendly, GoHighLevel, Meta) and may track across sites. We audit third-party integrations annually.' },

      { type: 'h2', text: '9. Cross-Platform Tracking and Future Technology Safeguards' },
      { type: 'p', text: 'We may integrate client-side local storage, first-party server tagging, and session diagnostics. All new technologies will remain subject to explicit consent, purpose specification, and data minimization.' },

      { type: 'h2', text: '10. Global Privacy Control (GPC) and Universal User Signals' },
      { type: 'p', text: 'Our Website detects and honors Global Privacy Control (GPC) and Do Not Track (DNT) signals. When detected, we automatically disable non-essential analytical and targeting cookies for that session.' },

      { type: 'h2', text: '11. Granular Browser Configuration and Management Controls' },
      { type: 'p', text: 'You can manage cookies through browser settings:' },
      { type: 'ul', items: [
        'Google Chrome: Settings > Privacy and security > Third-party cookies',
        'Mozilla Firefox: Settings > Privacy & Security > Enhanced Tracking Protection',
        'Apple Safari: Preferences > Privacy > Prevent cross-site tracking',
        'Microsoft Edge: Settings > Privacy, search, and services > Tracking prevention'
      ]},
      { type: 'p', text: 'You may also visit the Network Advertising Initiative (NAI) Opt-Out Page or the Digital Advertising Alliance (DAA) Choice Platform.' },

      { type: 'h2', text: '12. Consequences of Cookie Blocking and Technical Degradation' },
      { type: 'ul', items: [
        'Scheduling Limitations: Calendly may not load; contact info@ajaxglobal.com directly.',
        'Form Submission Errors: Cloudflare bot defense may reject submissions as spam.',
        'Loss of Preferences: The consent banner may reappear on every visit.'
      ]},

      { type: 'h2', text: '13. Regulatory Alignment and Cookie Compliance Governance' },
      { type: 'ul', items: [
        'ePrivacy Directive: Explicit opt-in consent required for non-essential cookies in the EU and UK.',
        'Colorado Privacy Act (CPA): Clear opt-out mechanisms and universal privacy controls honored.',
        'California CPRA: Granular disclosures and rights to restrict targeted profiling provided.'
      ]},

      { type: 'h2', text: '14. Contact Details for Digital Compliance Inquiries' },
      { type: 'p', text: 'AJAX Global LLC, 1500 N. Grant St., Suite R, Denver, CO 80203, United States. Email: info@ajaxglobal.com' }
    ]
  },

  {
    id: 'sms-terms',
    title: 'SMS Terms & Conditions',
    effectiveDate: 'January 1, 2026',
    description: 'Rules governing text message communications from AJAX Global LLC.',
    blocks: [
      { type: 'h2', text: '1. Program Overview and Compliance Integration' },
      { type: 'p', text: 'These SMS Terms & Conditions govern the delivery and management of text messages (SMS/MMS) through our A2P 10DLC pathways (the "Messaging Program"). By providing your mobile number or checking consent boxes on https://ajaxglobal.com, you agree to these terms.' },

      { type: 'h2', text: '2. User Sign-Up and Enrollment Standards' },
      { type: 'ul', items: [
        'You must be the owner or authorized subscriber of the submitted mobile number.',
        'You must reside in the U.S. and use a domestic carrier integrated with U.S. networks.',
        'Enrollment requires explicit, affirmative consent via an unchecked web checkbox.',
        'Enrollment is voluntary and not a condition of purchasing services.'
      ]},

      { type: 'h2', text: '3. Scope of Mobile Communications and Use Cases' },
      { type: 'ul', items: [
        'Transactional and Account Notifications: Booking alerts, credentials, setup notifications.',
        'Customer Support and Diagnostics: Troubleshooting and ticket responses.',
        'Appointment Reminders: Real-time reminders for Calendly sessions.',
        'BPO Operational Inquiries: Task coordination and virtual assistant scheduling.',
        'Marketing and Promotions: Case studies and integration guides (only for explicitly opted-in users).'
      ]},

      { type: 'h2', text: '4. Standard Carrier Data, Costs, and Fees' },
      { type: 'p', text: 'We do not charge subscription fees. You are responsible for carrier messaging rates, data fees, and surcharges. Long messages exceeding 160 characters may be segmented and charged per segment.' },

      { type: 'h2', text: '5. Message Frequency Procedural Standards' },
      { type: 'p', text: 'Frequency varies by schedule and pipeline activity:' },
      { type: 'ul', items: [
        'Consultations: Typically 2–4 messages per event (confirmation, reminder, follow-up).',
        'Support tickets: 1–5 messages per troubleshooting cycle.',
        'Marketing: Generally no more than 4 messages per calendar month.'
      ]},

      { type: 'h2', text: '6. Unsubscribe Mechanisms (STOP Keyword)' },
      { type: 'ul', items: [
        'Reply STOP to any message to cancel.',
        'Alternative recognized keywords: END, CANCEL, UNSUBSCRIBE, QUIT.',
        'Upon receipt, we immediately opt you out, update our CRM, and send a final confirmation.',
        'Campaign-specific opt-outs: If enrolled in multiple campaigns, opt out of each individually unless you email a global request to info@ajaxglobal.com.'
      ]},

      { type: 'h2', text: '7. Information and Support Services (HELP Keyword)' },
      { type: 'p', text: 'Reply HELP or INFO to any message for an automated response containing our business name, support contact channels, and compliance document links.' },

      { type: 'h2', text: '8. Mobile Carrier Compatibility and Roster' },
      { type: 'p', text: 'Compatible carriers include T-Mobile, AT&T, Verizon, Sprint, Boost Mobile, Cricket, MetroPCS, Virgin Mobile, U.S. Cellular, and select MVNOs. We cannot guarantee delivery across all regional or VoIP networks.' },

      { type: 'h2', text: '9. Carrier Network Laws and Systemic Limits' },
      { type: 'ul', items: [
        'All B2B SMS traffic must be registered under A2P 10DLC or verified toll-free routes.',
        'Carriers may impose daily throughput and rate limits based on brand trust scores.',
        'Messages resembling spam may be filtered or blocked at the network level.'
      ]},

      { type: 'h2', text: '10. Carrier Liability Exclusion Statement' },
      { type: 'blockquote', text: 'The wireless carriers participating in this Messaging Program (including AT&T, T-Mobile, and Verizon) and their respective parent companies, subsidiaries, and networks are not liable for delayed, misrouted, or undelivered text messages.' },

      { type: 'h2', text: '11. Prohibited Actions and Content Codes (SHAFT)' },
      { type: 'p', text: 'You are strictly prohibited from transmitting content related to:' },
      { type: 'ul', items: [
        'SHAFT: Sex, Hate, Alcohol, Firearms, or Tobacco (including vaping).',
        'Federally illegal substances, payday loans, credit repair, gambling, third-party lead generation, or MLM networks.',
        'Malware, phishing links, or malicious scripts.'
      ]},

      { type: 'h2', text: '12. Security Procedures and Protocols' },
      { type: 'ul', items: [
        'Access to phone numbers and opt-in histories is restricted to necessary employees.',
        'Multi-Factor Authentication (MFA) is enforced across CRM and telecommunications dashboards.',
        'Data is transmitted using TLS 1.3 encryption.'
      ]},

      { type: 'h2', text: '13. Coordination with Consolidated Privacy Principles' },
      { type: 'p', text: 'Mobile numbers and SMS consent logs are strictly confidential. We do not sell, rent, or share them with third parties for marketing. We disclose identifiers only to verified telecom providers and CRM hosts under strict processing agreements.' },

      { type: 'h2', text: '14. Warranty and Reliability Disclaimer' },
      { type: 'p', text: 'THE MESSAGING PROGRAM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We disclaim implied warranties of merchantability, fitness for purpose, and non-infringement. We do not guarantee on-time delivery to every device.' },

      { type: 'h2', text: '15. Limitation of Liability for Telecommunications Outages' },
      { type: 'p', text: 'We will not be liable for indirect, special, incidental, consequential, or punitive damages, including lost profits, data loss, carrier blocks, or network outages.' },
      { type: 'blockquote', text: 'Cap on Liability: Our total aggregate liability will not exceed $100.00 or the total fees paid by you for messaging services during the preceding 3 months, whichever is greater.' },

      { type: 'h2', text: '16. Mobile System Indemnification Clauses' },
      { type: 'p', text: 'You agree to indemnify us against claims arising from inaccurate mobile numbers you submit, breach of these SMS Terms, or TCPA/FCC complaints from your misuse of messaging platforms.' },

      { type: 'h2', text: '17. Governing Law, TCPA/FCC Mandates, and Venue' },
      { type: 'p', text: 'These SMS Terms are governed by Colorado law. All aspects comply with the TCPA, FCC mobile safety guidelines, and CTIA messaging principles. Legal actions must be filed in Denver, Colorado.' },

      { type: 'h2', text: '18. Dispute Resolution, Mandatory Arbitration, and Waivers' },
      { type: 'h3', text: 'A. Direct Negotiation' },
      { type: 'p', text: 'Submit written claims to info@ajaxglobal.com for a good-faith video meeting within 45 days.' },
      { type: 'h3', text: 'B. Binding Arbitration' },
      { type: 'p', text: 'If unresolved, disputes proceed to AAA Commercial Arbitration in Denver. The arbitrator may not award punitive damages or exceed the liability cap.' },
      { type: 'h3', text: 'C. Class Action Waiver' },
      { type: 'blockquote', text: 'YOU AND AJAX GLOBAL LLC AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED SOLELY ON AN INDIVIDUAL BASIS. YOU WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTION LAWSUITS, COLLECTIVE ACTIONS, OR REPRESENTATIVE PROCEEDINGS.' },

      { type: 'h2', text: '19. Amendments and Procedural Termination Rights' },
      { type: 'ul', items: [
        'We may modify these SMS Terms at any time. Updates are posted with a revised Effective Date.',
        'Continued participation constitutes acceptance.',
        'We may suspend or terminate your participation at any time without prior notice.'
      ]},

      { type: 'h2', text: '20. Contact Channels for Telecommunications Inquiries' },
      { type: 'p', text: 'AJAX Global LLC, 1500 N. Grant St., Suite R, Denver, CO 80203, United States. Email: info@ajaxglobal.com' }
    ]
  },

  {
    id: 'sms-privacy',
    title: 'SMS Privacy Policy',
    effectiveDate: 'January 1, 2026',
    description: 'Dedicated privacy protocols for mobile messaging data.',
    blocks: [
      { type: 'h2', text: '1. Executive Scope and Specific Intent' },
      { type: 'p', text: 'This SMS Privacy Policy outlines strict protocols for collecting, processing, managing, storing, securing, and disposing of mobile phone numbers, SMS opt-in records, message logs, and cellular consent telemetry ("SMS Data"). It is isolated from our general Privacy Policy to address virtual phone provider and carrier campaign verification requirements.' },

      { type: 'h2', text: '2. Clear Ingestion and Methodology of SMS Identifier Capture' },
      { type: 'p', text: 'We do not buy, lease, or acquire mobile numbers from third-party brokers. Ingestion occurs via:' },
      { type: 'ul', items: [
        'Web Ingestion Contact Forms: Fields labeled "Corporate Phone" or "Mobile Number".',
        'Scheduling Interfaces (Calendly): Phone fields during appointment confirmations.',
        'Direct SMS Keyword Inbound Routing: Visitors texting START or ALERT to our verified numbers.'
      ]},
      { type: 'p', text: 'Captured data includes the mobile number, date/time, IP address, browser user-agent, and campaign description.' },

      { type: 'h2', text: '3. Opt-In Disclosure Protocols and Web Flow Alignment' },
      { type: 'h3', text: 'A. The Separation Rule' },
      { type: 'p', text: 'SMS opt-in is a separate, isolated registration. It is never bundled within master Terms of Service or email marketing registrations.' },
      { type: 'h3', text: 'B. The Unchecked Checkbox Framework' },
      { type: 'p', text: 'Users must check an unchecked, voluntary checkbox displaying the carrier-approved disclosure regarding automated transactional messages, frequency, rates, and opt-out instructions.' },
      { type: 'h3', text: 'C. Validation Procedures' },
      { type: 'p', text: 'If the SMS consent checkbox is left blank, GoHighLevel flags the record as "SMS Opt-Out (No Consent)" and blocks all outgoing texts unless a new verification is completed.' },

      { type: 'h2', text: '4. Strict SMS Consent Non-Sharing Guarantee' },
      { type: 'blockquote', text: 'All mobile phone numbers collected by AJAX Global LLC, and all associated SMS consent records or opt-in verification logs, are strictly confidential and will not be shared with, sold to, or rented to any third parties, affiliates, business partners, or external contractors for marketing or promotional purposes under any circumstances.' },

      { type: 'h2', text: '5. Technical Telemetry and Database Mapping in GoHighLevel' },
      { type: 'ol', items: [
        'Field Isolation: Mobile numbers are stored in a dedicated {{contact.phone}} field, separated from general business directories.',
        'Consent Logging: Opt-in actions trigger automated workflows recording timestamp, form URL, and opt-in text under {{contact.sms_consent_history}}.',
        'Active DND Tagging: STOP replies automatically toggle the DND tag to True, blocking future automated SMS delivery.'
      ]},

      { type: 'h2', text: '6. Authorized Transactional and Systemic Message Outlines' },
      { type: 'p', text: 'We do not send bulk promotional broadcasts. Messages are restricted to B2B use cases:' },
      { type: 'ul', items: [
        'Consulting Scheduling Alerts: Confirmations, video links, and 24-hour reminders.',
        'Automation Project Updates: Development and diagnostic notifications.',
        'BPO Coordination Logs: Task handoffs and virtual assistant logging verification.',
        'Customer Support Responses: Technical tickets, bugs, and security inquiries.'
      ]},

      { type: 'h2', text: '7. Granular Data Retention, Archival, and Sanitization Matrix' },
      { type: 'table', headers: ['Data Category', 'Retention Period', 'Justification', 'Disposal Method'], rows: [
        ['Mobile Number Identifier', 'Active contract + 7 years', 'Recordkeeping and audits', 'Cryptographic erasure'],
        ['SMS Opt-In Consent Logs', '5 years post-cancellation', 'TCPA statute-of-limitation', 'Archiving and truncation'],
        ['Transactional SMS Content', '12 months', 'Dispute resolution', 'Log rotation and deletion'],
        ['System Delivery Metadata', '6 months', 'Performance analysis', 'Automatic system purges']
      ]},
      { type: 'p', text: 'If you request deletion, we remove mobile details within 30 calendar days, retaining only an anonymized cryptographic hash to prevent accidental re-enrollment.' },

      { type: 'h2', text: '8. Technical Safeguards for the Protection of Telecom Logs' },
      { type: 'ul', items: [
        'Multi-Factor Authentication (MFA) mandated across CRM, telecom dashboards, and servers.',
        'AES-256 encryption at rest and TLS 1.3 in transit.',
        'Role-Based Access Controls (RBAC) restricting access to authorized personnel.',
        'Annual vendor compliance audits of GoHighLevel, Calendly, and Cloudflare.'
      ]},

      { type: 'h2', text: '9. Unsubscribe Protocols and Keyword Triggers' },
      { type: 'ul', items: [
        'Reply STOP to cancel at any time.',
        'Alternative keywords recognized: QUIT, CANCEL, END, UNSUBSCRIBE.',
        'System sends a final confirmation text upon opt-out.',
        'Email requests accepted at info@ajaxglobal.com with subject "SMS Opt-Out Request".'
      ]},

      { type: 'h2', text: '10. Statutory Compliance Foremanship (TCPA, FCC, CTIA, CO)' },
      { type: 'ul', items: [
        'TCPA: No automated texts without prior verifiable written consent.',
        'FCC: Brand identity verified, campaigns registered, approved network routes used.',
        'CTIA: Opt-in disclosures, unsubscribe options, and help commands aligned with best practices.',
        'Colorado: Consumer rights respected; residents may opt out of automated profiling.'
      ]},

      { type: 'h2', text: '11. Verification Guidelines and Carrier Registration Roster' },
      { type: 'p', text: 'We register messaging campaigns with the Campaign Registry (TCR) through verified CSPs. Registration includes legal business name, Denver headquarters address, live website link, declared use cases, opt-in checkboxes, and sample message templates to secure carrier approval (AT&T, T-Mobile, Verizon).' },

      { type: 'h2', text: '12. Corporate Governance and Auditing Procedures' },
      { type: 'p', text: 'We conduct periodic audits of databases, form integrations, and CRM communications. We reserve the right to modify this Policy at any time. Changes are posted on the Website with an updated Effective Date. Continued participation constitutes acceptance.' },

      { type: 'h2', text: '13. Mobile Compliance Officer and Inquiry Channels' },
      { type: 'p', text: 'Corporate Entity: AJAX Global LLC. Address: 1500 N. Grant St., Suite R, Denver, CO 80203. Compliance Email: info@ajaxglobal.com' }
    ]
  },

  {
    id: 'website-disclaimer',
    title: 'Website Disclaimer',
    effectiveDate: 'January 1, 2026',
    description: 'Legal boundaries for informational content on our website.',
    blocks: [
      { type: 'h2', text: '1. Purpose and Acceptance of Disclaimer' },
      { type: 'p', text: 'This Website Disclaimer establishes legal boundaries for informational resources, case studies, software descriptions, and communications on https://ajaxglobal.com. By visiting, browsing, or submitting information, you agree to this Disclaimer, our Terms of Service, and our Privacy Policy. If you do not agree, cease access immediately.' },

      { type: 'h2', text: '2. No Professional Advice Disclosures (Legal, Financial, Tax)' },
      { type: 'ul', items: [
        'Informational Purpose Only: Materials are for general information and business advancement, not licensed professional advice.',
        'Legal Advice Disclaimer: We are not a law firm. Evaluate compliance structures with your independent legal counsel.',
        'Financial Advice Disclaimer: We do not offer investment, banking, or asset valuation advice.',
        'Tax Disclaimer: Cost projections are illustrative only. Consult a CPA for tax implications.'
      ]},

      { type: 'h2', text: '3. No Guarantee of Business Results or Performance' },
      { type: 'ul', items: [
        'No Income Guarantees: We disclaim guarantees regarding lead volumes, conversion rates, revenue, or ROI.',
        'Historical Case Studies: Past results represent unique outcomes, not promises of identical performance.',
        'Operational Variables: Performance depends on market dynamics, product-market fit, sales execution, and external factors.'
      ]},

      { type: 'h2', text: '4. Artificial Intelligence and Generative Content Disclaimer' },
      { type: 'ul', items: [
        'Output Variability: Generative AI may produce factual inaccuracies, logic errors, or hallucinations.',
        'Mandatory Review: Clients must implement "human-in-the-loop" review before deploying AI outputs.',
        'No IP Warranties: We make no warranties that AI-generated content is free from third-party copyright claims.'
      ]},

      { type: 'h2', text: '5. Third-Party Links and Integrated Software Services' },
      { type: 'p', text: 'Our Website integrates with GoHighLevel, Calendly, Google Workspace, Microsoft 365, Cloudflare, Meta Platforms, and various APIs. We have no control over their policies, reliability, or availability and are not liable for their downtime, deprecations, or errors.' },

      { type: 'h2', text: '6. Accuracy, Completeness, and Timeliness of Information' },
      { type: 'p', text: 'All content is provided "as is" without warranties of completeness, accuracy, or uninterrupted availability. We reserve the right to correct errors and update content without notice.' },

      { type: 'h2', text: '7. Limitation of Liability and Exclusion of Warranty' },
      { type: 'p', text: 'To the maximum extent permitted by Colorado law, we will not be liable for indirect, consequential, or punitive damages, including lost profits, data corruption, CRM leaks, telecommunications interruptions, or carrier blocks. We disclaim all warranties, express or implied, including merchantability, fitness for purpose, and non-infringement.' },

      { type: 'h2', text: '8. Client Responsibility and Independent Compliance Obligations' },
      { type: 'p', text: 'You retain ultimate responsibility for your legal, regulatory, and financial operations. You are solely responsible for verifying compliance with TCPA, CPA, and CPRA; protecting API credentials and logins; and ensuring any lead lists you upload were collected with proper consent.' },

      { type: 'h2', text: '9. Forward-Looking Statements and Projection Disclaimers' },
      { type: 'p', text: 'Statements regarding future trends and efficiencies are forward-looking and represent current assessments. Actual outcomes may differ materially due to technology changes, carrier restrictions, or market conditions. Do not rely on projections as binding promises.' },

      { type: 'h2', text: '10. Governing Law and Resolution of Interpretive Disputes' },
      { type: 'p', text: 'This Disclaimer is governed by Colorado law. Legal actions must be filed in Denver, Colorado, subject to the arbitration provisions in our Terms of Service.' },

      { type: 'h2', text: '11. Administrative Modifications and Updates' },
      { type: 'p', text: 'We may modify this Disclaimer at any time. Changes are posted with an updated Effective Date. Continued use constitutes acceptance.' },

      { type: 'h2', text: '12. Corporate Identification and Inquiry Details' },
      { type: 'p', text: 'AJAX Global LLC, 1500 N. Grant St., Suite R, Denver, CO 80203, United States. Email: info@ajaxglobal.com' }
    ]
  },

  
];