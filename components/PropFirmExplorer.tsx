import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROP_FIRMS, MOTION_RULES, GLASS_STYLES, VARIANTS, BRAND_LOGO } from '../constants';
import { PropFirm } from '../types';
import { GhostText } from './GhostText';

const getMonogram = (name: string): string => {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const StatItem: React.FC<{ label: string; value: string; isHighlight?: boolean }> = ({ label, value, isHighlight }) => (
  <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
    <span className="mono text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
      {label}
    </span>
    <span className={`mono text-[10px] md:text-[11px] font-bold tracking-tight text-right ${isHighlight ? 'text-brand-purple' : 'text-zinc-200'}`}>
      {value}
    </span>
  </div>
);

const PropFirmCard: React.FC<{ firm: PropFirm }> = ({ firm }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!firm.coupon) return;
    try {
      await navigator.clipboard.writeText(firm.coupon);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error('Failed to copy coupon code', err);
    }
  };

  const monogram = getMonogram(firm.name);

  return (
    <motion.div
      variants={VARIANTS.reveal}
      whileHover={VARIANTS.cardHover}
      className={`${GLASS_STYLES.card} ${GLASS_STYLES.cardHover} p-6 md:p-8 flex flex-col justify-between group transition-all duration-500 h-full relative overflow-hidden`}
    >
      {/* Background ambient glow for recommended partners */}
      {firm.isRecommended && (
        <div className="absolute top-0 right-0 w-36 h-36 bg-brand-purple/10 blur-[50px] pointer-events-none rounded-full" />
      )}

      {/* Card Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mono font-black text-sm text-white group-hover:border-brand-purple/50 group-hover:text-brand-purple transition-all duration-300 shadow-inner">
              {monogram}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`mono text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${
                  firm.marketType === 'FUTURES' 
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' 
                    : 'border-brand-purple/30 bg-brand-purple/10 text-brand-purple'
                }`}>
                  {firm.marketType}
                </span>
                {firm.badge && (
                  <span className="mono text-[8px] font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                    {firm.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tighter mt-1 group-hover:text-brand-purple transition-colors duration-300">
                {firm.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Highlight Tagline */}
        {firm.highlight && (
          <div className="mb-4 mono text-[10px] text-zinc-300 font-bold bg-white/[0.02] border border-white/5 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple shadow-[0_0_6px_rgba(139,92,246,0.6)] shrink-0" />
            <span className="truncate">{firm.highlight}</span>
          </div>
        )}

        {/* Description */}
        {firm.description && (
          <p className="mono text-[10px] text-zinc-500 font-medium leading-relaxed mb-5 line-clamp-2">
            {firm.description}
          </p>
        )}

        {/* Metrics Grid */}
        <div className="space-y-0.5 mb-6 bg-white/[0.015] border border-white/5 rounded-2xl p-4">
          <StatItem label="Account Sizing" value={firm.accountSize} />
          <StatItem label="Profit Split" value={firm.profitSplit} isHighlight={true} />
          <StatItem label="Payout Cycle" value={firm.payoutCap} />
          <StatItem label="Max Allocation" value={firm.maxAllocation} />
          {firm.platforms && firm.platforms.length > 0 && (
            <StatItem label="Supported Tech" value={firm.platforms.join(' • ')} />
          )}
        </div>
      </div>

      {/* Footer Area: Coupon Code & Action */}
      <div className="space-y-3 pt-2">
        {/* Interactive Coupon Box */}
        {firm.coupon && (
          <div 
            onClick={handleCopyCode}
            className="w-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-brand-purple/40 rounded-2xl px-4 py-2.5 flex items-center justify-between cursor-pointer transition-all duration-300 group/coupon"
            title="Click to copy coupon code"
          >
            <div className="flex flex-col text-left">
              <span className="mono text-[7px] text-zinc-500 uppercase tracking-widest font-black">
                {firm.discount || "PARTNER CODE"}
              </span>
              <div className="flex items-center gap-2">
                <span className="mono text-xs font-black text-brand-purple tracking-widest uppercase group-hover/coupon:text-white transition-colors">
                  {firm.coupon}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mono text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-brand-purple/10 text-brand-purple border border-brand-purple/20 group-hover/coupon:bg-brand-purple group-hover/coupon:text-white transition-all">
              {copied ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>COPY</span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Enter Desk Link */}
        <motion.a
          href={firm.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={VARIANTS.buttonHover}
          whileTap={VARIANTS.buttonTap}
          className={`w-full py-3.5 bg-brand-purple/10 hover:bg-brand-purple border border-brand-purple/30 hover:border-brand-purple text-white rounded-2xl flex items-center justify-center gap-2.5 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_20px_-8px_rgba(139,92,246,0.3)] group/btn relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
          <span className="relative z-10 mono text-[10px] font-black uppercase tracking-[0.3em] transition-colors">
            ENTER DESK
          </span>
          <svg 
            className="relative z-10 w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export const PropFirmExplorer: React.FC = () => {
  const [activeMarket, setActiveMarket] = useState<'ALL' | 'CFD' | 'FUTURES'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const counts = useMemo(() => ({
    ALL: PROP_FIRMS.length,
    CFD: PROP_FIRMS.filter(f => f.marketType === 'CFD').length,
    FUTURES: PROP_FIRMS.filter(f => f.marketType === 'FUTURES').length,
  }), []);

  const filteredFirms = useMemo(() => {
    return PROP_FIRMS.filter(firm => {
      if (activeMarket !== 'ALL' && firm.marketType !== activeMarket) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = firm.name.toLowerCase().includes(q);
        const matchesPlatform = firm.platforms?.some(p => p.toLowerCase().includes(q));
        const matchesDesc = firm.description?.toLowerCase().includes(q);
        const matchesCoupon = firm.coupon?.toLowerCase().includes(q);
        if (!matchesName && !matchesPlatform && !matchesDesc && !matchesCoupon) {
          return false;
        }
      }
      return true;
    });
  }, [activeMarket, searchQuery]);

  return (
    <section 
      id="coupon" 
      className="py-12 md:py-20 px-4 md:px-6 bg-brand-black relative overflow-hidden transform-gpu scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-10 md:mb-16">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={MOTION_RULES.viewport}
            variants={VARIANTS.reveal}
            className="space-y-4 max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-white/20">
                <img src={BRAND_LOGO} alt="TIMON Logo" className="w-full h-full object-cover" />
              </div>
              <div className="h-px w-10 bg-brand-purple" />
              <span className="mono text-[11px] text-brand-purple font-black tracking-[0.5em] uppercase italic">
                Verified Gateways
              </span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-none">
              THE PARTNERS BEHIND <br />
              <GhostText text="THE FUNDING." className="text-transparent transition-colors cursor-default stroke-text" />
            </h2>
            
            <p className="mono text-[10px] md:text-[12px] text-zinc-400 uppercase tracking-[0.25em] font-bold leading-relaxed border-l border-white/10 pl-4 md:pl-6">
              A transparent, audited selection of funding providers for those ready to execute at size. Use code <span className="text-brand-purple font-black">TIMON</span> for exclusive desk fee reductions.
            </p>
          </motion.div>

          {/* Filtering Controls */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={MOTION_RULES.viewport}
            variants={VARIANTS.reveal}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto"
          >
            {/* Search Box */}
            <div className="relative">
              <input 
                type="text"
                placeholder="Search firm, MT5, Futures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-56 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2 mono text-[10px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/60 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white mono text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Market Tabs */}
            <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/10 rounded-full">
              <button 
                onClick={() => setActiveMarket('ALL')}
                className={`px-4 md:px-5 py-2 rounded-full mono text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeMarket === 'ALL' 
                    ? 'bg-brand-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                ALL ({counts.ALL})
              </button>
              <button 
                onClick={() => setActiveMarket('CFD')}
                className={`px-4 md:px-5 py-2 rounded-full mono text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeMarket === 'CFD' 
                    ? 'bg-brand-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                CFD ({counts.CFD})
              </button>
              <button 
                onClick={() => setActiveMarket('FUTURES')}
                className={`px-4 md:px-5 py-2 rounded-full mono text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeMarket === 'FUTURES' 
                    ? 'bg-brand-purple text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                FUTURES ({counts.FUTURES})
              </button>
            </div>
          </motion.div>
        </div>

        {/* Partners Grid */}
        <div className="min-h-[450px]">
          {filteredFirms.length === 0 ? (
            <div className={`p-12 text-center ${GLASS_STYLES.card}`}>
              <p className="mono text-xs text-zinc-400 font-bold uppercase tracking-widest">
                No funding partners match "{searchQuery}"
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveMarket('ALL'); }}
                className="mt-4 mono text-[10px] text-brand-purple font-black underline uppercase tracking-widest"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${activeMarket}-${searchQuery}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: MOTION_RULES.ease }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
              >
                {filteredFirms.map((firm) => (
                  <PropFirmCard key={firm.id} firm={firm} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Bottom Institutional Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 opacity-60">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="mono text-[9px] text-zinc-400 uppercase tracking-widest font-black">
              EXECUTION AUDITED: Direct Liquidity & Payout Reliability
            </span>
          </div>
          <span className="mono text-[8px] text-zinc-600 uppercase tracking-wider text-center md:text-right">
            Discounts automatically applied using code TIMON at evaluation checkout.
          </span>
        </div>
      </div>
      
      <style>{` .stroke-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.25); } `}</style>
    </section>
  );
};