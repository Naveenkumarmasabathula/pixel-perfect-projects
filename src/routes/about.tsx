import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kumar — AAKAAR Custom Web Design" },
      {
        name: "description",
        content:
          "Meet Kumar, founder of AAKAAR. 8+ years of strategic, performance-obsessed web design for businesses that refuse to blend in.",
      },
      { property: "og:title", content: "About Kumar — AAKAAR" },
      {
        property: "og:description",
        content: "Strategic, performance-obsessed custom web design.",
      },
    ],
  }),
  component: AboutPage,
});

const phases = [
  {
    n: "01",
    title: "Discovery & Strategy",
    body: "We go deep. I spend time understanding your business, customers, competitors, and goals.",
    deliverable: "Strategic brief + design direction recommendations",
    timeline: "1–2 weeks",
  },
  {
    n: "02",
    title: "Wireframing & IA",
    body: "Structure before pixels. We map the logic of your website to ensure clarity and flow.",
    deliverable: "Approved wireframes + sitemap",
    timeline: "1 week",
  },
  {
    n: "03",
    title: "Visual Design",
    body: "Beauty meets strategy. Colors, typography, imagery, and texture come together.",
    deliverable: "Design system + brand guidelines",
    timeline: "2–3 weeks",
  },
  {
    n: "04",
    title: "Development & Optimization",
    body: "Your design comes to life as a fast, functional, beautiful website. <3s load. 95+ PageSpeed.",
    deliverable: "Live website + performance report",
    timeline: "2–3 weeks",
  },
  {
    n: "05",
    title: "Launch & Support",
    body: "We go live, but I don't disappear. 30 days post-launch support is included.",
    deliverable: "Live website + training + support",
    timeline: "1 week + ongoing",
  },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 max-w-7xl mx-auto pt-16 pb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          About / Kumar
        </span>
        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mt-6">
          Hello,<br />I'm <span className="text-accent">Kumar</span>.
        </h1>
      </section>

      {/* Intro */}
      <section className="px-6 max-w-5xl mx-auto pb-32">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Founder, AAKAAR
            </span>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founder of <span className="text-foreground font-semibold">AAKAAR</span> — a custom
              web design studio focused on one thing: creating websites that
              stand out.
            </p>
            <p>
              For years, I watched businesses settle for mediocre templates and
              generic designs. They deserved better. So I decided to do
              something different.
            </p>
            <p>
              I don't just build websites. I build digital storefronts, trust
              machines, and sales engines. The kind of sites that make your
              competitors wonder how you did it.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {[
            ["50+", "Custom websites designed"],
            ["8+", "Years in web & graphic design"],
            ["99%", "Client satisfaction rate"],
            ["2-4 wk", "Average project timeline"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-8">
              <div className="font-display text-5xl md:text-6xl font-bold tracking-tighter text-accent">
                {n}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="border-b border-border pb-6 mb-16 flex items-baseline justify-between">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase italic tracking-tighter">
            How We Work
          </h2>
          <span className="font-mono text-xs text-muted-foreground">5 PHASES</span>
        </div>

        <div className="space-y-16">
          {phases.map((p) => (
            <div key={p.n} className="grid md:grid-cols-12 gap-8 border-t border-border pt-8">
              <div className="md:col-span-2">
                <span className="font-display text-6xl md:text-7xl font-bold text-accent tracking-tighter">
                  {p.n}
                </span>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
              <div className="md:col-span-4 space-y-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    You Get
                  </span>
                  <p className="text-sm mt-1">{p.deliverable}</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Timeline
                  </span>
                  <p className="text-sm mt-1 font-mono">{p.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-7xl mx-auto pb-16">
        <div className="border-t border-border pt-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            Ready to start?
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block bg-accent text-accent-foreground px-10 py-5 font-display font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
          >
            Message Kumar on WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
