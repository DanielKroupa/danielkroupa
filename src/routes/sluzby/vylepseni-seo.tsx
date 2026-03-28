import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/vylepseni-seo")({
  component: SeoImprovementsPage,
  head: () => ({
    meta: [
      {
        title: "Vylepšení SEO | Daniel Kroupa",
      },
    ],
  }),
});

export function SeoImprovementsPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/vylepseni-seo"];

  return <ServiceDetailTemplate title={service.title} />;
}
