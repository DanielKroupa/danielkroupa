export type ServiceRoute =
  | "/sluzby/vyvoj-webu"
  | "/sluzby/redesign"
  | "/sluzby/vylepseni-seo"
  | "/sluzby/webova-analytika"
  | "/sluzby/optimalizace-webu";

export type ServiceDefinition = {
  title: string;
  to: ServiceRoute;
};

export const SERVICE_DEFINITIONS: ServiceDefinition[] = [
  {
    title: "Vývoj webu",
    to: "/sluzby/vyvoj-webu",
  },
  {
    title: "Redesign stránek",
    to: "/sluzby/redesign",
  },
  {
    title: "Vylepšení SEO",
    to: "/sluzby/vylepseni-seo",
  },
  {
    title: "Webová analytika",
    to: "/sluzby/webova-analytika",
  },
  {
    title: "Optimalizace webu",
    to: "/sluzby/optimalizace-webu",
  },
];

export const SERVICE_BY_ROUTE: Record<ServiceRoute, ServiceDefinition> =
  SERVICE_DEFINITIONS.reduce(
    (accumulator, service) => {
      accumulator[service.to] = service;
      return accumulator;
    },
    {} as Record<ServiceRoute, ServiceDefinition>,
  );
