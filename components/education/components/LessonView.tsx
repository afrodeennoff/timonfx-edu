import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LessonContent, UserLearningProgress } from '../types';
import { ChartDiagram } from './ChartDiagram';
import { GLASS_STYLES, VARIANTS } from '../../../constants';
import { LESSONS_DATABASE } from '../data/lessonsData';

interface LessonViewProps {
  lesson: LessonContent;
  progress: UserLearningProgress;
  onToggleComplete: (slug: string) => void;
  onSelectLesson: (slug: string) => void;
  onBackToCurriculum: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  progress,
  onToggleComplete,
  onSelectLesson,
  onBackToCurriculum
}) => {
  const isCompleted = progress.completedLessons.includes(lesson.slug);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  const [selectedFigureIndex, setSelectedFigureIndex] = useState(0);
  const [showAllFigures, setShowAllFigures] = useState(false);

  const figures = (lesson.figures && lesson.figures.length > 0)
    ? lesson.figures
    : (lesson.diagramType
        ? [{
            id: `fig-${lesson.slug}-1`,
            title: 'Figure 1: Core Institutional Vector Setup',
            type: lesson.diagramType,
            caption: lesson.diagramCaption || 'Primary institutional vector price action model.',
            tag: 'PRIMARY SETUP',
            subheading: 'Institutional Order Flow Mechanics',
            notes: [
              'Algorithmic execution requires displacement confirmation before entry.',
              'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
            ]
          }]
        : []);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    setRevealedAnswers(prev => ({ ...prev, [questionId]: true }));
  };

  // Find next and previous lessons
  const lessonKeys = Object.keys(LESSONS_DATABASE);
  const currentIndex = lessonKeys.indexOf(lesson.slug);
  const prevLesson = currentIndex > 0 ? LESSONS_DATABASE[lessonKeys[currentIndex - 1]] : null;
  const nextLesson = currentIndex < lessonKeys.length - 1 ? LESSONS_DATABASE[lessonKeys[currentIndex + 1]] : null;

  return (
    <motion.article 
      initial="initial"
      animate="animate"
      variants={VARIANTS.reveal}
      className="max-w-4xl mx-auto space-y-12 pb-20"
    >
      {/* 1. Lesson Header & Breadcrumbs */}
      <div className="space-y-6 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 mono text-[10px] text-zinc-400">
            <button 
              onClick={onBackToCurriculum}
              className="text-brand-purple hover:underline font-bold uppercase tracking-wider"
            >
              Curriculum
            </button>
            <span>/</span>
            <span>Module 0{lesson.moduleNumber}</span>
            <span>/</span>
            <span className="text-white font-bold">{lesson.category}</span>
          </div>

          {/* Mark Complete Button */}
          <button
            onClick={() => onToggleComplete(lesson.slug)}
            className={`px-4 py-2 rounded-full mono text-[9px] font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              isCompleted 
                ? 'bg-green-500/20 text-green-400 border border-green-500/40 shadow-[0_0_12px_rgba(34,197,94,0.3)]' 
                : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10 hover:border-brand-purple/40'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-green-400' : 'bg-zinc-600'}`} />
            {isCompleted ? 'COMPLETED' : 'MARK LESSON COMPLETE'}
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="mono text-[8px] font-black uppercase px-2.5 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/30">
              {lesson.difficulty}
            </span>
            <span className="mono text-[8px] font-bold text-zinc-500 uppercase tracking-widest">
              ⏱ {lesson.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-tight">
            {lesson.title}
          </h1>

          <p className="mono text-sm md:text-base text-zinc-300 font-medium leading-relaxed border-l-2 border-brand-purple pl-4">
            {lesson.shortDefinition}
          </p>
        </div>

        {/* Prerequisites */}
        {lesson.prerequisites && lesson.prerequisites.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="mono text-[9px] text-zinc-500 uppercase font-black">Prerequisites:</span>
            {lesson.prerequisites.map((req, idx) => (
              <span key={idx} className="mono text-[9px] text-zinc-300 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
                {req}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 2. Introduction */}
      <section className="space-y-4">
        <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
          01 // INTRODUCTION & FIRST PRINCIPLES
        </h2>
        <p className="text-base md:text-lg text-zinc-200 leading-relaxed font-normal">
          {lesson.introduction}
        </p>
      </section>

      {/* 3. Fundamental Explanation */}
      <section className="space-y-4">
        <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
          02 // THE MECHANICS OF THE CONCEPT
        </h2>
        <div className="space-y-4 text-zinc-300 leading-relaxed text-sm md:text-base font-normal">
          {lesson.fundamentalExplanation.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* 4. Multi-Figure Visual Study Gallery */}
      {figures.length > 0 && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                03 // ANNOTATED STUDY DIAGRAMS & FIGURES
              </h2>
              <span className="mono text-[8px] font-black uppercase px-2 py-0.5 rounded-full bg-brand-purple/15 text-brand-purple border border-brand-purple/30">
                {figures.length} FIGURES IN STUDY NOTE
              </span>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowAllFigures(!showAllFigures)}
                className={`mono text-[8px] font-black uppercase tracking-wider px-3 py-1 rounded-full border transition-all ${
                  showAllFigures
                    ? 'bg-brand-purple text-white border-brand-purple shadow-[0_0_12px_rgba(139,92,246,0.3)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border-white/10'
                }`}
              >
                {showAllFigures ? 'SHOW TABS' : 'EXPAND ALL FIGURES'}
              </button>
            </div>
          </div>

          {!showAllFigures ? (
            <div className="space-y-4">
              {/* Figure Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {figures.map((fig, idx) => {
                  const isActive = selectedFigureIndex === idx;
                  return (
                    <button
                      key={fig.id || idx}
                      onClick={() => setSelectedFigureIndex(idx)}
                      className={`px-3 py-2 rounded-xl mono text-[9px] font-black uppercase tracking-wider transition-all flex items-center gap-2 border ${
                        isActive
                          ? 'bg-brand-purple/20 text-white border-brand-purple shadow-[0_0_12px_rgba(139,92,246,0.25)]'
                          : 'bg-white/[0.02] text-zinc-400 hover:text-white border-white/5 hover:border-white/15'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-brand-purple shadow-[0_0_6px_rgba(139,92,246,0.8)]' : 'bg-zinc-600'}`} />
                      <span>{fig.title.split(':')[0]}</span>
                      {fig.tag && (
                        <span className={`text-[7px] px-1.5 py-0.5 rounded ${isActive ? 'bg-brand-purple text-white' : 'bg-white/5 text-zinc-500'}`}>
                          {fig.tag}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Selected Figure Display */}
              {figures[selectedFigureIndex] && (
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                    <div>
                      <h4 className="mono text-xs font-black text-white uppercase italic tracking-wide">
                        {figures[selectedFigureIndex].title}
                      </h4>
                      {figures[selectedFigureIndex].subheading && (
                        <p className="mono text-[10px] text-zinc-400 font-medium">
                          {figures[selectedFigureIndex].subheading}
                        </p>
                      )}
                    </div>
                    {figures[selectedFigureIndex].tag && (
                      <span className="mono text-[8px] font-black uppercase px-2.5 py-1 rounded bg-brand-purple/15 text-brand-purple border border-brand-purple/30 self-start sm:self-auto">
                        {figures[selectedFigureIndex].tag}
                      </span>
                    )}
                  </div>

                  <ChartDiagram 
                    type={figures[selectedFigureIndex].type} 
                    caption={figures[selectedFigureIndex].caption} 
                  />

                  {/* Figure Observational Notes */}
                  {figures[selectedFigureIndex].notes && figures[selectedFigureIndex].notes.length > 0 && (
                    <div className="p-4 rounded-xl bg-white/[0.015] border border-white/5 space-y-1.5">
                      <span className="mono text-[8px] font-black uppercase tracking-widest text-zinc-500">
                        FIGURE EXECUTION NOTES:
                      </span>
                      <ul className="space-y-1">
                        {figures[selectedFigureIndex].notes.map((note, nIdx) => (
                          <li key={nIdx} className="mono text-[10px] text-zinc-300 flex items-start gap-2">
                            <span className="text-brand-purple font-bold">›</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Render all figures stacked simultaneously */
            <div className="space-y-8">
              {figures.map((fig, idx) => (
                <div key={fig.id || idx} className="space-y-3 p-4 bg-white/[0.01] border border-white/5 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                    <div>
                      <h4 className="mono text-xs font-black text-white uppercase italic tracking-wide">
                        {fig.title}
                      </h4>
                      {fig.subheading && (
                        <p className="mono text-[10px] text-zinc-400 font-medium">
                          {fig.subheading}
                        </p>
                      )}
                    </div>
                    {fig.tag && (
                      <span className="mono text-[8px] font-black uppercase px-2 py-0.5 rounded bg-brand-purple/15 text-brand-purple border border-brand-purple/30 self-start sm:self-auto">
                        {fig.tag}
                      </span>
                    )}
                  </div>

                  <ChartDiagram type={fig.type} caption={fig.caption} />

                  {fig.notes && fig.notes.length > 0 && (
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="mono text-[8px] font-black uppercase tracking-widest text-zinc-500">
                        FIGURE NOTES:
                      </span>
                      <ul className="space-y-1">
                        {fig.notes.map((note, nIdx) => (
                          <li key={nIdx} className="mono text-[10px] text-zinc-300 flex items-start gap-2">
                            <span className="text-brand-purple font-bold">›</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 5. Concept Anatomy */}
      <section className="space-y-4">
        <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
          04 // CONCEPT ANATOMY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson.conceptAnatomy.map((part, index) => (
            <div key={index} className={`p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2`}>
              <h3 className="mono text-xs font-black text-white uppercase italic">
                {part.title}
              </h3>
              <p className="mono text-[11px] text-zinc-400 leading-relaxed">
                {part.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Identification Checklist */}
      <section className="space-y-4">
        <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
          05 // STEP-BY-STEP RECOGNITION CHECKLIST
        </h2>
        <div className="space-y-2.5 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
          {lesson.identificationRules.map((rule, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mono text-xs font-black text-brand-purple">0{index + 1}.</span>
              <span className="mono text-xs text-zinc-200 leading-relaxed font-medium">{rule}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Institutional Context */}
      <section className="space-y-4">
        <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
          06 // INSTITUTIONAL AUCTION CONTEXT
        </h2>
        <div className="p-6 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 text-zinc-300 leading-relaxed text-sm md:text-base">
          {lesson.institutionalContext}
        </div>
      </section>

      {/* 8. Bullish & Bearish Examples */}
      <section className="space-y-4">
        <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
          07 // HYPOTHETICAL EXECUTION SCENARIOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20 space-y-2">
            <span className="mono text-[9px] font-black uppercase tracking-wider text-green-400">
              BULLISH SETUP // LONG
            </span>
            <h3 className="text-base font-black text-white italic uppercase">
              {lesson.bullishScenario.title}
            </h3>
            <p className="mono text-[11px] text-zinc-400 leading-relaxed">
              {lesson.bullishScenario.description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-brand-red/5 border border-red-500/20 space-y-2">
            <span className="mono text-[9px] font-black uppercase tracking-wider text-brand-red">
              BEARISH SETUP // SHORT
            </span>
            <h3 className="text-base font-black text-white italic uppercase">
              {lesson.bearishScenario.title}
            </h3>
            <p className="mono text-[11px] text-zinc-400 leading-relaxed">
              {lesson.bearishScenario.description}
            </p>
          </div>
        </div>
      </section>

      {/* 9. Common Misconceptions */}
      <section className="space-y-4">
        <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
          08 // COMMON MISCONCEPTIONS & PITFALLS
        </h2>
        <div className="space-y-3">
          {lesson.commonMisconceptions.map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mono text-xs leading-relaxed text-zinc-300">
              ⚠️ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 10. Knowledge Check (Quizzes) */}
      <section className="space-y-6 pt-6 border-t border-white/10">
        <div>
          <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
            09 // KNOWLEDGE CHECK QUIZ
          </h2>
          <p className="mono text-xs text-zinc-400 mt-1">
            Test your understanding before progressing. Instant feedback and explanations are provided.
          </p>
        </div>

        <div className="space-y-6">
          {lesson.quiz.map((q, qIndex) => {
            const hasAnswered = revealedAnswers[q.id];
            const chosen = selectedAnswers[q.id];

            return (
              <div key={q.id} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                <span className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black">
                  QUESTION 0{qIndex + 1}
                </span>
                <p className="text-base font-bold text-white">{q.question}</p>

                <div className="space-y-2">
                  {q.options.map((opt, optIndex) => {
                    let btnStyle = 'bg-white/[0.03] border-white/10 text-zinc-300 hover:border-brand-purple/50';

                    if (hasAnswered) {
                      if (optIndex === q.correctIndex) {
                        btnStyle = 'bg-green-500/20 border-green-500 text-green-300 font-bold';
                      } else if (chosen === optIndex) {
                        btnStyle = 'bg-red-500/20 border-red-500 text-red-300';
                      } else {
                        btnStyle = 'opacity-40 border-transparent';
                      }
                    }

                    return (
                      <button
                        key={optIndex}
                        onClick={() => !hasAnswered && handleSelectOption(q.id, optIndex)}
                        disabled={hasAnswered}
                        className={`w-full p-3.5 rounded-xl text-left mono text-xs transition-all border ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {hasAnswered && (
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 mono text-xs text-zinc-300">
                    <span className="text-brand-purple font-bold">Explanation: </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. Frequently Asked Questions */}
      {lesson.faqs && lesson.faqs.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-white/10">
          <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
            10 // FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-3">
            {lesson.faqs.map((faq, index) => (
              <div key={index} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="mono text-xs font-black text-white uppercase italic">
                  Q: {faq.question}
                </h3>
                <p className="mono text-xs text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 12. Key Takeaways */}
      <section className="space-y-4 pt-6 border-t border-white/10">
        <h2 className="mono text-xs text-brand-purple font-black uppercase tracking-[0.3em]">
          11 // KEY TAKEAWAYS
        </h2>
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
          {lesson.keyTakeaways.map((takeaway, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="text-brand-purple font-bold">•</span>
              <span className="mono text-xs text-zinc-200 leading-relaxed font-medium">{takeaway}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Navigation Prev / Next */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
        {prevLesson ? (
          <button
            onClick={() => onSelectLesson(prevLesson.slug)}
            className="w-full sm:w-auto p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-left transition-all group"
          >
            <span className="mono text-[8px] text-zinc-500 uppercase tracking-widest block">PREVIOUS LESSON</span>
            <span className="mono text-xs font-black text-white group-hover:text-brand-purple transition-colors">
              ← {prevLesson.title}
            </span>
          </button>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <button
            onClick={() => onSelectLesson(nextLesson.slug)}
            className="w-full sm:w-auto p-4 rounded-2xl bg-brand-purple/10 hover:bg-brand-purple border border-brand-purple/30 text-right transition-all group"
          >
            <span className="mono text-[8px] text-brand-purple group-hover:text-white uppercase tracking-widest block">NEXT LESSON</span>
            <span className="mono text-xs font-black text-white transition-colors">
              {nextLesson.title} →
            </span>
          </button>
        ) : (
          <button
            onClick={onBackToCurriculum}
            className="w-full sm:w-auto p-4 rounded-2xl bg-brand-purple text-white font-black mono text-xs uppercase"
          >
            RETURN TO CURRICULUM
          </button>
        )}
      </div>
    </motion.article>
  );
};
