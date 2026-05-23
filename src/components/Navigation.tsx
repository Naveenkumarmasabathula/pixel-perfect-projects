import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import logoMark from "@/assets/logo-mark.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoMark} alt="AAKAAR" className="h-9 w-9 object-contain" decoding="async" />
          <span className="font-display font-bold text-xl tracking-tighter">
            AAKAAR
          </span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(86vw,22rem)] border-border p-0">
            <SheetHeader className="border-b border-border px-6 py-5 text-left">
              <SheetTitle className="font-display text-xl tracking-tighter">AAKAAR</SheetTitle>
            </SheetHeader>
            <div className="px-6 py-6">
              <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {links.map((l) => (
                  <SheetClose asChild key={l.to}>
                    <Link
                      to={l.to}
                      className="border-b border-border/70 py-3 transition-colors hover:text-accent"
                      activeProps={{ className: "border-b border-accent py-3 text-foreground" }}
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <SheetClose asChild>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center border border-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Start a project
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Start a project
          </a>
        </div>
      </div>
    </nav>
  );
}
