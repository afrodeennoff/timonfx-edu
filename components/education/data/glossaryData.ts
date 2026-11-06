import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'fvg',
    term: 'Fair Value Gap',
    abbreviation: 'FVG',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'A three-candle price imbalance created by aggressive displacement, leaving an unfilled price inefficiency between Candle 1 and Candle 3.',
    detailedExplanation: 'In institutional order flow, rapid buying or selling creates an imbalance where orders are executed on only one side of the book. The space between the high of Candle 1 and the low of Candle 3 (in a bullish sequence) represents an inefficiency that the market frequently re-tests to balance liquidity.',
    relatedTerminology: ['IFVG', 'BPR', 'Displacement', 'PD Array'],
    relatedLessonSlug: 'fair-value-gap'
  },
  {
    id: 'ifvg',
    term: 'Inverse Fair Value Gap',
    abbreviation: 'IFVG',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'A previously violated Fair Value Gap that flips support/resistance roles upon structural closure through the gap.',
    detailedExplanation: 'When price aggressively drives straight through an existing FVG without respecting it, that zone is inverted. In a bullish IFVG, a former bearish imbalance that was invalidated with a body close above now serves as institutional support upon retest.',
    relatedTerminology: ['FVG', 'Order Block', 'Breaker Block'],
    relatedLessonSlug: 'inverse-fair-value-gap'
  },
  {
    id: 'bos',
    term: 'Break of Structure',
    abbreviation: 'BOS',
    category: 'Market Structure',
    simpleDefinition: 'A continuation break where price closes beyond an established swing high in an uptrend or swing low in a downtrend.',
    detailedExplanation: 'A Break of Structure confirms that the current trending direction remains dominant. In an uptrend, creating a new swing high that closes above the prior swing high signals ongoing demand continuation.',
    relatedTerminology: ['CHoCH', 'MSS', 'Displacement', 'Swing Points'],
    relatedLessonSlug: 'break-of-structure'
  },
  {
    id: 'mss',
    term: 'Market Structure Shift',
    abbreviation: 'MSS',
    category: 'Market Structure',
    simpleDefinition: 'A critical structural reversal signal where price sweeps a liquidity pool and then forcefully displaces through a key swing point.',
    detailedExplanation: 'Unlike a standard BOS continuation, a Market Structure Shift occurs after a liquidity run (e.g. into a key Higher Timeframe PD Array) followed by an energetic displacement candle leaving an FVG that breaks opposing swing structure.',
    relatedTerminology: ['BOS', 'CHoCH', 'Displacement', 'Liquidity Sweep'],
    relatedLessonSlug: 'market-structure-shift'
  },
  {
    id: 'choch',
    term: 'Change of Character',
    abbreviation: 'CHoCH',
    category: 'Market Structure',
    simpleDefinition: 'The earliest lower-timeframe warning signal that the prevailing directional order flow is pausing or attempting a reversal.',
    detailedExplanation: 'Typically observed on sub-timeframes (1M, 5M) when internal structural swing highs/lows are broken for the first time after an extended run. It precedes larger higher-timeframe Market Structure Shifts.',
    relatedTerminology: ['MSS', 'Internal Structure', 'External Structure'],
    relatedLessonSlug: 'change-of-character'
  },
  {
    id: 'bsl',
    term: 'Buy-Side Liquidity',
    abbreviation: 'BSL',
    category: 'Liquidity',
    simpleDefinition: 'A concentration of buy stop orders (short stop-losses and breakout buyer orders) resting above swing highs or equal highs.',
    detailedExplanation: 'Institutional algorithms require liquidity to offload massive long positions. Because buy stops become market buy orders when triggered, smart money uses this pool of willing buyers to sell their inventory into, often triggering an immediate price reversal.',
    relatedTerminology: ['SSL', 'Equal Highs', 'Liquidity Sweep'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'ssl',
    term: 'Sell-Side Liquidity',
    abbreviation: 'SSL',
    category: 'Liquidity',
    simpleDefinition: 'A pool of sell stop orders resting beneath prominent swing lows or equal lows.',
    detailedExplanation: 'Traders holding long positions place stop losses below swing lows. When price probes below these levels, sell stops trigger, producing liquidity that institutions accumulate at a discounted price.',
    relatedTerminology: ['BSL', 'Equal Lows', 'Inducement'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'eqh',
    term: 'Equal Highs',
    abbreviation: 'EQH',
    category: 'Liquidity',
    simpleDefinition: 'Two or more swing highs peaking at nearly identical price levels, creating an obvious liquidity magnet for stop orders.',
    detailedExplanation: 'Retail trading textbooks often label equal highs as "double tops" or "strong resistance." Institutional algorithms recognize this obvious cluster as an engineered pool of buy stops to be swept before any true directional move unfolds.',
    relatedTerminology: ['EQL', 'BSL', 'Liquidity Sweep'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'eql',
    term: 'Equal Lows',
    abbreviation: 'EQL',
    category: 'Liquidity',
    simpleDefinition: 'Two or more swing lows formed at identical price horizontal levels, acting as a high-probability target for sell stop raids.',
    detailedExplanation: 'Often misinterpreted as "double bottom support." Once retail traders load up on longs with stops beneath the level, market makers drive price below to clear stops before launching the intended rally.',
    relatedTerminology: ['EQH', 'SSL', 'Inducement'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'ob',
    term: 'Order Block',
    abbreviation: 'OB',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'The final up-close or down-close candle preceding an impulsive displacement that breaks market structure.',
    detailedExplanation: 'Represents the footprint of institutional participation. A Bullish Order Block is the lowest down-close candle prior to an aggressive upward thrust that breaks structure. When price retraces back to this block, mitigation orders act as responsive support.',
    relatedTerminology: ['Breaker Block', 'Mitigation Block', 'FVG'],
    relatedLessonSlug: 'order-blocks'
  },
  {
    id: 'breaker',
    term: 'Breaker Block',
    abbreviation: 'Breaker',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'A failed order block that swept liquidity before being violently violated by counter-displacement, reversing its role.',
    detailedExplanation: 'In a bearish breaker, price creates a higher high (sweeping buy stops) and then crashes through the previous swing low that originated the move. That down-candle between the highs now becomes resistance when retested.',
    relatedTerminology: ['Order Block', 'Mitigation Block', 'MSS'],
    relatedLessonSlug: 'breaker-blocks'
  },
  {
    id: 'bpr',
    term: 'Balanced Price Range',
    abbreviation: 'BPR',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'An overlap of a bullish Fair Value Gap and a bearish Fair Value Gap within the exact same price delivery window.',
    detailedExplanation: 'Created when an aggressive rally leaves a bullish gap, and an immediate sharp counter-reversal leaves a bearish gap over the identical price spectrum. Because price moved twice without consolidation, the overlap acts as a vacuum and dynamic pivot.',
    relatedTerminology: ['FVG', 'IFVG', 'Displacement'],
    relatedLessonSlug: 'balanced-price-range'
  },
  {
    id: 'ote',
    term: 'Optimal Trade Entry',
    abbreviation: 'OTE',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'A defined Fibonacci retracement zone located between 62% and 79% of a dealing range (anchored at the 70.5% sweet spot).',
    detailedExplanation: 'Calculated using Fibonacci retracement from swing low to swing high in an impulse leg. When institutional order flow enters deep discount (62%–79%), confluence with an FVG or Order Block offers the highest statistical reward-to-risk ratio.',
    relatedTerminology: ['Equilibrium', 'Premium and Discount', 'Dealing Range'],
    relatedLessonSlug: 'optimal-trade-entry'
  },
  {
    id: 'amd',
    term: 'Power of Three (Accumulation, Manipulation, Distribution)',
    abbreviation: 'AMD / PO3',
    category: 'ICT & SMC',
    simpleDefinition: 'The tripartite structural sequence of how standard institutional market sessions and daily candles form: Open, Low, High, Close (OHLC).',
    detailedExplanation: 'In a bullish daily candle, price opens (Accumulation of initial orders), trades downward below the open to trap early breakout sellers and sweep sell stops (Manipulation / Judas Swing), and then expands aggressively higher into the true directional move (Distribution), before closing near the highs.',
    relatedTerminology: ['Judas Swing', 'Daily Bias', 'Kill Zone'],
    relatedLessonSlug: 'power-of-three'
  },
  {
    id: 'judas',
    term: 'Judas Swing',
    abbreviation: 'Judas',
    category: 'ICT & SMC',
    simpleDefinition: 'A deliberate false breakout occurring at the start of a major trading session (e.g. London Open or NY Open) designed to engineer liquidity.',
    detailedExplanation: 'Occurs inside session kill zones (such as 02:00–05:00 UTC London Open). The algorithm rallies price above the Asian range high to entice breakout longs and trigger short stops, only to reverse abruptly and drive lower for the true session trend.',
    relatedTerminology: ['AMD / PO3', 'London Session', 'Liquidity Sweep'],
    relatedLessonSlug: 'judas-swing'
  },
  {
    id: 'silver-bullet',
    term: 'ICT Silver Bullet',
    abbreviation: 'SB',
    category: 'ICT & SMC',
    simpleDefinition: 'A strict time-based algorithmic execution window occurring daily between 10:00 AM – 11:00 AM New York local time.',
    detailedExplanation: 'During this specific 60-minute macro window, the algorithm consistently targets an obvious liquidity pool or rebalances a Fair Value Gap with a minimum expected expansion of 15–20 points on NQ/ES futures.',
    relatedTerminology: ['New York Session', 'FVG', 'Draw on Liquidity'],
    relatedLessonSlug: 'silver-bullet'
  },
  {
    id: 'smt',
    term: 'Smart Money Technique (SMT Divergence)',
    abbreviation: 'SMT',
    category: 'ICT & SMC',
    simpleDefinition: 'A correlated asset divergence (e.g. NQ vs ES, or EURUSD vs GBPUSD) where one instrument takes out a key swing high/low while the other fails to do so.',
    detailedExplanation: 'Reveals institutional accumulation or distribution. If Nasdaq prints a new swing high but S&P 500 makes a lower high at the exact same timestamp, the non-confirmation indicates underlying market weakness and an imminent reversal.',
    relatedTerminology: ['Correlation', 'Market Structure Shift', 'Liquidity Sweep'],
    relatedLessonSlug: 'smt-divergence'
  },
  {
    id: 'crt',
    term: 'Candle Range Theory',
    abbreviation: 'CRT',
    category: 'Candle Range Theory',
    simpleDefinition: 'An analytical framework examining how price expands beyond, or rejects within, the high and low boundaries of an established reference candle.',
    detailedExplanation: 'Uses a high-timeframe reference candle (such as the 4H or Daily candle) as an operating dealing range. Price probes outside the wick boundary to sweep external liquidity before reversing back inside the body range.',
    relatedTerminology: ['Reference Candle', 'Seek and Destroy', 'Dealing Range'],
    relatedLessonSlug: 'candle-range-theory'
  },
  {
    id: 'dol',
    term: 'Draw on Liquidity',
    abbreviation: 'DOL',
    category: 'Multi-Timeframe',
    simpleDefinition: 'The primary directional magnet (untested FVG, equal highs/lows, or prior session boundaries) that price is magnetically drawn toward.',
    detailedExplanation: 'Establishing the Draw on Liquidity is the bedrock of multi-timeframe directional narrative. Until the DOL is delivered or invalidated, lower timeframe pullbacks should be viewed as opportunities to position in alignment with the higher timeframe draw.',
    relatedTerminology: ['Daily Bias', 'BSL', 'SSL'],
    relatedLessonSlug: 'draw-on-liquidity'
  },
  {
    id: 'displacement',
    term: 'Displacement',
    abbreviation: 'Displacement',
    category: 'Market Structure',
    simpleDefinition: 'High-momentum, large-bodied candles that rapidly traverse price with minimal wicks, confirming aggressive institutional aggression.',
    detailedExplanation: 'Without displacement, a break of structure is merely a slow drift or liquidity probe. Real displacement leaves Fair Value Gaps in its wake and demonstrates that large market participants are actively moving price toward their objective.',
    relatedTerminology: ['FVG', 'MSS', 'Order Block'],
    relatedLessonSlug: 'displacement'
  },
  {
    id: 'pd-array',
    term: 'Premium / Discount Array',
    abbreviation: 'PD Array',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'The hierarchical spectrum of price action matrices (Order Blocks, FVGs, Breakers, Liquidity pools) mapped across a dealing range.',
    detailedExplanation: 'In an uptrend, traders seek discount PD arrays (below 50% equilibrium) to buy at value. In a downtrend, traders seek premium PD arrays (above 50% equilibrium) to sell at premium prices.',
    relatedTerminology: ['Equilibrium', 'OTE', 'FVG'],
    relatedLessonSlug: 'premium-and-discount'
  },
  {
    id: 'equilibrium',
    term: 'Equilibrium (50% Mean)',
    abbreviation: 'EQ',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'The exact 50% midpoint of a defined dealing range separating Premium from Discount pricing.',
    detailedExplanation: 'Above the 50% level is considered Premium pricing (expensive; favorable for shorts). Below the 50% level is considered Discount pricing (cheap; favorable for longs). Disciplined traders avoid initiating new breakout positions at or near equilibrium.',
    relatedTerminology: ['Premium and Discount', 'Dealing Range', 'OTE'],
    relatedLessonSlug: 'premium-and-discount'
  },
  {
    id: 'pdh',
    term: 'Previous Day High',
    abbreviation: 'PDH',
    category: 'Liquidity',
    simpleDefinition: 'The highest price reached during the prior trading day session, serving as a primary external buy-side liquidity target.',
    detailedExplanation: 'Daily swing extremes hold massive pools of stop losses and breakout orders. The open of the New York session frequently targets the PDH or PDL to establish the daily high or low before distributing.',
    relatedTerminology: ['PDL', 'PWH', 'BSL'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'pdl',
    term: 'Previous Day Low',
    abbreviation: 'PDL',
    category: 'Liquidity',
    simpleDefinition: 'The lowest price recorded during the prior daily session, representing a primary sell-side liquidity objective.',
    detailedExplanation: 'A breach below the PDL followed by an immediate displacement recovery back above is one of the highest-probability institutional reversal setups in index futures.',
    relatedTerminology: ['PDH', 'PWL', 'SSL'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'pwh',
    term: 'Previous Week High',
    abbreviation: 'PWH',
    category: 'Liquidity',
    simpleDefinition: 'The weekly candle high boundary representing substantial institutional macro liquidity.',
    detailedExplanation: 'Sweeps of the PWH typically trigger multi-day reversals or confirm aggressive weekly trend expansions when closed above with solid candle bodies.',
    relatedTerminology: ['PWL', 'PDH', 'DOL'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'pwl',
    term: 'Previous Week Low',
    abbreviation: 'PWL',
    category: 'Liquidity',
    simpleDefinition: 'The weekly candle low boundary, acting as a major macro draw on sell-side liquidity.',
    detailedExplanation: 'Provides major contextual clues for weekly bias. If the market is bullish, early week probes into the PWL often form the low of the week before Friday distribution.',
    relatedTerminology: ['PWH', 'PDL', 'Daily Bias'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'killzone',
    term: 'Session Kill Zone',
    abbreviation: 'KZ',
    category: 'Time & Sessions',
    simpleDefinition: 'High-volume institutional trading time windows where volatility, liquidity injections, and true algorithmic delivery occur.',
    detailedExplanation: 'Primary kill zones include London Open (02:00–05:00 UTC / 07:00–10:00 London), New York AM Open (08:30–11:00 AM NY / 13:30–16:00 UTC), and New York PM (13:30–15:30 NY / 18:30–20:30 UTC).',
    relatedTerminology: ['Asian Session', 'London Session', 'New York Session'],
    relatedLessonSlug: 'session-concepts'
  },
  {
    id: 'daily-bias',
    term: 'Daily Bias',
    abbreviation: 'Daily Bias',
    category: 'Multi-Timeframe',
    simpleDefinition: 'The anticipated expansion direction (bullish or bearish) of the forthcoming daily candlestick based on higher timeframe order flow.',
    detailedExplanation: 'Formulated by evaluating current market structure, whether price is in premium or discount of the weekly range, and identifying the nearest unreached Draw on Liquidity.',
    relatedTerminology: ['DOL', 'Multi-Timeframe Analysis', 'AMD / PO3'],
    relatedLessonSlug: 'daily-bias'
  },
  {
    id: 'ipda',
    term: 'Interbank Price Delivery Algorithm',
    abbreviation: 'IPDA',
    category: 'ICT & SMC',
    simpleDefinition: 'The automated algorithmic framework hypothesized to deliver electronic financial asset prices toward specific liquidity pools and PD arrays.',
    detailedExplanation: 'According to ICT theory, modern financial market price delivery is not driven by random retail buying/selling pressure, but by automated execution algorithms programmed to reprice toward uncollected buy/sell stops and balance unfilled inefficiencies.',
    relatedTerminology: ['PD Array', 'DOL', 'BSL', 'SSL'],
    relatedLessonSlug: 'market-structure-shift'
  },
  {
    id: 'ce',
    term: 'Consequent Encroachment',
    abbreviation: 'CE',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'The exact 50% midpoint of a Fair Value Gap, volume imbalance, or extended price shadow/wick.',
    detailedExplanation: 'When price returns to mitigate a Fair Value Gap, the 50% level (Consequent Encroachment) represents the high-probability balancing benchmark. High-conviction setups frequently reject precisely at CE without allowing candle bodies to close beyond it.',
    relatedTerminology: ['FVG', 'Mean Threshold', 'Equilibrium'],
    relatedLessonSlug: 'fair-value-gap'
  },
  {
    id: 'mt',
    term: 'Mean Threshold',
    abbreviation: 'MT',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'The 50% midpoint of an Order Block candle body, representing the institutional validity threshold.',
    detailedExplanation: 'While price wicks may pierce into the deeper portions of an order block, candle bodies should respect the 50% Mean Threshold. A full body close through the Mean Threshold generally invalidates the Order Block and signals a Breaker Block formation.',
    relatedTerminology: ['Order Block', 'Breaker Block', 'Consequent Encroachment'],
    relatedLessonSlug: 'order-blocks'
  },
  {
    id: 'bpr',
    term: 'Balanced Price Range',
    abbreviation: 'BPR',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'A double-imbalance zone where an aggressive upward FVG is immediately countered by an overlapping downward FVG.',
    detailedExplanation: 'Because liquidity was offered in both directions with extreme speed, the overlapping area forms a Balanced Price Range. When price retests this zone, it tends to act as formidable resistance or support because fair value has already been achieved.',
    relatedTerminology: ['FVG', 'IFVG', 'Volume Imbalance'],
    relatedLessonSlug: 'fair-value-gap'
  },
  {
    id: 'vi',
    term: 'Volume Imbalance',
    abbreviation: 'VI',
    category: 'PD Arrays & Imbalances',
    simpleDefinition: 'A price gap where candle bodies do not overlap, though their respective wicks touch or overlap.',
    detailedExplanation: 'Unlike a classic FVG where wicks do not touch, a Volume Imbalance is characterized by an open space between the close of Candle 1 and open of Candle 2 (or body extremes), showing an intraday liquidity deficit that price routinely revisits.',
    relatedTerminology: ['FVG', 'BPR', 'Consequent Encroachment'],
    relatedLessonSlug: 'fair-value-gap'
  },
  {
    id: 'turtle-soup',
    term: 'Turtle Soup',
    abbreviation: 'Turtle Soup',
    category: 'Liquidity',
    simpleDefinition: 'An ICT setup exploiting failed breakout attempts by sweeping a key 20-day high or low and instantly reversing back inside.',
    detailedExplanation: 'Named in contrast to the classic Trend Following "Turtle Traders" who bought 20-day highs, the Turtle Soup model hunts the stop losses triggered by those breakouts. The setup requires price to sweep an established swing high/low by 5–15 ticks and immediately reject with displacement.',
    relatedTerminology: ['Liquidity Sweep', 'BSL', 'SSL', 'Judas Swing'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'judas-swing',
    term: 'Judas Swing',
    abbreviation: 'Judas Swing',
    category: 'Time & Sessions',
    simpleDefinition: 'A false deceptive directional price push occurring at session opens to induce early retail breakout orders.',
    detailedExplanation: 'Occurring predominantly during the London Open (02:00–05:00 UTC) and New York Open (09:30 EST), the algorithm pushes price in the opposite direction of the intended true daily trend. Once stops are absorbed below or above session extremes, the true expansion begins.',
    relatedTerminology: ['AMD / PO3', 'London Session', 'Turtle Soup'],
    relatedLessonSlug: 'power-of-three'
  },
  {
    id: 'idm',
    term: 'Inducement',
    abbreviation: 'IDM',
    category: 'Liquidity',
    simpleDefinition: 'A minor internal swing high or low engineered by the algorithm to bait impatient retail traders before the genuine sweep.',
    detailedExplanation: 'Traders often mistake internal minor highs/lows for genuine structural shifts. Smart money creates this false support or resistance to accumulate retail stop losses directly ahead of a higher-timeframe PD array.',
    relatedTerminology: ['Internal Structure', 'Liquidity Pools', 'MSS'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'irl',
    term: 'Internal Range Liquidity',
    abbreviation: 'IRL',
    category: 'Liquidity',
    simpleDefinition: 'Liquidity residing within the current dealing range in the form of Fair Value Gaps and unmitigated imbalances.',
    detailedExplanation: 'Markets constantly oscillate between Internal Range Liquidity and External Range Liquidity. When price sweeps an external high (ERL), it typically re-balances back into an internal FVG (IRL) before seeking the next external target.',
    relatedTerminology: ['External Range Liquidity', 'FVG', 'Dealing Range'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'erl',
    term: 'External Range Liquidity',
    abbreviation: 'ERL',
    category: 'Liquidity',
    simpleDefinition: 'Liquidity resting outside the dealing range boundaries above old swing highs and below old swing lows.',
    detailedExplanation: 'External range liquidity includes previous session highs, previous day extremes, and equal highs/lows. Once an internal PD array is mitigated, the algorithm targets the next opposing External Range Liquidity boundary.',
    relatedTerminology: ['Internal Range Liquidity', 'BSL', 'SSL'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'eqh',
    term: 'Equal Highs',
    abbreviation: 'EQH',
    category: 'Liquidity',
    simpleDefinition: 'Two or more swing highs peaking at nearly identical price levels, creating an obvious retail double-top resistance.',
    detailedExplanation: 'Retail chart patterns treat equal highs as strong resistance. However, institutional algorithms treat equal highs as engineered liquidity containing concentrated buy stop orders that will inevitably be purged.',
    relatedTerminology: ['Equal Lows', 'BSL', 'Liquidity Sweep'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'eql',
    term: 'Equal Lows',
    abbreviation: 'EQL',
    category: 'Liquidity',
    simpleDefinition: 'Two or more swing lows bottoming at identical price levels, creating an obvious retail double-bottom support.',
    detailedExplanation: 'Because retail books place clustered stop losses directly beneath double bottoms, equal lows act as a massive magnet for sell-side liquidity sweeps before bullish expansions.',
    relatedTerminology: ['Equal Highs', 'SSL', 'Turtle Soup'],
    relatedLessonSlug: 'liquidity-concepts'
  },
  {
    id: 'mmbm',
    term: 'Market Maker Buy Model',
    abbreviation: 'MMBM',
    category: 'ICT & SMC',
    simpleDefinition: 'A comprehensive multi-phase institutional cycle consisting of consolidation, sell-side delivery curve, smart money reversal, and buy-side expansion.',
    detailedExplanation: 'The MMBM outlines an institutional cycle: 1) Original consolidation, 2) Downside distribution engineered into higher-timeframe discount, 3) Smart Money Reversal via MSS and FVG, 4) Re-accumulation and expansion returning all the way to the original consolidation high.',
    relatedTerminology: ['MMSM', 'AMD / PO3', 'Smart Money Reversal'],
    relatedLessonSlug: 'market-structure-shift'
  },
  {
    id: 'mmsm',
    term: 'Market Maker Sell Model',
    abbreviation: 'MMSM',
    category: 'ICT & SMC',
    simpleDefinition: 'An institutional cycle comprising initial consolidation, buy-side expansion into premium, smart money reversal, and downside distribution.',
    detailedExplanation: 'The inverse of the buy model. Price expands upward targeting buy-side liquidity in a higher-timeframe premium PD array. Once cleared, a bearish MSS prints and price cascades downward through re-distribution curves back to the original consolidation low.',
    relatedTerminology: ['MMBM', 'MSS', 'Order Blocks'],
    relatedLessonSlug: 'market-structure-shift'
  },
  {
    id: 'true-day-open',
    term: 'True Day Open (00:00 NY)',
    abbreviation: 'True Open',
    category: 'Time & Sessions',
    simpleDefinition: 'The midnight (00:00 EST / New York) candle opening price, representing the benchmark reference line for daily AMD mechanics.',
    detailedExplanation: 'In bullish daily profiles, buying below the midnight opening price represents institutional discount accumulation. Selling above the midnight opening price in bearish daily profiles represents premium distribution.',
    relatedTerminology: ['AMD / PO3', 'Session Kill Zone', 'Daily Bias'],
    relatedLessonSlug: 'session-concepts'
  }
];
