import { useCallback } from "react";

import { useCookieConsent } from "#/hooks/useCookieConsent";
import { useGoogleAnalytics } from "tanstack-router-ga4";

export function useAnalyticsTracking() {
  const { categories } = useCookieConsent();
  const ga = useGoogleAnalytics();

  const trackSelectContent = useCallback(
    (itemId: string, contentType = "cta") => {
      if (!categories.analytics) {
        return;
      }

      ga.event("select_content", {
        content_type: contentType,
        item_id: itemId,
      });
    },
    [categories.analytics, ga],
  );

  const trackGenerateLead = useCallback(
    (method: string, preferredService?: string) => {
      if (!categories.analytics) {
        return;
      }

      ga.event("generate_lead", {
        method,
        preferred_service: preferredService,
      });
    },
    [categories.analytics, ga],
  );

  return {
    trackSelectContent,
    trackGenerateLead,
  };
}
