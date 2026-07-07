/* ============================================================================
   SIEVAX ACADEMY · Shared front-end behaviour
   ----------------------------------------------------------------------------
   Loaded with `defer` by both index.html and illustrative.html, so the DOM is
   parsed before either module runs. Two small, self-contained modules:

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
