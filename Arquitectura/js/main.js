(function() {
  'use strict';

  // Header scroll effect
  var header = document.getElementById('header');
  if (header) {
    function updateHeader() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      navToggle.setAttribute('aria-label', nav.classList.contains('open') ? 'Cerrar menú' : 'Abrir menú');
    });
    // Close nav when clicking a link (for single-page feel on mobile)
    var navLinks = nav.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        nav.classList.remove('open');
      });
    }
  }

  // Contact form: prevent default and show feedback (no backend)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Mensaje enviado';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = originalText;
        btn.disabled = false;
        contactForm.reset();
      }, 2500);
    });
  }
})();
