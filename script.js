:root {
  --bg: #0b0d12;
  --panel: #101522;
  --panel-2: #0f1420;
  --text: #e9ecf1;
  --muted: #aab3c2;
  --border: rgba(255, 255, 255, 0.08);
  --shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  --accent: #7c3aed; /* purple */
  --accent-2: #22c55e; /* green */
  --max: 1080px;
}

[data-theme="light"] {
  --bg: #f7f8fb;
  --panel: #ffffff;
  --panel-2: #ffffff;
  --text: #111827;
  --muted: #5b6473;
  --border: rgba(17, 24, 39, 0.12);
  --shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  --accent: #6d28d9;
  --accent-2: #16a34a;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  background: radial-gradient(1200px 800px at 20% 0%, rgba(124, 58, 237, 0.18), transparent 50%),
              radial-gradient(1200px 800px at 80% 10%, rgba(34, 197, 94, 0.12), transparent 50%),
              var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a { color: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }
.container { width: min(var(--max), calc(100% - 40px)); margin: 0 auto; }

.sr-only {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(10, 12, 18, 0.65);
  border-bottom: 1px solid var(--border);
}
[data-theme="light"] .site-header { background: rgba(247, 248, 251, 0.8); }

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 12px;
}

.brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 700; }
.brand-dot {
  width: 10px; height: 10px; border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.15);
}
.brand-text { letter-spacing: 0.2px; }

.nav { display: flex; align-items: center; gap: 10px; }
.nav-toggle {
  display: none;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  border-radius: 10px;
  padding: 8px 10px;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(16, 21, 34, 0.6);
}
[data-theme="light"] .nav-menu { background: rgba(255, 255, 255, 0.7); }

.nav-link {
  font-size: 14px;
  color: var(--muted);
  padding: 6px 8px;
  border-radius: 999px;
}
.nav-link.active,
.nav-link:hover { color: var(--text); background: rgba(124, 58, 237, 0.14); text-decoration: none; }

.theme-toggle {
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  border-radius: 12px;
  padding: 8px 10px;
  cursor: pointer;
}

.hero { padding: 52px 0 18px; }
.hero-inner {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
  align-items: start;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.35), rgba(34, 197, 94, 0.22));
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
  box-shadow: var(--shadow);
  margin-bottom: 12px;
}
.avatar span { font-size: 28px; font-weight: 800; }

.hero-title { margin: 0; font-size: 44px; line-height: 1.1; letter-spacing: -0.6px; }
.hero-subtitle { margin: 10px 0 14px; color: var(--muted); font-weight: 600; }
.hero-blurb { margin: 0 0 18px; color: var(--text); opacity: 0.92; }

.hero-cta { display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0 16px; }
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--panel);
  color: var(--text);
  font-weight: 650;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}
.btn:hover { text-decoration: none; transform: translateY(-1px); }
.btn.primary {
  background: linear-gradient(135deg, var(--accent), rgba(124, 58, 237, 0.35));
  border-color: rgba(124, 58, 237, 0.35);
}

.links { display: flex; flex-wrap: wrap; gap: 10px; }
.chip {
  border: 1px solid var(--border);
  background: rgba(16, 21, 34, 0.55);
  color: var(--muted);
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 14px;
}
[data-theme="light"] .chip { background: rgba(255, 255, 255, 0.7); }
.chip:hover { color: var(--text); text-decoration: none; }

.section { padding: 46px 0; }
.section.alt { background: rgba(255, 255, 255, 0.02); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.section-title { margin: 0 0 16px; font-size: 26px; letter-spacing: -0.2px; }

.grid { display: grid; gap: 14px; }
.grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card {
  background: rgba(16, 21, 34, 0.6);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  box-shadow: var(--shadow);
}
[data-theme="light"] .card { background: rgba(255, 255, 255, 0.8); }

.card-title { margin: 0 0 10px; font-size: 18px; }
.card-subtitle { margin: 0 0 8px; font-size: 16px; }
.muted { color: var(--muted); }

.callout {
  border-color: rgba(34, 197, 94, 0.25);
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(124, 58, 237, 0.06));
}

.meta { list-style: none; padding: 0; margin: 10px 0 0; }
.meta li {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 8px 0;
  border-bottom: 1px dashed rgba(255,255,255,0.08);
}
[data-theme="light"] .meta li { border-bottom: 1px dashed rgba(17,24,39,0.10); }
.meta li span:first-child { color: var(--muted); }

.bullets { margin: 10px 0 0; padding-left: 18px; }
.bullets li { margin: 8px 0; }

.stack { display: grid; gap: 14px; }

.xp-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
}
.xp-title { margin: 0; font-size: 16px; }
.xp-meta { margin: 4px 0 0; color: var(--muted); font-size: 14px; }

.badge {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(124, 58, 237, 0.25);
  background: rgba(124, 58, 237, 0.12);
  color: var(--text);
  white-space: nowrap;
}

.footer {
  padding: 30px 0;
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.06);
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; }
  .grid.three { grid-template-columns: 1fr; }
  .grid.two { grid-template-columns: 1fr; }
}

@media (max-width: 720px) {
  .nav-toggle { display: inline-flex; }
  .nav-menu {
    position: absolute;
    top: 64px;
    right: 20px;
    left: 20px;
    display: none;
    flex-direction: column;
    gap: 8px;
    padding: 12px;
    border-radius: 18px;
  }
  .nav-menu.open { display: flex; }
  .nav-link { width: 100%; }
}
