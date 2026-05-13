/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'motion/react';
import { Section, SectionHeader, Badge, Image } from './ui';
import { ABOUT_ME, PERSONAL_INFO } from '../constants/portfolio';
import { CheckCircle2, Award, Coffee, Code2 } from 'lucide-react';

export function About() {
  const highlights = [
    { icon: Award, label: "5+ Years Exp", color: "text-amber-500" },
    { icon: Coffee, label: "Infinite Coffee", color: "text-emerald-500" },
    { icon: Code2, label: "Clean Architecture", color: "text-indigo-500" },
  ];

  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative max-w-md mx-auto lg:ml-0"
        >
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card p-3 rotate-2 hover:rotate-0 transition-transform duration-700">
            <Image 
              src={PERSONAL_INFO.avatar} 
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
            />
          </div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-10 -right-10 glass-card p-8 border-indigo-500/30 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform"
          >
            <p className="text-5xl font-black text-indigo-600 dark:text-indigo-400">5+</p>
            <p className="text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-widest text-xs mt-1">Years Experience</p>
          </motion.div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
          <div className="absolute top-1/2 -right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl opacity-50" />
        </motion.div>

        <div>
          <Badge variant="indigo" className="mb-6">Who I Am</Badge>
          <SectionHeader 
            title={ABOUT_ME.title} 
            align="left"
            subtitle="I code with a purpose—to create software that makes an impact and solves real-world problems."
          />
          
          <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-10">
            {ABOUT_ME.content.split('\n\n').map((para, i) => (
              <p key={i} className="opacity-90">{para}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
            {highlights.map((h, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="flex flex-col gap-4 p-6 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-2xl group/highlight shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover/highlight:rotate-12 transition-transform">
                  <h.icon className={h.color} size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">{h.label}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {ABOUT_ME.focus.map((item: any, i: number) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <CheckCircle2 size={16} />
                </div>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
