export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: { name: string; level: 'expert' | 'advanced' | 'proficient' }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend & Java Architecture',
    icon: 'Server',
    skills: [
      { name: 'Java 21', level: 'expert' },
      { name: 'Spring Boot', level: 'expert' },
      { name: 'Spring MVC', level: 'expert' },
      { name: 'Java EE / J2SE', level: 'expert' },
      { name: 'Hibernate', level: 'expert' },
      { name: 'REST APIs', level: 'expert' },
      { name: 'SOAP Web Services', level: 'advanced' },
      { name: 'SOA', level: 'advanced' },
      { name: 'Microservices', level: 'advanced' },
      { name: 'Custom Object Models', level: 'advanced' },
      { name: 'IBM WebSphere (WAS)', level: 'proficient' },
      { name: 'BPM Engine', level: 'proficient' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      { name: 'AWS (Developer & SysOps Certified)', level: 'advanced' },
      { name: 'Docker', level: 'advanced' },
      { name: 'Kubernetes', level: 'proficient' },
      { name: 'Terraform Fundamentals', level: 'proficient' },
      { name: 'CI/CD Pipelines', level: 'expert' },
      { name: 'Jenkins', level: 'advanced' },
      { name: 'AWS Lambda', level: 'advanced' },
      { name: 'DynamoDB', level: 'proficient' },
      { name: 'Amazon SQS / SNS', level: 'proficient' },
      { name: 'AWS IAM', level: 'advanced' },
      { name: 'AWS S3', level: 'advanced' },
      { name: 'Serverless Architecture', level: 'proficient' },
    ],
  },
  {
    id: 'automation',
    label: 'Automation Testing & BDD Frameworks',
    icon: 'ShieldCheck',
    skills: [
      { name: 'JUnit 5', level: 'expert' },
      { name: 'Mockito', level: 'expert' },
      { name: 'Cucumber (BDD)', level: 'advanced' },
      { name: 'TDD', level: 'advanced' },
      { name: 'SonarQube', level: 'advanced' },
      { name: 'Domain Driven Design', level: 'advanced' },
      { name: 'Agile / Scrum', level: 'expert' },
    ],
  },
  {
    id: 'data',
    label: 'Databases & Monitoring',
    icon: 'Database',
    skills: [
      { name: 'Oracle Database', level: 'expert' },
      { name: 'Microsoft SQL Server', level: 'advanced' },
      { name: 'MySQL', level: 'advanced' },
      { name: 'SQL Optimization', level: 'expert' },
      { name: 'Stored Procedures', level: 'expert' },
      { name: 'Transaction Management', level: 'expert' },
      { name: 'Kafka', level: 'proficient' },
      { name: 'Prometheus', level: 'proficient' },
      { name: 'Grafana', level: 'proficient' },
      { name: 'Splunk', level: 'proficient' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Build Systems',
    icon: 'Wrench',
    skills: [
      { name: 'Git / GitHub', level: 'expert' },
      { name: 'GitHub Copilot', level: 'advanced' },
      { name: 'Maven', level: 'expert' },
      { name: 'Gradle', level: 'advanced' },
      { name: 'IntelliJ IDEA', level: 'expert' },
      { name: 'Eclipse / STS', level: 'advanced' },
      { name: 'Postman', level: 'expert' },
      { name: 'SoapUI', level: 'advanced' },
      { name: 'JIRA', level: 'advanced' },
      { name: 'Rally', level: 'proficient' },
    ],
  },
  {
    id: 'web',
    label: 'Web & Client Technologies',
    icon: 'Globe',
    skills: [
      { name: 'JavaScript', level: 'advanced' },
      { name: 'AngularJS', level: 'proficient' },
      { name: 'HTML', level: 'advanced' },
      { name: 'XML', level: 'advanced' },
      { name: 'JSON', level: 'expert' },
      { name: 'Flutter', level: 'proficient' },
    ],
  },
  {
  id: 'ai',
  label: 'AI Infrastructure & LLM Optimization',
  icon: 'Zap', // or create a custom icon
  skills: [
    { name: 'Ollama', level: 'expert' },
    { name: 'Local LLM Infrastructure', level: 'expert' },
    { name: 'Model Quantization (Q5_K_M, Q4_K_M)', level: 'advanced' },
    { name: 'Prompt Engineering (One-Shot & Few-Shot)', level: 'advanced' },
    { name: 'Hardware Profiling & Optimization', level: 'advanced' },
    { name: 'LLM Benchmarking (Gemma, Qwen)', level: 'advanced' },
    { name: 'VS Code Extensions (Continue, Twinny)', level: 'advanced' },
    { name: 'Vercel Edge Deployment', level: 'proficient' },
    { name: 'GitHub Copilot Workflow', level: 'proficient' },
  ],
},
];

export interface CaseStudy {
  id: string;
  client: string;
  domain: string;
  project: string;
  duration: string;
  period: string;
  techStack: string[];
  summary: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  leadership: string[];
}

export const caseStudies: CaseStudy[] = [
  {
  id: 'ai-infrastructure-pipeline',
  client: 'Personal Infrastructure Project / Portfolio Expansion',
  domain: 'AI Infrastructure & Development Automation',
  project: 'AI-Assisted Full-Stack Development Pipeline',
  duration: 'June 2026 — Present',
  period: '4+ months',
  techStack: ['Ollama', 'Qwen 2.5-Coder 1.5B','Qwen 2.5-Coder 7B', 'Gemma 3' ,'CodeLlama 13B', 'Phi 3.5', 'Vercel', 'GitHub', 'VS Code (Continue/Twinny)', 'Vite'],
  summary:
    'Engineered an end-to-end AI-assisted development infrastructure spanning private local LLM inference (Ollama), and automated deployment pipelines (GitHub → Vercel). Demonstrated full control over model optimization, data privacy, and infrastructure automation.',
  metrics: [
    { label: 'Token Generation Speed', value: '120-150 t/s' },
    { label: 'RAM Buffer (13GB usable)', value: '6.5 GB reserved' },
    { label: 'API Response Improvement', value: '50-150ms' },
    { label: 'Deployment Automation', value: 'Zero-touch CI/CD' },
  ],
  highlights: [
    'Profiled hybrid CPU architecture (Intel U-series) and tuned Ollama num_thread parameter to avoid E-core bottlenecks and thermal throttling, achieving consistent token generation performance',
    'Designed split-responsibility inference workflow: 7B Qwen model for multi-file reasoning + code synthesis, 4B Gemma for low-latency inline autocompletion via VS Code extensions',
    'Configured Ollama on decoupled compute server (0.0.0.0:11434) for LAN access, enabling VS Code extensions (Continue/Twinny) to route heavy tasks to remote 7B model while reserving local 4B for fast completions',
    'Mastered one-shot prompt engineering for web AI platforms',
    'Implemented data governance protocols: anonymized client metadata before uploading to cloud AI platforms; opted out of telemetry & model training to ensure privacy compliance',
    'Automated full CI/CD pipeline: Git commits trigger Vercel builds, which transpile TypeScript, bundle assets, and deploy globally across CDN edge nodes with zero downtime',
  ],
  leadership: [
    'Self-directed infrastructure design & optimization — researched quantization trade-offs, CPU threading behavior, and network topologies to architect scalable local inference',
    'Evaluated and integrated AI coding tools (Continue, Twinny, Cline, Windsurf) — diagnosed tool-calling issues with Instruct models and resolved raw JSON output bugs',
    'Documented end-to-end workflow (GitHub→Vercel deployment pipeline) as a case study for replicable AI-assisted development practices',
    'Demonstrated architectural thinking by decoupling inference compute from IDE, enabling horizontal scaling and multi-machine orchestration',
  ],
},
  {
    id: 'wholesale-banking-platform',
    client: 'Major UAE Commercial Bank',
    domain: 'Wholesale Credit & Banking',
    project: 'Enterprise Wholesale Credit Approval Platform Modernization',
    duration: 'Feb 2025 — Present',
    period: '8+ months',
    techStack: ['Java 21', 'Spring Boot', 'Hibernate', 'Oracle', 'REST APIs', 'Flutter', 'Maven', 'Git'],
    summary:
      'Digitalized the end-to-end credit application lifecycle for a major UAE commercial bank — modernizing an outdated tech stack with automated workflows for application submission, evaluation, risk assessment, and decisioning. Implemented an e-filing system for digital document management and retrieval.',
    metrics: [
      { label: 'TAT Reduction', value: '30%' },
      { label: 'API Response Improvement', value: '60%' },
      { label: 'Response Time', value: '2s → 0.8s' },
      { label: 'Team Led', value: '4 devs' },
    ],
    highlights: [
      'Identified business gaps and translated stakeholder requirements into technical design specifications during on-site engagement in Dubai',
      'Designed and developed key modules: Customer Information, Facility, Security, Facility-Security Linkage, and ESG Certification',
      'Optimized API performance by shifting business logic to database-side stored procedures, cutting response time from 2s to 0.8s (60% improvement) in collaboration with the DBA team',
      'Engineered database interactions for scalability and reduced application server load',
      'Implemented an e-filing system for digital document management and retrieval',
    ],
    leadership: [
      'Managed a team of 4 developers — assigned workloads, reviewed deliverables, and ensured on-time customer delivery',
      'Served as primary technical liaison for customer escalations and requirement clarifications',
      'Conducted performance evaluations and identified training needs to maintain team competence',
      'Developed and implemented process improvements for cost effectiveness and time efficiency',
    ],
  },
  {
    id: 'insurej',
    client: 'Leading Global Insurance Platform',
    domain: 'Enterprise Insurance (P&C)',
    project: 'InsureJ — Enterprise Insurance Platform Modernization',
    duration: 'Jan 2019 — Feb 2025',
    period: '6 years',
    techStack: ['Java EE', 'SOA', 'Oracle Database', 'Spring', 'SOAP/REST APIs', 'EJB', 'AngularJS', 'JIRA', 'Git'],
    summary:
      'Led the modernization and maintenance of an enterprise-scale general and property & casualty insurance platform built on Java EE and Service-Oriented Architecture with an Oracle Database backend. Focused on resolving critical production issues, eliminating database concurrency bottlenecks, and optimizing SQL performance for multi-tenant insurance operations.',
    metrics: [
      { label: 'Query Speed Improvement', value: '40%' },
      { label: 'Team Led', value: '8 members' },
      { label: 'Deadlock Incidents', value: 'Eliminated' },
      { label: 'Duration', value: '6 years' },
    ],
    highlights: [
      'Diagnosed and resolved critical concurrency and database deadlock issues affecting production insurance transactions; implemented locking strategies and transaction management improvements',
      'Optimized Oracle SQL performance — identified and refactored inefficient queries, reducing average query execution time by 40% and eliminating recurring database deadlock incidents',
      'Architected and implemented Java EE services within the SOA framework, ensuring loose coupling and improved platform scalability',
      'Conducted performance profiling and root-cause analysis on database deadlock patterns; documented and implemented prevention strategies',
    ],
    leadership: [
      'Led a cross-functional team of 8 developers and business analysts executing agile sprint deliverables',
      'Managed sprint planning, backlog prioritization, and technical design reviews; ensured alignment between development and business requirements',
      'Primary technical contact for stakeholder escalations; translated business impact into technical remediation priorities',
      'Performed code reviews, mentoring, and performance evaluations; identified and addressed technical skill gaps',
    ],
  },
  {
    id: 'teamconnect-mitratech',
    client: 'Enterprise Legal Tech Provider',
    domain: 'Legal Management (ELM)',
    project: 'TeamConnect — Enterprise Legal Management Platform',
    duration: 'May 2017 — Jan 2019',
    period: '1 year 8 months',
    techStack: ['Java', 'Java EE', 'SQL Server', 'Custom Object Models', 'BPM Engine', 'REST APIs', 'Agile/Scrum', 'Rally'],
    summary:
      'Maintained and enhanced an enterprise-scale Legal Management platform serving corporate legal departments and legal operations teams. The platform centralized matter management, legal spend tracking, e-billing, and compliance workflows into a unified system built on Java/Java EE architecture with robust SQL Server backends and an integrated BPM engine for workflow automation.',
    metrics: [
      { label: 'Team Led', value: '5 devs' },
      { label: 'Platform Type', value: 'Multi-tenant SaaS' },
      { label: 'BPM Workflows', value: 'Automated' },
      { label: 'Duration', value: '~1.7 years' },
    ],
    highlights: [
      'Led a 5-member development team on platform enhancements and maintenance for a multi-tenant ELM solution supporting enterprise legal departments',
      'Established and enforced coding standards and architectural best practices across the team; conducted code reviews to ensure quality and maintainability',
      'Diagnosed system errors by reading Tomcat server logs and using Java debugging tools to track down null pointer exceptions or broken lookup rules',
      'Leveraged custom object models and integrated BPM engine for workflow automation across matter management, legal spend, e-billing, and compliance',
    ],
    leadership: [
      'Mentored team on Java/Java EE best practices and object model design patterns',
      'Primary technical contact for legal operations stakeholders; translated compliance and matter management requirements into technical implementations',
    ],
  },
  {
    id: 'legal-customizations-platform',
    client: 'Enterprise Legal Operations Clients',
    domain: 'Legal Management Customization',
    project: 'Multi-Client Enterprise Legal Platform Customizations',
    duration: 'Mar 2012 — Apr 2017',
    period: '5 years',
    techStack: ['Core Java', 'Java EE', 'Oracle', 'SQL Server', 'Hibernate', 'Spring MVC', 'REST APIs', 'BPM Engine', 'CI/CD', 'Git'],
    summary:
      'Led an onshore-offshore development team on multiple customization and enhancement projects for an enterprise legal management platform used by corporate legal departments to manage litigation, contracts, intellectual property, product claims, and compliance matters. Supported multi-client customizations on a Java/Java EE platform.',
    metrics: [
      { label: 'Team Led', value: '8 members' },
      { label: 'Client Migrations', value: 'Multiple' },
      { label: 'Data Downtime', value: 'Zero' },
      { label: 'Duration', value: '5 years' },
    ],
    highlights: [
      'Architected and developed core Java and REST API modules supporting litigation, contract management, product claims, and compliance workflows',
      'Executed data migration programs from legacy systems across multiple client implementations; ensured data integrity and zero downtime transitions',
      'Engineered product integrations within the platform ecosystem; collaborated with business analysts to define integration specifications',
      'Prioritized and resolved critical issues during testing and production phases; troubleshot defects to maintain timelines',
    ],
    leadership: [
      'Managed an 8-member onshore-offshore development team across multiple customization projects',
      'Managed tactical and strategic project initiatives including requirements analysis, solution design, and delivery coordination',
      'Managed task allocation, workload balancing, and status reporting; ensured accountability and on-time delivery',
      'Mentored new team members and conducted technical training on platform architecture, custom object models, and best practices',
      'Collaborated with project management on scheduling, resource planning, annual/mid-year performance evaluations, and client escalations',
    ],
  },
];

export interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  impact: string;
  tech: string[];
}

