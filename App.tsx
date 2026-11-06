
import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { Hero } from './components/Hero';
import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { Header } from './components/Header';
import { MarketStatus } from './components/MarketStatus';
import { BackToTop } from './components/BackToTop';
import { PreviewGate } from './components/PreviewGate';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { AppMode } from './types';
import { MOTION_RULES, GLASS_STYLES, MOTION_KILL_SWITCH } from './constants';
import { SocialProof } from './components/SocialProof';

// Lazy load sections
const Education = lazy(() => import('./components/Education').then(m => ({ default: m.Education })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const PropFirmExplorer = lazy(() => import('./components/PropFirmExplorer').then(m => ({ default: m.PropFirmExplorer })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const ExecutionTerminal = lazy(() => import('./components/ExecutionTerminal').then(m => ({ default: m.ExecutionTerminal })));
const LodgingPage = lazy(() => import('./components/LodgingPage').then(m => ({ default: m.LodgingPage })));
const EducationHub = lazy(() => import('./components/education/EducationHub').then(m => ({ default: m.EducationHub })));
const TrendingTopics = lazy(() => import('./components/TrendingTopics').then(m => ({ default: m.TrendingTopics })));

const DigitalLoader = () => (
  <div className="w-full py-12 md:py-24 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border border-white/5 border-t-brand-purple rounded-full animate-spin" />
      <span className="mono text-[9px] text-zinc-600 uppercase tracking-widest font-black italic">
        Syncing...
      </span>
    </div>
  </div>
);

// Fix: Exported the App component to satisfy the named import in index.tsx
export const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('STUDY');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    // Check if URL hash indicates education mode or deep link
    if (window.location.hash.startsWith('#education')) {
      setMode('EDUCATION');
    }

    const handleHashChange = () => {
      if (window.location.hash.startsWith('#education')) {
        setMode('EDUCATION');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleMode = useCallback(() => {
    setMode(prev => prev === 'STUDY' ? 'EXECUTION' : 'STUDY');
  }, []);

  const handleStartPreview = useCallback(() => {
    setIsPreviewOpen(true);
  }, []);

  // Helper to get transition based on MOTION_KILL_SWITCH
  const getModeTransition = (duration: number) => MOTION_KILL_SWITCH ? { duration: 0 } : { duration, ease: MOTION_RULES.ease };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-brand-black text-white selection:bg-brand-purple/30 selection:text-white">
        <CustomCursor />
        {mode !== 'EDUCATION' && (
          <Header 
            mode={mode} 
            onToggleMode={handleToggleMode} 
            onSetMode={setMode}
            onStartPreview={handleStartPreview}
          />
        )}
        
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            {mode === 'STUDY' && (
              <motion.div
                key="study"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={getModeTransition(0.5)}
              >
                <Hero onStartPreview={handleStartPreview} />
                <SocialProof />
                <Suspense fallback={<DigitalLoader />}>
                  {/* The Trader Behind (Founder, Story & Pedigree) */}
                  <About onStartPreview={handleStartPreview} />

                  {/* Trending Topics (Hottest Price Action Models & Setups) */}
                  <TrendingTopics
                    onSelectTopic={(slug) => {
                      window.location.hash = `#education/lesson/${slug}`;
                      setMode('EDUCATION');
                    }}
                    onExploreAcademy={() => setMode('EDUCATION')}
                  />

                  {/* Curriculum Preview & Academy Gateway */}
                  <Education onEnterEducation={() => setMode('EDUCATION')} />

                  {/* Funding Partners & Prop Firm Vehicles */}
                  <PropFirmExplorer />

                  {/* Community Social Proof & Verified Payouts */}
                  <Testimonials />

                  {/* Membership & Enrollment Matrix */}
                  <Pricing onStartPreview={handleStartPreview} />

                  {/* Frequently Asked Questions */}
                  <FAQ />
                </Suspense>
              </motion.div>
            )}

            {mode === 'EDUCATION' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={getModeTransition(0.4)}
                className="min-h-screen flex flex-col"
              >
                <Suspense fallback={<DigitalLoader />}>
                  <EducationHub onExitEducation={() => setMode('STUDY')} onSetMode={setMode} />
                </Suspense>
              </motion.div>
            )}

            {mode === 'EXECUTION' && (
              <motion.div
                key="execution"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={getModeTransition(0.5)}
                className="pt-24 pb-12 px-6 min-h-screen flex items-center justify-center"
              >
                <Suspense fallback={<DigitalLoader />}>
                  <ExecutionTerminal />
                </Suspense>
              </motion.div>
            )}

            {mode === 'LODGING' && (
              <motion.div
                key="lodging"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={getModeTransition(0.5)}
                className="pt-24 pb-12 px-6 min-h-screen flex flex-col"
              >
                <Suspense fallback={<DigitalLoader />}>
                  <LodgingPage />
                </Suspense>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <MarketStatus />
        <BackToTop />
        <PreviewGate isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
        {mode !== 'EDUCATION' && <Footer />}
      </div>
    </SmoothScroll>
  );
};