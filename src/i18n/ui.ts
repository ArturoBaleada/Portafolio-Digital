export const languages = {
  es: "ES",
  en: "EN",
} as const

export const defaultLang = "es" as const
export type Lang = keyof typeof languages

export const ui = {
  es: {
    // Nav
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    // Hero
    "hero.badge": "Disponible para trabajar",
    "hero.greeting": "¡Hola! Soy",
    "hero.role": "Desarrollador de Software & Especialista en Automatización e IA",
    "hero.experienceYears": "+4 años de experiencia",
    "hero.location": "de Honduras 🇭🇳",
    "hero.intro": "Especializado en arquitectura web end-to-end, plataformas Insurtech y soluciones escalables impulsadas por Inteligencia Artificial.",
    "hero.contactAria": "Redes sociales y contacto",
    "hero.cv": "Descargar CV",

    // CV
    "cv.spanish": "Español (PDF)",
    "cv.english": "Inglés (PDF)",

    // Sections
    "section.experience": "Experiencia laboral",
    "section.projects": "Proyectos destacados",
    "section.about": "Sobre mí",

    // Experience
    "experience.aria": "Experiencia laboral",
    "experience.more": "Saber más sobre",

    // Projects
    "projects.code": "Código",
    "projects.website": "Sitio Web",
    "projects.prev": "Imagen anterior",
    "projects.next": "Imagen siguiente",
    "projects.tag.ai": "IA & Automatización",
    "projects.tag.sql": "SQL & Bases de datos",

    // About Me
    "about.p1": "Soy <strong>Darby Arturo Rodríguez Navarro</strong>, Licenciado en Informática Administrativa por la <strong>UNAH</strong> y desarrollador especializado en ingeniería de software, arquitectura web y automatización con IA. Cuento con fluidez en inglés (<strong>nivel C1 Avanzado</strong>) y un enfoque pragmático orientado a resultados de negocio.",
    "about.p2": "En mi trayectoria he liderado implementaciones clave para sectores de alta exigencia: en <strong>Televicentro y Emisoras Unidas</strong> diseñé sistemas financieros críticos y logré <strong>optimizar la asignación y consulta de datos masivos (SQL Server, PostgreSQL, MongoDB)</strong> para más de 800 usuarios corporativos.",
    "about.p3": "Actualmente en <strong>Ingeniería Digital</strong> impulso la transformación digital y el sector Insurtech desarrollando plataformas como <em>Asegúrame</em> y marketplaces regionales como <em>Shopineoh</em> y <em>Patas.cr</em>. Además, diseño arquitecturas impulsadas por <strong>Inteligencia Artificial, creación de MCPs (Model Context Protocols)</strong> y automatización de flujos con n8n y GitHub.",
    // Footer
    "footer.rights": "Plantilla inspirada en",
    "footer.contact": "Contacto",

    // SEO
    "seo.title": "Porfolio de Darby Rodríguez - Desarrollador de Software & Especialista en IA y Automatización",
    "seo.description": "Desarrollador Full Stack & Especialista en Automatización e Inteligencia Artificial. +4 años de experiencia en arquitectura web, plataformas Insurtech, bases de datos masivas y Model Context Protocols (MCP).",
    "seo.locale": "es_HN",
  },
  en: {
    // Nav
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.about": "About me",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Available to work",
    "hero.greeting": "Hey! I'm",
    "hero.role": "Software Developer & Automation & AI Specialist",
    "hero.experienceYears": "+4 years of experience",
    "hero.location": "from Honduras 🇭🇳",
    "hero.intro": "Specialized in end-to-end web architecture, Insurtech platforms, and scalable AI-driven solutions.",
    "hero.contactAria": "Social media and contact",
    "hero.cv": "Download CV",

    // CV
    "cv.spanish": "Spanish (PDF)",
    "cv.english": "English (PDF)",

    // Sections
    "section.experience": "Work Experience",
    "section.projects": "Featured Projects",
    "section.about": "About Me",

    // Experience
    "experience.aria": "Work Experience",
    "experience.more": "Learn more about",

    // Projects
    "projects.code": "Code",
    "projects.website": "Website",
    "projects.prev": "Previous image",
    "projects.next": "Next image",
    "projects.tag.ai": "AI & Automation",
    "projects.tag.sql": "SQL & Databases",

    // About Me
    "about.p1": "I'm <strong>Darby Arturo Rodríguez Navarro</strong>, Bachelor's in Administrative Informatics from <strong>UNAH</strong> and a software developer specialized in software engineering, web architecture, and AI automation. I have full English proficiency (<strong>Advanced C1 Level</strong>) and a pragmatic approach focused on business results.",
    "about.p2": "Throughout my career I have led key implementations for high-demand environments: at <strong>Televicentro & Emisoras Unidas</strong> I designed critical financial systems and <strong>optimized data allocation and queries across massive databases (SQL Server, PostgreSQL, MongoDB)</strong> for more than 800 corporate users.",
    "about.p3": "Currently at <strong>Ingeniería Digital</strong>, I drive digital transformation and the Insurtech sector developing platforms such as <em>Asegúrame</em> and regional marketplaces like <em>Shopineoh</em> and <em>Patas.cr</em>. In addition, I design architectures powered by <strong>Artificial Intelligence, MCP (Model Context Protocols) creation</strong>, and workflow automation with n8n and GitHub.",
    // Footer
    "footer.rights": "Template inspired by",
    "footer.contact": "Contact",

    // SEO
    "seo.title": "Darby Rodríguez Portfolio - Software Developer & AI & Automation Specialist",
    "seo.description": "Full Stack Developer & Automation and Artificial Intelligence Specialist. +4 years of experience in web architecture, Insurtech platforms, massive databases, and Model Context Protocols (MCP).",
    "seo.locale": "en_US",
  },
} as const

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
