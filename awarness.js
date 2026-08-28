// Parallax effect for floating elements
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.floating-element').forEach((el, i) => {
    const speed = (i + 1) * 0.02; // slower for better effect
    const x = (window.innerWidth/2 - e.clientX) * speed;
    const y = (window.innerHeight/2 - e.clientY) * speed;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Intersection Observer for timeline animation
const items = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

items.forEach(item => observer.observe(item));
