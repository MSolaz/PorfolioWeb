const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 90);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-btn');
    btn.textContent = '¡Enviado! ✓';
    btn.style.background = '#52D9B0';
    setTimeout(() => {
      btn.textContent = 'Enviar mensaje ✉️';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }
