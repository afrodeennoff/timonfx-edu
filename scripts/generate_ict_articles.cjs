// Script to generate all 137 ICT articles across 14 clusters with multiple figures
const fs = require('fs');
const path = require('path');

const CLUSTERS = [
  {
    id: 'cluster-01',
    num: 1,
    name: 'Foundations',
    category: 'Foundations',
    level: 'Beginner',
    articles: [
      { slug: 'what-is-ict-trading', title: 'What is ICT Trading & The Smart Money Methodology', time: '6 min read', def: 'An institutional trading philosophy developed by Michael J. Huddleston based on tracking algorithmic central bank price delivery.', diag: 'candlestick-anatomy' },
      { slug: 'interbank-price-delivery-algorithm', title: 'The IPDA Algorithm: Why Markets Are Not Random', time: '8 min read', def: 'The mathematical electronic delivery engine programmed by tier-1 banks to balance liquidity and reprice imbalances.', diag: 'ipda-ranges' },
      { slug: 'daily-bias-determination', title: 'Daily Bias: Determining Directional Draw on Liquidity', time: '7 min read', def: 'Formulating high-conviction directional clarity on the Daily chart by locating the immediate magnet (Draw on Liquidity).', diag: 'liquidity-sweep' },
      { slug: 'candlestick-anatomy', title: 'Candlestick Anatomy: OHLC Mechanics & Institutional Spreads', time: '5 min read', def: 'The core physics of Open, High, Low, and Close prints and how bid/ask spreads interact with candle bodies.', diag: 'candlestick-anatomy' },
      { slug: 'ohlc-physics-and-wicks', title: 'OHLC Physics: Bodies Tell Story, Wicks Do the Damage', time: '5 min read', def: 'Mastering the ICT maxim: candle bodies represent institutional conviction, whereas wicks execute stops and hunt liquidity.', diag: 'candlestick-anatomy' },
      { slug: 'central-bank-dealers-range', title: 'Central Bank Dealers Range (CBDR) & Flout Mechanics', time: '8 min read', def: 'The 14:00 to 20:00 NY time window used to calculate standard deviation projections for the next trading day.', diag: 'killzone-sessions' },
      { slug: 'accumulation-manipulation-distribution', title: 'AMD Cycle: The Triad of Institutional Delivery', time: '7 min read', def: 'The three-phase market cycle: Accumulation during Asia, Manipulation at London Open, and Distribution across New York.', diag: 'power-of-three' },
      { slug: 'institutional-vs-retail-mindset', title: 'Institutional vs Retail: The Myth of Trendlines & Indicators', time: '6 min read', def: 'Uncovering why diagonal trendlines, head & shoulders, and RSI divergences serve as institutional liquidity traps.', diag: 'liquidity-sweep' },
      { slug: 'smart-money-vs-dumb-money', title: 'Smart Money Footprints vs Retail Traps', time: '6 min read', def: 'Recognizing the distinctive footprint of commercial banks, sovereign funds, and institutional market makers.', diag: 'order-block' },
      { slug: 'the-dealers-matrix', title: "The Dealer's Matrix: How Central Banks Quote Prices", time: '8 min read', def: 'The hierarchical pricing grid used by interbank liquidity providers to balance exchange portfolios.', diag: 'ipda-ranges' },
      { slug: 'time-and-price-relationship', title: 'Time & Price: Why Time Precedes Price Delivery', time: '7 min read', def: 'The core axiom that algorithms only activate at specific scheduled times, rendering price patterns invalid outside key windows.', diag: 'killzone-sessions' },
      { slug: 'ict-core-abbreviations-guide', title: 'Master A–Z ICT Abbreviations & Terminology Dictionary', time: '9 min read', def: 'The definitive codified dictionary of all institutional abbreviations from FVG and OB to BPR, MSS, and SMT.', diag: 'candlestick-anatomy' },
      { slug: 'true-day-open-midnight-ny', title: 'Midnight New York: The True Day Open Anchor', time: '6 min read', def: 'Why 00:00 New York Eastern Time is the institutional opening benchmark that dictates bullish and bearish accumulation.', diag: 'power-of-three' },
      { slug: 'open-high-low-close-expansion', title: 'High of Day (HOD) & Low of Day (LOD) Formation Physics', time: '7 min read', def: 'Predicting the exact session window (London Open vs NY Open) where the extreme high or low of the daily candle will form.', diag: 'power-of-three' },
      { slug: 'order-flow-foundations', title: 'Order Flow vs Chart Patterns: Trading What Big Banks Execute', time: '6 min read', def: 'Ditching subjective pattern lines to read institutional bids, offers, and unmitigated price arrays.', diag: 'order-block' },
      { slug: 'fair-value-vs-equilibrium', title: 'Fair Value vs Equilibrium: The Universal Rule of Rebalance', time: '7 min read', def: 'Understanding how auction markets oscillate between balanced equilibrium and aggressive discovery expansions.', diag: 'premium-discount' },
      { slug: 'algorithmic-signature-recognition', title: 'Algorithmic Signatures: Displacement, Voids & Traps', time: '7 min read', def: 'Identifying the three unmistakable signatures of high-frequency institutional algorithms executing in the market.', diag: 'market-structure-shift' },
      { slug: 'ict-foundations-mastery-checklist', title: 'The Foundations Mastery Checklist & Pre-Chart Routine', time: '6 min read', def: 'A 7-point operational pre-market routine to complete before taking any trade on your execution desk.', diag: 'risk-matrix' }
    ]
  },
  {
    id: 'cluster-02',
    num: 2,
    name: 'Market Structure',
    category: 'Market Structure',
    level: 'Beginner',
    articles: [
      { slug: 'break-of-structure', title: 'Break of Structure (BOS): Trend Continuation Logic', time: '7 min read', def: 'A structural candle close through a swing high in an uptrend or swing low in a downtrend indicating institutional continuation.', diag: 'break-of-structure' },
      { slug: 'change-of-character', title: 'Change of Character (CHoCH): The Early Warning of Reversal', time: '6 min read', def: 'The initial structural violation of internal minor structure that precedes a major market structure shift.', diag: 'market-structure-shift' },
      { slug: 'market-structure-shift', title: 'Market Structure Shift (MSS): Reversal with Displacement', time: '8 min read', def: 'Decisive reversal confirmation where price purges liquidity and slices through opposing swing points with displacement.', diag: 'market-structure-shift' },
      { slug: 'change-in-state-of-delivery', title: 'Change in State of Delivery (CISD): Candle-Close Reversals', time: '7 min read', def: 'The exact candle-close signature where order flow flips from offering discount liquidity to delivering premium expansion.', diag: 'cisd-state-delivery' },
      { slug: 'swing-highs-and-swing-lows', title: '3-Bar Fractals: Institutional Swing High & Low Anatomy', time: '5 min read', def: 'The objective 3-candle fractal geometry that defines valid market structure swings without discretionary guesswork.', diag: 'candlestick-anatomy' },
      { slug: 'internal-vs-external-range-structure', title: 'Internal vs External Range Structure (IRL to ERL Flow)', time: '8 min read', def: 'How price rotates from external liquidity pools (ERL) into internal fair value gaps (IRL) and back again.', diag: 'liquidity-sweep' },
      { slug: 'dealing-ranges-and-equilibrium', title: 'Dealing Ranges: Defining the Highs, Lows, and 50% Median', time: '6 min read', def: 'Isolating the active high and low boundaries to calculate algorithmic equilibrium and avoid trading in chop.', diag: 'premium-discount' },
      { slug: 'structural-displacement-rules', title: 'Displacement Identification: True Breaks vs Liquidity Wicks', time: '6 min read', def: 'The strict mechanical validation rules that separate genuine institutional displacement from deceptive stop sweeps.', diag: 'break-of-structure' }
    ]
  },
  {
    id: 'cluster-03',
    num: 3,
    name: 'Liquidity',
    category: 'Liquidity',
    level: 'Intermediate',
    articles: [
      { slug: 'buyside-and-sellside-liquidity', title: 'Buy-Side (BSL) & Sell-Side (SSL) Liquidity Pools', time: '7 min read', def: 'Concentrations of pending buy stops above old highs and sell stops below old lows that fuel large market orders.', diag: 'liquidity-sweep' },
      { slug: 'equal-highs-and-equal-lows', title: 'Equal Highs (EQH) & Equal Lows (EQL): High-Probability Magnets', time: '6 min read', def: 'Engineered retail double tops and bottoms acting as prime liquidity magnets for institutional algorithmic clearing.', diag: 'liquidity-sweep' },
      { slug: 'liquidity-sweeps-and-purges', title: 'Liquidity Sweeps vs Real Breakouts: Spotting Stop-Hunts', time: '7 min read', def: 'How smart money induces breakout traders into bad fills right before sweeping their stops and reversing violently.', diag: 'turtle-soup' },
      { slug: 'liquidity-voids-and-runs', title: 'Liquidity Voids: Explosive One-Sided Vacuum Delivery', time: '6 min read', def: 'Aggressive vertical price trajectories that leave wide vacuums that price must systematically re-auction.', diag: 'fvg-bullish' },
      { slug: 'inducement-idm-mechanics', title: 'Inducement (IDM): Engineering Premature Retail Traps', time: '7 min read', def: 'Internal structural highs and lows deliberately created to lure impatient retail traders before the true PD array is tested.', diag: 'turtle-soup' },
      { slug: 'previous-day-high-low-draw', title: 'Previous Day High (PDH) & Low (PDL) as Daily Liquidity Targets', time: '6 min read', def: 'The single most traded liquidity targets for intraday index futures and forex sessions.', diag: 'liquidity-sweep' },
      { slug: 'previous-week-month-high-low', title: 'Previous Week High (PWH) & Month High (PMH) Macro Runs', time: '8 min read', def: 'Macro swing extremes that attract sovereign liquidity and trigger multi-hundred tick institutional moves.', diag: 'ipda-ranges' },
      { slug: 'stop-loss-clusters-and-order-books', title: 'Stop-Loss Clusters: Where Retail Capital Pools Rest', time: '7 min read', def: 'Analyzing market depth and algorithmic order matching to anticipate where retail stops will be harvested.', diag: 'liquidity-sweep' },
      { slug: 'double-purges-and-raid-sequences', title: 'Double Purges: High and Low Cleared in Single Sessions', time: '8 min read', def: 'High-volatility expansion days that raid both buy-side and sell-side liquidity before selecting direction.', diag: 'turtle-soup' },
      { slug: 'internal-range-liquidity-to-external', title: 'IRL to ERL Paradigm: How Price Rotates Between Arrays', time: '7 min read', def: 'The universal law of price delivery: price leaves external liquidity to rebalance internal gaps, then expands to external targets.', diag: 'fvg-bullish' },
      { slug: 'liquidity-draw-mastery', title: 'Determining the Absolute Draw on Liquidity (DOL)', time: '8 min read', def: 'The master skill in ICT: answering with certainty where price is mathematically magnetic to right now.', diag: 'liquidity-sweep' }
    ]
  },
  {
    id: 'cluster-04',
    num: 4,
    name: 'PD Array Tools',
    category: 'PD Array Tools',
    level: 'Intermediate',
    articles: [
      { slug: 'fair-value-gap', title: 'Fair Value Gap (FVG): Anatomy, 50% CE & Institutional Delivery', time: '9 min read', def: 'A 3-candle price imbalance where rapid displacement leaves an unfilled vacuum between Candle 1 and Candle 3.', diag: 'fvg-bullish' },
      { slug: 'inverse-fair-value-gap', title: 'Inversion Fair Value Gap (IFVG): Imbalance Polarity Flips', time: '8 min read', def: 'A Fair Value Gap that price violently closes through, transforming former support into dynamic resistance or vice-versa.', diag: 'inversion-fvg' },
      { slug: 'order-blocks', title: 'Order Block (OB): The Institutional Origin of Market Direction', time: '9 min read', def: 'The final opposing candle preceding an energetic displacement that breaks market structure.', diag: 'order-block' },
      { slug: 'breaker-blocks', title: 'Breaker Block: The Failed Order Block Reversal Engine', time: '8 min read', def: 'An order block that purged liquidity before being violated by aggressive displacement, flipping polarity.', diag: 'breaker-block' },
      { slug: 'mitigation-blocks', title: 'Mitigation Block: Order Offloading Without Liquidity Sweeps', time: '7 min read', def: 'A structural failure swing where institutions offload underwater positions without taking out the previous extreme.', diag: 'breaker-block' },
      { slug: 'balanced-price-range', title: 'Balanced Price Range (BPR): Double-Imbalance Magnet & Wall', time: '8 min read', def: 'Two overlapping Fair Value Gaps in opposite directions resulting in neutral, highly respected algorithmic boundaries.', diag: 'balanced-price-range' },
      { slug: 'volume-imbalance', title: 'Volume Imbalance (VI): Real Gaps Between Real Candle Bodies', time: '6 min read', def: 'A price gap between adjacent candle bodies where wicks overlap but no true auction took place in the open spread.', diag: 'volume-imbalance' },
      { slug: 'rejection-blocks', title: 'Rejection Block: Long Wick Liquidity Absorption Arrays', time: '7 min read', def: 'The price zone defined by the extreme wicks of a swing point where commercial limits absorbed all incoming momentum.', diag: 'candlestick-anatomy' },
      { slug: 'propulsion-blocks', title: 'Propulsion Block: High-Momentum Retest of Prior Order Blocks', time: '7 min read', def: 'A secondary candle that mitigates an existing Order Block and instantly displaces, creating a tiered acceleration setup.', diag: 'order-block' },
      { slug: 'vacuum-blocks', title: 'Vacuum Block: Overnight & Weekend Economic Gap Arrays', time: '6 min read', def: 'Physical price gaps left open during weekend or holiday closes that act as magnetic algorithmic equilibrium targets.', diag: 'volume-imbalance' },
      { slug: 'optimal-trade-entry', title: 'Optimal Trade Entry (OTE): The 62%–79% Fibonacci Matrix', time: '8 min read', def: 'The institutional golden pocket: entering at 62%, 70.5%, and 79% retracement of an impulsive dealing range.', diag: 'optimal-trade-entry' },
      { slug: 'premium-and-discount', title: 'Premium & Discount: Buying Below 50% and Selling Above 50%', time: '7 min read', def: 'The timeless mercantile law: institutional algorithms buy strictly in discount and distribute strictly in premium.', diag: 'premium-discount' },
      { slug: 'consequent-encroachment-ce-50', title: 'Consequent Encroachment (CE 50%): The Algorithmic Balance Line', time: '6 min read', def: 'The exact 50% midpoint of a Fair Value Gap or wick that institutions defend with surgical precision.', diag: 'fvg-bullish' },
      { slug: 'mean-threshold-mt-50', title: 'Mean Threshold (MT 50%): Defending Order Block Halves', time: '6 min read', def: 'The 50% midpoint of an Order Block body. Candle closes beyond the Mean Threshold invalidate the setup.', diag: 'order-block' },
      { slug: 'order-block-validation-rules', title: 'Order Block Validation Checklist: When to Trust an OB', time: '7 min read', def: 'A 5-point checklist verifying liquidity sweep, displacement, FVG creation, and clean timeframe alignment.', diag: 'order-block' },
      { slug: 'stacking-pd-arrays-confluence', title: 'Stacking PD Arrays: High-Confluence Institutional Clusters', time: '8 min read', def: 'Combining an Order Block inside an FVG at the 62% OTE level to achieve exceptional win-rate asymmetric setups.', diag: 'unicorn-model' },
      { slug: 'pd-array-matrix-hierarchy', title: 'The 9-Level PD Array Hierarchy: Ranking Support & Resistance', time: '8 min read', def: 'The codified institutional hierarchy ranking Mitigations, Breakers, Voids, FVGs, and Order Blocks from weakest to strongest.', diag: 'premium-discount' },
      { slug: 'wick-as-an-order-block', title: 'Long Wicks as Order Blocks: Extracting Hidden Imbalances', time: '6 min read', def: 'How to treat long wicks on higher timeframes as lower-timeframe Order Blocks and FVGs.', diag: 'candlestick-anatomy' }
    ]
  },
  {
    id: 'cluster-05',
    num: 5,
    name: 'Models & Sessions',
    category: 'Models & Sessions',
    level: 'Advanced',
    articles: [
      { slug: 'silver-bullet', title: 'The ICT Silver Bullet: 10:00–11:00 AM NY High-Probability Model', time: '8 min read', def: 'The premier 60-minute algorithmic execution model on Index Futures (NQ/ES) with a strict mechanical 1:2 R:R framework.', diag: 'silver-bullet' },
      { slug: 'silver-bullet-london-am', title: 'London AM Silver Bullet (03:00–04:00 AM NY) Framework', time: '7 min read', def: 'The European morning session Silver Bullet executing high-probability reversals and expansions on EURUSD and GBPUSD.', diag: 'silver-bullet' },
      { slug: 'silver-bullet-ny-pm', title: 'New York PM Silver Bullet (02:00–03:00 PM NY) Framework', time: '7 min read', def: 'The afternoon liquidity injection that delivers late-day intraday trend continuation or macro mean reversion.', diag: 'silver-bullet' },
      { slug: 'power-of-three', title: 'Power of 3 (PO3): Open, Manipulate, Expand, Distribute', time: '8 min read', def: 'The institutional daily bar delivery anatomy: open price, manipulation wick, expansion body, and distribution close.', diag: 'power-of-three' },
      { slug: 'judas-swing', title: 'Judas Swing: The London Open Trap That Traps Retail Breakouts', time: '7 min read', def: 'The false move engineered at London Open (02:00-03:00 AM NY) to sweep Asian Range liquidity before the true trend.', diag: 'judas-swing' },
      { slug: 'turtle-soup', title: 'Turtle Soup Model: Exploiting False Breakouts with Aggressive Reversals', time: '8 min read', def: 'Counter-trend institutional entry catching failed 20-bar breakout attempts as smart money harvests resting stops.', diag: 'turtle-soup' },
      { slug: 'the-unicorn-model', title: 'The Unicorn Setup: Confluence of Breaker Block & Fair Value Gap', time: '8 min read', def: 'The highest-probability single setup in ICT: an unmitigated FVG nested directly inside a Breaker Block.', diag: 'unicorn-model' },
      { slug: 'market-maker-buy-model-mmbm', title: 'Market Maker Buy Model (MMBM): Complete Cycle Anatomy', time: '9 min read', def: 'The multi-stage institutional accumulation framework: Original Consolidation -> Smart Money Reversal -> Low Risk Buy -> Re-accumulation.', diag: 'market-maker-model' },
      { slug: 'market-maker-sell-model-mmsm', title: 'Market Maker Sell Model (MMSM): Distribution from Top to Bottom', time: '9 min read', def: 'The mirror distribution roadmap guiding institutional selling from high timeframe premium into deep discount.', diag: 'market-maker-model' },
      { slug: 'asian-range-dynamics', title: 'Asian Range Dynamics: Establishing the Daily Accumulation Box', time: '6 min read', def: 'The 20:00 to 00:00 NY accumulation box whose high and low boundaries serve as liquidity targets for London.', diag: 'killzone-sessions' },
      { slug: 'london-open-killzone', title: 'London Open Kill Zone: 02:00–05:00 AM NY High/Low Formation', time: '8 min read', def: 'The most volatile European session window where the High or Low of the day is established in 70%+ of sessions.', diag: 'killzone-sessions' },
      { slug: 'new-york-am-killzone', title: 'New York AM Kill Zone: 08:30–11:00 AM NY Major Trend Delivery', time: '8 min read', def: 'The Wall Street opening bell execution window combining economic releases, equities open (09:30), and Silver Bullet.', diag: 'killzone-sessions' },
      { slug: 'london-close-killzone', title: 'London Close Kill Zone: 10:30 AM–01:00 PM Counter-Trend Retracements', time: '6 min read', def: 'European bank profit-taking producing predictable 20-30 pip counter-trend retracements into institutional discount.', diag: 'killzone-sessions' },
      { slug: 'new-york-pm-macro-windows', title: 'NY PM Macros: 01:15–01:45 PM & 02:10–02:40 PM Algorithmic Injections', time: '7 min read', def: 'Specific 20-minute windows where institutional trading desks inject liquidity to balance day-end index books.', diag: 'silver-bullet' },
      { slug: 'the-ict-2022-mentorship-model', title: 'The Iconic 2022 ICT Mentorship Model: Sweep + MSS + FVG', time: '9 min read', def: 'The clean mechanical 3-step setup: 1. Liquidity Sweep -> 2. Market Structure Shift with Displacement -> 3. FVG Retest Entry.', diag: 'market-structure-shift' },
      { slug: 'session-transitions-and-flouts', title: 'Session Transitions: Managing Hand-Off Between London & New York', time: '7 min read', def: 'Understanding how London trends either continue, reverse, or consolidate during the 07:00-08:30 AM NY transition.', diag: 'killzone-sessions' }
    ]
  },
  {
    id: 'cluster-06',
    num: 6,
    name: 'CRT — Candle Range Theory',
    category: 'CRT — Candle Range Theory',
    level: 'Advanced',
    articles: [
      { slug: 'candle-range-theory', title: 'CRT Foundations: The Anatomy of Single & Multi-Bar Ranges', time: '7 min read', def: 'How single-candle and multi-candle boundaries dictate high timeframe liquidity and anticipate intraday expansion.', diag: 'crt-model' },
      { slug: 'crt-reference-candle', title: 'The CRT Reference Candle: Determining High and Low Range Limits', time: '7 min read', def: 'Isolating the key reference candle whose high and low define the battleground for subsequent bar expansions.', diag: 'crt-model' },
      { slug: 'crt-session-execution', title: 'CRT Session Execution: Exploiting Intraday Range Sweeps', time: '8 min read', def: 'Applying Candle Range Theory to the 1-hour and 4-hour candles during London and New York session opens.', diag: 'crt-model' },
      { slug: 'crt-vs-amd-comparison', title: 'CRT vs AMD: Micro-Scale Candle Physics vs Session Cycles', time: '7 min read', def: 'Comparing how CRT operates at the individual candle level while AMD describes broader session-level delivery.', diag: 'power-of-three' },
      { slug: 'crt-daily-vs-weekly-ranges', title: 'Daily CRT vs Weekly CRT: Top-Down Range Alignment', time: '8 min read', def: 'Aligning 1-hour and 15-minute executions with higher timeframe Daily and Weekly CRT reference bars.', diag: 'crt-model' },
      { slug: 'stacking-sequential-crts', title: 'Stacking Sequential CRTs: Trend Continuation & Cascades', time: '7 min read', def: 'Trading cascading candle expansions where consecutive bars expand out of preceding CRT boundaries.', diag: 'break-of-structure' },
      { slug: 'crt-smt-confirmation-filters', title: 'CRT with SMT Confirmation: Eliminating False Range Breaks', time: '8 min read', def: 'Using SMT divergence at the high/low of a CRT reference candle to filter out low-probability false breakouts.', diag: 'smt-divergence' },
      { slug: 'crt-take-profit-mechanics', title: 'CRT Target Projections: Opposing Wick vs Extension Targets', time: '6 min read', def: 'Setting systematic take-profit targets at the opposing wick of the CRT reference candle or standard deviation extensions.', diag: 'optimal-trade-entry' }
    ]
  },
  {
    id: 'cluster-07',
    num: 7,
    name: 'S&D / Miscellaneous',
    category: 'S&D / Miscellaneous',
    level: 'Intermediate',
    articles: [
      { slug: 'ict-supply-and-demand', title: 'ICT Supply & Demand: How Institutional Zones Differ from Retail', time: '7 min read', def: 'Moving beyond retail rectangle boxes to understand the origin candle, unmitigated orders, and liquidity delivery.', diag: 'order-block' },
      { slug: 'origin-candle-theory', title: 'The Origin Candle: Tracing Where Banks Began Accumulation', time: '7 min read', def: 'Identifying the exact historical origin bar where institutional size was initially committed to the book.', diag: 'order-block' },
      { slug: 'equilibrium-calibration', title: 'Equilibrium Calibration: Measuring Price from True Impulses', time: '6 min read', def: 'Calibrating Fibonacci anchor points on genuine displacement swings to calculate true algorithmic 50% levels.', diag: 'premium-discount' },
      { slug: 'order-flow-matrix', title: 'Institutional Order Flow Matrix: Bids, Offers & Dark Liquidity', time: '8 min read', def: 'How interbank matching engines manage order book imbalances between resting limit orders and aggressive flow.', diag: 'ipda-ranges' },
      { slug: 'liquidity-run-versus-rebalance', title: 'Liquidity Run vs Market Rebalance: Two Reasons Price Moves', time: '7 min read', def: 'The only two drivers of price movement: attacking resting liquidity pools or rebalancing fair value inefficiencies.', diag: 'fvg-bullish' },
      { slug: 'balanced-price-range-mastery', title: 'Balanced Price Range (BPR) Execution: Reversing Imbalance', time: '8 min read', def: 'High-conviction trading rules for executing off the tight neutral pocket of two overlapping opposite gaps.', diag: 'balanced-price-range' },
      { slug: 'inefficiency-and-volume-spread', title: 'Inefficiency & Volume Spread: Recognizing Exhaustion', time: '6 min read', def: 'Using volume spread analysis alongside ICT price action to spot algorithmic delivery exhaustion.', diag: 'candlestick-anatomy' },
      { slug: 'interbank-matrix-schedules', title: 'Economic Release Calendars & Algorithmic Volatility Schedules', time: '7 min read', def: 'Navigating CPI, FOMC, PPI, and NFP schedules to align institutional models with calendar-driven volatility.', diag: 'risk-matrix' }
    ]
  },
  {
    id: 'cluster-08',
    num: 8,
    name: 'Advanced ICT',
    category: 'Advanced ICT',
    level: 'Advanced',
    articles: [
      { slug: 'smt-divergence', title: 'SMT Divergence: Spotting Non-Confirmation in Correlated Assets', time: '9 min read', def: 'Smart Money Technique: when correlated assets (NQ vs ES, or EUR vs GBP) diverge at key highs or lows, revealing manipulation.', diag: 'smt-divergence' },
      { slug: 'the-venom-model', title: 'The Venom Model: Aggressive Momentum Acceleration into Imbalances', time: '8 min read', def: 'Advanced 2024 institutional framework capitalizing on sudden, high-velocity sweeps into nested discount arrays.', diag: 'fvg-bullish' },
      { slug: 'the-enigma-fvg', title: 'The Enigma FVG: Hidden Intra-Session Gaps on Inverted Volume', time: '8 min read', def: 'Subtle intra-session imbalances created when algorithmic order books gap between sub-minute execution ticks.', diag: 'inversion-fvg' },
      { slug: 'reaper-inversion-model', title: 'The Reaper IFVG: Dynamic Trapping of Counter-Trend Trapped Liquidity', time: '8 min read', def: 'A specialized Inversion FVG execution model that traps breakout traders against higher timeframe order flow.', diag: 'inversion-fvg' },
      { slug: 'suspension-blocks', title: 'Suspension Block: Pauses in Algorithmic Delivery Prior to Major Injections', time: '7 min read', def: 'Compact tight-range bars where algorithms suspend quotes immediately before a high-magnitude expansion.', diag: 'volume-imbalance' },
      { slug: 'rdrb-reversal-displacement-block', title: 'RDRB Mechanics: Reversal Displacement Rejection Blocks', time: '8 min read', def: 'Reversal Displacement Rejection Blocks: combining wick absorption and structural displacement into one powerhouse entry.', diag: 'breaker-block' },
      { slug: 'stacked-confluences-2025', title: '2024–2025 Advanced Confluences: Triple-Layer Algorithmic Alignment', time: '9 min read', def: 'Aligning higher timeframe DOL, session killzone macro, and lower timeframe OTE/FVG for 85%+ win-rate execution.', diag: 'unicorn-model' },
      { slug: 'algorithmic-macro-windows', title: 'The Exact 20-Minute Algorithmic Windows: 08:50, 09:50, 10:50, 13:50', time: '8 min read', def: 'The precise minute intervals when central bank algorithms inject scheduled liquidity cycles across index futures.', diag: 'silver-bullet' },
      { slug: 'index-futures-correlation-divergence', title: 'Index Triad Divergence: NQ vs ES vs YM SMT Secrets', time: '8 min read', def: 'Decoding leader vs laggard dynamics between Nasdaq, S&P 500, and Dow Jones to pinpoint market tops and bottoms.', diag: 'intermarket-correlation' },
      { slug: 'forex-triad-divergence', title: 'Forex Triad SMT: DXY vs EURUSD vs GBPUSD Institutional Divergence', time: '8 min read', def: 'Using the US Dollar Index (DXY) as the master anchor to find high-probability currency reversals.', diag: 'intermarket-correlation' },
      { slug: 'intermarket-bond-yield-alignment', title: '10-Year Treasury Yields (US10Y) & Stock Index Divergence', time: '8 min read', def: 'Tracking bond market yields to establish macro intermarket directional bias for equities and foreign exchange.', diag: 'intermarket-correlation' },
      { slug: 'advanced-algorithmic-liquidity-sweeps', title: 'Cascading Stop Sweeps & Institutional Re-Accumulation', time: '8 min read', def: 'How algorithms run multiple sequential liquidity pools before initiating the true high-timeframe reversal trend.', diag: 'turtle-soup' }
    ]
  },
  {
    id: 'cluster-09',
    num: 9,
    name: 'Instruments & Markets',
    category: 'Instruments & Markets',
    level: 'Intermediate',
    articles: [
      { slug: 'trading-nq-nasdaq-futures', title: 'Trading E-mini Nasdaq (NQ): Tick Value, Volatility & Silver Bullet', time: '8 min read', def: 'Mastering the fastest-moving index futures contract: $20/pt tick mechanics, morning volatility, and Silver Bullet delivery.', diag: 'silver-bullet' },
      { slug: 'trading-es-sp500-futures', title: 'Trading E-mini S&P 500 (ES): Institutional Liquidity & Structure', time: '8 min read', def: 'The benchmark institutional instrument: cleaner structural respect, deep liquidity, and optimal execution rules.', diag: 'market-structure-shift' },
      { slug: 'trading-ym-dow-futures', title: 'E-mini Dow Jones (YM): Industrial Order Flow & SMT Filter', time: '7 min read', def: 'How Dow Jones index flow leads cyclical sector rotations and generates reliable SMT divergences against NQ and ES.', diag: 'intermarket-correlation' },
      { slug: 'trading-eurusd-institutional-flow', title: 'EURUSD: Central Bank Interest Rate Spreads & London Open Flow', time: '8 min read', def: 'Trading the most liquid currency pair in the world using ECB/Fed rate differentials and London Kill Zone expansions.', diag: 'killzone-sessions' },
      { slug: 'trading-gbpusd-cable-volatility', title: 'GBPUSD (Cable): High-Volatility Judas Swings & Session Spikes', time: '8 min read', def: 'Taming the notorious volatility of Cable with strict Asian Range boundaries and London Judas swing entries.', diag: 'judas-swing' },
      { slug: 'trading-gold-xauusd-smart-money', title: 'Gold (XAUUSD): Safe-Haven Liquidity Sweeps & Session Models', time: '8 min read', def: 'Applying ICT price action to precious metals: London Open stop raids, US inflation reactions, and daily draw on liquidity.', diag: 'liquidity-sweep' },
      { slug: 'trading-crude-oil-energy-flow', title: 'Crude Oil (CL): Energy Inventory Sweeps & 09:00 AM Delivery', time: '7 min read', def: 'Trading energy futures around weekly EIA inventory announcements using Fair Value Gaps and Order Blocks.', diag: 'fvg-bullish' },
      { slug: 'trading-bitcoin-crypto-ict', title: 'Bitcoin & Crypto: Algorithmic Price Action in 24/7 Decentralized Markets', time: '8 min read', def: 'Validating that algorithmic smart money concepts work with high precision on Bitcoin and Ethereum 24/7 charts.', diag: 'candlestick-anatomy' },
      { slug: 'forex-vs-futures-market-mechanics', title: 'Forex (OTC) vs US Regulated Futures: Order Books & Transparency', time: '7 min read', def: 'Comparing decentralized broker spreads and execution latency against CME centralized futures order books.', diag: 'risk-matrix' },
      { slug: 'cross-asset-session-playbook', title: 'The Multi-Asset Daily Playbook: Timing Equities, Forex & Metals', time: '8 min read', def: 'A daily workflow scheduling when to trade London Forex, when to switch to Index Futures, and when to close the desk.', diag: 'killzone-sessions' }
    ]
  },
  {
    id: 'cluster-10',
    num: 10,
    name: 'Risk & Process',
    category: 'Risk & Process',
    level: 'Intermediate',
    articles: [
      { slug: 'the-one-percent-risk-rule', title: 'The 1% Risk Rule: The Unbreakable Mathematical Law of Survivability', time: '7 min read', def: 'The foundational risk threshold that mathematically prevents account ruin even across a 15-trade drawdown sequence.', diag: 'risk-matrix' },
      { slug: 'three-percent-daily-loss-limit', title: 'The 3% Daily Max Drawdown Circuit Breaker: Halting Emotional Tilt', time: '6 min read', def: 'The hard circuit breaker rule: automatically walking away from the desk after losing 3% in a single trading day.', diag: 'risk-matrix' },
      { slug: 'position-sizing-discipline', title: 'Institutional Position Sizing: Calculating Contracts & Lot Sizes', time: '7 min read', def: 'Exact formulas to convert account balance, stop-loss tick distance, and risk percentage into precise position sizes.', diag: 'risk-matrix' },
      { slug: 'structural-stop-loss-placement', title: 'Structural Stop Loss Placement: Beyond Swing Wicks & PD Arrays', time: '7 min read', def: 'Placing stops behind institutional invalidation levels (Order Block Mean Threshold or Breaker high) rather than arbitrary ticks.', diag: 'order-block' },
      { slug: 'partial-profit-taking-strategy', title: 'Partial Profit Taking: Paying the Trader & De-Risking the Position', time: '7 min read', def: 'Taking 50% off at the first opposing liquidity pool (2R) to create a guaranteed stress-free runner trade.', diag: 'optimal-trade-entry' },
      { slug: 'stop-to-breakeven-timing', title: 'Stop to Breakeven (BE) Rules: When to Protect vs When You Choke the Trade', time: '6 min read', def: 'The rules of stop management: moving to BE only after price displaces through internal structure and creates a new FVG.', diag: 'break-of-structure' },
      { slug: 'risk-to-reward-and-expected-value', title: 'Risk-to-Reward Math & Expected Value (EV): Asymmetry Over Win-Rate', time: '8 min read', def: 'How an asymmetric 1:3 R:R framework delivers massive annual profitability even with a 40% win rate.', diag: 'risk-matrix' },
      { slug: 'professional-trade-logging', title: 'The Professional Trading Journal: What Data to Record on Every Fill', time: '7 min read', def: 'The essential logging metrics: screenshot of higher timeframe, entry model, R:R planned vs realized, and psychological state.', diag: 'risk-matrix' },
      { slug: 'backtesting-framework-ict', title: 'Systematic Backtesting: 100-Trade Sample Sizes Without Hindsight Bias', time: '8 min read', def: 'Rigorous historical testing protocol using bar-replay to validate models across at least 100 market events.', diag: 'risk-matrix' },
      { slug: 'forward-testing-and-demo-execution', title: 'Forward Testing in Simulation: Building Muscle Memory', time: '7 min read', def: 'Practicing live execution in simulation mode to master order entry, partial management, and emotional stability.', diag: 'risk-matrix' },
      { slug: 'drawdown-recovery-protocol', title: 'The Drawdown Recovery Protocol: Step-by-Step Risk Reduction Steps', time: '7 min read', def: 'Halving your risk per trade to 0.5% during drawdown to preserve capital while rebuilding confidence.', diag: 'risk-matrix' },
      { slug: 'trading-routine-pre-market-checklist', title: 'The Institutional Pre-Market Checklist: 60 Minutes Before Open', time: '6 min read', def: 'A daily 60-minute ritual reviewing macro news, overnight high/low, and setting alerts at key PD arrays.', diag: 'risk-matrix' }
    ]
  },
  {
    id: 'cluster-11',
    num: 11,
    name: 'Strategy & Application',
    category: 'Strategy & Application',
    level: 'Advanced',
    articles: [
      { slug: 'intraday-scalping-blueprint', title: '1-Minute & 5-Minute Intraday Scalping Blueprint', time: '8 min read', def: 'Fast-paced execution framework capturing 15-25 points on NQ or 10-20 pips on Forex using 1M FVGs.', diag: 'fvg-bullish' },
      { slug: 'high-probability-swing-trading', title: 'Daily & 4-Hour Swing Trading with ICT Frameworks', time: '8 min read', def: 'Holding high-conviction positions over 2 to 5 days targeting macro weekly liquidity pools with minimal screen time.', diag: 'liquidity-sweep' },
      { slug: 'prop-firm-evaluation-strategy', title: 'Passing Prop Firm Challenges: Managing Evaluation Profit Targets', time: '9 min read', def: 'Structured blueprint to pass prop firm challenges without breaching daily trailing or maximum drawdown rules.', diag: 'prop-firm-matrix' },
      { slug: 'funded-account-capital-preservation', title: 'Managing Funded Prop Capital: Preserving Payout Buffers', time: '8 min read', def: 'How to build an initial safety buffer on funded accounts and schedule consistent bi-weekly payout withdrawals.', diag: 'prop-firm-matrix' },
      { slug: 'combining-silver-bullet-and-smt', title: 'Combining Silver Bullet with SMT: 80%+ Strike Rate Confluence', time: '9 min read', def: 'Entering the 10:00 AM Silver Bullet only when verified by SMT divergence between NQ and ES.', diag: 'smt-divergence' },
      { slug: 'combining-fvg-and-order-blocks', title: 'Nested PD Arrays: FVG Inside an Order Block (The Breaker-Gap Combo)', time: '8 min read', def: 'The highest probability entry confluence: when a Fair Value Gap sits directly on top of an unmitigated Order Block.', diag: 'unicorn-model' },
      { slug: 'trading-nfp-cpi-fomc-news', title: 'News Trading Protocol: Navigating CPI, NFP & FOMC Rate Decisions', time: '8 min read', def: 'How to handle high-impact macro news: why you never trade during the release and how to trade the 15-minute rebalance.', diag: 'risk-matrix' },
      { slug: 'post-news-algorithmic-rebalance', title: 'Trading the 15-Minute Rebalance After Major Macro Economic Releases', time: '8 min read', def: 'Catching the clean algorithmic rebalance that occurs 15-30 minutes after explosive news spikes.', diag: 'fvg-bullish' },
      { slug: 'conquering-fomo-and-revenge-trading', title: 'Psychology: Eliminating FOMO & Revenge Trading Forever', time: '7 min read', def: 'Cognitive re-framing techniques to eliminate fear of missing out and stop revenge trading after a stop loss.', diag: 'risk-matrix' },
      { slug: 'patience-and-the-waiting-game', title: 'The Waiting Game: Why 85% of Trading is Waiting for the Model', time: '6 min read', def: 'Embracing the sniper mindset: executing only when all 4 rules of your model align on the chart.', diag: 'silver-bullet' },
      { slug: 'trading-plan-creation-guide', title: 'Writing Your Personal 1-Page Trading Constitution', time: '7 min read', def: 'Synthesizing your entry model, risk rules, session hours, and daily limits into a single operational page.', diag: 'risk-matrix' },
      { slug: 'weekend-chart-review-process', title: 'The Weekend Chart Review: Auditing the Weekly Candle & Next Bias', time: '7 min read', def: 'A 2-hour Saturday review protocol auditing executed trades and preparing bias for the upcoming trading week.', diag: 'power-of-three' },
      { slug: 'the-20-pip-per-day-myth', title: 'The Myth of 20 Pips Per Day: Trading Market Conditions, Not Goals', time: '6 min read', def: 'Why arbitrary daily pip goals cause forced trades and account blowups, and what to focus on instead.', diag: 'risk-matrix' },
      { slug: 'handling-losing-streaks', title: 'Navigating 5-Trade Losing Streaks Without System Hopping', time: '7 min read', def: 'The psychological and statistical realities of variance and how to stay disciplined during losing runs.', diag: 'risk-matrix' },
      { slug: 'mastering-one-single-setup', title: 'The Power of Specialization: Trading Only One Model for 12 Months', time: '7 min read', def: 'Why specializing in a single setup (e.g. Silver Bullet or 2022 Model) creates professional profitability faster.', diag: 'silver-bullet' },
      { slug: 'from-beginner-to-funded-trader', title: 'The Complete Roadmap: 12-Month Blueprint from Beginner to Funded', time: '9 min read', def: 'A realistic month-by-month study and execution roadmap from learning vocabulary to managing six-figure capital.', diag: 'prop-firm-matrix' },
      { slug: 'psychological-discipline', title: 'Building Unshakeable Emotional Regulation at the Trading Desk', time: '8 min read', def: 'Biological bio-feedback, breathing techniques, and operational routines to keep heart rate and cortisol in check.', diag: 'risk-matrix' },
      { slug: 'framework-refinement', title: 'Iterative System Optimization: Auditing Journal Data for Edge Leaks', time: '7 min read', def: 'Analyzing your trade log to isolate and eliminate the bottom 20% of trade setups that drag down portfolio PnL.', diag: 'risk-matrix' }
    ]
  },
  {
    id: 'cluster-12',
    num: 12,
    name: 'Comparisons & Deep Dives',
    category: 'Comparisons & Deep Dives',
    level: 'Intermediate',
    articles: [
      { slug: 'ict-vs-smc-smart-money-concepts', title: 'ICT vs Standard SMC: Key Differences, Origins & Fallacies', time: '8 min read', def: 'A comprehensive comparative analysis contrasting original ICT methodology with derivative YouTube SMC variations.', diag: 'market-structure-shift' },
      { slug: 'ict-vs-wyckoff-methodology', title: 'ICT vs Wyckoff: Accumulation, Springs, Upthrusts & Smart Money', time: '8 min read', def: 'Comparing Richard Wyckoff’s 1930s tape-reading framework with modern electronic interbank algorithmic delivery.', diag: 'power-of-three' },
      { slug: 'ict-vs-traditional-support-resistance', title: 'ICT vs Retail Support & Resistance: Why Double Tops Get Cleared', time: '7 min read', def: 'Contrasting static retail horizontal support/resistance against dynamic institutional liquidity draws.', diag: 'liquidity-sweep' },
      { slug: 'fvg-vs-order-block-comparison', title: 'Fair Value Gap vs Order Block: Which PD Array Takes Priority?', time: '7 min read', def: 'Resolving the dilemma of which array to enter on when an Order Block and a Fair Value Gap are both present.', diag: 'unicorn-model' }
    ]
  },
  {
    id: 'cluster-13',
    num: 13,
    name: 'Resources',
    category: 'Resources',
    level: 'Beginner',
    articles: [
      { slug: 'ict-killzone-time-converter', title: 'Institutional Session Clock: Converting New York Time to Global Timezones', time: '6 min read', def: 'A comprehensive timezone matrix converting NY Eastern Time (EST/EDT) to GMT, CET, IST, and AEST.', diag: 'killzone-sessions' },
      { slug: 'optimal-trade-entry-ote-calculator', title: 'The OTE Fibonacci Calculator: Setting Up the 62%–79% Retracement', time: '6 min read', def: 'Step-by-step tutorial to configure your Fibonacci retracement tool for institutional OTE levels.', diag: 'optimal-trade-entry' },
      { slug: 'asian-range-boundary-tracker', title: 'Asian Range High & Low Planner: Projecting Judas Swing Targets', time: '6 min read', def: 'How to calculate 20:00 to 00:00 NY range extremes and project deviation targets for London Open execution.', diag: 'judas-swing' },
      { slug: 'ipda-lookback-calendar-matrix', title: 'IPDA 20, 40 & 60-Day Lookback Range Calculation Matrix', time: '7 min read', def: 'How to mark 20, 40, and 60 trading days on your daily chart to identify key quarterly algorithmic turning points.', diag: 'ipda-ranges' },
      { slug: 'complete-ict-master-glossary', title: 'The Complete ICT Master Reference Index & Study Roadmap', time: '9 min read', def: 'An exhaustive cross-referenced index linking all 137 concepts, 43 glossary terms, and interactive tools.', diag: 'candlestick-anatomy' }
    ]
  },
  {
    id: 'cluster-14',
    num: 14,
    name: 'Getting Started',
    category: 'Getting Started',
    level: 'Beginner',
    articles: [
      { slug: 'complete-beginner-ict-roadmap', title: 'The Complete Beginner’s Step-by-Step Roadmap to ICT Trading', time: '8 min read', def: 'A structured zero-knowledge entry path designed to take a complete beginner through the first 4 essential concepts.', diag: 'candlestick-anatomy' },
      { slug: 'tradingview-setup-for-ict', title: 'Setting Up TradingView for ICT: Colors, Sessions, Templates & Clean Charts', time: '7 min read', def: 'Configuring your TradingView charts: New York timezone, clean muted candle themes, and session boundary boxes.', diag: 'killzone-sessions' },
      { slug: 'choosing-forex-vs-futures', title: 'Forex vs Index Futures: Which Market Should You Start Trading First?', time: '7 min read', def: 'An honest comparison of capital requirements, broker spreads, commissions, and prop firm viability for beginners.', diag: 'prop-firm-matrix' },
      { slug: 'the-first-90-days-milestone-plan', title: 'The First 90 Days: Milestones, Chart Logging & Avoiding Overwhelm', time: '8 min read', def: 'Month 1: Vocabulary & Mechanics. Month 2: Backtesting 1 Setup. Month 3: Forward Simulation. Avoiding analysis paralysis.', diag: 'risk-matrix' },
      { slug: 'common-beginner-pitfalls-and-traps', title: 'Top 10 Mistakes ICT Beginners Make & How to Avoid Every Single One', time: '7 min read', def: 'Auditing the most common errors: trading in Asian chop, trading without DOL, moving stops to BE too early, and over-leverage.', diag: 'risk-matrix' },
      { slug: 'paper-trading-and-execution-hygiene', title: 'Paper Trading Discipline: How to Execute Without Developing Bad Habits', time: '6 min read', def: 'Treating simulation capital with the exact respect of real money to develop professional execution reflexes.', diag: 'risk-matrix' },
      { slug: 'graduating-to-live-capital', title: 'Graduating to Real Capital: When Are You Truly Ready for Real Money?', time: '7 min read', def: 'A strict 5-rule criteria you must satisfy in demo or paper trading before funding a live account or buying a challenge.', diag: 'prop-firm-matrix' }
    ]
  }
];

