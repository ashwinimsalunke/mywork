// JavaScript for fade-in animation on scroll
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.fade-in-section');
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -50px 0px' // Trigger a little before it's fully in view
    });
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
});
