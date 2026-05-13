import { motion } from 'motion/react';
import { Section, SectionHeader, GlassCard, Badge } from './ui';
import { EXPERIENCE } from '../constants/portfolio';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience" className="bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="flex justify-center mb-6">
        <Badge variant="indigo">Career Roadmap</Badge>
      </div>
      <SectionHeader 
        title="Professional Journey" 
        subtitle="A proven track record of architecting scalable systems and leading high-performance engineering teams."
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-0">
        {/* Animated Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-neutral-200 dark:bg-white/5 md:-translate-x-1/2 rounded-full overflow-hidden">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />
        </div>

        <div className="space-y-24">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={`relative flex flex-col md:flex-row items-center gap-12 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Center Point */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 md:w-12 md:h-12 bg-white dark:bg-neutral-900 rounded-2xl border-4 border-indigo-500 md:transform md:-translate-x-1/2 z-10 flex items-center justify-center shadow-xl">
                <Briefcase size={idx === 0 ? 24 : 18} className="text-indigo-600 dark:text-indigo-400" />
                {idx === 0 && (
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-indigo-500 rounded-2xl -z-10"
                  />
                )}
              </div>

              <div className={`w-full md:w-[45%] flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <GlassCard className="w-full relative group/card border-transparent hover:border-indigo-500/30 overflow-visible">
                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 opacity-0 group-hover/card:opacity-100 transition-all duration-500 rotate-12 group-hover/card:rotate-0">
                    <Sparkles size={24} />
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="indigo" className="text-[10px] py-1">
                      {exp.period}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs font-black text-neutral-400 uppercase tracking-widest leading-none">
                      <Calendar size={12} strokeWidth={3} />
                      History
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-2 leading-tight">{exp.role}</h3>
                  <p className="text-lg text-indigo-600 dark:text-indigo-400 font-bold mb-6 italic">{exp.company}</p>
                  
                  <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-base font-medium leading-relaxed">
                    {exp.desc}
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {exp.highlights.map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-white/5 rounded-xl border border-neutral-100 dark:border-white/5 hover:border-indigo-500/20 transition-all group/item"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </div>
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
