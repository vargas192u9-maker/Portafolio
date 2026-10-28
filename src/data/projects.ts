export type Category = "Aplicaciones Android" | "Desarrollo Web" | "Sistemas Informáticos";
export type Project = {
  slug: string; name: string; category: Category; label: string; status: string; tech: string[];
  summary: string; description: string[]; features: string[]; problem: string; objectives: string[];
  participation: string[]; site?: string; repo?: string; screenshots?: string[];
  challenges?: string[]; solutions?: string[]; learnings?: string[];
};
export const filters: ("Todos" | Category)[] = ["Todos", "Aplicaciones Android", "Desarrollo Web", "Sistemas Informáticos"];

export const projects: Project[] = [
  {
    slug: "lexora", name: "Lexora", category: "Aplicaciones Android", label: "Aplicación Android", status: "Finalizado",
    tech: ["Java", "XML", "SQL", "Autenticación con Google"],
    summary: "Aplicación móvil de biblioteca y lectura digital para importar, organizar y leer PDF y EPUB.",
    description: [
      "Lexora es una aplicación móvil de biblioteca y lectura digital diseñada para que los usuarios puedan disfrutar sus libros de manera personalizada.",
      "Permite importar y organizar archivos PDF y EPUB, buscar documentos, continuar la lectura desde el punto donde se dejó y guardar anotaciones e ideas importantes.",
    ],
    features: ["Importación de PDF y EPUB", "Biblioteca digital", "Organización de libros", "Búsqueda de documentos", "Continuación de lectura", "Personalización de la experiencia", "Anotaciones", "Autenticación con Google"],
    problem: "Reunir en una sola aplicación la biblioteca personal de documentos y libros digitales, con lectura continua y anotaciones.",
    objectives: ["Importar y organizar documentos PDF y EPUB", "Permitir retomar la lectura donde se dejó", "Guardar anotaciones e ideas importantes"],
    participation: ["Desarrollé la aplicación móvil de biblioteca y lectura digital.", "Implementé la continuación de lectura, la personalización de la experiencia y el guardado de anotaciones.", "Integré el inicio de sesión con Google y el almacenamiento de datos con SQL."],
  },
  {
    slug: "noellas-floral", name: "Nöella's Floral", category: "Desarrollo Web", label: "Desarrollo Web", status: "Finalizado y publicado",
    tech: ["HTML", "CSS", "JavaScript"], site: "https://noellasfloral.com",
    summary: "Sitio web y catálogo digital para una florería boutique de Chihuahua, publicado en línea.",
    description: [
      "Nöella's Floral es un sitio web y catálogo digital desarrollado para una florería boutique ubicada en Chihuahua.",
      "La plataforma permite explorar arreglos florales hechos a mano, consultar detalles de productos y facilitar solicitudes de pedidos para regalos, entregas a domicilio y ocasiones especiales.",
      "Su diseño busca transmitir una identidad romántica, elegante y accesible desde diferentes dispositivos.",
    ],
    features: ["Catálogo digital", "Presentación de arreglos florales", "Información de productos", "Diseño responsivo", "Navegación intuitiva", "Facilidades para solicitar pedidos"],
    problem: "Dar a una florería boutique un espacio en línea para mostrar sus arreglos y recibir solicitudes de pedidos.",
    objectives: ["Presentar los arreglos florales en un catálogo digital", "Facilitar la solicitud de pedidos", "Transmitir una identidad romántica y elegante en cualquier dispositivo"],
    participation: ["Desarrollé el sitio web y catálogo digital; es un proyecto real, publicado y en línea.", "Diseñé una experiencia para explorar arreglos florales, consultar sus detalles y facilitar la solicitud de pedidos."],
  },
  {
    slug: "mailbox", name: "MailBox", category: "Sistemas Informáticos", label: "Sistema web · Proyecto académico", status: "Finalizado, no publicado",
    tech: ["PHP", "SQL", "JavaScript", "HTML", "CSS"],
    summary: "Buzón escolar anónimo que canaliza quejas y sugerencias al departamento correspondiente.",
    description: [
      "MailBox es un sistema web de buzón escolar anónimo diseñado para mejorar la comunicación entre estudiantes y departamentos institucionales.",
      "Permite que los alumnos envíen quejas, sugerencias y comentarios sin revelar su identidad, canalizando cada mensaje únicamente al departamento correspondiente.",
      "Incluye un chatbot integrado para orientar a los usuarios y facilitar su interacción con la plataforma.",
    ],
    features: ["Envío anónimo de mensajes", "Clasificación por departamentos", "Canalización de reportes", "Gestión de mensajes", "Chatbot integrado", "Interfaz para estudiantes", "Panel para personal autorizado"],
    problem: "Mejorar la comunicación entre estudiantes y departamentos institucionales, permitiendo opinar sin revelar la identidad.",
    objectives: ["Permitir mensajes anónimos", "Enviar cada mensaje solo al departamento correspondiente", "Orientar al usuario con un chatbot"],
    participation: ["Desarrollé un sistema de buzón escolar anónimo para quejas, sugerencias y comentarios.", "Canalicé los mensajes exclusivamente a los departamentos correspondientes e incluí un chatbot de orientación.", "Construí interfaces diferenciadas para estudiantes y personal autorizado."],
  },
];
