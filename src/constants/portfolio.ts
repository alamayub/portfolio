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
  Coffee,
  Workflow,
  Instagram,
} from 'lucide-react';

import profile from '../assets/profile.jpg';

export const PERSONAL_INFO = {
  name: "Ayub Alam",
  role: "Senior Full-Stack Software Engineer",
  shortIntro: "Designing and shipping scalable distributed systems across mobile and web with measurable product impact.",
  location: "Bengaluru, India",
  email: "alamayub85@gmail.com",
  // avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  avatar: profile,
  resumeUrl: "https://docs.google.com/document/d/1GOvXrkIbdPMktSYSRjwONh4oP1mhQjbx15xD3PGaSF4/edit?usp=sharing",
  socials: [
    { icon: Github, href: "https://github.com/alamayub/", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alamayub/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/imayubalam", label: "Instagram" },
    { icon: Mail, href: "mailto:alamayub85@gmail.com", label: "Email" }
  ]
};

export const ABOUT_ME = {
  title: "About Me",
  content: `Senior Full-Stack Engineer with 5+ years designing and shipping scalable distributed systems across mobile and web. I build with clean architecture, performance optimization, and strong engineering discipline so teams can ship reliably.

Led cross-functional teams of 5+ engineers, reduced deployment cycles by 30%, and delivered products supporting 1,000+ concurrent users. I solve real-time data, scaling, release velocity, and product performance problems across EdTech, media, and SaaS verticals.`,
  focus: [
    "Clean Architecture",
    "Performance Optimization",
    "Scalable Systems",
    "Product Impact"
  ]
};

export const TECH_STACK = [
  {
    category: "Languages",
    skills: [
      { name: "Dart", icon: Cpu },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Terminal },
      { name: "Python", icon: Bot },
      { name: "Java", icon: Coffee }
    ]
  },
  {
    category: "Mobile",
    skills: [
      { name: "Flutter", icon: Smartphone },
      { name: "Riverpod", icon: Layers },
      { name: "BLoC", icon: Layers },
      { name: "Responsive UI", icon: Globe }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: Globe },
      { name: "Vue.js", icon: Code2 },
      { name: "Tailwind CSS", icon: Zap },
      { name: "Redux/Vuex", icon: Layers }
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "Express", icon: Zap },
      { name: "WebSockets", icon: MessageSquare },
      { name: "REST APIs", icon: Globe },
      { name: "Firebase Functions", icon: Cloud }
    ]
  },
  {
    category: "Cloud & Databases",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Firestore", icon: Database },
      { name: "Docker", icon: Layers },
      { name: "AWS/GCP", icon: Cloud }
    ]
  },
  {
    category: "DevOps & Deployment",
    skills: [
      { name: "GitHub CI/CD", icon: Workflow },
      { name: "Fastlane", icon: Zap },
      { name: "Firebase", icon: Cloud },
      { name: "Netlify", icon: Globe },
      { name: "Cloudflare", icon: Cloud },
      { name: "Render", icon: Server },
      { name: "DigitalOcean", icon: Cloud },
      { name: "Play Store", icon: Smartphone },
      { name: "App Store", icon: Smartphone }
    ]
  }
];

