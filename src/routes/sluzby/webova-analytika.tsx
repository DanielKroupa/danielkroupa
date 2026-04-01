import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailTemplate } from "#/components/sections/ServiceDetail";
import { createSeoHead } from "#/lib/seo/meta";
import { SERVICE_BY_ROUTE } from "#/utils/services";

export const Route = createFileRoute("/sluzby/webova-analytika")({
  component: WebAnalyticsPage,
  head: () =>
    createSeoHead({
      title: "Webová analytika | Daniel Kroupa",
      description:
        "Nastavení a vyhodnocení webové analytiky pro přesná data o návštěvnosti, chování uživatelů a konverzích.",
      path: "/sluzby/webova-analytika",
    }),
});

export function WebAnalyticsPage() {
  const service = SERVICE_BY_ROUTE["/sluzby/webova-analytika"];

  return <ServiceDetailTemplate title={service.title} />;
}
