/* =========================================================
   i18n.js — Cambio de idioma EN / ES
   El texto en inglés se toma del propio HTML.
   Aquí solo se escribe la versión en español.
   Debe cargarse ANTES que script.js.
   ========================================================= */

const TITLE_EN = document.title;
const TITLE_ES = "Daniel Muñoz — Ingeniero Multimedia y Desarrollador Creativo";

let lang = "en";
try {
    lang = localStorage.getItem("lang") || "en";
} catch (e) { /* sin almacenamiento: se queda en inglés */ }


/* ---------------------------------------------------------
   TEXTOS FIJOS DE LA PÁGINA: [selector CSS, texto en español]
   --------------------------------------------------------- */

const ES = [
    // Navegación
    ['.main-nav a:nth-of-type(1)', 'Sobre mí'],
    ['.main-nav a:nth-of-type(2)', 'Especialidades'],
    ['.main-nav a:nth-of-type(3)', 'Proyectos'],
    ['.main-nav a:nth-of-type(4)', 'Audio y Video'],
    ['.main-nav a:nth-of-type(5)', 'Herramientas'],
    ['.nav-contact', 'Hablemos <span>↗</span>'],

    // Hero
    ['.eyebrow', '<span class="status-dot"></span> INGENIERÍA MULTIMEDIA · TECNOLOGÍA CREATIVA'],
    ['.hero h1', 'Ideas convertidas en<br><span class="gradient-text">experiencias digitales.</span>'],
    ['#lede-text', 'Soy <b>Daniel Muñoz</b>, ingeniero multimedia en formación. Construyo '],
    ['.hero-actions .button-primary', 'Ver mi trabajo <span>↘</span>'],
    ['.hero-actions .button-quiet', 'Ver hoja de vida <span>↗</span>'],
    ['.hero-meta div:nth-child(1) .meta-label', 'ENFOQUE'],
    ['.hero-meta div:nth-child(2) .meta-label', 'IDIOMAS'],
    ['.hero-meta div:nth-child(2) strong', 'Español · Inglés C2'],
    ['.scroll-cue', '<span></span> DESLIZA PARA EXPLORAR'],
    ['.visual-caption', 'DISEÑO × CÓDIGO × MEDIOS'],
    ['.chip-top', '<span class="chip-icon">⌘</span> Desarrollador creativo'],
    ['.chip-bottom', '<span class="sound-bars"><i></i><i></i><i></i><i></i><i></i></span> Construyendo con curiosidad'],

    // Estadísticas
    ['.stats div:nth-child(1) span', 'proyectos destacados'],
    ['.stats div:nth-child(2) span', 'disciplinas creativas'],
    ['.stats div:nth-child(3) span', 'inglés'],
    ['.stats div:nth-child(4) span', 'de la idea al producto final'],

    // Sobre mí
    ['#about .section-kicker', '01 / SOBRE MÍ'],
    ['#about h2', 'Una disciplina.<br><span class="muted-heading">Muchas formas de crear.</span>'],
    ['#about .body-copy:nth-of-type(1)', 'Estudio Ingeniería Multimedia y estoy construyendo un perfil versátil en desarrollo de software, experiencias interactivas y producción digital. Disfruto convertir ideas en experiencias claras y atractivas, desde el primer boceto de interfaz hasta la implementación final.'],
    ['#about .body-copy:nth-of-type(2)', 'Mi enfoque combina pensamiento analítico con creatividad, curiosidad y disposición para aprender las herramientas que cada proyecto necesita.'],
    ['#about .text-link', 'Más sobre trabajar juntos <span>↗</span>'],
    ['.profile-card-footer span:last-child', 'Ingeniería Multimedia'],

    // Expertise
    ['#expertise .section-kicker', '02 / QUÉ HAGO'],
    ['#expertise h2', 'Áreas de <span class="gradient-text">exploración.</span>'],
    ['#expertise .section-heading-row p', 'Un conjunto multidisciplinario de herramientas para crear productos digitales útiles, expresivos e interactivos.'],
    ['.expertise-card:nth-child(1) h3', 'Desarrollo Web'],
    ['.expertise-card:nth-child(1) p', 'Interfaces responsivas con HTML, CSS, JavaScript y React, conectadas a backends reales.'],
    ['.expertise-card:nth-child(2) h3', 'Unity e Interactivo'],
    ['.expertise-card:nth-child(2) p', 'Jugabilidad, sistemas de interacción y experiencias inmersivas de AR/VR. Más de 15 proyectos en Unity.'],
    ['.expertise-card:nth-child(3) h3', 'Diseño UI / UX'],
    ['.expertise-card:nth-child(3) p', 'Interfaces, flujos y prototipos diseñados pensando en la usabilidad y luego implementados.'],
    ['.expertise-card:nth-child(4) h3', 'Producción de Audio'],
    ['.expertise-card:nth-child(4) p', 'Edición, mezcla y diseño sonoro, incluyendo audio integrado en trabajos interactivos y visuales.'],
    ['.expertise-card:nth-child(5) h3', 'Video, Motion y 3D'],
    ['.expertise-card:nth-child(5) p', 'Edición de video, motion graphics y modelado 3D para piezas audiovisuales pulidas.'],
    ['.expertise-card:nth-child(6) h3', 'Bases de Datos y Backend'],
    ['.expertise-card:nth-child(6) p', 'Bases de datos relacionales y APIs REST con autenticación y arquitectura basada en servicios.'],

    // Proyectos
    ['#work .section-kicker', '03 / TRABAJO SELECCIONADO'],
    ['#work h2', 'Proyectos que vale la pena <span class="gradient-text">explorar.</span>'],
    ['#work .section-heading-row p', 'Una selección de trabajos académicos y personales. Se agregarán más proyectos a medida que el portafolio crezca.'],
    ['.filter-button[data-filter="all"]', 'Todos los proyectos'],
    ['.filter-button[data-filter="web"]', 'Web y Redes'],
    ['.filter-button[data-filter="unity"]', 'Unity y XR'],
    ['.filter-button[data-filter="design"]', 'UI/UX y 3D'],

    // Audio & Video
    ['#multimedia .section-kicker', '04 / AUDIOVISUAL'],
    ['#multimedia h2', 'Sonido, movimiento<br><span class="gradient-text">e historias visuales.</span>'],
    ['#multimedia .section-heading-row p', 'Producción de audio, diseño sonoro, edición de video y trabajo de motion. Dale play.'],

    // Herramientas
    ['#toolkit .section-kicker', '05 / HERRAMIENTAS'],
    ['#toolkit h2', 'Herramientas con las que <span class="gradient-text">trabajo.</span>'],
    ['#toolkit .section-heading-row p', 'Una colección creciente de tecnologías y herramientas creativas usadas en mis proyectos.'],
    ['.toolkit-group:nth-child(1) h3', 'Desarrollo'],
    ['.toolkit-group:nth-child(2) h3', 'Diseño e Interactivo'],
    ['.toolkit-group:nth-child(3) h3', 'Audio y Video'],
    ['.toolkit-group:nth-child(4) h3', 'Idiomas'],
    ['.language-row:nth-of-type(1) span', 'Español'],
    ['.language-row:nth-of-type(1) strong', 'Nativo'],
    ['.language-row:nth-of-type(2) span', 'Inglés'],

    // Contacto y footer
    ['#contact .section-kicker', '06 / CONTACTO'],
    ['#contact h2', '¿Tienes un proyecto<br>en <span class="gradient-text">mente?</span>'],
    ['.contact-inner > p', 'Estoy abierto a oportunidades, colaboraciones y conversaciones sobre tecnología creativa.'],
    ['#email-link', 'Hablemos <span>↗</span>'],
    ['footer > span:last-child', 'Diseñado con curiosidad e intención.']
];


