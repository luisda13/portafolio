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
    },
    whatIDo: {
          sectionTitle: "Lo que hago",
          cards: [
            {
              id: "web",
              title: "Desarrollo Web",
              description: "Construcción de aplicaciones modernas y responsivas.",
              info: "Explora mi experiencia detallada en Desarrollo Web, incluyendo proyectos con tecnologías como Angular, Node.js, Next.js y SQL",
            },
            {
              id: "ia",
              title: "Inteligencia Artificial",
              description: "Modelos de IA aplicados a problemas del mundo real.",
              info: "Descubre los proyectos que he realizado con IA para la solución de problemas que existen en la vida real: desde la detección de patrones en imágenes hasta el análisis de datos.",
            },
            {
              id: "gamedev",
              title: "Desarrollo de Videojuegos",
              description: "Creador de Videojuegos Amateur apasionado por la creación y el desarrollo.",
              info: "Mira mi lado más creativo y apasionado con mi proyecto personal. La creación de mi primer videojuego. Aquí te mantendré informado de mis nuevos descubrimientos y avances.",
            }
          ]
        },
        experiences: {
              sectionTitle: "Experiencias Laborales",
              responsibilitie: "Responsabilidades",
              achievement: "Logros",
              years: "Años de Trayectoria",
              items: [
                {
                  id: "fullstack-proyects",
                  title: "Desarrollador Full Stack",
                  company: "Proyects & Systems LTDA",
                  date: "Marzo 2022 - Agosto 2023",
                  responsibilities: [
                    "Implementación de módulos en frontend (Angular) y backend (Node.js).",
                    "Desarrollo de formularios dinámicos y pruebas unitarias con Jest.",
                    "Mantenimiento de módulos legacy en PHP 7.",
                  ],
                  achievements: [
                    "Gestión eficiente de bases de datos relacionales en SQL.",
                    "Uso experto de Git para colaboración en equipo.",
                  ],
                },
                {
                  id: "intern-web-overten",
                  title: "Pasante en Desarrollo Web",
                  company: "OVERTENPRO S.A.S",
                  date: "Agosto 2025 - Octubre 2025",
                  responsibilities: [
                    "Mantenimiento de sitios web corporativos para clientes como Afenco y Ecofectiva.",
                    "Implementación de interfaces responsivas con tecnologías modernas.",
                  ],
                  achievements: [
                    "Optimización de rendimiento y posicionamiento SEO.",
                  ],
                },
                {
                  id: "intern-digital-castor",
                  title: "Pasante en Transformación Digital",
                  company: "Castor",
                  date: "Abril 2020 - Octubre 2020",
                  responsibilities: [
                    "Mantenimiento de sitio web institucional mediante WordPress.",
                    "Manejo de bases de datos con Clientify.",
                  ],
                  achievements: [
                    "Gestión de contenidos y actualización de estilos en blog corporativo.",
                  ],
                },
              ]
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
    },
    whatIDo: {
          sectionTitle: "What I Do",
          cards: [
            {
              id: "web",
              title: "Web Development",
              description: "Building modern and responsive applications.",
              info: "Explore my detailed experience in Web Development, including projects with technologies like Angular, Node.js, Next.js and SQL.",
            },
            {
              id: "ia",
              title: "Artificial Intelligence",
              description: "AI models applied to real-world problems.",
              info: "Discover the projects I have done with AI to solve real-life problems: from pattern detection in images to data analysis.",
            },
            {
              id: "gamedev",
              title: "Game Development",
              description: "Amateur Game Creator passionate about creation and development.",
              info: "See my most creative and passionate side with my personal project. The creation of my first video game. Here I will keep you informed of my new discoveries and progress.",
            }
          ]
        },
        experiences: {
              sectionTitle: "Work Experience",
              responsibilitie: "Responsibilities",
              achievement: "Achievements",
              years: "Years of experience",
              items: [
                {
                  id: "fullstack-proyects",
                  title: "Full Stack Developer",
                  company: "Proyects & Systems LTDA",
                  date: "March 2022 - August 2023",
                  responsibilities: [
                    "Implementation of modules in frontend (Angular) and backend (Node.js).",
                    "Development of dynamic forms and unit testing with Jest.",
                    "Maintenance of legacy modules in PHP 7.",
                  ],
                  achievements: [
                    "Efficient management of relational databases in SQL.",
                    "Expert use of Git for team collaboration.",
                  ],
                },
                {
                  id: "intern-web-overten",
                  title: "Web Development Intern",
                  company: "OVERTENPRO S.A.S",
                  date: "August 2025 - October 2025",
                  responsibilities: [
                    "Maintenance of corporate websites for clients such as Afenco and Ecofectiva.",
                    "Implementation of responsive interfaces with modern technologies.",
                  ],
                  achievements: [
                    "Performance optimization and SEO positioning.",
                  ],
                },
                {
                  id: "intern-digital-castor",
                  title: "Digital Transformation Intern",
                  company: "Castor",
                  date: "April 2020 - October 2020",
                  responsibilities: [
                    "Maintenance of institutional website using WordPress.",
                    "Management of databases with Clientify.",
                  ],
                  achievements: [
                    "Content management and style updates on corporate blog.",
                  ],
                },
              ]
            }
  },
};