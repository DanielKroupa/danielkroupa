import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import appCss from "../styles.css?url";

const THEME_INIT_SCRIPT = `(function(){try{var root=document.documentElement;var media=window.matchMedia('(prefers-color-scheme: dark)');var apply=function(isDark){var resolved=isDark?'dark':'light';root.classList.remove('light','dark');root.classList.add(resolved);root.style.colorScheme=resolved;root.removeAttribute('data-theme');};apply(media.matches);if(typeof media.addEventListener==='function'){media.addEventListener('change',function(event){apply(event.matches);});}else if(typeof media.addListener==='function'){media.addListener(function(event){apply(event.matches);});}}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="mx-auto font-sans antialiased wrap-anywhere selection:bg-brand-secondary/30 selection:text-foreground">
        <Header />
        {children}
        <Footer />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
