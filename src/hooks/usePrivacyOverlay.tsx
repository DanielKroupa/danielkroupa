import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface PrivacyOverlayContextValue {
  isOpen: boolean;
  openPrivacy: () => void;
  closePrivacy: () => void;
}

const noop = () => {};

const PrivacyOverlayContext = createContext<PrivacyOverlayContextValue>({
  isOpen: false,
  openPrivacy: noop,
  closePrivacy: noop,
});

export function PrivacyOverlayProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openPrivacy = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePrivacy = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo<PrivacyOverlayContextValue>(
    () => ({
      isOpen,
      openPrivacy,
      closePrivacy,
    }),
    [isOpen, openPrivacy, closePrivacy],
  );

  return (
    <PrivacyOverlayContext.Provider value={value}>
      {children}
    </PrivacyOverlayContext.Provider>
  );
}

export function usePrivacyOverlay() {
  return useContext(PrivacyOverlayContext);
}
