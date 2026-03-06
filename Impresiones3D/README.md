# Impresiones 3D — Sitio web

Sitio web de presentación para una empresa de impresión 3D. Diseño minimalista oscuro, responsive, HTML, CSS y JavaScript ligero.

## Estructura

```
Impresiones3D/
├── index.html          # Inicio
├── projects.html        # Servicios / Proyectos
├── project-detail.html  # Detalle de servicio (?id=1, 2, …)
├── about.html          # Nosotros
├── contact.html        # Contacto
├── css/style.css
├── js/main.js
├── js/projects-data.js # Datos de servicios/proyectos
└── README.md
```

## Cómo ejecutar

Desde la carpeta **Impresiones3D**:

```bash
python -m http.server 8000
# o
npx serve .
```

Abrir: `http://localhost:8000`
