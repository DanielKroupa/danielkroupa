import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "#/components/About";
import { ContactSection } from "#/components/Contact";
import { HeroSection } from "#/components/Hero";
import { PortfolioSection } from "#/components/Portfolio";
import { PricingSection } from "#/components/Pricing";
import { ProcessSection } from "#/components/Process";
import { ServicesSection } from "#/components/Services";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
