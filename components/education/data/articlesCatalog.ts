import { DiagramType, LessonFigure, ConceptCategory, DifficultyLevel } from '../types';

export interface ArticleCatalogItem {
  id: string;
  slug: string;
  title: string;
  clusterId: string;
  clusterNumber: number;
  clusterName: string;
  category: ConceptCategory;
  difficulty: DifficultyLevel;
  readTime: string;
  shortDefinition: string;
  prerequisites: string[];
  diagramType: DiagramType;
  diagramCaption: string;
  figures: LessonFigure[];
  tags: string[];
}

export const ARTICLES_CATALOG: ArticleCatalogItem[] = [
  // ==========================================
  // CLUSTER 01: FOUNDATIONS (18 Articles)
  // ==========================================
  {
    id: 'art-001',
    slug: 'what-is-ict-trading',
    title: "What is ICT Trading & The Smart Money Methodology",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "An institutional trading philosophy developed by Michael J. Huddleston based on tracking algorithmic central bank price delivery.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for What is ICT Trading & The Smart Money Methodology.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-001-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-001-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-001-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-002',
    slug: 'interbank-price-delivery-algorithm',
    title: "The IPDA Algorithm: Why Markets Are Not Random",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "8 min read",
    shortDefinition: "The mathematical electronic delivery engine programmed by tier-1 banks to balance liquidity and reprice imbalances.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'ipda-ranges',
    diagramCaption: 'Institutional vector price action model for The IPDA Algorithm: Why Markets Are Not Random.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-002-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'ipda-ranges',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-002-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-002-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-003',
    slug: 'daily-bias-determination',
    title: "Daily Bias: Determining Directional Draw on Liquidity",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "Formulating high-conviction directional clarity on the Daily chart by locating the immediate magnet (Draw on Liquidity).",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Daily Bias: Determining Directional Draw on Liquidity.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-003-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-003-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-003-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-004',
    slug: 'candlestick-anatomy',
    title: "Candlestick Anatomy: OHLC Mechanics & Institutional Spreads",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "5 min read",
    shortDefinition: "The core physics of Open, High, Low, and Close prints and how bid/ask spreads interact with candle bodies.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for Candlestick Anatomy: OHLC Mechanics & Institutional Spreads.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-004-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-004-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-004-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-005',
    slug: 'ohlc-physics-and-wicks',
    title: "OHLC Physics: Bodies Tell Story, Wicks Do the Damage",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "5 min read",
    shortDefinition: "Mastering the ICT maxim: candle bodies represent institutional conviction, whereas wicks execute stops and hunt liquidity.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for OHLC Physics: Bodies Tell Story, Wicks Do the Damage.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-005-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-005-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-005-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-006',
    slug: 'central-bank-dealers-range',
    title: "Central Bank Dealers Range (CBDR) & Flout Mechanics",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "8 min read",
    shortDefinition: "The 14:00 to 20:00 NY time window used to calculate standard deviation projections for the next trading day.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for Central Bank Dealers Range (CBDR) & Flout Mechanics.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-006-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-006-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-006-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-007',
    slug: 'accumulation-manipulation-distribution',
    title: "AMD Cycle: The Triad of Institutional Delivery",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "The three-phase market cycle: Accumulation during Asia, Manipulation at London Open, and Distribution across New York.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'power-of-three',
    diagramCaption: 'Institutional vector price action model for AMD Cycle: The Triad of Institutional Delivery.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-007-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'power-of-three',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-007-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-007-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-008',
    slug: 'institutional-vs-retail-mindset',
    title: "Institutional vs Retail: The Myth of Trendlines & Indicators",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "Uncovering why diagonal trendlines, head & shoulders, and RSI divergences serve as institutional liquidity traps.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Institutional vs Retail: The Myth of Trendlines & Indicators.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-008-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-008-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-008-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-009',
    slug: 'smart-money-vs-dumb-money',
    title: "Smart Money Footprints vs Retail Traps",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "Recognizing the distinctive footprint of commercial banks, sovereign funds, and institutional market makers.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for Smart Money Footprints vs Retail Traps.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-009-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-009-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-009-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-010',
    slug: 'the-dealers-matrix',
    title: "The Dealer's Matrix: How Central Banks Quote Prices",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "8 min read",
    shortDefinition: "The hierarchical pricing grid used by interbank liquidity providers to balance exchange portfolios.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'ipda-ranges',
    diagramCaption: 'Institutional vector price action model for The Dealer\'s Matrix: How Central Banks Quote Prices.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-010-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'ipda-ranges',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-010-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-010-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-011',
    slug: 'time-and-price-relationship',
    title: "Time & Price: Why Time Precedes Price Delivery",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "The core axiom that algorithms only activate at specific scheduled times, rendering price patterns invalid outside key windows.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for Time & Price: Why Time Precedes Price Delivery.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-011-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-011-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-011-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-012',
    slug: 'ict-core-abbreviations-guide',
    title: "Master A–Z ICT Abbreviations & Terminology Dictionary",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "9 min read",
    shortDefinition: "The definitive codified dictionary of all institutional abbreviations from FVG and OB to BPR, MSS, and SMT.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for Master A–Z ICT Abbreviations & Terminology Dictionary.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-012-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-012-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-012-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-013',
    slug: 'true-day-open-midnight-ny',
    title: "Midnight New York: The True Day Open Anchor",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "Why 00:00 New York Eastern Time is the institutional opening benchmark that dictates bullish and bearish accumulation.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'power-of-three',
    diagramCaption: 'Institutional vector price action model for Midnight New York: The True Day Open Anchor.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-013-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'power-of-three',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-013-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-013-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-014',
    slug: 'open-high-low-close-expansion',
    title: "High of Day (HOD) & Low of Day (LOD) Formation Physics",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "Predicting the exact session window (London Open vs NY Open) where the extreme high or low of the daily candle will form.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'power-of-three',
    diagramCaption: 'Institutional vector price action model for High of Day (HOD) & Low of Day (LOD) Formation Physics.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-014-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'power-of-three',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-014-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-014-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-015',
    slug: 'order-flow-foundations',
    title: "Order Flow vs Chart Patterns: Trading What Big Banks Execute",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "Ditching subjective pattern lines to read institutional bids, offers, and unmitigated price arrays.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for Order Flow vs Chart Patterns: Trading What Big Banks Execute.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-015-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-015-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-015-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-016',
    slug: 'fair-value-vs-equilibrium',
    title: "Fair Value vs Equilibrium: The Universal Rule of Rebalance",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "Understanding how auction markets oscillate between balanced equilibrium and aggressive discovery expansions.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'premium-discount',
    diagramCaption: 'Institutional vector price action model for Fair Value vs Equilibrium: The Universal Rule of Rebalance.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-016-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'premium-discount',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-016-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-016-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-017',
    slug: 'algorithmic-signature-recognition',
    title: "Algorithmic Signatures: Displacement, Voids & Traps",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "Identifying the three unmistakable signatures of high-frequency institutional algorithms executing in the market.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'market-structure-shift',
    diagramCaption: 'Institutional vector price action model for Algorithmic Signatures: Displacement, Voids & Traps.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-017-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'market-structure-shift',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-017-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bullish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-017-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-018',
    slug: 'ict-foundations-mastery-checklist',
    title: "The Foundations Mastery Checklist & Pre-Chart Routine",
    clusterId: 'cluster-01',
    clusterNumber: 1,
    clusterName: "Foundations",
    category: "Foundations",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "A 7-point operational pre-market routine to complete before taking any trade on your execution desk.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for The Foundations Mastery Checklist & Pre-Chart Routine.',
    tags: ["Foundations", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-018-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-018-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-018-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 02: MARKET STRUCTURE (8 Articles)
  // ==========================================
  {
    id: 'art-019',
    slug: 'break-of-structure',
    title: "Break of Structure (BOS): Trend Continuation Logic",
    clusterId: 'cluster-02',
    clusterNumber: 2,
    clusterName: "Market Structure",
    category: "Market Structure",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "A structural candle close through a swing high in an uptrend or swing low in a downtrend indicating institutional continuation.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'break-of-structure',
    diagramCaption: 'Institutional vector price action model for Break of Structure (BOS): Trend Continuation Logic.',
    tags: ["Market Structure", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-019-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'break-of-structure',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-019-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-019-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-020',
    slug: 'change-of-character',
    title: "Change of Character (CHoCH): The Early Warning of Reversal",
    clusterId: 'cluster-02',
    clusterNumber: 2,
    clusterName: "Market Structure",
    category: "Market Structure",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "The initial structural violation of internal minor structure that precedes a major market structure shift.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'market-structure-shift',
    diagramCaption: 'Institutional vector price action model for Change of Character (CHoCH): The Early Warning of Reversal.',
    tags: ["Market Structure", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-020-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'market-structure-shift',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-020-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bullish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-020-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-021',
    slug: 'market-structure-shift',
    title: "Market Structure Shift (MSS): Reversal with Displacement",
    clusterId: 'cluster-02',
    clusterNumber: 2,
    clusterName: "Market Structure",
    category: "Market Structure",
    difficulty: "Beginner",
    readTime: "8 min read",
    shortDefinition: "Decisive reversal confirmation where price purges liquidity and slices through opposing swing points with displacement.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'market-structure-shift',
    diagramCaption: 'Institutional vector price action model for Market Structure Shift (MSS): Reversal with Displacement.',
    tags: ["Market Structure", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-021-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'market-structure-shift',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-021-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bullish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-021-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-022',
    slug: 'change-in-state-of-delivery',
    title: "Change in State of Delivery (CISD): Candle-Close Reversals",
    clusterId: 'cluster-02',
    clusterNumber: 2,
    clusterName: "Market Structure",
    category: "Market Structure",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "The exact candle-close signature where order flow flips from offering discount liquidity to delivering premium expansion.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'cisd-state-delivery',
    diagramCaption: 'Institutional vector price action model for Change in State of Delivery (CISD): Candle-Close Reversals.',
    tags: ["Market Structure", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-022-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'cisd-state-delivery',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-022-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-022-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-023',
    slug: 'swing-highs-and-swing-lows',
    title: "3-Bar Fractals: Institutional Swing High & Low Anatomy",
    clusterId: 'cluster-02',
    clusterNumber: 2,
    clusterName: "Market Structure",
    category: "Market Structure",
    difficulty: "Beginner",
    readTime: "5 min read",
    shortDefinition: "The objective 3-candle fractal geometry that defines valid market structure swings without discretionary guesswork.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for 3-Bar Fractals: Institutional Swing High & Low Anatomy.',
    tags: ["Market Structure", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-023-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-023-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-023-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-024',
    slug: 'internal-vs-external-range-structure',
    title: "Internal vs External Range Structure (IRL to ERL Flow)",
    clusterId: 'cluster-02',
    clusterNumber: 2,
    clusterName: "Market Structure",
    category: "Market Structure",
    difficulty: "Beginner",
    readTime: "8 min read",
    shortDefinition: "How price rotates from external liquidity pools (ERL) into internal fair value gaps (IRL) and back again.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Internal vs External Range Structure (IRL to ERL Flow).',
    tags: ["Market Structure", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-024-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-024-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-024-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-025',
    slug: 'dealing-ranges-and-equilibrium',
    title: "Dealing Ranges: Defining the Highs, Lows, and 50% Median",
    clusterId: 'cluster-02',
    clusterNumber: 2,
    clusterName: "Market Structure",
    category: "Market Structure",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "Isolating the active high and low boundaries to calculate algorithmic equilibrium and avoid trading in chop.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'premium-discount',
    diagramCaption: 'Institutional vector price action model for Dealing Ranges: Defining the Highs, Lows, and 50% Median.',
    tags: ["Market Structure", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-025-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'premium-discount',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-025-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-025-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-026',
    slug: 'structural-displacement-rules',
    title: "Displacement Identification: True Breaks vs Liquidity Wicks",
    clusterId: 'cluster-02',
    clusterNumber: 2,
    clusterName: "Market Structure",
    category: "Market Structure",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "The strict mechanical validation rules that separate genuine institutional displacement from deceptive stop sweeps.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'break-of-structure',
    diagramCaption: 'Institutional vector price action model for Displacement Identification: True Breaks vs Liquidity Wicks.',
    tags: ["Market Structure", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-026-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'break-of-structure',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-026-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-026-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 03: LIQUIDITY (11 Articles)
  // ==========================================
  {
    id: 'art-027',
    slug: 'buyside-and-sellside-liquidity',
    title: "Buy-Side (BSL) & Sell-Side (SSL) Liquidity Pools",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Concentrations of pending buy stops above old highs and sell stops below old lows that fuel large market orders.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Buy-Side (BSL) & Sell-Side (SSL) Liquidity Pools.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-027-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-027-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-027-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-028',
    slug: 'equal-highs-and-equal-lows',
    title: "Equal Highs (EQH) & Equal Lows (EQL): High-Probability Magnets",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "Engineered retail double tops and bottoms acting as prime liquidity magnets for institutional algorithmic clearing.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Equal Highs (EQH) & Equal Lows (EQL): High-Probability Magnets.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-028-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-028-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-028-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-029',
    slug: 'liquidity-sweeps-and-purges',
    title: "Liquidity Sweeps vs Real Breakouts: Spotting Stop-Hunts",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "How smart money induces breakout traders into bad fills right before sweeping their stops and reversing violently.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'turtle-soup',
    diagramCaption: 'Institutional vector price action model for Liquidity Sweeps vs Real Breakouts: Spotting Stop-Hunts.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-029-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'turtle-soup',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-029-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'liquidity-sweep',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-029-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-030',
    slug: 'liquidity-voids-and-runs',
    title: "Liquidity Voids: Explosive One-Sided Vacuum Delivery",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "Aggressive vertical price trajectories that leave wide vacuums that price must systematically re-auction.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for Liquidity Voids: Explosive One-Sided Vacuum Delivery.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-030-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-030-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-030-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-031',
    slug: 'inducement-idm-mechanics',
    title: "Inducement (IDM): Engineering Premature Retail Traps",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Internal structural highs and lows deliberately created to lure impatient retail traders before the true PD array is tested.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'turtle-soup',
    diagramCaption: 'Institutional vector price action model for Inducement (IDM): Engineering Premature Retail Traps.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-031-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'turtle-soup',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-031-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'liquidity-sweep',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-031-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-032',
    slug: 'previous-day-high-low-draw',
    title: "Previous Day High (PDH) & Low (PDL) as Daily Liquidity Targets",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "The single most traded liquidity targets for intraday index futures and forex sessions.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Previous Day High (PDH) & Low (PDL) as Daily Liquidity Targets.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-032-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-032-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-032-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-033',
    slug: 'previous-week-month-high-low',
    title: "Previous Week High (PWH) & Month High (PMH) Macro Runs",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Macro swing extremes that attract sovereign liquidity and trigger multi-hundred tick institutional moves.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'ipda-ranges',
    diagramCaption: 'Institutional vector price action model for Previous Week High (PWH) & Month High (PMH) Macro Runs.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-033-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'ipda-ranges',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-033-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-033-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-034',
    slug: 'stop-loss-clusters-and-order-books',
    title: "Stop-Loss Clusters: Where Retail Capital Pools Rest",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Analyzing market depth and algorithmic order matching to anticipate where retail stops will be harvested.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Stop-Loss Clusters: Where Retail Capital Pools Rest.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-034-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-034-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-034-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-035',
    slug: 'double-purges-and-raid-sequences',
    title: "Double Purges: High and Low Cleared in Single Sessions",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "High-volatility expansion days that raid both buy-side and sell-side liquidity before selecting direction.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'turtle-soup',
    diagramCaption: 'Institutional vector price action model for Double Purges: High and Low Cleared in Single Sessions.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-035-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'turtle-soup',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-035-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'liquidity-sweep',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-035-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-036',
    slug: 'internal-range-liquidity-to-external',
    title: "IRL to ERL Paradigm: How Price Rotates Between Arrays",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "The universal law of price delivery: price leaves external liquidity to rebalance internal gaps, then expands to external targets.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for IRL to ERL Paradigm: How Price Rotates Between Arrays.',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-036-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-036-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-036-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-037',
    slug: 'liquidity-draw-mastery',
    title: "Determining the Absolute Draw on Liquidity (DOL)",
    clusterId: 'cluster-03',
    clusterNumber: 3,
    clusterName: "Liquidity",
    category: "Liquidity",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "The master skill in ICT: answering with certainty where price is mathematically magnetic to right now.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Determining the Absolute Draw on Liquidity (DOL).',
    tags: ["Liquidity", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-037-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-037-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-037-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 04: PD ARRAY TOOLS (18 Articles)
  // ==========================================
  {
    id: 'art-038',
    slug: 'fair-value-gap',
    title: "Fair Value Gap (FVG): Anatomy, 50% CE & Institutional Delivery",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "9 min read",
    shortDefinition: "A 3-candle price imbalance where rapid displacement leaves an unfilled vacuum between Candle 1 and Candle 3.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for Fair Value Gap (FVG): Anatomy, 50% CE & Institutional Delivery.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-038-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-038-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-038-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-039',
    slug: 'inverse-fair-value-gap',
    title: "Inversion Fair Value Gap (IFVG): Imbalance Polarity Flips",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "A Fair Value Gap that price violently closes through, transforming former support into dynamic resistance or vice-versa.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'inversion-fvg',
    diagramCaption: 'Institutional vector price action model for Inversion Fair Value Gap (IFVG): Imbalance Polarity Flips.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-039-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'inversion-fvg',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-039-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-039-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-040',
    slug: 'order-blocks',
    title: "Order Block (OB): The Institutional Origin of Market Direction",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "9 min read",
    shortDefinition: "The final opposing candle preceding an energetic displacement that breaks market structure.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for Order Block (OB): The Institutional Origin of Market Direction.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-040-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-040-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-040-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-041',
    slug: 'breaker-blocks',
    title: "Breaker Block: The Failed Order Block Reversal Engine",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "An order block that purged liquidity before being violated by aggressive displacement, flipping polarity.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'breaker-block',
    diagramCaption: 'Institutional vector price action model for Breaker Block: The Failed Order Block Reversal Engine.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-041-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'breaker-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-041-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'unicorn-model',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-041-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-042',
    slug: 'mitigation-blocks',
    title: "Mitigation Block: Order Offloading Without Liquidity Sweeps",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "A structural failure swing where institutions offload underwater positions without taking out the previous extreme.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'breaker-block',
    diagramCaption: 'Institutional vector price action model for Mitigation Block: Order Offloading Without Liquidity Sweeps.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-042-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'breaker-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-042-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'unicorn-model',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-042-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-043',
    slug: 'balanced-price-range',
    title: "Balanced Price Range (BPR): Double-Imbalance Magnet & Wall",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Two overlapping Fair Value Gaps in opposite directions resulting in neutral, highly respected algorithmic boundaries.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'balanced-price-range',
    diagramCaption: 'Institutional vector price action model for Balanced Price Range (BPR): Double-Imbalance Magnet & Wall.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-043-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'balanced-price-range',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-043-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-043-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-044',
    slug: 'volume-imbalance',
    title: "Volume Imbalance (VI): Real Gaps Between Real Candle Bodies",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "A price gap between adjacent candle bodies where wicks overlap but no true auction took place in the open spread.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'volume-imbalance',
    diagramCaption: 'Institutional vector price action model for Volume Imbalance (VI): Real Gaps Between Real Candle Bodies.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-044-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'volume-imbalance',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-044-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-044-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-045',
    slug: 'rejection-blocks',
    title: "Rejection Block: Long Wick Liquidity Absorption Arrays",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "The price zone defined by the extreme wicks of a swing point where commercial limits absorbed all incoming momentum.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for Rejection Block: Long Wick Liquidity Absorption Arrays.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-045-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-045-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-045-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-046',
    slug: 'propulsion-blocks',
    title: "Propulsion Block: High-Momentum Retest of Prior Order Blocks",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "A secondary candle that mitigates an existing Order Block and instantly displaces, creating a tiered acceleration setup.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for Propulsion Block: High-Momentum Retest of Prior Order Blocks.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-046-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-046-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-046-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-047',
    slug: 'vacuum-blocks',
    title: "Vacuum Block: Overnight & Weekend Economic Gap Arrays",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "Physical price gaps left open during weekend or holiday closes that act as magnetic algorithmic equilibrium targets.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'volume-imbalance',
    diagramCaption: 'Institutional vector price action model for Vacuum Block: Overnight & Weekend Economic Gap Arrays.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-047-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'volume-imbalance',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-047-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-047-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-048',
    slug: 'optimal-trade-entry',
    title: "Optimal Trade Entry (OTE): The 62%–79% Fibonacci Matrix",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "The institutional golden pocket: entering at 62%, 70.5%, and 79% retracement of an impulsive dealing range.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'optimal-trade-entry',
    diagramCaption: 'Institutional vector price action model for Optimal Trade Entry (OTE): The 62%–79% Fibonacci Matrix.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-048-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'optimal-trade-entry',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-048-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-048-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-049',
    slug: 'premium-and-discount',
    title: "Premium & Discount: Buying Below 50% and Selling Above 50%",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "The timeless mercantile law: institutional algorithms buy strictly in discount and distribute strictly in premium.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'premium-discount',
    diagramCaption: 'Institutional vector price action model for Premium & Discount: Buying Below 50% and Selling Above 50%.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-049-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'premium-discount',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-049-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-049-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-050',
    slug: 'consequent-encroachment-ce-50',
    title: "Consequent Encroachment (CE 50%): The Algorithmic Balance Line",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "The exact 50% midpoint of a Fair Value Gap or wick that institutions defend with surgical precision.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for Consequent Encroachment (CE 50%): The Algorithmic Balance Line.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-050-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-050-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-050-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-051',
    slug: 'mean-threshold-mt-50',
    title: "Mean Threshold (MT 50%): Defending Order Block Halves",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "The 50% midpoint of an Order Block body. Candle closes beyond the Mean Threshold invalidate the setup.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for Mean Threshold (MT 50%): Defending Order Block Halves.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-051-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-051-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-051-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-052',
    slug: 'order-block-validation-rules',
    title: "Order Block Validation Checklist: When to Trust an OB",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "A 5-point checklist verifying liquidity sweep, displacement, FVG creation, and clean timeframe alignment.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for Order Block Validation Checklist: When to Trust an OB.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-052-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-052-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-052-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-053',
    slug: 'stacking-pd-arrays-confluence',
    title: "Stacking PD Arrays: High-Confluence Institutional Clusters",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Combining an Order Block inside an FVG at the 62% OTE level to achieve exceptional win-rate asymmetric setups.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'unicorn-model',
    diagramCaption: 'Institutional vector price action model for Stacking PD Arrays: High-Confluence Institutional Clusters.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-053-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'unicorn-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-053-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-053-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-054',
    slug: 'pd-array-matrix-hierarchy',
    title: "The 9-Level PD Array Hierarchy: Ranking Support & Resistance",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "The codified institutional hierarchy ranking Mitigations, Breakers, Voids, FVGs, and Order Blocks from weakest to strongest.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'premium-discount',
    diagramCaption: 'Institutional vector price action model for The 9-Level PD Array Hierarchy: Ranking Support & Resistance.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-054-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'premium-discount',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-054-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-054-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-055',
    slug: 'wick-as-an-order-block',
    title: "Long Wicks as Order Blocks: Extracting Hidden Imbalances",
    clusterId: 'cluster-04',
    clusterNumber: 4,
    clusterName: "PD Array Tools",
    category: "PD Array Tools",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "How to treat long wicks on higher timeframes as lower-timeframe Order Blocks and FVGs.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for Long Wicks as Order Blocks: Extracting Hidden Imbalances.',
    tags: ["PD Array Tools", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-055-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-055-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-055-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'optimal-trade-entry',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 05: MODELS & SESSIONS (16 Articles)
  // ==========================================
  {
    id: 'art-056',
    slug: 'silver-bullet',
    title: "The ICT Silver Bullet: 10:00–11:00 AM NY High-Probability Model",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "The premier 60-minute algorithmic execution model on Index Futures (NQ/ES) with a strict mechanical 1:2 R:R framework.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'silver-bullet',
    diagramCaption: 'Institutional vector price action model for The ICT Silver Bullet: 10:00–11:00 AM NY High-Probability Model.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-056-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'silver-bullet',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-056-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'optimal-trade-entry',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-056-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-057',
    slug: 'silver-bullet-london-am',
    title: "London AM Silver Bullet (03:00–04:00 AM NY) Framework",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "The European morning session Silver Bullet executing high-probability reversals and expansions on EURUSD and GBPUSD.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'silver-bullet',
    diagramCaption: 'Institutional vector price action model for London AM Silver Bullet (03:00–04:00 AM NY) Framework.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-057-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'silver-bullet',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-057-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'optimal-trade-entry',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-057-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-058',
    slug: 'silver-bullet-ny-pm',
    title: "New York PM Silver Bullet (02:00–03:00 PM NY) Framework",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "The afternoon liquidity injection that delivers late-day intraday trend continuation or macro mean reversion.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'silver-bullet',
    diagramCaption: 'Institutional vector price action model for New York PM Silver Bullet (02:00–03:00 PM NY) Framework.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-058-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'silver-bullet',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-058-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'optimal-trade-entry',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-058-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-059',
    slug: 'power-of-three',
    title: "Power of 3 (PO3): Open, Manipulate, Expand, Distribute",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "The institutional daily bar delivery anatomy: open price, manipulation wick, expansion body, and distribution close.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'power-of-three',
    diagramCaption: 'Institutional vector price action model for Power of 3 (PO3): Open, Manipulate, Expand, Distribute.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-059-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'power-of-three',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-059-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-059-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-060',
    slug: 'judas-swing',
    title: "Judas Swing: The London Open Trap That Traps Retail Breakouts",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "The false move engineered at London Open (02:00-03:00 AM NY) to sweep Asian Range liquidity before the true trend.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'judas-swing',
    diagramCaption: 'Institutional vector price action model for Judas Swing: The London Open Trap That Traps Retail Breakouts.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-060-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'judas-swing',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-060-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-060-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-061',
    slug: 'turtle-soup',
    title: "Turtle Soup Model: Exploiting False Breakouts with Aggressive Reversals",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Counter-trend institutional entry catching failed 20-bar breakout attempts as smart money harvests resting stops.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'turtle-soup',
    diagramCaption: 'Institutional vector price action model for Turtle Soup Model: Exploiting False Breakouts with Aggressive Reversals.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-061-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'turtle-soup',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-061-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'liquidity-sweep',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-061-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-062',
    slug: 'the-unicorn-model',
    title: "The Unicorn Setup: Confluence of Breaker Block & Fair Value Gap",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "The highest-probability single setup in ICT: an unmitigated FVG nested directly inside a Breaker Block.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'unicorn-model',
    diagramCaption: 'Institutional vector price action model for The Unicorn Setup: Confluence of Breaker Block & Fair Value Gap.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-062-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'unicorn-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-062-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-062-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-063',
    slug: 'market-maker-buy-model-mmbm',
    title: "Market Maker Buy Model (MMBM): Complete Cycle Anatomy",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "9 min read",
    shortDefinition: "The multi-stage institutional accumulation framework: Original Consolidation -> Smart Money Reversal -> Low Risk Buy -> Re-accumulation.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'market-maker-model',
    diagramCaption: 'Institutional vector price action model for Market Maker Buy Model (MMBM): Complete Cycle Anatomy.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-063-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'market-maker-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-063-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-063-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-064',
    slug: 'market-maker-sell-model-mmsm',
    title: "Market Maker Sell Model (MMSM): Distribution from Top to Bottom",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "9 min read",
    shortDefinition: "The mirror distribution roadmap guiding institutional selling from high timeframe premium into deep discount.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'market-maker-model',
    diagramCaption: 'Institutional vector price action model for Market Maker Sell Model (MMSM): Distribution from Top to Bottom.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-064-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'market-maker-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-064-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-064-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-065',
    slug: 'asian-range-dynamics',
    title: "Asian Range Dynamics: Establishing the Daily Accumulation Box",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "6 min read",
    shortDefinition: "The 20:00 to 00:00 NY accumulation box whose high and low boundaries serve as liquidity targets for London.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for Asian Range Dynamics: Establishing the Daily Accumulation Box.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-065-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-065-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-065-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-066',
    slug: 'london-open-killzone',
    title: "London Open Kill Zone: 02:00–05:00 AM NY High/Low Formation",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "The most volatile European session window where the High or Low of the day is established in 70%+ of sessions.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for London Open Kill Zone: 02:00–05:00 AM NY High/Low Formation.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-066-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-066-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-066-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-067',
    slug: 'new-york-am-killzone',
    title: "New York AM Kill Zone: 08:30–11:00 AM NY Major Trend Delivery",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "The Wall Street opening bell execution window combining economic releases, equities open (09:30), and Silver Bullet.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for New York AM Kill Zone: 08:30–11:00 AM NY Major Trend Delivery.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-067-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-067-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-067-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-068',
    slug: 'london-close-killzone',
    title: "London Close Kill Zone: 10:30 AM–01:00 PM Counter-Trend Retracements",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "6 min read",
    shortDefinition: "European bank profit-taking producing predictable 20-30 pip counter-trend retracements into institutional discount.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for London Close Kill Zone: 10:30 AM–01:00 PM Counter-Trend Retracements.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-068-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-068-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-068-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-069',
    slug: 'new-york-pm-macro-windows',
    title: "NY PM Macros: 01:15–01:45 PM & 02:10–02:40 PM Algorithmic Injections",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Specific 20-minute windows where institutional trading desks inject liquidity to balance day-end index books.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'silver-bullet',
    diagramCaption: 'Institutional vector price action model for NY PM Macros: 01:15–01:45 PM & 02:10–02:40 PM Algorithmic Injections.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-069-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'silver-bullet',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-069-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'optimal-trade-entry',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-069-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-070',
    slug: 'the-ict-2022-mentorship-model',
    title: "The Iconic 2022 ICT Mentorship Model: Sweep + MSS + FVG",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "9 min read",
    shortDefinition: "The clean mechanical 3-step setup: 1. Liquidity Sweep -> 2. Market Structure Shift with Displacement -> 3. FVG Retest Entry.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'market-structure-shift',
    diagramCaption: 'Institutional vector price action model for The Iconic 2022 ICT Mentorship Model: Sweep + MSS + FVG.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-070-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'market-structure-shift',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-070-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bullish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-070-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-071',
    slug: 'session-transitions-and-flouts',
    title: "Session Transitions: Managing Hand-Off Between London & New York",
    clusterId: 'cluster-05',
    clusterNumber: 5,
    clusterName: "Models & Sessions",
    category: "Models & Sessions",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Understanding how London trends either continue, reverse, or consolidate during the 07:00-08:30 AM NY transition.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for Session Transitions: Managing Hand-Off Between London & New York.',
    tags: ["Models & Sessions", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-071-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-071-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-071-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 06: CRT — CANDLE RANGE THEORY (8 Articles)
  // ==========================================
  {
    id: 'art-072',
    slug: 'candle-range-theory',
    title: "CRT Foundations: The Anatomy of Single & Multi-Bar Ranges",
    clusterId: 'cluster-06',
    clusterNumber: 6,
    clusterName: "CRT — Candle Range Theory",
    category: "CRT — Candle Range Theory",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "How single-candle and multi-candle boundaries dictate high timeframe liquidity and anticipate intraday expansion.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'crt-model',
    diagramCaption: 'Institutional vector price action model for CRT Foundations: The Anatomy of Single & Multi-Bar Ranges.',
    tags: ["CRT — Candle Range Theory", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-072-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'crt-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-072-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'power-of-three',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-072-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-073',
    slug: 'crt-reference-candle',
    title: "The CRT Reference Candle: Determining High and Low Range Limits",
    clusterId: 'cluster-06',
    clusterNumber: 6,
    clusterName: "CRT — Candle Range Theory",
    category: "CRT — Candle Range Theory",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Isolating the key reference candle whose high and low define the battleground for subsequent bar expansions.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'crt-model',
    diagramCaption: 'Institutional vector price action model for The CRT Reference Candle: Determining High and Low Range Limits.',
    tags: ["CRT — Candle Range Theory", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-073-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'crt-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-073-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'power-of-three',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-073-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-074',
    slug: 'crt-session-execution',
    title: "CRT Session Execution: Exploiting Intraday Range Sweeps",
    clusterId: 'cluster-06',
    clusterNumber: 6,
    clusterName: "CRT — Candle Range Theory",
    category: "CRT — Candle Range Theory",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Applying Candle Range Theory to the 1-hour and 4-hour candles during London and New York session opens.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'crt-model',
    diagramCaption: 'Institutional vector price action model for CRT Session Execution: Exploiting Intraday Range Sweeps.',
    tags: ["CRT — Candle Range Theory", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-074-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'crt-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-074-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'power-of-three',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-074-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-075',
    slug: 'crt-vs-amd-comparison',
    title: "CRT vs AMD: Micro-Scale Candle Physics vs Session Cycles",
    clusterId: 'cluster-06',
    clusterNumber: 6,
    clusterName: "CRT — Candle Range Theory",
    category: "CRT — Candle Range Theory",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Comparing how CRT operates at the individual candle level while AMD describes broader session-level delivery.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'power-of-three',
    diagramCaption: 'Institutional vector price action model for CRT vs AMD: Micro-Scale Candle Physics vs Session Cycles.',
    tags: ["CRT — Candle Range Theory", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-075-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'power-of-three',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-075-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-075-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-076',
    slug: 'crt-daily-vs-weekly-ranges',
    title: "Daily CRT vs Weekly CRT: Top-Down Range Alignment",
    clusterId: 'cluster-06',
    clusterNumber: 6,
    clusterName: "CRT — Candle Range Theory",
    category: "CRT — Candle Range Theory",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Aligning 1-hour and 15-minute executions with higher timeframe Daily and Weekly CRT reference bars.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'crt-model',
    diagramCaption: 'Institutional vector price action model for Daily CRT vs Weekly CRT: Top-Down Range Alignment.',
    tags: ["CRT — Candle Range Theory", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-076-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'crt-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-076-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'power-of-three',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-076-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-077',
    slug: 'stacking-sequential-crts',
    title: "Stacking Sequential CRTs: Trend Continuation & Cascades",
    clusterId: 'cluster-06',
    clusterNumber: 6,
    clusterName: "CRT — Candle Range Theory",
    category: "CRT — Candle Range Theory",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Trading cascading candle expansions where consecutive bars expand out of preceding CRT boundaries.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'break-of-structure',
    diagramCaption: 'Institutional vector price action model for Stacking Sequential CRTs: Trend Continuation & Cascades.',
    tags: ["CRT — Candle Range Theory", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-077-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'break-of-structure',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-077-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-077-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-078',
    slug: 'crt-smt-confirmation-filters',
    title: "CRT with SMT Confirmation: Eliminating False Range Breaks",
    clusterId: 'cluster-06',
    clusterNumber: 6,
    clusterName: "CRT — Candle Range Theory",
    category: "CRT — Candle Range Theory",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Using SMT divergence at the high/low of a CRT reference candle to filter out low-probability false breakouts.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'smt-divergence',
    diagramCaption: 'Institutional vector price action model for CRT with SMT Confirmation: Eliminating False Range Breaks.',
    tags: ["CRT — Candle Range Theory", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-078-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'smt-divergence',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-078-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'intermarket-correlation',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-078-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-079',
    slug: 'crt-take-profit-mechanics',
    title: "CRT Target Projections: Opposing Wick vs Extension Targets",
    clusterId: 'cluster-06',
    clusterNumber: 6,
    clusterName: "CRT — Candle Range Theory",
    category: "CRT — Candle Range Theory",
    difficulty: "Advanced",
    readTime: "6 min read",
    shortDefinition: "Setting systematic take-profit targets at the opposing wick of the CRT reference candle or standard deviation extensions.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'optimal-trade-entry',
    diagramCaption: 'Institutional vector price action model for CRT Target Projections: Opposing Wick vs Extension Targets.',
    tags: ["CRT — Candle Range Theory", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-079-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'optimal-trade-entry',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-079-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-079-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 07: S&D / MISCELLANEOUS (8 Articles)
  // ==========================================
  {
    id: 'art-080',
    slug: 'ict-supply-and-demand',
    title: "ICT Supply & Demand: How Institutional Zones Differ from Retail",
    clusterId: 'cluster-07',
    clusterNumber: 7,
    clusterName: "S&D / Miscellaneous",
    category: "S&D / Miscellaneous",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Moving beyond retail rectangle boxes to understand the origin candle, unmitigated orders, and liquidity delivery.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for ICT Supply & Demand: How Institutional Zones Differ from Retail.',
    tags: ["S&D / Miscellaneous", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-080-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-080-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-080-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-081',
    slug: 'origin-candle-theory',
    title: "The Origin Candle: Tracing Where Banks Began Accumulation",
    clusterId: 'cluster-07',
    clusterNumber: 7,
    clusterName: "S&D / Miscellaneous",
    category: "S&D / Miscellaneous",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Identifying the exact historical origin bar where institutional size was initially committed to the book.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for The Origin Candle: Tracing Where Banks Began Accumulation.',
    tags: ["S&D / Miscellaneous", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-081-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-081-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-081-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-082',
    slug: 'equilibrium-calibration',
    title: "Equilibrium Calibration: Measuring Price from True Impulses",
    clusterId: 'cluster-07',
    clusterNumber: 7,
    clusterName: "S&D / Miscellaneous",
    category: "S&D / Miscellaneous",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "Calibrating Fibonacci anchor points on genuine displacement swings to calculate true algorithmic 50% levels.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'premium-discount',
    diagramCaption: 'Institutional vector price action model for Equilibrium Calibration: Measuring Price from True Impulses.',
    tags: ["S&D / Miscellaneous", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-082-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'premium-discount',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-082-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-082-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-083',
    slug: 'order-flow-matrix',
    title: "Institutional Order Flow Matrix: Bids, Offers & Dark Liquidity",
    clusterId: 'cluster-07',
    clusterNumber: 7,
    clusterName: "S&D / Miscellaneous",
    category: "S&D / Miscellaneous",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "How interbank matching engines manage order book imbalances between resting limit orders and aggressive flow.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'ipda-ranges',
    diagramCaption: 'Institutional vector price action model for Institutional Order Flow Matrix: Bids, Offers & Dark Liquidity.',
    tags: ["S&D / Miscellaneous", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-083-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'ipda-ranges',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-083-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-083-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-084',
    slug: 'liquidity-run-versus-rebalance',
    title: "Liquidity Run vs Market Rebalance: Two Reasons Price Moves",
    clusterId: 'cluster-07',
    clusterNumber: 7,
    clusterName: "S&D / Miscellaneous",
    category: "S&D / Miscellaneous",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "The only two drivers of price movement: attacking resting liquidity pools or rebalancing fair value inefficiencies.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for Liquidity Run vs Market Rebalance: Two Reasons Price Moves.',
    tags: ["S&D / Miscellaneous", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-084-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-084-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-084-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-085',
    slug: 'balanced-price-range-mastery',
    title: "Balanced Price Range (BPR) Execution: Reversing Imbalance",
    clusterId: 'cluster-07',
    clusterNumber: 7,
    clusterName: "S&D / Miscellaneous",
    category: "S&D / Miscellaneous",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "High-conviction trading rules for executing off the tight neutral pocket of two overlapping opposite gaps.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'balanced-price-range',
    diagramCaption: 'Institutional vector price action model for Balanced Price Range (BPR) Execution: Reversing Imbalance.',
    tags: ["S&D / Miscellaneous", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-085-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'balanced-price-range',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-085-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-085-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-086',
    slug: 'inefficiency-and-volume-spread',
    title: "Inefficiency & Volume Spread: Recognizing Exhaustion",
    clusterId: 'cluster-07',
    clusterNumber: 7,
    clusterName: "S&D / Miscellaneous",
    category: "S&D / Miscellaneous",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "Using volume spread analysis alongside ICT price action to spot algorithmic delivery exhaustion.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for Inefficiency & Volume Spread: Recognizing Exhaustion.',
    tags: ["S&D / Miscellaneous", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-086-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-086-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-086-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-087',
    slug: 'interbank-matrix-schedules',
    title: "Economic Release Calendars & Algorithmic Volatility Schedules",
    clusterId: 'cluster-07',
    clusterNumber: 7,
    clusterName: "S&D / Miscellaneous",
    category: "S&D / Miscellaneous",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Navigating CPI, FOMC, PPI, and NFP schedules to align institutional models with calendar-driven volatility.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Economic Release Calendars & Algorithmic Volatility Schedules.',
    tags: ["S&D / Miscellaneous", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-087-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-087-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-087-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'silver-bullet',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 08: ADVANCED ICT (12 Articles)
  // ==========================================
  {
    id: 'art-088',
    slug: 'smt-divergence',
    title: "SMT Divergence: Spotting Non-Confirmation in Correlated Assets",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "9 min read",
    shortDefinition: "Smart Money Technique: when correlated assets (NQ vs ES, or EUR vs GBP) diverge at key highs or lows, revealing manipulation.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'smt-divergence',
    diagramCaption: 'Institutional vector price action model for SMT Divergence: Spotting Non-Confirmation in Correlated Assets.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-088-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'smt-divergence',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-088-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'intermarket-correlation',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-088-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-089',
    slug: 'the-venom-model',
    title: "The Venom Model: Aggressive Momentum Acceleration into Imbalances",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Advanced 2024 institutional framework capitalizing on sudden, high-velocity sweeps into nested discount arrays.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for The Venom Model: Aggressive Momentum Acceleration into Imbalances.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-089-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-089-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-089-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-090',
    slug: 'the-enigma-fvg',
    title: "The Enigma FVG: Hidden Intra-Session Gaps on Inverted Volume",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Subtle intra-session imbalances created when algorithmic order books gap between sub-minute execution ticks.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'inversion-fvg',
    diagramCaption: 'Institutional vector price action model for The Enigma FVG: Hidden Intra-Session Gaps on Inverted Volume.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-090-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'inversion-fvg',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-090-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-090-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-091',
    slug: 'reaper-inversion-model',
    title: "The Reaper IFVG: Dynamic Trapping of Counter-Trend Trapped Liquidity",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "A specialized Inversion FVG execution model that traps breakout traders against higher timeframe order flow.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'inversion-fvg',
    diagramCaption: 'Institutional vector price action model for The Reaper IFVG: Dynamic Trapping of Counter-Trend Trapped Liquidity.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-091-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'inversion-fvg',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-091-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-091-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-092',
    slug: 'suspension-blocks',
    title: "Suspension Block: Pauses in Algorithmic Delivery Prior to Major Injections",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Compact tight-range bars where algorithms suspend quotes immediately before a high-magnitude expansion.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'volume-imbalance',
    diagramCaption: 'Institutional vector price action model for Suspension Block: Pauses in Algorithmic Delivery Prior to Major Injections.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-092-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'volume-imbalance',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-092-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-092-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-093',
    slug: 'rdrb-reversal-displacement-block',
    title: "RDRB Mechanics: Reversal Displacement Rejection Blocks",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Reversal Displacement Rejection Blocks: combining wick absorption and structural displacement into one powerhouse entry.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'breaker-block',
    diagramCaption: 'Institutional vector price action model for RDRB Mechanics: Reversal Displacement Rejection Blocks.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-093-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'breaker-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-093-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'unicorn-model',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-093-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-094',
    slug: 'stacked-confluences-2025',
    title: "2024–2025 Advanced Confluences: Triple-Layer Algorithmic Alignment",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "9 min read",
    shortDefinition: "Aligning higher timeframe DOL, session killzone macro, and lower timeframe OTE/FVG for 85%+ win-rate execution.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'unicorn-model',
    diagramCaption: 'Institutional vector price action model for 2024–2025 Advanced Confluences: Triple-Layer Algorithmic Alignment.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-094-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'unicorn-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-094-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-094-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-095',
    slug: 'algorithmic-macro-windows',
    title: "The Exact 20-Minute Algorithmic Windows: 08:50, 09:50, 10:50, 13:50",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "The precise minute intervals when central bank algorithms inject scheduled liquidity cycles across index futures.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'silver-bullet',
    diagramCaption: 'Institutional vector price action model for The Exact 20-Minute Algorithmic Windows: 08:50, 09:50, 10:50, 13:50.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-095-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'silver-bullet',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-095-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'optimal-trade-entry',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-095-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-096',
    slug: 'index-futures-correlation-divergence',
    title: "Index Triad Divergence: NQ vs ES vs YM SMT Secrets",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Decoding leader vs laggard dynamics between Nasdaq, S&P 500, and Dow Jones to pinpoint market tops and bottoms.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'intermarket-correlation',
    diagramCaption: 'Institutional vector price action model for Index Triad Divergence: NQ vs ES vs YM SMT Secrets.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-096-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'intermarket-correlation',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-096-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-096-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-097',
    slug: 'forex-triad-divergence',
    title: "Forex Triad SMT: DXY vs EURUSD vs GBPUSD Institutional Divergence",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Using the US Dollar Index (DXY) as the master anchor to find high-probability currency reversals.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'intermarket-correlation',
    diagramCaption: 'Institutional vector price action model for Forex Triad SMT: DXY vs EURUSD vs GBPUSD Institutional Divergence.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-097-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'intermarket-correlation',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-097-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-097-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-098',
    slug: 'intermarket-bond-yield-alignment',
    title: "10-Year Treasury Yields (US10Y) & Stock Index Divergence",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Tracking bond market yields to establish macro intermarket directional bias for equities and foreign exchange.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'intermarket-correlation',
    diagramCaption: 'Institutional vector price action model for 10-Year Treasury Yields (US10Y) & Stock Index Divergence.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-098-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'intermarket-correlation',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-098-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-098-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-099',
    slug: 'advanced-algorithmic-liquidity-sweeps',
    title: "Cascading Stop Sweeps & Institutional Re-Accumulation",
    clusterId: 'cluster-08',
    clusterNumber: 8,
    clusterName: "Advanced ICT",
    category: "Advanced ICT",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "How algorithms run multiple sequential liquidity pools before initiating the true high-timeframe reversal trend.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'turtle-soup',
    diagramCaption: 'Institutional vector price action model for Cascading Stop Sweeps & Institutional Re-Accumulation.',
    tags: ["Advanced ICT", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-099-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'turtle-soup',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-099-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'liquidity-sweep',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-099-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 09: INSTRUMENTS & MARKETS (10 Articles)
  // ==========================================
  {
    id: 'art-100',
    slug: 'trading-nq-nasdaq-futures',
    title: "Trading E-mini Nasdaq (NQ): Tick Value, Volatility & Silver Bullet",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Mastering the fastest-moving index futures contract: $20/pt tick mechanics, morning volatility, and Silver Bullet delivery.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'silver-bullet',
    diagramCaption: 'Institutional vector price action model for Trading E-mini Nasdaq (NQ): Tick Value, Volatility & Silver Bullet.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-100-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'silver-bullet',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-100-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'optimal-trade-entry',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-100-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-101',
    slug: 'trading-es-sp500-futures',
    title: "Trading E-mini S&P 500 (ES): Institutional Liquidity & Structure",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "The benchmark institutional instrument: cleaner structural respect, deep liquidity, and optimal execution rules.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'market-structure-shift',
    diagramCaption: 'Institutional vector price action model for Trading E-mini S&P 500 (ES): Institutional Liquidity & Structure.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-101-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'market-structure-shift',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-101-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bullish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-101-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-102',
    slug: 'trading-ym-dow-futures',
    title: "E-mini Dow Jones (YM): Industrial Order Flow & SMT Filter",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "How Dow Jones index flow leads cyclical sector rotations and generates reliable SMT divergences against NQ and ES.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'intermarket-correlation',
    diagramCaption: 'Institutional vector price action model for E-mini Dow Jones (YM): Industrial Order Flow & SMT Filter.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-102-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'intermarket-correlation',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-102-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-102-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-103',
    slug: 'trading-eurusd-institutional-flow',
    title: "EURUSD: Central Bank Interest Rate Spreads & London Open Flow",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Trading the most liquid currency pair in the world using ECB/Fed rate differentials and London Kill Zone expansions.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for EURUSD: Central Bank Interest Rate Spreads & London Open Flow.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-103-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-103-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-103-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-104',
    slug: 'trading-gbpusd-cable-volatility',
    title: "GBPUSD (Cable): High-Volatility Judas Swings & Session Spikes",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Taming the notorious volatility of Cable with strict Asian Range boundaries and London Judas swing entries.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'judas-swing',
    diagramCaption: 'Institutional vector price action model for GBPUSD (Cable): High-Volatility Judas Swings & Session Spikes.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-104-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'judas-swing',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-104-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-104-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-105',
    slug: 'trading-gold-xauusd-smart-money',
    title: "Gold (XAUUSD): Safe-Haven Liquidity Sweeps & Session Models",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Applying ICT price action to precious metals: London Open stop raids, US inflation reactions, and daily draw on liquidity.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Gold (XAUUSD): Safe-Haven Liquidity Sweeps & Session Models.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-105-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-105-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-105-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-106',
    slug: 'trading-crude-oil-energy-flow',
    title: "Crude Oil (CL): Energy Inventory Sweeps & 09:00 AM Delivery",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Trading energy futures around weekly EIA inventory announcements using Fair Value Gaps and Order Blocks.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for Crude Oil (CL): Energy Inventory Sweeps & 09:00 AM Delivery.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-106-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-106-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-106-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-107',
    slug: 'trading-bitcoin-crypto-ict',
    title: "Bitcoin & Crypto: Algorithmic Price Action in 24/7 Decentralized Markets",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Validating that algorithmic smart money concepts work with high precision on Bitcoin and Ethereum 24/7 charts.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for Bitcoin & Crypto: Algorithmic Price Action in 24/7 Decentralized Markets.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-107-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-107-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-107-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-108',
    slug: 'forex-vs-futures-market-mechanics',
    title: "Forex (OTC) vs US Regulated Futures: Order Books & Transparency",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Comparing decentralized broker spreads and execution latency against CME centralized futures order books.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Forex (OTC) vs US Regulated Futures: Order Books & Transparency.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-108-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-108-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-108-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-109',
    slug: 'cross-asset-session-playbook',
    title: "The Multi-Asset Daily Playbook: Timing Equities, Forex & Metals",
    clusterId: 'cluster-09',
    clusterNumber: 9,
    clusterName: "Instruments & Markets",
    category: "Instruments & Markets",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "A daily workflow scheduling when to trade London Forex, when to switch to Index Futures, and when to close the desk.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for The Multi-Asset Daily Playbook: Timing Equities, Forex & Metals.',
    tags: ["Instruments & Markets", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-109-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-109-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-109-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 10: RISK & PROCESS (12 Articles)
  // ==========================================
  {
    id: 'art-110',
    slug: 'the-one-percent-risk-rule',
    title: "The 1% Risk Rule: The Unbreakable Mathematical Law of Survivability",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "The foundational risk threshold that mathematically prevents account ruin even across a 15-trade drawdown sequence.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for The 1% Risk Rule: The Unbreakable Mathematical Law of Survivability.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-110-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-110-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-110-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-111',
    slug: 'three-percent-daily-loss-limit',
    title: "The 3% Daily Max Drawdown Circuit Breaker: Halting Emotional Tilt",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "The hard circuit breaker rule: automatically walking away from the desk after losing 3% in a single trading day.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for The 3% Daily Max Drawdown Circuit Breaker: Halting Emotional Tilt.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-111-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-111-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-111-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-112',
    slug: 'position-sizing-discipline',
    title: "Institutional Position Sizing: Calculating Contracts & Lot Sizes",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Exact formulas to convert account balance, stop-loss tick distance, and risk percentage into precise position sizes.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Institutional Position Sizing: Calculating Contracts & Lot Sizes.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-112-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-112-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-112-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-113',
    slug: 'structural-stop-loss-placement',
    title: "Structural Stop Loss Placement: Beyond Swing Wicks & PD Arrays",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Placing stops behind institutional invalidation levels (Order Block Mean Threshold or Breaker high) rather than arbitrary ticks.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'order-block',
    diagramCaption: 'Institutional vector price action model for Structural Stop Loss Placement: Beyond Swing Wicks & PD Arrays.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-113-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'order-block',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-113-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'breaker-block',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-113-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-114',
    slug: 'partial-profit-taking-strategy',
    title: "Partial Profit Taking: Paying the Trader & De-Risking the Position",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Taking 50% off at the first opposing liquidity pool (2R) to create a guaranteed stress-free runner trade.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'optimal-trade-entry',
    diagramCaption: 'Institutional vector price action model for Partial Profit Taking: Paying the Trader & De-Risking the Position.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-114-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'optimal-trade-entry',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-114-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-114-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-115',
    slug: 'stop-to-breakeven-timing',
    title: "Stop to Breakeven (BE) Rules: When to Protect vs When You Choke the Trade",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "The rules of stop management: moving to BE only after price displaces through internal structure and creates a new FVG.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'break-of-structure',
    diagramCaption: 'Institutional vector price action model for Stop to Breakeven (BE) Rules: When to Protect vs When You Choke the Trade.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-115-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'break-of-structure',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-115-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-115-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-116',
    slug: 'risk-to-reward-and-expected-value',
    title: "Risk-to-Reward Math & Expected Value (EV): Asymmetry Over Win-Rate",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "How an asymmetric 1:3 R:R framework delivers massive annual profitability even with a 40% win rate.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Risk-to-Reward Math & Expected Value (EV): Asymmetry Over Win-Rate.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-116-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-116-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-116-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-117',
    slug: 'professional-trade-logging',
    title: "The Professional Trading Journal: What Data to Record on Every Fill",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "The essential logging metrics: screenshot of higher timeframe, entry model, R:R planned vs realized, and psychological state.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for The Professional Trading Journal: What Data to Record on Every Fill.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-117-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-117-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-117-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-118',
    slug: 'backtesting-framework-ict',
    title: "Systematic Backtesting: 100-Trade Sample Sizes Without Hindsight Bias",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Rigorous historical testing protocol using bar-replay to validate models across at least 100 market events.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Systematic Backtesting: 100-Trade Sample Sizes Without Hindsight Bias.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-118-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-118-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-118-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-119',
    slug: 'forward-testing-and-demo-execution',
    title: "Forward Testing in Simulation: Building Muscle Memory",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Practicing live execution in simulation mode to master order entry, partial management, and emotional stability.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Forward Testing in Simulation: Building Muscle Memory.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-119-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-119-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-119-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-120',
    slug: 'drawdown-recovery-protocol',
    title: "The Drawdown Recovery Protocol: Step-by-Step Risk Reduction Steps",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Halving your risk per trade to 0.5% during drawdown to preserve capital while rebuilding confidence.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for The Drawdown Recovery Protocol: Step-by-Step Risk Reduction Steps.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-120-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-120-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-120-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-121',
    slug: 'trading-routine-pre-market-checklist',
    title: "The Institutional Pre-Market Checklist: 60 Minutes Before Open",
    clusterId: 'cluster-10',
    clusterNumber: 10,
    clusterName: "Risk & Process",
    category: "Risk & Process",
    difficulty: "Intermediate",
    readTime: "6 min read",
    shortDefinition: "A daily 60-minute ritual reviewing macro news, overnight high/low, and setting alerts at key PD arrays.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for The Institutional Pre-Market Checklist: 60 Minutes Before Open.',
    tags: ["Risk & Process", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-121-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-121-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-121-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 11: STRATEGY & APPLICATION (18 Articles)
  // ==========================================
  {
    id: 'art-122',
    slug: 'intraday-scalping-blueprint',
    title: "1-Minute & 5-Minute Intraday Scalping Blueprint",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Fast-paced execution framework capturing 15-25 points on NQ or 10-20 pips on Forex using 1M FVGs.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for 1-Minute & 5-Minute Intraday Scalping Blueprint.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-122-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-122-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-122-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-123',
    slug: 'high-probability-swing-trading',
    title: "Daily & 4-Hour Swing Trading with ICT Frameworks",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Holding high-conviction positions over 2 to 5 days targeting macro weekly liquidity pools with minimal screen time.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for Daily & 4-Hour Swing Trading with ICT Frameworks.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-123-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-123-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-123-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-124',
    slug: 'prop-firm-evaluation-strategy',
    title: "Passing Prop Firm Challenges: Managing Evaluation Profit Targets",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "9 min read",
    shortDefinition: "Structured blueprint to pass prop firm challenges without breaching daily trailing or maximum drawdown rules.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'prop-firm-matrix',
    diagramCaption: 'Institutional vector price action model for Passing Prop Firm Challenges: Managing Evaluation Profit Targets.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-124-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'prop-firm-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-124-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-124-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-125',
    slug: 'funded-account-capital-preservation',
    title: "Managing Funded Prop Capital: Preserving Payout Buffers",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "How to build an initial safety buffer on funded accounts and schedule consistent bi-weekly payout withdrawals.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'prop-firm-matrix',
    diagramCaption: 'Institutional vector price action model for Managing Funded Prop Capital: Preserving Payout Buffers.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-125-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'prop-firm-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-125-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-125-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-126',
    slug: 'combining-silver-bullet-and-smt',
    title: "Combining Silver Bullet with SMT: 80%+ Strike Rate Confluence",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "9 min read",
    shortDefinition: "Entering the 10:00 AM Silver Bullet only when verified by SMT divergence between NQ and ES.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'smt-divergence',
    diagramCaption: 'Institutional vector price action model for Combining Silver Bullet with SMT: 80%+ Strike Rate Confluence.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-126-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'smt-divergence',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-126-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'intermarket-correlation',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-126-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-127',
    slug: 'combining-fvg-and-order-blocks',
    title: "Nested PD Arrays: FVG Inside an Order Block (The Breaker-Gap Combo)",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "The highest probability entry confluence: when a Fair Value Gap sits directly on top of an unmitigated Order Block.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'unicorn-model',
    diagramCaption: 'Institutional vector price action model for Nested PD Arrays: FVG Inside an Order Block (The Breaker-Gap Combo).',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-127-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'unicorn-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-127-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-127-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-128',
    slug: 'trading-nfp-cpi-fomc-news',
    title: "News Trading Protocol: Navigating CPI, NFP & FOMC Rate Decisions",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "How to handle high-impact macro news: why you never trade during the release and how to trade the 15-minute rebalance.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for News Trading Protocol: Navigating CPI, NFP & FOMC Rate Decisions.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-128-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-128-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-128-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-129',
    slug: 'post-news-algorithmic-rebalance',
    title: "Trading the 15-Minute Rebalance After Major Macro Economic Releases",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Catching the clean algorithmic rebalance that occurs 15-30 minutes after explosive news spikes.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'fvg-bullish',
    diagramCaption: 'Institutional vector price action model for Trading the 15-Minute Rebalance After Major Macro Economic Releases.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-129-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'fvg-bullish',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-129-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bearish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-129-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-130',
    slug: 'conquering-fomo-and-revenge-trading',
    title: "Psychology: Eliminating FOMO & Revenge Trading Forever",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Cognitive re-framing techniques to eliminate fear of missing out and stop revenge trading after a stop loss.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Psychology: Eliminating FOMO & Revenge Trading Forever.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-130-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-130-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-130-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-131',
    slug: 'patience-and-the-waiting-game',
    title: "The Waiting Game: Why 85% of Trading is Waiting for the Model",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "6 min read",
    shortDefinition: "Embracing the sniper mindset: executing only when all 4 rules of your model align on the chart.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'silver-bullet',
    diagramCaption: 'Institutional vector price action model for The Waiting Game: Why 85% of Trading is Waiting for the Model.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-131-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'silver-bullet',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-131-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'optimal-trade-entry',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-131-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-132',
    slug: 'trading-plan-creation-guide',
    title: "Writing Your Personal 1-Page Trading Constitution",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Synthesizing your entry model, risk rules, session hours, and daily limits into a single operational page.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Writing Your Personal 1-Page Trading Constitution.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-132-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-132-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-132-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-133',
    slug: 'weekend-chart-review-process',
    title: "The Weekend Chart Review: Auditing the Weekly Candle & Next Bias",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "A 2-hour Saturday review protocol auditing executed trades and preparing bias for the upcoming trading week.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'power-of-three',
    diagramCaption: 'Institutional vector price action model for The Weekend Chart Review: Auditing the Weekly Candle & Next Bias.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-133-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'power-of-three',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-133-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-133-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-134',
    slug: 'the-20-pip-per-day-myth',
    title: "The Myth of 20 Pips Per Day: Trading Market Conditions, Not Goals",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "6 min read",
    shortDefinition: "Why arbitrary daily pip goals cause forced trades and account blowups, and what to focus on instead.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for The Myth of 20 Pips Per Day: Trading Market Conditions, Not Goals.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-134-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-134-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-134-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-135',
    slug: 'handling-losing-streaks',
    title: "Navigating 5-Trade Losing Streaks Without System Hopping",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "The psychological and statistical realities of variance and how to stay disciplined during losing runs.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Navigating 5-Trade Losing Streaks Without System Hopping.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-135-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-135-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-135-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-136',
    slug: 'mastering-one-single-setup',
    title: "The Power of Specialization: Trading Only One Model for 12 Months",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Why specializing in a single setup (e.g. Silver Bullet or 2022 Model) creates professional profitability faster.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'silver-bullet',
    diagramCaption: 'Institutional vector price action model for The Power of Specialization: Trading Only One Model for 12 Months.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-136-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'silver-bullet',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-136-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'optimal-trade-entry',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-136-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-137',
    slug: 'from-beginner-to-funded-trader',
    title: "The Complete Roadmap: 12-Month Blueprint from Beginner to Funded",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "9 min read",
    shortDefinition: "A realistic month-by-month study and execution roadmap from learning vocabulary to managing six-figure capital.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'prop-firm-matrix',
    diagramCaption: 'Institutional vector price action model for The Complete Roadmap: 12-Month Blueprint from Beginner to Funded.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-137-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'prop-firm-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-137-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-137-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-138',
    slug: 'psychological-discipline',
    title: "Building Unshakeable Emotional Regulation at the Trading Desk",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "8 min read",
    shortDefinition: "Biological bio-feedback, breathing techniques, and operational routines to keep heart rate and cortisol in check.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Building Unshakeable Emotional Regulation at the Trading Desk.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-138-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-138-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-138-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-139',
    slug: 'framework-refinement',
    title: "Iterative System Optimization: Auditing Journal Data for Edge Leaks",
    clusterId: 'cluster-11',
    clusterNumber: 11,
    clusterName: "Strategy & Application",
    category: "Strategy & Application",
    difficulty: "Advanced",
    readTime: "7 min read",
    shortDefinition: "Analyzing your trade log to isolate and eliminate the bottom 20% of trade setups that drag down portfolio PnL.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Iterative System Optimization: Auditing Journal Data for Edge Leaks.',
    tags: ["Strategy & Application", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-139-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-139-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-139-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 12: COMPARISONS & DEEP DIVES (4 Articles)
  // ==========================================
  {
    id: 'art-140',
    slug: 'ict-vs-smc-smart-money-concepts',
    title: "ICT vs Standard SMC: Key Differences, Origins & Fallacies",
    clusterId: 'cluster-12',
    clusterNumber: 12,
    clusterName: "Comparisons & Deep Dives",
    category: "Comparisons & Deep Dives",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "A comprehensive comparative analysis contrasting original ICT methodology with derivative YouTube SMC variations.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'market-structure-shift',
    diagramCaption: 'Institutional vector price action model for ICT vs Standard SMC: Key Differences, Origins & Fallacies.',
    tags: ["Comparisons & Deep Dives", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-140-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'market-structure-shift',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-140-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'fvg-bullish',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-140-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-141',
    slug: 'ict-vs-wyckoff-methodology',
    title: "ICT vs Wyckoff: Accumulation, Springs, Upthrusts & Smart Money",
    clusterId: 'cluster-12',
    clusterNumber: 12,
    clusterName: "Comparisons & Deep Dives",
    category: "Comparisons & Deep Dives",
    difficulty: "Intermediate",
    readTime: "8 min read",
    shortDefinition: "Comparing Richard Wyckoff’s 1930s tape-reading framework with modern electronic interbank algorithmic delivery.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'power-of-three',
    diagramCaption: 'Institutional vector price action model for ICT vs Wyckoff: Accumulation, Springs, Upthrusts & Smart Money.',
    tags: ["Comparisons & Deep Dives", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-141-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'power-of-three',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-141-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-141-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-142',
    slug: 'ict-vs-traditional-support-resistance',
    title: "ICT vs Retail Support & Resistance: Why Double Tops Get Cleared",
    clusterId: 'cluster-12',
    clusterNumber: 12,
    clusterName: "Comparisons & Deep Dives",
    category: "Comparisons & Deep Dives",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Contrasting static retail horizontal support/resistance against dynamic institutional liquidity draws.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'liquidity-sweep',
    diagramCaption: 'Institutional vector price action model for ICT vs Retail Support & Resistance: Why Double Tops Get Cleared.',
    tags: ["Comparisons & Deep Dives", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-142-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'liquidity-sweep',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-142-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-142-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-143',
    slug: 'fvg-vs-order-block-comparison',
    title: "Fair Value Gap vs Order Block: Which PD Array Takes Priority?",
    clusterId: 'cluster-12',
    clusterNumber: 12,
    clusterName: "Comparisons & Deep Dives",
    category: "Comparisons & Deep Dives",
    difficulty: "Intermediate",
    readTime: "7 min read",
    shortDefinition: "Resolving the dilemma of which array to enter on when an Order Block and a Fair Value Gap are both present.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'unicorn-model',
    diagramCaption: 'Institutional vector price action model for Fair Value Gap vs Order Block: Which PD Array Takes Priority?.',
    tags: ["Comparisons & Deep Dives", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-143-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'unicorn-model',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-143-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-143-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 13: RESOURCES (5 Articles)
  // ==========================================
  {
    id: 'art-144',
    slug: 'ict-killzone-time-converter',
    title: "Institutional Session Clock: Converting New York Time to Global Timezones",
    clusterId: 'cluster-13',
    clusterNumber: 13,
    clusterName: "Resources",
    category: "Resources",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "A comprehensive timezone matrix converting NY Eastern Time (EST/EDT) to GMT, CET, IST, and AEST.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for Institutional Session Clock: Converting New York Time to Global Timezones.',
    tags: ["Resources", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-144-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-144-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-144-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-145',
    slug: 'optimal-trade-entry-ote-calculator',
    title: "The OTE Fibonacci Calculator: Setting Up the 62%–79% Retracement",
    clusterId: 'cluster-13',
    clusterNumber: 13,
    clusterName: "Resources",
    category: "Resources",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "Step-by-step tutorial to configure your Fibonacci retracement tool for institutional OTE levels.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'optimal-trade-entry',
    diagramCaption: 'Institutional vector price action model for The OTE Fibonacci Calculator: Setting Up the 62%–79% Retracement.',
    tags: ["Resources", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-145-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'optimal-trade-entry',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-145-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-145-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-146',
    slug: 'asian-range-boundary-tracker',
    title: "Asian Range High & Low Planner: Projecting Judas Swing Targets",
    clusterId: 'cluster-13',
    clusterNumber: 13,
    clusterName: "Resources",
    category: "Resources",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "How to calculate 20:00 to 00:00 NY range extremes and project deviation targets for London Open execution.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'judas-swing',
    diagramCaption: 'Institutional vector price action model for Asian Range High & Low Planner: Projecting Judas Swing Targets.',
    tags: ["Resources", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-146-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'judas-swing',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-146-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-146-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-147',
    slug: 'ipda-lookback-calendar-matrix',
    title: "IPDA 20, 40 & 60-Day Lookback Range Calculation Matrix",
    clusterId: 'cluster-13',
    clusterNumber: 13,
    clusterName: "Resources",
    category: "Resources",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "How to mark 20, 40, and 60 trading days on your daily chart to identify key quarterly algorithmic turning points.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'ipda-ranges',
    diagramCaption: 'Institutional vector price action model for IPDA 20, 40 & 60-Day Lookback Range Calculation Matrix.',
    tags: ["Resources", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-147-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'ipda-ranges',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-147-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-147-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-148',
    slug: 'complete-ict-master-glossary',
    title: "The Complete ICT Master Reference Index & Study Roadmap",
    clusterId: 'cluster-13',
    clusterNumber: 13,
    clusterName: "Resources",
    category: "Resources",
    difficulty: "Beginner",
    readTime: "9 min read",
    shortDefinition: "An exhaustive cross-referenced index linking all 137 concepts, 43 glossary terms, and interactive tools.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for The Complete ICT Master Reference Index & Study Roadmap.',
    tags: ["Resources", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-148-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-148-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-148-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  // ==========================================
  // CLUSTER 14: GETTING STARTED (7 Articles)
  // ==========================================
  {
    id: 'art-149',
    slug: 'complete-beginner-ict-roadmap',
    title: "The Complete Beginner’s Step-by-Step Roadmap to ICT Trading",
    clusterId: 'cluster-14',
    clusterNumber: 14,
    clusterName: "Getting Started",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: "8 min read",
    shortDefinition: "A structured zero-knowledge entry path designed to take a complete beginner through the first 4 essential concepts.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'candlestick-anatomy',
    diagramCaption: 'Institutional vector price action model for The Complete Beginner’s Step-by-Step Roadmap to ICT Trading.',
    tags: ["Getting Started", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-149-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'candlestick-anatomy',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-149-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-149-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-150',
    slug: 'tradingview-setup-for-ict',
    title: "Setting Up TradingView for ICT: Colors, Sessions, Templates & Clean Charts",
    clusterId: 'cluster-14',
    clusterNumber: 14,
    clusterName: "Getting Started",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "Configuring your TradingView charts: New York timezone, clean muted candle themes, and session boundary boxes.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'killzone-sessions',
    diagramCaption: 'Institutional vector price action model for Setting Up TradingView for ICT: Colors, Sessions, Templates & Clean Charts.',
    tags: ["Getting Started", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-150-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'killzone-sessions',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-150-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'judas-swing',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-150-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-151',
    slug: 'choosing-forex-vs-futures',
    title: "Forex vs Index Futures: Which Market Should You Start Trading First?",
    clusterId: 'cluster-14',
    clusterNumber: 14,
    clusterName: "Getting Started",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "An honest comparison of capital requirements, broker spreads, commissions, and prop firm viability for beginners.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'prop-firm-matrix',
    diagramCaption: 'Institutional vector price action model for Forex vs Index Futures: Which Market Should You Start Trading First?.',
    tags: ["Getting Started", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-151-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'prop-firm-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-151-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-151-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-152',
    slug: 'the-first-90-days-milestone-plan',
    title: "The First 90 Days: Milestones, Chart Logging & Avoiding Overwhelm",
    clusterId: 'cluster-14',
    clusterNumber: 14,
    clusterName: "Getting Started",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: "8 min read",
    shortDefinition: "Month 1: Vocabulary & Mechanics. Month 2: Backtesting 1 Setup. Month 3: Forward Simulation. Avoiding analysis paralysis.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for The First 90 Days: Milestones, Chart Logging & Avoiding Overwhelm.',
    tags: ["Getting Started", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-152-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-152-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-152-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-153',
    slug: 'common-beginner-pitfalls-and-traps',
    title: "Top 10 Mistakes ICT Beginners Make & How to Avoid Every Single One",
    clusterId: 'cluster-14',
    clusterNumber: 14,
    clusterName: "Getting Started",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "Auditing the most common errors: trading in Asian chop, trading without DOL, moving stops to BE too early, and over-leverage.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Top 10 Mistakes ICT Beginners Make & How to Avoid Every Single One.',
    tags: ["Getting Started", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-153-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-153-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-153-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-154',
    slug: 'paper-trading-and-execution-hygiene',
    title: "Paper Trading Discipline: How to Execute Without Developing Bad Habits",
    clusterId: 'cluster-14',
    clusterNumber: 14,
    clusterName: "Getting Started",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: "6 min read",
    shortDefinition: "Treating simulation capital with the exact respect of real money to develop professional execution reflexes.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'risk-matrix',
    diagramCaption: 'Institutional vector price action model for Paper Trading Discipline: How to Execute Without Developing Bad Habits.',
    tags: ["Getting Started", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-154-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'risk-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-154-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'prop-firm-matrix',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-154-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
  {
    id: 'art-155',
    slug: 'graduating-to-live-capital',
    title: "Graduating to Real Capital: When Are You Truly Ready for Real Money?",
    clusterId: 'cluster-14',
    clusterNumber: 14,
    clusterName: "Getting Started",
    category: "Getting Started",
    difficulty: "Beginner",
    readTime: "7 min read",
    shortDefinition: "A strict 5-rule criteria you must satisfy in demo or paper trading before funding a live account or buying a challenge.",
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: 'prop-firm-matrix',
    diagramCaption: 'Institutional vector price action model for Graduating to Real Capital: When Are You Truly Ready for Real Money?.',
    tags: ["Getting Started", 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: 'fig-art-155-1',
        title: 'Figure 1: Core Setup & Vector Model',
        type: 'prop-firm-matrix',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: 'fig-art-155-2',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: 'candlestick-anatomy',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: 'fig-art-155-3',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: 'risk-matrix',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },
];

export const ARTICLES_BY_SLUG: Record<string, ArticleCatalogItem> = ARTICLES_CATALOG.reduce(
  (acc, item) => {
    acc[item.slug] = item;
    return acc;
  },
  {} as Record<string, ArticleCatalogItem>
);
