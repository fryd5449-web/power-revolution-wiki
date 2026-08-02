import type { Locale } from "@/i18n/types";
import type { CategorySlug } from "./categories";

export type Difficulty = "beginner" | "intermediate" | "advanced";
export type ContentBoxKind = "tip" | "warning" | "takeaway";

export type ArticleContentBox = {
  kind: ContentBoxKind;
  title: string;
  content: string;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  box?: ArticleContentBox;
};

export type ArticleTranslation = {
  title: string;
  description: string;
  sections: ArticleSection[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  difficulty: Difficulty;
  readingTime: number;
  updatedAt: string;
  featuredImage: string;
  tags: string[];
  relatedArticles: string[];
  popularity: number;
  featured: boolean;
  translations: Partial<Record<Locale, ArticleTranslation>> & { en: ArticleTranslation };
};

const tradeBalanceEnglish: ArticleTranslation = {
  title: "Trade Balance",
  description: "A complete field guide to diagnosing imports, exports, industrial capacity, contracts, and the policies that shape a country's external balance.",
  sections: [
    {
      id: "what-is-the-trade-balance",
      title: "What is the trade balance?",
      paragraphs: [
        "The trade balance is the difference between the value of goods and services a country exports and the value it imports over a given period. Exports bring external demand and foreign currency into the economy, while imports satisfy needs that domestic producers cannot meet competitively or at sufficient scale.",
        "In Power & Revolution, the headline number is a diagnostic signal rather than a score to maximize. A healthy position depends on what the country buys and sells, why those flows exist, and whether they support a sustainable development strategy.",
      ],
      box: { kind: "takeaway", title: "Key takeaway", content: "Read the trade balance together with industrial output, energy dependence, inflation, currency stability, and employment." },
    },
    {
      id: "imports-and-exports",
      title: "Imports and exports",
      paragraphs: [
        "Imports include consumer products, food, fuel, raw materials, machinery, and intermediate components. Some imports reduce domestic production, but others make domestic production possible. A factory may depend on imported equipment today while creating export capacity tomorrow.",
        "Exports reflect both available production and foreign demand. Competitive prices, reliable infrastructure, trade access, product quality, and currency conditions determine whether domestic firms can convert capacity into international sales.",
      ],
      bullets: ["Separate essential inputs from discretionary imports.", "Identify which export sectors generate the most value and employment.", "Track volumes as well as monetary values; price changes can distort the headline figure."],
      box: { kind: "tip", title: "Analyst tip", content: "Inspect individual sectors before changing national policy. The same deficit can require completely different responses." },
    },
    {
      id: "surplus-vs-deficit",
      title: "Trade surplus vs trade deficit",
      paragraphs: [
        "A trade surplus occurs when exports exceed imports. It can strengthen reserves and support the currency, but an extreme surplus may also reflect weak domestic demand or insufficient investment. A trade deficit occurs when imports exceed exports. It can be manageable when it finances productive expansion and dangerous when it funds persistent consumption without new capacity.",
        "The direction of travel matters. A temporary deficit caused by machinery purchases is different from a widening structural deficit caused by falling competitiveness, energy dependence, or uncontrolled consumption.",
      ],
      box: { kind: "warning", title: "Do not chase the headline", content: "Reducing imports indiscriminately can improve the balance while creating shortages, inflation, and weaker industrial growth." },
    },
    {
      id: "why-it-matters",
      title: "Why the trade balance matters",
      paragraphs: [
        "Persistent external imbalances can influence the exchange rate, foreign reserves, government financing costs, employment, and political stability. If a country must continually acquire foreign currency to pay for essential imports, it becomes more exposed to market pressure and diplomatic shocks.",
        "A stronger and more diversified export base gives policymakers room to respond to crises. It also reduces the risk that a single commodity price or trading partner determines the entire economic outlook.",
      ],
    },
    {
      id: "persistent-deficit-causes",
      title: "Common causes of a persistent deficit",
      paragraphs: ["A structural deficit usually has several causes working together. Treating only the most visible symptom rarely produces a durable result."],
      bullets: ["Heavy dependence on imported energy, food, or manufactured goods.", "Low industrial productivity or unreliable infrastructure.", "A currency that makes imports cheap and exports expensive.", "Strong consumer demand without matching domestic supply.", "Weak market access, product quality, or export logistics.", "Large public or private projects that depend on foreign equipment."],
    },
    {
      id: "domestic-production",
      title: "How domestic production affects imports",
      paragraphs: [
        "Expanding domestic production can replace imports when local firms can supply the same need at an acceptable price and quality. The policy works best in sectors with stable demand, available skills, dependable energy, and realistic access to inputs.",
        "Import substitution is not automatic. New factories may initially raise imports because they require machinery, components, and raw materials. Judge the policy across several quarters and confirm that local output eventually replaces finished imports or creates new exports.",
      ],
      box: { kind: "tip", title: "Build the chain", content: "Support electricity, transport, skills, and suppliers alongside the headline factory investment." },
    },
    {
      id: "raw-vs-finished",
      title: "Raw materials vs finished products",
      paragraphs: [
        "Exporting raw materials produces revenue but often captures less value than processing them domestically. Importing finished products can be expensive, yet importing selected raw materials may allow local industry to create higher-value goods for both domestic and foreign markets.",
        "Prioritize value chains where the country has a genuine advantage. Processing every resource locally can waste capital if the market, technology, energy, or workforce is not ready.",
      ],
    },
    {
      id: "contracts",
      title: "Contracts and their effects",
      paragraphs: [
        "International purchase and sales contracts can change trade flows quickly. Export contracts create demand for domestic production, while import contracts can secure critical supplies or deepen dependence. Read each contract in the context of capacity, price, duration, and logistics.",
        "Before signing a large export agreement, confirm that domestic supply can meet the commitment without causing shortages. Before signing an import agreement, determine whether it bridges a temporary gap or displaces a viable domestic sector.",
      ],
      box: { kind: "warning", title: "Capacity check", content: "An oversized export contract can divert essential goods from the home market and drive domestic prices upward." },
    },
    {
      id: "inflation-risks",
      title: "Inflation risks from industrial expansion",
      paragraphs: [
        "Rapid industrial expansion increases demand for labor, energy, construction, transport, and imported equipment. If supply cannot respond, wages and input prices may rise before the new factories produce useful output.",
        "Phase large programs, expand infrastructure first, and watch sector-level shortages. A slower sequence can deliver more real capacity than launching every project at once and forcing the economy into inflation and bottlenecks.",
      ],
    },
    {
      id: "diagnosis-checklist",
      title: "A practical diagnosis checklist",
      paragraphs: ["Use this sequence before choosing tariffs, subsidies, contracts, or currency measures."],
      bullets: ["Which three sectors create the largest import bill?", "Are those imports consumer goods, essential inputs, or capital equipment?", "Which export sectors have unused capacity?", "Is the currency amplifying the imbalance?", "Are energy, transport, skills, or finance limiting production?", "Will the proposed policy change prices or employment before it changes trade?", "What result should be visible after one, two, and four quarters?"],
      box: { kind: "takeaway", title: "Decision rule", content: "Choose the smallest targeted intervention that addresses the diagnosed bottleneck, then measure its side effects." },
    },
    {
      id: "beginner-strategy",
      title: "Beginner strategy",
      paragraphs: ["Start with stability and one manageable dependency. Avoid changing tariffs, subsidies, currency policy, and major investment simultaneously; doing so makes results difficult to interpret."],
      bullets: ["Protect energy and food supply first.", "Select one import-heavy sector with realistic domestic potential.", "Improve infrastructure and workforce capacity.", "Use limited support with a clear budget.", "Review production, prices, and imports before expanding the program."],
    },
    {
      id: "advanced-strategy",
      title: "Advanced strategy",
      paragraphs: [
        "Build a coordinated value-chain strategy. Combine targeted industrial investment, supplier development, research, trade diplomacy, logistics, and carefully timed contracts. Use the exchange rate and fiscal policy as stabilizers rather than substitutes for competitiveness.",
        "Diversify both products and destinations. A country that exports several sophisticated goods to multiple regions is more resilient than one that reports the same surplus from a single commodity.",
      ],
      box: { kind: "tip", title: "Advanced play", content: "Sequence capacity before demand: infrastructure, inputs, production, domestic resilience, and then large export commitments." },
    },
    {
      id: "common-mistakes",
      title: "Common mistakes",
      paragraphs: ["Most failed trade strategies improve one indicator while damaging the productive system beneath it."],
      bullets: ["Treating every deficit as an emergency.", "Blocking machinery and industrial inputs with consumer imports.", "Subsidizing too many sectors without targets or exit conditions.", "Signing contracts larger than available capacity.", "Ignoring the inflation created by simultaneous mega-projects.", "Expecting trade policy to work immediately.", "Measuring value without checking physical output, jobs, and productivity."],
      box: { kind: "takeaway", title: "Final takeaway", content: "A durable trade balance is the result of a competitive, diversified economy—not a single tariff, subsidy, or contract." },
    },
  ],
};

const tradeBalanceArabic: ArticleTranslation = {
  title: "الميزان التجاري",
  description: "دليل عملي متكامل لتشخيص الواردات والصادرات والقدرة الصناعية والعقود والسياسات التي تشكل التوازن الخارجي للدولة.",
  sections: [
    {
      id: "what-is-the-trade-balance",
      title: "ما الميزان التجاري؟",
      paragraphs: ["الميزان التجاري هو الفرق بين قيمة السلع والخدمات التي تصدرها الدولة وقيمة ما تستورده خلال فترة محددة. تجلب الصادرات طلبًا خارجيًا وعملات أجنبية إلى الاقتصاد، بينما تلبي الواردات احتياجات لا يستطيع المنتج المحلي توفيرها بكفاءة أو بحجم كافٍ.", "في Power & Revolution لا ينبغي التعامل مع الرقم الرئيسي بوصفه نتيجة يجب تعظيمها دائمًا، بل إشارة تشخيصية. فالوضع الصحي يعتمد على نوع ما تشتريه الدولة وتبيعه، وأسباب هذه التدفقات، ومدى خدمتها لاستراتيجية تنمية مستدامة."],
      box: { kind: "takeaway", title: "الخلاصة الأساسية", content: "اقرأ الميزان التجاري مع الإنتاج الصناعي والاعتماد على الطاقة والتضخم واستقرار العملة والتوظيف." },
    },
    {
      id: "imports-and-exports",
      title: "الواردات والصادرات",
      paragraphs: ["تشمل الواردات المنتجات الاستهلاكية والغذاء والوقود والمواد الخام والآلات والمكونات الوسيطة. قد تقلل بعض الواردات الإنتاج المحلي، لكن بعضها الآخر يجعل هذا الإنتاج ممكنًا؛ فقد يعتمد مصنع على معدات مستوردة اليوم ليبني قدرة تصديرية غدًا.", "تعكس الصادرات حجم الإنتاج المتاح والطلب الخارجي معًا. وتحدد الأسعار التنافسية والبنية التحتية الموثوقة والوصول إلى الأسواق وجودة المنتجات وظروف العملة قدرة الشركات المحلية على تحويل طاقتها إلى مبيعات دولية."],
      bullets: ["افصل المدخلات الأساسية عن الواردات الاختيارية.", "حدد قطاعات التصدير التي تولد أكبر قيمة وفرص عمل.", "راقب الكميات إلى جانب القيم النقدية لأن تغير الأسعار قد يشوه الرقم الرئيسي."],
      box: { kind: "tip", title: "نصيحة تحليلية", content: "افحص كل قطاع قبل تغيير السياسة الوطنية؛ فقد يحتاج العجز نفسه إلى استجابات مختلفة تمامًا." },
    },
    {
      id: "surplus-vs-deficit",
      title: "الفائض التجاري مقابل العجز التجاري",
      paragraphs: ["يحدث الفائض عندما تتجاوز الصادرات الواردات، وقد يدعم الاحتياطيات والعملة، لكن الفائض المفرط قد يعكس أيضًا ضعف الطلب المحلي أو نقص الاستثمار. ويحدث العجز عندما تتجاوز الواردات الصادرات؛ وقد يكون مقبولًا إذا موّل توسعًا منتجًا، وخطيرًا إذا موّل استهلاكًا مستمرًا بلا طاقة إنتاجية جديدة.", "اتجاه الحركة مهم. فالعجز المؤقت الناتج عن شراء الآلات يختلف عن عجز هيكلي متزايد سببه تراجع التنافسية أو الاعتماد على الطاقة أو الاستهلاك غير المنضبط."],
      box: { kind: "warning", title: "لا تطارد الرقم وحده", content: "خفض الواردات بلا تمييز قد يحسن الميزان لكنه يسبب نقصًا وتضخمًا ونموًا صناعيًا أضعف." },
    },
    {
      id: "why-it-matters",
      title: "لماذا يهم الميزان التجاري؟",
      paragraphs: ["قد تؤثر الاختلالات الخارجية المستمرة في سعر الصرف والاحتياطيات وتكلفة تمويل الحكومة والتوظيف والاستقرار السياسي. وإذا احتاجت الدولة باستمرار إلى العملة الأجنبية لدفع ثمن الواردات الأساسية أصبحت أكثر تعرضًا لضغوط الأسواق والصدمات الدبلوماسية.", "تمنح قاعدة التصدير الأقوى والأكثر تنوعًا صانع القرار مساحة أكبر للاستجابة للأزمات، وتقلل خطر تحكم سعر سلعة واحدة أو شريك تجاري واحد في النظرة الاقتصادية كلها."],
    },
    {
      id: "persistent-deficit-causes",
      title: "الأسباب الشائعة للعجز المستمر",
      paragraphs: ["ينتج العجز الهيكلي عادة من تفاعل عدة أسباب، ولذلك نادرًا ما تحقق معالجة العرض الأكثر وضوحًا نتيجة دائمة."],
      bullets: ["الاعتماد الكبير على الطاقة أو الغذاء أو السلع المصنعة المستوردة.", "ضعف الإنتاجية الصناعية أو البنية التحتية غير الموثوقة.", "عملة تجعل الواردات رخيصة والصادرات مرتفعة السعر.", "طلب استهلاكي قوي لا يقابله عرض محلي.", "ضعف الوصول إلى الأسواق أو الجودة أو خدمات التصدير اللوجستية.", "مشروعات عامة أو خاصة كبيرة تعتمد على معدات أجنبية."],
    },
    {
      id: "domestic-production",
      title: "كيف يؤثر الإنتاج المحلي في الواردات؟",
      paragraphs: ["يمكن لتوسيع الإنتاج المحلي أن يستبدل الواردات عندما تستطيع الشركات توفير الحاجة نفسها بسعر وجودة مقبولين. تنجح السياسة أكثر في القطاعات ذات الطلب المستقر والمهارات المتاحة والطاقة الموثوقة والمدخلات الواقعية.", "إحلال الواردات ليس فوريًا؛ فقد ترفع المصانع الجديدة الواردات أولًا بسبب حاجتها إلى الآلات والمكونات والمواد الخام. قيّم السياسة عبر عدة أرباع وتأكد من أن الإنتاج المحلي يستبدل السلع النهائية أو ينشئ صادرات جديدة."],
      box: { kind: "tip", title: "ابنِ السلسلة كاملة", content: "ادعم الكهرباء والنقل والمهارات والموردين إلى جانب الاستثمار الصناعي الرئيسي." },
    },
    {
      id: "raw-vs-finished",
      title: "المواد الخام مقابل المنتجات النهائية",
      paragraphs: ["يولد تصدير المواد الخام إيرادات، لكنه غالبًا يلتقط قيمة أقل من تصنيعها محليًا. وقد يكون استيراد السلع النهائية مكلفًا، بينما يسمح استيراد مواد خام مختارة للصناعة المحلية بصنع منتجات أعلى قيمة للسوقين المحلي والخارجي.", "ركز على سلاسل القيمة التي تملك فيها الدولة ميزة حقيقية. فتصنيع كل مورد محليًا قد يهدر رأس المال إذا لم يكن السوق أو التقنية أو الطاقة أو العمالة جاهزة."],
    },
    {
      id: "contracts",
      title: "العقود وتأثيراتها",
      paragraphs: ["يمكن لعقود الشراء والبيع الدولية تغيير التدفقات التجارية بسرعة. تنشئ عقود التصدير طلبًا على الإنتاج المحلي، بينما تؤمّن عقود الاستيراد الإمدادات الحرجة أو تعمق الاعتماد. اقرأ كل عقد في سياق القدرة والسعر والمدة والخدمات اللوجستية.", "قبل توقيع اتفاق تصدير كبير، تأكد من قدرة العرض المحلي على تلبية الالتزام من دون نقص. وقبل عقد استيراد، حدد هل يسد فجوة مؤقتة أم يزيح قطاعًا محليًا قابلًا للحياة."],
      box: { kind: "warning", title: "افحص القدرة", content: "قد يحول عقد تصدير أكبر من الطاقة المتاحة السلع الأساسية عن السوق المحلي ويرفع أسعارها." },
    },
    {
      id: "inflation-risks",
      title: "مخاطر التضخم الناتجة عن التوسع الصناعي",
      paragraphs: ["يرفع التوسع الصناعي السريع الطلب على العمالة والطاقة والبناء والنقل والمعدات المستوردة. وإذا لم يستجب العرض فقد ترتفع الأجور وتكاليف المدخلات قبل أن تنتج المصانع الجديدة سلعًا مفيدة.", "نفذ البرامج الكبيرة على مراحل، ووسّع البنية التحتية أولًا، وراقب الاختناقات القطاعية. قد يحقق التسلسل الأبطأ قدرة حقيقية أكبر من إطلاق كل المشروعات معًا ودفع الاقتصاد إلى التضخم."],
    },
    {
      id: "diagnosis-checklist",
      title: "قائمة تشخيص عملية",
      paragraphs: ["استخدم هذا التسلسل قبل اختيار الرسوم أو الدعم أو العقود أو إجراءات العملة."],
      bullets: ["ما القطاعات الثلاثة التي تصنع أكبر فاتورة استيراد؟", "هل هذه الواردات استهلاكية أم مدخلات أساسية أم معدات رأسمالية؟", "ما قطاعات التصدير التي تملك طاقة غير مستغلة؟", "هل تضخم العملة الاختلال؟", "هل تقيد الطاقة أو المواصلات أو المهارات أو التمويل الإنتاج؟", "هل تغير السياسة المقترحة الأسعار أو التوظيف قبل التجارة؟", "ما النتيجة المتوقعة بعد ربع وربعين وأربعة أرباع؟"],
      box: { kind: "takeaway", title: "قاعدة القرار", content: "اختر أصغر تدخل موجّه يعالج الاختناق المشخّص، ثم قِس آثاره الجانبية." },
    },
    {
      id: "beginner-strategy",
      title: "استراتيجية المبتدئ",
      paragraphs: ["ابدأ بالاستقرار ومعالجة نقطة اعتماد واحدة يمكن إدارتها. لا تغيّر الرسوم والدعم وسياسة العملة والاستثمار الكبير معًا، لأن ذلك يجعل قراءة النتائج صعبة."],
      bullets: ["احمِ إمدادات الطاقة والغذاء أولًا.", "اختر قطاعًا كثيف الاستيراد يملك فرصة محلية واقعية.", "حسن البنية التحتية وقدرات العمالة.", "استخدم دعمًا محدودًا بميزانية واضحة.", "راجع الإنتاج والأسعار والواردات قبل توسيع البرنامج."],
    },
    {
      id: "advanced-strategy",
      title: "الاستراتيجية المتقدمة",
      paragraphs: ["ابنِ استراتيجية منسقة لسلسلة القيمة تجمع الاستثمار الصناعي الموجه وتطوير الموردين والبحث والدبلوماسية التجارية والخدمات اللوجستية والعقود المدروسة. استخدم سعر الصرف والسياسة المالية لتحقيق الاستقرار لا بديلًا عن التنافسية.", "نوّع المنتجات والوجهات معًا. فالدولة التي تصدر سلعًا متطورة متعددة إلى مناطق مختلفة أكثر مرونة من دولة تحقق الفائض نفسه من سلعة واحدة."],
      box: { kind: "tip", title: "خطوة متقدمة", content: "رتّب القدرة قبل الطلب: البنية التحتية، ثم المدخلات، فالإنتاج، ثم مرونة السوق المحلي، وبعدها التزامات التصدير الكبيرة." },
    },
    {
      id: "common-mistakes",
      title: "الأخطاء الشائعة",
      paragraphs: ["تحسن أغلب الاستراتيجيات التجارية الفاشلة مؤشرًا واحدًا بينما تضر النظام الإنتاجي الذي يقف خلفه."],
      bullets: ["اعتبار كل عجز حالة طوارئ.", "منع الآلات والمدخلات الصناعية مع السلع الاستهلاكية.", "دعم قطاعات كثيرة بلا أهداف أو شروط خروج.", "توقيع عقود أكبر من القدرة المتاحة.", "تجاهل التضخم الناتج عن المشروعات العملاقة المتزامنة.", "توقع أثر فوري للسياسة التجارية.", "قياس القيمة من دون فحص الإنتاج الفعلي والوظائف والإنتاجية."],
      box: { kind: "takeaway", title: "الخلاصة النهائية", content: "الميزان التجاري المستدام نتيجة اقتصاد تنافسي متنوع، وليس نتيجة رسم أو دعم أو عقد واحد." },
    },
  ],
};

const briefArticle = (title: string, description: string, firstTitle: string, firstBody: string, secondTitle: string, secondBody: string): ArticleTranslation => ({
  title,
  description,
  sections: [
    { id: "overview", title: firstTitle, paragraphs: [firstBody] },
    { id: "strategy", title: secondTitle, paragraphs: [secondBody] },
  ],
});

const article = (
  slug: string,
  category: CategorySlug,
  difficulty: Difficulty,
  readingTime: number,
  popularity: number,
  translation: ArticleTranslation,
  relatedArticles: string[],
  tags: string[],
): Article => ({
  slug,
  title: translation.title,
  description: translation.description,
  category,
  difficulty,
  readingTime,
  updatedAt: "2026-08-02",
  featuredImage: "/images/hero-geopolitical.webp",
  tags,
  relatedArticles,
  popularity,
  featured: true,
  translations: { en: translation },
});

export const articles: Article[] = [
  {
    slug: "trade-balance",
    title: tradeBalanceEnglish.title,
    description: tradeBalanceEnglish.description,
    category: "economy",
    difficulty: "intermediate",
    readingTime: 18,
    updatedAt: "2026-08-02",
    featuredImage: "/images/hero-geopolitical.webp",
    tags: ["trade", "imports", "exports", "industry", "strategy"],
    relatedArticles: ["inflation", "exchange-rate", "sector-subsidies"],
    popularity: 98,
    featured: true,
    translations: { en: tradeBalanceEnglish, ar: tradeBalanceArabic },
  },
  article("inflation", "economy", "intermediate", 12, 92, briefArticle("Inflation", "Understand price pressure and the policy tools available to contain it.", "Why inflation rises", "Inflation reflects the balance between demand, supply, wages, imports, and monetary conditions. Diagnose the source before selecting a response.", "A balanced response", "Coordinate interest rates, public spending, supply investment, and targeted support. Aggressive action on only one lever can exchange inflation for recession or instability."), ["trade-balance", "exchange-rate"], ["inflation", "prices", "monetary policy"]),
  article("exchange-rate", "economy", "advanced", 8, 86, briefArticle("Exchange Rate", "Protect currency value without sacrificing long-term national growth.", "What moves the currency", "Trade flows, confidence, interest rates, reserves, inflation, and political stability all influence currency demand.", "Defending stability", "Combine credible fiscal policy with reserve management and productive investment. A strong currency policy needs strong economic fundamentals."), ["trade-balance", "inflation"], ["currency", "reserves", "markets"]),
  article("poverty", "economy", "beginner", 10, 80, briefArticle("Poverty", "Coordinate wages, welfare, services, and growth to improve living standards.", "Understanding the drivers", "Employment, wages, prices, housing, education, and public services interact to determine household welfare.", "Building an effective program", "Combine targeted short-term relief with job creation and better services. Sustainable poverty reduction depends on productive opportunity."), ["inflation", "sector-subsidies"], ["welfare", "employment", "living standards"]),
  article("sector-subsidies", "trade", "intermediate", 7, 78, briefArticle("Sector Subsidies", "Support strategic industries without creating permanent pressure on the budget.", "When subsidies work", "Support is most effective when it addresses a clear bottleneck, builds capability, and has measurable targets.", "Designing an exit", "Set a timeline and performance conditions from the start. A subsidy without an exit plan can protect inefficiency instead of building competitiveness."), ["trade-balance", "energy-strategy"], ["industry", "subsidies", "budget"]),
  article("energy-strategy", "trade", "advanced", 11, 83, briefArticle("Energy Strategy", "Balance security, price, capacity, and transition across the national energy system.", "Map the system", "Start with demand, domestic resources, import exposure, grid capacity, and the reliability of each generation source.", "Build a resilient mix", "Diversify supply, invest ahead of demand, and retain enough dispatchable capacity to protect the economy during shocks."), ["trade-balance", "sector-subsidies"], ["energy", "security", "industry"]),
];

export const getArticle = (slug: string) => articles.find((item) => item.slug === slug);
export const getArticlesByCategory = (category: CategorySlug) => articles.filter((item) => item.category === category);
export const getArticleTranslation = (item: Article, locale: Locale) => item.translations[locale] ?? item.translations.en;
