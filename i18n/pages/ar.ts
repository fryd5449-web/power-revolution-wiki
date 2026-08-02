import type { PageDictionary } from "./types";

export const arPages = {
  header: { categories: "الأقسام", search: "ابحث في الموسوعة", menu: "فتح قائمة التنقل", close: "إغلاق قائمة التنقل", language: "تغيير اللغة" },
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
