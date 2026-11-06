import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiagramType } from '../types';

interface ChartDiagramProps {
  type: DiagramType;
  caption?: string;
  className?: string;
}

export const ChartDiagram: React.FC<ChartDiagramProps> = memo(({ type, caption, className = '' }) => {
  const [replayKey, setReplayKey] = useState(0);
  const [isAnimated, setIsAnimated] = useState(true);
  const [activeStage, setActiveStage] = useState<number>(0);

  // Common colors matching TIMON theme
  const green = '#22c55e';
  const red = '#ef4444';
  const purple = '#8b5cf6';
  const textZinc = '#a1a1aa';
  const gridLine = 'rgba(255,255,255,0.05)';
  const gold = '#eab308';

  // Periodic stage ticker for multi-step annotations
  useEffect(() => {
    if (!isAnimated) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, [isAnimated, replayKey]);

  const handleReplay = () => {
    setReplayKey((k) => k + 1);
    setActiveStage(0);
  };

  return (
    <div className={`w-full bg-[#070709] border border-white/10 rounded-2xl p-3 sm:p-5 overflow-hidden relative group/diagram shadow-2xl transition-all duration-300 hover:border-brand-purple/30 ${className}`}>
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* Top Header Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-white/5 relative z-10">
        <div className="flex items-center gap-2.5">
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.8)]" 
          />
          <span className="mono text-[9px] uppercase tracking-[0.25em] text-zinc-300 font-black">
            DIAGRAM // {type.toUpperCase().replace(/-/g, '_')}
          </span>
          <span className="hidden sm:inline-block mono text-[8px] px-2 py-0.5 rounded-full bg-brand-purple/15 text-brand-purple border border-brand-purple/30 font-bold">
            ANIMATED VECTOR MODEL
          </span>
        </div>

        {/* Playback & Motion Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAnimated(!isAnimated)}
            className={`mono text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border transition-all ${
              isAnimated 
                ? 'bg-brand-purple/20 border-brand-purple/40 text-brand-purple' 
                : 'bg-white/5 border-white/10 text-zinc-500 hover:text-white'
            }`}
          >
            {isAnimated ? 'MOTION ON' : 'PAUSED'}
          </button>

          <button
            onClick={handleReplay}
            className="mono text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/10 flex items-center gap-1.5 transition-all"
            title="Re-run animation sequence"
          >
            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>REPLAY</span>
          </button>
        </div>
      </div>

      {/* SVG Canvas Viewport */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] max-h-[380px] flex items-center justify-center relative z-10 overflow-hidden">
        <svg 
          key={replayKey}
          viewBox="0 0 800 360" 
          className="w-full h-full select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Subtle Grid Coordinates */}
          <line x1="40" y1="90" x2="760" y2="90" stroke={gridLine} strokeDasharray="4 4" />
          <line x1="40" y1="180" x2="760" y2="180" stroke={gridLine} strokeDasharray="4 4" />
          <line x1="40" y1="270" x2="760" y2="270" stroke={gridLine} strokeDasharray="4 4" />

          {/* 1. BULLISH FAIR VALUE GAP */}
          {type === 'fvg-bullish' && (
            <g>
              {/* Animated Glowing FVG Zone */}
              <motion.rect
                x="220"
                y="135"
                width="360"
                height="75"
                fill={purple}
                initial={{ opacity: 0, scaleY: 0.2 }}
                animate={{ 
                  opacity: [0.12, 0.22, 0.12],
                  scaleY: 1
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                rx="6"
                stroke={purple}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Consequent Encroachment (50% CE) Line */}
              <motion.line
                x1="220"
                y1="172.5"
                x2="580"
                y2="172.5"
                stroke={purple}
                strokeWidth="1.5"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
              <text x="360" y="170" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold" letterSpacing="1">
                50% CONSEQUENT ENCROACHMENT (CE)
              </text>

              {/* Candle 1 */}
              <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <line x1="170" y1="180" x2="170" y2="290" stroke={green} strokeWidth="2.5" />
                <rect x="155" y="210" width="30" height="60" fill={green} rx="2" />
                <text x="150" y="315" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">CANDLE 1</text>
                <line x1="185" y1="210" x2="260" y2="210" stroke={textZinc} strokeWidth="1" strokeDasharray="2 2" />
                <text x="265" y="214" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Candle 1 High</text>
              </motion.g>

              {/* Candle 2 (Displacement Explosion) */}
              <motion.g initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
                <line x1="290" y1="65" x2="290" y2="260" stroke={green} strokeWidth="2.5" />
                <rect x="270" y="85" width="40" height="155" fill={green} rx="2" />
                <motion.text 
                  x="250" 
                  y="55" 
                  fill={green} 
                  fontSize="11" 
                  fontFamily="JetBrains Mono" 
                  fontWeight="bold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ⚡ DISPLACEMENT
                </motion.text>
              </motion.g>

              {/* Candle 3 */}
              <motion.g initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <line x1="410" y1="110" x2="410" y2="200" stroke={green} strokeWidth="2.5" />
                <rect x="395" y="120" width="30" height="40" fill={green} rx="2" />
                <text x="390" y="225" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">CANDLE 3</text>
                <line x1="425" y1="135" x2="490" y2="135" stroke={textZinc} strokeWidth="1" strokeDasharray="2 2" />
                <text x="495" y="139" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Candle 3 Low</text>
              </motion.g>

              {/* Animated Retest Trace & Target Expansion */}
              <motion.path
                d="M 500,120 Q 550,172 610,172 Q 660,172 730,80"
                fill="none"
                stroke={purple}
                strokeWidth="2.5"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 1 }}
              />

              {/* Entry Ping Indicator */}
              <motion.circle
                cx="610"
                cy="172"
                r="6"
                fill={purple}
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 2.2 }}
              />
              <text x="625" y="176" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                OTE / FVG ENTRY
              </text>
              <text x="690" y="70" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                TARGET EXPANSION ↑
              </text>
            </g>
          )}

          {/* 2. BEARISH FAIR VALUE GAP */}
          {type === 'fvg-bearish' && (
            <g>
              {/* Highlight Zone */}
              <motion.rect
                x="220"
                y="145"
                width="360"
                height="75"
                fill={red}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.22, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
                rx="6"
                stroke={red}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* 50% CE */}
              <line x1="220" y1="182.5" x2="580" y2="182.5" stroke={red} strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="360" y="180" fill={red} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                50% CONSEQUENT ENCROACHMENT (CE)
              </text>

              {/* Candle 1 */}
              <g>
                <line x1="170" y1="70" x2="170" y2="170" stroke={red} strokeWidth="2.5" />
                <rect x="155" y="85" width="30" height="60" fill={red} rx="2" />
                <text x="150" y="60" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">CANDLE 1</text>
                <line x1="185" y1="145" x2="250" y2="145" stroke={textZinc} strokeWidth="1" strokeDasharray="2 2" />
                <text x="255" y="149" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Candle 1 Low</text>
              </g>

              {/* Candle 2 (Downside Displacement) */}
              <motion.g initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                <line x1="290" y1="100" x2="290" y2="300" stroke={red} strokeWidth="2.5" />
                <rect x="270" y="120" width="40" height="160" fill={red} rx="2" />
                <text x="240" y="325" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                  DISPLACEMENT DOWN ▼
                </text>
              </motion.g>

              {/* Candle 3 */}
              <g>
                <line x1="410" y1="190" x2="410" y2="290" stroke={red} strokeWidth="2.5" />
                <rect x="395" y="220" width="30" height="40" fill={red} rx="2" />
                <text x="390" y="175" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">CANDLE 3</text>
                <line x1="425" y1="220" x2="490" y2="220" stroke={textZinc} strokeWidth="1" strokeDasharray="2 2" />
                <text x="495" y="224" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Candle 3 High</text>
              </g>

              {/* Retest */}
              <motion.path
                d="M 500,240 Q 550,182 610,182 Q 660,182 730,280"
                fill="none"
                stroke={red}
                strokeWidth="2.5"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <circle cx="610" cy="182" r="6" fill={red} />
              <text x="625" y="186" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                SHORT ENTRY
              </text>
            </g>
          )}

          {/* 3. MARKET STRUCTURE SHIFT (MSS) */}
          {type === 'market-structure-shift' && (
            <g>
              {/* Liquidity Sweep High Line */}
              <motion.line
                x1="180" y1="65" x2="470" y2="65"
                stroke={purple} strokeWidth="1.5" strokeDasharray="4 4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <text x="200" y="55" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                SWING HIGH // BUY-SIDE LIQUIDITY
              </text>

              {/* Animated Price Path */}
              <motion.path
                d="M 80,240 L 160,150 L 210,190 L 280,65 L 340,160 L 410,48 L 440,90 L 530,260 L 590,185 L 700,310"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />

              {/* Swept High shockwave */}
              <motion.circle
                cx="410" cy="48" r="6" fill={red}
                animate={{ r: [6, 14, 6], opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <text x="360" y="35" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                LIQUIDITY SWEPT (TURTLE SOUP)
              </text>

              {/* MSS Break Level */}
              <line x1="340" y1="160" x2="620" y2="160" stroke={red} strokeWidth="1.5" strokeDasharray="4 3" />
              <circle cx="340" cy="160" r="4" fill={red} />
              <text x="350" y="152" fill={red} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                MSS LEVEL (PRIOR SWING LOW VIOLATED)
              </text>

              {/* FVG Retest & Short */}
              <motion.circle 
                cx="590" cy="185" r="5" fill={purple}
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 1.5 }}
              />
              <text x="595" y="175" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                FVG MITIGATION / EXECUTE SHORT
              </text>
            </g>
          )}

          {/* 4. BREAK OF STRUCTURE (BOS) */}
          {type === 'break-of-structure' && (
            <g>
              <motion.path
                d="M 60,300 L 160,190 L 220,240 L 340,120 L 400,180 L 520,70 L 580,130 L 700,30"
                fill="none"
                stroke={green}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
              />

              {/* BOS Lines */}
              <line x1="160" y1="190" x2="360" y2="190" stroke={purple} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="240" y="180" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">BOS #1 (CONTINUATION)</text>

              <line x1="340" y1="120" x2="540" y2="120" stroke={purple} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="420" y="110" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">BOS #2 (CONTINUATION)</text>

              <line x1="520" y1="70" x2="720" y2="70" stroke={purple} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="600" y="60" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">BOS #3 (EXPANSION)</text>

              {/* Swing Labels */}
              <text x="150" y="210" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">HH</text>
              <text x="215" y="260" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">HL</text>
              <text x="330" y="140" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">HH</text>
              <text x="395" y="200" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">HL</text>
            </g>
          )}

          {/* 5. LIQUIDITY SWEEP */}
          {type === 'liquidity-sweep' && (
            <g>
              {/* Resting Liquidity Pool */}
              <motion.line
                x1="100" y1="100" x2="700" y2="100"
                stroke={purple} strokeWidth="2" strokeDasharray="5 5"
                animate={{ strokeDashoffset: [0, 20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <text x="120" y="90" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                BUY-SIDE LIQUIDITY POOL (EQUAL HIGHS // RESTING BUY STOPS)
              </text>

              {/* Equal Highs */}
              <circle cx="220" cy="100" r="5" fill={purple} />
              <circle cx="360" cy="100" r="5" fill={purple} />
              <text x="205" y="125" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">High 1</text>
              <text x="345" y="125" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">High 2 (EQH)</text>

              {/* Sweep Spike Path */}
              <motion.path
                d="M 120,260 L 220,100 L 280,210 L 360,100 L 420,190 L 500,45 L 530,120 L 640,310"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Purge Shockwave */}
              <motion.circle
                cx="500" cy="45" r="7" fill={red}
                animate={{ r: [7, 20, 7], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <text x="520" y="45" fill={red} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                LIQUIDITY PURGE (STOPS TRIGGERED)
              </text>
              <text x="560" y="230" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                INSTITUTIONAL FLUSH DOWN ▼
              </text>
            </g>
          )}

          {/* 6. ORDER BLOCK (OB) */}
          {type === 'order-block' && (
            <g>
              {/* Highlight Box around down-candle */}
              <rect x="220" y="140" width="70" height="105" fill={purple} fillOpacity="0.25" rx="4" stroke={purple} strokeWidth="1.5" />
              <line x1="255" y1="120" x2="255" y2="260" stroke={red} strokeWidth="2.5" />
              <rect x="240" y="145" width="30" height="95" fill={red} rx="2" />
              <text x="180" y="280" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">LAST DOWN-CLOSE CANDLE</text>

              {/* 50% Mean Threshold */}
              <line x1="220" y1="192.5" x2="620" y2="192.5" stroke={gold} strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="320" y="185" fill={gold} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                50% MEAN THRESHOLD (MT)
              </text>

              {/* Projection zone */}
              <rect x="290" y="140" width="330" height="105" fill={purple} fillOpacity="0.08" stroke={purple} strokeWidth="1" strokeDasharray="3 3" />
              <text x="330" y="215" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                BULLISH ORDER BLOCK MITIGATION ZONE
              </text>

              {/* Impulsive rally leaving OB */}
              <line x1="330" y1="70" x2="330" y2="200" stroke={green} strokeWidth="2.5" />
              <rect x="315" y="80" width="30" height="110" fill={green} rx="2" />

              <line x1="380" y1="30" x2="380" y2="150" stroke={green} strokeWidth="2.5" />
              <rect x="365" y="40" width="30" height="100" fill={green} rx="2" />

              {/* Retest curve */}
              <motion.path
                d="M 440,60 Q 520,120 560,175 Q 600,80 690,20"
                fill="none"
                stroke={green}
                strokeWidth="2.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, delay: 0.8 }}
              />
              <circle cx="560" cy="175" r="6" fill={green} />
              <text x="540" y="250" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                OB MITIGATION & EXPANSION ↑
              </text>
            </g>
          )}

          {/* 7. BREAKER BLOCK */}
          {type === 'breaker-block' && (
            <g>
              <motion.path
                d="M 100,240 L 200,120 L 280,195 L 400,55 L 500,270 L 590,165 L 700,320"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2 }}
              />

              {/* Breaker Zone */}
              <motion.rect
                x="240" y="155" width="400" height="55"
                fill={red}
                initial={{ fillOpacity: 0.05 }}
                animate={{ fillOpacity: [0.1, 0.22, 0.1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                stroke={red} strokeWidth="1.5" strokeDasharray="3 3" rx="4"
              />
              <text x="320" y="185" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                BEARISH BREAKER BLOCK (FLIPPED OB)
              </text>

              <circle cx="400" cy="55" r="5" fill={purple} />
              <text x="380" y="40" fill={purple} fontSize="10" fontFamily="JetBrains Mono">Higher High (Sweep)</text>

              <circle cx="500" cy="270" r="5" fill={red} />
              <text x="470" y="295" fill={red} fontSize="10" fontFamily="JetBrains Mono">Lower Low (Violated)</text>

              <circle cx="590" cy="165" r="6" fill={red} />
              <text x="605" y="160" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                BREAKER RETEST / HIGH CONVICTION SHORT
              </text>
            </g>
          )}

          {/* 8. POWER OF THREE (AMD) */}
          {type === 'power-of-three' && (
            <g>
              {/* Midnight True Day Open (00:00 NY) */}
              <motion.line
                x1="60" y1="180" x2="740" y2="180"
                stroke="#71717a" strokeWidth="1.5" strokeDasharray="4 4"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <text x="80" y="170" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                TRUE DAY OPEN BENCHMARK (00:00 NY / MIDNIGHT)
              </text>

              {/* 1. Accumulation Phase Box */}
              <rect x="120" y="150" width="160" height="60" fill={purple} fillOpacity="0.12" stroke={purple} strokeWidth="1" strokeDasharray="2 2" rx="4" />
              <text x="135" y="140" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                1. ACCUMULATION (ASIAN RANGE)
              </text>
              <path d="M 130,180 Q 160,165 190,185 Q 230,165 270,180" fill="none" stroke="#d4d4d8" strokeWidth="2" />

              {/* 2. Manipulation (Judas Swing) */}
              <motion.path
                d="M 270,180 L 340,300"
                fill="none"
                stroke={red}
                strokeWidth="3.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <circle cx="340" cy="300" r="6" fill={red} />
              <text x="270" y="325" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                2. MANIPULATION (JUDAS SWING)
              </text>
              <text x="290" y="340" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">
                Sweeps Asian Lows in London Open
              </text>

              {/* 3. Distribution True Expansion */}
              <motion.path
                d="M 340,300 L 460,90 L 530,130 L 660,50"
                fill="none"
                stroke={green}
                strokeWidth="3.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 1.2 }}
              />
              <circle cx="660" cy="50" r="6" fill={green} />
              <text x="470" y="45" fill={green} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                3. DISTRIBUTION (TRUE NY EXPANSION)
              </text>
            </g>
          )}

          {/* 9. CANDLESTICK ANATOMY */}
          {type === 'candlestick-anatomy' && (
            <g>
              {/* Bullish Candle Dynamic */}
              <g transform="translate(160, 30)">
                <line x1="70" y1="20" x2="70" y2="260" stroke={green} strokeWidth="3" />
                <motion.rect 
                  x="45" y="80" width="50" height="130" fill={green} rx="3"
                  animate={{ scaleY: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <line x1="70" y1="20" x2="135" y2="20" stroke={textZinc} strokeWidth="1" strokeDasharray="2 2" />
                <text x="140" y="24" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">High Wick Extremity</text>

                <line x1="95" y1="80" x2="135" y2="80" stroke={green} strokeWidth="1" strokeDasharray="2 2" />
                <text x="140" y="84" fill={green} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Close (Bullish Body)</text>

                <line x1="95" y1="210" x2="135" y2="210" stroke={green} strokeWidth="1" strokeDasharray="2 2" />
                <text x="140" y="214" fill={green} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Open (Discount Base)</text>

                <line x1="70" y1="260" x2="135" y2="260" stroke={textZinc} strokeWidth="1" strokeDasharray="2 2" />
                <text x="140" y="264" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">Low Wick Extremity</text>

                <text x="15" y="300" fill={green} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                  BULLISH (CLOSE &gt; OPEN)
                </text>
              </g>

              {/* Bearish Candle Dynamic */}
              <g transform="translate(480, 30)">
                <line x1="70" y1="20" x2="70" y2="260" stroke={red} strokeWidth="3" />
                <motion.rect 
                  x="45" y="80" width="50" height="130" fill={red} rx="3"
                  animate={{ scaleY: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                <line x1="70" y1="20" x2="135" y2="20" stroke={textZinc} strokeWidth="1" strokeDasharray="2 2" />
                <text x="140" y="24" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">High Wick Extremity</text>

                <line x1="95" y1="80" x2="135" y2="80" stroke={red} strokeWidth="1" strokeDasharray="2 2" />
                <text x="140" y="84" fill={red} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Open (Premium Peak)</text>

                <line x1="95" y1="210" x2="135" y2="210" stroke={red} strokeWidth="1" strokeDasharray="2 2" />
                <text x="140" y="214" fill={red} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Close (Bearish Body)</text>

                <line x1="70" y1="260" x2="135" y2="260" stroke={textZinc} strokeWidth="1" strokeDasharray="2 2" />
                <text x="140" y="264" fill={textZinc} fontSize="10" fontFamily="JetBrains Mono">Low Wick Extremity</text>

                <text x="15" y="300" fill={red} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                  BEARISH (CLOSE &lt; OPEN)
                </text>
              </g>
            </g>
          )}

          {/* 10. PREMIUM VS DISCOUNT (OTE) */}
          {type === 'premium-discount' && (
            <g>
              {/* Range High */}
              <line x1="60" y1="50" x2="740" y2="50" stroke={red} strokeWidth="2" />
              <text x="80" y="40" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                100.0% SWING HIGH (DEALING RANGE HIGH)
              </text>

              {/* Premium Zone */}
              <rect x="60" y="50" width="680" height="110" fill={red} fillOpacity="0.06" />
              <text x="300" y="110" fill={red} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold" letterSpacing="3">
                PREMIUM (EXPENSIVE // SELL SIDE PD ARRAYS)
              </text>

              {/* 50% Equilibrium */}
              <motion.line 
                x1="60" y1="160" x2="740" y2="160" 
                stroke={purple} strokeWidth="2.5" strokeDasharray="6 4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <text x="80" y="152" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                50.0% EQUILIBRIUM (FAIR VALUE MEAN)
              </text>

              {/* OTE Golden Zone (62% - 79%) */}
              <motion.rect
                x="60" y="186" width="680" height="38"
                fill={purple}
                animate={{ fillOpacity: [0.15, 0.28, 0.15] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                stroke={gold} strokeWidth="1.5" strokeDasharray="3 3"
              />
              <text x="270" y="210" fill={gold} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold" letterSpacing="1">
                ★ 62.0% – 70.5% – 79.0% OTE (OPTIMAL TRADE ENTRY)
              </text>

              {/* Discount Zone */}
              <rect x="60" y="160" width="680" height="130" fill={green} fillOpacity="0.06" />
              <text x="300" y="260" fill={green} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold" letterSpacing="3">
                DISCOUNT (CHEAP // BUY SIDE PD ARRAYS)
              </text>

              {/* Range Low */}
              <line x1="60" y1="290" x2="740" y2="290" stroke={green} strokeWidth="2" />
              <text x="80" y="310" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                0.0% SWING LOW (DEALING RANGE LOW)
              </text>
            </g>
          )}

          {/* 11. KILLZONE SESSIONS TIMELINE */}
          {type === 'killzone-sessions' && (
            <g>
              <line x1="40" y1="180" x2="760" y2="180" stroke={gridLine} strokeWidth="6" />

              {/* Asia */}
              <rect x="60" y="110" width="180" height="140" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeWidth="1.5" rx="6" />
              <text x="85" y="135" fill="#60a5fa" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">ASIAN RANGE</text>
              <text x="85" y="155" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">20:00 - 00:00 UTC</text>
              <text x="75" y="195" fill={textZinc} fontSize="8" fontFamily="JetBrains Mono">Consolidation / Liquidity Build</text>

              {/* London */}
              <motion.rect
                x="280" y="90" width="200" height="180" fill={purple} fillOpacity="0.18" stroke={purple} strokeWidth="2" rx="6"
                animate={{ borderColor: [purple, '#fff', purple] }}
              />
              <text x="305" y="120" fill={purple} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">LONDON OPEN KILLZONE</text>
              <text x="305" y="140" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">02:00 - 05:00 UTC (07:00 Lon)</text>
              <text x="295" y="185" fill={purple} fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">Judas Swing / Daily Low/High</text>

              {/* New York AM */}
              <motion.rect
                x="520" y="70" width="220" height="220" fill={green} fillOpacity="0.18" stroke={green} strokeWidth="2" rx="6"
                animate={{ strokeWidth: [2, 3, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <text x="540" y="105" fill={green} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">NEW YORK AM KILLZONE</text>
              <text x="540" y="125" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">13:30 - 16:00 UTC (09:30 NY)</text>
              <text x="535" y="165" fill={gold} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">10:00 - 11:00 Silver Bullet</text>
              <text x="535" y="190" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Major Equities Opening Volatility</text>
            </g>
          )}

          {/* 12. SMT DIVERGENCE (SMART MONEY TECHNIQUE) */}
          {type === 'smt-divergence' && (
            <g>
              {/* Asset 1: ES (Lower Low) */}
              <text x="60" y="55" fill="#38bdf8" fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                ASSET A (ES / S&P 500) — MAKES LOWER LOW (LL)
              </text>
              <motion.path
                d="M 60,110 L 160,80 L 260,140 L 360,70 L 460,165 L 560,95 L 680,60"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8 }}
              />
              <circle cx="260" cy="140" r="5" fill="#38bdf8" />
              <circle cx="460" cy="165" r="5" fill={red} />
              <line x1="260" y1="140" x2="460" y2="165" stroke={red} strokeWidth="2" strokeDasharray="3 3" />
              <text x="470" y="175" fill={red} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Lower Low (Stop Sweep)</text>

              {/* Asset 2: NQ (Higher Low - SMT Failure) */}
              <text x="60" y="215" fill={gold} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                ASSET B (NQ / NASDAQ) — REFUSES LOWER LOW (HIGHER LOW = ACCUMULATION)
              </text>
              <motion.path
                d="M 60,260 L 160,240 L 260,290 L 360,230 L 460,265 L 560,195 L 680,160"
                fill="none"
                stroke={gold}
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8 }}
              />
              <circle cx="260" cy="290" r="5" fill={gold} />
              <circle cx="460" cy="265" r="5" fill={green} />
              <line x1="260" y1="290" x2="460" y2="265" stroke={green} strokeWidth="2" strokeDasharray="3 3" />
              <text x="470" y="260" fill={green} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">Higher Low (SMT Divergence)</text>

              {/* SMT Signal Marker */}
              <motion.line
                x1="460" y1="60" x2="460" y2="330"
                stroke={purple} strokeWidth="2" strokeDasharray="4 4"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <text x="365" y="345" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                ★ SMT CONFIRMATION: AGGRESSIVE BULLISH REVERSAL
              </text>
            </g>
          )}

          {/* 13. TURTLE SOUP */}
          {type === 'turtle-soup' && (
            <g>
              {/* Prior Key High */}
              <line x1="80" y1="120" x2="720" y2="120" stroke={purple} strokeWidth="2" strokeDasharray="5 5" />
              <text x="100" y="110" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                PRIOR 20-DAY HIGH // RESTING BUY STOPS
              </text>

              {/* Price Action */}
              <motion.path
                d="M 100,240 L 220,170 L 320,220 L 440,75 L 480,170 L 620,310"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8 }}
              />

              {/* False Breakout Peak */}
              <motion.circle
                cx="440" cy="75" r="7" fill={red}
                animate={{ scale: [1, 1.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <text x="455" y="70" fill={red} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                TURTLE SOUP PURGE (+5-15 TICKS)
              </text>
              <text x="495" y="165" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                RETURN INSIDE RANGE → SELL ENTRY
              </text>
              <text x="560" y="270" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                TARGET: OPPOSING SELL STOPS (1:3+ R:R)
              </text>
            </g>
          )}

          {/* 14. SILVER BULLET */}
          {type === 'silver-bullet' && (
            <g>
              {/* Killzone Window (10:00 - 11:00 AM NY) */}
              <rect x="240" y="40" width="380" height="280" fill={purple} fillOpacity="0.08" stroke={purple} strokeWidth="1.5" strokeDasharray="4 4" rx="8" />
              <text x="260" y="65" fill={purple} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                ICT SILVER BULLET WINDOW // 10:00 AM – 11:00 AM NY EST
              </text>

              {/* Internal Liquidity Run */}
              <motion.path
                d="M 120,240 L 220,140 L 280,190 L 340,75 L 420,240 L 480,165 L 580,80"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />

              {/* FVG Entry Box inside Silver Bullet window */}
              <rect x="440" y="140" width="80" height="50" fill={green} fillOpacity="0.25" stroke={green} strokeWidth="1.5" rx="3" />
              <circle cx="480" cy="165" r="5" fill={green} />
              <text x="450" y="130" fill={green} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                5M FVG FILL
              </text>
              <text x="540" y="75" fill={gold} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                TARGET: 10–15 NQ PTS (1:2 R:R)
              </text>
            </g>
          )}

          {/* 15. INVERSION FVG (IFVG) */}
          {type === 'inversion-fvg' && (
            <g>
              {/* Failed Bearish FVG zone that becomes bullish support */}
              <motion.rect
                x="200" y="140" width="400" height="60"
                fill={green}
                initial={{ fillOpacity: 0.1 }}
                animate={{ fillOpacity: [0.12, 0.25, 0.12] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                stroke={green} strokeWidth="1.5" strokeDasharray="3 3" rx="4"
              />
              <text x="240" y="175" fill={green} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">
                INVERSION FVG (IFVG) — FAILED GAP FLIPS TO SUPPORT
              </text>

              {/* Price breaking through gap violently, then respecting it */}
              <motion.path
                d="M 100,260 L 220,160 L 260,180 L 340,60 L 440,80 L 500,145 L 640,40"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
              <circle cx="500" cy="145" r="6" fill={green} />
              <text x="515" y="145" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                IFVG RETEST / HIGH PROBABILITY BUY
              </text>
            </g>
          )}

          {/* 16. CANDLE RANGE THEORY (CRT) */}
          {type === 'crt-model' && (
            <g>
              {/* Reference Candle */}
              <rect x="220" y="80" width="80" height="200" fill={purple} fillOpacity="0.15" stroke={purple} strokeWidth="2" rx="4" />
              <text x="230" y="65" fill={purple} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">REFERENCE CANDLE</text>
              <line x1="260" y1="40" x2="260" y2="320" stroke={purple} strokeWidth="2" strokeDasharray="3 3" />

              {/* Range Boundaries */}
              <line x1="220" y1="80" x2="620" y2="80" stroke={red} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="440" y="70" fill={red} fontSize="10" fontFamily="JetBrains Mono">REFERENCE HIGH (SEEK & DESTROY TARGET)</text>

              <line x1="220" y1="280" x2="620" y2="280" stroke={green} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="440" y="300" fill={green} fontSize="10" fontFamily="JetBrains Mono">REFERENCE LOW (LIQUIDITY LEVEL)</text>

              {/* Expansion Sequence */}
              <motion.path
                d="M 330,180 L 380,295 L 430,260 L 520,70 L 560,110 L 660,40"
                fill="none" stroke="#fff" strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2 }}
              />
              <circle cx="380" cy="295" r="5" fill={green} />
              <text x="350" y="325" fill={green} fontSize="9" fontFamily="JetBrains Mono">Wick Sweep Low</text>
              <circle cx="520" cy="70" r="5" fill={red} />
              <text x="510" y="55" fill={red} fontSize="9" fontFamily="JetBrains Mono">Body Expansion High</text>
            </g>
          )}

          {/* 17. MARKET MAKER BUY MODEL (MMBM) */}
          {type === 'market-maker-model' && (
            <g>
              {/* Original Consolidation */}
              <rect x="80" y="70" width="120" height="60" fill={purple} fillOpacity="0.15" stroke={purple} strokeWidth="1.5" rx="4" />
              <text x="90" y="60" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">ORIGINAL CONSOLIDATION</text>

              {/* Complete Archetype Arc */}
              <motion.path
                d="M 140,100 Q 220,120 250,190 Q 280,240 330,300 Q 370,320 400,280 Q 430,220 520,160 Q 600,110 680,100"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5 }}
              />

              {/* Smart Money Reversal at the trough */}
              <circle cx="370" cy="315" r="7" fill={green} />
              <text x="270" y="345" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                SMART MONEY REVERSAL (HTF DISCOUNT)
              </text>

              {/* Delivery Target */}
              <circle cx="680" cy="100" r="6" fill={gold} />
              <text x="590" y="85" fill={gold} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                COMPLETION // TARGET ORIGINAL CONSOLIDATION
              </text>
            </g>
          )}

          {/* 18. BALANCED PRICE RANGE (BPR) */}
          {type === 'balanced-price-range' && (
            <g>
              <rect x="240" y="120" width="360" height="90" fill={purple} fillOpacity="0.12" stroke={purple} strokeWidth="1.5" strokeDasharray="4 4" rx="6" />
              <line x1="240" y1="165" x2="600" y2="165" stroke={gold} strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="340" y="160" fill={gold} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">BALANCED PRICE RANGE (BPR) MEDIAN</text>
              {/* Bullish Gap Up */}
              <line x1="200" y1="260" x2="200" y2="90" stroke={green} strokeWidth="3" />
              <rect x="185" y="110" width="30" height="120" fill={green} rx="2" />
              <text x="140" y="240" fill={green} fontSize="9" fontFamily="JetBrains Mono">Bullish FVG</text>
              {/* Bearish Displacement Down Through Gap */}
              <line x1="380" y1="70" x2="380" y2="280" stroke={red} strokeWidth="3" />
              <rect x="365" y="100" width="30" height="150" fill={red} rx="2" />
              <text x="405" y="270" fill={red} fontSize="9" fontFamily="JetBrains Mono">Bearish Overlap</text>
              {/* Algorithmic Retest & Launch */}
              <motion.path
                d="M 440,240 Q 500,165 560,165 Q 620,165 720,80"
                fill="none" stroke="#fff" strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
              />
              <circle cx="560" cy="165" r="6" fill={green} />
              <text x="575" y="170" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">BPR REBALANCE REACTION</text>
            </g>
          )}

          {/* 19. OPTIMAL TRADE ENTRY (OTE) */}
          {type === 'optimal-trade-entry' && (
            <g>
              {/* Swing High & Swing Low Fib Levels */}
              <line x1="120" y1="60" x2="680" y2="60" stroke={textZinc} strokeWidth="1" strokeDasharray="4 4" />
              <text x="700" y="64" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">1.0 (Swing High)</text>
              <line x1="120" y1="280" x2="680" y2="280" stroke={textZinc} strokeWidth="1" strokeDasharray="4 4" />
              <text x="700" y="284" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">0.0 (Swing Low)</text>

              {/* 50% Equilibrium */}
              <line x1="120" y1="170" x2="680" y2="170" stroke={textZinc} strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="700" y="174" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">0.50 Equilibrium</text>

              {/* OTE Highlight Zone (62% to 79%) */}
              <rect x="120" y="196" width="560" height="38" fill={green} fillOpacity="0.18" stroke={green} strokeWidth="1" rx="4" />
              <line x1="120" y1="214" x2="680" y2="214" stroke={green} strokeWidth="1.5" />
              <text x="700" y="200" fill={green} fontSize="9" fontFamily="JetBrains Mono">0.62 Fib</text>
              <text x="700" y="218" fill={gold} fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">0.705 OTE Sweetspot</text>
              <text x="700" y="238" fill={green} fontSize="9" fontFamily="JetBrains Mono">0.79 Fib</text>

              {/* Price Swing Impulse & Pullback */}
              <motion.path
                d="M 140,280 L 260,60 L 380,214 L 600,30"
                fill="none" stroke="#fff" strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2 }}
              />
              <circle cx="380" cy="214" r="6" fill={gold} />
              <text x="320" y="245" fill={gold} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">OTE ENTRY (70.5%)</text>
              <text x="540" y="25" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">EXPANSION TARGET ↑</text>
            </g>
          )}

          {/* 20. THE UNICORN MODEL (BREAKER + FVG) */}
          {type === 'unicorn-model' && (
            <g>
              {/* Swept High */}
              <line x1="140" y1="70" x2="480" y2="70" stroke={purple} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="150" y="60" fill={purple} fontSize="9" fontFamily="JetBrains Mono">LIQUIDITY SWEEP</text>

              {/* Unicorn Confluence Zone */}
              <rect x="280" y="130" width="360" height="70" fill={purple} fillOpacity="0.25" stroke={purple} strokeWidth="2" rx="6" />
              <text x="310" y="120" fill={gold} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                ★ UNICORN CONFLUENCE (BREAKER BLOCK + FVG)
              </text>

              {/* Breaker & FVG Internal Lines */}
              <line x1="280" y1="150" x2="640" y2="150" stroke={green} strokeWidth="1" strokeDasharray="3 3" />
              <text x="440" y="148" fill={green} fontSize="8" fontFamily="JetBrains Mono">Breaker High</text>
              <line x1="280" y1="180" x2="640" y2="180" stroke={purple} strokeWidth="1" strokeDasharray="3 3" />
              <text x="440" y="178" fill={purple} fontSize="8" fontFamily="JetBrains Mono">FVG Consequent Encroachment</text>

              {/* Price Path */}
              <motion.path
                d="M 120,240 L 220,70 L 320,270 L 460,160 L 660,320"
                fill="none" stroke="#fff" strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2 }}
              />
              <circle cx="460" cy="160" r="7" fill={gold} />
              <text x="475" y="165" fill={gold} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">INSTITUTIONAL UNICORN FILL</text>
            </g>
          )}

          {/* 21. JUDAS SWING */}
          {type === 'judas-swing' && (
            <g>
              {/* Asian Range Box */}
              <rect x="80" y="140" width="220" height="90" fill="#fff" fillOpacity="0.04" stroke={textZinc} strokeWidth="1.5" rx="4" />
              <text x="90" y="130" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">ASIAN RANGE (20:00 - 00:00 NY)</text>
              <line x1="80" y1="140" x2="480" y2="140" stroke={red} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="320" y="132" fill={red} fontSize="9" fontFamily="JetBrains Mono">Asian High (BSL)</text>
              <line x1="80" y1="230" x2="480" y2="230" stroke={green} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="320" y="244" fill={green} fontSize="9" fontFamily="JetBrains Mono">Asian Low (SSL)</text>

              {/* Midnight NY Ray */}
              <line x1="220" y1="185" x2="720" y2="185" stroke={gold} strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="540" y="180" fill={gold} fontSize="9" fontFamily="JetBrains Mono">00:00 Midnight NY Open</text>

              {/* London Judas Swing: Fake drop down to sweep Asian Low, then rocket up */}
              <motion.path
                d="M 220,185 L 290,170 L 360,275 L 440,160 L 520,175 L 680,60"
                fill="none" stroke="#fff" strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4 }}
              />
              {/* Judas Trap Callout */}
              <circle cx="360" cy="275" r="7" fill={red} />
              <text x="250" y="305" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">
                ⚡ JUDAS SWING TRAP (SWEEPS ASIAN LOW)
              </text>
              <circle cx="520" cy="175" r="6" fill={green} />
              <text x="480" y="200" fill={green} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">
                LONDON CONFIRMATION ENTRY
              </text>
            </g>
          )}

          {/* 22. VOLUME IMBALANCE */}
          {type === 'volume-imbalance' && (
            <g>
              <rect x="260" y="140" width="280" height="50" fill={purple} fillOpacity="0.2" stroke={purple} strokeWidth="1.5" rx="4" />
              <text x="290" y="170" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">VOLUME IMBALANCE (REAL BODY GAP)</text>
              {/* Left Candle */}
              <line x1="220" y1="80" x2="220" y2="270" stroke={green} strokeWidth="2" />
              <rect x="205" y="190" width="30" height="70" fill={green} rx="2" />
              <text x="140" y="210" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Candle 1 Close</text>
              {/* Right Candle */}
              <line x1="380" y1="60" x2="380" y2="250" stroke={green} strokeWidth="2" />
              <rect x="365" y="80" width="30" height="60" fill={green} rx="2" />
              <text x="405" y="110" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Candle 2 Open</text>
              {/* Rebalancing Path */}
              <motion.path
                d="M 440,90 L 500,165 L 560,165 L 680,60"
                fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8 }}
              />
              <circle cx="530" cy="165" r="5" fill={green} />
              <text x="545" y="170" fill={green} fontSize="10" fontFamily="JetBrains Mono">Exact Rebalance Fill</text>
            </g>
          )}

          {/* 23. CISD (CHANGE IN STATE OF DELIVERY) */}
          {type === 'cisd-state-delivery' && (
            <g>
              {/* Swing High */}
              <line x1="160" y1="80" x2="640" y2="80" stroke={purple} strokeWidth="1.5" strokeDasharray="4 4" />
              <text x="170" y="70" fill={purple} fontSize="9" fontFamily="JetBrains Mono">OLD SWING HIGH (SWEPT)</text>
              {/* Last Up-Close Candle Low */}
              <line x1="320" y1="180" x2="640" y2="180" stroke={red} strokeWidth="2" />
              <text x="340" y="172" fill={red} fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">CISD THRESHOLD (LAST UP-CLOSE CANDLE LOW)</text>
              {/* Price Path */}
              <motion.path
                d="M 140,240 L 260,65 L 360,130 L 440,210 L 500,180 L 640,300"
                fill="none" stroke="#fff" strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2 }}
              />
              <circle cx="440" cy="210" r="6" fill={red} />
              <text x="420" y="235" fill={red} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">CANDLE CLOSE BELOW CISD LINE</text>
              <circle cx="500" cy="180" r="6" fill={purple} />
              <text x="515" y="185" fill={purple} fontSize="10" fontFamily="JetBrains Mono">CISD RETEST SHORT ENTRY</text>
            </g>
          )}

          {/* 24. RISK MATRIX & DRAWDOWN CIRCUIT BREAKER */}
          {type === 'risk-matrix' && (
            <g>
              {/* Visual Asymmetry Matrix Grid */}
              <rect x="100" y="60" width="600" height="240" fill="#fff" fillOpacity="0.02" stroke="rgba(255,255,255,0.1)" rx="8" />
              <line x1="100" y1="180" x2="700" y2="180" stroke="rgba(255,255,255,0.08)" />
              <line x1="400" y1="60" x2="400" y2="300" stroke="rgba(255,255,255,0.08)" />

              {/* 1% Risk Rule */}
              <text x="130" y="95" fill={green} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">1% MAX RISK PER TRADE</text>
              <text x="130" y="120" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Mathematically impossible to ruin capital.</text>
              <text x="130" y="140" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Requires 100 consecutive losses to hit 0.</text>

              {/* 3% Daily Max Loss */}
              <text x="430" y="95" fill={red} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">3% HARD DAILY CIRCUIT BREAKER</text>
              <text x="430" y="120" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">If down 3R in a session, desk shuts down.</text>
              <text x="430" y="140" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Zero emotional tilt or revenge trading.</text>

              {/* Asymmetric R:R Payoff Curve */}
              <text x="130" y="215" fill={gold} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">1:3 MINIMUM R:R EXPECTED VALUE</text>
              <text x="130" y="240" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">40% Win Rate = 60R Annual Net Gain.</text>
              <motion.line x1="130" y1="270" x2="350" y2="270" stroke={gold} strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />

              {/* Journaling Discipline */}
              <text x="430" y="215" fill={purple} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">100-TRADE AUDITING PROTOCOL</text>
              <text x="430" y="240" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Screenshot entry, exit, R:R, and mindset.</text>
            </g>
          )}

          {/* 25. INTERMARKET CORRELATION & SMT DIVERGENCE */}
          {type === 'intermarket-correlation' && (
            <g>
              {/* Asset 1 (NQ - Makes Higher High) */}
              <text x="100" y="60" fill={green} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">ASSET 1: E-MINI NASDAQ (NQ) // HIGHER HIGH</text>
              <motion.path
                d="M 100,160 L 220,90 L 320,130 L 460,70 L 520,110 L 640,60"
                fill="none" stroke={green} strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
              />
              <circle cx="640" cy="60" r="5" fill={green} />
              <text x="610" y="45" fill={green} fontSize="9" fontFamily="JetBrains Mono">Higher High (BSL Purged)</text>

              {/* Asset 2 (ES - Fails to Make Higher High) */}
              <text x="100" y="200" fill={red} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">ASSET 2: E-MINI S&P 500 (ES) // LOWER HIGH (SMT)</text>
              <motion.path
                d="M 100,280 L 220,230 L 320,260 L 460,220 L 520,250 L 640,240"
                fill="none" stroke={red} strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
              />
              <circle cx="640" cy="240" r="5" fill={red} />
              <text x="600" y="265" fill={red} fontSize="9" fontFamily="JetBrains Mono">Lower High (Divergence!)</text>

              {/* SMT Warning Line */}
              <line x1="640" y1="60" x2="640" y2="240" stroke={gold} strokeWidth="2" strokeDasharray="3 3" />
              <text x="655" y="150" fill={gold} fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">⚡ SMT DIVERGENCE CONFIRMED</text>
            </g>
          )}

          {/* 26. IPDA LOOKBACK RANGES (20, 40, 60 DAYS) */}
          {type === 'ipda-ranges' && (
            <g>
              <rect x="80" y="60" width="180" height="220" fill={purple} fillOpacity="0.08" stroke={purple} strokeWidth="1" rx="4" />
              <text x="110" y="85" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">20-DAY DATA RANGE</text>
              <text x="105" y="110" fill={textZinc} fontSize="8" fontFamily="JetBrains Mono">Short-term liquidity pool</text>

              <rect x="280" y="60" width="200" height="220" fill={purple} fillOpacity="0.12" stroke={purple} strokeWidth="1" rx="4" />
              <text x="315" y="85" fill={purple} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">40-DAY DATA RANGE</text>
              <text x="310" y="110" fill={textZinc} fontSize="8" fontFamily="JetBrains Mono">Intermediate institutional swing</text>

              <rect x="500" y="60" width="220" height="220" fill={purple} fillOpacity="0.18" stroke={purple} strokeWidth="1.5" rx="4" />
              <text x="535" y="85" fill={gold} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">60-DAY DATA RANGE</text>
              <text x="525" y="110" fill={textZinc} fontSize="8" fontFamily="JetBrains Mono">Quarterly institutional baseline</text>

              {/* Algorithmic Curve Traversing Data Ranges */}
              <motion.path
                d="M 100,240 Q 200,120 300,200 Q 420,260 560,90 Q 640,160 700,100"
                fill="none" stroke="#fff" strokeWidth="2.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2 }}
              />
            </g>
          )}

          {/* 27. PROP FIRM MATRIX & DRAWDOWN BUFFER */}
          {type === 'prop-firm-matrix' && (
            <g>
              <rect x="100" y="60" width="600" height="240" fill="#fff" fillOpacity="0.02" stroke="rgba(255,255,255,0.1)" rx="8" />
              {/* Account Size */}
              <text x="130" y="95" fill={gold} fontSize="12" fontFamily="JetBrains Mono" fontWeight="bold">$100,000 EVALUATION ACCOUNT</text>
              <line x1="130" y1="110" x2="670" y2="110" stroke="rgba(255,255,255,0.06)" />

              {/* Profit Target */}
              <rect x="130" y="130" width="240" height="40" fill={green} fillOpacity="0.15" stroke={green} strokeWidth="1" rx="4" />
              <text x="145" y="155" fill={green} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">PROFIT TARGET: +$8,000 (8%)</text>

              {/* Max Drawdown Buffer */}
              <rect x="400" y="130" width="270" height="40" fill={red} fillOpacity="0.15" stroke={red} strokeWidth="1" rx="4" />
              <text x="415" y="155" fill={red} fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">MAX LOSS: -$5,000 (5% BUFFER)</text>

              {/* Daily Limit */}
              <text x="130" y="210" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Daily Loss Limit: Max -$3,000 (3% Trailing / EOD)</text>
              <text x="130" y="235" fill={textZinc} fontSize="9" fontFamily="JetBrains Mono">Risk Strategy: 0.5% - 0.75% per trade ($500 - $750 risk)</text>
              <text x="130" y="260" fill={green} fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">Golden Rule: Build $3,000 cushion on funded account before scaling.</text>
            </g>
          )}
        </svg>
      </div>

      {/* Dynamic Stage Indicator and Educational Caption */}
      <div className="mt-3 pt-3 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="mono text-[10px] text-zinc-300 font-medium leading-relaxed">
          <span className="text-brand-purple font-black">KEY PRINCIPLE: </span>
          {caption || 'Observe how algorithmic price delivery purges resting liquidity before energetic displacement into institutional PD Arrays.'}
        </p>

        {/* Live Stage Pill */}
        <div className="mono text-[8px] font-bold text-zinc-500 uppercase tracking-widest shrink-0 bg-white/[0.02] px-2.5 py-1 rounded border border-white/5">
          PHASE {activeStage + 1} OF 4 // {['LIQUIDITY PROBE', 'DISPLACEMENT', 'PD ARRAY TEST', 'EXPANSION'][activeStage]}
        </div>
      </div>
    </div>
  );
});
