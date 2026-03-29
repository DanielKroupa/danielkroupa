import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";

import { PrivacyDialog } from "#/components/PrivacyDialog";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

export function PrivacyPage() {
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    navigate({ to: "/" });
  }, [navigate]);

  return <PrivacyDialog onClose={handleClose} />;
}
