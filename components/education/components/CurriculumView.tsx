import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import { CurriculumModule, UserLearningProgress, DifficultyLevel } from '../types';
import { GLASS_STYLES, VARIANTS } from '../../../constants';
import { LESSONS_DATABASE } from '../data/lessonsData';

interface CurriculumViewProps {
  progress: UserLearningProgress;
  onSelectLesson: (slug: string) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ progress, onSelectLesson }) => {
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | DifficultyLevel>('ALL');

  const filteredModules = selectedLevel === 'ALL'
    ? CURRICULUM_MODULES
    : CURRICULUM_MODULES.filter(m => m.level === selectedLevel);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
            <span className="mono text-[10px] text-brand-purple font-black tracking-[0.4em] uppercase italic">
              OFFICIAL ICT CURRICULUM // 14 CLUSTERS (137 ARTICLES)
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            COMPLETE INSTITUTIONAL PATHWAY
          </h2>
          <p className="mono text-xs text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            All 137 articles across the 14 official Inner Circle Trader clusters: Foundations, Market Structure, Liquidity, PD Arrays, Models & Sessions, CRT, S&D, Advanced ICT, and Execution Strategy.
          </p>
        </div>

        {/* Level Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-full">
          {['ALL', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl as any)}
              className={`px-4 py-2 rounded-full mono text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${
                selectedLevel === lvl
                  ? 'bg-brand-purple text-white shadow-[0_0_12px_rgba(139,92,246,0.3)]'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Modules List */}
      <div className="grid grid-cols-1 gap-6">
        {filteredModules.map((module) => {
          // Calculate module completion
          const completedInModule = module.lessonSlugs.filter(slug => progress.completedLessons.includes(slug)).length;
          const percent = Math.round((completedInModule / (module.lessonSlugs.length || 1)) * 100);

          return (
            <motion.div
              key={module.id}
              variants={VARIANTS.reveal}
              className={`p-6 md:p-8 ${GLASS_STYLES.card} hover:border-white/25 transition-all duration-500 space-y-6 group`}
            >
              {/* Module Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mono font-black text-base text-brand-purple group-hover:scale-105 transition-transform">
                    {module.moduleNumber < 10 ? `0${module.moduleNumber}` : module.moduleNumber}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`mono text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${
                        module.level === 'Beginner' 
                          ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' 
                          : module.level === 'Intermediate' 
                          ? 'border-brand-purple/30 text-brand-purple bg-brand-purple/10' 
                          : 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                      }`}>
                        {module.level}
                      </span>
                      <span className="mono text-[8px] text-zinc-500 uppercase font-bold">
                        {module.estimatedHours}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tight group-hover:text-brand-purple transition-colors">
                      {module.title}
                    </h3>
                  </div>
                </div>

                {/* Progress in Module */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="mono text-[8px] text-zinc-500 uppercase font-black tracking-widest block">
                      PROGRESS
                    </span>
                    <span className="mono text-xs font-black text-white">
                      {completedInModule} / {module.lessonSlugs.length} Lessons ({percent}%)
                    </span>
                  </div>
                  <div className="w-20 h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
                    <div 
                      className="h-full bg-brand-purple transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Description & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="mono text-[8px] text-zinc-500 uppercase font-black tracking-widest block">
                    MODULE OVERVIEW
                  </span>
                  <p className="mono text-xs text-zinc-300 leading-relaxed">
                    {module.description}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="mono text-[8px] text-zinc-500 uppercase font-black tracking-widest block">
                    LEARNING OBJECTIVE
                  </span>
                  <p className="mono text-xs text-zinc-400 leading-relaxed border-l border-brand-purple/30 pl-3">
                    {module.objective}
                  </p>
                </div>
              </div>

              {/* Lessons within this module */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <span className="mono text-[9px] text-zinc-500 uppercase font-black tracking-widest block">
                  MODULE LESSON DIRECTORY
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {module.lessonSlugs.map((slug) => {
                    const lessonData = LESSONS_DATABASE[slug];
                    const isDone = progress.completedLessons.includes(slug);

                    return (
                      <button
                        key={slug}
                        onClick={() => onSelectLesson(slug)}
                        className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-brand-purple/40 text-left transition-all duration-300 flex items-center justify-between group/les"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="flex items-center gap-2 mb-1">
                            {isDone ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                            )}
                            <span className="mono text-[8px] text-zinc-500 uppercase font-bold truncate">
                              {lessonData ? lessonData.readTime : '6 min read'}
                            </span>
                          </div>
                          <span className="mono text-xs font-bold text-zinc-200 group-hover/les:text-white truncate block">
                            {lessonData ? lessonData.title : slug.replace(/-/g, ' ').toUpperCase()}
                          </span>
                        </div>

                        <span className="mono text-xs text-zinc-600 group-hover/les:text-brand-purple transition-colors">
                          →
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
