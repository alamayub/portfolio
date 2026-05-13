/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'motion/react';
import { Section, SectionHeader, GlassCard, Badge } from './ui';
import { TESTIMONIALS } from '../constants/portfolio';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="flex justify-center mb-6">
        <Badge variant="indigo">Social Proof</Badge>
      </div>
      <SectionHeader 
        title="Client Trust" 
        subtitle="Endorsed by industry leaders and high-growth startups for delivering robust technical solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TESTIMONIALS.map((t: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <GlassCard className="h-full relative flex flex-col justify-between p-10 border-transparent hover:border-indigo-500/20 group/testi">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-indigo-500/5 dark:text-white/5 -rotate-12 group-hover/testi:text-indigo-500/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-indigo-500 text-indigo-500" />
                  ))}
                </div>
                <p className="text-xl text-neutral-800 dark:text-neutral-200 font-bold italic mb-12 leading-[1.6]">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-neutral-100 dark:border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center font-black text-white text-lg shadow-lg rotate-3 group-hover/testi:rotate-0 transition-transform">
                  {t.author.split(' ').map((n: any[]) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-lg text-neutral-900 dark:text-white font-black leading-none mb-2">{t.author}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-indigo-500/50" />
                    <p className="text-[10px] text-neutral-400 font-black uppercase tracking-[0.2em]">Verified Partner</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