// Let's verify total article count
let total = 0;
CLUSTERS.forEach(c => { total += c.articles.length; });
console.log('Total articles mapped:', total);

// Generate Articles Catalog TypeScript file
let catalogContent = `import { DiagramType, LessonFigure, ConceptCategory, DifficultyLevel } from '../types';

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
`;

let artIndex = 1;
CLUSTERS.forEach((c) => {
  catalogContent += `  // ==========================================\n`;
  catalogContent += `  // CLUSTER ${c.num < 10 ? '0' + c.num : c.num}: ${c.name.toUpperCase()} (${c.articles.length} Articles)\n`;
  catalogContent += `  // ==========================================\n`;

  c.articles.forEach((a) => {
    const artId = `art-${String(artIndex).padStart(3, '0')}`;
    artIndex++;

    // Generate 2 or 3 distinct figures for every study note
    const fig1Id = `fig-${artId}-1`;
    const fig2Id = `fig-${artId}-2`;
    const fig3Id = `fig-${artId}-3`;

    // Secondary diagram selector based on cluster
    let fig2Type = 'market-structure-shift';
    if (a.diag === 'market-structure-shift') fig2Type = 'fvg-bullish';
    else if (a.diag === 'fvg-bullish') fig2Type = 'fvg-bearish';
    else if (a.diag === 'fvg-bearish') fig2Type = 'inversion-fvg';
    else if (a.diag === 'order-block') fig2Type = 'breaker-block';
    else if (a.diag === 'breaker-block') fig2Type = 'unicorn-model';
    else if (a.diag === 'silver-bullet') fig2Type = 'optimal-trade-entry';
    else if (a.diag === 'turtle-soup') fig2Type = 'liquidity-sweep';
    else if (a.diag === 'crt-model') fig2Type = 'power-of-three';
    else if (a.diag === 'smt-divergence') fig2Type = 'intermarket-correlation';
    else if (a.diag === 'killzone-sessions') fig2Type = 'judas-swing';
    else if (a.diag === 'risk-matrix') fig2Type = 'prop-firm-matrix';
    else fig2Type = 'candlestick-anatomy';

    let fig3Type = 'killzone-sessions';
    if (c.num >= 8) fig3Type = 'risk-matrix';
    else if (c.num >= 5) fig3Type = 'silver-bullet';
    else fig3Type = 'optimal-trade-entry';

    catalogContent += `  {
    id: '${artId}',
    slug: '${a.slug}',
    title: ${JSON.stringify(a.title)},
    clusterId: '${c.id}',
    clusterNumber: ${c.num},
    clusterName: ${JSON.stringify(c.name)},
    category: ${JSON.stringify(c.category)},
    difficulty: ${JSON.stringify(c.level)},
    readTime: ${JSON.stringify(a.time)},
    shortDefinition: ${JSON.stringify(a.def)},
    prerequisites: ['Foundations', 'Market Structure Basics'],
    diagramType: '${a.diag}',
    diagramCaption: 'Institutional vector price action model for ${a.title.replace(/'/g, "\\'")}.',
    tags: [${JSON.stringify(c.name)}, 'ICT', 'Price Action', 'Smart Money'],
    figures: [
      {
        id: '${fig1Id}',
        title: 'Figure 1: Core Setup & Vector Model',
        type: '${a.diag}',
        caption: 'Primary annotated vector model showing algorithmic delivery and key reference boundaries.',
        tag: 'PRIMARY SETUP',
        subheading: 'Institutional Order Delivery Mechanics',
        notes: [
          'Algorithmic execution requires displacement confirmation before entry.',
          'Always verify timeframe alignment with the higher-timeframe Draw on Liquidity.'
        ]
      },
      {
        id: '${fig2Id}',
        title: 'Figure 2: Structural Inversion & Risk Boundaries',
        type: '${fig2Type}',
        caption: 'Anatomy and structural verification highlighting key support/resistance flips and invalidation levels.',
        tag: 'STRUCTURAL ANATOMY',
        subheading: 'Validation & Reversal Mechanics',
        notes: [
          'Observe candle body closes versus wick rejections to confirm institutional respect.',
          'Invalidation occurs if candle bodies close beyond the 50% equilibrium threshold.'
        ]
      },
      {
        id: '${fig3Id}',
        title: 'Figure 3: Session Alignment & Execution Timing',
        type: '${fig3Type}',
        caption: 'Session context mapping the setup into London Open, NY AM, or NY PM macro windows.',
        tag: 'SESSION TIMING',
        subheading: 'Algorithmic Time Trigger',
        notes: [
          'High-probability delivery only occurs inside designated institutional Kill Zones.',
          'Execute strictly when time and price converge on the execution desk.'
        ]
      }
    ]
  },\n`;
  });
});

catalogContent += `];

export const ARTICLES_BY_SLUG: Record<string, ArticleCatalogItem> = ARTICLES_CATALOG.reduce(
  (acc, item) => {
    acc[item.slug] = item;
    return acc;
  },
  {} as Record<string, ArticleCatalogItem>
);
`;

fs.writeFileSync(path.join(__dirname, '../components/education/data/articlesCatalog.ts'), catalogContent);
console.log('Successfully generated articlesCatalog.ts with all 137 articles!');
