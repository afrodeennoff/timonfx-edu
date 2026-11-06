import { CurriculumModule } from '../types';

export interface ICTCluster {
  id: string;
  clusterNumber: number;
  title: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  objective: string;
  articleCount: number;
  estimatedHours: string;
  prerequisites: string[];
  articleSlugs: string[];
}

export const ICT_CLUSTERS: ICTCluster[] = [
  {
    id: 'cluster-01',
    clusterNumber: 1,
    title: 'Cluster 01: Foundations',
    name: 'Foundations',
    category: 'Foundations',
    level: 'Beginner',
    description: 'Core institutional vocabulary, daily bias frameworks, the AMD cycle, and foundational mechanics of the Interbank Price Delivery Algorithm (IPDA).',
    objective: 'Establish a rock-solid grasp of how central banks and algorithms deliver prices, replacing retail indicators with order flow logic.',
    articleCount: 18,
    estimatedHours: '7.5 hrs',
    prerequisites: ['None (Zero-knowledge entry point)'],
    articleSlugs: [
      'what-is-ict-trading',
      'interbank-price-delivery-algorithm',
      'daily-bias-determination',
      'candlestick-anatomy',
      'ohlc-physics-and-wicks',
      'central-bank-dealers-range',
      'accumulation-manipulation-distribution',
      'institutional-vs-retail-mindset',
      'smart-money-vs-dumb-money',
      'the-dealers-matrix',
      'time-and-price-relationship',
      'ict-core-abbreviations-guide',
      'true-day-open-midnight-ny',
      'open-high-low-close-expansion',
      'order-flow-foundations',
      'fair-value-vs-equilibrium',
      'algorithmic-signature-recognition',
      'ict-foundations-mastery-checklist'
    ]
  },
  {
    id: 'cluster-02',
    clusterNumber: 2,
    title: 'Cluster 02: Market Structure',
    name: 'Market Structure',
    category: 'Market Structure',
    level: 'Beginner',
    description: 'Swing point fractals, Break of Structure (BOS), Change of Character (CHoCH), Market Structure Shift (MSS), and Change in State of Delivery (CISD).',
    objective: 'Map directional trend continuation versus structural reversal with displacement, avoiding fakeout traps.',
    articleCount: 8,
    estimatedHours: '4.5 hrs',
    prerequisites: ['Cluster 01: Foundations'],
    articleSlugs: [
      'break-of-structure',
      'change-of-character',
      'market-structure-shift',
      'change-in-state-of-delivery',
      'swing-highs-and-swing-lows',
      'internal-vs-external-range-structure',
      'dealing-ranges-and-equilibrium',
      'structural-displacement-rules'
    ]
  },
  {
    id: 'cluster-03',
    clusterNumber: 3,
    title: 'Cluster 03: Liquidity',
    name: 'Liquidity',
    category: 'Liquidity',
    level: 'Intermediate',
    description: 'Buy-Side Liquidity (BSL), Sell-Side Liquidity (SSL), equal highs/lows, stop clusters, liquidity voids, and double purges.',
    objective: 'Identify where resting orders are clustered and anticipate algorithmic stop runs that fuel institutional expansions.',
    articleCount: 11,
    estimatedHours: '5.5 hrs',
    prerequisites: ['Cluster 02: Market Structure'],
    articleSlugs: [
      'buyside-and-sellside-liquidity',
      'equal-highs-and-equal-lows',
      'liquidity-sweeps-and-purges',
      'liquidity-voids-and-runs',
      'inducement-idm-mechanics',
      'previous-day-high-low-draw',
      'previous-week-month-high-low',
      'stop-loss-clusters-and-order-books',
      'double-purges-and-raid-sequences',
      'internal-range-liquidity-to-external',
      'liquidity-draw-mastery'
    ]
  },
  {
    id: 'cluster-04',
    clusterNumber: 4,
    title: 'Cluster 04: PD Array Tools',
    name: 'PD Array Tools',
    category: 'PD Array Tools',
    level: 'Intermediate',
    description: 'The 9 core Price Delivery Arrays: Fair Value Gaps (FVG), Inversion FVGs, Order Blocks, Breakers, Mitigations, and Balanced Price Ranges (BPR).',
    objective: 'Systematically rank and execute off institutional support and resistance arrays in premium and discount pricing.',
    articleCount: 18,
    estimatedHours: '8.0 hrs',
    prerequisites: ['Cluster 03: Liquidity'],
    articleSlugs: [
      'fair-value-gap',
      'inverse-fair-value-gap',
      'order-blocks',
      'breaker-blocks',
      'mitigation-blocks',
      'balanced-price-range',
      'volume-imbalance',
      'rejection-blocks',
      'propulsion-blocks',
      'vacuum-blocks',
      'optimal-trade-entry',
      'premium-and-discount',
      'consequent-encroachment-ce-50',
      'mean-threshold-mt-50',
      'order-block-validation-rules',
      'stacking-pd-arrays-confluence',
      'pd-array-matrix-hierarchy',
      'wick-as-an-order-block'
    ]
  },
  {
    id: 'cluster-05',
    clusterNumber: 5,
    title: 'Cluster 05: Models & Sessions',
    name: 'Models & Sessions',
    category: 'Models & Sessions',
    level: 'Advanced',
    description: 'Execution blueprints: Silver Bullet (AM & PM), Power of 3 (PO3), Judas Swing, Turtle Soup, Unicorn, and MMBM/MMSM market maker templates.',
    objective: 'Master intraday execution windows across the London Open, New York AM, and New York PM Kill Zones.',
    articleCount: 16,
    estimatedHours: '8.5 hrs',
    prerequisites: ['Cluster 04: PD Array Tools'],
    articleSlugs: [
      'silver-bullet',
      'silver-bullet-london-am',
      'silver-bullet-ny-pm',
      'power-of-three',
      'judas-swing',
      'turtle-soup',
      'the-unicorn-model',
      'market-maker-buy-model-mmbm',
      'market-maker-sell-model-mmsm',
      'asian-range-dynamics',
      'london-open-killzone',
      'new-york-am-killzone',
      'london-close-killzone',
      'new-york-pm-macro-windows',
      'the-ict-2022-mentorship-model',
      'session-transitions-and-flouts'
    ]
  },
  {
    id: 'cluster-06',
    clusterNumber: 6,
    title: 'Cluster 06: CRT — Candle Range Theory',
    name: 'CRT — Candle Range Theory',
    category: 'CRT — Candle Range Theory',
    level: 'Advanced',
    description: 'Single-bar and multi-bar candle range theory models, reference candles, session execution, and comparison to AMD cycles.',
    objective: 'Anticipate candle range expansions and target opposing wick boundaries with high statistical precision.',
    articleCount: 8,
    estimatedHours: '5.0 hrs',
    prerequisites: ['Cluster 05: Models & Sessions'],
    articleSlugs: [
      'candle-range-theory',
      'crt-reference-candle',
      'crt-session-execution',
      'crt-vs-amd-comparison',
      'crt-daily-vs-weekly-ranges',
      'stacking-sequential-crts',
      'crt-smt-confirmation-filters',
      'crt-take-profit-mechanics'
    ]
  },
  {
    id: 'cluster-07',
    clusterNumber: 7,
    title: 'Cluster 07: S&D / Miscellaneous',
    name: 'S&D / Miscellaneous',
    category: 'S&D / Miscellaneous',
    level: 'Intermediate',
    description: 'Institutional supply & demand differences, the origin candle, equilibrium calibration, order flow matrix, and macroeconomic schedules.',
    objective: 'Differentiate real institutional accumulation from retail supply/demand boxes.',
    articleCount: 8,
    estimatedHours: '4.5 hrs',
    prerequisites: ['Cluster 04: PD Array Tools'],
    articleSlugs: [
      'ict-supply-and-demand',
      'origin-candle-theory',
      'equilibrium-calibration',
      'order-flow-matrix',
      'liquidity-run-versus-rebalance',
      'balanced-price-range-mastery',
      'inefficiency-and-volume-spread',
      'interbank-matrix-schedules'
    ]
  },
  {
    id: 'cluster-08',
    clusterNumber: 8,
    title: 'Cluster 08: Advanced ICT (2024–25)',
    name: 'Advanced ICT',
    category: 'Advanced ICT',
    level: 'Advanced',
    description: 'Modern algorithmic mechanisms: SMT divergence across triads, Venom model, Enigma FVG, Reaper IFVG, and Suspension Blocks.',
    objective: 'Harness cutting-edge algorithmic signatures and non-confirmation filters on high-frequency index and forex charts.',
    articleCount: 12,
    estimatedHours: '7.0 hrs',
    prerequisites: ['Cluster 05: Models & Sessions'],
    articleSlugs: [
      'smt-divergence',
      'the-venom-model',
      'the-enigma-fvg',
      'reaper-inversion-model',
      'suspension-blocks',
      'rdrb-reversal-displacement-block',
      'stacked-confluences-2025',
      'algorithmic-macro-windows',
      'index-futures-correlation-divergence',
      'forex-triad-divergence',
      'intermarket-bond-yield-alignment',
      'advanced-algorithmic-liquidity-sweeps'
    ]
  },
  {
    id: 'cluster-09',
    clusterNumber: 9,
    title: 'Cluster 09: Instruments & Markets',
    name: 'Instruments & Markets',
    category: 'Instruments & Markets',
    level: 'Intermediate',
    description: 'Tailored application across E-mini Nasdaq (NQ), S&P 500 (ES), Dow (YM), EURUSD, GBPUSD, Gold (XAUUSD), Crude Oil, and Crypto.',
    objective: 'Adapt ICT rules to instrument-specific tick values, session volatility, and algorithmic delivery characteristics.',
    articleCount: 10,
    estimatedHours: '5.5 hrs',
    prerequisites: ['Cluster 05: Models & Sessions'],
    articleSlugs: [
      'trading-nq-nasdaq-futures',
      'trading-es-sp500-futures',
      'trading-ym-dow-futures',
      'trading-eurusd-institutional-flow',
      'trading-gbpusd-cable-volatility',
      'trading-gold-xauusd-smart-money',
      'trading-crude-oil-energy-flow',
      'trading-bitcoin-crypto-ict',
      'forex-vs-futures-market-mechanics',
      'cross-asset-session-playbook'
    ]
  },
  {
    id: 'cluster-10',
    clusterNumber: 10,
    title: 'Cluster 10: Risk & Process',
    name: 'Risk & Process',
    category: 'Risk & Process',
    level: 'Intermediate',
    description: 'The mathematical rules of capital survival: 1% risk rule, 3% daily loss limit, position sizing, structural stop losses, and trade journaling.',
    objective: 'Treat trading as an asymmetric numbers game where risk control guarantees perpetual survival and funded consistency.',
    articleCount: 12,
    estimatedHours: '6.0 hrs',
    prerequisites: ['Cluster 01: Foundations'],
    articleSlugs: [
      'the-one-percent-risk-rule',
      'three-percent-daily-loss-limit',
      'position-sizing-discipline',
      'structural-stop-loss-placement',
      'partial-profit-taking-strategy',
      'stop-to-breakeven-timing',
      'risk-to-reward-and-expected-value',
      'professional-trade-logging',
      'backtesting-framework-ict',
      'forward-testing-and-demo-execution',
      'drawdown-recovery-protocol',
      'trading-routine-pre-market-checklist'
    ]
  },
  {
    id: 'cluster-11',
    clusterNumber: 11,
    title: 'Cluster 11: Strategy & Application',
    name: 'Strategy & Application',
    category: 'Strategy & Application',
    level: 'Advanced',
    description: 'Practical day-to-day execution: intraday scalping, swing trading, prop firm evaluations, news trading (CPI/NFP/FOMC), and emotional mastery.',
    objective: 'Synthesize theory into a disciplined 1-page operational plan for evaluation challenges and funded accounts.',
    articleCount: 18,
    estimatedHours: '9.0 hrs',
    prerequisites: ['Cluster 05: Models & Sessions', 'Cluster 10: Risk & Process'],
    articleSlugs: [
      'intraday-scalping-blueprint',
      'high-probability-swing-trading',
      'prop-firm-evaluation-strategy',
      'funded-account-capital-preservation',
      'combining-silver-bullet-and-smt',
      'combining-fvg-and-order-blocks',
      'trading-nfp-cpi-fomc-news',
      'post-news-algorithmic-rebalance',
      'conquering-fomo-and-revenge-trading',
      'patience-and-the-waiting-game',
      'trading-plan-creation-guide',
      'weekend-chart-review-process',
      'the-20-pip-per-day-myth',
      'handling-losing-streaks',
      'mastering-one-single-setup',
      'from-beginner-to-funded-trader',
      'psychological-discipline',
      'framework-refinement'
    ]
  },
  {
    id: 'cluster-12',
    clusterNumber: 12,
    title: 'Cluster 12: Comparisons & Deep Dives',
    name: 'Comparisons & Deep Dives',
    category: 'Comparisons & Deep Dives',
    level: 'Intermediate',
    description: 'Rigorous comparative analysis: ICT vs Smart Money Concepts (SMC), ICT vs Wyckoff, ICT vs Traditional Support & Resistance, and FVG vs OB priority.',
    objective: 'Demystify conceptual overlap and understand why retail indicator strategies fail against algorithmic order flow.',
    articleCount: 4,
    estimatedHours: '3.0 hrs',
    prerequisites: ['Cluster 04: PD Array Tools'],
    articleSlugs: [
      'ict-vs-smc-smart-money-concepts',
      'ict-vs-wyckoff-methodology',
      'ict-vs-traditional-support-resistance',
      'fvg-vs-order-block-comparison'
    ]
  },
  {
    id: 'cluster-13',
    clusterNumber: 13,
    title: 'Cluster 13: Resources & Reference Tools',
    name: 'Resources',
    category: 'Resources',
    level: 'Beginner',
    description: 'Essential desk tools: Kill Zone World Clock, Optimal Trade Entry (OTE) calculator, Asian Range Planner, and IPDA lookback matrix.',
    objective: 'Equip your workstation with computational utilities that automate session times and algorithmic measurements.',
    articleCount: 5,
    estimatedHours: '2.5 hrs',
    prerequisites: ['Cluster 01: Foundations'],
    articleSlugs: [
      'ict-killzone-time-converter',
      'optimal-trade-entry-ote-calculator',
      'asian-range-boundary-tracker',
      'ipda-lookback-calendar-matrix',
      'complete-ict-master-glossary'
    ]
  },
  {
    id: 'cluster-14',
    clusterNumber: 14,
    title: 'Cluster 14: Getting Started',
    name: 'Getting Started',
    category: 'Getting Started',
    level: 'Beginner',
    description: 'Beginner onboarding: TradingView setup, forex vs futures choice, first 90 days milestone plan, common rookie pitfalls, and paper trading hygiene.',
    objective: 'Provide a structured, anxiety-free entry ramp for traders transitioning to the smart money philosophy.',
    articleCount: 7,
    estimatedHours: '3.5 hrs',
    prerequisites: ['None (Zero-knowledge entry point)'],
    articleSlugs: [
      'complete-beginner-ict-roadmap',
      'tradingview-setup-for-ict',
      'choosing-forex-vs-futures',
      'the-first-90-days-milestone-plan',
      'common-beginner-pitfalls-and-traps',
      'paper-trading-and-execution-hygiene',
      'graduating-to-live-capital'
    ]
  }
];

// Convert ICT_CLUSTERS into CurriculumModule format for seamless backward compatibility
export const CONVERTED_CURRICULUM_MODULES: CurriculumModule[] = ICT_CLUSTERS.map((cluster) => ({
  id: cluster.id,
  moduleNumber: cluster.clusterNumber,
  title: cluster.title,
  level: cluster.level,
  category: cluster.category as any,
  description: cluster.description,
  objective: cluster.objective,
  prerequisites: cluster.prerequisites,
  lessonSlugs: cluster.articleSlugs,
  lessonCount: cluster.articleCount,
  estimatedHours: cluster.estimatedHours
}));