export const timeline: TimelineItem[] = [
  {
  id: 'ai-infrastructure-pipeline',
  company: 'Personal / Open Infrastructure',
  role: 'AI Infrastructure Architect',
  period: 'Sep 2024 — Present',
  duration: '4+ months',
  impact:
    'Built a hybrid local-to-cloud AI development pipeline using Ollama, and Vercel. Mastered LLM quantization, hardware optimization, and end-to-end CI/CD automation. Demonstrated data-privacy-first architecture with zero cloud data exposure for sensitive code.',
  tech: ['Ollama', 'Qwen 2.5-Coder', 'Gemma 3', 'phi 3.5', 'Vercel', 'GitHub Actions', 'TypeScript'],
  },
  {
    id: 'mphasis-wholesale-banking',
    company: 'Mphasis',
    role: 'Senior Developer / Tech Lead — Revamp',
    period: 'Feb 2025 — Present',
    duration: '8+ months',
    impact:
      'Leading the digital transformation of a Enterprise Wholesale Credit Approval Platform for a major UAE commercial bank. On-site engagement in Dubai for requirement gathering and architectural discussions. Cut API response time by 60% and reduced turnaround time by 30%.',
    tech: ['Java 21', 'Spring Boot', 'Oracle', 'Flutter'],
  },
  {
    id: 'mphasis-insurej',
    company: 'Mphasis',
    role: 'Senior Developer / Tech Lead — InsureJ Platform',
    period: 'Jan 2019 — Feb 2025',
    duration: '6 years',
    impact:
      'Led modernization of an enterprise-scale insurance platform. Resolved critical production deadlocks, optimized SQL by 40%, and led a cross-functional team of 8 across agile sprint deliverables for multi-tenant insurance operations.',
    tech: ['Java EE', 'SOA', 'Oracle', 'Spring'],
  },
  {
    id: 'mphasis-teamconnect',
    company: 'Mphasis',
    role: 'Senior Developer / Tech Lead — TeamConnect ELM',
    period: 'May 2017 — Jan 2019',
    duration: '1 year 8 months',
    impact:
      'Led a 5-member team enhancing a multi-tenant enterprise legal management platform. Established coding standards, enforced architectural best practices, and served as primary technical contact for legal operations stakeholders.',
    tech: ['Java EE', 'SQL Server', 'BPM Engine'],
  },
  {
    id: 'bebo-legal-customizations',
    company: 'Bebo Technologies',
    role: 'Team Lead / TeamConnect Customizations',
    period: 'Mar 2012 — Apr 2017',
    duration: '5 years',
    impact:
      'Managed an 8-member onshore-offshore team across multiple legal-tech client implementations. Architected REST API modules, executed zero-downtime legacy data migrations, and mentored team members on platform architecture.',
    tech: ['Core Java', 'Spring MVC', 'Hibernate', 'Oracle'],
  },
];

