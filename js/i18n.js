(function() {
  'use strict';

  var translations = {
    es: {
      'hero.title': 'Diseñamos webs modernas para tu negocio',
      'hero.subtitle': 'Sitios web profesionales y adaptables para empresas que buscan una presencia online de calidad',
      'hero.intro': 'Cada concepto es un punto de partida: colores, textos, imágenes y estructura se personalizan según tu marca. Elegí un estilo y lo adaptamos a tu empresa.',
      'hero.ctaPrimary': 'Solicitar sitio web',
      'hero.cta': 'Ver conceptos',
      'intro.text': 'A continuación mostramos varios estilos de diseño que usamos como punto de partida. Cualquier concepto se adapta a la identidad, el contenido y la estructura de tu empresa.',
      'concepts.title': 'Conceptos de diseño',
      'card1.title': 'Concepto 1 — Oscuro y profesional',
      'card1.desc': 'Tema oscuro con acentos azules, ideal para tecnología y servicios B2B.',
      'card2.title': 'Concepto 2 — Editorial y clásico',
      'card2.desc': 'Estética cálida y editorial con tipografía serif para retail y papel.',
      'card3.title': 'Concepto 3 — Corporativo moderno',
      'card3.desc': 'Diseño claro y minimal con tipografía elegante para estudios y portfolios.',
      'card4.title': 'Concepto 4 — Cálido y acogedor',
      'card4.desc': 'Estilo amigable con terracota y colores suaves para hostelería.',
      'card5.title': 'Concepto 5 — Neón y atrevido',
      'card5.desc': 'Fondo oscuro con acentos neón y efectos glitch para agencias creativas.',
      'card6.title': 'Concepto 6 — Brutalista y tipográfico',
      'card6.desc': 'Negro y blanco, tipografía fuerte para una presencia de marca contundente.',
      'card7.title': 'Concepto 7 — Cristal y moderno',
      'card7.desc': 'Cards con efecto cristal y gradientes suaves para apps y productos SaaS.',
      'card8.title': 'Concepto 8 — Retro y divertido',
      'card8.desc': 'Gradientes y estilo ochentero para eventos y entretenimiento.',
      'card9.title': 'Concepto 9 — Natural y orgánico',
      'card9.desc': 'Verdes suaves y formas orgánicas para marcas de bienestar y eco.',
      'card10.title': 'Concepto 10 — Minimal y zen',
      'card10.desc': 'Mucho espacio en blanco y un solo color de acento para marcas serenas.',
      'btn.demo': 'Ver demo',
      'process.title': 'Cómo funciona el proceso',
      'process.step1.title': 'Elegí un estilo de diseño',
      'process.step1.desc': 'Elegí uno de los conceptos de arriba (o combiná elementos) que mejor encaje con tu marca.',
      'process.step2.title': 'Enviá el contenido de tu empresa',
      'process.step2.desc': 'Compartí textos, imágenes, logo y las páginas que necesites.',
      'process.step3.title': 'Personalización y desarrollo',
      'process.step3.desc': 'Adaptamos el diseño a tu identidad y desarrollamos el sitio.',
      'process.step4.title': 'Lanzamiento de la web',
      'process.step4.desc': 'Tu sitio se publica con alojamiento y configuración básica incluidos.',
      'process.timeline': 'Plazo estimado: 1–2 semanas según el alcance del proyecto.',
      'trust.title': 'Por qué elegir este estudio',
      'trust.benefit1': 'Diseño profesional',
      'trust.benefit1.desc': 'Interfaces modernas y coherentes con tu marca.',
      'trust.benefit2': 'Sitios rápidos y optimizados',
      'trust.benefit2.desc': 'Rendimiento y buenas prácticas para SEO.',
      'trust.benefit3': 'Adaptado a móviles',
      'trust.benefit3.desc': 'Diseño responsive en todos los dispositivos.',
      'trust.benefit4': 'Entrega rápida',
      'trust.benefit4.desc': 'Plazos claros y comunicación fluida.',
      'footer.tagline': 'Estudio de diseño web moderno',
      'footer.portfolio': 'Portafolio',
      'footer.email': 'marinorichard@hotmail.com',
      'header.linkedin': 'LinkedIn'
    },
    en: {
      'hero.title': 'We design modern websites for your business',
      'hero.subtitle': 'Professional, adaptable websites for businesses that want a strong online presence',
      'hero.intro': 'Each concept is a starting point: colors, text, images, and structure are tailored to your brand. Choose a style and we adapt it to your company.',
      'hero.ctaPrimary': 'Request a website',
      'hero.cta': 'View concepts',
      'intro.text': 'Below are several design styles that can be used as a starting point for a professional website. Any design can be adapted to your company\'s branding, content, and structure.',
      'concepts.title': 'Design concepts',
      'card1.title': 'Concept 1 — Dark & Professional',
      'card1.desc': 'Clean dark theme with blue accents, ideal for tech and B2B services.',
      'card2.title': 'Concept 2 — Editorial & Classic',
      'card2.desc': 'Warm, book-like aesthetic with serif typography for retail and print.',
      'card3.title': 'Concept 3 — Modern Corporate',
      'card3.desc': 'Light, minimal layout with elegant typography for studios and portfolios.',
      'card4.title': 'Concept 4 — Warm & Welcoming',
      'card4.desc': 'Friendly, cozy style with terracotta and soft colors for hospitality.',
      'card5.title': 'Concept 5 — Bold & Neon',
      'card5.desc': 'Dark background with neon accents and glitch effects for creative agencies.',
      'card6.title': 'Concept 6 — Brutalist & Typographic',
      'card6.desc': 'Black and white, bold type-first design for strong brand presence.',
      'card7.title': 'Concept 7 — Glass & Modern',
      'card7.desc': 'Frosted glass cards and soft gradients for apps and SaaS products.',
      'card8.title': 'Concept 8 — Retro & Fun',
      'card8.desc': '80s-inspired gradients and pixel style for events and entertainment.',
      'card9.title': 'Concept 9 — Natural & Organic',
      'card9.desc': 'Soft greens, blobs and nature-inspired feel for wellness and eco brands.',
      'card10.title': 'Concept 10 — Minimal & Zen',
      'card10.desc': 'Lots of white space and a single accent color for calm, refined brands.',
      'btn.demo': 'View Demo',
      'process.title': 'How the process works',
      'process.step1.title': 'Choose a design style',
      'process.step1.desc': 'Pick one of the concepts above (or mix elements) that best fits your brand.',
      'process.step2.title': 'Provide your company content',
      'process.step2.desc': 'Share your text, images, logo, and any pages you need.',
      'process.step3.title': 'Customization and development',
      'process.step3.desc': 'We adapt the design to your branding and build the site.',
      'process.step4.title': 'Website launch',
      'process.step4.desc': 'Your site goes live with hosting and basic setup included.',
      'process.timeline': 'Estimated timeline: 1–2 weeks depending on project scope.',
      'trust.title': 'Why choose this studio',
      'trust.benefit1': 'Professional design',
      'trust.benefit1.desc': 'Modern interfaces that align with your brand.',
      'trust.benefit2': 'Fast, optimized sites',
      'trust.benefit2.desc': 'Performance and SEO best practices.',
      'trust.benefit3': 'Mobile-friendly',
      'trust.benefit3.desc': 'Responsive design across all devices.',
      'trust.benefit4': 'Quick delivery',
      'trust.benefit4.desc': 'Clear deadlines and smooth communication.',
      'footer.tagline': 'Modern web design studio',
      'footer.portfolio': 'Portfolio',
      'footer.email': 'marinorichard@hotmail.com',
      'header.linkedin': 'LinkedIn'
    }
  };

  var tags = {
    es: {
      card1: ['Corporativo', 'Servicios', 'Tecnología', 'Profesional'],
      card2: ['Retail', 'Papelería', 'Impresión', 'Clásico'],
      card3: ['Corporativo', 'Portfolio', 'Arquitectura', 'Profesional'],
      card4: ['Café', 'Restaurante', 'Hostelería', 'Acogedor'],
      card5: ['Creativo', 'Agencia', 'Digital', 'Atrevido'],
      card6: ['Portfolio', 'Diseño', 'Atrevido', 'Tipografía'],
      card7: ['SaaS', 'App', 'Producto', 'Moderno'],
      card8: ['Eventos', 'Entretenimiento', 'Gaming', 'Divertido'],
      card9: ['Bienestar', 'Eco', 'Natural', 'Marca'],
      card10: ['Té', 'Bienestar', 'Restaurante', 'Minimal']
    },
    en: {
      card1: ['Corporate', 'Services', 'Tech', 'Professional'],
      card2: ['Retail', 'Stationery', 'Print', 'Classic'],
      card3: ['Corporate', 'Portfolio', 'Architecture', 'Professional'],
      card4: ['Cafe', 'Restaurant', 'Hospitality', 'Friendly'],
      card5: ['Creative', 'Agency', 'Digital', 'Bold'],
      card6: ['Portfolio', 'Design', 'Bold', 'Typography'],
      card7: ['SaaS', 'App', 'Product', 'Modern'],
      card8: ['Events', 'Entertainment', 'Gaming', 'Fun'],
      card9: ['Wellness', 'Eco', 'Natural', 'Brand'],
      card10: ['Tea', 'Wellness', 'Restaurant', 'Minimal']
    }
  };

  var titles = { es: 'Conceptos de diseño web | Richard Marino — Estudio de diseño web', en: 'Website Design Concepts | Richard Marino — Web Design Studio' };
  var currentLang = 'es';

  function applyLang(lang) {
    if (!translations[lang] || !tags[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    if (titles[lang]) document.title = titles[lang];

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
        if (key === 'footer.email' && el.href) {
          el.href = 'mailto:' + translations[lang][key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-tags]').forEach(function(ul) {
      var key = ul.getAttribute('data-i18n-tags');
      var list = tags[lang][key];
      if (list && list.length) {
        ul.innerHTML = list.map(function(tag) {
          return '<li>' + tag + '</li>';
        }).join('');
      }
    });

    document.querySelectorAll('.home-lang__btn').forEach(function(btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try {
      localStorage.setItem('portafolio-lang', lang);
    } catch (e) {}
  }

  function init() {
    try {
      var saved = localStorage.getItem('portafolio-lang');
      if (saved === 'en' || saved === 'es') {
        currentLang = saved;
        applyLang(saved);
      } else {
        applyLang('es');
      }
    } catch (e) {
      applyLang('es');
    }

    document.querySelectorAll('.home-lang__btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var lang = this.getAttribute('data-lang');
        if (lang && (lang === 'es' || lang === 'en')) {
          applyLang(lang);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
