# Papelería Central — Sitio web

Sitio web de presentación para una papelería. Diseño minimalista, responsive, HTML, CSS y JavaScript ligero.

## Estructura

```
Papeleria/
├── index.html           # Inicio
├── products.html        # Catálogo de productos
├── product-detail.html  # Detalle de producto (?id=1, 2, …)
├── about.html           # Nosotros
├── contact.html         # Contacto
├── css/style.css
├── js/main.js
├── js/products-data.js  # Datos de productos
└── README.md
```

## Cómo ejecutar

Desde la carpeta **Papeleria**:

```bash
python -m http.server 8000
# o
npx serve .
```

Abrir: `http://localhost:8000`