export interface Certification {
  name: string;
  type: 'external' | 'internal';
  url?: string;
}

export const certifications: Certification[] = [
  { name: 'Oracle Certified Java Professional 6', type: 'external', url: 'https://www.credly.com/badges/20bdec97-4aae-4a0d-87c5-aa5b54736094/public_url' },
  { name: 'AWS Certified Developer – Associate', type: 'external',  url: 'https://www.credly.com/badges/26c124c0-d6f4-449c-809a-1fff0f5a9799/public_url' },
  { name: 'AWS Certified SysOps Administrator – Associate', type: 'external',  url: 'https://www.credly.com/badges/10ee92b0-bfe5-4ef1-a4a5-0e6e5232a8e1/public_url' },
  { name: 'AWS Development', type: 'internal' },
  { name: 'AWS IAM', type: 'internal' },
  { name: 'AWS Lambda Foundations', type: 'internal' },
  { name: 'AWS Storage Offerings', type: 'internal' },
  { name: 'DynamoDB for Serverless Architectures', type: 'internal' },
  { name: 'Amazon S3', type: 'internal' },
  { name: 'Java Microservices', type: 'internal' },
  { name: 'Spring Framework', type: 'internal' },
  { name: 'AWS Technical Essentials', type: 'internal' },
  { name: 'GitHub Copilot (Essentials + Beginner + VSCode)', type: 'internal' },
  { name: 'Developing Serverless Applications', type: 'internal' },
  { name: 'Design and Analysis of Algorithms', type: 'internal' },
];

