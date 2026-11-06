import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EducationTab, UserLearningProgress } from '../types';
import { AppMode } from '../../../types';
import { BRAND_LOGO, GLASS_STYLES, MOTION_RULES, VARIANTS } from '../../../constants';

interface EducationHeaderProps {
  currentTab: EducationTab;
  onSelectTab: (tab: EducationTab) => void;
  onExitEducation: () => void;
  onSetMode?: (mode: AppMode) => void;
  progress: UserLearningProgress;
}

const TABS: { id: EducationTab; label: string; tag?: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'curriculum', label: 'Curriculum', tag: '14' },
  { id: 'library', label: 'Library', tag: '137' },
  { id: 'glossary', label: 'Glossary', tag: '43' },
  { id: 'tools', label: 'Tools', tag: '7' },
  { id: 'practice', label: 'Practice' },
  { id: 'progress', label: 'Progress' }
];

export const EducationHeader: React.FC<EducationHeaderProps> = ({
  currentTab,
  onSelectTab,
  onExitEducation,
  onSetMode,
  progress
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.min(100, Math.round((completedCount / 137) * 100));

  const handleModeSwitch = (targetMode: AppMode) => {
    setMobileMenuOpen(false);
    if (onSetMode) {
      onSetMode(targetMode);
    } else {
      onExitEducation();
    }
  };

  const handleTabClick = (tabId: EducationTab) => {
    setMobileMenuOpen(false);
    onSelectTab(tabId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[200] px-2.5 pt-2 md:pt-3 pointer-events-none flex justify-center">
      <div className="pointer-events-auto w-full max-w-7xl transition-all duration-500 ease-[0.22,1,0.36,1] group/main">
        {/* Floating Glass Pill */}
        <div className={`border border-white/15 rounded-full px-3 md:px-4 py-2.5 md:h-16 flex items-center justify-between gap-3 ${GLASS_STYLES.card} shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl relative`}>
          <div className="absolute inset-[1px] rounded-full pointer-events-none opacity-0 group-hover/main:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 rounded-full border border-brand-purple/20 blur-[2px] opacity-70" />
            <div className="absolute inset-0 rounded-full border border-white/5 opacity-50" />
          </div>

          {/* Left: Brand Identity + Academy Tag */}
          <div className="flex items-center gap-3 relative z-10 shrink-0">
            <button
              onClick={() => handleModeSwitch('STUDY')}
              className="flex items-center gap-2.5 select-none group focus:outline-none py-1"
              aria-label="Return to TIMON Home"
            >
              <div className="relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-brand-purple/60 shadow-[0_0_12px_rgba(139,92,246,0.35)] shrink-0 transition-all duration-300">
                <img src={BRAND_LOGO} alt="TIMON Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase italic leading-none group-hover:text-brand-purple transition-colors">
                  TIMON
                </span>
                <span className="text-lg font-black tracking-tighter text-brand-purple italic leading-none">
                  //
                </span>
                <span className="mono text-[8px] md:text-[9px] font-black uppercase tracking-widest text-brand-purple bg-brand-purple/15 border border-brand-purple/30 px-2 py-0.5 rounded-full">
                  ACADEMY
                </span>
              </div>
            </button>
          </div>

          {/* Center: Educational Tabs Navigation */}
          <nav className="hidden lg:flex items-center gap-1 relative z-10">
            {TABS.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-3 py-1.5 rounded-full mono text-[9px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-brand-purple text-white shadow-[0_0_14px_rgba(139,92,246,0.45)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.tag && !isActive && (
                    <span className="mono text-[7px] px-1 py-0.2 rounded bg-white/10 text-zinc-400 font-bold">
                      {tab.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Progress Metric + Desk Actions */}
          <div className="hidden md:flex items-center gap-2 relative z-10 shrink-0">
            {/* Progress Badge */}
            <div className="mono text-[8px] text-zinc-400 font-bold uppercase tracking-wider bg-white/[0.03] border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.7)]" />
              <span>
                <strong className="text-white font-black">{completedCount}/12</strong> ({progressPercent}%)
              </span>
            </div>

            {/* Quick Desk Mode Links */}
            {onSetMode && (
              <div className="flex items-center gap-1 border-l border-white/10 pl-2">
                <button
                  onClick={() => handleModeSwitch('EXECUTION')}
                  className="px-2.5 py-1 rounded-full mono text-[8px] font-black uppercase tracking-wider text-zinc-500 hover:text-white transition-colors"
                >
                  TERMINAL
                </button>
                <button
                  onClick={() => handleModeSwitch('LODGING')}
                  className="px-2.5 py-1 rounded-full mono text-[8px] font-black uppercase tracking-wider text-zinc-500 hover:text-white transition-colors"
                >
                  LOGS
                </button>
              </div>
            )}

            {/* Exit to Main Desk */}
            <motion.button
              whileHover={VARIANTS.buttonHover}
              whileTap={VARIANTS.buttonTap}
              onClick={() => handleModeSwitch('STUDY')}
              className={`${GLASS_STYLES.accentButton} ${GLASS_STYLES.accentButtonHover} px-4 py-2 gap-2 focus:outline-none whitespace-nowrap`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
              <span className="mono text-[9px] font-black uppercase tracking-widest text-white">
                EXIT ACADEMY
              </span>
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2 relative z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white focus:outline-none"
              aria-label="Toggle Academy Menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-5 h-[1.5px] bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`lg:hidden overflow-hidden mt-2 rounded-2xl border border-white/15 ${GLASS_STYLES.card} shadow-[0_16px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl`}
            >
              <div className="p-4 flex flex-col gap-3">
                {/* Progress bar */}
                <div className="pb-3 border-b border-white/10">
                  <div className="flex items-center justify-between text-xs mono mb-1.5">
                    <span className="text-zinc-400 font-bold uppercase text-[9px]">Academy Progress</span>
                    <span className="text-brand-purple font-black text-[9px]">{completedCount}/12 Lessons ({progressPercent}%)</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-purple transition-all duration-500 rounded-full"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Academy Tabs */}
                <div className="grid grid-cols-2 gap-2">
                  {TABS.map((tab) => {
                    const isActive = currentTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`px-3 py-2 rounded-xl mono text-left text-xs font-black uppercase tracking-wider transition-all flex items-center justify-between ${
                          isActive
                            ? 'bg-brand-purple text-white shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                            : 'bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.06]'
                        }`}
                      >
                        <span>{tab.label}</span>
                        {tab.tag && (
                          <span className={`text-[8px] px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20' : 'bg-white/10 text-zinc-400'}`}>
                            {tab.tag}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Desk Switcher */}
                <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleModeSwitch('EXECUTION')}
                      className="flex-1 px-3 py-2 rounded-xl mono text-center text-xs font-black uppercase tracking-widest bg-white/[0.04] text-zinc-300 hover:text-white"
                    >
                      TERMINAL
                    </button>
                    <button
                      onClick={() => handleModeSwitch('LODGING')}
                      className="flex-1 px-3 py-2 rounded-xl mono text-center text-xs font-black uppercase tracking-widest bg-white/[0.04] text-zinc-300 hover:text-white"
                    >
                      LOGS
                    </button>
                  </div>
                  <button
                    onClick={() => handleModeSwitch('STUDY')}
                    className={`w-full px-4 py-2.5 rounded-full mono text-xs font-black uppercase tracking-widest ${GLASS_STYLES.accentButton} text-white flex items-center justify-center gap-2`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                    <span>EXIT ACADEMY (RETURN HOME)</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
