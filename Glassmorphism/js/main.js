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

  // Stagger: add .visible when parent enters viewport
  var staggerParents = document.querySelectorAll('.glass-stagger');
  if (staggerParents.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0 });
    staggerParents.forEach(function(parent) {
      observer.observe(parent);
    });
  } else {
    staggerParents.forEach(function(parent) {
      parent.classList.add('visible');
    });
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Enviado';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = orig;
        btn.disabled = false;
        contactForm.reset();
      }, 2500);
    });
  }
})();