export const PROJECTS = [
  {
    id: 7,
    title: "Coiffure M-va Salon",
    category: "Professional",
    description: "Modern salon management and online booking platform for premium hairstyling services.",
    tech: ["React", "Tailwind CSS", "Node.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
    features: ["Online Booking", "Service Catalog", "Stylist Management"],
    problem: "Modernizing customer bookings and service discovery for local businesses.",
    architecture: "React frontend with Firebase for real-time data and authentication.",
    github: "https://github.com/alamayub/coiffure_m-va_salon",
    live: "https://coiffuremeva.pages.dev/"
  },
  {
    id: 6,
    title: "LinkWise AI",
    category: "Personal",
    description: "Intelligence extraction engine for target websites using LLM-powered context parsing.",
    tech: ["TypeScript", "Gemini AI", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    features: ["URL Analysis", "Context-Aware Chat", "Market Analysis"],
    problem: "Extracting meaningful business intelligence from cluttered web content.",
    architecture: "Modular TypeScript codebase with server-side LLM processing.",
    github: "https://github.com/alamayub/linkwise_ai",
    live: "https://linkwiseai.pages.dev/"
  },
  {
    id: 1,
    title: "WeAreKids",
    category: "Professional",
    description: "Comprehensive school platform with role-based dashboards for Admin, Student, Teacher, and Principal users.",
    tech: ["MySQL", "Node.js", "Express", "React"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    features: ["Role-based Access", "Admin Dashboards", "Student Workflows"],
    problem: "Coordinating multi-stakeholder school operations within a single unified platform.",
    architecture: "Monolithic modular backend with specialized frontend role modules.",
    github: "#",
    live: "https://wearekids.in/"
  },
  {
    id: 2,
    title: "Pulkiss",
    category: "Personal",
    description: "Real-time synced video room with chat, groups, and Firebase-based moderation.",
    tech: ["Express", "Socket.IO", "React", "WebRTC"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    features: ["Synced YouTube", "Video Chat", "Admin Moderation"],
    problem: "Real-time synchronization of media playback across multiple clients with low latency.",
    architecture: "Stateful Socket.IO servers with in-memory group management.",
    github: "https://github.com/alamayub/pulkiss",
    live: "https://pulkiss-app.onrender.com/"
  },
  {
    id: 3,
    title: "Toeato Ecosystem",
    category: "Professional",
    description: "Multi-app food delivery monorepo spanning customer, admin, delivery, and restaurant apps.",
    tech: ["Flutter", "Node.js", "Socket.IO", "Firebase"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    features: ["Live Tracking", "Partner Management", "Real-time Notifications"],
    problem: "Scaling a 4-sided marketplace with high-velocity data and real-time state sync.",
    architecture: "Monorepo structure with shared packages and event-driven backend.",
    github: "https://github.com/alamayub/",
    live: "https://toeato.com/"
  },
  {
    id: 4,
    title: "AI Code Reviewer",
    category: "Personal",
    description: "AI-assisted code review platform powered by Google Gemini with Monaco integration.",
    tech: ["Node.js", "Gemini AI", "React", "Monaco"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
    features: ["CLI Tool", "VS Code Extension", "GitHub PR Bot"],
    problem: "Automating high-quality code reviews to reduce PR cycle times.",
    architecture: "Stateless backend proxying AI queries with code context analysis.",
    github: "https://github.com/alamayub/ai-code-review",
    live: "#"
  },
  {
    id: 5,
    title: "Ride App Monorepo",
    category: "Professional",
    description: "Uber-style ride-hailing platform with OTP-gated ride lifecycle and KYC.",
    tech: ["Node.js", "Socket.IO", "MySQL", "Flutter"],
    image: "https://images.unsplash.com/photo-1593950315186-76a92975b60c?auto=format&fit=crop&q=80&w=800",
    features: ["Ride Lifecycle", "KYC Systems", "Redis Caching"],
    problem: "Managing complex transactional states for rides while ensuring safety and speed.",
    architecture: "Distributed system with Redis-backed session management and SQL for persistency.",
    github: "https://github.com/alamayub/",
    live: "#"
  },
  {
    id: 8,
    title: "Nepal Health Sewa",
    category: "Professional",
    description: "Event-driven donor registry and campaign platform with real-time notifications.",
    tech: ["Vue.js", "Node.js", "Firestore", "Firebase Auth"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
    features: ["Donor Registry", "Campaign Management", "Real-time Alerts"],
    problem: "Coordinating blood donation campaigns and health registries efficiently.",
    architecture: "Event-driven architecture with Firebase integration.",
    github: "https://github.com/alamayub/nepal-health-sewa",
    live: "https://nepalhealthsewa.netlify.app/"
  },
  {
    id: 9,
    title: "FourCoders",
    category: "Personal",
    description: "Vue-based web project featuring a lightweight frontend architecture and modern build workflow.",
    tech: ["Vue", "Vuetify", "Vuex", "JavaScript"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    features: ["Clean UI", "State Management", "Modular Components"],
    problem: "Building a scalable and maintainable frontend foundation for dev tools.",
    architecture: "Vuex-based state management with modular Vuetify components.",
    github: "https://github.com/alamayub/fourcoders",
    live: "https://fourcoders.netlify.app/"
  }
];

export const EXPERIENCE = [
  {
    company: "Collective Artists Network India",
    role: "Senior Mobile App Developer",
    period: "Jan 2026 - Feb 2026",
    desc: "Built cross-platform Flutter apps with media-streaming SDKs and real-time WebSockets.",
    highlights: ["99%+ crash-free rate", "Reduced live feed latency"]
  },
  {
    company: "Kidvento Education",
    role: "Senior Software Engineer",
    period: "Jun 2024 - Dec 2025",
    desc: "Led a team of 5+ engineers across 10+ web and mobile products.",
    highlights: ["Reduced deployment time by 80%", "Shared component library saved 30% dev time"]
  },
  {
    company: "Kidvento Education",
    role: "Mobile Developer (Flutter)",
    period: "Oct 2022 - Jun 2024",
    desc: "Built Ulipsu Learning App serving 10,000+ students.",
    highlights: ["30% DAU engagement boost", "40% reduction in widget rebuilds"]
  },
  {
    company: "Agram Infotech",
    role: "Associate Software Engineer",
    period: "Nov 2020 - Oct 2022",
    desc: "Delivered 8+ production apps using Flutter, React, Vue, and Node.js.",
    highlights: ["40% improvement in team velocity", "25% query response optimization"]
  }
];

export const ROADMAP = [
  { goal: "B.Tech @ Lovely Professional University", status: "2016-2020" },
  { goal: "Agram Infotech: Full-stack Foundation", status: "2020-2022" },
  { goal: "Kidvento: EdTech Scale & Leadership", status: "2022-2025" },
  { goal: "Collective Artists Network: Media & Real-time", status: "2026" }
];

export const SERVICES = [
  { title: "Full-Stack Product", desc: "End-to-end implementation for web and mobile.", icon: Server },
  { title: "Flutter App Engineering", desc: "High-performance cross-platform mobile apps.", icon: Smartphone },
  { title: "Real-Time Systems", desc: "Event-driven socket architectures for collaboration.", icon: MessageSquare }
];

export const TESTIMONIALS = [
  { quote: "Extra Mile Award, Kidvento Education (2024)", author: "Award" },
  { quote: "Highflyer of the Month, Kidvento Education (2024)", author: "Recognition" },
  { quote: "Best Newcomer of the Year, Kidvento Education (2023)", author: "Recognition" }
];
