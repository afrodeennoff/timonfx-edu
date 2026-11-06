import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GLASS_STYLES, VARIANTS } from '../../../constants';
import { ChartDiagram } from './ChartDiagram';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { UserLearningProgress } from '../types';

interface ToolsViewProps {
  progress: UserLearningProgress;
  onNavigateToLesson: (slug: string) => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ progress, onNavigateToLesson }) => {
  const [activeTool, setActiveTool] = useState<
    'concept' | 'candle' | 'structure' | 'fvg' | 'session' | 'flashcards' | 'tracker'
  >('concept');

  // Tool 1: Concept Explorer State
  const [selectedConcept, setSelectedConcept] = useState<'fvg' | 'mss' | 'ob' | 'po3' | 'pd'>('fvg');

  // Tool 2: Candle Anatomy State
  const [candleOpen, setCandleOpen] = useState(100);
  const [candleClose, setCandleClose] = useState(140);
  const [candleHigh, setCandleHigh] = useState(160);
  const [candleLow, setCandleLow] = useState(80);

  // Tool 3: Market Structure Practice State
  const [structureStep, setStructureStep] = useState(0);
  const [userGuess, setUserGuess] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Tool 4: FVG Visualizer State
  const [c1High, setC1High] = useState(110);
  const [c2High, setC2High] = useState(180);
  const [c2Low, setC2Low] = useState(100);
  const [c3Low, setC3Low] = useState(135);

  // Tool 5: Session Time Explorer State
  const [utcTime, setUtcTime] = useState<string>('');
  const [estTime, setEstTime] = useState<string>('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
      setEstTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now) + ' EST (NY)'
      );
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  // Tool 6: Flashcards State
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % GLOSSARY_TERMS.length);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + GLOSSARY_TERMS.length) % GLOSSARY_TERMS.length);
  };

  const currentFlashcard = GLOSSARY_TERMS[cardIndex];

  // Structure questions
  const structureQuestions = [
    {
      scenario: 'Price rallies, sweeps an old Swing High, and then closes a 5M candle with heavy displacement below the previous Swing Low. What structural event has occurred?',
      options: ['BOS (Break of Structure)', 'MSS (Market Structure Shift)', 'Equal Highs', 'Liquidity Inducement'],
      correct: 'MSS (Market Structure Shift)',
      explanation: 'Because price purged liquidity and closed below the opposing swing low with displacement, this is a textbook Market Structure Shift (reversal), not a continuation BOS.'
    },
    {
      scenario: 'In an established uptrend, price creates a new swing high that closes cleanly above the previous swing high. What is this?',
      options: ['BOS (Break of Structure)', 'MSS (Market Structure Shift)', 'Judas Swing', 'Balanced Price Range'],
      correct: 'BOS (Break of Structure)',
      explanation: 'A Break of Structure (BOS) confirms ongoing continuation of the active trend.'
    },
    {
      scenario: 'Two consecutive daily candles peak at 15,340.25 and 15,340.50. What has the institutional algorithm engineered?',
      options: ['Equal Highs (EQH) Buy-Side Liquidity Pool', 'Bullish Order Block', 'Discount Zone', 'Optimal Trade Entry'],
      correct: 'Equal Highs (EQH) Buy-Side Liquidity Pool',
      explanation: 'Nearly identical swing highs engineer a pool of buy stop orders (BSL) that algorithms frequently raid before reversing.'
    }
  ];

  const handleStructureAnswer = (opt: string) => {
    setUserGuess(opt);
    if (opt === structureQuestions[structureStep].correct) {
      setFeedback('CORRECT: ' + structureQuestions[structureStep].explanation);
    } else {
      setFeedback('INCORRECT: ' + structureQuestions[structureStep].explanation);
    }
  };

  // Tool 4 gap calculation
  const hasFVG = c3Low > c1High;
  const gapSize = hasFVG ? (c3Low - c1High).toFixed(1) : 0;
  const consequentEncroachment = hasFVG ? ((c3Low + c1High) / 2).toFixed(1) : 0;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          <span className="mono text-[10px] text-brand-purple font-black tracking-[0.4em] uppercase italic">
            EDUCATIONAL SUITE // WORKSPACE
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
          INTERACTIVE LEARNING TOOLS
        </h2>
        <p className="mono text-xs text-zinc-400 mt-2">
          Hands-on simulation environments to test concept recognition, candlestick anatomy, algorithmic timers, and flashcards.
        </p>
      </div>

      {/* Tool Selector Bar */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl">
        {[
          { id: 'concept', label: '01 Concept Explorer' },
          { id: 'candle', label: '02 Candle Anatomy' },
          { id: 'structure', label: '03 Structure Practice' },
          { id: 'fvg', label: '04 FVG Visualizer' },
          { id: 'session', label: '05 Session & Killzones' },
          { id: 'flashcards', label: '06 Flashcards' },
          { id: 'tracker', label: '07 Progress Tracker' }
        ].map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id as any)}
            className={`px-4 py-2.5 rounded-xl mono text-[10px] font-black uppercase tracking-wider transition-all duration-300 ${
              activeTool === tool.id
                ? 'bg-brand-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tool.label}
          </button>
        ))}
      </div>

      {/* Tool 01: Concept Explorer */}
      {activeTool === 'concept' && (
        <div className={`p-6 md:p-8 ${GLASS_STYLES.card} space-y-6`}>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">TOOL 01</span>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">CONCEPT VISUAL EXPLORER</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'fvg', label: 'Fair Value Gap' },
                { id: 'mss', label: 'Structure Shift (MSS)' },
                { id: 'ob', label: 'Order Block' },
                { id: 'po3', label: 'Power of Three (AMD)' },
                { id: 'pd', label: 'Premium / Discount' }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedConcept(c.id as any)}
                  className={`px-3 py-1.5 rounded-lg mono text-[9px] font-bold uppercase tracking-wider ${
                    selectedConcept === c.id ? 'bg-white/20 text-white' : 'bg-white/[0.02] text-zinc-500 hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            {selectedConcept === 'fvg' && (
              <ChartDiagram type="fvg-bullish" caption="Bullish FVG: Space between Candle 1 high and Candle 3 low represents an unfilled auction imbalance." />
            )}
            {selectedConcept === 'mss' && (
              <ChartDiagram type="market-structure-shift" caption="Market Structure Shift: Liquidity is swept first, followed by rapid displacement breaking opposing swing structure." />
            )}
            {selectedConcept === 'ob' && (
              <ChartDiagram type="order-block" caption="Order Block: The final opposing candle prior to displacement. Retests to the 50% Mean Threshold offer high-probability entry." />
            )}
            {selectedConcept === 'po3' && (
              <ChartDiagram type="power-of-three" caption="Power of Three (AMD): Accumulation around open price -> Manipulation (Judas Swing) sweeping stops -> Distribution expansion." />
            )}
            {selectedConcept === 'pd' && (
              <ChartDiagram type="premium-discount" caption="Dealing Range & OTE: 50% divides Premium and Discount. Optimal Trade Entry bracket is located in 62%–79% deep discount." />
            )}
          </div>
        </div>
      )}

      {/* Tool 02: Candle Anatomy Explorer */}
      {activeTool === 'candle' && (
        <div className={`p-6 md:p-8 ${GLASS_STYLES.card} space-y-6`}>
          <div className="border-b border-white/10 pb-4">
            <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">TOOL 02</span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">CANDLESTICK ANATOMY SIMULATOR</h3>
            <p className="mono text-xs text-zinc-400 mt-1">
              Adjust Open, High, Low, and Close parameters to observe body vs wick ratios and how auction behavior changes sentiment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-6 space-y-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              <div>
                <div className="flex justify-between mono text-[10px] text-zinc-400 mb-1">
                  <span>HIGH PRICE</span>
                  <span className="text-white font-bold">{candleHigh}</span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="200"
                  value={candleHigh}
                  onChange={(e) => setCandleHigh(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              <div>
                <div className="flex justify-between mono text-[10px] text-zinc-400 mb-1">
                  <span>OPEN PRICE</span>
                  <span className="text-white font-bold">{candleOpen}</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="160"
                  value={candleOpen}
                  onChange={(e) => setCandleOpen(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              <div>
                <div className="flex justify-between mono text-[10px] text-zinc-400 mb-1">
                  <span>CLOSE PRICE</span>
                  <span className="text-white font-bold">{candleClose}</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="160"
                  value={candleClose}
                  onChange={(e) => setCandleClose(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              <div>
                <div className="flex justify-between mono text-[10px] text-zinc-400 mb-1">
                  <span>LOW PRICE</span>
                  <span className="text-white font-bold">{candleLow}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="90"
                  value={candleLow}
                  onChange={(e) => setCandleLow(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 mono text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Candle State:</span>
                  <span className={`font-black ${candleClose >= candleOpen ? 'text-green-400' : 'text-brand-red'}`}>
                    {candleClose >= candleOpen ? 'BULLISH (DEMAND)' : 'BEARISH (SUPPLY)'}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Body Size:</span>
                  <span className="text-white">{Math.abs(candleClose - candleOpen)} ticks</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Upper Rejection Wick:</span>
                  <span className="text-white">{candleHigh - Math.max(candleOpen, candleClose)} ticks</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Lower Rejection Wick:</span>
                  <span className="text-white">{Math.min(candleOpen, candleClose) - candleLow} ticks</span>
                </div>
              </div>
            </div>

            {/* SVG Visualizer */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 bg-[#050505] rounded-2xl border border-white/10 min-h-[320px]">
              <svg viewBox="0 0 240 320" className="w-56 h-80">
                {/* Scale mappings (20 to 200 maps to 290 to 30) */}
                {(() => {
                  const scale = (val: number) => 300 - ((val - 20) / (200 - 20)) * 270;
                  const yHigh = scale(candleHigh);
                  const yLow = scale(candleLow);
                  const yOpen = scale(candleOpen);
                  const yClose = scale(candleClose);
                  const isBull = candleClose >= candleOpen;
                  const bodyTop = Math.min(yOpen, yClose);
                  const bodyHeight = Math.max(4, Math.abs(yClose - yOpen));

                  return (
                    <g>
                      {/* Upper Wick */}
                      <line x1="120" y1={yHigh} x2="120" y2={bodyTop} stroke={isBull ? '#22c55e' : '#ef4444'} strokeWidth="3" />
                      {/* Lower Wick */}
                      <line x1="120" y1={bodyTop + bodyHeight} x2="120" y2={yLow} stroke={isBull ? '#22c55e' : '#ef4444'} strokeWidth="3" />
                      {/* Real Body */}
                      <rect x="80" y={bodyTop} width="80" height={bodyHeight} fill={isBull ? '#22c55e' : '#ef4444'} rx="3" />

                      {/* Labels */}
                      <text x="170" y={yHigh + 4} fill="#a1a1aa" fontSize="10" fontFamily="JetBrains Mono">High: {candleHigh}</text>
                      <text x="170" y={bodyTop + 8} fill={isBull ? '#22c55e' : '#ef4444'} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                        {isBull ? `Close: ${candleClose}` : `Open: ${candleOpen}`}
                      </text>
                      <text x="170" y={bodyTop + bodyHeight + 4} fill={isBull ? '#22c55e' : '#ef4444'} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                        {isBull ? `Open: ${candleOpen}` : `Close: ${candleClose}`}
                      </text>
                      <text x="170" y={yLow + 4} fill="#a1a1aa" fontSize="10" fontFamily="JetBrains Mono">Low: {candleLow}</text>
                    </g>
                  );
                })()}
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Tool 03: Market Structure Practice */}
      {activeTool === 'structure' && (
        <div className={`p-6 md:p-8 ${GLASS_STYLES.card} space-y-6`}>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">TOOL 03</span>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">MARKET STRUCTURE QUIZ PRACTICE</h3>
            </div>
            <span className="mono text-xs text-zinc-400">
              Question {structureStep + 1} of {structureQuestions.length}
            </span>
          </div>

          <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 space-y-6">
            <p className="text-base md:text-lg text-white font-medium leading-relaxed">
              {structureQuestions[structureStep].scenario}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {structureQuestions[structureStep].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleStructureAnswer(opt)}
                  className={`p-4 rounded-xl text-left mono text-xs font-bold transition-all border ${
                    userGuess === opt
                      ? opt === structureQuestions[structureStep].correct
                        ? 'bg-green-500/20 border-green-500 text-green-300'
                        : 'bg-red-500/20 border-red-500 text-red-300'
                      : 'bg-white/[0.03] border-white/10 text-zinc-300 hover:border-brand-purple/50 hover:bg-white/5'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {feedback && (
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 mono text-xs leading-relaxed text-zinc-200">
                {feedback}
              </div>
            )}

            <div className="flex justify-between items-center pt-4">
              <button
                disabled={structureStep === 0}
                onClick={() => {
                  setStructureStep((prev) => Math.max(0, prev - 1));
                  setUserGuess(null);
                  setFeedback(null);
                }}
                className="mono text-xs text-zinc-400 hover:text-white disabled:opacity-20"
              >
                ← Previous Question
              </button>

              <button
                disabled={structureStep === structureQuestions.length - 1}
                onClick={() => {
                  setStructureStep((prev) => Math.min(structureQuestions.length - 1, prev + 1));
                  setUserGuess(null);
                  setFeedback(null);
                }}
                className="mono text-xs text-brand-purple font-black hover:text-white disabled:opacity-20 uppercase tracking-widest"
              >
                Next Question →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tool 04: FVG Visualizer */}
      {activeTool === 'fvg' && (
        <div className={`p-6 md:p-8 ${GLASS_STYLES.card} space-y-6`}>
          <div className="border-b border-white/10 pb-4">
            <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">TOOL 04</span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">FAIR VALUE GAP (FVG) CALCULATOR</h3>
            <p className="mono text-xs text-zinc-400 mt-1">
              Adjust Candle 1 High and Candle 3 Low to dynamically test whether a valid Fair Value Gap exists and compute its Consequent Encroachment (50%).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              <div>
                <div className="flex justify-between mono text-[10px] text-zinc-400 mb-1">
                  <span>CANDLE 1 HIGH</span>
                  <span className="text-white font-bold">{c1High}</span>
                </div>
                <input
                  type="range"
                  min="90"
                  max="140"
                  value={c1High}
                  onChange={(e) => setC1High(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              <div>
                <div className="flex justify-between mono text-[10px] text-zinc-400 mb-1">
                  <span>CANDLE 3 LOW</span>
                  <span className="text-white font-bold">{c3Low}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="160"
                  value={c3Low}
                  onChange={(e) => setC3Low(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 mono text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Imbalance Status:</span>
                  <span className={`font-black ${hasFVG ? 'text-green-400' : 'text-brand-red'}`}>
                    {hasFVG ? 'VALID FAIR VALUE GAP DETECTED' : 'NO GAP (CANDLES OVERLAP)'}
                  </span>
                </div>
                {hasFVG && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Gap Range:</span>
                      <span className="text-white font-bold">{c1High} → {c3Low} ({gapSize} pts)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Consequent Encroachment (50%):</span>
                      <span className="text-brand-purple font-black">{consequentEncroachment}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-[#050505] p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[260px]">
              {hasFVG ? (
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-brand-purple/20 border border-brand-purple flex items-center justify-center mx-auto text-brand-purple text-2xl font-black">
                    ✓
                  </div>
                  <h4 className="mono text-sm font-black text-white uppercase">INSTITUTIONAL IMBALANCE ACTIVE</h4>
                  <p className="mono text-xs text-zinc-400 max-w-xs">
                    Limit entry recommended at {c3Low} (proximal edge) or {consequentEncroachment} (50% C.E.).
                  </p>
                </div>
              ) : (
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center mx-auto text-red-400 text-2xl font-black">
                    ✕
                  </div>
                  <h4 className="mono text-sm font-black text-white uppercase">BALANCED PRICE DELIVERY</h4>
                  <p className="mono text-xs text-zinc-400 max-w-xs">
                    Candle 1 and Candle 3 overlap. No open liquidity vacuum exists between these points.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tool 05: Session Time Explorer */}
      {activeTool === 'session' && (
        <div className={`p-6 md:p-8 ${GLASS_STYLES.card} space-y-6`}>
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">TOOL 05</span>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">GLOBAL SESSION & KILLZONE CLOCK</h3>
            </div>
            <div className="flex items-center gap-4 bg-white/[0.04] px-4 py-2 rounded-xl border border-white/10">
              <div>
                <span className="mono text-[8px] text-zinc-500 block uppercase">CURRENT UTC</span>
                <span className="mono text-xs font-black text-white">{utcTime || 'SYNCING...'}</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <span className="mono text-[8px] text-zinc-500 block uppercase">CURRENT EST (NY)</span>
                <span className="mono text-xs font-black text-brand-purple">{estTime || 'SYNCING...'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-3">
              <span className="mono text-[9px] font-black uppercase tracking-wider text-blue-400">SESSION 01</span>
              <h4 className="text-xl font-black text-white uppercase italic">ASIAN RANGE</h4>
              <div className="mono text-xs text-zinc-400 space-y-1">
                <div>UTC: 20:00 - 00:00</div>
                <div>NY EST: 15:00 - 19:00</div>
              </div>
              <p className="mono text-[10px] text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                Typically range-bound consolidation. Engineers clear high and low liquidity boundaries for London manipulation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-brand-purple/10 border border-brand-purple/30 space-y-3">
              <span className="mono text-[9px] font-black uppercase tracking-wider text-brand-purple">SESSION 02 // PRIME</span>
              <h4 className="text-xl font-black text-white uppercase italic">LONDON OPEN KILLZONE</h4>
              <div className="mono text-xs text-zinc-300 space-y-1 font-bold">
                <div>UTC: 02:00 - 05:00</div>
                <div>London: 07:00 - 10:00</div>
                <div>NY EST: 02:00 - 05:00 AM</div>
              </div>
              <p className="mono text-[10px] text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                Highest foreign exchange volume. Frequently crafts the true High or Low of the day through the Judas Swing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
              <span className="mono text-[9px] font-black uppercase tracking-wider text-emerald-400">SESSION 03 // EQUITIES</span>
              <h4 className="text-xl font-black text-white uppercase italic">NEW YORK AM KILLZONE</h4>
              <div className="mono text-xs text-zinc-300 space-y-1 font-bold">
                <div>UTC: 13:30 - 16:00</div>
                <div>NY EST: 08:30 - 11:00 AM</div>
                <div>Silver Bullet: 10:00 - 11:00 AM</div>
              </div>
              <p className="mono text-[10px] text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                US Equities bell (09:30 AM NY) and high-impact macro reports (10:00 AM). Prime volatility for NQ and ES futures.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tool 06: Knowledge Flashcards */}
      {activeTool === 'flashcards' && (
        <div className={`p-6 md:p-8 ${GLASS_STYLES.card} space-y-6`}>
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">TOOL 06</span>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">INSTITUTIONAL VOCABULARY FLASHCARDS</h3>
            </div>
            <span className="mono text-xs text-zinc-400">
              Card {cardIndex + 1} of {GLOSSARY_TERMS.length}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <motion.div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full max-w-xl min-h-[260px] p-8 md:p-12 rounded-3xl bg-[#070709] border border-white/15 hover:border-brand-purple/40 shadow-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 text-center select-none"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="mono text-[9px] text-zinc-500 uppercase tracking-widest">
                {isFlipped ? 'DEFINITION // CLICK TO FLIP' : 'CONCEPT TERM // CLICK TO REVEAL DEFINITION'}
              </div>

              {!isFlipped ? (
                <div className="my-auto space-y-3">
                  <span className="mono text-xs font-black uppercase px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                    {currentFlashcard.category}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tight">
                    {currentFlashcard.term}
                  </h4>
                  {currentFlashcard.abbreviation && (
                    <div className="mono text-sm text-zinc-400 font-bold tracking-widest">
                      ({currentFlashcard.abbreviation})
                    </div>
                  )}
                </div>
              ) : (
                <div className="my-auto space-y-4">
                  <p className="mono text-sm md:text-base text-zinc-200 leading-relaxed font-medium">
                    "{currentFlashcard.simpleDefinition}"
                  </p>
                  <p className="mono text-xs text-zinc-400 leading-relaxed">
                    {currentFlashcard.detailedExplanation}
                  </p>
                </div>
              )}

              <div className="mono text-[8px] text-zinc-600 uppercase tracking-widest">
                CARD INDEX #{cardIndex + 1}
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handlePrevCard}
                className="px-6 py-2.5 rounded-full border border-white/10 text-zinc-300 hover:text-white mono text-xs font-bold"
              >
                ← PREV
              </button>
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-8 py-2.5 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-purple hover:bg-brand-purple hover:text-white mono text-xs font-black uppercase tracking-wider transition-all"
              >
                {isFlipped ? 'SHOW TERM' : 'REVEAL DEFINITION'}
              </button>
              <button
                onClick={handleNextCard}
                className="px-6 py-2.5 rounded-full border border-white/10 text-zinc-300 hover:text-white mono text-xs font-bold"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tool 07: Learning Tracker */}
      {activeTool === 'tracker' && (
        <div className={`p-6 md:p-8 ${GLASS_STYLES.card} space-y-6`}>
          <div className="border-b border-white/10 pb-4">
            <span className="mono text-[9px] text-brand-purple font-black uppercase tracking-widest">TOOL 07</span>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase italic">LEARNING PROGRESS TRACKER</h3>
            <p className="mono text-xs text-zinc-400 mt-1">
              Your real-time curriculum progress and completed lesson audit, stored persistently in your local browser state.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <span className="mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">COMPLETED LESSONS</span>
              <span className="mono text-2xl font-black text-white">{progress.completedLessons.length}</span>
              <span className="mono text-[8px] text-zinc-600 block mt-1">PUBLISHED LESSONS</span>
            </div>

            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <span className="mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">MODULE PROGRESS</span>
              <span className="mono text-2xl font-black text-brand-purple">
                {Math.round((progress.completedLessons.length / 12) * 100)}%
              </span>
              <span className="mono text-[8px] text-zinc-600 block mt-1">CURRICULUM COMPLETION</span>
            </div>

            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <span className="mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">QUIZZES MASTERED</span>
              <span className="mono text-2xl font-black text-green-400">
                {Object.keys(progress.quizScores).length}
              </span>
              <span className="mono text-[8px] text-zinc-600 block mt-1">KNOWLEDGE CHECKS PASSED</span>
            </div>

            <div className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl">
              <span className="mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">BOOKMARKS</span>
              <span className="mono text-2xl font-black text-amber-400">
                {progress.bookmarkedLessons.length}
              </span>
              <span className="mono text-[8px] text-zinc-600 block mt-1">SAVED CONCEPTS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
