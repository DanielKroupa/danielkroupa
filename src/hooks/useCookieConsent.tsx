import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  COOKIE_CONSENT_STORAGE_KEY,
  createAcceptAllRecord,
  createConsentRecord,
  createRejectAllRecord,
  getDefaultCookieCategories,
  parseConsentRecord,
  serializeConsentRecord,
  type CookieConsentCategories,
  type CookieConsentRecord,
} from "#/lib/cookies/consent";

interface CookieConsentContextValue {
  isReady: boolean;
  bannerVisible: boolean;
  settingsOpen: boolean;
  record: CookieConsentRecord | null;
  categories: CookieConsentCategories;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  saveSelection: (
    selection: Pick<CookieConsentCategories, "analytics" | "preferences">,
  ) => void;
}

const noop = () => {};

const CookieConsentContext = createContext<CookieConsentContextValue>({
  isReady: false,
  bannerVisible: false,
  settingsOpen: false,
  record: null,
  categories: getDefaultCookieCategories(),
  openSettings: noop,
  closeSettings: noop,
  acceptAll: noop,
  rejectAll: noop,
  saveSelection: noop,
});

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [record, setRecord] = useState<CookieConsentRecord | null>(null);

  useEffect(() => {
    const parsedRecord = readConsentRecord();
    if (!parsedRecord) {
      clearConsentRecord();
    }
    setRecord(parsedRecord);
    setIsReady(true);
  }, []);

  const persistRecord = useCallback((nextRecord: CookieConsentRecord) => {
    setRecord(nextRecord);
    try {
      localStorage.setItem(
        COOKIE_CONSENT_STORAGE_KEY,
        serializeConsentRecord(nextRecord),
      );
    } catch {
      // Ignore storage errors and keep runtime state consistent.
    }
  }, []);

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    persistRecord(createAcceptAllRecord());
    setSettingsOpen(false);
  }, [persistRecord]);

  const rejectAll = useCallback(() => {
    persistRecord(createRejectAllRecord());
    setSettingsOpen(false);
  }, [persistRecord]);

  const saveSelection = useCallback(
    (selection: Pick<CookieConsentCategories, "analytics" | "preferences">) => {
      persistRecord(createConsentRecord(selection));
      setSettingsOpen(false);
    },
    [persistRecord],
  );

  const categories = record?.categories ?? getDefaultCookieCategories();
  const value = useMemo<CookieConsentContextValue>(
    () => ({
      isReady,
      bannerVisible: isReady && record === null,
      settingsOpen,
      record,
      categories,
      openSettings,
      closeSettings,
      acceptAll,
      rejectAll,
      saveSelection,
    }),
    [
      isReady,
      record,
      categories,
      settingsOpen,
      openSettings,
      closeSettings,
      acceptAll,
      rejectAll,
      saveSelection,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

function readConsentRecord(): CookieConsentRecord | null {
  try {
    return parseConsentRecord(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY));
  } catch {
    return null;
  }
}

function clearConsentRecord() {
  try {
    localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY);
  } catch {
    // Ignore storage errors.
  }
}
