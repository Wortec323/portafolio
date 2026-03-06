(function() {
  'use strict';

  var header = document.getElementById('header');
  if (header) {
    function updateHeader() {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      navToggle.setAttribute('aria-label', nav.classList.contains('open') ? 'Cerrar menú' : 'Abrir menú');
    });
    var navLinks = nav.querySelectorAll('a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function() {
        nav.classList.remove('open');
      });
    }
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = '¡RESERVADO!';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = orig;
        btn.disabled = false;
        contactForm.reset();
      }, 2500);
    });
  }
})();
