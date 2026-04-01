import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

import { GA_READY_EVENT } from "#/hooks/useGoogleAnalyticsConsent";

interface GoogleAnalyticsReadyEventDetail {
  measurementId: string;
}

export function useGoogleAnalyticsPageViews(analyticsEnabled: boolean) {
  const location = useLocation();

  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";
    if (!analyticsEnabled || !measurementId) {
      return;
    }

    const disableKey = `ga-disable-${measurementId}`;

    const sendPageView = () => {
      if (!window.gtag) {
        return;
      }

      if (window[disableKey] === true) {
        return;
      }

      if (window.__dkGaReadyMeasurementId !== measurementId) {
        return;
      }

      window.gtag("event", "page_view", {
        page_path: getCurrentPagePath(),
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    sendPageView();

    const handleAnalyticsReady = (event: Event) => {
      const readyEvent = event as CustomEvent<GoogleAnalyticsReadyEventDetail>;
      if (readyEvent.detail?.measurementId !== measurementId) {
        return;
      }

      sendPageView();
    };

    window.addEventListener(GA_READY_EVENT, handleAnalyticsReady);

    return () => {
      window.removeEventListener(GA_READY_EVENT, handleAnalyticsReady);
    };
  }, [analyticsEnabled, location.hash, location.pathname, location.search]);
}

function getCurrentPagePath() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}
