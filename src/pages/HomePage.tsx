import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Testimonials } from '../components/Testimonials';
import { Section, SectionHeader, GlassCard, Badge, Image } from '../components/ui';
import { PROJECTS, TECH_STACK, ABOUT_ME, PERSONAL_INFO } from '../constants/portfolio';
import { ArrowRight, Layers, Briefcase, GraduationCap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';

export function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 4);
  const featuredSkills = TECH_STACK;

  return (
    <div className="space-y-12">
      <SEO 
        title="Senior Full-Stack Software Engineer"
        description="Official portfolio of Ayub Alam. Senior Full-Stack Software Engineer specializing in Flutter, React, Tauri, Node.js, and AI-powered distributed systems."
      />
      {/* Hero Section */}
      <Hero />

      {/* Production Impact Stats Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 mb-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <GlassCard key={idx} className="p-6 text-center border-indigo-500/10 hover:border-indigo-500/30">
              <p className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-1">{stat.value}</p>
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Quick About Teaser */}
      <Section id="overview" className="pt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="indigo">At a Glance</Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
              Engineering High-Impact Systems Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Mobile, Desktop & Web</span>.
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed mb-8">
              {ABOUT_ME.content.split('\n\n')[0]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {ABOUT_ME.focus.slice(0, 6).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={16} className="text-indigo-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 shadow-md group"
            >
              Read Full Bio & Principles
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <GlassCard className="p-6 border-indigo-500/10 hover:border-indigo-500/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-white">5+ Years</h4>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Production Software Leadership</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-indigo-500/10 hover:border-indigo-500/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Layers size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-white">Multi-Platform</h4>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Flutter, React, Node.js, Tauri & SQLite</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-indigo-500/10 hover:border-indigo-500/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-white">Offline-First</h4>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Deterministic State & High Availability</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 border-indigo-500/10 hover:border-indigo-500/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-neutral-900 dark:text-white">B.Tech CS</h4>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Computer Science Honors Graduate</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* Featured Projects Highlight */}
      <Section id="featured-projects" className="py-16 bg-neutral-100/50 dark:bg-neutral-900/30">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <div>
            <Badge variant="indigo" className="mb-3">Featured Creations</Badge>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
              Flagship Projects
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 font-medium">
              Production desktop software, high-scale EdTech systems, real-time media, and AI integrations.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg glow-indigo group"
          >
            Explore All Projects ({PROJECTS.length})
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project) => (
            <GlassCard 
              key={project.id} 
              className="p-0 overflow-hidden border-transparent hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 2).map((t, i) => (
                      <Badge 
                        key={`${project.id}-${t}-${i}`} 
                        className="text-[9px] bg-neutral-950/60 backdrop-blur-md border-white/10 uppercase tracking-widest text-indigo-400"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-0.5 bg-indigo-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 font-medium text-xs line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between">
                <Link 
                  to="/projects"
                  className="flex items-center text-indigo-500 font-black text-xs uppercase tracking-widest gap-2 group-hover:translate-x-1 transition-transform"
                >
                  Details <ArrowRight size={14} strokeWidth={3} />
                </Link>
                {project.live && project.live !== "#" && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-bold text-neutral-400 hover:text-indigo-500 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Tech Stack Preview */}
      <Section id="tech-preview" className="py-16">
        <SectionHeader 
          title="Technical Arsenal" 
          subtitle="Modern frameworks, languages, and distributed infrastructure engineered for scale."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {featuredSkills.map((cat, idx) => (
            <GlassCard key={idx} className="p-6 border-indigo-500/10 hover:border-indigo-500/30">
              <h4 className="text-base font-black text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill: any, sIdx: number) => (
                  <Badge key={sIdx} variant="default" className="text-[11px] font-bold">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all shadow-md group"
          >
            Explore Complete Tech Stack
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to action section */}
      <Section id="cta" className="py-20">
        <div className="glass-card rounded-[2.5rem] p-10 md:p-16 border-indigo-500/30 text-center relative overflow-hidden bg-gradient-to-br from-indigo-950/20 via-neutral-950/40 to-neutral-950/80">
          <div className="relative z-10 max-w-3xl mx-auto">
            <Badge variant="indigo" className="mb-4">Ready to Collaborate?</Badge>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              Let's Build Something Exceptional Together.
            </h2>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-medium">
              Whether you need a high-performance cross-platform application, scalable cloud services, or AI integration, I'm ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl glow-indigo"
              >
                Start a Conversation
              </Link>
              <Link
                to="/experience"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                View Career Journey
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </Section>
    </div>
  );
}
