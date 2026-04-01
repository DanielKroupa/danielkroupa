type SeoConfig = {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
  noIndex?: boolean;
};

const FALLBACK_SITE_URL = "https://danielkroupa.cz";
const DEFAULT_OG_IMAGE_PATH =
  "/img/20260315_2039_Modern Web Developer_remix_01kksg394nep0btjsyq7gvsnse.webp";

export const SITE_URL = normalizeSiteUrl(
  import.meta.env.VITE_SITE_URL ?? FALLBACK_SITE_URL,
);

export function createSeoHead({
  title,
  description,
  path,
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
  noIndex = false,
}: SeoConfig) {
  const canonicalUrl = toAbsoluteUrl(path);
  const ogImageUrl = toAbsoluteUrl(ogImagePath);

  return {
    meta: [
      {
        title,
      },
      {
        name: "description",
        content: description,
      },
      {
        name: "robots",
        content: noIndex ? "noindex, nofollow" : "index, follow",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Daniel Kroupa",
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:url",
        content: canonicalUrl,
      },
      {
        property: "og:image",
        content: ogImageUrl,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: ogImageUrl,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
  };
}

function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath === "/") {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${normalizedPath}`;
}

function normalizeSiteUrl(siteUrl: string) {
  return siteUrl.trim().replace(/\/+$/, "");
}
