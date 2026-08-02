import type { PageDictionary } from "./types";

export const esPages = {
  header: { categories: "Categorías", search: "Buscar en la wiki", menu: "Abrir navegación", close: "Cerrar navegación", language: "Cambiar idioma" },
  search: {
    openSearch: "Abrir búsqueda", closeSearch: "Cerrar búsqueda", dialogTitle: "Buscar en la base de conocimiento", placeholder: "Buscar guías, temas o estrategias…", shortcutHint: "Ctrl + K",
    startTyping: "Empieza a escribir", quickDescription: "Busca en títulos, categorías, etiquetas y el contenido completo de las guías.", minimumCharacters: "Escribe al menos 2 caracteres", popularSearches: "Búsquedas populares", quickResultCount: "{count} resultados", noQuickResults: "No se encontraron resultados", noQuickResultsDescription: "Prueba otra palabra o elige una categoría sugerida.", viewAllResults: "Ver todos los resultados", resultsTitle: "Resultados de búsqueda", resultsFor: "Resultados para", resultCount: "{count} resultados",
    categoryFilter: "Categoría", allCategories: "Todas las categorías", difficultyFilter: "Dificultad", allDifficulties: "Todos los niveles", sortBy: "Ordenar por", relevance: "Relevancia", newest: "Más recientes",
    noResultsTitle: "No encontramos información coincidente", noResultsDescription: "Prueba un término más amplio, revisa la ortografía o explora una categoría sugerida.", suggestions: "Prueba a buscar", suggestedCategories: "Explorar categorías cercanas",
    fallbackBadge: "Inglés", fallbackNotice: "Este resultado usa contenido en inglés mientras se prepara su traducción.", clearSearch: "Borrar búsqueda", navigateHint: "Navegar", openHint: "Abrir",
  },
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
