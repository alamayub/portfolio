import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { Section, GlassCard, Badge } from '../components/ui';
import { SEO } from '../components/SEO';

export function NotFoundPage() {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center py-20">
      <SEO 
        title="Page Not Found"
        description="The page you requested could not be found."
        noIndex={true}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl mx-auto text-center"
      >
        <GlassCard className="p-12 border-indigo-500/20">
          <Badge variant="indigo" className="mb-6">Error 404</Badge>
          <h1 className="text-7xl sm:text-9xl font-black text-indigo-600 dark:text-indigo-400 mb-4 tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 font-medium">
            The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl glow-indigo"
            >
              <Home size={16} />
              Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-neutral-300 dark:border-white/10 text-neutral-900 dark:text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
