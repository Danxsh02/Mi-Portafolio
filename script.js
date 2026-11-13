/* =========================================================
   DANIEL MUÑOZ — PORTFOLIO · script.js

   ÍNDICE
   01. Datos: proyectos
   02. Datos: audio y video
   03. Datos personales
   04. Render de proyectos y media
   05. Filtros y menú móvil
   06. Foto de perfil
   07. Efectos (escritura, cursor, tarjetas, contadores, ondas)
   08. Detalles extra (movimiento y scroll) - Unificado desde polish.js

   Nota: i18n.js debe cargarse ANTES que este archivo
   (define getPhrases, localizeProject y localizeMedia).
   ========================================================= */


/* =========================================================
   01. DATOS: PROYECTOS
   category: "web" | "unity" | "design" | "ai"
   cover: ruta de la imagen de portada
   link: enlace al repositorio o demo ("" = sin botón)
   ========================================================= */

const projects = [
    {
        title: "La Casa de los Recuerdos",
        category: "unity",
        label: "Psychological horror game",
        team: "Team project",
        description: "A psychological horror game about two characters, Lumen and Vyre, exploring a house where spaces and memories tell the story. Four main levels, two chase corridors, cutscenes and credits.",
        role: "Level building (tutorial, chase levels, level 3), light-based mechanics, double jump, melee attacks, flashlight system, collectibles, doors and wardrobes, cinematics, scene transitions, audio integration, teaser script and shot list.",
        highlights: ["Developed several playable levels and chase sequences", "Implemented flashlight, lighting and movement mechanics", "Integrated collectibles, doors, wardrobes, audio and scene transitions", "Worked on cinematics, the intro, outro and teaser planning"],
        tools: "Unity · C# · URP · Input System",
        cover: "assets/projects/casa-recuerdos/La casa de los recuedos MENU.jpeg",
        coverClass: "unity",
        link: "",
        repoUrl: "https://github.com/Mar0921/Casa_de_los_recuerdos",
        liveUrl: "https://lcdlr-web.vercel.app/",
        projectDate: "April–May 2026",
        gallery: [
            {
                type: "image",
                src: "assets/projects/casa-recuerdos/Render Lumen.png",
                alt: "Render de personaje Lumen",
                caption: "Render del personaje Lumen"
            },
            {
                type: "image",
                src: "assets/projects/casa-recuerdos/Render Vyre.png",
                alt: "Render de personaje Vyre",
                caption: "Render del personaje Vyre"
            },
            {
                type: "image",
                src: "assets/projects/casa-recuerdos/batallaprevia.jpeg",
                alt: "Momentos antes de la batalla con la sombra",
                caption: "Nivel final, batalla con la sombra"
            },
            {
                type: "image",
                src: "assets/projects/casa-recuerdos/Vyre peleando.png",
                alt: "Vyre Peleando",
                caption: "Vyre, pegando un puñetazo"
            },
            {
                type: "image",
                src: "assets/projects/casa-recuerdos/Lumen en estrellas.jpeg",
                alt: "Lumen brillando",
                caption: "Lumen iluminado"
            },
            {
                type: "image",
                src: "assets/projects/casa-recuerdos/Intro.jpeg",
                alt: "Prota",
                caption: "Regreso a casa"
            },
            {
                type: "image",
                src: "assets/projects/casa-recuerdos/escena Recuerdo.jpeg",
                alt: "Escena recuerdo",
                caption: "Recuerdo de la infancia"
            }
        ]
    },
    {
        title: "Halloween VR — DarkDiary",
        category: "unity",
        label: "VR horror experience",
        team: "Team project",
        description: "A VR horror experience: a ghost hunts the player through a dark forest while they search for three objects. A camera is the only way to detect her, and she gets faster with every object found.",
        role: "Ghost chase logic tracking the player via OpenXR, three-object collection, camera detection and light mechanics, progressive difficulty, UI panels, story intro and jumpscare.",
        highlights: ["Implemented the ghost pursuit behavior for the VR player", "Created the three-object collection flow and progressive chase speed", "Added camera-based ghost detection and light interactions", "Contributed to the story introduction, interface panels and jumpscare"],
        tools: "Unity · C# · OpenXR",
        cover: "assets/projects/halloween-vr/HalloweenCover.png",
        coverClass: "unity",
        link: "",
        repoUrl: "https://github.com/tefDel/Halloween",
        liveUrl: "", projectDate: "October 2025",
        gallery: [
            {
                type: "image",
                src: "assets/projects/halloween-vr/Hallazgo en el bosque.png",
                alt: "Hallazgo en el bosque",
                caption: "Hallazgo en el bosque"
            }
        ]
    },
    {
        title: "Inside Your Mind",
        category: "unity",
        label: "VR · Health & learning",
        team: "Team project",
        description: "A VR university day where food choices affect clarity, energy and memory, ending with feedback from a virtual nurse. Built by team Visual Orbit.",
        role: "Memory-card minigame with cognitive interference, “Sinapsis” Simon-style minigame, login and ranking scenes, JSON data storage, nurse logic, Thinking Aloud usability research, feasibility study and Figma storyboard.",
        highlights: ["Built the eight-card memory game and its card interaction scripts", "Designed the cognitive-interference mechanic and the Sinapsis Simon-style minigame", "Developed login, ranking, JSON data handling and virtual nurse logic", "Contributed to Thinking Aloud testing, feasibility work and the Figma storyboard"],
        tools: "Unity · C# · JSON · Figma",
        cover: "assets/projects/inside-your-mind/Inside Your Mind Menu.png",
        coverClass: "unity",
        link: "",
        repoUrl: "https://github.com/josuegallego/VisualOrbit",
        liveUrl: "", projectDate: "September–November 2026",
        gallery: [
            {
                type: "image",
                src: "assets/projects/inside-your-mind/Opciones de comida.png",
                alt: "Opciones de comida",
                caption: "Opciones de comida"
            },
            {
                type: "image",
                src: "assets/projects/inside-your-mind/Muestra de neurona encendida.png",
                alt: "Muestra de neurona encendida",
                caption: "Neurona encendida"
            },
            {
                type: "image",
                src: "assets/projects/inside-your-mind/instrucciones1.png",
                alt: "instrucciones1",
                caption: "instrucciones 1"
            },
            {
                type: "image",
                src: "assets/projects/inside-your-mind/Instruncciones 2.png",
                alt: "Instruncciones 2",
                caption: "Instruncciones 2"
            },
            {
                type: "image",
                src: "assets/projects/inside-your-mind/Interfaz de barras.png",
                alt: "Interfaz de barras",
                caption: "Interfaz de barras"
            },
            {
                type: "image",
                src: "assets/projects/inside-your-mind/Memorama.png",
                alt: "Memorama",
                caption: "Memorama"
            }

        ]
    },
    {
        title: "Museo Ancestral",
        category: "unity",
        label: "Augmented reality · Storytelling",
        team: "Team project",
        description: "An AR museum for Colombian myths and legends: interactive pins, a guide character, dialogue, quizzes and a badge system that rewards progress.",
        role: "Co-developed with Mariana Parra: guide movement, interactive pins grouped by legend, dialogue, quiz logic, badges and progression, all tied into one experience.",
        highlights: ["Co-developed the guide character movement and interaction flow", "Implemented interactive pins organized by myth and legend", "Connected dialogue, quiz questions and answer logic", "Built the badge and progression systems with the development partner"],
        tools: "Unity · C# · AR",
        cover: "assets/projects/museo-ancestral/Ecos del territorio.jpg",
        coverClass: "unity",
        link: "",
        repoUrl: "https://github.com/Mar0921/RA---Museo-Ancestral",
        liveUrl: "", projectDate: "September–November 2026",
        gallery: []
    },
    {
        title: "Hospital VR",
        category: "unity",
        label: "VR · Simulation",
        team: "Team project",
        description: "A hospital cleaning and maintenance simulation in VR with waste sorting, surface cleaning and alternate endings depending on whether goals are met.",
        role: "Environment setup and asset sourcing, VR interaction logic, pick-up-and-dispose mechanic, activity integration and the good/bad ending system.",
        highlights: ["Organized the virtual hospital environment and sourced assets", "Contributed to VR interaction logic and object disposal", "Helped integrate the cleaning activities and completion flow", "Participated in the alternate ending system"],
        tools: "Unity · C# · VR",
        cover: "assets/projects/hospital-vr/Hospitalvrcover.png",
        coverClass: "unity",
        link: "",
        repoUrl: "https://github.com/josuegallego/VisualOrbit",
        liveUrl: "", projectDate: "November 6–24, 2025",
        gallery: []
    },
    {
        title: "The Baggy's Rush",
        category: "unity",
        label: "Adventure game",
        team: "Team project",
        description: "An adventure game starring a smart suitcase that must travel through different environments and recover its owner's belongings against the clock.",
        role: "Core collection mechanic, timer and time-extending power-ups, progression logic, JSON data handling and the player ranking system.",
        highlights: ["Implemented the main item-collection mechanic", "Developed the timer and power-ups that extend the available time", "Handled progression data with JSON", "Designed and implemented the player ranking system"],
        tools: "Unity · C# · JSON",
        cover: "assets/projects/baggys-rush/Menu principal Baggy's.jpeg",
        coverClass: "unity",
        link: "",
        repoUrl: "https://github.com/tefDel/The-Baggis-Rush",
        liveUrl: "", projectDate: "August 26–September 2025 · Updates: September–November 2026",
        gallery: []
    },
    {
        title: "AgroRed S.A.",
        category: "web",
        label: "Networking · Web intranet",
        team: "Team project",
        description: "A technology solution for a fictional agro-industrial company connecting offices in Valle del Cauca, Medellín, Bogotá and Cali, including a web home page and intranet.",
        role: "Network documentation (physical and logical topologies, device inventory), VLSM subnetting, DHCP, static routing, NAT/PAT, connectivity checks, plus the web index and intranet dashboard.",
        highlights: ["Documented physical and logical network topologies and device inventory", "Planned IP addressing with VLSM and configured DHCP", "Worked with static routing, NAT/PAT and connectivity verification", "Contributed to the web landing page and intranet dashboard"],
        tools: "Packet Tracer · Node.js · Express · MySQL · HTML/CSS",
        cover: "assets/projects/agrored/Agrored menu.png",
        coverClass: "web",
        link: ""
    },
    {
        title: "Smart City - Uao en tus manos",
        category: "design",
        label: "Interactive map · 3D",
        team: "Team project",
        description: "An interactive city map split by comunas, with statuettes placed in each sector to represent its identity.",
        role: "Original concept, project organization, model development with the team, instruction menus and interfaces.",
        highlights: ["Proposed the interactive map organized by city districts", "Defined the idea of placing representative statuettes by district", "Helped organize the project and its development approach", "Created selected interfaces and instruction menus"],
        tools: "Unity · Blender",
        cover: "assets/projects/smart-city/Smart City Cover.png",
        coverClass: "design",
        link: "",
        repoUrl: "https://github.com/idalizapata64-cmd/SmartCity",
        liveUrl: "", projectDate: "August–November 2026",
        gallery: []
    },
    {
        title: "Figma UI/UX Work",
        category: "design",
        label: "Interface design · Prototyping",
        team: "Team project",
        description: "Interface proposals, navigation structures and storyboards for multimedia projects.",
        role: "Interface layouts, navigation flows, storyboards, prototyping and the initial Inside Your Mind storyboard.",
        highlights: ["Created interface layouts and navigation structures", "Worked on storyboards and early-stage prototyping", "Developed the initial Inside Your Mind storyboard"],
        tools: "Figma",
        cover: "assets/projects/figma/figmacover.png",
        coverClass: "design",
        link: ""
    },
    {
        title: "3D Modeling — Blender",
        category: "design",
        label: "3D modeling · Environments",
        team: "Solo project",
        description: "Personal 3D work: a Kirby figure, a Nintendo 3DS, a Japanese torii and a Japanese-inspired diorama, with custom materials, lighting and renders.",
        role: "Everything: modeling, materials, lighting, composition and rendering.",
        highlights: ["Modeled a Kirby figure and a Nintendo 3DS", "Created a Japanese torii and a Japanese-inspired diorama", "Worked on materials, lighting, composition and final renders"],
        tools: "Blender",
        cover: "assets/projects/blender-3d/Blender 3D.png",
        coverClass: "design",
        link: ""
    }
];


