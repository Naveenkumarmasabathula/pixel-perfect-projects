import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logoUrl from "../assets/logo.png?url";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold tracking-tighter">404</h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-4 bg-accent text-accent-foreground font-display font-bold uppercase tracking-widest text-sm"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl font-bold tracking-tighter">Something broke.</h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {error.message}
        </p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-8 inline-block px-8 py-4 bg-accent text-accent-foreground font-display font-bold uppercase tracking-widest text-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AAKAAR — Custom Web Design by Kumar" },
      {
        name: "description",
        content:
          "Custom web design for businesses that refuse to blend in. No templates. No compromises. Just remarkable digital experiences.",
      },
      { name: "author", content: "Kumar / AAKAAR" },
      { property: "og:title", content: "AAKAAR — Custom Web Design by Kumar" },
      {
        property: "og:description",
        content: "Websites that don't just look beautiful—they perform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoUrl, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
