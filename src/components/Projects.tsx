import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section, SectionHeader, GlassCard, Badge, Image } from './ui';
import { PROJECTS } from '../constants/portfolio';
import { Github, ExternalLink, ArrowRight, X, Layers, Zap, Info } from 'lucide-react';
import { cn } from '../lib/utils';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTech, setActiveTech] = useState('All');

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const categories = ['All', 'Professional', 'Personal'];
  const allTech = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tech)))].sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return a.localeCompare(b);
  });

  const filteredProjects = PROJECTS.filter(project => {
    const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
    const techMatch = activeTech === 'All' || project.tech.includes(activeTech);
    return categoryMatch && techMatch;
  });

  return (
    <Section id="projects">
      <div className="flex justify-center mb-6">
        <Badge variant="indigo">Portfolio</Badge>
      </div>
      <SectionHeader 
        title="Featured Works" 
        subtitle="Exploring the intersections of AI, real-time data, and mobile excellence through high-impact engineering."
      />

      {/* Filters */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mr-2">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                activeCategory === cat 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                  : "bg-white dark:bg-white/5 text-neutral-500 hover:text-indigo-600 border border-neutral-200 dark:border-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mr-2">Tech Stack:</span>
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech(tech)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all",
                activeTech === tech
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30"
                  : "bg-white dark:bg-white/5 text-neutral-400 hover:text-neutral-600 dark:hover:text-white border border-neutral-200 dark:border-white/10"
              )}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group"
            >
            <GlassCard className="p-0 overflow-hidden border-transparent hover:border-indigo-500/50 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/20">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <Badge 
                      key={`${project.id}-${t}-${i}`} 
                      className="text-[9px] bg-neutral-950/50 backdrop-blur-md border-white/10 uppercase tracking-widest text-indigo-400"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-0.5 bg-indigo-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Case Study</span>
                </div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 font-medium text-sm line-clamp-2 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-indigo-500 font-black text-xs uppercase tracking-widest gap-2">
                    Open Project <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex gap-2">
                    <Github size={16} className="text-neutral-400 opacity-0 group-hover:opacity-100 transition-all delay-100" />
                    <ExternalLink size={16} className="text-neutral-400 opacity-0 group-hover:opacity-100 transition-all delay-200" />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-12 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-neutral-900/90 dark:bg-neutral-950/98 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="glass-card w-full max-w-6xl max-h-[90vh] z-10 border-indigo-500/30 rounded-[3rem] shadow-[0_0_100px_rgba(99,102,241,0.2)] overflow-hidden flex flex-col"
            >
              <div className="flex-1 overflow-y-auto w-full h-full">
                <div className="relative aspect-video sm:aspect-[21/8]">
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-8 right-8 p-3 bg-neutral-950/50 hover:bg-neutral-950 backdrop-blur-md rounded-2xl text-white transition-all duration-300 border border-white/20 z-10"
                  >
                    <X size={24} />
                  </motion.button>

                  <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="indigo" className="px-4 py-1.5 font-black uppercase text-xs tracking-widest">
                        Live Project
                      </Badge>
                    </div>
                    <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tight leading-none mb-4">{selectedProject.title}</h2>
                  </div>
                </div>

                <div className="p-10 sm:p-16">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                    <div className="lg:max-w-2xl">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-0.5 bg-indigo-500" />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400">Executive Summary</span>
                      </div>
                      <p className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-200 leading-[1.3] italic">
                        "{selectedProject.description}"
                      </p>
                    </div>
                    <div className="flex gap-4 w-full sm:w-auto">
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.github} 
                        className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-white/5 hover:bg-neutral-50 dark:hover:bg-white/10 border-2 border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white transition-all rounded-2xl font-black uppercase tracking-widest text-xs shadow-sm"
                      >
                        <Github size={20} />
                        Source Code
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={selectedProject.live} 
                        className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 transition-all rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl glow-indigo"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-3">
                          <Info size={18} strokeWidth={3} /> The Challenge
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-xl font-medium opacity-90">
                          {selectedProject.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-3">
                          <Layers size={18} strokeWidth={3} /> Architectural Insights
                        </h4>
                        <div className="glass-card p-8 border-indigo-500/10 bg-indigo-500/5">
                          <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed font-bold italic">
                            {selectedProject.architecture}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-12">
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-3">
                          <Zap size={18} strokeWidth={3} /> Core Capabilities
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {selectedProject.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 rounded-2xl group/feat">
                              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full group-hover/feat:scale-150 transition-transform" />
                              <span className="text-sm font-black text-neutral-800 dark:text-neutral-200 tracking-tight">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-indigo-500 mb-6">Technologies Integrated</h4>
                        <div className="flex flex-wrap gap-2.5">
                          {selectedProject.tech.map((t, i) => (
                            <Badge 
                              key={`tech-${t}-${i}`} 
                              className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-black uppercase text-[10px] tracking-[0.1em]"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