/* =========================================================
   02. DATOS: AUDIO Y VIDEO
   type: "audio" | "video"
   src: ruta del archivo (ej. "assets/multimedia/demo.mp3")
   ========================================================= */

const mediaItems = [
    {
        title: "Audio production showcase",
        description: "Sound design, editing and mixing sample. Add your file to assets/multimedia/.",
        type: "audio",
        src: "",
        poster: ""
    },
    {
        title: "Gameplay de The Baggy's rush",
        description: "Porción del gameplay de The Baggy's rush Advergame",
        type: "video",
        src: "assets/multimedia/The Baggy's rush Advergame gameplay Editado.mp4",
        poster: "Porción del gameplay de The Baggy's rush Advergame"
    }
];


/* =========================================================
   03. DATOS PERSONALES
   ========================================================= */

const personal = {
    email: "Danimudel200502@gmail.com",
    github: "https://github.com/Danxsh02",
    linkedin: "https://www.linkedin.com/in/daniel-muñoz-delgado-04b90a362"
};

document.querySelectorAll("#email-link, #contact-email").forEach(link => {
    link.href = `mailto:${personal.email}`;
});
document.querySelector("#contact-email").textContent = personal.email;
document.querySelector("#github-link").href = personal.github;
document.querySelector("#linkedin-link").href = personal.linkedin;
document.querySelector("#year").textContent = new Date().getFullYear();


