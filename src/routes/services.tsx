import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — AAKAAR by Kumar" },
      {
        name: "description",
        content:
          "Custom website design, e-commerce optimization, redesigns, portfolios, design systems, and performance audits. Starting at ₹50,000.",
      },
      { property: "og:title", content: "Services & Pricing — AAKAAR" },
      {
        property: "og:description",
        content: "Investment, not expense. Starting at ₹50,000.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    name: "Custom Website Design & Development",
    desc: "Bespoke sites built from scratch. No templates. Strategy, design, development, launch.",
    best: "Businesses wanting to stand out. Companies that tried templates and failed.",
  },
  {
    n: "02",
    name: "E-Commerce Optimization",
    desc: "Convert your online store. Better product pages, streamlined checkout, trust signals, mobile perfection.",
    best: "Online retailers, product-based businesses, SaaS companies.",
  },
  {
    n: "03",
    name: "Website Redesign",
    desc: "Your old site isn't working. Let's rebuild it — keeping what works, fixing what doesn't.",
    best: "Established businesses with outdated websites. Sites with poor conversion.",
  },
  {
    n: "04",
    name: "Portfolio & Case Study Sites",
    desc: "Showcase your best work with a site that tells the story. Perfect for agencies and creatives.",
    best: "Design/dev agencies, consultants, creative professionals.",
  },
  {
    n: "05",
    name: "Brand-Aligned Design Systems",
    desc: "Cohesive design guidelines that work across all your digital touchpoints.",
    best: "Growing teams needing consistency. Agencies needing scalable templates.",
  },
  {
    n: "06",
    name: "Performance & UX Audit",
    desc: "Your site exists but isn't performing. We identify problems and create a roadmap to fix them.",
    best: "Established websites with declining performance. High bounce rates.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="px-6 max-w-7xl mx-auto pt-16 pb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          Services / 006 Offerings
        </span>
        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mt-6">
          What I create.
        </h1>
      </section>

      {/* Services Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-10 group hover:bg-surface transition-colors">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-3xl font-bold tracking-tighter text-accent">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Service
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">
                {s.name}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
              <div className="border-t border-border pt-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Best For
                </span>
                <p className="mt-2 text-sm">{s.best}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="bg-accent text-accent-foreground py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
              Pricing Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter mt-6 leading-none">
              Investment,<br />not expense.
            </h2>
          </div>
          <div className="space-y-6 text-lg">
            <p>
              I don't compete on price. I compete on value. A cheap website is
              expensive — it fails to convert, reflects poorly on your brand,
              and requires constant fixes.
            </p>
            <p>A custom website is an investment. It generates leads. It builds trust. It becomes your top-performing marketing channel.</p>
            <div className="pt-6 border-t border-accent-foreground/30">
              <div className="font-mono text-xs uppercase tracking-widest opacity-80">
                Starting at
              </div>
              <div className="font-display text-5xl md:text-7xl font-bold tracking-tighter mt-2">
                ₹5000 to ₹5,00,000+
              </div>
              <p className="mt-3 text-sm opacity-80 italic">
                Every project is unique. Let's discuss what's right for you.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-background text-foreground px-10 py-5 font-display font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all mt-4"
            >
              Discuss your project →
            </a>
          </div>
        </div>
      </section>

      {/* What you're investing in */}
      <section className="px-6 max-w-7xl mx-auto py-32">
        <h2 className="font-display text-3xl md:text-5xl font-bold uppercase italic tracking-tighter mb-16 border-b border-border pb-6">
          What you're investing in
        </h2>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            ["Strategy", "Not templates"],
            ["Custom Design", "Not pre-made themes"],
            ["Performance", "Not slow bloat"],
            ["Long-term Support", "Not abandonment"],
          ].map(([h, p]) => (
            <div key={h}>
              <h4 className="font-display text-xl font-bold uppercase">{h}</h4>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-2">
                {p}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
