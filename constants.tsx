

import React from 'react';
import { ModuleCard, Testimonial, PropFirm } from './types';

export const BRAND_NAME = "TIMON";
export const BRAND_LOGO = "/logo.png";

/**
 * GLOBAL MOTION STANDARD
 */
export const MOTION_RULES = {
  // Fix: Explicitly cast ease array to any to satisfy Framer Motion's strict Easing type requirements
  ease: [0.22, 1, 0.36, 1] as any,
  easeString: "cubic-bezier(0.22, 1, 0.36, 1)",
  microDuration: 0.2,
  hoverDuration: 0.4,
  revealDuration: 0.6,
  stagger: 0.08,
  viewport: { once: true, margin: "-10%" }
};

/**
 * GLOBAL VISUAL STYLE
 */
export const GLASS_STYLES = {
  card: "bg-[#080808] border border-white/15 shadow-2xl rounded-[2.5rem] backdrop-blur-[8px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  cardHover: "hover:border-white/25 hover:bg-[#0a0a0a]",
  button: "px-6 py-3 bg-white/[0.03] text-white border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full inline-flex items-center justify-center whitespace-nowrap relative overflow-hidden group/btn",
  buttonHover: "hover:bg-white/[0.06] hover:border-brand-purple/40 hover:shadow-[0_8px_20px_-8px_rgba(139,92,246,0.2)]",
  accentButton: "px-6 py-3 bg-brand-purple text-white shadow-[0_15px_35px_-10px_rgba(139,92,246,0.5)] rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] inline-flex items-center justify-center whitespace-nowrap relative overflow-hidden group/btn",
  accentButtonHover: "hover:brightness-105 hover:shadow-[0_15px_45px_-10px_rgba(139,92,246,0.6)]"
};

const checkKillSwitch = () => {
  if (typeof window === 'undefined') return true;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const prefers_reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return isTouch || prefers_reduced;
};

export const MOTION_KILL_SWITCH = checkKillSwitch();

// Helper to apply or disable motion transitions based on MOTION_KILL_SWITCH
const getTransition = (duration: number, delay: number = 0) => 
  MOTION_KILL_SWITCH ? { duration: 0, delay: 0 } : { duration, delay, ease: MOTION_RULES.ease };

// Fix: Cast VARIANTS to any to bypass complex nested transition type errors in framer-motion props
export const VARIANTS: any = {
  reveal: {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: getTransition(MOTION_RULES.revealDuration)
    }
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: MOTION_KILL_SWITCH ? { staggerChildren: 0, delayChildren: 0 } : {
        staggerChildren: MOTION_RULES.stagger,
        delayChildren: 0.05
      }
    }
  },
  cardHover: {
    y: MOTION_KILL_SWITCH ? 0 : -4,
    transition: getTransition(MOTION_RULES.hoverDuration)
  },
  buttonHover: {
    y: MOTION_KILL_SWITCH ? 0 : -1,
    transition: getTransition(0.4)
  },
  buttonTap: { opacity: 0.9, y: MOTION_KILL_SWITCH ? 0 : 0.5 },
  buttonFocus: { outline: "none" },
  inputFocus: { borderColor: "rgba(139,92,246,0.2)", transition: getTransition(0.2) }
};

