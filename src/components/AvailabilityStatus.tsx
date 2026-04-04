import { motion } from "motion/react";

export type AvailabilityState = "available" | "limited" | "full";

type AvailabilityStatusProps = {
  status: AvailabilityState;
};

type AvailabilityConfig = {
  badgeLabel: string;
  message: string;
  badgeClassName: string;
  iconWrapperClassName: string;
};

const STATUS_CONFIG: Record<AvailabilityState, AvailabilityConfig> = {
  available: {
    badgeLabel: "K dispozici",
    message: "Volný pro nové projekty",
    badgeClassName:
      "border-emerald-400/70 bg-emerald-100 text-emerald-800 dark:border-emerald-300/40 dark:bg-emerald-400/15 dark:text-emerald-200",
    iconWrapperClassName:
      "bg-emerald-500/15 text-emerald-700 dark:bg-emerald-400/20 dark:text-emerald-200",
  },
  limited: {
    badgeLabel: "Omezená kapacita",
    message: "Aktuálně mám omezenou kapacitu pro nové projekty",
    badgeClassName:
      "border-orange-400/70 bg-orange-100 text-orange-900 dark:border-orange-300/40 dark:bg-orange-400/15 dark:text-orange-200",
    iconWrapperClassName:
      "bg-orange-500/15 text-orange-800 dark:bg-orange-400/20 dark:text-orange-200",
  },
  full: {
    badgeLabel: "Plně obsazen",
    message: "Aktuálně mám plně obsazenou kapacitu",
    badgeClassName:
      "border-red-400/70 bg-red-100 text-red-900 dark:border-red-300/40 dark:bg-red-400/15 dark:text-red-200",
    iconWrapperClassName:
      "bg-red-500/15 text-red-800 dark:bg-red-400/20 dark:text-red-200",
  },
};

export function AvailabilityStatus({ status }: AvailabilityStatusProps) {
  const config = STATUS_CONFIG[status];

  return (
    <section
      className="relative py-3 md:py-4 w-fit mx-auto md:mx-0"
      aria-label="Dostupnost pro nové projekty"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          className="rounded-2xl border border-border p-4 shadow-lg shadow-brand-glow-primary/30"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className={`mt-0.5`} aria-hidden="true">
                <span className=" p-2 flex items-center justify-center rounded-full bg-emerald-300 shadow-lg text-emerald-300 shadow-emerald-100/50">
                  {" "}
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground md:text-base">
                  {config.message}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
