/* ============================================================================
   SIEVAX ACADEMY · Shared front-end behaviour
   ----------------------------------------------------------------------------
   Loaded with `defer` by index.html, so the DOM is parsed before any module
   runs. Three small, self-contained modules:

     1. Mobile navigation — hamburger toggle with synced ARIA state.
     2. Lead form         — AJAX submit with an inline success state.

   No dependencies, no build step.
   ============================================================================ */

/* ----------------------------------------------------------------------------
   1. Mobile navigation
   Toggle the dropdown, keep aria-expanded/label in sync, and close it on
   Escape or when a link inside the menu is clicked.
---------------------------------------------------------------------------- */
(function () {
  var btn = document.getElementById("navToggle");
  var menu = document.getElementById("navmenu");
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  btn.addEventListener("click", function () {
    setOpen(!menu.classList.contains("open"));
  });

  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("open")) {
      setOpen(false);
      btn.focus();
    }
  });
})();

/* ----------------------------------------------------------------------------
   2. Lead form
   Submit to the form service via fetch and reveal the inline success message.
   Until a real endpoint is configured (action still contains the placeholder),
   the form confirms without sending — "demo mode".
---------------------------------------------------------------------------- */
(function () {
  var form = document.getElementById("leadForm");
  var success = document.getElementById("leadSuccess");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var action = form.getAttribute("action") || "";

    function showSuccess() {
      form.style.display = "none";
      success.style.display = "block";
      try {
        success.focus();
      } catch (e) {}
    }

    // Endpoint not wired up yet → just confirm locally.
    if (action.indexOf("REPLACE_WITH_FORM_ID") !== -1) {
      showSuccess();
      return;
    }

    fetch(action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(showSuccess)
      .catch(showSuccess);
  });
})();

/* ----------------------------------------------------------------------------
   3. Explainer video
   Click-to-load YouTube facade: keep the poster until "play" is pressed, then
   swap in the (privacy-friendly, no-cookie) embed with autoplay. Until a real
   video ID is set on the frame (data-video-id still the placeholder), the button
   stays in demo mode and does nothing — mirrors the lead form above.
---------------------------------------------------------------------------- */
(function () {
  var frame = document.getElementById("videoEmbed");
  if (!frame) return;
  var btn = frame.querySelector(".vid-play");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var id = frame.getAttribute("data-video-id") || "";
    if (!id || id.indexOf("REPLACE_WITH_YOUTUBE_ID") !== -1) return; // demo mode

    var iframe = document.createElement("iframe");
    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      encodeURIComponent(id) +
      "?autoplay=1&rel=0";
    iframe.title = "Sievax Academy — explainer video";
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("loading", "lazy");

    frame.innerHTML = "";
    frame.appendChild(iframe);
  });
})();
