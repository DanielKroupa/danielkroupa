import type { ReactNode } from "react";

type ServiceDetailTemplateProps = {
  title: string;
  children?: ReactNode;
};

export function ServiceDetailTemplate({
  title,
  children,
}: ServiceDetailTemplateProps) {
  return (
    <main className="min-h-screen bg-background pt-8 pb-16">
      <div className="container mx-auto md:px-6 px-2">
        <section className="mx-auto max-w-5xl rounded-2xl border border-border bg-linear-to-br from-brand-surface to-brand-surface-2 p-6 md:p-10">
          <p className="mb-4 text-sm tracking-[0.2em] text-brand-secondary uppercase">
            Služby
          </p>
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
            {title}
          </h1>

          {children}

          <a
            href="/#kontakt"
            className="mt-8 inline-block rounded-lg bg-brand-primary px-8 py-4 text-primary-foreground transition-all hover:scale-105 hover:bg-brand-primary-strong"
          >
            Nezávazně poptat službu
          </a>
        </section>
      </div>
    </main>
  );
}
