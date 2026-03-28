import { useEffect } from "react";

const MANAGED_GA_SCRIPT_ATTRIBUTE = "data-dk-ga-script";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: string]: unknown;
  }
}

export function useGoogleAnalyticsConsent(analyticsEnabled: boolean) {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";

    if (!measurementId) {
      return;
    }

    const disableKey = `ga-disable-${measurementId}`;

    if (!analyticsEnabled) {
      window[disableKey] = true;
      clearGoogleAnalyticsCookies();
      return;
    }

    window[disableKey] = false;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[${MANAGED_GA_SCRIPT_ATTRIBUTE}="true"]`,
    );

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        initializeGoogleAnalytics(measurementId);
      } else {
        existingScript.addEventListener(
          "load",
          () => {
            initializeGoogleAnalytics(measurementId);
          },
          { once: true },
        );
      }
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.setAttribute(MANAGED_GA_SCRIPT_ATTRIBUTE, "true");
    script.dataset.loaded = "false";

    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        initializeGoogleAnalytics(measurementId);
      },
      { once: true },
    );

    document.head.appendChild(script);
  }, [analyticsEnabled]);
}

function initializeGoogleAnalytics(measurementId: string) {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
  });
}

function clearGoogleAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name))
    .filter(
      (name) =>
        name === "_gid" ||
        name === "_gat" ||
        name.startsWith("_ga") ||
        name.startsWith("_gcl"),
    );

  if (!cookieNames.length) {
    return;
  }

  const host = window.location.hostname;
  const baseDomain = host.split(".").slice(-2).join(".");
  const domains = Array.from(
    new Set([
      host,
      `.${host}`,
      baseDomain ? `.${baseDomain}` : "",
      "",
    ]).values(),
  ).filter(Boolean);

  for (const name of cookieNames) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}; SameSite=Lax`;
    }

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`;
  }
}
