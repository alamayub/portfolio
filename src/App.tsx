import { useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skeleton } from './components/ui';
import { motion, useScroll, useSpring } from 'motion/react';

// Lazy load sections for better initial performance
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const TechStack = lazy(() => import('./components/TechStack').then(module => ({ default: module.TechStack })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Education = lazy(() => import('./components/Education').then(module => ({ default: module.Education })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const FooterComponents = lazy(() => import('./components/Footer').then(module => ({ 
  default: function FooterGroup() {
    const { RoadmapSocial, Contact, Footer } = module;
    return (
      <>
        <RoadmapSocial />
        <Contact />
        <Footer />
      </>
    );
  }
})));
const ChatBot = lazy(() => import('./components/ChatBot').then(module => ({ default: module.ChatBot })));

function SectionLoader() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <Skeleton className="w-48 h-8 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Skeleton className="aspect-video" />
        <Skeleton className="aspect-video" />
        <Skeleton className="aspect-video" />
      </div>
    </div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click',  (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-200 font-sans transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FooterComponents />
        </Suspense>
        <Suspense fallback={null}>
          <ChatBot />
        </Suspense>
      </main>

      {/* Decorative Blob */}
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vw] bg-indigo-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}
