/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'motion/react';
import { Section, SectionHeader, GlassCard, Badge } from './ui';
import { TECH_STACK } from '../constants/portfolio';

export function TechStack() {
  return (
    <Section id="skills" className="bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="flex justify-center mb-6">
        <Badge variant="indigo">Tech Stack</Badge>
      </div>
      <SectionHeader 
        title="Technical Arsenal" 
        subtitle="Exploring the boundaries of software engineering with a modern and scalable toolkit."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TECH_STACK.map((category: any, idx: number) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <GlassCard className="h-full p-10 border-indigo-500/0 hover:border-indigo-500/20 group/card bg-white dark:bg-neutral-900/50">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover/card:bg-indigo-500 group-hover/card:text-white transition-all duration-500 shadow-sm border border-indigo-500/10">
                  <span className="text-xl font-black">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-neutral-900 dark:text-white group-hover/card:translate-x-1 transition-transform mb-1">
                    {category.category}
                  </h3>
                  <div className="w-8 h-1 bg-indigo-500 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill: any) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 py-2.5 px-5 bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-white/10 hover:border-indigo-500/40 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl transition-all duration-500 group/skill cursor-default"
                  >
                    <skill.icon size={20} className="text-neutral-400 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors" />
                    <span className="text-sm font-black uppercase tracking-widest text-neutral-600 dark:text-neutral-400 group-hover/skill:text-neutral-900 dark:group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
