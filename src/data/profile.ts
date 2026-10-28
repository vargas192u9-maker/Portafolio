export const profile = {
  name: "Gustavo Vargas",
  title: "Desarrollador de Software",
  location: "Chihuahua, Chihuahua, México",
  email: "vargas192u9@gmail.com",
  github: "https://github.com/vargas192u9-maker",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000",  cvPath: "/CV_Gustavo_Vargas.pdf",
  intro:
    "Transformo ideas en soluciones digitales. Me apasiona desarrollar aplicaciones web, aplicaciones Android y sistemas informáticos, combinando programación, creatividad y aprendizaje constante.",
  rotating: ["Desarrollo Web", "Aplicaciones Android", "Sistemas Informáticos", "Desarrollo de Software"],
  about: [
    "Soy Gustavo Vargas, técnico en Programación egresado del CETis No. 86 y actualmente estudiante de Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Chihuahua II.",
    "Me gusta programar y desarrollar soluciones digitales, especialmente aplicaciones web, aplicaciones Android y sistemas informáticos.",
    "A través de proyectos personales y académicos he aplicado mis conocimientos en programación, diseño de interfaces, manejo de datos e implementación de funcionalidades.",
    "Mi objetivo es integrarme al sector tecnológico, adquirir experiencia profesional y continuar desarrollando mis habilidades mediante nuevos retos y proyectos.",
  ],
  aboutCards: [
    { title: "Formación técnica", text: "Conocimientos de programación y desarrollo de software." },
    { title: "Proyectos reales", text: "Aplicaciones móviles, sitios web y sistemas informáticos." },
    { title: "Crecimiento profesional", text: "Interés en oportunidades laborales y aprendizaje continuo." },
  ],
  education: [
    { title: "Técnico en Programación", school: "CETis No. 86", status: "Concluido", text: "Formación técnica en programación, desarrollo de aplicaciones, bases de datos y resolución de problemas informáticos." },
    { title: "Ingeniería en Sistemas Computacionales", school: "Instituto Tecnológico de Chihuahua II", status: "Actualmente cursando", text: "Formación universitaria orientada a sistemas computacionales, programación y desarrollo de soluciones tecnológicas." },
  ],
  process: [
    { title: "Analizar", text: "Comprender necesidades y definir objetivos." },
    { title: "Diseñar", text: "Planificar la estructura y experiencia de usuario." },
    { title: "Desarrollar", text: "Implementar funcionalidades utilizando las tecnologías adecuadas." },
    { title: "Mejorar", text: "Probar, corregir errores y optimizar resultados." },
  ],
};
export const sections = [
  { id: "inicio", label: "Inicio" }, { id: "sobre-mi", label: "Sobre mí" }, { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades" }, { id: "formacion", label: "Formación" }, { id: "contacto", label: "Contacto" },
];
