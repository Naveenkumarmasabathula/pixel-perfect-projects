import { Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/site";
import logo from "@/assets/logo.png";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AAKAAR" className="h-9 w-9 object-contain" />
          <span className="font-display font-bold text-xl tracking-tighter">
            AAKAAR
          </span>
        </Link>
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
