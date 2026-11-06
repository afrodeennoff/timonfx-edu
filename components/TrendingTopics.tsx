import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GLASS_STYLES, VARIANTS, MOTION_RULES } from '../constants';
import { GhostText } from './GhostText';

interface TrendingTopic {
  id: string;
  rank: string;
  title: string;
  slug: string;
  badge: string;
  category: string;
  readTime: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  engagement: string;
  highlights: string[];
}

const TRENDING_TOPICS: TrendingTopic[] = [
  {
    id: 'fvg',
    rank: '#01 TRENDING',
    title: 'Fair Value Gap (FVG)',
    slug: 'fair-value-gap',
    badge: '🔥 MOST POPULAR',
    category: 'Imbalances',
    readTime: '5 min read',
    level: 'Beginner',
    description: 'Three-candle auction vacuum left by aggressive algorithmic displacement. The universal foundation of institutional entries.',
    engagement: '4.2k studying today',
    highlights: ['50% Consequent Encroachment', 'Displacement Confirmation', 'High Win-Rate']
  },
  {
    id: 'sb',
    rank: '#02 TRENDING',
    title: 'Silver Bullet (10–11 AM NY)',
    slug: 'silver-bullet',
    badge: '⚡ HIGH IMPACT',
    category: 'Macros & Time',
    readTime: '6 min read',
    level: 'Intermediate',
    description: 'The premier 60-minute algorithmic execution model on Index Futures (NQ/ES) with a strict mechanical 1:2 R:R framework.',
    engagement: '3.6k studying today',
    highlights: ['Session Precision', '10-15 Pt NQ Target', 'Fixed Stop-Loss Rules']
  },
  {
    id: 'mss',
    rank: '#03 TRENDING',
    title: 'Market Structure Shift (MSS)',
    slug: 'market-structure-shift',
    badge: '🎯 CORE LOGIC',
    category: 'Market Structure',
    readTime: '8 min read',
    level: 'Intermediate',
    description: 'Decisive reversal confirmation where price purges liquidity and slices through opposing swing points with energetic displacement.',
    engagement: '3.1k studying today',
    highlights: ['Displacement Candle', 'Broken Swing Low/High', 'Liquidity Sweep Filter']
  },
  {
    id: 'turtle',
    rank: '#04 TRENDING',
    title: 'Turtle Soup & Liquidity Raids',
    slug: 'turtle-soup',
    badge: '🐢 TRAP FADE',
    category: 'Liquidity',
    readTime: '7 min read',
    level: 'Intermediate',
    description: 'Fades false breakout traps by identifying shallow 5–15 tick stop runs of established swing extremes followed by aggressive rejection.',
    engagement: '2.5k studying today',
    highlights: ['20-Day High/Low Sweeps', 'Instant Rejection Wick', '1:3+ R:R Potential']
  },
  {
    id: 'po3',
    rank: '#05 TRENDING',
    title: 'Power of Three (AMD Cycle)',
    slug: 'power-of-three',
    badge: '💎 INSTITUTIONAL',
    category: 'Daily Profiles',
    readTime: '9 min read',
    level: 'Intermediate',
    description: 'The three-phase daily price delivery cycle: Asian Accumulation, London Judas Swing Manipulation, and New York Distribution.',
    engagement: '2.8k studying today',
    highlights: ['00:00 Midnight Open', 'Judas Swing Trap', 'Expansion Delivery']
  },
  {
    id: 'candle',
    rank: '#06 TRENDING',
    title: 'Candlestick Anatomy & OHLC',
    slug: 'candlestick-anatomy',
    badge: '🟢 START HERE',
    category: 'Foundations',
    readTime: '4 min read',
    level: 'Beginner',
    description: 'Zero-knowledge starting point: understand how Open, High, Low, and Close prices interact with market spread and liquidity wicks.',
    engagement: '5.1k beginners started',
    highlights: ['OHLC Physics', 'Body vs Wick Ratio', 'Zero Jargon']
  }
];

interface TrendingTopicsProps {
  onSelectTopic: (slug: string) => void;
  onExploreAcademy: () => void;
}

