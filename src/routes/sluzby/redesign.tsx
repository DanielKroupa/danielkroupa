import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/redesign")({
  component: RedesignPage,
  head: () => ({
    meta: [
      {
        title: "Redesign webu | Daniel Kroupa",
      },
    ],
  }),
});

export function RedesignPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/redesign"];

  return <ServiceDetailTemplate title={service.title} />;
}
