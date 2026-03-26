import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/optimalizace-webu")({
  component: WebsiteOptimizationPage,
});

export function WebsiteOptimizationPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/optimalizace-webu"];

  return <ServiceDetailTemplate title={service.title} />;
}
