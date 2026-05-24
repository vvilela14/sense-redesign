
(function() {
  var css = `
    .sense-nav {
      height: 80px;
      border-bottom: 1px solid #eaeaea;
      background: #ffffff;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    .sense-nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sense-nav-logo img {
      height: 104px;
      width: auto;
      display: block;
    }
    .sense-nav-links {
      display: flex;
      gap: 40px;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .sense-nav-links a {
      font-size: 15px;
      font-weight: 500;
      color: #062533;
      text-decoration: none;
      padding: 8px 0;
    }
    .sense-nav-links a:hover { color: #e06253; }
    .sense-nav-cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #e06253;
      color: #fff !important;
      padding: 12px 24px;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 15px;
      text-decoration: none;
      transition: background 0.15s ease, transform 0.15s ease;
      white-space: nowrap;
    }
    .sense-nav-cta:hover {
      background: #c64f41;
      transform: translateY(-1px);
    }
    @media (max-width: 640px) {
      .sense-nav-links { display: none; }
      .sense-nav-logo img { height: 72px; }
    }
  `;

  // Inject CSS
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // Detect base path (for pages in root vs subdirs)
  var base = '';

  // Build nav HTML
  var isHome = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
  var nav = document.createElement('header');
  nav.className = 'sense-nav';
  nav.innerHTML = `
    <div class="sense-nav-inner">
      <a href="${base}index.html" class="sense-nav-logo" aria-label="Sense">
        <img src="${base}images/brand/sense-logo.png" alt="Sense" />
      </a>
      <nav>
        <ul class="sense-nav-links">
          <li><a href="${base}index.html#especialidades">Especialidades</a></li>
          <li><a href="${base}index.html#exames">Exames</a></li>
          <li><a href="${base}index.html#checkup">Check-up</a></li>
        </ul>
      </nav>
      <a href="${base}especialistas.html" class="sense-nav-cta">
        Encontre um Especialista
      </a>
    </div>
  `;

  // Replace existing nav or prepend
  var existing = document.querySelector('header');
  if (existing) {
    existing.parentNode.replaceChild(nav, existing);
  } else {
    document.body.insertBefore(nav, document.body.firstChild);
  }
})();
