import { WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-[120px] font-bold uppercase tracking-tighter leading-[0.85] mb-10">
          Let's talk{" "}
          <span className="text-accent underline decoration-4 underline-offset-8">
            Business
          </span>
        </h2>
        <p className="font-mono text-muted-foreground mb-12 uppercase tracking-widest text-xs">
          Skip the form. Chat with the designer directly.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-12 py-6 bg-foreground text-background font-display font-bold text-xl md:text-2xl uppercase hover:scale-105 transition-transform"
        >
          Open WhatsApp →
        </a>
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>© 2026 AAKAAR by Kumar. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
