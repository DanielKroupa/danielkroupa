import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/webova-analytika")({
  component: WebAnalyticsPage,
});

export function WebAnalyticsPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/webova-analytika"];

  return <ServiceDetailTemplate title={service.title} />;
}
