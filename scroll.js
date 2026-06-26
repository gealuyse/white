/* =========================================================
   scroll.js — draw the hand annotations on scroll, nothing else.
   No dependencies. JS only flips a switch; CSS does the drawing.
     · [data-reveal] → a host section (.hero / #easier). When it enters
       view it gets .in-view, and the CSS sequences its annotation
       (underline wipe → connector/arrow draw → note settles).
   The armed state lives behind .js-reveal on <html> (set by a tiny inline
   script in <head>), so if this file never runs the annotations just show
   already-drawn — the page is the plain static document either way.
   All of it is gated by prefers-reduced-motion in the CSS.
   ========================================================= */
(function () {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        io.unobserve(entry.target); /* draw once, then stop watching */
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px", /* trigger a little before fully in view */
    }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
})();
