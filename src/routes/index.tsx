import { createFileRoute, Link } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/site";
import caseFootwear from "@/assets/case-footwear.jpg";
import caseFinance from "@/assets/case-finance.jpg";
import caseAgency from "@/assets/case-agency.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AAKAAR — Websites That Don't Just Look Beautiful. They Perform." },
      {
        name: "description",
        content:
          "Custom web design studio by Kumar. Conversion-focused websites for businesses that refuse to blend in.",
      },
      { property: "og:title", content: "AAKAAR — Custom Web Design by Kumar" },
      {
        property: "og:description",
        content: "No templates. No compromises. Just results.",
      },
    ],
  }),
  component: Index,
});

const cases = [
  {
    img: caseFootwear,
    name: "Premium Footwear",
    tag: "E-Commerce / Custom Build",
    metric: "+30%",
    metricLabel: "Conversion Lift",
    span: "md:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    img: caseFinance,
    name: "Financial Advisory",
    tag: "Local Authority Site",
    metric: "+45%",
    metricLabel: "Lead Inquiries",
    span: "md:col-span-4 md:mt-20",
    aspect: "aspect-[4/5]",
  },
  {
    img: caseAgency,
    name: "Creative Agency",
    tag: "Portfolio Redesign",
    metric: "5",
    metricLabel: "New Contracts Won",
    span: "md:col-span-12",
    aspect: "aspect-[21/9]",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto pt-12 pb-32 md:pb-40">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 font-mono text-accent text-sm">
            <span className="size-2 bg-accent rounded-full animate-pulse" />
            AVAILABLE FOR Q3 2026
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-[140px] leading-[0.85] font-bold tracking-tighter uppercase">
            No templates.
            <br />
            No compromises.
            <br />
            <span className="text-muted-foreground">Just results.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-8 md:mt-12">
            <p className="max-w-md text-lg md:text-xl text-muted-foreground leading-relaxed">
              Kumar builds high-conversion digital experiences for founders who
              are tired of looking like everyone else.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 bg-accent px-8 py-5 text-accent-foreground font-display font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
              >
                Talk directly on WhatsApp
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <p className="font-mono text-[10px] text-muted-foreground uppercase text-right">
                Average response time: 2 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 max-w-7xl mx-auto mb-32 md:mb-40">
        <div className="flex justify-between items-baseline mb-12 border-b border-border pb-6">
          <h2 className="font-display text-3xl md:text-4xl uppercase font-bold italic">
            Selected Work
          </h2>
          <span className="font-mono text-xs text-muted-foreground">001 — 003</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {cases.map((c, i) => (
            <Link
              key={c.name}
              to="/work"
              className={`${c.span} group cursor-pointer`}
            >
              <div
                className={`w-full ${c.aspect} bg-surface outline-1 -outline-offset-1 outline-border overflow-hidden mb-6 relative`}
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase group-hover:text-accent transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm mt-1">
                    {c.tag}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-accent font-bold text-lg">{c.metric}</span>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">
                    {c.metricLabel}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/work"
            className="inline-block font-mono text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            View all case studies →
          </Link>
        </div>
      </section>

      {/* Marquee statement */}
      <section className="bg-accent text-accent-foreground py-24 md:py-32 overflow-hidden">
        <div className="whitespace-nowrap flex font-display text-[12vw] font-bold uppercase leading-none opacity-20 select-none animate-marquee w-[200%]">
          <span className="mr-10">NO TEMPLATES • NO COMPROMISES • </span>
          <span className="mr-10">NO TEMPLATES • NO COMPROMISES • </span>
        </div>
        <div className="max-w-7xl mx-auto px-6 -mt-6 md:-mt-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-6xl font-bold font-display uppercase leading-tight">
                The Kumar Method.
              </h2>
              <p className="text-lg md:text-xl">
                I don't do discovery calls that last 3 hours. I don't send 50-page
                PDF proposals. I build websites that make people stop scrolling
                and start paying.
              </p>
            </div>
            <div className="grid gap-8">
              {[
                ["01", "Beauty With Purpose", "Design isn't decoration. Every element serves your message."],
                ["02", "Performance Obsession", "Beautiful sites that load slowly are expensive art."],
                ["03", "Strategic Thinking", "I design for your customers, not for design awards."],
              ].map(([n, h, p]) => (
                <div key={n} className="border-t border-accent-foreground/30 pt-6">
                  <span className="font-mono text-sm uppercase">Principle {n}</span>
                  <h4 className="text-xl md:text-2xl font-bold font-display mt-2 uppercase">{h}</h4>
                  <p className="mt-2 opacity-80">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 max-w-7xl mx-auto py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            ["50+", "Custom websites"],
            ["8+", "Years in design"],
            ["99%", "Client satisfaction"],
            ["2-4 wk", "Avg. timeline"],
          ].map(([n, l]) => (
            <div key={l} className="border-t border-border pt-6">
              <div className="font-display text-5xl md:text-6xl font-bold tracking-tighter">{n}</div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 max-w-5xl mx-auto py-32 text-center">
        <p className="font-display text-3xl md:text-5xl font-bold leading-tight tracking-tight italic">
          "Kumar didn't just build a website. He understood our business and
          created a digital asset that actually generates revenue."
        </p>
        <p className="mt-10 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          — Priya Sharma, Founder, Financial Advisory Firm
        </p>
      </section>
    </>
  );
}
