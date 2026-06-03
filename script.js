/* Custom cursor */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX - 5}px,${e.clientY - 5}px)`;
  ring.style.transform = `translate(${e.clientX - 18}px,${e.clientY - 18}px)`;
});
document.querySelectorAll('a,button,.chip').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '52px';
    ring.style.height = '52px';
    ring.style.transform = `translate(${parseFloat(ring.style.transform.match(/-?\d+\.?\d*/g)[0]) - 8}px,${parseFloat(ring.style.transform.match(/-?\d+\.?\d*/g)[1]) - 8}px)`;
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width = '36px';
    ring.style.height = '36px';
  });
});

/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 60);
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => io.observe(r));

/* Chip hover */
document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('mouseenter', () => c.classList.add('active'));
  c.addEventListener('mouseleave', () => {
    if (!c.dataset.sticky) c.classList.remove('active');
  });
});

/* Smooth scroll for nav links */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});