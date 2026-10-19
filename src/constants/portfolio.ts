import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Cpu, 
  Github, 
  Linkedin, 
  Mail, 
  Layers,
  Zap,
  MessageSquare,
  Bot,
  Terminal,
  Server,
  Workflow,
  Instagram,
  Monitor,
  Shield,
  BookOpen
} from 'lucide-react';

import profile from '../assets/profile.jpg';

export const PERSONAL_INFO = {
  name: "Ayub Alam",
  role: "Senior Full-Stack Software Engineer",
  shortIntro: "Designing and shipping scalable distributed systems across mobile, desktop, and web with measurable product impact.",
  location: "Bengaluru, India",
  email: "alamayub85@gmail.com",
  avatar: profile,
  resumeUrl: "https://docs.google.com/document/d/1GOvXrkIbdPMktSYSRjwONh4oP1mhQjbx15xD3PGaSF4/edit?usp=sharing",
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Production Apps" },
    { value: "10k+", label: "Active Users Served" },
    { value: "99.9%", label: "Crash-Free Stability" }
  ],
  socials: [
    { icon: Github, href: "https://github.com/alamayub/", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alamayub/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/imayubalam", label: "Instagram" },
    { icon: Mail, href: "mailto:alamayub85@gmail.com", label: "Email" }
  ]
};

export const ABOUT_ME = {
  title: "About Me",
  content: `Senior Full-Stack Engineer with 5+ years of hands-on expertise designing, building, and deploying scalable distributed systems across mobile, desktop, and web. I bridge the gap between rigorous systems architecture and fluid, delightful user experiences.

Throughout my career, I have led high-velocity engineering squads of 5+ developers, orchestrated CI/CD pipelines that reduced release cycles by 80%, and engineered products serving over 10,000 active students and enterprise users. My engineering philosophy centers on clean architecture, deterministic state management, offline-first reliability, and high-concurrency event-driven backends.

From architecting offline-first desktop POS engines using Tauri & SQLite to scaling real-time WebSocket communication and LLM-powered context engines, I thrive on tackling difficult technical challenges and converting complex business requirements into maintainable, production-ready software.`,
  focus: [
    "Clean & Domain-Driven Architecture",
    "Offline-First Distributed Sync",
    "Cross-Platform Systems (Flutter & Tauri)",
    "High-Concurrency Real-Time WebSockets",
    "AI Agent Orchestration & LLM Workflows",
    "Performance Profiling & Latency Optimization",
    "Automated CI/CD & Cloud Infrastructure",
    "Engineering Leadership & Mentorship"
  ],
  principles: [
    {
      title: "Pragmatic Architecture",
      desc: "Favor simplicity, modularity, and explicit domain boundaries over premature abstraction."
    },
    {
      title: "Zero-Latency Mindset",
      desc: "Obsess over sub-100ms response times, 60fps UI animations, and efficient database indexing."
    },
    {
      title: "Resilience by Default",
      desc: "Build with offline tolerance, exponential backoff, transaction safety, and graceful degradation."
    },
    {
      title: "Velocity Through Rigor",
      desc: "Automated pipelines, comprehensive tests, and clean code reduce technical debt and maximize velocity."
    }
  ]
};

export const TECH_STACK = [
  {
    category: "Languages",
    skills: [
      { name: "Dart", icon: Cpu },
      { name: "TypeScript", icon: Terminal },
      { name: "JavaScript (ES6+)", icon: Code2 },
      { name: "Python", icon: Bot },
      { name: "SQL", icon: Database },
      { name: "HTML5 / CSS3", icon: Globe }
    ]
  },
  {
    category: "Mobile & Desktop",
    skills: [
      { name: "Flutter", icon: Smartphone },
      { name: "Tauri", icon: Monitor },
      { name: "Riverpod", icon: Layers },
      { name: "BLoC", icon: Layers },
      { name: "SQLite / Drift", icon: Database },
      { name: "Responsive UI", icon: Globe }
    ]
  },
  {
    category: "Frontend Engineering",
    skills: [
      { name: "React 19", icon: Globe },
      { name: "Vue.js", icon: Code2 },
      { name: "Tailwind CSS", icon: Zap },
      { name: "Redux Toolkit", icon: Layers },
      { name: "Framer Motion", icon: Zap },
      { name: "Vite", icon: Workflow }
    ]
  },
  {
    category: "Backend & Real-Time",
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "Express", icon: Zap },
      { name: "WebSockets / Socket.IO", icon: MessageSquare },
      { name: "RESTful APIs", icon: Globe },
      { name: "Firebase Cloud Functions", icon: Cloud },
      { name: "Redis Caching", icon: Database }
    ]
  },
  {
    category: "Cloud & Databases",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Firebase Firestore", icon: Database },
      { name: "Docker", icon: Layers },
      { name: "AWS & GCP", icon: Cloud }
    ]
  },
  {
    category: "DevOps & Tooling",
    skills: [
      { name: "GitHub Actions CI/CD", icon: Workflow },
      { name: "Fastlane", icon: Zap },
      { name: "Cloudflare Pages", icon: Cloud },
      { name: "Render", icon: Server },
      { name: "DigitalOcean", icon: Cloud },
      { name: "Play Store & App Store", icon: Smartphone }
    ]
  },
  {
    category: "AI & Modern Systems",
    skills: [
      { name: "Google Gemini API", icon: Bot },
      { name: "LLM Context Parsing", icon: Bot },
      { name: "RAG & Vector Search", icon: Database },
      { name: "Monaco Code Editor", icon: Terminal },
      { name: "WebAssembly (WASM)", icon: Cpu },
      { name: "Prompt Engineering", icon: Zap }
    ]
  }
];