export interface ArchLayer {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  technologies: string[];
  decisions: string[];
}

export const archLayers: ArchLayer[] = [
  {
    id: 'flutter',
    name: 'Flutter Client',
    icon: 'Smartphone',
    tagline: 'Cross-platform UI — iOS, Android & Web',
    description:
      'A single Dart codebase renders the portfolio on mobile, tablet, and web. State management via Riverpod/Bloc, with Dio for HTTP and cached API responses for offline-first browsing.',
    technologies: ['Flutter 3', 'Dart 3', 'Riverpod', 'Dio', 'GoRouter'],
    decisions: [
      'Widget composition over inheritance for reusable UI cards',
      'Repository pattern abstracts data source (API / cache)',
      'Code-generated JSON serializers for type-safe DTOs',
      'Responsive LayoutBuilder adapts grid breakpoints per device',
    ],
  },
  {
    id: 'gateway',
    name: 'API Gateway',
    icon: 'Shuffle',
    tagline: 'Routing, auth & rate limiting',
    description:
      'Spring Cloud Gateway routes requests to microservices, validates JWT tokens, enforces rate limits per client, and aggregates responses for the Flutter frontend.',
    technologies: ['Spring Cloud Gateway', 'JWT', 'Redis (rate limit)', 'CORS'],
    decisions: [
      'Path-based routing to downstream microservices',
      'Global filters for auth, logging, and request tracing',
      'Token relay pattern forwards JWT to services',
      'Circuit breaker on downstream calls with fallback responses',
    ],
  },
  {
    id: 'services',
    name: 'Spring Boot Microservices',
    icon: 'Boxes',
    tagline: 'Domain-driven service layer',
    description:
      'Each business domain (Profile, Projects, Skills, Timeline) is an independent Spring Boot 3 service with its own H2/Postgres schema. Services expose REST APIs, communicate via Kafka events, and follow hexagonal architecture.',
    technologies: ['Spring Boot 3', 'Java 21', 'Spring Data JPA', 'Hibernate', 'MapStruct', 'OpenAPI 3'],
    decisions: [
      'Hexagonal architecture — ports & adapters isolate domain logic',
      'Domain events published to Kafka for cross-service communication',
      'MapStruct for compile-safe DTO ↔ Entity mapping',
      'Spring Profiles: dev (H2), prod (Postgres + Flyway migrations)',
      'Centralized exception handling with RFC 7807 Problem Details',
    ],
  },
  {
    id: 'data',
    name: 'Data & Persistence',
    icon: 'Database',
    tagline: 'Relational + messaging backbone',
    description:
      'PostgreSQL as the primary OLTP store with Flyway-managed migrations. Kafka for event-driven communication. Redis for caching and session storage. Stored procedures for performance-critical queries — mirroring optimization pattern.',
    technologies: ['PostgreSQL', 'Flyway', 'Kafka', 'Redis', 'Hibernate', 'Oracle (enterprise)'],
    decisions: [
      'Flyway versioned migrations with checksum validation',
      'Read-through cache on Redis for project/skill lookups',
      'Kafka topics: profile.updated, project.viewed, contact.submitted',
      'Stored procedures for complex aggregations to reduce app-server load',
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: 'Cloud',
    tagline: 'AWS-native CI/CD pipeline',
    description:
      'Dockerized services deployed to AWS EKS via GitHub Actions / Jenkins CI/CD. Terraform provisions infrastructure. Prometheus + Grafana for metrics, Splunk for log aggregation, and Kubernetes HPA for auto-scaling.',
    technologies: ['AWS EKS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus', 'Grafana', 'Splunk'],
    decisions: [
      'Blue-green deployments via Kubernetes for zero-downtime releases',
      'Terraform modules for VPC, EKS, RDS, and ElastiCache',
      'Liveness & readiness probes on every service container',
      'Centralized logging to Splunk with structured JSON logs',
      'GitHub Copilot integrated in IDE for accelerated development',
    ],
  },
];

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  service: string;
}

