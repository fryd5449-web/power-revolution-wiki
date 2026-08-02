import type { PageDictionary } from "./types";

export const esPages = {
  header: { categories: "Categorías", search: "Buscar en la wiki", menu: "Abrir navegación", close: "Cerrar navegación", language: "Cambiar idioma" },
  category: {
    eyebrow: "Área de conocimiento", guidesAvailable: "guías disponibles", updated: "Actualizado", readGuide: "Leer guía",
    emptyTitle: "Esta sección está en preparación", emptyDescription: "Pronto habrá guías estructuradas. Mientras tanto, explora otra área de conocimiento.",
    noResultsTitle: "No hay guías coincidentes", noResultsDescription: "Cambia la dificultad o el orden para mostrar más guías.", allCategories: "Todas las categorías",
    filterByDifficulty: "Filtrar por dificultad", allDifficulties: "Todos los niveles", sortBy: "Ordenar por", newest: "Más recientes", mostRead: "Más leídas", clearFilters: "Limpiar filtros",
  },
  article: {
    backToCategory: "Volver a la categoría", contents: "En esta página", lastUpdated: "Última actualización", difficulty: "Dificultad", readTime: "Tiempo de lectura", minuteRead: "min de lectura",
    related: "Artículos relacionados", fallbackNotice: "Este artículo se muestra en inglés mientras se prepara su traducción.", tags: "Temas", share: "Compartir guía", copied: "Enlace copiado", previous: "Guía anterior", next: "Guía siguiente",
    tip: "Consejo práctico", warning: "Advertencia", takeaway: "Idea clave", difficultyLevels: { beginner: "Principiante", intermediate: "Intermedio", advanced: "Avanzado" },
  },
  notFound: { code: "404", eyebrow: "Señal perdida", title: "Esta página está fuera del mapa conocido", description: "El informe solicitado puede haberse movido o todavía no existe.", home: "Volver al inicio", browse: "Ver categorías" },
} satisfies PageDictionary;
