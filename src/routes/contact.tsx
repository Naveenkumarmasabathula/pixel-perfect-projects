import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL, EMAIL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kumar — AAKAAR" },
      {
        name: "description",
        content:
          "Let's build something remarkable. Chat directly with Kumar on WhatsApp. Average response time: 2 hours.",
      },
      { property: "og:title", content: "Contact Kumar — AAKAAR" },
      {
        property: "og:description",
        content: "Skip the form. Chat directly with the designer.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="px-6 max-w-7xl mx-auto pt-16 pb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          Contact / Direct Line
        </span>
        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mt-6">
          Let's build<br />something<br /><span className="text-accent italic">remarkable.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Your next great website is one conversation away.
        </p>
      </section>

      {/* WhatsApp primary */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="block group border border-border hover:border-accent transition-all"
        >
          <div className="p-8 md:p-16 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Fastest / Recommended
              </span>
              <h2 className="font-display text-4xl md:text-7xl font-bold uppercase tracking-tighter mt-4 leading-none group-hover:text-accent transition-colors">
                Chat on<br />WhatsApp
              </h2>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                +91 70134 83183 · Reply within 2 hours
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <span className="font-display text-6xl md:text-8xl group-hover:translate-x-4 transition-transform">
                →
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* Other methods */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          <a
            href={`mailto:${EMAIL}`}
            className="bg-background p-10 group hover:bg-surface transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Email
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mt-4 group-hover:text-accent transition-colors break-all">
              {EMAIL}
            </h3>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              For detailed briefs and document attachments.
            </p>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-background p-10 group hover:bg-surface transition-colors"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
              Strategy Call
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mt-4 group-hover:text-accent transition-colors">
              Book a 20-min call
            </h3>
            <p className="mt-3 font-mono text-xs text-muted-foreground">
              Ping me on WhatsApp to lock a slot.
            </p>
          </a>
        </div>
      </section>

      {/* What to include */}
      <section className="px-6 max-w-5xl mx-auto pb-16">
        <div className="border-t border-border pt-12">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            When you message
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase mt-4 mb-6">
            Tell me about:
          </h3>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "Your business and what you do",
              "What's not working about your current site",
              "Your goal — leads, sales, authority, something else",
              "Rough budget range",
              "When you'd like to launch",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-accent font-mono">→</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-mono text-xs text-muted-foreground italic">
            I'll review and get back within 24 hours with initial thoughts and next steps.
          </p>
        </div>
      </section>
    </>
  );
}
