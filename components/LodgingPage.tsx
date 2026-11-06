import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VARIANTS, GLASS_STYLES, MOTION_RULES, BRAND_LOGO } from '../constants';
import { GhostText } from './GhostText';

export interface TradeRecord {
  id: string;
  timeUTC: string;
  date: string;
  asset: string;
  session: 'NY AM' | 'NY PM' | 'LONDON' | 'ASIA';
  action: 'LONG' | 'SHORT';
  setup: string;
  contracts: number;
  entryPrice: number;
  exitPrice: number;
  rr: number;
  pnl: number;
  outcome: 'WIN' | 'LOSS' | 'BE';
  disciplineRate: number; // e.g. 100%
  rules: string[];
  notes: string;
  mindset: 'Disciplined' | 'Patient' | 'Calculated' | 'Aggressive' | 'Hesitant';
}

const DEFAULT_TRADES: TradeRecord[] = [
  {
    id: 'TRD-8941',
    timeUTC: '14:32',
    date: '2026-11-04',
    asset: 'NQ1!',
    session: 'NY AM',
    action: 'LONG',
    setup: '09:30 NY Open Asian High Sweep + 5M FVG',
    contracts: 2,
    entryPrice: 15210.50,
    exitPrice: 15252.75,
    rr: 3.4,
    pnl: 1690.00,
    outcome: 'WIN',
    disciplineRate: 100,
    rules: ['HTF Orderflow Aligned', 'Asian Range Swept', '5M MSS Confirmed', 'Risk <= 1.5%'],
    notes: 'Clean displacement off 15,200 psychological node. Partial exit taken at previous day high, runner trailed to buy-side liquidity.',
    mindset: 'Patient'
  },
  {
    id: 'TRD-8940',
    timeUTC: '15:15',
    date: '2026-11-04',
    asset: 'ES1!',
    session: 'NY AM',
    action: 'SHORT',
    setup: '10:00-11:00 Silver Bullet Rejection',
    contracts: 3,
    entryPrice: 4486.25,
    exitPrice: 4474.50,
    rr: 2.5,
    pnl: 1762.50,
    outcome: 'WIN',
    disciplineRate: 100,
    rules: ['Silver Bullet Window Active', 'Bearish Breaker Block Test', 'Clean Invalidation Above Swing High'],
    notes: 'Surgical delivery right into sell-side liquidity at 4475. Closed entire position ahead of 11:30 lunch doldrums.',
    mindset: 'Calculated'
  },
  {
    id: 'TRD-8939',
    timeUTC: '08:14',
    date: '2026-11-04',
    asset: 'EURUSD',
    session: 'LONDON',
    action: 'LONG',
    setup: 'London Open Judas Swing + OTE (62%)',
    contracts: 4,
    entryPrice: 1.08240,
    exitPrice: 1.08580,
    rr: 2.8,
    pnl: 1360.00,
    outcome: 'WIN',
    disciplineRate: 100,
    rules: ['London Low Swept', 'Institutional Displacement', 'OTE Entry at Discount'],
    notes: 'Frankfurt low swept during London open, followed by aggressive green displacement candles. Target equal highs.',
    mindset: 'Disciplined'
  },
  {
    id: 'TRD-8938',
    timeUTC: '19:40',
    date: '2026-11-03',
    asset: 'NQ1!',
    session: 'NY PM',
    action: 'LONG',
    setup: 'PM Session Mean Reversion + Liquidity Sweep',
    contracts: 2,
    entryPrice: 15180.00,
    exitPrice: 15216.50,
    rr: 2.2,
    pnl: 1460.00,
    outcome: 'WIN',
    disciplineRate: 100,
    rules: ['PM Session Displacement', '15M FVG Retest', 'Tight Risk Model'],
    notes: 'Standard afternoon algorithmic re-pricing into closing settlement. Closed before market close.',
    mindset: 'Calculated'
  },
  {
    id: 'TRD-8937',
    timeUTC: '14:28',
    date: '2026-11-03',
    asset: 'ES1!',
    session: 'NY AM',
    action: 'SHORT',
    setup: 'Early Opening Bell Momentum Fade',
    contracts: 2,
    entryPrice: 4492.00,
    exitPrice: 4498.50,
    rr: -1.0,
    pnl: -650.00,
    outcome: 'LOSS',
    disciplineRate: 75,
    rules: ['Attempted entry 2 mins before official bell', 'Invalidation respected strictly'],
    notes: 'Entered slightly early ahead of 09:30 open. Volatility spike triggered stop immediately. Followed discipline rule and did not re-enter or revenge trade.',
    mindset: 'Aggressive'
  },
  {
    id: 'TRD-8936',
    timeUTC: '13:50',
    date: '2026-11-02',
    asset: 'CL1!',
    session: 'NY AM',
    action: 'SHORT',
    setup: 'Crude Oil Inventory Sweep & Reversal',
    contracts: 1,
    entryPrice: 78.40,
    exitPrice: 77.20,
    rr: 3.0,
    pnl: 1200.00,
    outcome: 'WIN',
    disciplineRate: 100,
    rules: ['News Reaction Waited Out', 'Rejection of Weekly Key Level', 'Defined 40-Tick Risk'],
    notes: 'Waited for inventory volatility to settle. Bearish engulfing confirmation on 15M chart gave high-probability edge.',
    mindset: 'Disciplined'
  },
  {
    id: 'TRD-8935',
    timeUTC: '10:05',
    date: '2026-11-02',
    asset: 'NQ1!',
    session: 'LONDON',
    action: 'SHORT',
    setup: 'London High Rejection + FVG',
    contracts: 2,
    entryPrice: 15340.25,
    exitPrice: 15302.00,
    rr: 2.9,
    pnl: 1530.00,
    outcome: 'WIN',
    disciplineRate: 100,
    rules: ['London High Formed', '1M Market Structure Shift', 'Stop Above High'],
    notes: 'Textbook institutional run on overnight stops followed by clean breakdown.',
    mindset: 'Patient'
  }
];

