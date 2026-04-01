import { Link } from "@tanstack/react-router";

export function RootNotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-5xl items-center justify-center px-6 py-20">
      <section className="w-full max-w-xl rounded-3xl border border-brand-primary/15 bg-card p-8 text-center shadow-lg shadow-brand-primary/5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Stránka nebyla nalezena
        </h1>
        <p className="mt-3 text-sm text-foreground-muted">
          Požadovaná stránka neexistuje nebo byla přesunuta.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-primary/90"
        >
          Zpět na úvod
        </Link>
      </section>
    </main>
  );
}
