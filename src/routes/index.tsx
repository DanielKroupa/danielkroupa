import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "#/components/About";
import {
  AvailabilityStatus,
  type AvailabilityState,
} from "#/components/AvailabilityStatus";
import { ContactSection } from "#/components/Contact";
import { HeroSection } from "#/components/Hero";
import { ProjectsSection } from "#/components/Projects";
import { PricingSection } from "#/components/Pricing";
import { ProcessSection } from "#/components/Process";
import { ServicesSection } from "#/components/Services";
import { createSeoHead } from "#/lib/seo/meta";

export const Route = createFileRoute("/")({
  head: () =>
    createSeoHead({
      title: "Daniel Kroupa | Vývoj webů na míru",
      description:
        "Navrhuji a vyvíjím moderní webové stránky na míru. Rychlé, optimalizované a připravené pro růst vašeho podnikání.",
      path: "/",
    }),
  component: App,
});

const CURRENT_AVAILABILITY_STATUS: AvailabilityState = "available";

function App() {
  return (
    <main>
      <AvailabilityStatus status={CURRENT_AVAILABILITY_STATUS} />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
