import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GLASS_STYLES } from '../../../constants';
import { UserLearningProgress, QuizQuestion } from '../types';

interface PracticeViewProps {
  progress: UserLearningProgress;
  onSaveQuizScore: (quizId: string, score: number, total: number) => void;
  onNavigateToLesson: (slug: string) => void;
}

const ASSESSMENT_QUESTIONS: (QuizQuestion & { module: string; relatedSlug: string })[] = [
  {
    id: 'pra-01',
    module: 'Module 05: PD Arrays',
    relatedSlug: 'fair-value-gap',
    question: 'In a Bullish Fair Value Gap, which boundaries define the unfilled price vacuum?',
    options: [
      'The high of Candle 1 and the low of Candle 3',
      'The open and close of Candle 2 only',
      'The highest high of the previous month',
      'The moving average support line'
    ],
    correctIndex: 0,
    explanation: 'A Bullish FVG exists in the open space between the high of Candle 1 and the low of Candle 3, created by aggressive displacement in Candle 2.'
  },
  {
    id: 'pra-02',
    module: 'Module 03: Market Structure',
    relatedSlug: 'market-structure-shift',
    question: 'What distinguishes an authentic Market Structure Shift (MSS) from a standard Break of Structure (BOS)?',
    options: [
      'MSS occurs after a liquidity run and displaces through the opposing swing structure (reversal), whereas BOS is a trend continuation',
      'BOS requires a 100-pip move while MSS requires only 5 pips',
      'MSS is only valid on the 1-minute chart',
      'There is no difference between the two terms'
    ],
    correctIndex: 0,
    explanation: 'BOS confirms that the current trend is continuing. MSS confirms that the market has purged liquidity and reversed structure.'
  },
  {
    id: 'pra-03',
    module: 'Module 04: Liquidity',
    relatedSlug: 'liquidity-concepts',
    question: 'Where does Buy-Side Liquidity (BSL) primarily concentrate?',
    options: [
      'Above swing highs, equal highs, and the Previous Day High (PDH)',
      'Directly at the 50% midpoint of the daily chart',
      'Below swing lows and equal lows',
      'At market close on Friday'
    ],
    correctIndex: 0,
    explanation: 'Buy-Side Liquidity consists of buy stops resting above swing highs and equal highs, which institutions raid to sell their inventory.'
  },
  {
    id: 'pra-04',
    module: 'Module 07: ICT & SMC',
    relatedSlug: 'silver-bullet',
    question: 'What is the primary New York morning Silver Bullet execution window?',
    options: [
      '10:00 AM to 11:00 AM New York local time',
      '07:00 AM to 08:00 AM New York time',
      '12:00 PM to 01:00 PM New York time',
      '20:00 PM to 21:00 PM Tokyo time'
    ],
    correctIndex: 0,
    explanation: 'The primary New York Silver Bullet macro window occurs daily strictly between 10:00 AM and 11:00 AM NY local time.'
  },
  {
    id: 'pra-05',
    module: 'Module 07: ICT & SMC',
    relatedSlug: 'power-of-three',
    question: 'What is the second phase of the Power of Three (AMD) cycle?',
    options: [
      'Manipulation (Judas Swing) - a false move opposite the true trend designed to engineer counterparty liquidity',
      'Immediate settlement close',
      'Weekly rollover',
      'Distribution consolidation'
    ],
    correctIndex: 0,
    explanation: 'Phase 2 is Manipulation (Judas Swing), driving price below/above the open to sweep stops before distributing into the true trend.'
  },
  {
    id: 'pra-06',
    module: 'Module 10: Risk Math',
    relatedSlug: 'risk-reward-math',
    question: 'If a strategy operates with an average Risk-to-Reward ratio of 1:3, what is its mathematical breakeven win rate?',
    options: [
      '25%',
      '50%',
      '75%',
      '90%'
    ],
    correctIndex: 0,
    explanation: 'Breakeven Win Rate = 1 / (1 + 3) = 0.25 (25%). Winning 3 out of 10 trades yields positive net profitability.'
  }
];

