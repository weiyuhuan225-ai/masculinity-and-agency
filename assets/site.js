/* Progressive enhancement: all article text exists in index.html. */
(() => {
  'use strict';

  function enhanceTabs(root) {
    if (!root) return;
    const controls = root.querySelector('[data-tab-controls]');
    const tabs = Array.from(root.querySelectorAll('[data-tab]'));
    const panels = Array.from(root.querySelectorAll('[data-tab-panel]'));
    if (!controls || !tabs.length || tabs.length !== panels.length) return;

    function activate(index, moveFocus = false) {
      tabs.forEach((tab, i) => {
        const active = i === index;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        panels[i].hidden = !active;
        panels[i].setAttribute('role', 'tabpanel');
        panels[i].setAttribute('aria-labelledby', tab.id);
        panels[i].tabIndex = 0;
      });
      if (moveFocus) tabs[index].focus();
    }

    controls.setAttribute('role', 'tablist');
    tabs.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panels[index].id);
      tab.addEventListener('click', () => activate(index));
      tab.addEventListener('keydown', event => {
        let next = index;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        activate(next, true);
      });
    });
    activate(0);
    controls.hidden = false;
    root.dataset.enhanced = 'true';
    const hint = root.closest('section')?.querySelector('[data-tabs-hint]');
    if (hint) hint.hidden = false;
  }

  document.querySelectorAll('[data-tabs]').forEach(enhanceTabs);

  const progress = document.querySelector('.reading-progress');
  const progressBar = progress?.querySelector('span');
  let ticking = false;
  function updateProgress() {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${ratio})`;
    if (progress) progress.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
    ticking = false;
  }
  function requestProgress() {
    if (!ticking) { window.requestAnimationFrame(updateProgress); ticking = true; }
  }
  window.addEventListener('scroll', requestProgress, { passive: true });
  window.addEventListener('resize', requestProgress, { passive: true });
  document.querySelectorAll('details').forEach(detail => detail.addEventListener('toggle', requestProgress));
  updateProgress();

  if ('IntersectionObserver' in window) {
    const navigation = Array.from(document.querySelectorAll('.nav-links a'));
    const observer = new IntersectionObserver(entries => {
      const entry = entries.filter(item => item.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!entry) return;
      navigation.forEach(link => {
        if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-18% 0px -54% 0px', threshold: 0 });
    navigation.forEach(link => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) observer.observe(target);
    });
  }
})();
