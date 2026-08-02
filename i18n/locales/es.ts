import type { Dictionary } from "../types";

export const es = {
  nav: { home: "Inicio", guides: "Guías", economy: "Economía", politics: "Política", military: "Militar", diplomacy: "Diplomacia", community: "Comunidad" },
  accessibility: { openMenu: "Abrir menú de navegación", closeMenu: "Cerrar menú de navegación", language: "Cambiar idioma", search: "Buscar en la wiki" },
  header: { searchPlaceholder: "Buscar en la base de conocimiento…" },
  hero: {
    eyebrow: "Enciclopedia estratégica independiente", title: "La base de conocimiento definitiva de Power & Revolution",
    description: "Domina cada sistema, transforma cada nación y toma mejores decisiones con guías profundas para líderes nuevos y estrategas veteranos.",
    explore: "Explorar guías", browse: "Ver categorías", liveData: "Panorama estratégico", globalIndex: "Índice global",
    stability: "Estabilidad", growth: "Crecimiento", relations: "Relaciones", activeBriefings: "Informes activos",
  },
  categories: {
    eyebrow: "Áreas de conocimiento", title: "Domina todos los sistemas", description: "Avanza desde tus primeras decisiones hasta la alta estrategia con rutas especializadas.", explore: "Explorar tema",
    items: [
      { title: "Economía", description: "Presupuestos, inflación, impuestos, deuda y política monetaria." },
      { title: "Política", description: "Elecciones, reformas, popularidad, leyes y estabilidad interna." },
      { title: "Militar", description: "Planificación de fuerzas, doctrina, adquisiciones y operaciones." },
      { title: "Diplomacia", description: "Alianzas, tratados, influencia y relaciones internacionales." },
      { title: "Comercio e industria", description: "Producción, importaciones, exportaciones y sectores estratégicos." },
      { title: "Guías para principiantes", description: "Fundamentos claros para tu primera administración exitosa." },
      { title: "Estrategias avanzadas", description: "Sistemas profundos, optimización y planificación a largo plazo." },
      { title: "Países", description: "Perfiles, condiciones iniciales y desafíos de cada país." },
    ],
  },
  featured: {
    eyebrow: "Selección editorial", title: "Guías destacadas", description: "Los sistemas que deciden si un gobierno prospera o fracasa.", viewAll: "Ver todas las guías", readGuide: "Leer guía",
    items: [
      { title: "Balanza comercial", description: "Convierte la presión importadora en fortaleza exportadora.", meta: "Economía · 9 min" },
      { title: "Inflación", description: "Comprende los precios y las políticas que los contienen.", meta: "Economía · 12 min" },
      { title: "Tipo de cambio", description: "Protege la moneda sin sacrificar el crecimiento nacional.", meta: "Finanzas · 8 min" },
      { title: "Pobreza", description: "Coordina salarios, bienestar y crecimiento para mejorar vidas.", meta: "Sociedad · 10 min" },
      { title: "Subsidios sectoriales", description: "Apoya industrias estratégicas sin romper el presupuesto.", meta: "Industria · 7 min" },
      { title: "Estrategia energética", description: "Equilibra seguridad, coste, capacidad y transición.", meta: "Infraestructura · 11 min" },
    ],
  },
  latest: {
    eyebrow: "Mesa de inteligencia", title: "Últimos artículos", description: "Nuevos análisis, mecánicas actualizadas y estrategia práctica.", readArticle: "Leer artículo",
    items: [
      { category: "Política", title: "Construir apoyo público duradero", excerpt: "Un marco de reformas que supera los ciclos de popularidad.", date: "Actualizado recientemente" },
      { category: "Diplomacia", title: "Influencia regional sin escalada", excerpt: "Comercio, ayuda y alianzas para ampliar influencia con control.", date: "Actualizado recientemente" },
      { category: "Militar", title: "Diseñar una fuerza sostenible", excerpt: "Ajusta preparación, compras y doctrina al presupuesto real.", date: "Actualizado recientemente" },
    ],
  },
  world: {
    eyebrow: "Mesa de países", title: "Explora el mundo",
    description: "Descubre cómo distintas condiciones iniciales moldean políticas, recursos y estrategias a largo plazo.",
    mapLabel: "Índice global de países", profilePreview: "Vista previa del perfil",
    countries: [
      { name: "República de Norland", region: "Coalición del Norte" },
      { name: "Federación de Valmere", region: "Zona comercial occidental" },
      { name: "Asteria", region: "Bloque marítimo del Sur" },
    ],
  },
  stats: { title: "Una referencia estratégica en crecimiento", description: "Conocimiento estructurado para una comunidad global.", labels: ["Guías", "Categorías", "Idiomas", "Colaboradores"] },
  footer: {
    description: "Una base de conocimiento independiente creada por la comunidad global de Power & Revolution.", explore: "Explorar", resources: "Recursos", languages: "Idiomas", about: "Sobre el proyecto", contribute: "Colaborar", guidelines: "Normas editoriales", changelog: "Cambios", rights: "Power & Revolution Wiki. Conocimiento comunitario mantenido de forma independiente.", disclaimer: "Sin afiliación ni respaldo del editor o desarrollador del juego.",
  },
} satisfies Dictionary;
