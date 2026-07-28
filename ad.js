/* =============================================================
   ad.js — all three ad units in one file
   Link it once, in the <head> of every page:

     <script src="/ad.js" defer></script>

   The HTML each unit needs:

   1. ANCHOR  — sticky bar. Put this anywhere in the body:
      <a id="anchorAdLink" href="YOUR-URL" target="_blank"
         rel="noopener sponsored"></a>

   2. DISPLAY — in-content slot. Repeat after any paragraph:
      <div class="display-ad">
        <a class="display-ad__link" href="YOUR-URL" target="_blank"
           rel="noopener sponsored"></a>
      </div>

   3. VIGNETTE — full screen between pages. Anywhere in the body:
      <a id="vignetteAdLink" href="YOUR-URL" target="_blank"
         rel="noopener sponsored"></a>

   Each unit is self-contained below; edit the CONFIG block at the
   top of the one you want to change.
   ============================================================= */


/* =============================================================
   1. ANCHOR AD — sticky bar at the top of the screen
   ============================================================= */
(function () {
  'use strict';

  /* ---------------------- CONFIG ---------------------- */

  // Your banners. One is picked at random on every page load.
  var IMAGES = [
    '/ads-src/st-ad-1.jpg',
    '/ads-src/st-ad-2.jpg',
    '/ads-src/st-ad-3.jpg',
    '/ads-src/st-ad-4.jpg',
    '/ads-src/st-ad-5.jpgg',
    '/ads-src/st-ad-6.jpg',
    '/ads-src/st-ad-7.jpg',
    '/ads-src/st-ad-8.jpg'
  ];

  var CONFIG = {
    position:      'top',   // 'top' or 'bottom'
    heightMobile:  80,      // px — matches a 320x50 banner
    heightDesktop: 90,      // px — matches a 728x90 banner
    fit:           'contain', // 'contain' keeps the whole image, 'cover' fills the bar
    rotateMs:      0,       // 0 = off. e.g. 10000 swaps images every 10s
    infoUrl:       'https://example.com/advertise' // where the (i) icon goes
  };

  /* -------------------- END CONFIG -------------------- */


  var CSS = [
    ':root{--anchor-h:' + CONFIG.heightMobile + 'px;--anchor-bg:#fff;--anchor-border:#dadce0}',
    '@media(min-width:768px){:root{--anchor-h:' + CONFIG.heightDesktop + 'px}}',
    '.anchor-ad{position:fixed;left:0;right:0;z-index:2147483646;background:var(--anchor-bg);',
      'display:flex;align-items:center;justify-content:center;height:var(--anchor-h);',
      'transition:transform .25s ease;font-family:Roboto,Arial,sans-serif}',
    '.anchor-ad--top{top:0;border-bottom:1px solid var(--anchor-border);box-shadow:0 1px 4px rgba(0,0,0,.12)}',
    '.anchor-ad--top.is-collapsed{transform:translateY(-100%)}',
    '.anchor-ad--bottom{bottom:0;border-top:1px solid var(--anchor-border);',
      'box-shadow:0 -1px 4px rgba(0,0,0,.12);padding-bottom:env(safe-area-inset-bottom)}',
    '.anchor-ad--bottom.is-collapsed{transform:translateY(100%)}',
    '.anchor-ad__slot{height:100%;display:flex;align-items:center;justify-content:center}',
    '.anchor-ad__link{display:block;height:100%;line-height:0}',
    '.anchor-ad__img{height:100%;width:auto;max-width:100vw;object-fit:' + CONFIG.fit + ';display:block}',
    '.anchor-ad__controls{position:absolute;top:4px;right:4px;z-index:2;display:flex;gap:2px;',
      'align-items:center;padding:1px 3px;border-radius:999px;background:rgba(255,255,255,.92);',
      'box-shadow:0 1px 3px rgba(0,0,0,.35);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}',
    '.anchor-ad--bottom .anchor-ad__controls{top:auto;bottom:4px}',
    '.anchor-ad__btn{border:0;background:transparent;padding:3px;cursor:pointer;line-height:0;',
      'color:#1a73e8;border-radius:50%}',
    '.anchor-ad__btn:hover{background:rgba(26,115,232,.12)}',
    '.anchor-ad__btn:focus-visible{outline:2px solid #1a73e8;outline-offset:1px}',
    '.anchor-ad__toggle{position:absolute;left:0;width:44px;height:26px;',
      'border:1px solid var(--anchor-border);border-left:0;background:var(--anchor-bg);',
      'cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}',
    '.anchor-ad--top .anchor-ad__toggle{top:100%;border-top:0;border-radius:0 0 4px 0;',
      'box-shadow:2px 2px 4px rgba(0,0,0,.12)}',
    '.anchor-ad--bottom .anchor-ad__toggle{bottom:100%;border-bottom:0;border-radius:0 4px 0 0;',
      'box-shadow:2px -2px 4px rgba(0,0,0,.12)}',
    '.anchor-ad__chev{transition:transform .25s ease;color:#3c4043}',
    '.anchor-ad.is-collapsed .anchor-ad__chev{transform:rotate(180deg)}',
    'body.has-anchor-top{padding-top:var(--anchor-h)}',
    'body.has-anchor-bottom{padding-bottom:var(--anchor-h)}',
    '@media(prefers-reduced-motion:reduce){.anchor-ad,.anchor-ad__chev{transition:none}}'
  ].join('');

  var ICON_INFO = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';
  var ICON_DOTS = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"/></svg>';
  var ICON_CHEV = '<svg class="anchor-ad__chev" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7.4 15.4L12 10.8l4.6 4.6L18 14l-6-6-6 6z"/></svg>';

  var lastIndex = -1;

  /* Random image that is never the same as the one shown before. */
  function pick() {
    if (IMAGES.length === 1) return IMAGES[0];
    var i;
    do { i = Math.floor(Math.random() * IMAGES.length); } while (i === lastIndex);
    lastIndex = i;
    return IMAGES[i];
  }

  function build() {
    if (!IMAGES.length || document.getElementById('anchorAd')) return;

    // Your hyperlink, written as plain HTML on the page.
    var link = document.getElementById('anchorAdLink');
    if (!link) return;   // no link in the page = no ad

    var isBottom = CONFIG.position === 'bottom';
    var padClass = isBottom ? 'has-anchor-bottom' : 'has-anchor-top';

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var ad = document.createElement('aside');
    ad.id = 'anchorAd';
    ad.className = 'anchor-ad anchor-ad--' + (isBottom ? 'bottom' : 'top');
    ad.setAttribute('aria-label', 'Advertisement');
    ad.innerHTML =
      '<div class="anchor-ad__slot" id="anchorSlot"></div>' +
      '<div class="anchor-ad__controls">' +
        '<button class="anchor-ad__btn" type="button" id="anchorInfo" aria-label="Why this ad?">' + ICON_INFO + '</button>' +
        '<button class="anchor-ad__btn" type="button" id="anchorClose" aria-label="Close ad">' + ICON_DOTS + '</button>' +
      '</div>' +
      '<button class="anchor-ad__toggle" type="button" id="anchorToggle" aria-controls="anchorAd" aria-expanded="true" aria-label="Hide ad">' +
        ICON_CHEV +
      '</button>';

    document.body.appendChild(ad);
    document.body.classList.add(padClass);

    // Move your <a> into the bar untouched — href, target and rel stay
    // exactly as you wrote them in the HTML.
    link.classList.add('anchor-ad__link');
    document.getElementById('anchorSlot').appendChild(link);

    var img = document.createElement('img');
    img.className = 'anchor-ad__img';
    img.alt = 'Advertisement';
    link.appendChild(img);

    function show() { img.src = pick(); }
    show();

    // Warm the cache so a rotation swap doesn't flash an empty bar.
    IMAGES.forEach(function (src) { new Image().src = src; });

    if (CONFIG.rotateMs > 0) setInterval(show, CONFIG.rotateMs);

    var toggle = document.getElementById('anchorToggle');
    toggle.addEventListener('click', function () {
      var collapsed = ad.classList.toggle('is-collapsed');
      document.body.classList.toggle(padClass, !collapsed);
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.setAttribute('aria-label', collapsed ? 'Show ad' : 'Hide ad');
    });

    document.getElementById('anchorClose').addEventListener('click', function () {
      ad.remove();
      document.body.classList.remove(padClass);
    });

    document.getElementById('anchorInfo').addEventListener('click', function () {
      window.open(CONFIG.infoUrl, '_blank', 'noopener');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();


/* =============================================================
   2. DISPLAY AD — responsive in-content slot, one random image
   ============================================================= */
(function () {
  'use strict';

  /* ---------------------- CONFIG ---------------------- */

  /* MOBILE creatives — export at 800 x 500 px (ratio 8:5).
     Shown full width of the screen at 250px tall. */
  var IMAGES_MOBILE = [
    '/ads-src/ds-ad-1.jpg',
    '/ads-src/ds-ad-2.jpg',
    '/ads-src/ds-ad-3.jpg',
    '/ads-src/ds-ad-4.jpg',
    '/ads-src/ds-ad-5.jpg',
    '/ads-src/ds-ad-6.jpg',
    '/ads-src/ds-ad-7.jpg',
    '/ads-src/ds-ad-8.jpg',
    '/ads-src/ds-ad-9.jpg',
    '/ads-src/ds-ad-10.jpg',
    '/ads-src/ds-ad-11.jpg',
    '/ads-src/ds-ad-12.jpg'
  ];

  /* DESKTOP creatives — export at 2400 x 560 px (ratio 30:7).
     Shown at 1200 x 280 px, i.e. the same file at half scale
     so it stays sharp on high-density screens. */
  var IMAGES_DESKTOP = [
    'Untitled-4.jpg',
    'Untitled-4.jpg',
    'Untitled-4.jpg',
    'Untitled-4.jpg',
    'Untitled-4.jpg',
    'Untitled-4.jpg'
  ];

  var CONFIG = {
    heightMobile:   250,   // px — slot height on phones
    heightDesktop:  280,   // px — slot height on desktop
    breakpoint:     768,   // px — where the two lists swap
    fullBleedMobile: true, // run past your article padding, screen edge to edge
    maxWidth:       1200,  // px — desktop slot width. Match your article column
                           // and export the desktop creatives at 2x this width.
    focus:      'center',  // which part survives if a screen is an odd shape:
                           // 'top', 'center', 'bottom' or e.g. '50% 30%'
    background: '#f8f9fa',
    radius:     8,         // px, 0 for square corners
    rotateMs:   0,         // 0 = off. e.g. 15000 swaps images every 15s
    infoUrl:    'https://example.com/advertise'
  };

  /* -------------------- END CONFIG -------------------- */


  var BP = CONFIG.breakpoint;

  var CSS = [
    '.display-ad{position:relative;display:flex;align-items:center;justify-content:center;',
      'width:100%;margin:20px auto;overflow:hidden;',
      'height:' + CONFIG.heightMobile + 'px;',
      'background:' + CONFIG.background + ';border-radius:' + CONFIG.radius + 'px}',

    /* phones: break out of the text column so it spans the screen */
    CONFIG.fullBleedMobile
      ? '@media(max-width:' + (BP - 1) + 'px){.display-ad{width:auto;' +
        'margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);border-radius:0}}'
      : '',

    '@media(min-width:' + BP + 'px){.display-ad{max-width:' + CONFIG.maxWidth + 'px;',
      'height:' + CONFIG.heightDesktop + 'px}}',

    /* the creative fills the slot edge to edge, no gaps */
    '.display-ad__link{display:block;width:100%;height:100%;line-height:0}',
    '.display-ad__img{width:100%;height:100%;object-fit:cover;',
      'object-position:' + CONFIG.focus + ';display:block}',

    '.display-ad__controls{position:absolute;top:4px;right:4px;z-index:2;display:flex;gap:2px;',
      'align-items:center;padding:1px 3px;border-radius:999px;background:rgba(255,255,255,.92);',
      'box-shadow:0 1px 3px rgba(0,0,0,.35);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}',
    '.display-ad__btn{border:0;background:transparent;padding:3px;cursor:pointer;line-height:0;',
      'color:#1a73e8;border-radius:50%}',
    '.display-ad__btn:hover{background:rgba(26,115,232,.12)}',
    '.display-ad__btn:focus-visible{outline:2px solid #1a73e8;outline-offset:1px}'
  ].join('');

  var ICON_INFO = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';
  var ICON_DOTS = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z"/></svg>';

  /* One shuffled bag per list — each image is used once before any repeats. */
  function makeBag(list) {
    var bag = [];
    return function () {
      if (!list.length) return '';
      if (!bag.length) {
        bag = list.slice();
        for (var i = bag.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var t = bag[i]; bag[i] = bag[j]; bag[j] = t;
        }
      }
      return bag.pop();
    };
  }
  var pickMobile  = makeBag(IMAGES_MOBILE);
  var pickDesktop = makeBag(IMAGES_DESKTOP);

  function build() {
    var units = document.querySelectorAll('.display-ad');
    if (!units.length || (!IMAGES_MOBILE.length && !IMAGES_DESKTOP.length)) return;

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    Array.prototype.forEach.call(units, function (unit) {
      // Your hyperlink, straight from the HTML — href, target and rel untouched.
      var link = unit.querySelector('.display-ad__link');
      if (!link) return;

      /* <picture> lets the browser pick the right file for the screen and
         swap it on resize, without any JavaScript running again. Only the
         matching file is ever downloaded. */
      var picture = document.createElement('picture');
      var source  = document.createElement('source');
      source.media = '(min-width:' + BP + 'px)';
      var img = document.createElement('img');
      img.className = 'display-ad__img';
      img.alt = 'Advertisement';
      img.loading = 'lazy';
      img.decoding = 'async';
      picture.appendChild(source);
      picture.appendChild(img);
      link.appendChild(picture);

      function show() {
        source.srcset = pickDesktop();
        img.src = pickMobile();
      }
      show();

      var controls = document.createElement('div');
      controls.className = 'display-ad__controls';
      controls.innerHTML =
        '<button class="display-ad__btn" type="button" aria-label="Why this ad?">' + ICON_INFO + '</button>' +
        '<button class="display-ad__btn" type="button" aria-label="Close ad">' + ICON_DOTS + '</button>';
      unit.appendChild(controls);

      controls.children[0].addEventListener('click', function () {
        window.open(CONFIG.infoUrl, '_blank', 'noopener');
      });
      controls.children[1].addEventListener('click', function () { unit.remove(); });

      if (CONFIG.rotateMs > 0) setInterval(show, CONFIG.rotateMs);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();


/* =============================================================
   3. VIGNETTE AD — full-screen ad shown between page loads
   ============================================================= */
(function () {
  'use strict';

  /* ---------------------- CONFIG ---------------------- */

  /* TODO: replace these with real vignette creatives.
     MOBILE — export at 800 x 1200 px (2:3 portrait).
     Using your display-ad images for now so nothing 404s. */
  var IMAGES_MOBILE = [
    '/ads-src/vig-ad-1.jpg',
    '/ads-src/vig-ad-2.jpg',
    '/ads-src/vig-ad-3.jpg',
    '/ads-src/vig-ad-4.jpg',
    '/ads-src/vig-ad-5.jpg',
    '/ads-src/vig-ad-6.jpg',
    '/ads-src/vig-ad-7.jpg',
    '/ads-src/vig-ad-8.jpg',
    '/ads-src/vig-ad-9.jpg',
    '/ads-src/vig-ad-10.jpg',
    '/ads-src/vig-ad-11.jpg',
    '/ads-src/vig-ad-12.jpg'
  ];

  /* TODO: replace these too.
     DESKTOP — export at 1600 x 900 px (16:9 landscape). */
  var IMAGES_DESKTOP = [
    'Untitled-4.jpg'
  ];

  var CONFIG = {
    /* When it fires:
         'exit' — someone clicks a link to another page on your site: the ad
                  covers the screen, then the page they wanted loads when they
                  close it. This is the true "between page loads" behaviour.
         'load' — shows shortly after a page opens, but only if the visitor
                  came from another page on your site (never on first arrival). */
    trigger: 'exit',

    minMinutesBetween: 1,    // don't show again within this many minutes
                             // (decimals work: 0.5 = every 30 seconds)
    showAfterMs:       400,  // small pause before it appears
    closeEnabledAfterMs: 1000, // Close becomes clickable after this
    autoContinueMs:    0,    // 'exit' only: 0 = wait for Close. e.g. 5000 continues by itself

    breakpoint:    768,      // px — where the two image lists swap
    cardMaxWidth:  1000,     // px — widest the creative card gets on desktop
    ratioMobile:  '2 / 3',
    ratioDesktop: '16 / 9',
    infoUrl: 'https://example.com/advertise',

    /* Extra hostnames to treat as "your site". Needed when your pages link
       with absolute URLs (https://ziphynet.com/page.html) but you're testing
       on 127.0.0.1 or localhost — otherwise every link looks external. */
    internalHosts: ['ziphynet.com', 'www.ziphynet.com'],

    /* Used only if <a id="vignetteAdLink"> is missing from the page — some
       CMSes (WordPress in particular) delete empty <a> tags on save. */
    href: 'https://smallbruisedfollowing.com/tqm8buuui3?key=666d71fd4d6056b67bf169a7dcbc20d4',

    /* Turn on, open the browser console, and it will tell you exactly why
       the ad did or didn't appear. Turn off again once it works. */
    debug: false
  };

  /* -------------------- END CONFIG -------------------- */


  var BP  = CONFIG.breakpoint;
  var KEY = 'vignetteAdLastShown';

  function log() {
    if (!CONFIG.debug || !window.console) return;
    var args = ['[vignette]'].concat([].slice.call(arguments));
    console.log.apply(console, args);
  }

  var CSS = [
    '.vignette-ad{position:fixed;inset:0;z-index:2147483647;display:flex;',
      'flex-direction:column;align-items:center;justify-content:center;gap:12px;',
      'padding:16px;background:rgba(32,33,36,.92);opacity:0;transition:opacity .2s ease;',
      'font-family:Roboto,Arial,Helvetica,sans-serif}',
    '.vignette-ad.is-open{opacity:1}',

    '.vignette-ad__close{align-self:flex-end;border:0;background:transparent;color:#fff;',
      'font-size:16px;padding:8px 12px;cursor:pointer;opacity:.35;pointer-events:none;',
      'transition:opacity .2s ease;border-radius:4px}',
    '.vignette-ad__close.is-ready{opacity:1;pointer-events:auto}',
    '.vignette-ad__close:hover{background:rgba(255,255,255,.12)}',

    '.vignette-ad__card{position:relative;width:100%;max-width:520px;background:#fff;',
      'border-radius:10px;overflow:hidden;aspect-ratio:' + CONFIG.ratioMobile + ';',
      'box-shadow:0 8px 32px rgba(0,0,0,.4)}',
    '@media(min-width:' + BP + 'px){.vignette-ad__card{max-width:' + CONFIG.cardMaxWidth + 'px;',
      'aspect-ratio:' + CONFIG.ratioDesktop + '}}',

    '.vignette-ad__link{display:block;width:100%;height:100%;line-height:0}',
    '.vignette-ad__img{width:100%;height:100%;object-fit:cover;display:block}',

    '.vignette-ad__info{position:absolute;top:6px;right:6px;z-index:2;border:0;padding:3px;',
      'cursor:pointer;line-height:0;color:#1a73e8;border-radius:999px;',
      'background:rgba(255,255,255,.92);box-shadow:0 1px 3px rgba(0,0,0,.35)}',

    'body.vignette-open{overflow:hidden}'
  ].join('');

  var ICON_INFO = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';

  function makeBag(list) {
    var bag = [];
    return function () {
      if (!list.length) return '';
      if (!bag.length) {
        bag = list.slice();
        for (var i = bag.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var t = bag[i]; bag[i] = bag[j]; bag[j] = t;
        }
      }
      return bag.pop();
    };
  }
  var pickMobile  = makeBag(IMAGES_MOBILE);
  var pickDesktop = makeBag(IMAGES_DESKTOP);

  /* ---- frequency cap (degrades quietly if storage is blocked) ---- */
  function lastShown() {
    try { return parseInt(sessionStorage.getItem(KEY), 10) || 0; } catch (e) { return 0; }
  }
  function markShown() {
    try { sessionStorage.setItem(KEY, String(Date.now())); } catch (e) {}
  }
  function dueAgain() {
    return Date.now() - lastShown() > CONFIG.minMinutesBetween * 60000;
  }

  function cameFromThisSite() {
    if (!document.referrer) return false;
    try { return new URL(document.referrer).host === location.host; } catch (e) { return false; }
  }

  var overlay = null, closeBtn = null, adLink = null, pendingUrl = null, timers = [];

  function buildOverlay() {
    // Your hyperlink, straight from the HTML — href, target and rel untouched.
    adLink = document.getElementById('vignetteAdLink');

    if (!adLink) {
      if (!CONFIG.href) {
        log('no <a id="vignetteAdLink"> on the page and no CONFIG.href — stopping.');
        return false;
      }
      log('no <a id="vignetteAdLink"> found; falling back to CONFIG.href.');
      adLink = document.createElement('a');
      adLink.href = CONFIG.href;
      adLink.target = '_blank';
      adLink.rel = 'noopener sponsored';
    } else {
      log('using the page link ->', adLink.getAttribute('href'));
    }

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    overlay = document.createElement('div');
    overlay.className = 'vignette-ad';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Advertisement');
    overlay.style.display = 'none';
    overlay.innerHTML =
      '<button class="vignette-ad__close" type="button">Close</button>' +
      '<div class="vignette-ad__card">' +
        '<button class="vignette-ad__info" type="button" aria-label="Why this ad?">' + ICON_INFO + '</button>' +
      '</div>';

    var card = overlay.querySelector('.vignette-ad__card');
    adLink.classList.add('vignette-ad__link');

    var picture = document.createElement('picture');
    var source  = document.createElement('source');
    source.media = '(min-width:' + BP + 'px)';
    source.srcset = pickDesktop();
    var img = document.createElement('img');
    img.className = 'vignette-ad__img';
    img.alt = 'Advertisement';
    img.src = pickMobile();
    picture.appendChild(source);
    picture.appendChild(img);
    adLink.appendChild(picture);
    card.appendChild(adLink);

    document.body.appendChild(overlay);

    closeBtn = overlay.querySelector('.vignette-ad__close');
    closeBtn.addEventListener('click', close);
    overlay.querySelector('.vignette-ad__info').addEventListener('click', function (e) {
      e.stopPropagation();
      window.open(CONFIG.infoUrl, '_blank', 'noopener');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.style.display !== 'none') close();
    });
    return true;
  }

  function open(nextUrl) {
    pendingUrl = nextUrl || null;
    markShown();
    overlay.style.display = 'flex';
    document.body.classList.add('vignette-open');
    // next frame, so the fade actually runs
    requestAnimationFrame(function () { overlay.classList.add('is-open'); });

    timers.push(setTimeout(function () {
      closeBtn.classList.add('is-ready');
    }, CONFIG.closeEnabledAfterMs));

    if (pendingUrl && CONFIG.autoContinueMs > 0) {
      timers.push(setTimeout(close, CONFIG.autoContinueMs));
    }
  }

  function close() {
    timers.forEach(clearTimeout);
    timers = [];
    overlay.classList.remove('is-open');
    document.body.classList.remove('vignette-open');
    setTimeout(function () {
      overlay.style.display = 'none';
      if (pendingUrl) { var u = pendingUrl; pendingUrl = null; location.href = u; }
    }, 200);
  }

  function isOwnHost(host) {
    if (host === location.host || host === location.hostname) return true;
    var extra = CONFIG.internalHosts || [];
    for (var i = 0; i < extra.length; i++) {
      if (host === extra[i]) return true;
    }
    return false;
  }

  /* Is this a plain left-click on a normal internal link? */
  function isInternalNav(e, a) {
    if (e.defaultPrevented || e.button !== 0) return false;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return false;
    if (!a || !a.href || a.target === '_blank' || a.hasAttribute('download')) return false;
    if (a.id === 'vignetteAdLink' || a.closest('.vignette-ad')) return false;
    var url;
    try { url = new URL(a.href); } catch (err) { return false; }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    if (!isOwnHost(url.host)) return false;
    // same page, just a hash jump
    if (url.pathname === location.pathname && url.search === location.search) return false;
    return true;
  }

  function start() {
    if (!buildOverlay()) return;

    /* Type showVignette() in the console to force it open, ignoring the
       frequency cap and the trigger. Use this to check it renders at all. */
    window.showVignette = function () {
      try { sessionStorage.removeItem(KEY); } catch (e) {}
      open(null);
    };

    log('ready. trigger =', CONFIG.trigger);

    if (CONFIG.trigger === 'exit') {
      document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a');
        if (!a) return;
        if (!isInternalNav(e, a)) {
          log('click ignored (external, new tab, download, or same page):', a.href);
          return;
        }
        if (!dueAgain()) {
          log('within the', CONFIG.minMinutesBetween + '-minute cap; not showing.');
          return;
        }
        e.preventDefault();
        log('showing, then continuing to', a.href);
        open(a.href);
      }, true);
    } else {
      if (!cameFromThisSite()) {
        log('referrer is not this site (' + (document.referrer || 'empty') + '); not showing.');
      } else if (!dueAgain()) {
        log('within the', CONFIG.minMinutesBetween + '-minute cap; not showing.');
      } else {
        setTimeout(function () { open(null); }, CONFIG.showAfterMs);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
