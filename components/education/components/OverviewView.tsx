import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GLASS_STYLES, VARIANTS, BRAND_LOGO } from '../../../constants';
import { ChartDiagram } from './ChartDiagram';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { LESSONS_DATABASE } from '../data/lessonsData';
import { UserLearningProgress, EducationTab } from '../types';
import { GhostText } from '../../GhostText';

interface OverviewViewProps {
  progress: UserLearningProgress;
  onNavigateTab: (tab: EducationTab) => void;
  onSelectLesson: (slug: string) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({
  progress,
  onNavigateTab,
  onSelectLesson
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<'ALL' | 'BEGINNER' | 'POPULAR' | 'FAST' | 'ADVANCED'>('ALL');

  const totalLessons = Object.keys(LESSONS_DATABASE).length;
  const totalModules = CURRICULUM_MODULES.length;
  const totalGlossary = GLOSSARY_TERMS.length;
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.round((completedCount / (totalLessons || 1)) * 100);

  // 4-Step Beginner Fast Track
  const beginnerFastTrack = [
    {
      step: '01',
      title: 'Candlestick Anatomy & OHLC',
      slug: 'candlestick-anatomy',
      readTime: '4 min',
      level: 'Beginner',
      badge: '🟢 STEP 1',
      summary: 'Learn how price auctions unfold tick-by-tick: Open, High, Low, Close, and wick rejection physics.'
    },
    {
      step: '02',
      title: 'Fair Value Gap (FVG)',
      slug: 'fair-value-gap',
      readTime: '5 min',
      level: 'Beginner',
      badge: '⚡ STEP 2',
      summary: 'Spot 3-candle imbalance vacuums left behind by institutional algorithms and trade the 50% CE level.'
    },
    {
      step: '03',
      title: 'Market Structure Shift (MSS)',
      slug: 'market-structure-shift',
      readTime: '8 min',
      level: 'Intermediate',
      badge: '🎯 STEP 3',
      summary: 'Confirm real reversals: wait for resting liquidity sweeps followed by energetic displacement breaks.'
    },
    {
      step: '04',
      title: 'Session Concepts & Killzones',
      slug: 'session-concepts',
      readTime: '6 min',
      level: 'Intermediate',
      badge: '💎 STEP 4',
      summary: 'Master algorithmic timing: London Open Judas Swings and the 10:00–11:00 AM NY Silver Bullet window.'
    }
  ];

  // Core concept directory with trendy metadata
  const conceptsList = useMemo(() => [
    { title: 'Candlestick Anatomy', slug: 'candlestick-anatomy', category: 'Foundations', readTime: '4m', level: 'Beginner', badge: '🟢 START HERE', desc: 'OHLC physics, wick rejections, and reading raw candle momentum with zero indicators.' },
    { title: 'Fair Value Gap (FVG)', slug: 'fair-value-gap', category: 'Imbalances', readTime: '5m', level: 'Beginner', badge: '🔥 MOST POPULAR', desc: 'Three-candle auction vacuum left by rapid algorithmic displacement.' },
    { title: 'Market Structure Shift', slug: 'market-structure-shift', category: 'Structure', readTime: '8m', level: 'Intermediate', badge: '🎯 REVERSALS', desc: 'Structural shift confirmed by displacement after higher-timeframe liquidity purges.' },
    { title: 'Liquidity Pools (BSL/SSL)', slug: 'liquidity-concepts', category: 'Liquidity', readTime: '7m', level: 'Beginner', badge: '⚡ MUST-KNOW', desc: 'Buy-side and sell-side resting stop clusters and engineered double-top equal highs.' },
    { title: 'Order Blocks (OB)', slug: 'order-blocks', category: 'Footprint', readTime: '8m', level: 'Intermediate', badge: '💎 FOOTPRINTS', desc: 'The origin counter-candle before explosive institutional displacement breaks structure.' },
    { title: 'Silver Bullet Framework', slug: 'silver-bullet', category: 'Macros', readTime: '6m', level: 'Intermediate', badge: '⚡ 10-11 AM NY', desc: 'The high-probability 60-minute algorithmic execution model with mechanical 1:2 R:R.' },
    { title: 'Turtle Soup Strategy', slug: 'turtle-soup', category: 'Liquidity', readTime: '7m', level: 'Intermediate', badge: '🐢 TRAP FADE', desc: 'Fade false breakout traps by identifying shallow stop runs of established swing points.' },
    { title: 'Inverse FVG (IFVG)', slug: 'inverse-fair-value-gap', category: 'Imbalances', readTime: '7m', level: 'Intermediate', badge: '🔄 POLARITY FLIP', desc: 'Violated imbalances inverting into high-probability institutional support or resistance.' },
    { title: 'Optimal Trade Entry (OTE)', slug: 'optimal-trade-entry', category: 'Confluence', readTime: '6m', level: 'Intermediate', badge: '★ 62-79% FIB', desc: 'Deep Fibonacci discount sweet spots for exceptional risk-to-reward positioning.' },
    { title: 'Power of Three (AMD)', slug: 'power-of-three', category: 'Daily Profiles', readTime: '9m', level: 'Intermediate', badge: '📊 AMD CYCLE', desc: 'Asian Accumulation, London Judas Swing Manipulation, and New York Distribution.' },
    { title: 'SMT Divergence', slug: 'smt-divergence', category: 'Correlation', readTime: '7m', level: 'Advanced', badge: '🔍 ES VS NQ', desc: 'Non-confirmation between correlated index futures revealing early institutional accumulation.' },
    { title: 'Risk-to-Reward Math', slug: 'risk-reward-math', category: 'Risk & Math', readTime: '6m', level: 'Beginner', badge: '🛡️ CAPITAL PRESERVATION', desc: 'Expected value mathematics, win-rate probability curves, and position sizing discipline.' }
  ], []);

  // Filtered concepts based on search and tag
  const filteredConcepts = useMemo(() => {
    return conceptsList.filter((item) => {
      if (selectedTag === 'BEGINNER' && item.level !== 'Beginner') return false;
      if (selectedTag === 'ADVANCED' && item.level !== 'Advanced') return false;
      if (selectedTag === 'FAST' && parseInt(item.readTime) > 6) return false;
      if (selectedTag === 'POPULAR' && !['fair-value-gap', 'silver-bullet', 'market-structure-shift', 'turtle-soup'].includes(item.slug)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q);
      }
      return true;
    });
  }, [conceptsList, selectedTag, searchQuery]);

  // Next recommended lesson
  const nextLessonSlug = useMemo(() => {
    for (const step of beginnerFastTrack) {
      if (!progress.completedLessons.includes(step.slug)) {
        return step.slug;
      }
    }
    return 'fair-value-gap';
  }, [progress.completedLessons, beginnerFastTrack]);

  return (
    <div className="space-y-12 md:space-y-20 max-w-7xl mx-auto">
      {/* Quick-Jump Navigation Dock */}
      <div className="flex items-center overflow-x-auto scrollbar-none gap-2 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-xl">
        <button
          onClick={() => {
            const el = document.getElementById('beginner-track');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-3.5 py-1.5 rounded-xl mono text-[9px] font-black uppercase tracking-wider bg-brand-purple/20 text-brand-purple border border-brand-purple/40 whitespace-nowrap flex items-center gap-1.5 hover:bg-brand-purple hover:text-white transition-all"
        >
          <span>🚀</span>
          <span>BEGINNER FAST TRACK</span>
        </button>
        <button
          onClick={() => onNavigateTab('curriculum')}
          className="px-3.5 py-1.5 rounded-xl mono text-[9px] font-black uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.05] whitespace-nowrap transition-colors flex items-center gap-1.5"
        >
          <span>📚</span>
          <span>{totalModules} CLUSTERS</span>
        </button>
        <button
          onClick={() => onNavigateTab('library')}
          className="px-3.5 py-1.5 rounded-xl mono text-[9px] font-black uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.05] whitespace-nowrap transition-colors flex items-center gap-1.5"
        >
          <span>📖</span>
          <span>LIBRARY ({totalLessons})</span>
        </button>
        <button
          onClick={() => onNavigateTab('tools')}
          className="px-3.5 py-1.5 rounded-xl mono text-[9px] font-black uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.05] whitespace-nowrap transition-colors flex items-center gap-1.5"
        >
          <span>🛠️</span>
          <span>7 LIVE TOOLS</span>
        </button>
        <button
          onClick={() => onNavigateTab('glossary')}
          className="px-3.5 py-1.5 rounded-xl mono text-[9px] font-black uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.05] whitespace-nowrap transition-colors flex items-center gap-1.5"
        >
          <span>🔍</span>
          <span>GLOSSARY ({totalGlossary}+)</span>
        </button>
        <button
          onClick={() => onNavigateTab('practice')}
          className="px-3.5 py-1.5 rounded-xl mono text-[9px] font-black uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/[0.05] whitespace-nowrap transition-colors flex items-center gap-1.5"
        >
          <span>🎯</span>
          <span>PRACTICE QUIZZES</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative pt-2 md:pt-4 flex flex-col items-center text-center space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 shadow-[0_0_12px_rgba(139,92,246,0.5)]">
            <img src={BRAND_LOGO} alt="TIMON Logo" className="w-full h-full object-cover" />
          </div>
          <div className="h-px w-8 bg-brand-purple" />
          <span className="mono text-[9px] text-brand-purple font-black tracking-[0.35em] uppercase italic bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-1 rounded-full">
            INSTITUTIONAL TRADING ACADEMY
          </span>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-[0.92]">
            UNDERSTAND PRICE ACTION. <br />
            MASTER MARKET STRUCTURE. <br />
            <GhostText text="BUILD YOUR FRAMEWORK." className="text-transparent transition-colors cursor-default stroke-text" />
          </h1>
          <p className="mono text-xs sm:text-sm text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed">
            The definitive, zero-jargon trading education platform. From fundamental candlestick anatomy to multi-timeframe liquidity sweeps, Silver Bullet macros, and quantitative risk management.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onSelectLesson('candlestick-anatomy')}
            className={`${GLASS_STYLES.accentButton} ${GLASS_STYLES.accentButtonHover} px-7 py-3`}
          >
            <span className="mono text-[10px] font-black uppercase tracking-[0.25em]">START HERE (STEP 1) →</span>
          </button>
          <button
            onClick={() => onNavigateTab('curriculum')}
            className={`${GLASS_STYLES.button} ${GLASS_STYLES.buttonHover} px-6 py-3`}
          >
            <span className="mono text-[10px] font-black uppercase tracking-[0.25em]">VIEW {totalModules} CLUSTERS</span>
          </button>
          <button
            onClick={() => onNavigateTab('tools')}
            className={`${GLASS_STYLES.button} ${GLASS_STYLES.buttonHover} px-6 py-3 text-zinc-400`}
          >
            <span className="mono text-[10px] font-black uppercase tracking-[0.25em]">LAUNCH SIMULATORS</span>
          </button>
        </div>
      </section>

      {/* BEGINNER FAST-TRACK (START HERE) */}
      <section id="beginner-track" className="space-y-6 scroll-mt-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="mono text-[9px] text-emerald-400 font-black uppercase tracking-widest">
                ZERO PRIOR EXPERIENCE REQUIRED
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
              BEGINNER FAST TRACK
            </h2>
            <p className="mono text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              New to institutional technical trading? Follow these 4 core foundational lessons in sequence to build a rock-solid market foundation in under 25 minutes.
            </p>
          </div>

          {/* Quick CTA */}
          <button
            onClick={() => onSelectLesson('candlestick-anatomy')}
            className={`${GLASS_STYLES.accentButton} px-5 py-2.5 mono text-[9px] font-black uppercase tracking-widest whitespace-nowrap`}
          >
            START STEP 1 NOW →
          </button>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {beginnerFastTrack.map((step) => {
            const isCompleted = progress.completedLessons.includes(step.slug);
            return (
              <motion.div
                key={step.slug}
                onClick={() => onSelectLesson(step.slug)}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl ${GLASS_STYLES.card} hover:border-brand-purple/50 cursor-pointer transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden ${
                  isCompleted ? 'border-emerald-500/30 bg-emerald-500/[0.02]' : ''
                }`}
              >
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <span className="mono text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-brand-purple/15 text-brand-purple border border-brand-purple/30">
                      {step.badge}
                    </span>
                    <span className="mono text-[8px] text-zinc-500 font-bold uppercase">
                      {step.readTime} read
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white italic uppercase tracking-tight group-hover:text-brand-purple transition-colors">
                    {step.title}
                  </h3>

                  <p className="mono text-[10px] text-zinc-400 leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                  <span className={`mono text-[8px] font-bold uppercase ${isCompleted ? 'text-emerald-400' : 'text-zinc-500'}`}>
                    {isCompleted ? '✓ COMPLETED' : 'STATUS: PENDING'}
                  </span>
                  <span className="mono text-[9px] font-black uppercase text-brand-purple group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>STUDY</span>
                    <span>→</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Hero Animated Model Showcase */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">
              VISUAL REPLAY SYSTEM
            </span>
            <span className="mono text-[8px] text-zinc-500 font-bold uppercase">
              // INTERACTIVE PRICE ACTION
            </span>
          </div>
          <span className="mono text-[8px] text-zinc-500 font-bold uppercase hidden sm:inline">
            CLICK 'REPLAY' TO WATCH THE SEQUENCE STEP-BY-STEP
          </span>
        </div>

        <ChartDiagram
          type="power-of-three"
          caption="Algorithmic Price Delivery Model: Accumulation during Asia, Manipulation (Judas Swing) sweeping Asian Lows in London, and true Distribution into the daily target."
        />
      </section>

      {/* Adaptive Progress & Stats Banner */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`p-5 rounded-2xl ${GLASS_STYLES.card} relative overflow-hidden flex flex-col justify-between`}>
          <span className="mono text-[8px] text-zinc-500 uppercase tracking-widest font-black block mb-1">
            CURRICULUM MODULES
          </span>
          <span className="mono text-2xl md:text-3xl font-black text-white">{totalModules} Modules</span>
          <span className="mono text-[8px] text-brand-purple uppercase tracking-wider block mt-1">Beginner to Advanced</span>
        </div>

        <div className={`p-5 rounded-2xl ${GLASS_STYLES.card} relative overflow-hidden flex flex-col justify-between`}>
          <span className="mono text-[8px] text-zinc-500 uppercase tracking-widest font-black block mb-1">
            PUBLISHED LESSONS
          </span>
          <span className="mono text-2xl md:text-3xl font-black text-brand-purple">{totalLessons} Guides</span>
          <span className="mono text-[8px] text-zinc-400 uppercase tracking-wider block mt-1">With Vector Charts & Quizzes</span>
        </div>

        <div className={`p-5 rounded-2xl ${GLASS_STYLES.card} relative overflow-hidden flex flex-col justify-between`}>
          <span className="mono text-[8px] text-zinc-500 uppercase tracking-widest font-black block mb-1">
            AUDITED GLOSSARY
          </span>
          <span className="mono text-2xl md:text-3xl font-black text-white">{totalGlossary}+ Terms</span>
          <span className="mono text-[8px] text-zinc-400 uppercase tracking-wider block mt-1">SMC / ICT Terminology</span>
        </div>

        <div className={`p-5 rounded-2xl ${GLASS_STYLES.card} relative overflow-hidden flex flex-col justify-between border-brand-purple/30`}>
          <div className="flex items-center justify-between mb-1">
            <span className="mono text-[8px] text-zinc-400 uppercase tracking-widest font-black">
              YOUR PROGRESS
            </span>
            <span className="mono text-[9px] text-emerald-400 font-black">{progressPercent}%</span>
          </div>
          <span className="mono text-2xl md:text-3xl font-black text-emerald-400">
            {completedCount} / {totalLessons}
          </span>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Next Up For You Recommendation */}
      <section className={`p-6 sm:p-8 rounded-2xl ${GLASS_STYLES.card} border-brand-purple/30 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="mono text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
              NEXT UP FOR YOU
            </span>
            <span className="mono text-[9px] text-zinc-500 font-bold uppercase">
              RECOMMENDED LESSON
            </span>
          </div>

          <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">
            {LESSONS_DATABASE[nextLessonSlug]?.title || 'Fair Value Gap (FVG)'}
          </h3>

          <p className="mono text-xs text-zinc-400 max-w-xl">
            {LESSONS_DATABASE[nextLessonSlug]?.shortDefinition || 'Three-candle auction vacuum left by aggressive displacement.'}
          </p>
        </div>

        <button
          onClick={() => onSelectLesson(nextLessonSlug)}
          className={`${GLASS_STYLES.accentButton} ${GLASS_STYLES.accentButtonHover} px-7 py-3.5 mono text-[10px] font-black uppercase tracking-widest shrink-0 relative z-10 w-full sm:w-auto text-center`}
        >
          CONTINUE LEARNING →
        </button>
      </section>

      {/* Featured Concepts Directory with Live Search & Filter Bar */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">
              EXPLORE BY TOPIC
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
              CONCEPT DIRECTORY
            </h2>
            <p className="mono text-xs text-zinc-400 mt-1">
              Select any concept card to open its dedicated technical article, interactive SVG diagram, and checkpoint quiz.
            </p>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-full">
            {[
              { id: 'ALL', label: 'ALL CONCEPTS' },
              { id: 'POPULAR', label: '🔥 POPULAR' },
              { id: 'BEGINNER', label: '🟢 BEGINNER' },
              { id: 'FAST', label: '⚡ FAST (<6M)' },
              { id: 'ADVANCED', label: '💎 ADVANCED' }
            ].map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id as any)}
                className={`px-3 py-1.5 rounded-full mono text-[8px] font-black uppercase tracking-wider transition-all ${
                  selectedTag === tag.id
                    ? 'bg-brand-purple text-white shadow-[0_0_10px_rgba(139,92,246,0.4)]'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search concepts by keyword (e.g. FVG, MSS, Turtle Soup, Sessions, OTE)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 mono text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white mono text-xs"
            >
              ✕ CLEAR
            </button>
          )}
        </div>

        {/* Concepts Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredConcepts.map((item) => (
            <motion.div
              key={item.slug}
              onClick={() => onSelectLesson(item.slug)}
              whileHover={{ y: -3 }}
              className={`p-6 rounded-2xl ${GLASS_STYLES.card} hover:border-brand-purple/50 cursor-pointer transition-all duration-300 flex flex-col justify-between group shadow-xl`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="mono text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-brand-purple/15 text-brand-purple border border-brand-purple/30">
                    {item.badge}
                  </span>
                  <span className="mono text-[8px] text-zinc-500 font-bold">
                    {item.readTime}
                  </span>
                </div>

                <div>
                  <span className="mono text-[8px] text-zinc-500 font-bold uppercase tracking-wider block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tight group-hover:text-brand-purple transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="mono text-[10px] text-zinc-400 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
                <span className="mono text-[8px] text-zinc-500 uppercase font-bold">
                  {item.level}
                </span>
                <span className="mono text-[9px] font-black uppercase text-brand-purple group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>STUDY NOW</span>
                  <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Tools Suite Showcase */}
      <section className={`p-8 md:p-12 rounded-3xl ${GLASS_STYLES.card} relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border-brand-purple/20`}>
        <div className="space-y-4 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="mono text-[9px] text-emerald-400 font-black uppercase tracking-widest">
              HANDS-ON SIMULATORS
            </span>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
            7 INTERACTIVE LEARNING TOOLS
          </h3>

          <p className="mono text-xs text-zinc-300 leading-relaxed">
            Reinforce theory with interactive calculators and simulators: inspect candlestick OHLC physics with real-time sliders, calculate 50% Consequent Encroachment with the FVG Visualizer, and monitor session Kill Zones with the Live World Clock.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigateTab('tools')}
              className={`${GLASS_STYLES.accentButton} px-8 py-3.5 mono text-[10px] font-black uppercase tracking-widest`}
            >
              LAUNCH ALL 7 TOOLS →
            </button>
          </div>
        </div>

        <div className="w-full lg:w-5/12 grid grid-cols-2 gap-3">
          <div
            onClick={() => onNavigateTab('tools')}
            className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-brand-purple/40 cursor-pointer transition-all group"
          >
            <span className="text-xl block mb-2">📊</span>
            <span className="mono text-xs font-black text-white uppercase group-hover:text-brand-purple block mb-1">FVG Calculator</span>
            <span className="mono text-[9px] text-zinc-500">Computes 50% CE level</span>
          </div>

          <div
            onClick={() => onNavigateTab('tools')}
            className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-brand-purple/40 cursor-pointer transition-all group"
          >
            <span className="text-xl block mb-2">🕯️</span>
            <span className="mono text-xs font-black text-white uppercase group-hover:text-brand-purple block mb-1">Candle Simulator</span>
            <span className="mono text-[9px] text-zinc-500">Interactive OHLC physics</span>
          </div>

          <div
            onClick={() => onNavigateTab('tools')}
            className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-brand-purple/40 cursor-pointer transition-all group"
          >
            <span className="text-xl block mb-2">🕒</span>
            <span className="mono text-xs font-black text-white uppercase group-hover:text-brand-purple block mb-1">Session Radar</span>
            <span className="mono text-[9px] text-zinc-500">Live UTC & NY Killzones</span>
          </div>

          <div
            onClick={() => onNavigateTab('tools')}
            className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-brand-purple/40 cursor-pointer transition-all group"
          >
            <span className="text-xl block mb-2">🧠</span>
            <span className="mono text-xs font-black text-white uppercase group-hover:text-brand-purple block mb-1">Flashcards</span>
            <span className="mono text-[9px] text-zinc-500">Spaced repetition review</span>
          </div>
        </div>
      </section>

      {/* Beginner FAQ Section */}
      <section className="space-y-6">
        <div>
          <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">
            HELP & ONBOARDING
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            COMMON QUESTIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="mono text-xs font-black text-white uppercase italic">
              Where should I start if I have zero trading experience?
            </h4>
            <p className="mono text-xs text-zinc-400 leading-relaxed">
              Start directly with our 4-Step Beginner Fast Track above. Begin with Candlestick Anatomy to understand how candles form, then progress to Fair Value Gaps and Market Structure Shifts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="mono text-xs font-black text-white uppercase italic">
              Do I need to buy expensive charting software or indicators?
            </h4>
            <p className="mono text-xs text-zinc-400 leading-relaxed">
              No. Institutional technical price action requires only raw candlestick charts (TradingView or any free charting platform). No proprietary or lagging indicators are required.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="mono text-xs font-black text-white uppercase italic">
              Is my learning progress saved across visits?
            </h4>
            <p className="mono text-xs text-zinc-400 leading-relaxed">
              Yes. Every lesson marked as completed and every quiz score is automatically persisted in your browser's local storage. You can close the tab and resume anytime.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="mono text-xs font-black text-white uppercase italic">
              How does this platform differ from generic YouTube videos?
            </h4>
            <p className="mono text-xs text-zinc-400 leading-relaxed">
              Every concept here is structured into a logical 12-module curriculum with audited mathematical definitions, animated vector diagrams, and interactive checkpoint quizzes with instant explanations.
            </p>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="text-center py-12 border-t border-white/10 space-y-6">
        <h3 className="text-3xl sm:text-5xl font-black text-white italic uppercase tracking-tighter">
          BEGIN YOUR PATHWAY TODAY.
        </h3>
        <p className="mono text-xs text-zinc-400 max-w-lg mx-auto leading-relaxed">
          Start with Candlestick Anatomy or explore the full 12-module institutional curriculum. Everything is completely free and interactive.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onSelectLesson('candlestick-anatomy')}
            className={`${GLASS_STYLES.accentButton} px-8 py-3.5 mono text-[10px] font-black uppercase tracking-[0.25em]`}
          >
            START STEP 1 →
          </button>
          <button
            onClick={() => onNavigateTab('curriculum')}
            className={`${GLASS_STYLES.button} px-8 py-3.5 mono text-[10px] font-black uppercase tracking-[0.25em]`}
          >
            EXPLORE 12 MODULES
          </button>
        </div>
      </section>
    </div>
  );
};