export const PROP_FIRMS: PropFirm[] = [
  {
    id: "vest",
    name: "Vest Markets",
    marketType: "CFD",
    badge: "FEATURED PARTNER",
    isRecommended: true,
    highlight: "Direct Broker Access & Rapid Execution",
    accountSize: "$10K – $200K",
    profitSplit: "Up to 90%",
    payoutCap: "Bi-Weekly & On-Demand",
    maxAllocation: "$1,000,000 Scaling",
    discount: "Exclusive Discount with Code",
    coupon: "TIMON",
    url: "https://next.vestmarkets.com/r/timon",
    platforms: ["MT5", "cTrader", "WebTrader"],
    description: "High-performance institutional liquidity provider with tight raw spreads, crypto/fiat rails, and rapid payouts for Timon desk traders."
  },
  {
    id: "dolvero",
    name: "Dolvero",
    marketType: "CFD",
    badge: "EXCLUSIVE ACCESS",
    isRecommended: true,
    highlight: "No Time Limits & Instant Scaling",
    accountSize: "$5K – $300K",
    profitSplit: "Up to 90%",
    payoutCap: "Direct On-Demand",
    maxAllocation: "Up to $600K Allocation",
    discount: "Best Available Rate with Code",
    coupon: "TIMON",
    url: "https://dolvero.com/?ref=Timon",
    platforms: ["cTrader", "TradingView", "MT5"],
    description: "Proprietary evaluation framework engineered for price-action and ICT traders with transparent drawdowns and zero hidden rules."
  },
  {
    id: "fp",
    name: "FundingPips",
    marketType: "CFD",
    badge: "VERIFIED",
    highlight: "5-Day Payout Cycle",
    accountSize: "$5K – $200K",
    profitSplit: "Up to 90%",
    payoutCap: "5-Day Fast Payout",
    maxAllocation: "Up to $2,000,000 Scaling",
    discount: "5% Fee Reduction with Code",
    coupon: "TIMON",
    url: "https://app.fundingpips.com/register?ref=TIMON",
    platforms: ["Match-Trader", "cTrader", "TradeLocker"],
    description: "Streamlined evaluation model with flexible 1-step and 2-step evaluation rules and consistent bi-weekly payout execution."
  },
  {
    id: "apex",
    name: "Apex Trader Funding",
    marketType: "FUTURES",
    badge: "TOP FUTURES",
    isRecommended: true,
    highlight: "100% of First $25K Payout",
    accountSize: "$25K – $300K",
    profitSplit: "100% first $25K, then 90%",
    payoutCap: "Semi-Monthly (No Profit Cap)",
    maxAllocation: "Up to 20 Live Accounts",
    discount: "Up to 80% OFF with Code",
    coupon: "TIMON",
    url: "https://apextraderfunding.com",
    platforms: ["Rithmic", "Tradovate", "NinjaTrader"],
    description: "The benchmark in US Futures funding (NQ/ES). Trade multiple concurrent accounts with live trailing drawdown rules."
  },
  {
    id: "5ers",
    name: "The5ers",
    marketType: "CFD",
    badge: "ESTABLISHED",
    highlight: "Hyper Growth Scaling to $4M",
    accountSize: "$5K – $250K",
    profitSplit: "Up to 100% Scaling",
    payoutCap: "Bi-Weekly on-demand",
    maxAllocation: "Up to $4,000,000",
    discount: "Reduced Challenge Cost",
    coupon: "TIMON",
    url: "https://the5ers.com",
    platforms: ["MT5", "TradingView"],
    description: "Pioneer institutional prop firm known for long-term career scaling plans and strict balance-based drawdown models."
  },
  {
    id: "fn",
    name: "FundedNext",
    marketType: "CFD",
    badge: "GLOBAL",
    highlight: "15% Profit Share in Evaluation",
    accountSize: "$6K – $300K",
    profitSplit: "Up to 95%",
    payoutCap: "24-Hour Payout Guarantee",
    maxAllocation: "Up to $4,000,000 Scaling",
    discount: "Exclusive Partner Discount",
    coupon: "TIMON",
    url: "https://fundednext.com",
    platforms: ["MT4", "MT5", "cTrader"],
    description: "Global proprietary firm offering guaranteed fast payouts and profit sharing even during the evaluation phase."
  },
  {
    id: "ti",
    name: "Tradeify",
    marketType: "FUTURES",
    badge: "FUTURES CHOICE",
    highlight: "Zero Activation Fees",
    accountSize: "$25K – $150K",
    profitSplit: "100% first $10K, then 90%",
    payoutCap: "Straightforward Payout Rules",
    maxAllocation: "Up to 20 Accounts",
    discount: "Direct Fee Waiver",
    coupon: "TIMON",
    url: "https://tradeify.co",
    platforms: ["Tradovate", "NinjaTrader", "TradingView"],
    description: "Modern futures firm eliminating backend activation charges with direct TradingView and Tradovate connectivity."
  },
  {
    id: "bg",
    name: "Blue Guardian",
    marketType: "CFD",
    badge: "INNOVATIVE",
    highlight: "Guardian Protector Risk Tool",
    accountSize: "$10K – $200K",
    profitSplit: "Up to 90%",
    payoutCap: "14-Day Cycle",
    maxAllocation: "Up to $2,000,000 Scaling",
    discount: "10% OFF with Code",
    coupon: "TIMON",
    url: "https://blueguardian.com",
    platforms: ["DXtrade", "cTrader", "Match-Trader"],
    description: "Equipped with built-in capital preservation tools to prevent accidental rule breaches on sudden market moves."
  },
  {
    id: "lt",
    name: "Lucid Trading",
    marketType: "FUTURES",
    badge: "CLEAR RULES",
    highlight: "Simple 1-Step Target",
    accountSize: "$25K – $250K",
    profitSplit: "Up to 90%",
    payoutCap: "Weekly Payouts",
    maxAllocation: "Up to $500,000",
    discount: "Special Desk Access",
    coupon: "TIMON",
    url: "https://lucidtrading.com",
    platforms: ["Rithmic", "Tradovate"],
    description: "Transparent futures evaluation provider with minimal restrictions, allowing news trading and overnight positions on select plans."
  }
];

