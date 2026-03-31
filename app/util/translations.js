import {
  Code, Database, Cpu, Globe, Palette, Cloud
} from "lucide-react";

export const translations = {
  es: {
    home: "Inicio",
    knowledge: "Conocimientos",
    networks: "Redes",
    changeLanguage: "Cambiar Idioma",
    profession: "Ingeniero de Software",
    knowledgeSection: "Mis Conocimientos",
    knowledgeList: [
      {
        id: 'frontend',
        icon: Code,
        name: "Desarrollo Frontend",
        level: "Avanzado",
        experience: "2-3 años",
        description: "Especialista en la creación de interfaces dinámicas y responsivas utilizando Angular (v14) y TypeScript. Experto en el desarrollo de formularios dinámicos y pruebas unitarias con Jest.",
        examples: [
          "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
          "https://github.com/luisda13/franquicias-api",
        ],
      },
      {
        id: 'db',
        icon: Database,
        name: "Bases de datos",
        level: "Intermedio",
        experience: "2 años",
        description: "Gestión y diseño de bases de datos relacionales con SQL Server y MySQL. Optimización de consultas para backend en Node.js y mantenimiento de sistemas legados",
        examples: ["https://github.com/tuusuario/db-example"],
      },
      {
        id: 'backend',
        icon: Cpu,
        name: "Desarrollo Backend",
        level: "Avanzado",
        experience: "2 años",
        description: "Construcción de APIs robustas y escalables utilizando Node.js. Experiencia en el mantenimiento de aplicaciones empresariales en PHP 7 y automatización de procesos.",
        examples: [],
      },
      {
        id: 'solutions',
        icon: Globe,
        name: "Soluciones Web & CMS",
        level: "Intermedio",
        experience: "1 año",
        description: "Despliegue y mantenimiento de sitios corporativos mediante WordPress. Implementación de estrategias SEO, optimización de rendimiento y manejo de CRM como Clientify.",
        examples: ["https://github.com/luisda13/portafolio"],
      },
      {
        id: 'ia',
        icon: Palette,
        name: "IA Aplicada",
        level: "En formación (Básico/Intermedio)",
        experience: "< 1 año (Estudios actuales)",
        description: "Actualmente cursando posgrado en IA Aplicada. Conocimientos en implementación de modelos de IA y automatización inteligente de flujos de trabajo.",
        examples: ["https://github.com/luisda13/portafolio"],
      },
      {
        id: 'qa',
        icon: Cloud,
        name: "QA & Testing",
        level: "Intermedio",
        experience: "2 años",
        description: "Aseguramiento de la calidad de software mediante pruebas unitarias con Jest y automatización de pruebas de interfaz con Selenium.",
        examples: [],
      },
    ],
    about: {
      title: "Sobre mí",
      description: "Hola, soy Luis Daniel, ingeniero de software apasionado por el desarrollo web...",
      levelLabel: "Nivel",
      experienceLabel: "Experiencia",
      examplesLabel: "Ejemplos"
    }
  },

  en: {
    home: "Home",
    knowledge: "Knowledge",
    networks: "Networks",
    changeLanguage: "Change Language",
    profession: "Software Engineer",
    knowledgeSection: "Knowledge Section",
    knowledgeList: [
      {
        id: 'frontend',
        icon: Code,
        name: "Frontend Development",
        level: "Advanced",
        experience: "2-3 years",
        description: "Specialist in creating dynamic and responsive interfaces using Angular (v14) and TypeScript. Expert in developing dynamic forms and unit testing with Jest.",
        examples: [
          "https://github.com/luisda13/portafolio/commit/be2a0281ac442d49e271267073fcc2f3c4828c60",
          "https://github.com/luisda13/franquicias-api",
        ]
      },
      {
        id: 'db',
        icon: Database,
        name: "Databases",
        level: "Intermediate",
        experience: "2 years",
        description: "Management and design of relational databases with SQL Server and MySQL. Query optimization for Node.js backend and legacy system maintenance.",
        examples: ["https://github.com/tuusuario/db-example"]
      },
      {
        id: 'backend',
        icon: Cpu,
        name: "Backend Development",
        level: "Advanced",
        experience: "2 years",
        description: "Building robust and scalable APIs using Node.js. Experience in maintaining enterprise applications in PHP 7 and process automation.",
        examples: []
      },
      {
        id: 'solutions',
        icon: Globe,
        name: "Web Solutions & CMS",
        level: "Intermediate",
        experience: "1 year",
        description: "Deployment and maintenance of corporate websites via WordPress. Implementation of SEO strategies, performance optimization, and CRM management like Clientify.",
        examples: ["https://github.com/luisda13/portafolio"]
      },
      {
        id: 'ai',
        icon: Palette,
        name: "Applied AI",
        level: "In training (Basic/Intermediate)",
        experience: "< 1 year (Current studies)",
        description: "Currently pursuing a postgraduate degree in Applied AI. Knowledge in AI model implementation and intelligent workflow automation.",
        examples: ["https://github.com/luisda13/portafolio"]
      },
      {
        id: 'qa',
        icon: Cloud,
        name: "QA & Testing",
        level: "Intermediate",
        experience: "2 years",
        description: "Software quality assurance through unit testing with Jest and interface test automation with Selenium.",
        examples: []
      }
    ],
    about: {
      title: "About me",
      description: "Hi, I'm Luis Daniel, a software engineer passionate about web development...",
      levelLabel: "Level",
      experienceLabel: "Experience",
      examplesLabel: "Examples"
    }
  },
};