/* =========================================================
   04. RENDER DE PROYECTOS Y MEDIA
   (localizeProject y localizeMedia vienen de i18n.js)
   ========================================================= */

const projectGrid = document.querySelector("#projects-grid");
const mediaGrid = document.querySelector("#media-grid");

function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
}

function renderProjects(filter = "all") {
    const visible = projects
        .filter(project => filter === "all" || project.category === filter)
        .map(localizeProject);

    projectGrid.innerHTML = visible.map(project => {
        const projectIndex = projects.findIndex(item => item.title === project.title || (project.title === "Trabajos de UI/UX en Figma" && item.title === "Figma UI/UX Work") || (project.title === "Modelado 3D — Blender" && item.title === "3D Modeling — Blender"));
        return `
        <article class="project-card" data-project-index="${projectIndex}">
            <div class="project-cover ${escapeHTML(project.coverClass || "")}">
                <span class="cover-label">${escapeHTML(project.label)}</span>
                ${project.cover ? `<img class="cover-image" src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.title)}" onerror="this.remove()">` : `<span class="cover-placeholder-mark" aria-hidden="true">✳</span>`}
                <span class="cover-open-hint">${lang === "es" ? "Explorar proyecto ↗" : "Explore project ↗"}</span>
            </div>
            <div class="project-info">
                <div class="project-category">${escapeHTML(project.label)} · <b class="team-badge">${escapeHTML(project.team)}</b></div>
                <h3>${escapeHTML(project.title)}</h3>
                <p>${escapeHTML(project.description)}</p>
                <div class="project-footer">
                    <span class="project-tools">${escapeHTML(project.tools)}</span>
                    <div class="project-card-actions">
                      ${project.liveUrl ? `<a class="project-live-link" href="${escapeHTML(project.liveUrl)}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${lang === "es" ? "Sitio publicado" : "Live site"} ↗</a>` : ""}
                      <button class="project-open" type="button" data-open-project="${projectIndex}">${lang === "es" ? "Ver proyecto" : "View project"} <span>↗</span></button>
                    </div>
                </div>
            </div>
        </article>`;
    }).join("");
}

function renderMedia() {
    mediaGrid.innerHTML = mediaItems.map(localizeMedia).map(item => `
        <article class="media-card">
            <div class="media-placeholder">${item.type === "audio" ? `<div class="eq">${"<i></i>".repeat(28)}</div>` : item.videoLabel}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            ${item.type === "audio" && item.src ? `<audio controls preload="none" src="${item.src}"></audio>` : ""}
            ${item.type === "video" && item.src ? `<video controls preload="metadata" ${item.poster ? `poster="${item.poster}"` : ""} src="${item.src}"></video>` : ""}
            ${!item.src ? `<span class="project-tools">${item.empty}</span>` : ""}
        </article>
    `).join("");
}

renderProjects();
renderMedia();

/* =========================================================
   04B. FICHAS INTERACTIVAS DE PROYECTO
   ========================================================= */

const projectDialog = document.querySelector("#project-dialog");
const projectDialogContent = document.querySelector("#project-dialog-content");
const imageLightbox = document.querySelector("#image-lightbox");
const lightboxImage = imageLightbox.querySelector("img");
const lightboxClose = imageLightbox.querySelector(".gallery-lightbox-close");
let activeProjectIndex = 0;
let lastProjectTrigger = null;

function projectModalCopy() {
    return lang === "es" ? {
        eyebrow: "CASO DE ESTUDIO", overview: "Sobre el proyecto", contribution: "Mi participación",
        highlights: "Aportes principales", tools: "Herramientas", team: "Modalidad",
        close: "Cerrar", previous: "Proyecto anterior", next: "Siguiente proyecto",
        pending: "Imagen principal pendiente", pendingNote: "Esta sección se actualizará cuando se agregue la imagen del proyecto.",
        solo: "Proyecto individual", group: "Proyecto en equipo"
    } : {
        eyebrow: "PROJECT CASE STUDY", overview: "Project overview", contribution: "My contribution",
        highlights: "Key contributions", tools: "Tools & technologies", team: "Project type",
        close: "Close", previous: "Previous project", next: "Next project",
        pending: "Main image coming soon", pendingNote: "This section will be updated when the project image is added.",
        solo: "Individual project", group: "Team project"
    };
}

function openProject(index, trigger = null) {
    if (index < 0 || index >= projects.length) return;
    activeProjectIndex = index;
    lastProjectTrigger = trigger || document.activeElement;
    renderProjectDialog();
    projectDialog.showModal();
    document.body.classList.add("dialog-open");
    projectDialog.querySelector(".project-dialog-close").focus();
}

function renderProjectGallery(project) {
    const media = [...(project.gallery || [])];
    if (!media.length && project.cover) media.push({ type: "image", src: project.cover, alt: project.title });
    if (!media.length) return "";
    return `<section class="project-gallery-block"><div class="gallery-heading"><span>${lang === "es" ? "RECORRIDO VISUAL" : "VISUAL WALKTHROUGH"}</span><small>${media.length} ${lang === "es" ? "elemento(s)" : "item(s)"}</small></div><div class="project-gallery" data-gallery>${media.map((item, i) => item.type === "video" ? `<div class="gallery-video"><video controls preload="metadata" ${item.poster ? `poster="${escapeHTML(item.poster)}"` : ""} src="${escapeHTML(item.src)}"></video><span>${escapeHTML(item.caption || "Video")}</span></div>` : `<button type="button" class="gallery-image ${i === 0 ? "active" : ""}" data-gallery-image="${escapeHTML(item.src)}" aria-label="${lang === "es" ? "Ampliar imagen" : "Enlarge image"}"><img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt || project.title)}"><span>${escapeHTML(item.caption || (lang === "es" ? `Vista ${i + 1}` : `View ${i + 1}`))}</span></button>`).join("")}</div></section>`;
}

function renderProjectDialog() {
    const project = localizeProject(projects[activeProjectIndex]);
    const copy = projectModalCopy();
    const highlights = project.highlights || [];
    const cover = project.cover ? `<img src="${escapeHTML(project.cover)}" alt="${escapeHTML(project.title)}" onerror="this.parentElement.classList.add('is-missing'); this.remove();">` : "";
    const teamLabel = /solo|individual/i.test(project.team) ? copy.solo : copy.group;

    projectDialogContent.innerHTML = `
      <div class="project-dialog-content-switch">
        <div class="project-dialog-hero ${escapeHTML(project.coverClass || "")} ${project.cover ? "" : "is-missing"}">
            ${cover}
            <div class="dialog-hero-overlay"></div>
            <div class="dialog-hero-copy">
                <span class="dialog-eyebrow">${copy.eyebrow} / ${String(activeProjectIndex + 1).padStart(2, "0")}</span>
                <span class="dialog-project-label">${escapeHTML(project.label)}</span>
                <h2 id="project-dialog-title">${escapeHTML(project.title)}</h2>
            </div>
            <span class="dialog-missing-note">${copy.pending}</span>
        </div>
        <div class="project-dialog-body">
            <div class="dialog-meta-row">
                <span><small>${copy.team}</small><b>${escapeHTML(teamLabel)}</b></span>
                <span><small>${copy.tools}</small><b>${escapeHTML(project.tools)}</b></span>
                ${project.projectDate ? `<span><small>${lang === "es" ? "Fecha" : "Timeline"}</small><b>${escapeHTML(project.projectDate)}</b></span>` : ""}
            </div>
            ${renderProjectGallery(project)}
            ${(project.repoUrl || project.liveUrl) ? `<div class="dialog-actions">${project.repoUrl ? `<a class="dialog-action primary" href="${escapeHTML(project.repoUrl)}" target="_blank" rel="noopener noreferrer"><span class="action-icon github-mark" aria-hidden="true">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 .297a12 12 0 0 0-3.793 23.387c.6.113.82-.258.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.004 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.814 1.103.814 2.222v3.293c0 .322.216.694.825.576A12.001 12.001 0 0 0 12 .297"/>
    </svg>
</span>${lang === "es" ? "Ver repositorio en GitHub" : "View GitHub repository"}<b>↗</b></a>` : ""}${project.liveUrl ? `<a class="dialog-action secondary" href="${escapeHTML(project.liveUrl)}" target="_blank" rel="noopener noreferrer"><span class="action-icon">↗</span>${lang === "es" ? "Visitar proyecto publicado" : "Visit live project"}<b>↗</b></a>` : ""}</div>` : ""}
            <section class="dialog-section dialog-overview">
                <span class="dialog-section-index">01</span><div><h3>${copy.overview}</h3><p>${escapeHTML(project.description)}</p></div>
            </section>
            <section class="dialog-section">
                <span class="dialog-section-index">02</span><div><h3>${copy.contribution}</h3><p>${escapeHTML(project.role)}</p></div>
            </section>
            ${highlights.length ? `<section class="dialog-section"><span class="dialog-section-index">03</span><div><h3>${copy.highlights}</h3><ul class="dialog-highlights">${highlights.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div></section>` : ""}
            <div class="dialog-tool-tags">${project.tools.split("·").map(tool => `<span>${escapeHTML(tool.trim())}</span>`).join("")}</div>
            <div class="dialog-project-nav">
                <button type="button" class="dialog-prev" ${activeProjectIndex === 0 ? "disabled" : ""}>← ${copy.previous}</button>
                <span>${String(activeProjectIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}</span>
                <button type="button" class="dialog-next" ${activeProjectIndex === projects.length - 1 ? "disabled" : ""}>${copy.next} →</button>
            </div>
        </div>
      </div>`;

    projectDialog.querySelector(".project-dialog-close").setAttribute("aria-label", copy.close);
    projectDialog.querySelector(".dialog-prev").addEventListener("click", () => renderAdjacentProject(-1));
    projectDialog.querySelector(".dialog-next").addEventListener("click", () => renderAdjacentProject(1));
}

let projectSwitching = false;
function renderAdjacentProject(direction) {
    const nextIndex = activeProjectIndex + direction;
    if (nextIndex < 0 || nextIndex >= projects.length || projectSwitching) return;
    const currentContent = projectDialogContent.querySelector(".project-dialog-content-switch");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !currentContent) {
        activeProjectIndex = nextIndex;
        renderProjectDialog();
        projectDialog.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    projectSwitching = true;
    currentContent.classList.add("is-leaving");
    window.setTimeout(() => {
        activeProjectIndex = nextIndex;
        renderProjectDialog();
        projectDialog.scrollTo({ top: 0, behavior: "smooth" });
        projectDialog.querySelector(".project-dialog-close").focus();
        projectSwitching = false;
    }, 155);
}

projectGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-open-project]");
    const card = event.target.closest(".project-card");
    const index = button ? Number(button.dataset.openProject) : card ? Number(card.dataset.projectIndex) : -1;
    if (index >= 0) openProject(index, button || card);
});

// Abrir imágenes en un visor independiente
projectDialogContent.addEventListener("click", event => {
    const thumb = event.target.closest("[data-gallery-image]");

    if (!thumb) return;

    const thumbnailImage = thumb.querySelector("img");

    lightboxImage.src = thumb.dataset.galleryImage;
    lightboxImage.alt = thumbnailImage?.alt || "Project image";

    imageLightbox.showModal();
});

// Cerrar únicamente el visor de imágenes
lightboxClose.addEventListener("click", () => {
    imageLightbox.close();
});

// Permitir cerrar haciendo clic en el fondo
imageLightbox.addEventListener("click", event => {
    if (event.target === imageLightbox) {
        imageLightbox.close();
    }
});

// Limpiar la imagen al cerrar
imageLightbox.addEventListener("close", () => {
    lightboxImage.src = "";
});

projectDialog.querySelector(".project-dialog-close").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", event => {
    if (event.target === projectDialog) projectDialog.close();
});
projectDialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    if (lastProjectTrigger && document.contains(lastProjectTrigger)) lastProjectTrigger.focus();
});
document.addEventListener("keydown", event => {
    if (!projectDialog.open) return;
    if (event.key === "ArrowRight") renderAdjacentProject(1);
    if (event.key === "ArrowLeft") renderAdjacentProject(-1);
});


/* =========================================================
   05. FILTROS Y MENÚ MÓVIL
   ========================================================= */

document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".filter-button.active")?.classList.remove("active");
        button.classList.add("active");
        renderProjects(button.dataset.filter);
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


/* =========================================================
   06. FOTO DE PERFIL
   Prueba varias extensiones si la primera falla
   ========================================================= */

const photo = document.querySelector("#profile-photo");
const photoOptions = [
    "assets/profile/profile.jpeg",
    "assets/profile/profile.jpg",
    "assets/profile/profile.png",
    "assets/profile/profile.webp",
    "assets/profile/profile.JPG",
    "assets/profile/profile.PNG"
];
let photoTry = 0;

function showPhoto() {
    photo.style.display = "block";
    document.querySelector("#profile-fallback").style.display = "none";
}

photo.addEventListener("load", showPhoto);

photo.addEventListener("error", () => {
    photoTry++;
    if (photoTry < photoOptions.length) {
        photo.src = photoOptions[photoTry];
    } else {
        photo.style.display = "none";
    }
});

// Por si la imagen ya cargó antes de que corriera este script
if (photo.complete && photo.naturalWidth > 0) showPhoto();


/* =========================================================
   07. EFECTOS
   ========================================================= */

/* --- Aparición suave al hacer scroll --- */

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".expertise-card, .toolkit-panel, .about-grid, .section-heading-row").forEach(el => {
    el.classList.add("reveal");
    revealObserver.observe(el);
});


/* --- Efecto de escritura en el hero (frases en i18n.js) --- */

const typedEl = document.querySelector("#typed");
let pi = 0;       // índice de la frase actual
let ci = 0;       // cantidad de letras mostradas
let del = false;  // true = borrando

(function type() {
    const phrase = getPhrases()[pi];
    typedEl.textContent = phrase.slice(0, del ? --ci : ++ci);

    let wait = del ? 28 : 55;

    if (!del && ci === phrase.length) {
        del = true;
        wait = 1700;
    } else if (del && ci === 0) {
        del = false;
        pi = (pi + 1) % getPhrases().length;
        wait = 350;
    }

    setTimeout(type, wait);
})();


/* --- Brillo del cursor y barra de progreso --- */

const glow = document.querySelector("#cursor-glow");
const progressBar = document.querySelector("#progress");

addEventListener("pointermove", event => {
    glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progressBar.style.width = (scrollY / max * 100) + "%";
}, { passive: true });


/* --- Inclinación 3D y brillo en las tarjetas --- */

const CARD_SELECTOR = ".expertise-card, .project-card, .media-card";

document.addEventListener("pointermove", event => {
    const card = event.target.closest?.(CARD_SELECTOR);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
    card.style.transform = `perspective(800px) rotateX(${(y / rect.height - 0.5) * -7}deg) rotateY(${(x / rect.width - 0.5) * 7}deg) translateY(-4px)`;
});

document.addEventListener("pointerout", event => {
    const card = event.target.closest?.(CARD_SELECTOR);
    if (card && !card.contains(event.relatedTarget)) card.style.transform = "";
});


/* --- Cinta de tecnologías (se repite para que sea continua) --- */

const marqueeTrack = document.querySelector("#marquee-track");
marqueeTrack.innerHTML = marqueeTrack.innerHTML.repeat(4);


/* --- Contadores animados --- */

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        counterObserver.unobserve(entry.target);

        const target = +entry.target.dataset.count;
        const suffix = entry.target.dataset.suffix || "";
        const start = performance.now();

        (function tick(now) {
            const progress = Math.min((now - start) / 1400, 1);
            entry.target.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        })(start);
    });
}, { threshold: 0.6 });

document.querySelectorAll("[data-count]").forEach(el => counterObserver.observe(el));


/* --- Ondas de audio alrededor del orbe DM --- */

const canvas = document.querySelector("#wave");
const ctx = canvas.getContext("2d");

(function drawWaves(time) {
    ctx.clearRect(0, 0, 560, 560);

    // [color, desfase, velocidad]
    const layers = [
        ["#caed57", 0, 1.0],
        ["#e2fa93", 2.1, 1.3],
        ["#b2b2b2", 4.2, 0.8]
    ];

    layers.forEach(([color, phase, speed], index) => {
        ctx.beginPath();

        for (let angle = 0; angle <= Math.PI * 2 + 0.05; angle += 0.04) {
            const wobble =
                Math.sin(angle * 3 + time / 700 * speed + phase) * 9 +
                Math.sin(angle * 5 - time / 900 * speed + phase) * 6 +
                Math.sin(angle * 2 + time / 1200 + phase) * 8;

            const radius = 158 + index * 9 + wobble;
            const x = 280 + Math.cos(angle) * radius;
            const y = 280 + Math.sin(angle) * radius;

            if (angle === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.shadowColor = color;
        ctx.shadowBlur = 22;
        ctx.globalAlpha = 0.9;
        ctx.stroke();
        ctx.fillStyle = color + "12";
        ctx.fill();
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    requestAnimationFrame(drawWaves);
})(0);


/* =========================================================
   08. DETALLES EXTRA (Unificado desde polish.js)
   01. Segunda cinta de tecnologías (al revés)
   02. Menú: resalta la sección activa
   03. Parallax del hero con el mouse
   04. Botones magnéticos
   05. Entrada escalonada de tarjetas
   ========================================================= */

(function polishExtras() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* --- 01. Segunda cinta (corre en sentido contrario) --- */
    const first = document.querySelector(".marquee");
    if (first) {
        const second = first.cloneNode(true);
        second.classList.add("marquee-reverse");

        const track = second.querySelector(".marquee-track");
        track.removeAttribute("id");
        track.textContent = "Design ✦ Code ✦ Sound ✦ Motion ✦ 3D ✦ VR / AR ✦ UI / UX ✦ Games ✦ Backend ✦ Storytelling ✦ ".repeat(8);

        first.after(second);
    }

    /* --- 02. Menú: resalta la sección activa mientras haces scroll --- */
    const links = [...document.querySelectorAll('.main-nav a[href^="#"]:not(.nav-contact)')];
    const sections = links
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
            });
        });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(section => navObserver.observe(section));

    /* --- 03. Parallax del hero con el mouse --- */
    if (!reduceMotion) {
        const hero = document.querySelector(".hero");
        if (hero) {
            hero.addEventListener("pointermove", event => {
                const rect = hero.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                hero.style.setProperty("--px", x.toFixed(3));
                hero.style.setProperty("--py", y.toFixed(3));
            });

            hero.addEventListener("pointerleave", () => {
                hero.style.setProperty("--px", 0);
                hero.style.setProperty("--py", 0);
            });
        }
    }

    /* --- 04. Botones magnéticos --- */
    if (!reduceMotion) {
        document.querySelectorAll(".button, .lang-toggle").forEach(button => {
            button.addEventListener("pointermove", event => {
                const rect = button.getBoundingClientRect();
                const x = (event.clientX - rect.left - rect.width / 2) * 0.25;
                const y = (event.clientY - rect.top - rect.height / 2) * 0.35;
                button.style.translate = `${x}px ${y}px`;
            });

            button.addEventListener("pointerleave", () => {
                button.style.translate = "0 0";
            });
        });
    }

    /* --- 05. Entrada escalonada: estadísticas y grupos del toolkit --- */
    const items = document.querySelectorAll(".stats div, .toolkit-group");
    const staggerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in");
            staggerObserver.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    items.forEach((item, index) => {
        item.classList.add("reveal", "delay-" + (index % 4));
        staggerObserver.observe(item);
    });

})();

/* --- Ficha de proyecto: barra de progreso de scroll --- */
(function dialogProgress() {
    const dlg = document.querySelector("#project-dialog");
    dlg.addEventListener("scroll", () => {
        const max = dlg.scrollHeight - dlg.clientHeight;
        dlg.style.setProperty("--p", max > 0 ? (dlg.scrollTop / max).toFixed(3) : 0);
    }, { passive: true });
})();
