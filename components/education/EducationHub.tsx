import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EducationTab, UserLearningProgress } from './types';
import { EducationHeader } from './components/EducationHeader';
import { OverviewView } from './components/OverviewView';
import { LESSONS_DATABASE } from './data/lessonsData';
import { VARIANTS, GLASS_STYLES } from '../../constants';
import { AppMode } from '../../types';

// Code-split secondary views for maximum speed
const CurriculumView = lazy(() => import('./components/CurriculumView').then(m => ({ default: m.CurriculumView })));
const LibraryView = lazy(() => import('./components/LibraryView').then(m => ({ default: m.LibraryView })));
const LessonView = lazy(() => import('./components/LessonView').then(m => ({ default: m.LessonView })));
const GlossaryView = lazy(() => import('./components/GlossaryView').then(m => ({ default: m.GlossaryView })));
const ToolsView = lazy(() => import('./components/ToolsView').then(m => ({ default: m.ToolsView })));
const PracticeView = lazy(() => import('./components/PracticeView').then(m => ({ default: m.PracticeView })));

const ViewLoader = () => (
  <div className="w-full py-16 flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-6 h-6 border border-white/10 border-t-brand-purple rounded-full animate-spin" />
      <span className="mono text-[8px] text-zinc-500 uppercase tracking-widest font-black">
        Loading View...
      </span>
    </div>
  </div>
);

interface EducationHubProps {
  onExitEducation: () => void;
  onSetMode?: (mode: AppMode) => void;
  initialLessonSlug?: string;
}

const DEFAULT_PROGRESS: UserLearningProgress = {
  completedLessons: ['candlestick-anatomy'],
  quizScores: {},
  savedNotes: {},
  bookmarkedLessons: ['fair-value-gap', 'market-structure-shift']
};

export const EducationHub: React.FC<EducationHubProps> = ({
  onExitEducation,
  onSetMode,
  initialLessonSlug
}) => {
  const [currentTab, setCurrentTab] = useState<EducationTab>(initialLessonSlug ? 'lesson' : 'overview');
  const [activeLessonSlug, setActiveLessonSlug] = useState<string>(initialLessonSlug || 'fair-value-gap');

  // Load progress from localStorage
  const [progress, setProgress] = useState<UserLearningProgress>(() => {
    try {
      const saved = localStorage.getItem('timon_education_progress_v2');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read saved education progress', e);
    }
    return DEFAULT_PROGRESS;
  });

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('timon_education_progress_v2', JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not persist education progress', e);
    }
  }, [progress]);

  // Sync hash routing if user enters e.g. #education/lesson/fair-value-gap
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#education/lesson/')) {
        const slug = hash.replace('#education/lesson/', '');
        if (LESSONS_DATABASE[slug]) {
          setActiveLessonSlug(slug);
          setCurrentTab('lesson');
        }
      } else if (hash === '#education/curriculum') {
        setCurrentTab('curriculum');
      } else if (hash === '#education/glossary') {
        setCurrentTab('glossary');
      } else if (hash === '#education/tools') {
        setCurrentTab('tools');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleToggleComplete = (slug: string) => {
    setProgress((prev) => {
      const isDone = prev.completedLessons.includes(slug);
      return {
        ...prev,
        completedLessons: isDone
          ? prev.completedLessons.filter((s) => s !== slug)
          : [...prev.completedLessons, slug]
      };
    });
  };

  const handleSaveQuizScore = (quizId: string, score: number, total: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: { score, total, date: new Date().toISOString() }
      }
    }));
  };

  const handleSelectLesson = (slug: string) => {
    if (LESSONS_DATABASE[slug]) {
      setActiveLessonSlug(slug);
      setCurrentTab('lesson');
      window.location.hash = `#education/lesson/${slug}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Fallback to first lesson
      setActiveLessonSlug('fair-value-gap');
      setCurrentTab('lesson');
    }
  };

  const activeLesson = LESSONS_DATABASE[activeLessonSlug] || LESSONS_DATABASE['fair-value-gap'];

  return (
    <div className="min-h-screen bg-brand-black text-white flex flex-col">
      {/* Education Navigation Bar */}
      <EducationHeader
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.location.hash = `#education/${tab}`;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onExitEducation={onExitEducation}
        onSetMode={onSetMode}
        progress={progress}
      />

      {/* Main Content Area */}
      <main className="flex-1 px-4 md:px-8 pt-24 md:pt-28 pb-12 relative z-10 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab + (currentTab === 'lesson' ? `-${activeLessonSlug}` : '')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {currentTab === 'overview' && (
              <OverviewView
                progress={progress}
                onNavigateTab={(tab) => {
                  setCurrentTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectLesson={handleSelectLesson}
              />
            )}

            <Suspense fallback={<ViewLoader />}>
              {currentTab === 'curriculum' && (
                <CurriculumView
                  progress={progress}
                  onSelectLesson={handleSelectLesson}
                />
              )}

              {currentTab === 'library' && (
                <LibraryView
                  progress={progress}
                  onSelectLesson={handleSelectLesson}
                />
              )}

              {currentTab === 'lesson' && (
                <LessonView
                  lesson={activeLesson}
                  progress={progress}
                  onToggleComplete={handleToggleComplete}
                  onSelectLesson={handleSelectLesson}
                  onBackToCurriculum={() => setCurrentTab('curriculum')}
                />
              )}

              {currentTab === 'glossary' && (
                <GlossaryView
                  onNavigateToLesson={handleSelectLesson}
                />
              )}

              {currentTab === 'tools' && (
                <ToolsView
                  progress={progress}
                  onNavigateToLesson={handleSelectLesson}
                />
              )}

              {currentTab === 'practice' && (
                <PracticeView
                  progress={progress}
                  onSaveQuizScore={handleSaveQuizScore}
                  onNavigateToLesson={handleSelectLesson}
                />
              )}

              {currentTab === 'progress' && (
                <div className="max-w-4xl mx-auto space-y-8">
                  <ToolsView progress={progress} onNavigateToLesson={handleSelectLesson} />
                </div>
              )}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Safety & Educational Disclaimer (Part 16) */}
      <footer className="border-t border-white/5 py-8 px-6 bg-[#040404] text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="mono text-[9px] text-amber-400 uppercase tracking-widest font-black">
              EDUCATIONAL COMPLIANCE & RISK NOTICE
            </span>
          </div>
          <p className="mono text-[9px] text-zinc-500 leading-relaxed font-medium">
            This platform is an educational resource designed to teach technical price action mechanics and risk discipline. It does not provide personalized financial advice, investment recommendations, or trading signals. Trading foreign exchange, futures, and leveraged derivatives carries substantial risk of loss. Historical chart illustrations and hypothetical performance models do not guarantee future market outcomes.
          </p>
        </div>
      </footer>
    </div>
  );
};
