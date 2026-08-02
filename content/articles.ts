import type { Locale } from "@/i18n/types";
import type { CategorySlug } from "./categories";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleTranslation = {
  title: string;
  summary: string;
  sections: ArticleSection[];
};

export type Article = {
  slug: string;
  category: CategorySlug;
  updatedAt: string;
  difficulty: Difficulty;
  readMinutes: number;
  featured: boolean;
  translations: Partial<Record<Locale, ArticleTranslation>> & { en: ArticleTranslation };
  relatedSlugs: string[];
};

const tradeBalanceEnglish: ArticleTranslation = {
  title: "Trade Balance",
  summary: "A practical guide to understanding imports, exports, competitiveness, and the policy choices that shape your country’s external balance.",
  sections: [
    {
      id: "what-is-trade-balance",
      title: "What trade balance measures",
      paragraphs: [
        "Trade balance is the difference between the value of goods and services a country exports and the value it imports. A surplus means exports exceed imports; a deficit means the country buys more from abroad than it sells.",
        "In Power & Revolution, the headline figure is only the starting point. The composition of trade matters just as much: energy dependence, industrial capacity, consumer demand, exchange rates, and international agreements all shape the result.",
      ],
    },
    {
      id: "reading-the-signals",
      title: "Reading the warning signals",
      paragraphs: [
        "A deficit is not automatically a crisis. Fast-growing countries often import machinery, energy, and intermediate goods before new capacity begins producing. The danger appears when imports rise without a credible path to stronger productivity or export revenue.",
      ],
      bullets: [
        "Track whether the deficit is concentrated in energy, food, consumer goods, or industrial inputs.",
        "Compare import growth with industrial output and export volume.",
        "Watch currency pressure, inflation, and public debt together rather than in isolation.",
      ],
    },
    {
      id: "improving-exports",
      title: "Building sustainable export strength",
      paragraphs: [
        "The most durable response is to increase productive capacity in sectors where the country can compete. Expand infrastructure, education, energy reliability, and research before relying on short-term subsidies alone.",
        "Trade agreements can unlock markets, but domestic firms still need the capacity and price competitiveness to use them. Prioritize a small group of strategic sectors, then measure whether support produces real output and employment gains.",
      ],
    },
    {
      id: "managing-imports",
      title: "Managing imports without damaging growth",
      paragraphs: [
        "Broad import restrictions can reduce a deficit quickly, but they may also raise prices and deprive local industry of essential inputs. Target dependency rather than trade itself.",
      ],
      bullets: [
        "Diversify energy and food suppliers before introducing restrictions.",
        "Use temporary, targeted measures for non-essential imports when reserves are under pressure.",
        "Avoid restricting machinery and components needed for domestic production.",
      ],
    },
    {
      id: "strategy-checklist",
      title: "A reliable policy sequence",
      paragraphs: [
        "Begin with diagnosis, stabilize the most urgent dependency, invest in competitive capacity, and only then adjust tariffs or subsidies. Review the result over several quarters; trade policy usually works with a delay.",
      ],
      bullets: [
        "Identify the largest structural import categories.",
        "Protect currency and energy stability.",
        "Invest in two or three export-capable sectors.",
        "Negotiate market access and monitor production outcomes.",
      ],
    },
  ],
};

const tradeBalanceArabic: ArticleTranslation = {
  title: "الميزان التجاري",
  summary: "دليل عملي لفهم الواردات والصادرات والتنافسية والقرارات السياسية التي تشكل التوازن الخارجي لدولتك.",
  sections: [
    {
      id: "what-is-trade-balance",
      title: "ما الذي يقيسه الميزان التجاري؟",
      paragraphs: [
        "الميزان التجاري هو الفرق بين قيمة السلع والخدمات التي تصدرها الدولة وقيمة ما تستورده. يتحقق الفائض عندما تتجاوز الصادرات الواردات، بينما يظهر العجز عندما تشتري الدولة من الخارج أكثر مما تبيعه.",
        "في Power & Revolution لا يكفي النظر إلى الرقم الإجمالي. فتركيبة التجارة مهمة أيضًا؛ إذ يؤثر الاعتماد على الطاقة والقدرة الصناعية والطلب المحلي وسعر الصرف والاتفاقيات الدولية في النتيجة النهائية.",
      ],
    },
    {
      id: "reading-the-signals",
      title: "قراءة إشارات التحذير",
      paragraphs: ["لا يمثل العجز أزمة بالضرورة. فقد تستورد الدول سريعة النمو الآلات والطاقة قبل أن تبدأ قدراتها الجديدة بالإنتاج. تظهر الخطورة عندما ترتفع الواردات دون مسار واضح نحو إنتاجية أعلى أو إيرادات تصدير أقوى."],
      bullets: [
        "حدد ما إذا كان العجز متركزًا في الطاقة أو الغذاء أو السلع الاستهلاكية أو المدخلات الصناعية.",
        "قارن نمو الواردات بالإنتاج الصناعي وحجم الصادرات.",
        "راقب ضغط العملة والتضخم والدين العام معًا.",
      ],
    },
    {
      id: "improving-exports",
      title: "بناء قوة تصديرية مستدامة",
      paragraphs: [
        "الحل الأكثر استدامة هو زيادة القدرة الإنتاجية في القطاعات التي تستطيع الدولة المنافسة فيها. وسّع البنية التحتية والتعليم وموثوقية الطاقة والبحث قبل الاعتماد على الدعم قصير المدى وحده.",
        "قد تفتح الاتفاقيات التجارية أسواقًا جديدة، لكن الشركات المحلية تحتاج إلى القدرة والسعر التنافسي للاستفادة منها. ركز على مجموعة صغيرة من القطاعات الاستراتيجية وقِس نتائج الدعم الفعلية.",
      ],
    },
    {
      id: "managing-imports",
      title: "إدارة الواردات دون الإضرار بالنمو",
      paragraphs: ["قد تخفض القيود الواسعة على الواردات العجز بسرعة، لكنها قد ترفع الأسعار وتحرم الصناعة المحلية من مدخلات أساسية. استهدف الاعتماد المفرط بدلًا من استهداف التجارة نفسها."],
      bullets: [
        "نوّع موردي الطاقة والغذاء قبل فرض القيود.",
        "استخدم إجراءات مؤقتة ومحددة للسلع غير الأساسية عند تعرض الاحتياطيات للضغط.",
        "تجنب تقييد الآلات والمكونات اللازمة للإنتاج المحلي.",
      ],
    },
    {
      id: "strategy-checklist",
      title: "تسلسل موثوق للسياسات",
      paragraphs: ["ابدأ بالتشخيص، ثم ثبّت أهم نقاط الاعتماد، واستثمر في القدرة التنافسية، وبعد ذلك عدّل الرسوم أو الدعم. راجع النتائج على مدى عدة أرباع لأن أثر السياسة التجارية يتأخر عادة."],
      bullets: [
        "حدد أكبر فئات الواردات الهيكلية.",
        "احمِ استقرار العملة والطاقة.",
        "استثمر في قطاعين أو ثلاثة قادرة على التصدير.",
        "تفاوض على الوصول إلى الأسواق وراقب نتائج الإنتاج.",
      ],
    },
  ],
};

