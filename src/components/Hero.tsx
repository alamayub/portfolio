import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/portfolio';

export function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for background elements
  const meshY = useTransform(scrollY, [0, 1000], [0, -150]);
  const blob1Y = useTransform(scrollY, [0, 1000], [0, 100]);
  const blob2Y = useTransform(scrollY, [0, 1000], [0, -200]);
  const gridY = useTransform(scrollY, [0, 1000], [0, -50]);

  // Typewriter effect for name
  const fullName = PERSONAL_INFO.name;
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === fullName) {
      // Completed typing name, pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, brief pause before retyping
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      // Speed is faster when backspacing
      const speed = isDeleting ? 70 : 130;
      timeout = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting
            ? fullName.substring(0, prev.length - 1)
            : fullName.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullName]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Dynamic Mesh Background Overlay */}
      <motion.div 
        style={{ y: meshY }}
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20 mesh-gradient pointer-events-none" 
      />
      
      {/* Background Blobs */}
      <motion.div 
        style={{ y: blob1Y }}
        className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" 
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" 
        style={{ y: blob2Y, animationDelay: '2s' }} 
      />

      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for new opportunities
          </motion.div>
          
          <h1 
            aria-label={`I'm ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.role}.`}
            className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tight text-neutral-900 dark:text-white mb-8 leading-[0.95]"
          >
            I'm{" "}
            <span className="relative inline-flex items-baseline" aria-hidden="true">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 dark:from-indigo-400 dark:via-cyan-400 dark:to-indigo-300 min-h-[1em]">
                {displayText || '\u00A0'}
              </span>
              <span 
                className="inline-block w-[3px] sm:w-[5px] md:w-[7px] h-[0.78em] bg-indigo-500 dark:bg-indigo-400 ml-1.5 align-middle rounded-full animate-pulse shadow-[0_0_12px_rgba(99,102,241,0.8)]"
              />
            </span>
            <span className="sr-only">{PERSONAL_INFO.name}</span>,
            <br />
            <span className="opacity-90">a {PERSONAL_INFO.role}.</span>
          </h1>

          <p className="text-xl md:text-2xl font-medium text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto mb-12 opacity-80 leading-relaxed">
            {PERSONAL_INFO.shortIntro}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link 
                to="/projects" 
                className="group w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all duration-300 glow-indigo"
              >
                Explore Projects
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.a 
              href={PERSONAL_INFO.resumeUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-white/5 border-2 border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-neutral-50 dark:hover:bg-white/10 transition-all duration-300"
            >
              <Download size={22} />
              Read Resume
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-8">
            {PERSONAL_INFO.socials.map((social: any, idx: number) => (
              <motion.a
                key={idx}
                href={social.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.1, color: '#6366f1' }}
                className="text-neutral-400 dark:text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <social.icon size={32} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none" 
        style={{ y: gridY, backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '48px 48px' }} 
      />
    </section>
  );
}
