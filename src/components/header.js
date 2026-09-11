export function initHeader() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav-principal');

  if (!toggle || !nav) return;

  const label = toggle.querySelector('.visually-hidden');
  const isSpanish = document.documentElement.lang === 'es';
  const menuLabels = isSpanish
    ? { open: 'Abrir el menú', close: 'Cerrar el menú' }
    : { open: 'Obrir el menú', close: 'Tancar el menú' };

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('nav--open', open);
    if (label) label.textContent = open ? menuLabels.close : menuLabels.open;
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
}
