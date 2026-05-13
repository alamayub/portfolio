import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative", className)}
    >
      <div className={cn("max-w-7xl mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, align = 'center' }: { title: string; subtitle?: string; align?: 'left' | 'center' }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "mb-16",
        align === 'center' ? "text-center" : "text-left"
      )}
    >
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl max-w-3xl font-medium",
          align === 'center' ? "mx-auto" : "ml-0",
          "text-neutral-500 dark:text-neutral-400 leading-relaxed"
        )}>
          {subtitle}
        </p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={cn(
          "h-1.5 bg-indigo-500 mt-8 rounded-full shadow-[0_0_15px_-3px_rgba(99,102,241,0.5)]",
          align === 'center' ? "mx-auto" : "ml-0"
        )} 
      />
    </motion.div>
  );
}

export function Badge({ children, className, variant = 'default', ...props }: { children: React.ReactNode; className?: string; variant?: 'default' | 'outline' | 'indigo' } & React.HTMLAttributes<HTMLSpanElement>) {
  const variants = {
    default: "bg-neutral-200/50 dark:bg-white/10 text-neutral-600 dark:text-neutral-400 border-neutral-300 dark:border-white/10",
    outline: "bg-transparent border-neutral-300 dark:border-white/10 text-neutral-600 dark:text-neutral-400",
    indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  [key: string]: any;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      {...props as any}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        "glass-card p-6 transition-all duration-300",
        hover && "hover:bg-neutral-100/50 dark:hover:bg-white/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-md", className)} />
  );
}

export function Image({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-neutral-100 dark:bg-neutral-900/50 group", className)}>
      {!isLoaded && !isError && (
        <Skeleton className="absolute inset-0 z-10 w-full h-full rounded-none" />
      )}
      {isError ? (
        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 bg-neutral-100 dark:bg-neutral-900 font-bold text-xs uppercase tracking-widest text-center px-4">
          Failed to load image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
          {...props}
        />
      )}
    </div>
  );
}