export const apiEndpoints: ApiEndpoint[] = [
  { method: 'GET', path: '/api/v1/profile', description: 'Fetch portfolio owner profile', service: 'profile-service' },
  { method: 'GET', path: '/api/v1/skills', description: 'List all skills with proficiency levels', service: 'skill-service' },
  { method: 'GET', path: '/api/v1/skills?level=expert', description: 'Filter skills by proficiency', service: 'skill-service' },
  { method: 'GET', path: '/api/v1/projects', description: 'List all case studies (anonymized)', service: 'project-service' },
  { method: 'GET', path: '/api/v1/projects/{id}', description: 'Get project detail with highlights & leadership', service: 'project-service' },
  { method: 'GET', path: '/api/v1/timeline', description: 'Fetch career timeline entries', service: 'timeline-service' },
  { method: 'POST', path: '/api/v1/contact', description: 'Submit contact form inquiry', service: 'notification-service' },
];

export const profile = {
  name: 'Kamal Kishore Rana',
  title: 'Java Technical Lead',
  experience: '14+ years',
  location: 'India | Dubai (on-site engagements)',
  summary:
    'Java Technical Lead with 14+ years of expertise architecting scalable enterprise solutions for banking, insurance, and legal-tech domains. Proven track record leading cross-functional teams, optimizing mission-critical systems, and delivering measurable business impact through modern engineering practices.',
  focus: 'Fintech & Banking',
  github: 'https://github.com/kamalrana',
  linkedin: 'https://www.linkedin.com/in/kamal-kishore-rana-26bb9921',
  email: 'kamalrana32@gmail.com',
};
