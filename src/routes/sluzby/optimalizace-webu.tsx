import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { createSeoHead } from "#/lib/seo/meta";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/optimalizace-webu")({
  component: WebsiteOptimizationPage,
  head: () =>
    createSeoHead({
      title: "Optimalizace webu | Daniel Kroupa",
      description:
        "Zrychlení a technická optimalizace webových stránek pro lepší uživatelský zážitek.",
      path: "/sluzby/optimalizace-webu",
    }),
});

export function WebsiteOptimizationPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/optimalizace-webu"];

  return <ServiceDetailTemplate title={service.title} />;
}
