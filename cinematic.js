(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (selector) => document.querySelector(selector);
  const progress = $('.progress');
  let rafPending = false;
  function updateScroll() {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (progress) progress.style.width = ((window.scrollY / max) * 100).toFixed(2) + '%';
    rafPending = false;
  }
  window.addEventListener('scroll', () => {
    if (!rafPending) { rafPending = true; requestAnimationFrame(updateScroll); }
  }, { passive: true });
  updateScroll();

  const observer = 'IntersectionObserver' in window && !reduceMotion
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -45px 0px', threshold: 0.08 })
    : null;
  document.querySelectorAll('.reveal').forEach(el => {
    if (observer) observer.observe(el);
    else el.classList.add('is-visible');
  });
  const menu = $('.menu-toggle');
  const mobile = $('#mobile-nav');
  if (menu && mobile) {
    const close = () => {
      mobile.hidden = true;
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
    };
    menu.addEventListener('click', () => {
      const open = mobile.hidden;
      mobile.hidden = !open;
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  const sphere = $('#data-sphere');
  if (sphere && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    const visual = sphere.parentElement;
    visual.addEventListener('pointermove', (e) => {
      const rect = visual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - .5;
      const y = (e.clientY - rect.top) / rect.height - .5;
      sphere.style.animation = 'none';
      sphere.style.transform = 'translate(-50%, -50%) rotate(' + (x * 15) + 'deg) rotateX(' + (-y * 14) + 'deg)';
    });
    visual.addEventListener('pointerleave', () => {
      sphere.style.transform = '';
      sphere.style.animation = '';
    });
  }

  const canvas = $('#scatter');
  const signalSlider = $('#signal');
  const sampleSlider = $('#samples');
  if (!canvas || !signalSlider || !sampleSlider) return;
  const context = canvas.getContext('2d');
  if (!context) return;

  // Deterministic pseudo-random generator for repeatable illustrative data.
  function pseudoRandom(seed) {
    let state = seed >>> 0;
    return function () {
      state = (Math.imul(1664525, state) + 1013904223) >>> 0;
      return state / 4294967296;
    };
  }
  function normal(random) {
    const a = Math.max(random(), 1e-10), b = random();
    return Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * b);
  }
  function correlation(points) {
    const n = points.length;
    const mx = points.reduce((s, p) => s + p.x, 0) / n;
    const my = points.reduce((s, p) => s + p.y, 0) / n;
    let xx = 0, yy = 0, xy = 0;
    points.forEach(p => {
      const dx = p.x - mx, dy = p.y - my;
      xx += dx * dx; yy += dy * dy; xy += dx * dy;
    });
    return xx > 0 && yy > 0 ? xy / Math.sqrt(xx * yy) : 0;
  }
  function renderChart() {
    const strength = Number(signalSlider.value) / 100;
    const count = Number(sampleSlider.value);
    $('#signal-value').textContent = signalSlider.value + '%';
    $('#samples-value').textContent = String(count);
    const rand = pseudoRandom(7211);
    const points = Array.from({ length: count }, () => {
      const x = normal(rand);
      const y = strength * x + Math.sqrt(1 - strength * strength) * normal(rand);
      return { x, y };
    });
    const width = canvas.width, height = canvas.height;
    const pad = 58, plotW = width - 2 * pad, plotH = height - 2 * pad;
    const mapX = x => pad + ((Math.max(-3, Math.min(3, x)) + 3) / 6) * plotW;
    const mapY = y => height - pad - ((Math.max(-3, Math.min(3, y)) + 3) / 6) * plotH;
    context.clearRect(0, 0, width, height);
    context.fillStyle = '#0a1423';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 1;
    context.font = '15px "DM Sans", sans-serif';
    for (let i = -3; i <= 3; i++) {
      const x = mapX(i), y = mapY(i);
      context.strokeStyle = 'rgba(160,200,222,.12)';
      context.beginPath(); context.moveTo(x, pad); context.lineTo(x, height - pad); context.stroke();
      context.beginPath(); context.moveTo(pad, y); context.lineTo(width - pad, y); context.stroke();
      if (i % 2 === 0) {
        context.fillStyle = '#8195ab';
        context.fillText(String(i), x - 6, height - pad + 25);
        context.fillText(String(i), pad - 30, y + 5);
      }
    }
    context.fillStyle = '#a8bcd0';
    context.fillText('Feature X', width / 2 - 31, height - 10);
    context.save(); context.translate(17, height / 2 + 30); context.rotate(-Math.PI / 2);
    context.fillText('Feature Y', 0, 0); context.restore();

    const gradient = context.createLinearGradient(pad, height - pad, width - pad, pad);
    gradient.addColorStop(0, '#55b2f1'); gradient.addColorStop(.5, '#79f2df'); gradient.addColorStop(1, '#b79eff');
    context.strokeStyle = gradient;
    context.lineWidth = 2;
    context.setLineDash([8, 7]);
    context.beginPath();
    context.moveTo(mapX(-2.9), mapY(-2.9 * strength));
    context.lineTo(mapX(2.9), mapY(2.9 * strength));
    context.stroke(); context.setLineDash([]);

    points.forEach(p => {
      const x = mapX(p.x), y = mapY(p.y);
      context.beginPath(); context.arc(x, y, 5.6, 0, 2 * Math.PI);
      context.fillStyle = p.y > 0 ? 'rgba(121,242,223,.75)' : 'rgba(127,167,255,.72)';
      context.shadowBlur = 11; context.shadowColor = p.y > 0 ? '#6ce7d2' : '#7a9de8';
      context.fill(); context.shadowBlur = 0;
    });
    $('#point-count').textContent = String(count);
    $('#correlation').textContent = correlation(points).toFixed(2);
  }
  signalSlider.addEventListener('input', renderChart);
  sampleSlider.addEventListener('input', renderChart);
  renderChart();
})();