export const PROJECTS = [
  {
    id: 10,
    title: "StockForge",
    category: "Professional",
    description: "Fully offline cross-platform desktop inventory management and sales tracking system built for Linux, macOS, and Windows.",
    tech: ["Tauri", "React", "TypeScript", "Node.js", "Express", "SQLite", "Firebase"],
    image: "https://stockforge.pages.dev/og-image.svg",
    features: [
      "100% Offline-First SQLite Storage with ACID Transactions",
      "High-Speed Point of Sale & Barcode Scanning",
      "Multi-Unit Inventory Control (kg, litre, pcs, cartons)",
      "Customer Khata Ledger with Balance Tracking",
      "Thermal Receipt & A4 Invoice Generation",
      "Cross-Platform Native Desktop Shell (Linux, macOS, Windows)"
    ],
    problem: "Retailers in regions with unstable internet suffer checkout stoppages, lost transactions, and cloud subscription overhead with traditional SaaS POS solutions.",
    architecture: "Lightweight Tauri native desktop application combining a high-performance React/TypeScript frontend with embedded SQLite persistence and local Express service orchestration.",
    github: "https://github.com/alamayub/stockforge",
    live: "https://stockforge.pages.dev/"
  },
  {
    id: 11,
    title: "Ulipsu Learning App",
    category: "Professional",
    description: "Flagship 360° gamified EdTech platform serving 10,000+ active students with multi-tenant classroom sync and offline learning.",
    tech: ["Flutter", "Dart", "Firebase", "BLoC", "REST APIs", "AWS S3", "WebSockets"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    features: [
      "Interactive Multimedia Video Player with Progress Bookmarking",
      "Offline Content Caching with Hive & Local Storage",
      "Real-Time Multiplayer Quizzes & Live Leaderboards",
      "Comprehensive Student Progress Analytics for Teachers & Parents",
      "Multi-Tenant School Management & License Enforcement"
    ],
    problem: "Delivering rich video and gamified interactive coursework to students across varied mobile hardware and fluctuating cellular bandwidth without frame drops or sync errors.",
    architecture: "Clean layered architecture with BLoC state isolation, robust offline sync queues, secure AWS S3 video streaming, and Firestore real-time pub/sub notifications.",
    github: "https://github.com/alamayub/",
    live: "https://ulipsu.com/"
  },
  {
    id: 6,
    title: "LinkWise AI",
    category: "Personal",
    description: "Intelligence extraction engine for target websites using LLM-powered context parsing and multi-turn conversational agents.",
    tech: ["TypeScript", "Gemini AI", "React", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    features: [
      "Deep URL Content Extraction & Semantic Scraping",
      "Context-Aware Chat with Source Citation",
      "Competitive Market & Sentiment Analysis",
      "Exportable Executive Summaries & Markdown Reports",
      "Streaming Response Generation with Low-Latency Token Feed"
    ],
    problem: "Executives and developers waste hours manually skimming long web pages, technical whitepapers, and blogs to extract actionable strategic intelligence.",
    architecture: "Modular TypeScript application leveraging Google Gemini API with streaming responses, markdown synthesis, and responsive client-side caching.",
    github: "https://github.com/alamayub/linkwise_ai",
    live: "https://linkwiseai.pages.dev/"
  },
  {
    id: 7,
    title: "Coiffure M-va Salon",
    category: "Professional",
    description: "Modern salon management, stylist scheduling, and customer booking platform engineered for premium hairstyling brands.",
    tech: ["React", "Tailwind CSS", "Node.js", "Gemini AI", "Firebase Auth", "Firestore"],
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
    features: [
      "Real-Time Online Slot Booking & Stylist Calendars",
      "Dynamic Service Catalog with Dynamic Pricing",
      "AI-Powered Hairstyle Consultation Assistant",
      "Automated SMS & Email Appointment Reminders",
      "Role-Based Admin Dashboard for Revenue & Appointment Tracking"
    ],
    problem: "Manual phone-based booking resulted in scheduling conflicts, double bookings, and high customer friction for high-end boutique salons.",
    architecture: "React SPA paired with Firebase Firestore for real-time schedule locking, Firebase Authentication, and automated transactional notification handlers.",
    github: "https://github.com/alamayub/coiffure_m-va_salon",
    live: "https://coiffuremeva.pages.dev/"
  },
  {
    id: 2,
    title: "Pulkiss",
    category: "Personal",
    description: "Real-time synchronized video watch party platform with peer-to-peer WebRTC video rooms, group chat, and admin moderation.",
    tech: ["Node.js", "Express", "Socket.IO", "React", "WebRTC", "Firebase Auth"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    features: [
      "Sub-50ms Synchronized YouTube & Custom Video Playback",
      "Low-Latency WebRTC Video & Audio Conferencing",
      "Persistent Chat Rooms with Rich Reaction Emojis",
      "Host Controls: Kick, Mute, Video Queue Reordering",
      "Transient Room Codes with Zero Authentication Barrier for Guests"
    ],
    problem: "Remote friends and distributed teams struggled to watch instructional or entertainment media together with synchronized controls and lag-free chat.",
    architecture: "Stateful Socket.IO clustering with in-memory room state, event-driven timeline sync, and peer-to-peer WebRTC mesh routing for live video feeds.",
    github: "https://github.com/alamayub/pulkiss",
    live: "https://pulkiss-app.onrender.com/"
  },
  {
    id: 4,
    title: "AI Code Reviewer",
    category: "Personal",
    description: "Automated code intelligence and pull request review bot powered by Google Gemini with Monaco Editor integration.",
    tech: ["Node.js", "Gemini AI", "React", "Monaco Editor", "TypeScript"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    features: [
      "Multi-Language AST Analysis & Security Vulnerability Detection",
      "Embedded Monaco IDE with Inline Diff Annotations",
      "Performance & Big-O Complexity Evaluation",
      "Automated Suggestion Patches with One-Click Copy",
      "GitHub Webhook Handler for Autonomous PR Review Comments"
    ],
    problem: "Senior engineers spend substantial time reviewing repetitive syntax mistakes, edge cases, and security anti-patterns in junior PRs.",
    architecture: "Stateless backend proxy parsing abstract syntax structures, piping code contextual chunks to Gemini, and streaming syntax-highlighted review metrics to Monaco UI.",
    github: "https://github.com/alamayub/ai-code-review",
    live: "#"
  },
  {
    id: 5,
    title: "Ride App",
    category: "Professional",
    description: "High-concurrency on-demand ride-hailing platform featuring OTP-gated ride lifecycles, real-time driver tracking, and KYC.",
    tech: ["Node.js", "Socket.IO", "MySQL", "Flutter", "React", "Redis"],
    image: "https://images.unsplash.com/photo-1593950315186-76a92975b60c?auto=format&fit=crop&q=80&w=800",
    features: [
      "Live Geospatial Driver Dispatch & Dynamic ETA Calculation",
      "Cryptographic OTP-Gated Trip Commencement & Completion",
      "Automated Driver KYC Document Verification Pipeline",
      "In-App Fare Calculation with Surge & Distance Metrics",
      "Redis Geospatial Indexing for Sub-Second Driver Discovery"
    ],
    problem: "Managing state transitions for thousands of concurrent rides across noisy cellular networks requires atomic consistency and zero race conditions.",
    architecture: "Distributed Node.js microservice architecture with Redis geospatial pub/sub for location heartbeats and MySQL ACID transactions for fare reconciliation.",
    github: "https://github.com/alamayub/",
    live: "#"
  },
  {
    id: 1,
    title: "WeAreKids",
    category: "Professional",
    description: "Comprehensive school management ERP and LMS with distinct role-based portals for Admins, Teachers, Students, and Parents.",
    tech: ["MySQL", "Node.js", "Express", "React", "Flutter", "Firebase"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    features: [
      "Granular Role-Based Access Control (Admin, Principal, Teacher, Student)",
      "Automated Attendance Tracking via Biometrics & Mobile QR",
      "Digital Gradebooks, Report Card Generator, and Exam Scheduling",
      "Fee Payment Gateway Integration with Automated Receipts",
      "Mobile Companion App for Parents with Real-Time Push Alerts"
    ],
    problem: "School administration was bogged down by disconnected paper forms, uncoordinated spreadsheets, and delayed parent communications.",
    architecture: "Unified RESTful API backend serving tailored web portals for staff and mobile applications for parents, backed by normalized relational schemas in MySQL.",
    github: "#",
    live: "https://wearekids.in/"
  },
  {
    id: 3,
    title: "Toeato",
    category: "Professional",
    description: "Multi-sided food delivery platform monorepo spanning customer ordering, restaurant vendor portal, and rider dispatch apps.",
    tech: ["Flutter", "Dart", "Express", "Node.js", "Socket.IO", "Firebase", "Firestore"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    features: [
      "Live Order State Machine (Placed, Preparing, Picked Up, Delivered)",
      "Real-Time Rider GPS Route Tracking on Interactive Maps",
      "Restaurant Menu & Inventory Real-Time Out-of-Stock Toggles",
      "Split Dispatch Logic for Multi-Order Batching",
      "Instant Push Notifications via Firebase Cloud Messaging"
    ],
    problem: "Coordinating continuous location updates and order state consistency across four separate user personas simultaneously under high load.",
    architecture: "Shared Flutter monorepo with common domain packages, event-driven Node.js backend, and Firestore optimistic updates for offline resilience.",
    github: "https://github.com/alamayub/",
    live: "https://toeato.com/"
  },
  {
    id: 8,
    title: "Nepal Health Sewa",
    category: "Professional",
    description: "Emergency health service directory, verified blood donor registry, and medical campaign platform with geolocation matching.",
    tech: ["Vue.js", "Vuex", "Vuetify", "Node.js", "Firestore", "Firebase Auth"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
    features: [
      "Geolocation-Based Blood Donor Search by Group & Urgency",
      "Verified Hospital & Emergency Ambulance Directory",
      "Public Health Campaign Organizer & Volunteer Sign-Up",
      "Privacy-Guarded Donor Contact Shielding",
      "Real-Time Emergency Broadcast Push Notifications"
    ],
    problem: "Patients in urgent need of rare blood groups faced critical delays searching through unverified social media posts and fragmented phone lists.",
    architecture: "Lightweight reactive Vue SPA with Firestore real-time indexing, automated phone number privacy masking, and low-bandwidth asset optimization.",
    github: "https://github.com/alamayub/nepal-health-sewa",
    live: "https://nepalhealthsewa.netlify.app/"
  },
  {
    id: 9,
    title: "FourCoders",
    category: "Personal",
    description: "Lightweight developer productivity portal and interactive code utility suite featuring instant JSON formatting, diffing, and regex testing.",
    tech: ["Vue", "Vuetify", "Vuex", "JavaScript", "Vite"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    features: [
      "Client-Side JSON Schema Formatter & Validator",
      "Zero-Server Data Transmission for Sensitive Data Privacy",
      "Interactive Regex Sandbox with Real-Time Match Highlighting",
      "Base64, JWT, and URL Encoder/Decoder Utilities",
      "Dark/Light Theme with Instant State Persistence"
    ],
    problem: "Engineers often paste sensitive production payloads into untrusted third-party online formatters that log data to external servers.",
    architecture: "100% client-side privacy-first Vue architecture with Web Workers for heavy regex parsing without locking the main browser thread.",
    github: "https://github.com/alamayub/fourcoders",
    live: "https://fourcoders.netlify.app/"
  }
];

export const EXPERIENCE = [
  {
    company: "Collective Artists Network India",
    role: "Senior Mobile App Developer",
    period: "Jan 2026 - Present",
    desc: "Spearheading mobile engineering for high-concurrency interactive media platforms, architecting low-latency live streaming video pipelines, and driving real-time WebSocket interactions for 10,000+ simultaneous viewers.",
    highlights: [
      "Maintained a 99.2%+ crash-free session rate across high-traffic live broadcast events",
      "Integrated adaptive HLS/DASH streaming with sub-150ms real-time chat sync",
      "Architected offline state caching ensuring seamless video recovery during cellular dropouts",
      "Reduced cold start launch latency by 35% via lazy module initialization and bundle optimization"
    ],
    tech: ["Flutter", "Dart", "WebSockets", "Riverpod", "HLS Video", "AWS", "Fastlane"]
  },
  {
    company: "Kidvento Education",
    role: "Senior Software Engineer",
    period: "Jun 2024 - Dec 2025",
    desc: "Led a cross-functional squad of 5 engineers delivering 10+ web and mobile software products. Owned architectural decisions, database optimization, cloud infrastructure, and release velocity.",
    highlights: [
      "Engineered automated GitHub Actions & Fastlane CI/CD pipelines, slashing release cycles by 80% (from 2 days to under 30 minutes)",
      "Created a unified internal component library, reducing feature delivery turnaround time across teams by 30%",
      "Optimized MySQL relational queries and Firestore real-time listeners, boosting API response throughput by 45%",
      "Instituted strict code review guidelines, automated linting, and 85%+ test coverage standards across repositories"
    ],
    tech: ["React", "Flutter", "Node.js", "Express", "MySQL", "Firestore", "Docker", "GitHub Actions"]
  },
  {
    company: "Kidvento Education",
    role: "Mobile Developer (Flutter)",
    period: "Oct 2022 - Jun 2024",
    desc: "Engineered the flagship Ulipsu K-12 learning mobile application from early concept to production scale, serving over 10,000 active students and teachers nationwide.",
    highlights: [
      "Architected clean BLoC-based state management, reducing widget rebuilds by 40% and eliminating frame drops on low-end hardware",
      "Engineered offline-first content caching allowing rural students to download video modules and sync quiz scores automatically",
      "Drove a 30% increase in Daily Active User (DAU) engagement via gamified achievements, streak tracking, and live multiplayer quizzes",
      "Integrated secure in-app subscriptions and payment gateways with zero transaction discrepancies"
    ],
    tech: ["Flutter", "Dart", "BLoC", "Firebase", "REST APIs", "Hive Local DB", "Git"]
  },
  {
    company: "Agram Infotech",
    role: "Associate Software Engineer",
    period: "Nov 2020 - Oct 2022",
    desc: "Delivered 8+ client-facing web and mobile applications across e-commerce, healthcare, and logistics. Collaborated directly with stakeholders to turn requirements into production code.",
    highlights: [
      "Boosted team release velocity by 40% through reusable UI patterns and robust modular RESTful API architectures",
      "Optimized SQL query performance and database indexing, achieving a 25% query latency improvement under load",
      "Implemented secure authentication pipelines with JWT, OAuth2, and role-based permissions",
      "Integrated regional payment gateways (Stripe, eSewa, Khalti) and push notification systems with 99.8% reliability"
    ],
    tech: ["Flutter", "React", "Vue.js", "Node.js", "MySQL", "REST APIs", "Tailwind CSS"]
  }
];

export const EDUCATION_DATA = {
  degree: {
    title: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    period: "2016 - 2020",
    badge: "Honors Graduate",
    coursework: [
      "Data Structures & Algorithms",
      "Distributed Systems",
      "Database Management Systems (DBMS)",
      "Computer Networks & Protocols",
      "Object-Oriented Software Design",
      "Operating Systems & Concurrency"
    ]
  },
  certifications: [
    {
      title: "Google Cloud Platform Fundamentals",
      issuer: "Google Cloud",
      year: "2024",
      desc: "Core infrastructure, Compute Engine, Kubernetes, and Cloud Storage design."
    },
    {
      title: "Advanced Flutter & Dart Architecture",
      issuer: "Udemy / Google Developers Community",
      year: "2023",
      desc: "Deep dive into BLoC, Riverpod, clean architecture, and native platform channels."
    },
    {
      title: "Generative AI & LLM Systems Specialization",
      issuer: "DeepLearning.AI",
      year: "2024",
      desc: "Transformer architectures, RAG pipelines, prompt engineering, and API integration."
    },
    {
      title: "Full-Stack Web Development Professional",
      issuer: "Meta / Coursera",
      year: "2022",
      desc: "Advanced React, state management, RESTful microservices, and CI/CD automation."
    }
  ],
  learningTracks: [
    { title: "AI & LLM Orchestration", icon: Bot, desc: "Autonomous agent workflows, RAG, structured tool calling" },
    { title: "Distributed & Edge Systems", icon: Globe, desc: "High-throughput messaging, event sourcing, consensus" },
    { title: "Offline-First Persistence", icon: Database, desc: "SQLite WASM, CRDTs, optimistic UI synchronization" },
    { title: "Cloud-Native Infrastructure", icon: Cloud, desc: "Docker containerization, serverless edge, Kubernetes" },
    { title: "High-Frequency System Design", icon: BookOpen, desc: "Caching tiers, database sharding, latency minimization" },
    { title: "Defensive Security", icon: Shield, desc: "OWASP standards, zero-trust tokens, threat modeling" }
  ]
};

export const ROADMAP = [
  { 
    goal: "Offline-First Distributed Sync Protocols (CRDTs & SQLite)", 
    status: "Active Focus",
    desc: "Researching and implementing conflict-free replicated data types for peer-to-peer desktop & mobile sync."
  },
  { 
    goal: "Autonomous Multi-Agent AI Systems with Google Gemini", 
    status: "Active Focus",
    desc: "Building production agentic workflows with multimodal understanding and asynchronous tool execution."
  },
  { 
    goal: "Cross-Platform Desktop Native Architecture (Tauri 2.0)", 
    status: "In Progress",
    desc: "Engineering lightweight cross-platform desktop shells pairing React UI with Rust backend services."
  },
  { 
    goal: "High-Throughput WebRTC & Real-Time Media Optimization", 
    status: "Completed",
    desc: "Delivered sub-150ms real-time media streaming pipelines with adaptive bitrate and frame recovery."
  },
  { 
    goal: "Enterprise CI/CD & Automated Zero-Downtime Deployment", 
    status: "Completed",
    desc: "Reduced deployment cycles by 80% across production mobile and web suites with Fastlane & GitHub Actions."
  },
  { 
    goal: "Scalable Microservices with Node.js & Event-Driven Architecture", 
    status: "Completed",
    desc: "Architected resilient distributed backends handling thousands of concurrent authenticated requests."
  }
];

export const SERVICES = [
  { 
    title: "Full-Stack SaaS & Web Applications", 
    desc: "End-to-end web platforms engineered with React 19, TypeScript, Next.js, and scalable cloud microservices.",
    icon: Server 
  },
  { 
    title: "Cross-Platform Mobile Engineering", 
    desc: "High-performance production mobile applications for iOS & Android built with Flutter, BLoC, and 60fps animations.",
    icon: Smartphone 
  },
  { 
    title: "Offline-First Desktop Systems", 
    desc: "Native desktop solutions for Linux, macOS, and Windows leveraging Tauri, local SQLite, and zero cloud dependency.",
    icon: Monitor 
  },
  { 
    title: "Real-Time Distributed Backends", 
    desc: "High-concurrency event-driven WebSocket architectures, Redis pub/sub, and resilient REST/GraphQL APIs.",
    icon: MessageSquare 
  },
  { 
    title: "AI Integration & Agentic Workflows", 
    desc: "Gemini API integration, RAG vector pipelines, intelligent chatbots, and context extraction engines.",
    icon: Bot 
  },
  { 
    title: "DevOps & Cloud Architecture", 
    desc: "Automated CI/CD pipelines, Docker containerization, AWS/GCP infrastructure, and Play/App Store deployments.",
    icon: Workflow 
  }
];

export const TESTIMONIALS = [
  { 
    quote: "Ayub's ability to turn complex product requirements into scalable Flutter and web architectures is unmatched. He reduced our release cycle by weeks while elevating code standards across the entire engineering team.", 
    author: "Engineering Director",
    role: "Kidvento Education"
  },
  { 
    quote: "A rare engineer who balances deep systems thinking with an obsessive focus on user experience and UI fluidity. His real-time WebSocket implementations handled peak loads flawlessly without a single hitch.", 
    author: "CTO & Co-Founder",
    role: "Collective Artists Network"
  },
  { 
    quote: "Extra Mile Award (Kidvento Education, 2024): Recognized for exceptional technical leadership across 10+ web and mobile products and consistently exceeding production delivery goals.", 
    author: "Leadership Award",
    role: "Annual Excellence Honor"
  },
  { 
    quote: "Highflyer of the Month (2024): Awarded for optimizing core app rendering, reducing widget rebuilds by 40%, and maintaining 99%+ crash-free sessions across 10,000+ active student users.", 
    author: "Performance Honor",
    role: "Engineering Recognition"
  },
  { 
    quote: "Ayub is a true force multiplier. His clean architecture approach and shared component libraries cut our feature delivery turnaround time by over 30%, making our team drastically faster.", 
    author: "Lead Product Manager",
    role: "EdTech Division"
  }
];
