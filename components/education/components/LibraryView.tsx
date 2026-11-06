import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LESSONS_DATABASE } from '../data/lessonsData';
import { UserLearningProgress, ConceptCategory, DifficultyLevel } from '../types';
import { GLASS_STYLES } from '../../../constants';

interface LibraryViewProps {
  progress: UserLearningProgress;
  onSelectLesson: (slug: string) => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({ progress, onSelectLesson }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');

  const allLessons = useMemo(() => Object.values(LESSONS_DATABASE), []);

  const categories = useMemo(() => {
    const cats = new Set(allLessons.map(l => l.category));
    return ['ALL', ...Array.from(cats)];
  }, [allLessons]);

  const filteredLessons = useMemo(() => {
    return allLessons.filter(lesson => {
      if (selectedCategory !== 'ALL' && lesson.category !== selectedCategory) {
        return false;
      }
      if (selectedLevel !== 'ALL' && lesson.difficulty !== selectedLevel) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = lesson.title.toLowerCase().includes(q);
        const matchesDef = lesson.shortDefinition.toLowerCase().includes(q);
        const matchesCat = lesson.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDef && !matchesCat) return false;
      }
      return true;
    });
  }, [allLessons, selectedCategory, selectedLevel, searchQuery]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          <span className="mono text-[10px] text-brand-purple font-black tracking-[0.4em] uppercase italic">
            OFFICIAL KNOWLEDGE ARCHIVE // 137 ARTICLES ACROSS 14 CLUSTERS
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
          EDUCATIONAL ARTICLE LIBRARY
        </h2>
        <p className="mono text-xs text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Comprehensive institutional archive of all 137 educational articles from Foundations to Advanced ICT models. Every study note features multiple annotated vector figures, anatomical breakdowns, and knowledge assessments.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className={`p-6 ${GLASS_STYLES.card} space-y-4`}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search lessons by title, concept, category (e.g. FVG, Structure, Silver Bullet)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3 mono text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white mono text-xs"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl mono text-[9px] font-black uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-purple text-white shadow-[0_0_12px_rgba(139,92,246,0.3)]'
                    : 'bg-white/[0.02] text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-full">
            {['ALL', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1 rounded-full mono text-[8px] font-black uppercase tracking-wider ${
                  selectedLevel === lvl ? 'bg-white/20 text-white' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lesson Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLessons.length === 0 ? (
          <div className={`col-span-full p-12 text-center ${GLASS_STYLES.card}`}>
            <p className="mono text-xs text-zinc-400 font-bold uppercase tracking-widest">
              NO LESSONS MATCH YOUR SEARCH CRITERIA
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); setSelectedLevel('ALL'); }}
              className="mt-4 mono text-[10px] text-brand-purple font-black underline uppercase tracking-widest"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          filteredLessons.map((lesson) => {
            const isCompleted = progress.completedLessons.includes(lesson.slug);

            return (
              <motion.div
                key={lesson.slug}
                onClick={() => onSelectLesson(lesson.slug)}
                whileHover={{ y: -3 }}
                className={`p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-brand-purple/40 cursor-pointer transition-all duration-300 flex flex-col justify-between group shadow-xl`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="mono text-[8px] font-black uppercase px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/5 truncate max-w-[180px]">
                      {lesson.clusterName ? `CLUSTER 0${lesson.clusterNumber} // ${lesson.clusterName}` : lesson.category}
                    </span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="mono text-[7px] font-black uppercase px-1.5 py-0.5 rounded bg-brand-purple/15 text-brand-purple border border-brand-purple/30">
                        {lesson.figures?.length || 3} FIGURES
                      </span>
                      <span className="mono text-[7px] text-zinc-500 uppercase font-bold">
                        {lesson.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white italic uppercase tracking-tight group-hover:text-brand-purple transition-colors">
                    {lesson.title}
                  </h3>

                  <p className="mono text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {lesson.shortDefinition}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]' : 'bg-zinc-600'}`} />
                    <span className="mono text-[8px] text-zinc-500 uppercase font-black">
                      {isCompleted ? 'COMPLETED' : 'INCOMPLETE'}
                    </span>
                  </div>

                  <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-wider group-hover:underline">
                    STUDY LESSON →
                  </span>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
};
