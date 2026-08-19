/* =============================================================
   ad.js — image lists + random picking. Nothing else.

   The CSS and the behaviour live inline in every page (a <style>
   block in the head and a <script> block before </body>). This
   file only decides WHICH picture each slot shows.

   Link it in the <head> of every page:
     <script src="/ad.js" defer></script>

   It exposes window.ZiphyAds with one picker per slot:
     ZiphyAds.anchor()           -> one anchor bar image
     ZiphyAds.displayMobile()    -> one in-content image, phone
     ZiphyAds.displayDesktop()   -> one in-content image, desktop
     ZiphyAds.vignetteMobile()   -> one full-screen image, phone
     ZiphyAds.vignetteDesktop()  -> one full-screen image, desktop

   Add or remove URLs below and every page picks them up.
   ============================================================= */
(function () {
  'use strict';

  /* ---------------- ANCHOR BAR creatives ---------------- */
  var ANCHOR = [
    'https://ziphynet.com/ads-src/st-ad-1.jpg',
    'https://ziphynet.com/ads-src/st-ad-2.jpg',
    'https://ziphynet.com/ads-src/st-ad-3.jpg',
    'https://ziphynet.com/ads-src/st-ad-4.jpg',
    'https://ziphynet.com/ads-src/st-ad-5.jpg',
    'https://ziphynet.com/ads-src/st-ad-6.jpg',
    'https://ziphynet.com/ads-src/st-ad-7.jpg',
    'https://ziphynet.com/ads-src/st-ad-8.jpg'
  ];

  /* ---------------- DISPLAY SLOT creatives ---------------- */
  /* Squarish or portrait files here — they sit centred at full slot height. */
  var DISPLAY_MOBILE = [
    'https://ziphynet.com/ads-src/ds-ad-1.jpg',
    'https://ziphynet.com/ads-src/ds-ad-2.jpg',
    'https://ziphynet.com/ads-src/ds-ad-3.jpg',
    'https://ziphynet.com/ads-src/ds-ad-4.jpg',
    'https://ziphynet.com/ads-src/ds-ad-5.jpg',
    'https://ziphynet.com/ads-src/ds-ad-6.jpg',
    'https://ziphynet.com/ads-src/ds-ad-7.jpg',
    'https://ziphynet.com/ads-src/ds-ad-8.jpg',
    'https://ziphynet.com/ads-src/ds-ad-9.jpg',
    'https://ziphynet.com/ads-src/ds-ad-10.jpg',
    'https://ziphynet.com/ads-src/ds-ad-11.jpg',
    'https://ziphynet.com/ads-src/ds-ad-12.jpg'
  ];

  /* Wide banner files here. */
  var DISPLAY_DESKTOP = [
    'https://ziphynet.com/ads-src/ds-ad-1.jpg',
    'https://ziphynet.com/ads-src/ds-ad-2.jpg',
    'https://ziphynet.com/ads-src/ds-ad-3.jpg',
    'https://ziphynet.com/ads-src/ds-ad-4.jpg',
    'https://ziphynet.com/ads-src/ds-ad-5.jpg',
    'https://ziphynet.com/ads-src/ds-ad-6.jpg',
    'https://ziphynet.com/ads-src/ds-ad-7.jpg',
    'https://ziphynet.com/ads-src/ds-ad-8.jpg',
    'https://ziphynet.com/ads-src/ds-ad-9.jpg',
    'https://ziphynet.com/ads-src/ds-ad-10.jpg',
    'https://ziphynet.com/ads-src/ds-ad-11.jpg',
    'https://ziphynet.com/ads-src/ds-ad-12.jpg'
  ];

  /* ---------------- VIGNETTE creatives ---------------- */
  /* MOBILE — 800 x 1200 px (2:3 portrait) */
  var VIGNETTE_MOBILE = [
    'https://ziphynet.com/ads-src/vig-ad-1.jpg',
    'https://ziphynet.com/ads-src/vig-ad-2.jpg',
    'https://ziphynet.com/ads-src/vig-ad-3.jpg',
    'https://ziphynet.com/ads-src/vig-ad-4.jpg',
    'https://ziphynet.com/ads-src/vig-ad-5.jpg',
    'https://ziphynet.com/ads-src/vig-ad-6.jpg',
    'https://ziphynet.com/ads-src/vig-ad-7.jpg',
    'https://ziphynet.com/ads-src/vig-ad-8.jpg',
    'https://ziphynet.com/ads-src/vig-ad-9.jpg',
    'https://ziphynet.com/ads-src/vig-ad-10.jpg',
    'https://ziphynet.com/ads-src/vig-ad-11.jpg',
    'https://ziphynet.com/ads-src/vig-ad-12.jpg'
  ];

  /* DESKTOP — 1600 x 900 px (16:9 landscape) */
  var VIGNETTE_DESKTOP = [
    'https://ziphynet.com/ads-src/vig-ad-1.jpg',
    'https://ziphynet.com/ads-src/vig-ad-2.jpg',
    'https://ziphynet.com/ads-src/vig-ad-3.jpg',
    'https://ziphynet.com/ads-src/vig-ad-4.jpg',
    'https://ziphynet.com/ads-src/vig-ad-5.jpg',
    'https://ziphynet.com/ads-src/vig-ad-6.jpg',
    'https://ziphynet.com/ads-src/vig-ad-7.jpg',
    'https://ziphynet.com/ads-src/vig-ad-8.jpg',
    'https://ziphynet.com/ads-src/vig-ad-9.jpg',
    'https://ziphynet.com/ads-src/vig-ad-10.jpg',
    'https://ziphynet.com/ads-src/vig-ad-11.jpg',
    'https://ziphynet.com/ads-src/vig-ad-12.jpg'
  ];


  /* ---- pickers: every image is used once before any repeats ---- */
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

  /* the anchor bar shows one image per page load, never the previous one */
  var lastAnchor = -1;
  function pickAnchor() {
    if (!ANCHOR.length) return '';
    if (ANCHOR.length === 1) return ANCHOR[0];
    var i;
    do { i = Math.floor(Math.random() * ANCHOR.length); } while (i === lastAnchor);
    lastAnchor = i;
    return ANCHOR[i];
  }

  window.ZiphyAds = {
    anchor:          pickAnchor,
    displayMobile:   makeBag(DISPLAY_MOBILE),
    displayDesktop:  makeBag(DISPLAY_DESKTOP),
    vignetteMobile:  makeBag(VIGNETTE_MOBILE),
    vignetteDesktop: makeBag(VIGNETTE_DESKTOP),

    /* used to warm the cache */
    lists: {
      anchor: ANCHOR,
      display: DISPLAY_MOBILE.concat(DISPLAY_DESKTOP)
    }
  };
})();