export const PracticeView: React.FC<PracticeViewProps> = ({
  progress,
  onSaveQuizScore,
  onNavigateToLesson
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = ASSESSMENT_QUESTIONS[currentIdx];

  const handleConfirmAnswer = () => {
    if (selectedOpt === null) return;
    setHasSubmitted(true);
    if (selectedOpt === currentQ.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOpt(null);
      setHasSubmitted(false);
    } else {
      setIsFinished(true);
      onSaveQuizScore('curriculum_comprehensive', score + (selectedOpt === currentQ.correctIndex ? 1 : 0), ASSESSMENT_QUESTIONS.length);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setHasSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          <span className="mono text-[10px] text-brand-purple font-black tracking-[0.4em] uppercase italic">
            KNOWLEDGE AUDIT // ASSESSMENTS
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
          PRACTICE & KNOWLEDGE CHECKS
        </h2>
        <p className="mono text-xs text-zinc-400 mt-2">
          Verify your mastery of price action mechanics, algorithmic delivery, terminology, and risk mathematics.
        </p>
      </div>

      {!isFinished ? (
        <div className={`p-8 md:p-10 ${GLASS_STYLES.card} space-y-6 relative overflow-hidden`}>
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs mono text-zinc-400 border-b border-white/10 pb-4">
            <div>
              <span className="text-brand-purple font-black">{currentQ.module}</span>
            </div>
            <div>
              Question {currentIdx + 1} of {ASSESSMENT_QUESTIONS.length}
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-white italic uppercase leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, i) => {
                let style = 'bg-white/[0.02] border-white/10 hover:border-brand-purple/50 text-zinc-300';

                if (hasSubmitted) {
                  if (i === currentQ.correctIndex) {
                    style = 'bg-green-500/20 border-green-500 text-green-300 font-bold';
                  } else if (selectedOpt === i) {
                    style = 'bg-red-500/20 border-red-500 text-red-300';
                  } else {
                    style = 'opacity-30 border-transparent';
                  }
                } else if (selectedOpt === i) {
                  style = 'bg-brand-purple/20 border-brand-purple text-white font-bold';
                }

                return (
                  <button
                    key={i}
                    onClick={() => !hasSubmitted && setSelectedOpt(i)}
                    disabled={hasSubmitted}
                    className={`w-full p-4 rounded-xl text-left mono text-xs transition-all border ${style}`}
                  >
                    <span className="mono text-zinc-500 mr-3">0{i + 1}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Feedback on submit */}
            {hasSubmitted && (
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 mono text-xs text-zinc-200">
                <div className="font-bold flex items-center gap-2">
                  {selectedOpt === currentQ.correctIndex ? (
                    <span className="text-green-400">✓ CORRECT ANSWER</span>
                  ) : (
                    <span className="text-brand-red">✕ INCORRECT ANSWER</span>
                  )}
                </div>
                <p>{currentQ.explanation}</p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigateToLesson(currentQ.relatedSlug)}
                    className="text-brand-purple hover:underline font-bold uppercase tracking-wider"
                  >
                    Review Related Lesson →
                  </button>
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex justify-between items-center pt-6 border-t border-white/10">
              <span className="mono text-xs text-zinc-500">
                Current Score: {score} / {currentIdx + (hasSubmitted ? 1 : 0)}
              </span>

              {!hasSubmitted ? (
                <button
                  disabled={selectedOpt === null}
                  onClick={handleConfirmAnswer}
                  className={`${GLASS_STYLES.accentButton} px-8 py-3 mono text-xs font-black uppercase tracking-widest disabled:opacity-30`}
                >
                  SUBMIT ANSWER
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className={`${GLASS_STYLES.accentButton} px-8 py-3 mono text-xs font-black uppercase tracking-widest`}
                >
                  {currentIdx < ASSESSMENT_QUESTIONS.length - 1 ? 'NEXT QUESTION →' : 'VIEW FINAL SCORE →'}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Results Card */
        <div className={`p-10 md:p-14 ${GLASS_STYLES.card} text-center space-y-6`}>
          <div className="w-20 h-20 rounded-full bg-brand-purple/20 border border-brand-purple flex items-center justify-center mx-auto text-3xl font-black text-brand-purple">
            {Math.round((score / ASSESSMENT_QUESTIONS.length) * 100)}%
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-black text-white italic uppercase tracking-tight">
              ASSESSMENT COMPLETED
            </h3>
            <p className="mono text-sm text-zinc-300">
              You scored <span className="text-brand-purple font-black">{score}</span> out of <span className="text-white font-black">{ASSESSMENT_QUESTIONS.length}</span> questions correct.
            </p>
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={handleRestart}
              className={`${GLASS_STYLES.button} px-6 py-3 mono text-xs font-black uppercase tracking-widest`}
            >
              RE-TAKE ASSESSMENT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
