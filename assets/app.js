(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, '') || '/';
    if (href === path) link.setAttribute('aria-current', 'page');
  });
})();