/* ---------------------------------------------------------
   FRASES DEL EFECTO DE ESCRITURA (hero)
   --------------------------------------------------------- */

const PHRASES = {
    en: [
        "web experiences that feel alive.",
        "Unity worlds you can step into.",
        "interfaces people enjoy using.",
        "sound that makes it all hit harder."
    ],
    es: [
        "experiencias web que se sienten vivas.",
        "mundos en Unity a los que puedes entrar.",
        "interfaces que da gusto usar.",
        "sonido que hace que todo golpee más fuerte."
    ]
};

function getPhrases() {
    return PHRASES[lang];
}


/* ---------------------------------------------------------
   TEXTOS DE LA INTERFAZ GENERADOS POR JS
   --------------------------------------------------------- */

const UI = {
    en: { role: "My role:", empty: "Media file not added yet",         video: "▶  VIDEO / MOTION" },
    es: { role: "Mi rol:",  empty: "Aún no se ha agregado el archivo", video: "▶  VIDEO / MOVIMIENTO" }
};


/* ---------------------------------------------------------
   PROYECTOS EN ESPAÑOL
   La clave es el título en inglés del arreglo "projects"
   de script.js. Si cambias un título allá, cámbialo aquí.
   --------------------------------------------------------- */

const projectsES = {
    "La Casa de los Recuerdos": {
        projectDate: "Abril–mayo de 2026",
        label: "Juego de terror psicológico",
        team: "Proyecto en equipo",
        description: "Un juego de terror psicológico sobre dos personajes, Lumen y Vyre, que exploran una casa donde los espacios y los recuerdos cuentan la historia. Cuatro niveles principales, dos pasillos de persecución, cinemáticas y créditos.",
        role: "Construcción de niveles (tutorial, persecución, nivel 3), mecánicas con luz, doble salto, ataques cuerpo a cuerpo, sistema de linterna, coleccionables, puertas y armarios, cinemáticas, transiciones de escena, integración de audio, guion del teaser y lista de planos.",
        highlights: ["Desarrollé varios niveles jugables y secuencias de persecución", "Implementé mecánicas de linterna, iluminación y movimiento", "Integré coleccionables, puertas, armarios, audio y transiciones", "Trabajé en cinemáticas, introducción, outro y planificación del teaser"]
    },
    "Halloween VR — DarkDiary": {
        projectDate: "Octubre de 2025",
        label: "Experiencia de terror en VR",
        team: "Proyecto en equipo",
        description: "Una experiencia de terror en VR: una fantasma persigue al jugador por un bosque oscuro mientras busca tres objetos. Una cámara es la única forma de detectarla y ella se vuelve más rápida con cada objeto encontrado.",
        role: "Lógica de persecución siguiendo al jugador con OpenXR, recolección de tres objetos, detección con cámara y mecánicas de luz, dificultad progresiva, paneles de interfaz, introducción narrativa y jumpscare.",
        highlights: ["Implementé el comportamiento de persecución de la fantasma hacia el jugador en VR", "Desarrollé la recolección de tres objetos y el aumento progresivo de velocidad", "Añadí la detección de la fantasma mediante cámara y las interacciones con la luz", "Participé en la introducción narrativa, los paneles de interfaz y el jumpscare"]
    },
    "Inside Your Mind": {
        projectDate: "Septiembre–noviembre de 2026",
        label: "VR · Salud y aprendizaje",
        team: "Proyecto en equipo",
        description: "Una jornada universitaria en VR donde las decisiones de alimentación afectan la claridad, la energía y la memoria, y que termina con la retroalimentación de una enfermera virtual. Creado por el equipo Visual Orbit.",
        role: "Minijuego de memorama con interferencia cognitiva, minijuego estilo Simon “Sinapsis”, escenas de login y ranking, almacenamiento de datos en JSON, lógica de la enfermera, investigación de usabilidad con Thinking Aloud, estudio de viabilidad y storyboard en Figma.",
        highlights: ["Desarrollé el memorama de ocho cartas y sus scripts de interacción", "Diseñé la interferencia cognitiva y el minijuego Sinapsis, tipo Simon Says", "Desarrollé las escenas de login y ranking, el manejo de JSON y la lógica de la enfermera", "Participé en las pruebas Thinking Aloud, el estudio de viabilidad y el storyboard en Figma"]
    },
    "Museo Ancestral": {
        projectDate: "Septiembre–noviembre de 2026",
        label: "Realidad aumentada · Narrativa",
        team: "Proyecto en equipo",
        description: "Un museo en AR sobre mitos y leyendas colombianas: pines interactivos, un personaje guía, diálogos, cuestionarios y un sistema de insignias que recompensa el progreso.",
        role: "Desarrollo junto con Mariana Parra: movimiento del guía, pines interactivos agrupados por leyenda, diálogos, lógica de cuestionarios, insignias y progresión, todo integrado en una sola experiencia.",
        highlights: ["Desarrollamos el movimiento del personaje guía y el flujo de interacciones", "Implementamos pines interactivos organizados por mito y leyenda", "Conectamos los diálogos, las preguntas y la lógica de respuestas", "Construimos los sistemas de insignias y progreso en conjunto"]
    },
    "Hospital VR": {
        projectDate: "6–24 de noviembre de 2025",
        label: "VR · Simulación",
        team: "Proyecto en equipo",
        description: "Una simulación de limpieza y mantenimiento hospitalario en VR con clasificación de residuos, limpieza de superficies y finales alternos según se cumplan los objetivos.",
        role: "Preparación del entorno y búsqueda de assets, lógica de interacción VR, mecánica de recoger y depositar objetos, integración de actividades y sistema de finales positivo y negativo.",
        highlights: ["Organicé el entorno virtual del hospital y busqué recursos gráficos", "Participé en la lógica de interacción VR y en el depósito de objetos", "Ayudé a integrar las actividades de limpieza y su flujo de finalización", "Participé en el sistema de finales alternativos"]
    },
    "The Baggy's Rush": {
        projectDate: "26 de agosto–septiembre de 2025 · Actualizaciones: septiembre–noviembre de 2026",
        label: "Juego de aventura",
        team: "Proyecto en equipo",
        description: "Un juego de aventura protagonizado por una maleta inteligente que debe recorrer distintos entornos y recuperar las pertenencias de su dueño contra el reloj.",
        role: "Mecánica principal de recolección, temporizador y power-ups que suman tiempo, lógica de progresión, manejo de datos en JSON y sistema de ranking de jugadores.",
        highlights: ["Implementé la mecánica principal para recoger los objetos", "Desarrollé el temporizador y los power-ups que amplían el tiempo disponible", "Gestioné datos de progresión mediante JSON", "Diseñé e implementé el sistema de ranking de jugadores"]
    },
    "AgroRed S.A.": {
        label: "Redes · Intranet web",
        team: "Proyecto en equipo",
        description: "Una solución tecnológica para una empresa agroindustrial ficticia que conecta sedes en Valle del Cauca, Medellín, Bogotá y Cali, con página web principal e intranet.",
        role: "Documentación de red (topologías físicas y lógicas, inventario de dispositivos), subnetting VLSM, DHCP, enrutamiento estático, NAT/PAT, verificación de conectividad, además del index web y el panel de la intranet.",
        highlights: ["Documenté las topologías físicas y lógicas y el inventario de dispositivos", "Planifiqué el direccionamiento IP con VLSM y la configuración DHCP", "Trabajé con enrutamiento estático, NAT/PAT y pruebas de conectividad", "Contribuí a la página principal y al panel de intranet"]
    },
    "Smart City - Uao en tus manos": {
        projectDate: "Agosto–noviembre de 2026",
        label: "Mapa interactivo · 3D",
        team: "Proyecto en equipo",
        description: "Un mapa interactivo de la ciudad dividido por comunas, con estatuillas ubicadas en cada sector para representar su identidad.",
        role: "Concepto original, organización del proyecto, desarrollo de modelos junto al equipo, menús de instrucciones e interfaces.",
        highlights: ["Propuse el concepto del mapa interactivo organizado por comunas", "Planteé ubicar estatuillas representativas en cada comuna", "Apoyé la organización del proyecto y su enfoque de desarrollo", "Diseñé algunas interfaces y menús de instrucciones"]
    },
    "Figma UI/UX Work": {
        title: "Trabajos de UI/UX en Figma",
        label: "Diseño de interfaces · Prototipado",
        team: "Proyecto en equipo",
        description: "Propuestas de interfaz, estructuras de navegación y storyboards para proyectos multimedia.",
        role: "Diseño de interfaces, flujos de navegación, storyboards, prototipado y el storyboard inicial de Inside Your Mind.",
        highlights: ["Creé distribuciones de interfaz y estructuras de navegación", "Trabajé en storyboards y prototipos iniciales", "Desarrollé el storyboard inicial de Inside Your Mind"]
    },
    "3D Modeling — Blender": {
        title: "Modelado 3D — Blender",
        label: "Modelado 3D · Entornos",
        team: "Proyecto individual",
        description: "Trabajo 3D personal: una figura de Kirby, una Nintendo 3DS, un torii japonés y un diorama de inspiración japonesa, con materiales, iluminación y renders propios.",
        role: "Todo: modelado, materiales, iluminación, composición y renderizado.",
        highlights: ["Modelé una figura de Kirby y una Nintendo 3DS", "Creé un torii japonés y un diorama inspirado en Japón", "Trabajé materiales, iluminación, composición y renders finales"]
    },
    "3D Horror Animation": {
        title: "Animación 3D de terror",
        label: "Animación 3D · Terror",
        team: "Proyecto individual",
        description: "Una animación 3D de terror construida alrededor de la atmósfera, la composición de escenas y la narrativa visual.",
        role: "Todo: diseño de escena, iluminación, animación y renderizado."
    }
};


