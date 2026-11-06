export type EducationTab = 
  | 'overview' 
  | 'curriculum' 
  | 'library' 
  | 'lesson' 
  | 'glossary' 
  | 'tools' 
  | 'practice' 
  | 'progress';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type ConceptCategory = 
  | 'Foundations'
  | 'Market Structure'
  | 'Liquidity'
  | 'PD Array Tools'
  | 'Models & Sessions'
  | 'CRT — Candle Range Theory'
  | 'S&D / Miscellaneous'
  | 'Advanced ICT'
  | 'Instruments & Markets'
  | 'Risk & Process'
  | 'Strategy & Application'
  | 'Comparisons & Deep Dives'
  | 'Resources'
  | 'Getting Started'
  | 'Price Action'
  | 'PD Arrays & Imbalances'
  | 'Time & Sessions'
  | 'ICT & SMC'
  | 'Candle Range Theory'
  | 'Multi-Timeframe'
  | 'Risk & Mathematics'
  | 'Psychology'
  | 'Research & Testing';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type DiagramType = 
  | 'fvg-bullish'
  | 'fvg-bearish'
  | 'market-structure-shift'
  | 'break-of-structure'
  | 'liquidity-sweep'
  | 'order-block'
  | 'breaker-block'
  | 'power-of-three'
  | 'candlestick-anatomy'
  | 'premium-discount'
  | 'killzone-sessions'
  | 'smt-divergence'
  | 'turtle-soup'
  | 'silver-bullet'
  | 'inversion-fvg'
  | 'crt-model'
  | 'market-maker-model'
  | 'balanced-price-range'
  | 'optimal-trade-entry'
  | 'unicorn-model'
  | 'judas-swing'
  | 'volume-imbalance'
  | 'cisd-state-delivery'
  | 'risk-matrix'
  | 'intermarket-correlation'
  | 'ipda-ranges'
  | 'prop-firm-matrix';

export interface LessonFigure {
  id: string;
  title: string;
  type: DiagramType;
  caption: string;
  tag?: string;
  subheading?: string;
  notes?: string[];
}

export interface LessonContent {
  id: string;
  slug: string;
  clusterId?: string;
  clusterNumber?: number;
  clusterName?: string;
  moduleId: string;
  moduleNumber: number;
  title: string;
  shortDefinition: string;
  category: ConceptCategory;
  difficulty: DifficultyLevel;
  readTime: string;
  prerequisites: string[];
  introduction: string;
  fundamentalExplanation: string[];
  diagramType?: DiagramType;
  diagramCaption?: string;
  figures?: LessonFigure[];
  conceptAnatomy: { title: string; description: string }[];
  identificationRules: string[];
  institutionalContext: string;
  bullishScenario: { title: string; description: string };
  bearishScenario: { title: string; description: string };
  commonMisconceptions: string[];
  quiz: QuizQuestion[];
  faqs: { question: string; answer: string }[];
  keyTakeaways: string[];
  relatedGlossaryTerms: string[];
  relatedLessonSlugs: string[];
}

export interface CurriculumModule {
  id: string;
  moduleNumber: number;
  title: string;
  level: DifficultyLevel;
  category: ConceptCategory;
  description: string;
  objective: string;
  prerequisites: string[];
  lessonSlugs: string[];
  lessonCount: number;
  estimatedHours: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  abbreviation?: string;
  category: ConceptCategory;
  simpleDefinition: string;
  detailedExplanation: string;
  relatedTerminology: string[];
  relatedLessonSlug?: string;
}

export interface UserLearningProgress {
  completedLessons: string[]; // lesson slugs
  quizScores: Record<string, { score: number; total: number; date: string }>;
  savedNotes: Record<string, string>;
  bookmarkedLessons: string[];
  lastVisitedSlug?: string;
}
