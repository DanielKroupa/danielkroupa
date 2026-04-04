import { useCallback } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { normalizeSectionId, scrollToSectionById } from "#/utils/sectionScroll";

type ScrollToSectionOptions = {
  behavior?: ScrollBehavior;
};

export function useSectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback(
    (sectionId: string, options?: ScrollToSectionOptions) => {
      const normalizedSectionId = normalizeSectionId(sectionId);
      if (!normalizedSectionId) {
        return;
      }

      if (location.pathname !== "/") {
        navigate({ to: "/", hash: normalizedSectionId });
        return;
      }

      scrollToSectionById(normalizedSectionId, options?.behavior ?? "smooth");
    },
    [location.pathname, navigate],
  );

  return {
    scrollToSection,
  };
}
