import { PrivacyDialog } from "#/components/PrivacyDialog";
import { usePrivacyOverlay } from "#/hooks/usePrivacyOverlay";

export function PrivacyOverlayLayer() {
  const { isOpen, closePrivacy } = usePrivacyOverlay();

  if (!isOpen) {
    return null;
  }

  return <PrivacyDialog onClose={closePrivacy} />;
}
