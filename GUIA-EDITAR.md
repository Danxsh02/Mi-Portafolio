# Guia para editar tu portafolio

## 1. Imágenes que ya están incluidas y cómo agregar más

Las imágenes principales que me compartiste **sí están incluidas en esta versión del ZIP** y ya están conectadas a sus tarjetas. No necesitas volver a cargarlas ni renombrarlas.

| Proyecto | Imagen de portada incluida |
|---|---|
| La Casa de los Recuerdos | `assets/projects/casa-recuerdos/La casa de los recuedos MENU.jpeg` |
| Halloween VR — DarkDiary | `assets/projects/halloween-vr/HalloweenCover.png` |
| Inside Your Mind | `assets/projects/inside-your-mind/Inside Your Mind Menu.png` |
| Hospital VR | `assets/projects/hospital-vr/Hospitalvrcover.png` |
| The Baggy's Rush | `assets/projects/baggys-rush/Menu principal Baggy's.jpeg` |
| Smart City | `assets/projects/smart-city/Smart City Cover.png` |
| AgroRed | `assets/projects/agrored/Agrored menu.png` |
| Blender 3D | `assets/projects/blender-3d/Blender 3D.png` |
| Figma | `assets/projects/figma/figmacover.png` |
| Animación 3D de terror | `assets/projects/blender-horror/cover.png` |
| Foto de perfil | `assets/profile/profile.jpeg` |

**La única portada principal que sigue pendiente es Museo Ancestral**, porque no había una imagen de ese proyecto en los archivos que recibí.

### Cómo agregar imágenes a la galería de un proyecto

1. Abre la carpeta del proyecto dentro de `assets/projects/`. Por ejemplo, para La Casa de los Recuerdos: `assets/projects/casa-recuerdos/`.
2. Copia allí las capturas o imágenes adicionales. Usa nombres sencillos, sin tildes ni espacios, por ejemplo `nivel-01.jpg`, `persecucion.jpg` o `personajes.png`.
3. Abre `script.js` y busca el proyecto por su título.
4. Dentro de ese bloque, localiza `gallery: []` y reemplázalo por una lista como esta:

```js
gallery: [
  { type: "image", src: "assets/projects/casa-recuerdos/nivel-01.jpg", alt: "Primer nivel", caption: "Primer nivel" },
  { type: "image", src: "assets/projects/casa-recuerdos/persecucion.jpg", alt: "Secuencia de persecución", caption: "Secuencia de persecución" },
  { type: "video", src: "assets/projects/casa-recuerdos/gameplay.mp4", caption: "Gameplay" }
]
```

5. Guarda los cambios y vuelve a cargar la página. Las imágenes aparecerán dentro de la ficha individual del proyecto y se podrán ampliar. Los videos tendrán controles de reproducción.

Para añadir una galería a otro proyecto, cambia `casa-recuerdos` por la carpeta correspondiente. Las rutas siempre empiezan desde la carpeta principal donde está `index.html`.

**Recomendaciones:** imágenes JPG, PNG o WebP; idealmente 1200 px de ancho. Para videos grandes, es mejor usar YouTube o una plataforma de video y agregar un enlace, en lugar de subir archivos pesados al repositorio del portafolio.

- **Tu foto:** ya está en `assets/profile/profile.jpeg`.
- **Tu CV:** coloca el archivo en `documents/daniel-munoz-cv.pdf`.

## 2. Audio y video (seccion Audio & Video)
1. Copia el archivo a `assets/multimedia/` (por ejemplo `demo.mp3` o `animacion.mp4`).
2. Abre `script.js`, busca `const mediaItems` y en `src:` escribe la ruta: `src: "assets/multimedia/demo.mp3"`.
3. Para videos pesados, sube a YouTube y dimelo para incrustarlo.

## 3. Cambiar textos de un proyecto o agregar uno nuevo
En `script.js`, arriba, esta la lista `projects`. Cada proyecto es un bloque `{ ... }`. Edita `description`, `role`, `tools` o `link` (pon aqui tu enlace de GitHub o demo; si lo dejas vacio no aparece boton).
Para uno nuevo: copia un bloque completo, pegalo con una coma y cambia los datos. `category` puede ser: web, unity, design o ai.

## 4. Cambiar la tipografia
Dos pasos:
1. En `index.html`, en el `<link>` de Google Fonts, cambia el nombre (eligela en fonts.google.com).
2. En `styles.css`, al final, en `--font:` pon el mismo nombre.
Ejemplos: 'Outfit', 'DM Sans', 'Poppins', 'Sora', 'Inter'.

## 5. Probar en tu PC
Abre la carpeta en VS Code, instala la extension Live Server, clic derecho en `index.html` > Open with Live Server.

## 6. Publicar gratis con GitHub Pages
1. Entra a github.com/Danxsh02 > New repository. Nombre: `portfolio`. Publico. Create.
2. Clic en "uploading an existing file" y arrastra TODO el contenido de la carpeta (index.html, styles.css, script.js, assets, documents). Commit changes.
3. Settings > Pages > Source: "Deploy from a branch" > Branch: main, carpeta / (root) > Save.
4. En 1-2 minutos tu link sera: https://danxsh02.github.io/portfolio/
5. Para actualizar: vuelve al repositorio, Add file > Upload files, y sube lo nuevo (o usa GitHub Desktop).
Limite: archivos de maximo 25 MB por la web; usa videos cortos o YouTube.


## Fichas interactivas de proyectos

Cada tarjeta de la sección Projects / Proyectos abre una ficha expandida con la descripción, tu participación, aportes principales y herramientas. La ficha también permite pasar al proyecto anterior o siguiente con los controles inferiores o las flechas izquierda/derecha del teclado. Se cierra con la X, haciendo clic fuera o con Escape.

Para actualizar el contenido, edita el objeto del proyecto correspondiente en `script.js`. El arreglo `highlights` contiene los puntos destacados que aparecen en la ficha. Mantén la versión equivalente en español dentro de `projectsES` en `i18n.js`.

Para agregar imágenes adicionales en el futuro, guarda los archivos dentro de `assets/projects/<carpeta-del-proyecto>/` y actualiza el campo `cover` con la ruta relativa. Si un proyecto todavía no tiene imagen principal, deja `cover: ""`; el diseño mostrará una portada de espera sin romper la ficha.

## Enlaces, fechas y galerías de proyectos

En `script.js`, cada proyecto puede incluir estos campos:

- `repoUrl`: URL exacta del repositorio de GitHub. Déjalo como `""` si no está listo; el botón no aparecerá.
- `liveUrl`: URL del sitio o demo publicada. En La Casa de los Recuerdos se mostrará también un enlace directo en la tarjeta cuando agregues la URL.
- `projectDate`: fecha o periodo real, por ejemplo `"2025 · 8th semester"`. Si está vacío, no se muestra una fecha inventada.
- `gallery`: lista de imágenes y videos. Ejemplo:

```js
gallery: [
  { type: "image", src: "assets/projects/casa-recuerdos/level-01.jpg", alt: "First level", caption: "First level" },
  { type: "image", src: "assets/projects/casa-recuerdos/chase.jpg", alt: "Chase sequence", caption: "Chase sequence" },
  { type: "video", src: "assets/projects/casa-recuerdos/gameplay.mp4", poster: "assets/projects/casa-recuerdos/gameplay-poster.jpg", caption: "Gameplay" }
]
```

Guarda los archivos dentro de la carpeta de cada proyecto en `assets/projects/`. Las galerías usan rutas relativas al `index.html`. La vista ampliada funciona como una página individual tipo case study dentro del portafolio; no abre una pestaña distinta.

Recomendación: publica repositorios limpios con README, capturas, instrucciones de ejecución y sin claves, tokens, datos privados ni recursos que no tengas permiso de compartir. Para proyectos grupales, confirma que el equipo permite publicar el código.


## Enlaces y fechas ya configurados

- La Casa de los Recuerdos: repositorio `https://github.com/Mar0921/Casa_de_los_recuerdos` y sitio publicado `https://lcdlr-web.vercel.app/` · abril–mayo de 2026.
- Halloween VR — DarkDiary: `https://github.com/tefDel/Halloween` · octubre de 2025.
- Inside Your Mind: `https://github.com/josuegallego/VisualOrbit` · septiembre–noviembre de 2026.
- Museo Ancestral: `https://github.com/Mar0921/RA---Museo-Ancestral` · septiembre–noviembre de 2026.
- Hospital VR: `https://github.com/josuegallego/VisualOrbit` · 6–24 de noviembre de 2025. Se ha usado el mismo repositorio que compartiste para Inside Your Mind; si Hospital VR tiene un repositorio separado, reemplaza `repoUrl` en su bloque de `script.js`.
- The Baggy's Rush: `https://github.com/tefDel/The-Baggis-Rush` · agosto–septiembre de 2025, con arreglos entre septiembre y noviembre de 2026.
- Smart City: `https://github.com/idalizapata64-cmd/SmartCity` · agosto–noviembre de 2026.

Los botones de repositorio y de sitio publicado se muestran automáticamente en las fichas de los proyectos que tienen una URL configurada. En La Casa de los Recuerdos, el acceso al sitio también aparece desde la tarjeta.
