(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var panel = document.querySelector("[data-mobile-panel]");
  var pendingAnalyticsEvents = [];

  var trackEvent = function (name, params) {
    params = params || {};
    params.transport_type = "beacon";

    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
      return;
    }

    pendingAnalyticsEvents.push({ name: name, params: params });
  };

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

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a[href]") : null;
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var label = (link.textContent || "").trim().replace(/\s+/g, " ");

    if (href.indexOf("psychologytoday.com") !== -1) {
      trackEvent("book_appointment_click", {
        link_url: href,
        link_text: label || "Psychology Today"
      });
    } else if (href.indexOf("hotdoc.com.au") !== -1) {
      trackEvent("booking_profile_click", {
        link_url: href,
        link_text: label || "HotDoc"
      });
    } else if (href.indexOf("mailto:") === 0) {
      trackEvent("contact_email_click", {
        link_url: href,
        link_text: label || "Email"
      });
    } else if (href.indexOf("tel:") === 0) {
      trackEvent("contact_phone_click", {
        link_url: href,
        link_text: label || "Phone"
      });
    }
  });

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

      pendingAnalyticsEvents.forEach(function (event) {
        gtag("event", event.name, event.params);
      });
      pendingAnalyticsEvents = [];
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadAnalytics, { timeout: 3000 });
    } else {
      window.setTimeout(loadAnalytics, 1800);
    }
  });
})();
