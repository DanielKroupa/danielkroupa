import { useEffect } from "react";

import { useCookieConsent } from "#/hooks/useCookieConsent";
import { GoogleAnalytics, useGoogleAnalytics } from "tanstack-router-ga4";

export function AnalyticsGate() {
  const { isReady, categories } = useCookieConsent();
  const ga = useGoogleAnalytics();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";
  const analyticsEnabled = isReady && categories.analytics;

  useEffect(() => {
    if (!measurementId) {
      if (import.meta.env.DEV && analyticsEnabled) {
        console.warn("[analytics] Missing VITE_GA_MEASUREMENT_ID.");
      }
      return;
    }

    const disableKey = `ga-disable-${measurementId}`;
    (window as unknown as Record<string, unknown>)[disableKey] =
      !analyticsEnabled;

    if (!analyticsEnabled) {
      clearGoogleAnalyticsCookies();
      return;
    }

    ga.consent("update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }, [analyticsEnabled, ga, measurementId]);

  if (!measurementId || !analyticsEnabled) {
    return null;
  }

  return (
    <GoogleAnalytics
      measurementId={measurementId}
      config={{
        debug_mode: import.meta.env.DEV,
      }}
      consentDefaults={{
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      }}
    />
  );
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
