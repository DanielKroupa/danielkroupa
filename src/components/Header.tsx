import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { useSectionNavigation } from "#/hooks/useSectionNavigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollToSection } = useSectionNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleScrollToSection = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "shadow-xl shadow-black/10" : "shadow-none"
        }`}
      >
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={() => setIsMobileMenuOpen((open) => !open)}
          onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
          onScrollToSection={handleScrollToSection}
        />
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          aria-hidden="true"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="h-18" aria-hidden="true" />
    </>
  );
}