export const MODULES: ModuleCard[] = [
  {
    id: "m1",
    title: "MARKET // OUTLOOK",
    objective: "Analysis focused on structure, liquidity, and key zones to prepare before the week begins.",
    checklist: ["Structural Mapping", "Liquidity Node Identification", "Zone Validation"],
    mistakes: ["Reactive Bias", "Over-leveraging Opening Volatility"]
  },
  {
    id: "m2",
    title: "WEEKEND // REVIEW",
    objective: "Dedicated sessions to review trade logs, clarify concepts, and reinforce execution discipline.",
    checklist: ["Trade Log De-brief", "Technical Recalibration", "Process Refinement"],
    mistakes: ["Repeating Execution Errors", "Ignoring Journal Data"]
  },
  {
    id: "m6",
    title: "FUNDED // PATHWAY",
    objective: "Structured guidance to prepare for evaluations and manage funded accounts with consistency.",
    checklist: ["Evaluation Roadmap", "Drawdown Management", "Payout Consistency Plan"],
    mistakes: ["Aggressive Rule Breaking", "Evaluation Tilt"]
  },
  {
    id: "m3",
    title: "1:1 // MENTORSHIP",
    objective: "Direct, execution-focused feedback to identify weaknesses, correct errors, and stabilize performance.",
    checklist: ["Individual Performance Audit", "Specific Weakness Identification", "Custom Risk Adjustment"],
    mistakes: ["Blind Spot Negligence", "Inconsistent Risk Rules"]
  },
  {
    id: "m4",
    title: "TRADER // COMMUNITY",
    objective: "A focused environment to share ideas, review setups, and maintain accountability.",
    checklist: ["Setup Validation", "Peer Review", "High-Signal Intel Share"],
    mistakes: ["Echo Chamber Trading", "External Noise Contamination"]
  },
  {
    id: "m5",
    title: "LIFETIME // ACCESS",
    objective: "One-time entry to all current and future content, execution tools, and updates.",
    checklist: ["Perpetual Resource Library", "Future Strategy Updates", "Permanent Desk Access"],
    mistakes: ["Methodology Drift", "Static Analysis"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: "t1", 
    quote: "The clarity at 09:27 is real. No more guessing the open window.", 
    context: "Futures Trader" 
  },
  { 
    id: "t2", 
    quote: "My evaluation pass rate doubled after adopting the structural logic here.", 
    context: "Funded Associate" 
  },
  { 
    id: "t3", 
    quote: "Practical, no-nonsense approach. It's built for those who treat this as a career.", 
    context: "Prop Trader" 
  },
  { 
    id: "t4", 
    quote: "Liquidity node identification is the edge I was missing for three years.", 
    context: "Senior Analyst" 
  }
];

export const FAQ_DATA = [
  { q: "Is this program beginner-friendly?", a: "No — You need at least 1–2 years of experience in ICT Trading." },
  { q: "Can I trade any market?", a: "The core method is built around NQ futures, but concepts apply to all markets." },
  { q: "How long will it take to become consistent?", a: "Depends on discipline, but most traders improve in 4–8 weeks." },
  { q: "Do you guarantee profits?", a: "No — trading involves risk. We teach a method that improves your edge and discipline." },
  { q: "Is there a refund?", a: "No refunds after course access is given." }
];

export const PRICING_DIFFERENTIATORS = [
  { id: 'pd1', label: 'STRATEGY_FOCUS', description: 'Refining methods for peak market performance.' },
  { id: 'pd2', label: 'REAL-TIME_EXECUTION', description: 'Surgical entries and exits under direct mentorship.' },
  { id: 'pd3', label: 'CAPITAL_PRESERVATION', description: 'Building unbreakable risk management habits.' },
];

export const SOCIAL_LINKS = [
  {
    name: 'X',
    href: 'https://x.com/timon_ict?s=21',
    icon: (
      <svg fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/timon.fx?igsh=MWRwbjYxZXpqcWNvOQ%3D%3D&utm_source=qr',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@timontrades?si=G0skb3MDzyNA-0md',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];