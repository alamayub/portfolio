import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/portfolio';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      // Fallback to light as default requested
      return false;
    }
    return false;
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#learning" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled 
          ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl border-b border-neutral-200 dark:border-white/10" 
          : "bg-transparent"
      )}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute top-0 left-0 h-[3px] bg-indigo-500 z-[60] transition-all duration-100" style={{ width: `${scrollProgress}%` }} />
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-3xl font-black tracking-tighter text-neutral-900 dark:text-white group">
          AYUB<span className="text-indigo-500 group-hover:animate-pulse">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white transition-all hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-2xl bg-neutral-200/50 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex items-center justify-center shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
          </button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-[1.2rem] text-sm font-black uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 shadow-xl"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 active:scale-95 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="p-2.5 text-neutral-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-neutral-200 dark:border-white/10" />
              <div className="flex space-x-4">
                {PERSONAL_INFO.socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
