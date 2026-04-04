const MOBILE_SCROLL_OFFSET = 72;
const DESKTOP_SCROLL_OFFSET = 80;

function getScrollOffset() {
  if (typeof window === "undefined") {
    return DESKTOP_SCROLL_OFFSET;
  }

  return window.matchMedia("(max-width: 767px)").matches
    ? MOBILE_SCROLL_OFFSET
    : DESKTOP_SCROLL_OFFSET;
}

export function normalizeSectionId(hashOrId: string) {
  return hashOrId.replace(/^#/, "").trim();
}

export function scrollToSectionById(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  if (typeof document === "undefined") {
    return false;
  }

  const normalizedSectionId = normalizeSectionId(sectionId);
  if (!normalizedSectionId) {
    return false;
  }

  const element = document.getElementById(normalizedSectionId);
  if (!element) {
    return false;
  }

  const offsetPosition =
    element.getBoundingClientRect().top + window.scrollY - getScrollOffset();

  window.scrollTo({
    top: Math.max(offsetPosition, 0),
    behavior,
  });

  return true;
}

type ScrollRetryOptions = {
  behavior?: ScrollBehavior;
  maxAttempts?: number;
};

export function scrollToSectionByIdWithRetry(
  sectionId: string,
  options?: ScrollRetryOptions,
) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const normalizedSectionId = normalizeSectionId(sectionId);
  if (!normalizedSectionId) {
    return () => undefined;
  }

  const behavior = options?.behavior ?? "smooth";
  const maxAttempts = options?.maxAttempts ?? 24;

  let attempts = 0;
  let rafId: number | null = null;

  const tryScroll = () => {
    if (scrollToSectionById(normalizedSectionId, behavior)) {
      return;
    }

    attempts += 1;
    if (attempts > maxAttempts) {
      return;
    }

    rafId = window.requestAnimationFrame(tryScroll);
  };

  rafId = window.requestAnimationFrame(tryScroll);

  return () => {
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
    }
  };
}
