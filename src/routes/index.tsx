import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "#/components/About";
import {
  AvailabilityStatus,
  type AvailabilityState,
} from "#/components/AvailabilityStatus";
import { ContactSection } from "#/components/Contact";
import { HeroSection } from "#/components/Hero";
import { PortfolioSection } from "#/components/Portfolio";
import { PricingSection } from "#/components/Pricing";
import { ProcessSection } from "#/components/Process";
import { ServicesSection } from "#/components/Services";

export const Route = createFileRoute("/")({ component: App });

const CURRENT_AVAILABILITY_STATUS: AvailabilityState = "available";

function App() {
  return (
    <main>
      <AvailabilityStatus status={CURRENT_AVAILABILITY_STATUS} />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
