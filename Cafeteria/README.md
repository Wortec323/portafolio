# Café & Té — Sitio web

Sitio web de presentación para una cafetería de especialidad. Diseño minimalista, responsive, HTML, CSS y JavaScript ligero.

## Estructura

```
Cafeteria/
├── index.html          # Inicio
├── menu.html           # Menú / especialidades
├── item-detail.html    # Detalle de ítem (?id=1, 2, …)
├── about.html          # Nosotros
├── contact.html        # Contacto
├── css/style.css
├── js/main.js
├── js/menu-data.js     # Datos del menú
└── README.md
```

## Cómo ejecutar

Desde la carpeta **Cafeteria**:

```bash
python -m http.server 8000
# o
npx serve .
```

Abrir: `http://localhost:8000`
