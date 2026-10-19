import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { Skeleton } from "../components/ui";

const ChatBot = lazy(() =>
  import("../components/ChatBot").then((m) => ({ default: m.ChatBot })),
);

function PageLoader() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 min-h-[60vh] flex flex-col justify-center">
      <Skeleton className="w-48 h-8 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Skeleton className="aspect-video" />
        <Skeleton className="aspect-video" />
        <Skeleton className="aspect-video" />
      </div>
    </div>
  );
}

export function RootLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-200 font-sans transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-600 dark:selection:text-indigo-200 min-h-screen flex flex-col">
      <ScrollToTop />
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="flex-1 pt-20">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      <Suspense fallback={null}>
        <ChatBot />
      </Suspense>

      {/* Decorative Blobs */}
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vw] bg-indigo-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed top-0 left-0 w-[50vw] h-[50vw] bg-purple-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </div>
  );
}
