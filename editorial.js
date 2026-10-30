(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s) => document.querySelector(s);
  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = $('.mobile-menu-toggle');
  const mobileNav = $('#mobile-nav');
  if (menuButton && mobileNav) {
    const closeMenu = () => {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      menuButton.querySelector('span').textContent = '+';
    };
    menuButton.addEventListener('click', () => {
      const open = mobileNav.hidden;
      mobileNav.hidden = !open;
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menuButton.querySelector('span').textContent = open ? '×' : '+';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -25px 0px', threshold: .06 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  }

  // The following interactions are concept previews, not real inference.
  const medicToggle = $('#medic-toggle');
  const medicStatus = $('#medic-status');
  const medicIndicator = $('#medic-indicator');
  const medicCaption = $('#medic-caption');
  const medicPath = $('#medic-path');
  if (medicToggle && medicStatus && medicIndicator && medicCaption && medicPath) {
    const healthy = 'M0 70 L30 58 L60 66 L90 52 L120 61 L150 48 L180 59 L210 55 L240 65 L270 49 L300 57 L330 51 L360 58 L390 48 L420 55 L450 50 L480 54';
    const incident = 'M0 70 L30 58 L60 66 L90 52 L120 61 L150 48 L180 59 L210 55 L240 65 L270 49 L300 90 L330 93 L360 18 L390 94 L420 99 L450 25 L480 91';
    medicToggle.addEventListener('click', () => {
      const active = medicToggle.getAttribute('aria-pressed') !== 'true';
      medicToggle.setAttribute('aria-pressed', String(active));
      medicToggle.firstChild.textContent = active ? 'Reset illustration ' : 'Simulate an incident ';
      medicStatus.textContent = active ? 'Needs attention' : 'Healthy';
      medicIndicator.textContent = active ? 'Alert' : 'Nominal';
      medicIndicator.classList.toggle('alert', active);
      medicCaption.textContent = active ? 'Illustrative anomaly' : 'Stable processing';
      medicPath.setAttribute('d', active ? incident : healthy);
      medicPath.classList.toggle('incident', active);
    });
  }

  const confidenceInput = $('#confidence');
  const confidenceOutput = $('#threshold-output');
  const detectionBox = $('#wildlife-box');
  const wildlifeConfidence = $('#wildlife-confidence');
  if (confidenceInput && confidenceOutput && detectionBox && wildlifeConfidence) {
    const updateConfidence = () => {
      const threshold = Number(confidenceInput.value);
      confidenceOutput.textContent = threshold + '%';
      detectionBox.style.opacity = threshold <= 85 ? '1' : '.06';
      wildlifeConfidence.textContent = '.86';
    };
    confidenceInput.addEventListener('input', updateConfidence);
    updateConfidence();
  }

  const routeButtons = document.querySelectorAll('.route-option');
  const routePath = $('#route-path');
  const routeBadge = $('#route-badge');
  if (routeButtons.length && routePath && routeBadge) {
    const routes = {
      quiet: 'M66 204L165 175L270 110L380 55L472 37',
      direct: 'M66 204L165 143L270 130L380 88L472 37'
    };
    routeButtons.forEach(button => button.addEventListener('click', () => {
      const choice = button.dataset.route;
      if (!routes[choice]) return;
      routeButtons.forEach(item => {
        const selected = item === button;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      routePath.setAttribute('d', routes[choice]);
      routeBadge.textContent = choice === 'quiet' ? 'Quieter route' : 'Direct route';
    }));
  }

  const speechToggle = $('#speech-toggle');
  const waveBars = $('.wave-bars');
  if (speechToggle && waveBars) {
    speechToggle.addEventListener('click', () => {
      const playing = speechToggle.getAttribute('aria-pressed') !== 'true';
      speechToggle.setAttribute('aria-pressed', String(playing));
      waveBars.classList.toggle('playing', playing && !reduceMotion);
      speechToggle.firstChild.textContent = playing ? 'Stop animation ' : 'Animate waveform ';
    });
  }
})();