/* ---------------------------------------------------------
   AUDIO Y VIDEO EN ESPAÑOL (clave = título en inglés)
   --------------------------------------------------------- */

const mediaES = {
    "Audio production showcase": {
        title: "Muestra de producción de audio",
        description: "Muestra de diseño sonoro, edición y mezcla. Agrega tu archivo en assets/multimedia/."
    },
    "3D horror animation": {
        title: "Animación 3D de terror",
        description: "Animación 3D de terror hecha en Blender. Agrega aquí tu archivo de video."
    }
};


/* ---------------------------------------------------------
   FUNCIONES QUE USA script.js
   --------------------------------------------------------- */

function localizeProject(project) {
    return {
        ...project,
        ...(lang === "es" ? projectsES[project.title] : {}),
        roleLabel: UI[lang].role
    };
}

function localizeMedia(item) {
    return {
        ...item,
        ...(lang === "es" ? mediaES[item.title] : {}),
        empty: UI[lang].empty,
        videoLabel: UI[lang].video
    };
}


/* ---------------------------------------------------------
   CAMBIO DE IDIOMA
   --------------------------------------------------------- */

function applyLanguage(next) {
    lang = next;

    try {
        localStorage.setItem("lang", lang);
    } catch (e) { /* ignorar */ }

    document.documentElement.lang = lang;
    document.title = lang === "es" ? TITLE_ES : TITLE_EN;

    // Textos fijos: guarda el original en inglés la primera vez
    ES.forEach(([selector, spanish]) => {
        document.querySelectorAll(selector).forEach(el => {
            if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
            el.innerHTML = lang === "es" ? spanish : el.dataset.en;
        });
    });

    // Botón: muestra el idioma al que vas a cambiar
    const button = document.querySelector("#lang-toggle");
    button.textContent = lang === "es" ? "EN" : "ES";
    button.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");

    // Contenido generado por script.js (solo si ya se ejecutó)
    if (typeof renderProjects === "function") {
        renderProjects(document.querySelector(".filter-button.active").dataset.filter);
        renderMedia();
        pi = 0;
        ci = 0;
        del = false;
    }
}

document.querySelector("#lang-toggle").addEventListener("click", () => {
    applyLanguage(lang === "en" ? "es" : "en");
});

applyLanguage(lang);