export const LodgingPage: React.FC = () => {
  const [trades, setTrades] = useState<TradeRecord[]>(() => {
    try {
      const saved = localStorage.getItem('timon_trade_ledger_v2');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read saved trade ledger', e);
    }
    return DEFAULT_TRADES;
  });

  const [selectedAsset, setSelectedAsset] = useState<string>('ALL');
  const [selectedSession, setSelectedSession] = useState<string>('ALL');
  const [selectedOutcome, setSelectedOutcome] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals
  const [activeTradeDetail, setActiveTradeDetail] = useState<TradeRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // New trade form state
  const [newAsset, setNewAsset] = useState<string>('NQ1!');
  const [newAction, setNewAction] = useState<'LONG' | 'SHORT'>('LONG');
  const [newSession, setNewSession] = useState<'NY AM' | 'NY PM' | 'LONDON' | 'ASIA'>('NY AM');
  const [newSetup, setNewSetup] = useState<string>('09:30 NY Open Liquidity Sweep + FVG');
  const [newContracts, setNewContracts] = useState<number>(2);
  const [newEntry, setNewEntry] = useState<string>('15240.00');
  const [newExit, setNewExit] = useState<string>('15280.00');
  const [newRR, setNewRR] = useState<string>('2.5');
  const [newPnl, setNewPnl] = useState<string>('1600.00');
  const [newMindset, setNewMindset] = useState<'Disciplined' | 'Patient' | 'Calculated' | 'Aggressive' | 'Hesitant'>('Disciplined');
  const [newNotes, setNewNotes] = useState<string>('Waited for confirmation and executed with mechanical stop loss.');
  const [ruleCheck1, setRuleCheck1] = useState(true);
  const [ruleCheck2, setRuleCheck2] = useState(true);
  const [ruleCheck3, setRuleCheck3] = useState(true);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('timon_trade_ledger_v2', JSON.stringify(trades));
    } catch (e) {
      console.warn('Could not persist trade ledger', e);
    }
  }, [trades]);

  // Key stats calculated dynamically
  const stats = useMemo(() => {
    const totalTrades = trades.length;
    const wins = trades.filter(t => t.outcome === 'WIN');
    const losses = trades.filter(t => t.outcome === 'LOSS');
    const winRate = totalTrades > 0 ? (wins.length / totalTrades) * 100 : 0;
    const totalPnl = trades.reduce((acc, t) => acc + t.pnl, 0);
    const grossProfit = wins.reduce((acc, t) => acc + t.pnl, 0);
    const grossLoss = Math.abs(losses.reduce((acc, t) => acc + t.pnl, 0));
    const profitFactor = grossLoss > 0 ? (grossProfit / grossLoss).toFixed(2) : grossProfit > 0 ? '∞' : '0.00';
    const avgRR = totalTrades > 0 ? (trades.reduce((acc, t) => acc + Math.max(0, t.rr), 0) / (wins.length || 1)).toFixed(1) : '0.0';
    const avgDiscipline = totalTrades > 0 ? Math.round(trades.reduce((acc, t) => acc + t.disciplineRate, 0) / totalTrades) : 100;

    return {
      totalTrades,
      winRate: winRate.toFixed(1),
      totalPnl,
      profitFactor,
      avgRR,
      avgDiscipline,
      winsCount: wins.length,
      lossesCount: losses.length
    };
  }, [trades]);

  // Filtered trades
  const filteredTrades = useMemo(() => {
    return trades.filter(trade => {
      if (selectedAsset !== 'ALL' && !trade.asset.toUpperCase().includes(selectedAsset)) return false;
      if (selectedSession !== 'ALL' && trade.session !== selectedSession) return false;
      if (selectedOutcome !== 'ALL' && trade.outcome !== selectedOutcome) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesSetup = trade.setup.toLowerCase().includes(q);
        const matchesAsset = trade.asset.toLowerCase().includes(q);
        const matchesNotes = trade.notes.toLowerCase().includes(q);
        if (!matchesSetup && !matchesAsset && !matchesNotes) return false;
      }
      return true;
    });
  }, [trades, selectedAsset, selectedSession, selectedOutcome, searchQuery]);

  // Handle adding new trade
  const handleCreateTrade = (e: React.FormEvent) => {
    e.preventDefault();
    const pnlNum = parseFloat(newPnl) || 0;
    const outcome: 'WIN' | 'LOSS' | 'BE' = pnlNum > 0 ? 'WIN' : pnlNum < 0 ? 'LOSS' : 'BE';
    const rulesList = [
      ruleCheck1 ? 'HTF Direction Verified' : null,
      ruleCheck2 ? 'Target & Invalidation Pre-defined' : null,
      ruleCheck3 ? 'Sized to Risk Standard' : null
    ].filter(Boolean) as string[];

    const discipline = Math.round((rulesList.length / 3) * 100);

    const now = new Date();
    const timeUTC = `${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}`;
    const dateStr = now.toISOString().split('T')[0];

    const record: TradeRecord = {
      id: `TRD-${Math.floor(1000 + Math.random() * 9000)}`,
      timeUTC,
      date: dateStr,
      asset: newAsset,
      session: newSession,
      action: newAction,
      setup: newSetup,
      contracts: Number(newContracts) || 1,
      entryPrice: parseFloat(newEntry) || 0,
      exitPrice: parseFloat(newExit) || 0,
      rr: parseFloat(newRR) || 1,
      pnl: pnlNum,
      outcome,
      disciplineRate: discipline,
      rules: rulesList,
      notes: newNotes,
      mindset: newMindset
    };

    setTrades([record, ...trades]);
    setIsAddModalOpen(false);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset ledger to institutional verified demo records?')) {
      setTrades(DEFAULT_TRADES);
      localStorage.removeItem('timon_trade_ledger_v2');
    }
  };

  const handleDeleteTrade = (id: string) => {
    setTrades(prev => prev.filter(t => t.id !== id));
    if (activeTradeDetail?.id === id) {
      setActiveTradeDetail(null);
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(trades, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `timon_execution_ledger_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={VARIANTS.reveal}
      className="flex-1 flex flex-col p-4 md:p-8 max-w-7xl mx-auto w-full relative z-10"
    >
      {/* Top Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 shadow-[0_0_12px_rgba(139,92,246,0.4)]">
              <img src={BRAND_LOGO} alt="TIMON Emblem" className="w-full h-full object-cover" />
            </div>
            <div className="w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
            <span className="mono text-[10px] text-brand-purple font-black tracking-[0.5em] uppercase italic">
              INSTITUTIONAL // EXECUTION_JOURNAL
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
            SESSION LOGS & <br />
            <GhostText text="AUDITED LEDGER." className="text-transparent transition-colors cursor-default stroke-text" />
          </h2>
          <p className="mono text-xs text-zinc-400 max-w-2xl font-medium leading-relaxed">
            Every session audited against structural rules: liquidity sweep, timing windows, displacement, and mechanical risk discipline.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className={`${GLASS_STYLES.accentButton} ${GLASS_STYLES.accentButtonHover} px-6 py-3`}
          >
            <span className="mono text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="text-base leading-none font-normal">+</span> LOG EXECUTION
            </span>
          </button>

          <button 
            onClick={handleExportJSON}
            className={`${GLASS_STYLES.button} ${GLASS_STYLES.buttonHover} px-4 py-3 mono text-[10px] font-black tracking-widest text-zinc-400`}
            title="Export Ledger JSON"
          >
            EXPORT
          </button>

          <button 
            onClick={handleResetDefaults}
            className="px-3 py-3 rounded-full text-zinc-600 hover:text-zinc-300 mono text-[9px] font-bold uppercase tracking-widest transition-colors"
            title="Reset demo data"
          >
            RESET
          </button>
        </div>
      </div>

      {/* KPI Performance Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-8">
        <div className={`p-4 md:p-5 ${GLASS_STYLES.card} relative overflow-hidden`}>
          <div className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-1">REALIZED P&L</div>
          <div className={`mono text-xl md:text-2xl font-black tracking-tight tabular-nums ${stats.totalPnl >= 0 ? 'text-green-500' : 'text-brand-red'}`}>
            {stats.totalPnl >= 0 ? '+' : ''}${stats.totalPnl.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="mono text-[8px] text-zinc-600 uppercase tracking-wider mt-1">NET AUDITED BALANCE</div>
        </div>

        <div className={`p-4 md:p-5 ${GLASS_STYLES.card} relative overflow-hidden`}>
          <div className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-1">WIN RATE</div>
          <div className="mono text-xl md:text-2xl font-black tracking-tight text-white tabular-nums">
            {stats.winRate}%
          </div>
          <div className="mono text-[8px] text-zinc-600 uppercase tracking-wider mt-1">
            {stats.winsCount}W / {stats.lossesCount}L ({stats.totalTrades} TRADES)
          </div>
        </div>

        <div className={`p-4 md:p-5 ${GLASS_STYLES.card} relative overflow-hidden`}>
          <div className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-1">PROFIT FACTOR</div>
          <div className="mono text-xl md:text-2xl font-black tracking-tight text-brand-purple tabular-nums">
            {stats.profitFactor}
          </div>
          <div className="mono text-[8px] text-zinc-600 uppercase tracking-wider mt-1">GROSS PROFIT / LOSS</div>
        </div>

        <div className={`p-4 md:p-5 ${GLASS_STYLES.card} relative overflow-hidden`}>
          <div className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-1">AVG REWARD:RISK</div>
          <div className="mono text-xl md:text-2xl font-black tracking-tight text-white tabular-nums">
            1 : {stats.avgRR}
          </div>
          <div className="mono text-[8px] text-zinc-600 uppercase tracking-wider mt-1">WINNING TRADES AVG</div>
        </div>

        <div className={`p-4 md:p-5 ${GLASS_STYLES.card} relative overflow-hidden col-span-2 md:col-span-1`}>
          <div className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black mb-1">DISCIPLINE RATE</div>
          <div className="mono text-xl md:text-2xl font-black tracking-tight text-green-400 tabular-nums">
            {stats.avgDiscipline}%
          </div>
          <div className="mono text-[8px] text-zinc-600 uppercase tracking-wider mt-1">RULES RIGIDLY MET</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className={`p-4 mb-6 ${GLASS_STYLES.card} flex flex-col md:flex-row items-center justify-between gap-4`}>
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <span className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold pr-2">FILTER:</span>
          {['ALL', 'NQ', 'ES', 'EURUSD', 'CL'].map(asset => (
            <button
              key={asset}
              onClick={() => setSelectedAsset(asset)}
              className={`px-3 py-1.5 rounded-full mono text-[9px] font-black uppercase tracking-wider transition-all ${
                selectedAsset === asset 
                  ? 'bg-brand-purple text-white shadow-[0_0_12px_rgba(139,92,246,0.4)]' 
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {asset}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {['ALL', 'NY AM', 'LONDON', 'NY PM'].map(sess => (
            <button
              key={sess}
              onClick={() => setSelectedSession(sess)}
              className={`px-3 py-1.5 rounded-full mono text-[9px] font-black uppercase tracking-wider transition-all ${
                selectedSession === sess 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/[0.03] text-zinc-500 hover:text-white border border-white/5'
              }`}
            >
              {sess}
            </button>
          ))}

          {['ALL', 'WIN', 'LOSS'].map(out => (
            <button
              key={out}
              onClick={() => setSelectedOutcome(out)}
              className={`px-3 py-1.5 rounded-full mono text-[9px] font-black uppercase tracking-wider transition-all ${
                selectedOutcome === out 
                  ? out === 'WIN' ? 'bg-green-500/20 text-green-400 border border-green-500/40' : out === 'LOSS' ? 'bg-brand-red/20 text-brand-red border border-red-500/40' : 'bg-white/20 text-white' 
                  : 'bg-white/[0.03] text-zinc-500 hover:text-white border border-white/5'
              }`}
            >
              {out}
            </button>
          ))}
        </div>

        <div className="w-full md:w-64">
          <input 
            type="text" 
            placeholder="Search setup, asset, notes..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.02] border border-white/10 rounded-full px-4 py-1.5 mono text-[10px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-purple/50"
          />
        </div>
      </div>

      {/* Main Ledger Table */}
      <div className={`flex-1 flex flex-col ${GLASS_STYLES.card} overflow-hidden relative group/journal`}>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="px-5 py-3.5 mono text-[9px] text-zinc-500 font-black tracking-[0.2em] uppercase">TIME // UTC</th>
                <th className="px-5 py-3.5 mono text-[9px] text-zinc-500 font-black tracking-[0.2em] uppercase">ASSET & DIR</th>
                <th className="px-5 py-3.5 mono text-[9px] text-zinc-500 font-black tracking-[0.2em] uppercase">SETUP MODEL</th>
                <th className="px-5 py-3.5 mono text-[9px] text-zinc-500 font-black tracking-[0.2em] uppercase hidden md:table-cell">ENTRY & EXIT</th>
                <th className="px-5 py-3.5 mono text-[9px] text-zinc-500 font-black tracking-[0.2em] uppercase hidden sm:table-cell">R:R</th>
                <th className="px-5 py-3.5 mono text-[9px] text-zinc-500 font-black tracking-[0.2em] uppercase">NET P&L</th>
                <th className="px-5 py-3.5 mono text-[9px] text-zinc-500 font-black tracking-[0.2em] uppercase text-right">AUDIT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredTrades.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-16 px-4">
                    <p className="mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
                      NO EXECUTIONS MATCH CRITERIA
                    </p>
                    <p className="mono text-[10px] text-zinc-700 mt-1">
                      Try clearing active filters or click "+ LOG EXECUTION" above.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredTrades.map((trade) => {
                  const isWin = trade.outcome === 'WIN';
                  return (
                    <tr 
                      key={trade.id} 
                      onClick={() => setActiveTradeDetail(trade)}
                      className="hover:bg-white/[0.03] transition-colors cursor-pointer group/row"
                    >
                      {/* Time */}
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="mono text-[11px] font-black text-white">{trade.timeUTC}</div>
                        <div className="mono text-[8px] text-zinc-500 font-bold uppercase tracking-wider">{trade.date} // {trade.session}</div>
                      </td>

                      {/* Asset & Dir */}
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded mono text-[9px] font-black uppercase tracking-wider ${
                            trade.action === 'LONG' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-brand-red/10 text-brand-red border border-red-500/20'
                          }`}>
                            {trade.action}
                          </span>
                          <span className="mono text-[11px] font-black text-white">{trade.asset}</span>
                        </div>
                        <div className="mono text-[8px] text-zinc-500 font-bold uppercase tracking-wider mt-0.5">
                          {trade.contracts} {trade.contracts === 1 ? 'Contract' : 'Contracts'}
                        </div>
                      </td>

                      {/* Setup */}
                      <td className="px-5 py-4">
                        <div className="mono text-[11px] font-bold text-zinc-200 group-hover/row:text-brand-purple transition-colors">
                          {trade.setup}
                        </div>
                        <div className="mono text-[8px] text-zinc-500 truncate max-w-xs md:max-w-md mt-0.5">
                          {trade.notes}
                        </div>
                      </td>

                      {/* Entry & Exit */}
                      <td className="px-5 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="mono text-[10px] text-zinc-300 tabular-nums">
                          {trade.entryPrice.toLocaleString()} <span className="text-zinc-600">→</span> {trade.exitPrice.toLocaleString()}
                        </div>
                        <div className="mono text-[8px] text-zinc-500 uppercase tracking-wider">
                          Executed Invalidation
                        </div>
                      </td>

                      {/* R:R */}
                      <td className="px-5 py-4 whitespace-nowrap hidden sm:table-cell">
                        <span className={`mono text-[11px] font-black ${isWin ? 'text-green-400' : 'text-zinc-500'}`}>
                          {trade.rr > 0 ? `+${trade.rr}R` : `${trade.rr}R`}
                        </span>
                      </td>

                      {/* Net P&L */}
                      <td className="px-5 py-4 whitespace-nowrap">
                        <div className={`mono text-[12px] font-black tabular-nums ${isWin ? 'text-green-400' : 'text-brand-red'}`}>
                          {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="mono text-[8px] text-zinc-600 uppercase tracking-widest">
                          {trade.outcome}
                        </div>
                      </td>

                      {/* Audit */}
                      <td className="px-5 py-4 whitespace-nowrap text-right">
                        <span className="mono text-[9px] font-black px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 group-hover/row:border-brand-purple/40 group-hover/row:text-white transition-all">
                          VIEW
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trade Detail Modal */}
      <AnimatePresence>
        {activeTradeDetail && (
          <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveTradeDetail(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: MOTION_RULES.ease }}
              className={`relative z-10 w-full max-w-2xl ${GLASS_STYLES.card} p-6 md:p-8 overflow-hidden`}
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded mono text-[9px] font-black uppercase ${
                      activeTradeDetail.action === 'LONG' ? 'bg-green-500/20 text-green-400' : 'bg-brand-red/20 text-brand-red'
                    }`}>
                      {activeTradeDetail.action}
                    </span>
                    <span className="mono text-sm font-black text-white">{activeTradeDetail.asset}</span>
                    <span className="mono text-xs text-zinc-500">#{activeTradeDetail.id}</span>
                  </div>
                  <h3 className="text-xl font-black text-white uppercase italic">{activeTradeDetail.setup}</h3>
                </div>
                
                <button 
                  onClick={() => setActiveTradeDetail(null)}
                  className="w-8 h-8 rounded-full border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center mono text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Trade Stats Matrix */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="mono text-[8px] text-zinc-500 uppercase tracking-widest font-black">NET P&L</div>
                  <div className={`mono text-lg font-black ${activeTradeDetail.pnl >= 0 ? 'text-green-400' : 'text-brand-red'}`}>
                    {activeTradeDetail.pnl >= 0 ? '+' : ''}${activeTradeDetail.pnl.toFixed(2)}
                  </div>
                </div>

                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="mono text-[8px] text-zinc-500 uppercase tracking-widest font-black">REWARD:RISK</div>
                  <div className="mono text-lg font-black text-white">
                    {activeTradeDetail.rr > 0 ? `+${activeTradeDetail.rr}R` : `${activeTradeDetail.rr}R`}
                  </div>
                </div>

                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="mono text-[8px] text-zinc-500 uppercase tracking-widest font-black">ENTRY / EXIT</div>
                  <div className="mono text-xs font-black text-zinc-300 mt-1">
                    {activeTradeDetail.entryPrice} → {activeTradeDetail.exitPrice}
                  </div>
                </div>

                <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <div className="mono text-[8px] text-zinc-500 uppercase tracking-widest font-black">SESSION</div>
                  <div className="mono text-xs font-black text-brand-purple mt-1">
                    {activeTradeDetail.session} // {activeTradeDetail.timeUTC} UTC
                  </div>
                </div>
              </div>

              {/* Rules Verified */}
              <div className="mb-6 space-y-2">
                <div className="mono text-[9px] text-brand-purple font-black tracking-widest uppercase">
                  RULES & PROTOCOL COMPLIANCE ({activeTradeDetail.disciplineRate}%)
                </div>
                <div className="space-y-1.5 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  {activeTradeDetail.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-center gap-2 mono text-xs text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trader Notes */}
              <div className="mb-6 space-y-2">
                <div className="mono text-[9px] text-zinc-400 font-black tracking-widest uppercase">
                  SESSION DE-BRIEF & EXECUTION LOG
                </div>
                <p className="mono text-xs text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  "{activeTradeDetail.notes}"
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="mono text-[9px] text-zinc-600 uppercase tracking-wider font-bold">STATE OF MIND:</span>
                  <span className="mono text-[9px] text-brand-purple font-black uppercase px-2 py-0.5 rounded bg-brand-purple/10 border border-brand-purple/20">
                    {activeTradeDetail.mindset}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <button
                  onClick={() => handleDeleteTrade(activeTradeDetail.id)}
                  className="mono text-[10px] text-brand-red hover:underline uppercase font-bold"
                >
                  Delete Execution Record
                </button>

                <button
                  onClick={() => setActiveTradeDetail(null)}
                  className={`${GLASS_STYLES.button} px-6 py-2.5 mono text-[10px] font-black uppercase tracking-wider`}
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add New Trade Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[400] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: MOTION_RULES.ease }}
              className={`relative z-10 w-full max-w-xl ${GLASS_STYLES.card} p-6 md:p-8 max-h-[90vh] overflow-y-auto`}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="mono text-[9px] text-brand-purple font-black tracking-widest uppercase">NEW JOURNAL ENTRY</span>
                  <h3 className="text-2xl font-black text-white uppercase italic">RECORD TRADE EXECUTION</h3>
                </div>
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="w-8 h-8 rounded-full border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center mono text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateTrade} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">ASSET</label>
                    <input 
                      type="text" 
                      value={newAsset} 
                      onChange={(e) => setNewAsset(e.target.value)}
                      placeholder="NQ1!, ES1!, EURUSD"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                      required
                    />
                  </div>

                  <div>
                    <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">DIRECTION</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setNewAction('LONG')}
                        className={`py-2 rounded-xl mono text-xs font-black uppercase transition-all ${
                          newAction === 'LONG' ? 'bg-green-500 text-black font-extrabold shadow-[0_0_12px_rgba(34,197,94,0.4)]' : 'bg-white/5 text-zinc-400 border border-white/10'
                        }`}
                      >
                        LONG
                      </button>
                      <button
                        type="button"
                        onClick={() => setNewAction('SHORT')}
                        className={`py-2 rounded-xl mono text-xs font-black uppercase transition-all ${
                          newAction === 'SHORT' ? 'bg-brand-red text-white font-extrabold shadow-[0_0_12px_rgba(255,30,30,0.4)]' : 'bg-white/5 text-zinc-400 border border-white/10'
                        }`}
                      >
                        SHORT
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">SESSION</label>
                    <select
                      value={newSession}
                      onChange={(e) => setNewSession(e.target.value as any)}
                      className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-2.5 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                    >
                      <option value="NY AM">NY AM (09:30 - 11:30)</option>
                      <option value="NY PM">NY PM (13:30 - 16:00)</option>
                      <option value="LONDON">LONDON (02:00 - 05:00)</option>
                      <option value="ASIA">ASIA (20:00 - 00:00)</option>
                    </select>
                  </div>

                  <div>
                    <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">CONTRACTS / SIZE</label>
                    <input 
                      type="number" 
                      min="1"
                      value={newContracts} 
                      onChange={(e) => setNewContracts(parseInt(e.target.value) || 1)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">SETUP / MODEL</label>
                  <input 
                    type="text" 
                    value={newSetup} 
                    onChange={(e) => setNewSetup(e.target.value)}
                    placeholder="e.g. 09:30 Liquidity Sweep + MSS into 5M FVG"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">ENTRY PRICE</label>
                    <input 
                      type="text" 
                      value={newEntry} 
                      onChange={(e) => setNewEntry(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                      required
                    />
                  </div>

                  <div>
                    <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">EXIT PRICE</label>
                    <input 
                      type="text" 
                      value={newExit} 
                      onChange={(e) => setNewExit(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                      required
                    />
                  </div>

                  <div>
                    <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">R:R (MULTIPLE)</label>
                    <input 
                      type="text" 
                      value={newRR} 
                      onChange={(e) => setNewRR(e.target.value)}
                      placeholder="2.5"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">NET P&L ($)</label>
                    <input 
                      type="text" 
                      value={newPnl} 
                      onChange={(e) => setNewPnl(e.target.value)}
                      placeholder="+1500 or -400"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                      required
                    />
                  </div>
                </div>

                {/* Rules Checklist */}
                <div className="pt-2">
                  <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-2">DISCIPLINE AUDIT CHECKLIST</label>
                  <div className="space-y-2 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <label className="flex items-center gap-2 cursor-pointer mono text-xs text-zinc-300">
                      <input 
                        type="checkbox" 
                        checked={ruleCheck1} 
                        onChange={(e) => setRuleCheck1(e.target.checked)}
                        className="accent-purple-500"
                      />
                      <span>Higher Timeframe Bias confirmed prior to entry</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer mono text-xs text-zinc-300">
                      <input 
                        type="checkbox" 
                        checked={ruleCheck2} 
                        onChange={(e) => setRuleCheck2(e.target.checked)}
                        className="accent-purple-500"
                      />
                      <span>Hard invalidation / stop loss pre-defined in terminal</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer mono text-xs text-zinc-300">
                      <input 
                        type="checkbox" 
                        checked={ruleCheck3} 
                        onChange={(e) => setRuleCheck3(e.target.checked)}
                        className="accent-purple-500"
                      />
                      <span>Risk sized strictly within 1%–2% capital allocation</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-1">EXECUTION NOTES & MINDSET</label>
                  <textarea 
                    value={newNotes} 
                    onChange={(e) => setNewNotes(e.target.value)}
                    rows={2}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2 mono text-xs text-white focus:outline-none focus:border-brand-purple"
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3 border-t border-white/10">
                  <button 
                    type="button" 
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-5 py-2.5 mono text-xs text-zinc-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className={`${GLASS_STYLES.accentButton} ${GLASS_STYLES.accentButtonHover} px-8 py-2.5 mono text-[10px] font-black uppercase tracking-widest`}
                  >
                    SAVE EXECUTION
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{` .stroke-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.25); } `}</style>
    </motion.div>
  );
};