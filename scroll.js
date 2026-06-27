/* scroll.js — reveal on scroll, no dependencies.
   [data-stagger]        → section; staggers [data-reveal-item] children + marks itself .in.
   [data-reveal-section] → section; whole block fades as one unit.
   [data-reveal-note]    → hand annotation, observed independently.
   All fire once then unobserve. Gated by .js-reveal on <html>. */
(function () {
  if (!('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('js-reveal');
    return;
  }

  var STAGGER = 110; // ms between children

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var sec = entry.target;
        if (sec.hasAttribute('data-stagger')) {
          var items = Array.prototype.slice.call(sec.querySelectorAll('[data-reveal-item]'));
          items.forEach(function (el, i) {
            el.style.transitionDelay = (i * STAGGER) + 'ms';
            el.classList.add('in');
          });
          sec.classList.add('in'); // marks section for annotation-draw triggers
        } else {
          sec.classList.add('in');
        }
        io.unobserve(sec);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  document.querySelectorAll('[data-stagger], [data-reveal-section], [data-reveal-note]').forEach(function (el) {
    io.observe(el);
  });
}());
