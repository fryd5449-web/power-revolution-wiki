import type { PageDictionary } from "./types";
export const arPages = {
  header: { categories: "الفئات", search: "ابحث في الموسوعة", menu: "فتح التنقل", close: "إغلاق التنقل", language: "تغيير اللغة" },
  category: { eyebrow: "مجال معرفي", guidesAvailable: "أدلة متاحة", updated: "آخر تحديث", readGuide: "اقرأ الدليل", emptyTitle: "يجري إعداد هذا القسم", emptyDescription: "ستُضاف أدلة منظمة لهذه الفئة قريبًا. يمكنك استكشاف مجال معرفي آخر في الوقت الحالي.", allCategories: "جميع الفئات" },
  article: { backToCategory: "الرجوع إلى الفئة", contents: "محتويات الصفحة", lastUpdated: "آخر تحديث", difficulty: "المستوى", readTime: "مدة القراءة", minuteRead: "دقائق", related: "مقالات مرتبطة", fallbackNotice: "يُعرض هذا المقال بالإنجليزية مؤقتًا إلى حين اكتمال ترجمته.", difficultyLevels: { beginner: "مبتدئ", intermediate: "متوسط", advanced: "متقدم" } },
  notFound: { code: "404", eyebrow: "انقطع الاتصال", title: "هذه الصفحة خارج الخريطة المعروفة", description: "ربما نُقلت الصفحة المطلوبة أو تغير مسارها أو لم تُنشأ بعد.", home: "العودة للرئيسية", browse: "تصفح الفئات" },
} satisfies PageDictionary;
