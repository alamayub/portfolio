import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink } from 'react-router-dom';
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
      return false;
    }
    return false;
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
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
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Contact", path: "/contact" }
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
      <div 
        className="absolute top-0 left-0 h-[3px] bg-indigo-500 z-[60] transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-black tracking-tighter text-neutral-900 dark:text-white group">
          AYUB<span className="text-indigo-500 group-hover:animate-pulse">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  "text-xs font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 relative py-1",
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 font-black"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-2xl bg-neutral-200/50 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex items-center justify-center shadow-sm"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
          </button>

          <Link
            to="/contact"
            className="px-6 py-2.5 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-[1.2rem] text-xs font-black uppercase tracking-widest hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all duration-300 shadow-xl"
          >
            Hire Me
          </Link>
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
            aria-label="Toggle Navigation Menu"
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
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-base font-bold uppercase tracking-wider transition-colors",
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 font-extrabold"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white"
                    )
                  }
                >
                  {link.label}
                </NavLink>
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
                    aria-label={social.label}
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
