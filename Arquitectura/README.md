# Estudio Arquitectura — Sitio web

Sitio web estático para un estudio de arquitectura. Diseño minimalista, responsive, solo HTML, CSS y JavaScript ligero.

## Estructura del proyecto

```
Arquitectura/
├── index.html          # Inicio
├── projects.html       # Portfolio / Proyectos
├── project-detail.html # Detalle de proyecto (?id=1, 2, …)
├── about.html          # Nosotros
├── contact.html        # Contacto
├── css/
│   └── style.css       # Estilos globales
├── js/
│   ├── main.js         # Navegación, formulario, header
│   └── projects-data.js # Datos de proyectos para la ficha
└── README.md
```

## Cómo ejecutarlo en local

Desde la carpeta **Arquitectura**:

**Con Python 3:**
```bash
python -m http.server 8000
```

**Con Node.js (npx):**
```bash
npx serve .
```

Luego abre en el navegador: `http://localhost:8000`

## Contenido

- **Inicio:** hero, introducción, proyectos destacados, CTA y contacto resumido.
- **Proyectos:** rejilla de proyectos con imagen, nombre, ubicación, año y descripción breve. Cada uno enlaza a la ficha.
- **Ficha de proyecto:** se rellena con los datos de `js/projects-data.js` según el parámetro `?id=` en la URL.
- **Nosotros:** texto del estudio, filosofía y bloque de equipo (placeholders).
- **Contacto:** formulario (nombre, email, mensaje), datos de contacto y placeholder para mapa.

Las imágenes de ejemplo usan Unsplash. Para producción, sustituye por tus propias imágenes y actualiza `projects-data.js` y los `src` en el HTML.
