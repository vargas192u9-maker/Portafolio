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
    screenshots: ["/projects/lexora/inicio.jpeg", "/projects/lexora/biblioteca.jpeg", "/projects/lexora/crear-historia.jpeg"],
    summary: "Aplicación móvil de biblioteca y lectura digital para importar, organizar y leer PDF y EPUB.",
    description: [
      "Lexora es una aplicación móvil de biblioteca y lectura digital diseñada para que los usuarios puedan disfrutar sus libros de manera personalizada.",
      "Permite importar y organizar archivos PDF y EPUB, buscar documentos, continuar la lectura desde el punto donde se dejó y guardar anotaciones e ideas importantes.",
    ],
    features: ["Importación de PDF y EPUB", "Biblioteca digital", "Organización de libros", "Búsqueda de documentos", "Continuación de lectura", "Personalización de la experiencia", "Anotaciones", "Autenticación con Google"],
    problem: "Reunir en una sola aplicación la biblioteca personal de documentos y libros digitales, con lectura continua y anotaciones.",
    objectives: ["Importar y organizar documentos PDF y EPUB", "Permitir retomar la lectura donde se dejó", "Guardar anotaciones e ideas importantes"],
    participation: ["Desarrollé la aplicación móvil de biblioteca y lectura digital.", "Implementé la continuación de lectura, la personalización de la experiencia y el guardado de anotaciones.", "Integré el inicio de sesión con Google y el almacenamiento de datos con SQL."],
    challenges: ["Recuperar la extracción y visualización correcta del texto de las historias, manteniendo una lectura fluida.", "Mostrar el formato del contenido sin revelar las etiquetas HTML."],
    solutions: ["Ajusté el tratamiento del contenido para conservar el formato de las historias y evitar que las etiquetas HTML aparezcan en pantalla."],
    learnings: ["Aprendí a proteger los datos, conservar las funciones importantes de la aplicación y probar cada cambio para asegurar que la lectura siga funcionando correctamente."],
  },
  {
    slug: "noellas-floral", name: "Nöella's Floral", category: "Desarrollo Web", label: "Desarrollo Web", status: "Finalizado y publicado",
    tech: ["HTML", "CSS", "JavaScript"], site: "https://noellasfloral.com",
    screenshots: ["/projects/noellas-floral/inicio.png", "/projects/noellas-floral/catalogo.png", "/projects/noellas-floral/nosotros.png"],
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
    challenges: ["Crear un catálogo web dinámico y funcional sin depender de un backend complejo, garantizando una navegación fluida y un flujo de compra rápido desde el navegador hasta la confirmación del pedido."],
    solutions: ["Desarrollé el sitio en HTML, CSS y JavaScript, ejecutado en un entorno Node.js. Integré la generación automática de folios basados en la fecha y plantillas dinámicas de texto para enviar el pedido estructurado directamente a WhatsApp."],
    learnings: ["Profundicé en el despliegue de sitios web, el manejo de variables dinámicas en el frontend y la optimización de la conversión entre cliente y negocio mediante herramientas de mensajería directa."],
  },
  {
    slug: "balance", name: "Balance", category: "Desarrollo Web", label: "Finanzas personales · Gestión del tiempo", status: "Publicado",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Almacenamiento local"],
    site: "https://balance-local-alpha.vercel.app/",
    summary: "Aplicación web para organizar finanzas personales y tiempo. Incluye ingresos y gastos, apartados, cronómetro, gráficas y respaldos locales.",
    description: [
      "Balance reúne la organización del dinero y del tiempo en una misma interfaz. Permite registrar ingresos y gastos en pesos mexicanos, consultar resúmenes mensuales y reservar parte del saldo en apartados para distintos propósitos.",
      "Su módulo de tiempo permite registrar actividades manualmente o con cronómetro, consultar la distribución diaria y semanal y calcular el tiempo libre a partir de las horas de sueño y los compromisos fijos.",
      "También genera avisos basados en los registros y muestra cuánto representa un gasto en horas según el valor por hora configurado.",
      "La versión publicada funciona sin crear una cuenta. Los registros se almacenan localmente en el navegador. Desde Configuración se pueden descargar y restaurar respaldos para conservar la información o trasladarla a otro dispositivo.",
    ],
    features: [
      "Registro, edición y eliminación de ingresos y gastos por categoría y fecha",
      "Dashboard financiero con indicadores y gráficas",
      "Apartados para reservar dinero y devolverlo al saldo disponible",
      "Registro de actividades manual y con cronómetro",
      "Visualización diaria y semanal del uso del tiempo",
      "Cálculo del tiempo libre a partir del sueño y los compromisos fijos",
      "Avisos basados en los registros",
      "Comparación entre gastos y valor por hora",
      "Exportación de movimientos a CSV y respaldos completos en JSON",
      "Uso sin cuenta con almacenamiento local en el navegador",
      "Interfaz adaptable a distintos tamaños de pantalla",
    ],
    problem: "Balance aborda la organización conjunta de las finanzas personales y el tiempo. Reúne el control de ingresos, gastos y apartados con el registro de actividades y la revisión del tiempo libre.",
    objectives: [
      "Registrar ingresos y gastos y consultar resúmenes mensuales",
      "Separar dinero en apartados según distintos propósitos",
      "Registrar actividades y revisar la distribución diaria y semanal del tiempo",
      "Conservar o trasladar la información mediante respaldos descargables y restaurables",
    ],
    participation: [
      "Desarrollé Balance como una aplicación web que combina finanzas personales y gestión del tiempo.",
      "La versión publicada funciona sin cuenta y almacena los registros localmente en el navegador del dispositivo.",
      "Preparé opciones para exportar movimientos a CSV y descargar o restaurar respaldos completos en JSON.",
    ],
    challenges: [
      "Reunir las funciones de finanzas y tiempo en una experiencia coherente y adaptable.",
      "Permitir que la persona conserve y traslade sus datos cuando la aplicación usa almacenamiento local.",
    ],
    solutions: [
      "Organicé los registros financieros, los apartados y las actividades dentro de una misma interfaz con vistas diarias, semanales y mensuales.",
      "Añadí exportación CSV y respaldo/restauración JSON desde Configuración para facilitar la portabilidad de la información.",
    ],
    learnings: [
      "Desarrollo de interfaces web con Next.js, React y TypeScript.",
      "Presentación de información financiera mediante gráficas con Recharts.",
      "Diseño de una aplicación local-first con funciones de respaldo y restauración.",
    ],
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
    challenges: ["Implementar un lector digital en Android Studio capaz de procesar e interpretar archivos PDF y EPUB, gestionar el renderizado del texto y el ajuste de márgenes, y responder a gestos de pantalla en tiempo real."],
    solutions: ["Desarrollé una arquitectura en Java con eventos táctiles para el zoom adaptativo, vistas condicionales para alternar modos de lectura y un motor de maquetación que ajusta el contenido al tamaño del dispositivo y permite cargar historias personalizadas."],
    learnings: ["Profundicé en el desarrollo nativo para Android, la gestión de memoria e hilos al cargar archivos pesados y el diseño de interfaces móviles enfocadas en la experiencia de usuario."],
  },
];
