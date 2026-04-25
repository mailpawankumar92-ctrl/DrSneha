(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var panel = document.querySelector("[data-mobile-panel]");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      panel.classList.toggle("open", !open);
      document.body.classList.toggle("menu-open", !open);
    });

    panel.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        panel.classList.remove("open");
        document.body.classList.remove("menu-open");
      }
    });
  }

  window.addEventListener("load", function () {
    var loadAnalytics = function () {
      if (window.__analyticsLoaded) return;
      window.__analyticsLoaded = true;

      var script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-12Q1JF38PZ";
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-12Q1JF38PZ", { anonymize_ip: true });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadAnalytics, { timeout: 3000 });
    } else {
      window.setTimeout(loadAnalytics, 1800);
    }
  });
})();