const briefArticle = (
  title: string,
  summary: string,
  firstTitle: string,
  firstBody: string,
  secondTitle: string,
  secondBody: string,
): ArticleTranslation => ({
  title,
  summary,
  sections: [
    { id: "overview", title: firstTitle, paragraphs: [firstBody] },
    { id: "strategy", title: secondTitle, paragraphs: [secondBody] },
  ],
});

export const articles: Article[] = [
  {
    slug: "trade-balance", category: "economy", updatedAt: "2026-08-02", difficulty: "intermediate", readMinutes: 9, featured: true,
    translations: { en: tradeBalanceEnglish, ar: tradeBalanceArabic },
    relatedSlugs: ["inflation", "exchange-rate", "sector-subsidies"],
  },
  {
    slug: "inflation", category: "economy", updatedAt: "2026-08-02", difficulty: "intermediate", readMinutes: 12, featured: true,
    translations: { en: briefArticle("Inflation", "Understand price pressure and the policy tools available to contain it.", "Why inflation rises", "Inflation reflects the balance between demand, supply, wages, imports, and monetary conditions. Diagnose the source before selecting a response.", "A balanced response", "Coordinate interest rates, public spending, supply investment, and targeted support. Aggressive action on only one lever can exchange inflation for recession or instability.") },
    relatedSlugs: ["trade-balance", "exchange-rate"],
  },
  {
    slug: "exchange-rate", category: "economy", updatedAt: "2026-08-02", difficulty: "advanced", readMinutes: 8, featured: true,
    translations: { en: briefArticle("Exchange Rate", "Protect currency value without sacrificing long-term national growth.", "What moves the currency", "Trade flows, confidence, interest rates, reserves, inflation, and political stability all influence currency demand.", "Defending stability", "Combine credible fiscal policy with reserve management and productive investment. A strong currency policy needs strong economic fundamentals.") },
    relatedSlugs: ["trade-balance", "inflation"],
  },
  {
    slug: "poverty", category: "economy", updatedAt: "2026-08-02", difficulty: "beginner", readMinutes: 10, featured: true,
    translations: { en: briefArticle("Poverty", "Coordinate wages, welfare, services, and growth to improve living standards.", "Understanding the drivers", "Employment, wages, prices, housing, education, and public services interact to determine household welfare.", "Building an effective program", "Combine targeted short-term relief with job creation and better services. Sustainable poverty reduction depends on productive opportunity.") },
    relatedSlugs: ["inflation", "sector-subsidies"],
  },
  {
    slug: "sector-subsidies", category: "trade", updatedAt: "2026-08-02", difficulty: "intermediate", readMinutes: 7, featured: true,
    translations: { en: briefArticle("Sector Subsidies", "Support strategic industries without creating permanent pressure on the budget.", "When subsidies work", "Support is most effective when it addresses a clear bottleneck, builds capability, and has measurable targets.", "Designing an exit", "Set a timeline and performance conditions from the start. A subsidy without an exit plan can protect inefficiency instead of building competitiveness.") },
    relatedSlugs: ["trade-balance", "energy-strategy"],
  },
  {
    slug: "energy-strategy", category: "trade", updatedAt: "2026-08-02", difficulty: "advanced", readMinutes: 11, featured: true,
    translations: { en: briefArticle("Energy Strategy", "Balance security, price, capacity, and transition across the national energy system.", "Map the system", "Start with demand, domestic resources, import exposure, grid capacity, and the reliability of each generation source.", "Build a resilient mix", "Diversify supply, invest ahead of demand, and retain enough dispatchable capacity to protect the economy during shocks.") },
    relatedSlugs: ["trade-balance", "sector-subsidies"],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);

export const getArticlesByCategory = (category: CategorySlug) =>
  articles.filter((article) => article.category === category);

export const getArticleTranslation = (article: Article, locale: Locale) =>
  article.translations[locale] ?? article.translations.en;
