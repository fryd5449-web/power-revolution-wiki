import type { PageDictionary } from "./types";

export const arPages = {
  header: { categories: "الأقسام", search: "ابحث في الموسوعة", menu: "فتح قائمة التنقل", close: "إغلاق قائمة التنقل", language: "تغيير اللغة" },
  search: {
    openSearch: "فتح البحث", closeSearch: "إغلاق البحث", dialogTitle: "البحث في قاعدة المعرفة", placeholder: "ابحث عن دليل أو موضوع أو استراتيجية…", shortcutHint: "Ctrl + K",
    startTyping: "ابدأ الكتابة للبحث", quickDescription: "ابحث في العناوين والموضوعات والأقسام والكلمات المفتاحية ومحتوى الأدلة.", minimumCharacters: "اكتب حرفين على الأقل للبحث", popularSearches: "عمليات بحث شائعة", quickResultCount: "{count} نتيجة", noQuickResults: "لم يتم العثور على نتائج", noQuickResultsDescription: "جرّب كلمة مختلفة أو اختر أحد الأقسام المقترحة.", viewAllResults: "عرض جميع النتائج", resultsTitle: "نتائج البحث", resultsFor: "نتائج البحث عن", resultCount: "{count} نتيجة",
    categoryFilter: "القسم", allCategories: "جميع الأقسام", difficultyFilter: "المستوى", allDifficulties: "كل المستويات", sortBy: "الترتيب حسب", relevance: "الصلة", newest: "الأحدث",
    noResultsTitle: "لم نعثر على معلومات مطابقة", noResultsDescription: "جرّب كلمة أوسع أو تحقق من الكتابة أو استكشف أحد الأقسام المقترحة.", suggestions: "جرّب البحث عن", suggestedCategories: "استكشف أقسامًا قريبة",
    fallbackBadge: "إنجليزي", fallbackNotice: "تستخدم هذه النتيجة المحتوى الإنجليزي مؤقتًا إلى حين اكتمال ترجمتها.", clearSearch: "مسح البحث", navigateHint: "التنقل", openHint: "فتح",
  },
  category: {
    eyebrow: "مجال معرفي", guidesAvailable: "أدلة متاحة", updated: "آخر تحديث", readGuide: "اقرأ الدليل",
    emptyTitle: "يعمل فريق الإحاطة على إعداد هذا القسم", emptyDescription: "ستتوفر أدلة منظمة لهذا القسم قريبًا. يمكنك استكشاف مجال معرفي آخر في الوقت الحالي.",
    noResultsTitle: "لا توجد أدلة مطابقة", noResultsDescription: "غيّر مستوى الصعوبة أو خيار الترتيب لإظهار مزيد من الأدلة.", allCategories: "جميع الأقسام",
    filterByDifficulty: "تصفية حسب المستوى", allDifficulties: "كل المستويات", sortBy: "الترتيب حسب", newest: "الأحدث", mostRead: "الأكثر قراءة", clearFilters: "مسح الفلاتر",
  },
  article: {
    backToCategory: "العودة إلى القسم", contents: "في هذه الصفحة", lastUpdated: "آخر تحديث", difficulty: "المستوى", readTime: "مدة القراءة", minuteRead: "دقيقة قراءة",
    related: "مقالات مرتبطة", fallbackNotice: "يُعرض هذا المقال بالإنجليزية مؤقتًا إلى حين اكتمال ترجمته.", tags: "الموضوعات", share: "مشاركة الدليل", copied: "نُسخ الرابط", previous: "الدليل السابق", next: "الدليل التالي",
    tip: "نصيحة ميدانية", warning: "تنبيه", takeaway: "الخلاصة الأساسية", difficultyLevels: { beginner: "مبتدئ", intermediate: "متوسط", advanced: "متقدم" },
  },
  notFound: { code: "404", eyebrow: "انقطعت الإشارة", title: "هذه الصفحة خارج الخريطة المعروفة", description: "ربما نُقلت الإحاطة المطلوبة أو تغير مسارها أو لم تُنشأ بعد.", home: "العودة إلى الرئيسية", browse: "تصفح الأقسام" },
} satisfies PageDictionary;
