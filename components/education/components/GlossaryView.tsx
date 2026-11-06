import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { GlossaryTerm, ConceptCategory } from '../types';
import { GLASS_STYLES, VARIANTS } from '../../../constants';

interface GlossaryViewProps {
  onNavigateToLesson: (slug: string) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onNavigateToLesson }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [activeTermModal, setActiveTermModal] = useState<GlossaryTerm | null>(null);

  // Unique categories
  const categories = useMemo(() => {
    const cats = new Set(GLOSSARY_TERMS.map(t => t.category));
    return ['ALL', ...Array.from(cats)];
  }, []);

  // Alphabetical list of available letters
  const letters = useMemo(() => {
    const lettersSet = new Set(GLOSSARY_TERMS.map(t => (t.abbreviation || t.term)[0].toUpperCase()));
    return ['ALL', ...Array.from(lettersSet).sort()];
  }, []);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(term => {
      if (selectedCategory !== 'ALL' && term.category !== selectedCategory) {
        return false;
      }
      const firstLetter = (term.abbreviation || term.term)[0].toUpperCase();
      if (selectedLetter !== 'ALL' && firstLetter !== selectedLetter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTerm = term.term.toLowerCase().includes(q);
        const matchesAbbr = term.abbreviation?.toLowerCase().includes(q);
        const matchesDef = term.simpleDefinition.toLowerCase().includes(q);
        if (!matchesTerm && !matchesAbbr && !matchesDef) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedLetter]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          <span className="mono text-[10px] text-brand-purple font-black tracking-[0.4em] uppercase italic">
            DICTIONARY // REPOSITORY
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
          INSTITUTIONAL GLOSSARY
        </h2>
        <p className="mono text-xs text-zinc-400 mt-2">
          Comprehensive, non-commercial lexicon of price action terminology, abbreviations, and algorithmic definitions.
        </p>
      </div>

      {/* Controls: Search, Categories, Alphabet Bar */}
      <div className={`p-6 ${GLASS_STYLES.card} space-y-4`}>
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search glossary terms by acronym (FVG, MSS, BOS) or concept..."
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

        {/* Categories */}
        <div className="flex flex-wrap gap-2 pt-2">
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

        {/* Alphabet Bar */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
          <span className="mono text-[9px] text-zinc-600 uppercase font-black mr-2">A-Z:</span>
          {letters.map((ltr) => (
            <button
              key={ltr}
              onClick={() => setSelectedLetter(ltr)}
              className={`w-7 h-7 rounded-lg mono text-[10px] font-black uppercase flex items-center justify-center transition-all ${
                selectedLetter === ltr
                  ? 'bg-white text-black font-extrabold'
                  : 'text-zinc-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {ltr}
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTerms.length === 0 ? (
          <div className={`col-span-full p-12 text-center ${GLASS_STYLES.card}`}>
            <p className="mono text-xs text-zinc-400 font-bold uppercase tracking-widest">
              NO GLOSSARY ENTRIES FOUND FOR "{searchQuery}"
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); setSelectedLetter('ALL'); }}
              className="mt-4 mono text-[10px] text-brand-purple font-black underline uppercase tracking-widest"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          filteredTerms.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveTermModal(item)}
              whileHover={{ y: -3 }}
              className={`p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-brand-purple/40 cursor-pointer transition-all duration-300 flex flex-col justify-between group shadow-xl`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {item.abbreviation ? (
                    <span className="mono text-sm font-black text-brand-purple tracking-widest px-2.5 py-1 rounded-lg bg-brand-purple/10 border border-brand-purple/20">
                      {item.abbreviation}
                    </span>
                  ) : (
                    <span className="mono text-[9px] font-bold text-zinc-500 uppercase">
                      TERM
                    </span>
                  )}
                  <span className="mono text-[8px] text-zinc-500 uppercase font-bold tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white italic uppercase tracking-tight group-hover:text-brand-purple transition-colors">
                  {item.term}
                </h3>

                <p className="mono text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {item.simpleDefinition}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
                <span className="mono text-[9px] text-zinc-500 group-hover:text-white uppercase font-bold tracking-wider transition-colors">
                  VIEW FULL BREAKDOWN →
                </span>
                {item.relatedLessonSlug && (
                  <span className="mono text-[8px] text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded font-black">
                    HAS LESSON
                  </span>
                )}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Term Detail Modal */}
      <AnimatePresence>
        {activeTermModal && (
          <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTermModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className={`relative z-10 w-full max-w-2xl ${GLASS_STYLES.card} p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto`}
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {activeTermModal.abbreviation && (
                      <span className="mono text-xs font-black text-brand-purple px-2 py-0.5 rounded bg-brand-purple/10">
                        {activeTermModal.abbreviation}
                      </span>
                    )}
                    <span className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                      {activeTermModal.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tight">
                    {activeTermModal.term}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveTermModal(null)}
                  className="w-8 h-8 rounded-full border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center mono text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Simple definition */}
              <div className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-brand-purple space-y-1">
                <span className="mono text-[8px] text-zinc-500 uppercase font-black tracking-widest block">
                  CORE DEFINITION
                </span>
                <p className="mono text-xs md:text-sm text-zinc-200 leading-relaxed font-bold">
                  {activeTermModal.simpleDefinition}
                </p>
              </div>

              {/* Detailed explanation */}
              <div className="space-y-2">
                <span className="mono text-[9px] text-brand-purple uppercase font-black tracking-widest block">
                  INSTITUTIONAL APPLICATION & CONTEXT
                </span>
                <p className="mono text-xs text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  {activeTermModal.detailedExplanation}
                </p>
              </div>

              {/* Related terms */}
              {activeTermModal.relatedTerminology.length > 0 && (
                <div className="space-y-2">
                  <span className="mono text-[8px] text-zinc-500 uppercase font-black tracking-widest block">
                    RELATED CONCEPTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeTermModal.relatedTerminology.map((term, i) => (
                      <span key={i} className="mono text-[9px] text-zinc-300 bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/5">
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveTermModal(null)}
                  className="mono text-xs text-zinc-400 hover:text-white uppercase font-bold"
                >
                  Close
                </button>

                {activeTermModal.relatedLessonSlug && (
                  <button
                    onClick={() => {
                      const slug = activeTermModal.relatedLessonSlug!;
                      setActiveTermModal(null);
                      onNavigateToLesson(slug);
                    }}
                    className={`${GLASS_STYLES.accentButton} px-6 py-2.5 mono text-[10px] font-black uppercase tracking-widest`}
                  >
                    READ COMPLETE LESSON →
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
