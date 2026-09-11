export function initReviews() {
  const root = document.querySelector('.ressenyes');
  if (!root) return;

  const viewport = root.querySelector('.ressenyes__viewport');
  const track = root.querySelector('.ressenyes__track');
  const cards = [...root.querySelectorAll('.ressenyes__card')];
  const prevBtn = root.querySelector('.ressenyes__btn--prev');
  const nextBtn = root.querySelector('.ressenyes__btn--next');
  if (!viewport || !track || !prevBtn || !nextBtn || cards.length === 0) return;

  // "page" = grup de `visible` targetes que avança/retrocedeix sencer amb
  // cada clic (p. ex. 3 primeres / 3 següents), no targeta a targeta.
  let page = 0;

  function getVisible() {
    const value = parseInt(getComputedStyle(track).getPropertyValue('--visible'), 10);
    return Number.isFinite(value) && value > 0 ? value : 1;
  }

  function getMaxPage(visible) {
    return Math.max(Math.ceil(cards.length / visible) - 1, 0);
  }

  function update() {
    const visible = getVisible();
    const maxPage = getMaxPage(visible);
    page = Math.min(page, maxPage);
    const stepPx = viewport.clientWidth / visible;
    track.style.transform = `translateX(-${page * visible * stepPx}px)`;
    prevBtn.disabled = page <= 0;
    nextBtn.disabled = page >= maxPage;
  }

  prevBtn.addEventListener('click', () => {
    page = Math.max(page - 1, 0);
    update();
  });

  nextBtn.addEventListener('click', () => {
    page = Math.min(page + 1, getMaxPage(getVisible()));
    update();
  });

  window.addEventListener('resize', update);

  update();
}
