import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  normalizeSectionId,
  scrollToSectionByIdWithRetry,
} from "#/utils/sectionScroll";

export function useHashSectionScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const sectionId = normalizeSectionId(location.hash);
    if (!sectionId) {
      return;
    }

    return scrollToSectionByIdWithRetry(sectionId);
  }, [location.hash, location.pathname]);
}
