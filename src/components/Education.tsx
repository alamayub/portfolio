import { motion } from 'motion/react';
import { Section, SectionHeader, GlassCard, Badge } from './ui';
import { GraduationCap, Sparkles, BookOpen, Globe, Award } from 'lucide-react';

export function Education() {
  const learningArr = [
    { title: "AI & LLM Systems", icon: Sparkles, desc: "Neural networks & transformers" },
    { title: "Distributed Systems", icon: Globe, desc: "Consensus & scalability" },
    { title: "Cloud Native", icon: Award, desc: "Kubernetes & serverless" },
    { title: "System Design", icon: BookOpen, desc: "Architectural patterns" }
  ];

  return (
    <Section id="learning">
      <div className="flex justify-center mb-6">
        <Badge variant="indigo">Foundation</Badge>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <SectionHeader 
            title="Academic Base" 
            align="left"
            subtitle="Bridging formal computer science theory with cutting-edge engineering practice."
          />
          
          <div className="space-y-10 mt-12">
            <GlassCard className="border-indigo-500/20 bg-indigo-500/5 overflow-visible" hover={false}>
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-indigo-500/20">
                  <GraduationCap size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <Badge variant="indigo" className="mb-3 text-[10px] font-black uppercase tracking-widest px-3">Honors Program</Badge>
                  <h4 className="text-3xl font-black text-neutral-900 dark:text-white mb-2 leading-tight">B.Tech in Computer Science</h4>
                  <p className="text-xl text-neutral-500 dark:text-neutral-400 font-bold italic mb-4">Lovely Professional University</p>
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-black text-sm uppercase tracking-widest">
                    <span className="w-8 h-px bg-indigo-500" />
                    2016 - 2020 Graduate
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="p-10 border-l-4 border-indigo-500/30 dark:border-indigo-500/40 relative">
               <div className="absolute top-0 left-0 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl -ml-10 -mt-10" />
              <h4 className="text-neutral-900 dark:text-white font-black text-2xl mb-6">The Autodidact Path</h4>
              <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed font-semibold italic opacity-80">
                Beyond formal transcripts, I thrive on self-directed deep dives into high-concurrency systems, LLM fine-tuning, and modern state-management paradigms. Engineering is not just a degree—it's a lifelong search for efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {learningArr.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <GlassCard className="h-full flex flex-col p-10 border-neutral-200 dark:border-white/10 group/learn hover:border-indigo-500/40">
                <div className="w-14 h-14 rounded-[1.25rem] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-8 group-hover/learn:scale-110 group-hover/learn:bg-indigo-600 group-hover/learn:text-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h5 className="text-xl font-black text-neutral-900 dark:text-white mb-2 uppercase tracking-tight">{item.title}</h5>
                <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
