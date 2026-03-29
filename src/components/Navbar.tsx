import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SERVICE_DEFINITIONS } from "#/utils/services";

type NavbarProps = {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
  onScrollToSection: (id: string) => void;
};

type SectionNavItem = {
  label: string;
  type: "section";
  sectionId: string;
};

type RouteNavItem = {
  label: string;
  type: "route";
  to: "/faq";
};

type NavItem = SectionNavItem | RouteNavItem;

const NAV_ITEMS: NavItem[] = [
  { label: "Proces", type: "section", sectionId: "proces" },
  { label: "Projekty", type: "section", sectionId: "portfolio" },
  { label: "O mně", type: "section", sectionId: "o-mne" },
];

export function Navbar({
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
  onScrollToSection,
}: NavbarProps) {
  const [isServicesDesktopOpen, setIsServicesDesktopOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const location = useLocation();
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileSectionScrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setIsServicesDesktopOpen(false);
    setIsServicesMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (!servicesMenuRef.current?.contains(target)) {
        setIsServicesDesktopOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesDesktopOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(
    () => () => {
      if (mobileSectionScrollTimeoutRef.current !== null) {
        window.clearTimeout(mobileSectionScrollTimeoutRef.current);
      }
    },
    [],
  );

  const handleSectionClick = (sectionId: string, closeMobileMenu: boolean) => {
    if (closeMobileMenu && location.pathname === "/") {
      onCloseMobileMenu();
      if (mobileSectionScrollTimeoutRef.current !== null) {
        window.clearTimeout(mobileSectionScrollTimeoutRef.current);
      }
      // Wait for the mobile menu collapse animation before scrolling.
      mobileSectionScrollTimeoutRef.current = window.setTimeout(() => {
        onScrollToSection(sectionId);
      }, 220);
      return;
    }

    if (closeMobileMenu) {
      onCloseMobileMenu();
    }

    onScrollToSection(sectionId);
  };

  const renderNavItem = (item: NavItem, mobile: boolean) => {
    if (item.type === "section") {
      return (
        <button
          type="button"
          key={item.label}
          onClick={() => handleSectionClick(item.sectionId, mobile)}
          className={`cursor-pointer text-foreground transition-colors hover:text-brand-secondary ${mobile ? "text-left" : ""}`}
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link
        key={item.label}
        to={item.to}
        className="cursor-pointer text-foreground transition-colors hover:text-brand-secondary"
        onClick={mobile ? onCloseMobileMenu : undefined}
      >
        {item.label}
      </Link>
    );
  };

  const ctaClass =
    "rounded-lg cursor-pointer bg-brand-primary px-6 py-2 text-primary-foreground transition-all hover:bg-brand-primary-strong";
  const navLinkClass =
    "cursor-pointer text-foreground transition-colors hover:text-brand-secondary";

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-foreground">
          Daniel<span className="text-brand-primary">Kroupa</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div
            ref={servicesMenuRef}
            className="relative"
            onMouseEnter={() => setIsServicesDesktopOpen(true)}
            onMouseLeave={() => setIsServicesDesktopOpen(false)}
          >
            <button
              ref={servicesButtonRef}
              onFocus={() => setIsServicesDesktopOpen(true)}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " " ||
                  event.key === "ArrowDown"
                ) {
                  event.preventDefault();
                  setIsServicesDesktopOpen(true);
                }
              }}
              className={`${navLinkClass} flex items-center gap-1`}
              aria-haspopup="menu"
              aria-expanded={isServicesDesktopOpen}
              aria-controls="services-desktop-menu"
            >
              Služby
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isServicesDesktopOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <AnimatePresence>
              {isServicesDesktopOpen && (
                <motion.div
                  id="services-desktop-menu"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-border bg-card p-2 shadow-2xl"
                  role="menu"
                >
                  {SERVICE_DEFINITIONS.map((service) => (
                    <Link
                      key={service.to}
                      to={service.to}
                      className="block rounded-lg px-3 py-2 hover:bg-muted/50"
                      onClick={() => setIsServicesDesktopOpen(false)}
                      role="menuitem"
                    >
                      <span className="block text-sm font-semibold text-foreground">
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_ITEMS.map((item) => renderNavItem(item, false))}
          <button
            type="button"
            onClick={() => handleSectionClick("kontakt", false)}
            className={`${ctaClass} hover:scale-105`}
          >
            Nezávazná poptávka
          </button>
        </div>

        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="text-foreground md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label="Přepnout mobilní menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-4 pb-2">
              <div>
                <button
                  type="button"
                  onClick={() => setIsServicesMobileOpen((isOpen) => !isOpen)}
                  className={`${navLinkClass} text-left w-full flex items-center justify-between`}
                  aria-expanded={isServicesMobileOpen}
                  aria-controls="services-mobile-menu"
                >
                  Služby
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isServicesMobileOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isServicesMobileOpen && (
                    <motion.div
                      id="services-mobile-menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-border pl-4">
                        {SERVICE_DEFINITIONS.map((service) => (
                          <Link
                            key={service.to}
                            to={service.to}
                            className="text-sm text-muted-foreground transition-colors hover:text-brand-secondary"
                            onClick={onCloseMobileMenu}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {NAV_ITEMS.map((item) => renderNavItem(item, true))}
              <button
                type="button"
                onClick={() => handleSectionClick("kontakt", true)}
                className={`${ctaClass} text-left`}
              >
                Nezávazná poptávka
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
