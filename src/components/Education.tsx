import { motion } from 'motion/react';
import { Section, SectionHeader, GlassCard, Badge } from './ui';
import { EDUCATION_DATA } from '../constants/portfolio';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export function Education() {
  const { degree, certifications, learningTracks } = EDUCATION_DATA;

  return (
    <Section id="learning">
      <div className="flex justify-center mb-6">
        <Badge variant="indigo">Foundation & Credentials</Badge>
      </div>
      <SectionHeader 
        title="Academic & Continuous Learning" 
        subtitle="Bridging formal computer science theory with modern production engineering practices."
      />

      {/* Academic Base & Coursework */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <div className="lg:col-span-7 space-y-8">
          <GlassCard className="border-indigo-500/20 bg-indigo-500/5 p-8 sm:p-10" hover={false}>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-indigo-500/20">
                <GraduationCap size={36} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <Badge variant="indigo" className="text-[10px] font-black uppercase tracking-widest px-3">
                    {degree.badge}
                  </Badge>
                  <span className="text-xs font-bold text-neutral-400">{degree.period}</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white mb-2 leading-tight">
                  {degree.title}
                </h4>
                <p className="text-lg text-indigo-600 dark:text-indigo-400 font-bold italic mb-1">
                  {degree.major}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 font-medium text-sm mb-6">
                  {degree.institution}
                </p>

                <div>
                  <h5 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 mb-3">
                    Key Computer Science Coursework:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {degree.coursework.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 size={14} className="text-indigo-500 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="p-8 border-l-4 border-indigo-500/30 dark:border-indigo-500/40 relative glass-card">
            <h4 className="text-neutral-900 dark:text-white font-black text-xl mb-3">The Autodidact Philosophy</h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed font-medium">
              Beyond university lecture halls, software engineering demands constant reinvention. I dedicate daily hours to dissecting distributed systems papers, profiling memory allocators in WebAssembly, exploring local-first CRDT protocols, and mastering LLM reasoning loops.
            </p>
          </div>
        </div>

        {/* Certifications & Badges */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="text-indigo-500" size={20} />
            <h4 className="text-xl font-black text-neutral-900 dark:text-white">Professional Certifications</h4>
          </div>
          {certifications.map((cert, idx) => (
            <GlassCard key={idx} className="p-6 border-indigo-500/10 hover:border-indigo-500/30 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded">
                  {cert.issuer}
                </span>
                <span className="text-xs font-bold text-neutral-400">{cert.year}</span>
              </div>
              <h5 className="text-base font-black text-neutral-900 dark:text-white mb-1.5 leading-snug">
                {cert.title}
              </h5>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">
                {cert.desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Active Specialization Tracks */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white mb-3">
            Active Engineering Specializations
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-2xl mx-auto font-medium">
            Deep-dive areas where I actively experiment, benchmark architectures, and contribute to production tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTracks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col p-8 border-neutral-200 dark:border-white/10 group/learn hover:border-indigo-500/40">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover/learn:scale-110 group-hover/learn:bg-indigo-600 group-hover/learn:text-white transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <h5 className="text-lg font-black text-neutral-900 dark:text-white mb-2 tracking-tight">
                  {item.title}
                </h5>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
