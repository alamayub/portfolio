import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Section, SectionHeader, GlassCard, Badge } from './ui';
import { ROADMAP, SERVICES, PERSONAL_INFO } from '../constants/portfolio';
import { Send, MapPin, Mail, Sparkles, Loader2, CheckCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function RoadmapSocial() {
  return (
    <Section id="roadmap">
      <div className="flex justify-center mb-6">
        <Badge variant="indigo">Roadmap & Services</Badge>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Roadmap */}
        <div>
          <SectionHeader title="The Roadmap" align="left" subtitle="A strategic outlook on my engineering evolution and upcoming technical goals." />
          <div className="grid grid-cols-1 gap-4">
            {ROADMAP.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="flex items-center justify-between py-5 px-6 border-transparent hover:border-indigo-500/20 group" hover={false}>
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-xs group-hover:scale-110 transition-transform">
                      0{i + 1}
                    </div>
                    <span className="text-neutral-800 dark:text-neutral-200 font-bold text-lg">{item.goal}</span>
                  </div>
                  <Badge variant={item.status === 'In Progress' ? 'indigo' : 'default'} className="px-3 py-1">
                    {item.status}
                  </Badge>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <SectionHeader title="Expert Services" align="left" subtitle="Turning complex architectural challenges into elegant, production-ready software solutions." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full flex flex-col gap-6 group border-transparent hover:border-indigo-500/20">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm rotate-3 group-hover:rotate-0">
                    <service.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-neutral-900 dark:text-white font-black text-xl mb-2">{service.title}</h4>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-medium">{service.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Mobile App Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    const path = 'contacts';

    try {
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus('success');
      setFormData({ name: '', email: '', projectType: 'Mobile App Development', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  return (
    <Section id="contact" className="bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <Badge variant="indigo" className="mb-6">Get In Touch</Badge>
          <SectionHeader 
            title="Let's Build Something Great" 
            align="left"
            subtitle="Ready to discuss your next breakthrough project? My inbox is always open for bold ideas and technical challenges."
          />
          
          <div className="space-y-10 mt-12">
            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase font-black tracking-[0.2em] mb-1">Direct Email</p>
                <p className="text-2xl text-neutral-900 dark:text-white font-black hover:text-indigo-500 transition-colors cursor-pointer">{PERSONAL_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-8 group">
              <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase font-black tracking-[0.2em] mb-1">Office Location</p>
                <p className="text-2xl text-neutral-900 dark:text-white font-black">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 glass-card border-indigo-500/30 bg-indigo-500/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 mb-4">
                <Sparkles size={24} className="animate-pulse" />
                <span className="font-black uppercase tracking-widest text-sm">Open for Work</span>
              </div>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 font-semibold leading-relaxed">
                I am currently open to high-impact freelance opportunities and strategic full-time engineering roles.
              </p>
            </motion.div>
          </div>
        </div>

        <GlassCard className="p-10 sm:p-14 border-transparent shadow-3xl" hover={false}>
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
            >
              <div className="w-24 h-24 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <CheckCircle size={48} strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-2">Message Received!</h3>
                <p className="text-neutral-500 dark:text-neutral-400 max-w-sm font-medium">
                  Thanks for reaching out! I've received your request and will get back to you within 24 hours.
                </p>
              </div>
              <button 
                onClick={() => setStatus('idle')}
                className="text-indigo-500 font-black hover:text-indigo-600 transition-colors uppercase tracking-widest text-sm"
              >
                Send another one
              </button>
            </motion.div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-100/80 dark:bg-white/5 border-2 border-transparent focus:border-indigo-500/50 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white focus:outline-none transition-all font-semibold"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-100/80 dark:bg-white/5 border-2 border-transparent focus:border-indigo-500/50 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white focus:outline-none transition-all font-semibold"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] ml-1">Project Category</label>
                <div className="relative">
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-neutral-100/80 dark:bg-white/5 border-2 border-transparent focus:border-indigo-500/50 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white focus:outline-none transition-all appearance-none cursor-pointer font-semibold"
                  >
                    <option value="Mobile App Development" className="bg-white dark:bg-neutral-900">Mobile App Development</option>
                    <option value="Full-Stack Web App" className="bg-white dark:bg-neutral-900">Full-Stack Web App</option>
                    <option value="AI Integration" className="bg-white dark:bg-neutral-900">AI Integration</option>
                    <option value="Consultation" className="bg-white dark:bg-neutral-900">Consultation</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] ml-1">Detailed Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-100/80 dark:bg-white/5 border-2 border-transparent focus:border-indigo-500/50 rounded-2xl px-6 py-4 text-neutral-900 dark:text-white focus:outline-none transition-all resize-none font-semibold"
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-lg rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group shadow-2xl shadow-indigo-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={24} className="animate-spin" />
                    Sending Protocol...
                  </>
                ) : (
                  <>
                    Transmit Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
              {status === 'error' && (
                <p className="text-rose-500 text-sm text-center font-black uppercase tracking-widest">
                  Authentication Error. Please try again.
                </p>
              )}
            </form>
          )}
        </GlassCard>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <a href="#" className="text-4xl font-black tracking-tighter text-neutral-900 dark:text-white mb-4 block">
              AYUB<span className="text-indigo-500">.</span>
            </a>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg font-semibold max-w-sm leading-relaxed mx-auto md:mx-0">
              Forging the future of software with precision and purpose.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-neutral-600 dark:text-neutral-400 text-sm font-black uppercase tracking-widest">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-indigo-600 dark:hover:text-white transition-all hover:-translate-y-1">
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {PERSONAL_INFO.socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-500 hover:text-indigo-600 dark:hover:text-white transition-all hover:scale-110"
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 dark:text-neutral-500 text-xs font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} // Engineered for perfection
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
