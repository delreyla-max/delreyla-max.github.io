(function () {
  // ── CSS ──────────────────────────────────────────────────────────────────
  var css = `
    #site-nav {
      position:fixed; top:0; left:0; right:0; z-index:400;
      display:flex; align-items:center; justify-content:space-between;
      padding:1.4rem clamp(1.2rem,4vw,2.8rem);
      border-bottom:1px solid rgba(0,0,0,0.1);
      background:rgba(255,255,255,0.92);
      backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
    }
    #nav-brand {
      font-family:'Bebas Neue',sans-serif;
      font-size:1.25rem; letter-spacing:0.04em;
      color:#000; text-decoration:none;
      position:relative; padding-bottom:2px;
    }
    #nav-brand::after {
      content:''; position:absolute; left:0; bottom:0;
      width:0; height:2px; background:#dc2626; transition:width 0.25s ease;
    }
    #nav-brand:hover::after, #nav-brand.active::after { width:100%; }
    #nav-links {
      display:flex; align-items:center; gap:clamp(1rem,2.4vw,1.8rem);
    }
    #nav-links a {
      font-family:'Bebas Neue',sans-serif;
      font-size:1rem; letter-spacing:0.04em;
      color:#000; text-decoration:none;
      transition:opacity 0.25s; position:relative; padding-bottom:2px;
    }
    #nav-links a::after {
      content:''; position:absolute; left:0; bottom:0;
      width:0; height:2px; background:#dc2626; transition:width 0.25s ease;
    }
    #nav-links a:hover { opacity:1; }
    #nav-links a:hover::after, #nav-links a.active::after { width:100%; }
    #nav-hamburger { display:none; }
    @media (max-width:768px) {
      #nav-links { display:none; }
      #nav-hamburger {
        display:flex; flex-direction:column; justify-content:center; gap:5px;
        width:2rem; height:2rem; cursor:pointer;
        background:none; border:none; padding:0;
      }
      #nav-hamburger span {
        display:block; height:2px; width:100%; background:#000;
        transition:transform 0.3s ease, opacity 0.3s ease;
      }
      #nav-hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
      #nav-hamburger.open span:nth-child(2) { opacity:0; }
      #nav-hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }
      #mobile-menu {
        display:flex; flex-direction:column; align-items:flex-end; gap:1.2rem;
        position:fixed; top:65px; left:0; right:0;
        background:rgba(0,0,0,0.97); backdrop-filter:blur(10px);
        z-index:399; padding:1.5rem 2rem 1.8rem;
        max-height:0; overflow:hidden; opacity:0;
        transition:max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease;
        border-bottom:1px solid rgba(255,255,255,0.08);
      }
      #mobile-menu.open { max-height:400px; opacity:1; }
      #mobile-menu a {
        font-family:'Bebas Neue',sans-serif;
        font-size:1.8rem; letter-spacing:0.06em;
        color:#fff; text-decoration:none;
        transition:opacity 0.2s; text-align:right;
      }
      #mobile-menu a:hover { opacity:0.4; }
    }
    @media (min-width:769px) {
      #nav-hamburger { display:none; }
      #mobile-menu { display:none !important; }
    }
    @media (max-width:480px) {
      #nav-brand  { font-size:1.5rem !important; }
      #nav-links a { font-size:1.4rem !important; }
    }
  `;

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── HTML ─────────────────────────────────────────────────────────────────
  var closeSnippet = "document.getElementById('mobile-menu').classList.remove('open');document.getElementById('nav-hamburger').classList.remove('open');";

  var navHTML = `
    <nav id="site-nav">
      <a id="nav-brand" href="index.html">GARMAN Y.</a>
      <div id="nav-links">
        <a href="all-projects.html">Work</a>
        <a href="resume.html">Resume</a>
        <a href="contact.html">Contact</a>
      </div>
      <button id="nav-hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    </nav>
    <div id="mobile-menu">
      <a href="index.html" onclick="${closeSnippet}">Home</a>
      <a href="all-projects.html" onclick="${closeSnippet}">Work</a>
      <a href="resume.html" onclick="${closeSnippet}">Resume</a>
      <a href="contact.html" onclick="${closeSnippet}">Contact</a>
    </div>
  `;

  var wrapper = document.createElement('div');
  wrapper.innerHTML = navHTML;
  document.body.insertBefore(wrapper.firstElementChild, document.body.firstChild);
  document.body.insertBefore(wrapper.firstElementChild, document.body.children[1]);

  // ── Hamburger toggle ─────────────────────────────────────────────────────
  var btn  = document.getElementById('nav-hamburger');
  var menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', function () {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // ── Active state ─────────────────────────────────────────────────────────
  var path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === 'index.html' || path === '') {
    document.getElementById('nav-brand').classList.add('active');
  }
  var isProject = path.indexOf('-case-study') !== -1 || path === 'project.html' || path === 'all-projects.html';
  document.querySelectorAll('#nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) { a.classList.add('active'); }
    else if (isProject && href === 'all-projects.html') { a.classList.add('active'); }
  });
})();
