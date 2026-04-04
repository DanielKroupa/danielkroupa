import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";

import { PrivacyDialog } from "#/components/PrivacyDialog";
import { createSeoHead } from "#/lib/seo/meta";

export const Route = createFileRoute("/privacy")({
  head: () =>
    createSeoHead({
      title: "Ochrana osobních údajů | Daniel Kroupa",
      description:
        "Informace o zpracování osobních údajů, používání cookies a ochraně soukromí.",
      path: "/privacy",
      noIndex: true,
    }),
  component: PrivacyPage,
});

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