export const TrendingTopics: React.FC<TrendingTopicsProps> = ({
  onSelectTopic,
  onExploreAcademy
}) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'Beginner' | 'Intermediate'>('ALL');

  const filteredTopics = activeFilter === 'ALL' 
    ? TRENDING_TOPICS 
    : TRENDING_TOPICS.filter(t => t.level === activeFilter);

  return (
    <section id="trending" className="py-12 md:py-16 bg-brand-black relative overflow-hidden scroll-mt-24 md:scroll-mt-32">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">
        {/* Header Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={MOTION_RULES.viewport}
          variants={VARIANTS.staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8"
        >
          <div className="space-y-4">
            <motion.div variants={VARIANTS.reveal} className="flex items-center gap-3">
              <span className="mono text-[9px] font-black uppercase px-2.5 py-1 rounded-full bg-brand-purple/15 text-brand-purple border border-brand-purple/30 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" />
                TRENDING IN ACADEMY // LIVE NOW
              </span>
              <span className="mono text-[9px] text-zinc-500 font-bold uppercase hidden sm:inline">
                COMMUNITY ENGAGEMENT
              </span>
            </motion.div>

            <motion.h2 variants={VARIANTS.reveal} className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter leading-none">
              HOTTEST PRICE ACTION <br />
              <GhostText text="MODELS & SETUPS." className="text-transparent transition-colors cursor-default stroke-text" />
            </motion.h2>

            <motion.p variants={VARIANTS.reveal} className="mono text-xs text-zinc-400 max-w-xl leading-relaxed">
              The most studied institutional concepts by traders this week. Select any card to launch its dedicated interactive lesson, vector diagram, and knowledge check.
            </motion.p>
          </div>

          {/* Quick Filter Chips & Action */}
          <motion.div variants={VARIANTS.reveal} className="flex flex-wrap items-center gap-2">
            <div className="p-1 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-1">
              {(['ALL', 'Beginner', 'Intermediate'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full mono text-[9px] font-black uppercase tracking-wider transition-all ${
                    activeFilter === filter
                      ? 'bg-brand-purple text-white shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                      : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {filter === 'ALL' ? '🔥 ALL TRENDING' : filter === 'Beginner' ? '🟢 BEGINNER FIRST' : '⚡ INTERMEDIATE'}
                </button>
              ))}
            </div>

            <button
              onClick={onExploreAcademy}
              className={`${GLASS_STYLES.button} px-4 py-2 mono text-[9px] font-black uppercase tracking-widest text-zinc-300 hover:text-white`}
            >
              VIEW ALL 19 CONCEPTS →
            </button>
          </motion.div>
        </motion.div>

        {/* Trending Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => onSelectTopic(topic.slug)}
              className={`p-6 rounded-2xl ${GLASS_STYLES.card} hover:border-brand-purple/40 hover:bg-white/[0.04] cursor-pointer transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden`}
            >
              {/* Subtle Corner Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Card Top: Rank & Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="mono text-[8px] font-black uppercase px-2 py-0.5 rounded bg-white/[0.05] text-zinc-400 group-hover:text-brand-purple transition-colors">
                    {topic.rank}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="mono text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-brand-purple/15 text-brand-purple border border-brand-purple/30">
                      {topic.badge}
                    </span>
                    <span className={`mono text-[8px] font-black uppercase px-2 py-0.5 rounded-full ${
                      topic.level === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {topic.level}
                    </span>
                  </div>
                </div>

                {/* Title & Category */}
                <div>
                  <span className="mono text-[8px] text-zinc-500 font-bold uppercase tracking-wider block mb-1">
                    {topic.category} // {topic.readTime}
                  </span>
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tight group-hover:text-brand-purple transition-colors">
                    {topic.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mono text-[10px] text-zinc-400 leading-relaxed">
                  {topic.description}
                </p>

                {/* Highlight Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {topic.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="mono text-[8px] px-2 py-0.5 rounded bg-white/[0.03] text-zinc-500 border border-white/5 font-medium"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Live Engagement + CTA */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                <span className="mono text-[8px] text-zinc-500 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {topic.engagement}
                </span>

                <span className="mono text-[9px] font-black uppercase tracking-wider text-brand-purple group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>STUDY NOW</span>
                  <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Fast-Track Banner */}
        <div className={`p-6 sm:p-8 rounded-2xl ${GLASS_STYLES.card} border-brand-purple/20 flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-xl shrink-0">
              🚀
            </div>
            <div>
              <h4 className="mono text-base font-black text-white uppercase italic">
                COMPLETE 14-CLUSTER ACADEMY CURRICULUM (137 ARTICLES)
              </h4>
              <p className="mono text-xs text-zinc-400 mt-0.5">
                Progress from zero-knowledge candlestick basics to quantitative multi-timeframe execution. All 137 articles equipped with multi-figure diagrams and interactive simulators.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onSelectTopic('candlestick-anatomy')}
              className={`${GLASS_STYLES.accentButton} ${GLASS_STYLES.accentButtonHover} px-6 py-3 mono text-[10px] font-black uppercase tracking-widest w-full sm:w-auto text-center`}
            >
              START BEGINNER TRACK →
            </button>
            <button
              onClick={onExploreAcademy}
              className={`${GLASS_STYLES.button} ${GLASS_STYLES.buttonHover} px-6 py-3 mono text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-white w-full sm:w-auto text-center`}
            >
              OPEN ACADEMY HUB
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
