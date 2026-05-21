import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/site";
import caseFootwear from "@/assets/case-footwear.jpg";
import caseFinance from "@/assets/case-finance.jpg";
import caseAgency from "@/assets/case-agency.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — AAKAAR Case Studies by Kumar" },
      {
        name: "description",
        content:
          "Selected case studies: premium e-commerce, financial advisory authority, and creative agency portfolio redesigns.",
      },
      { property: "og:title", content: "Work — AAKAAR Case Studies" },
      {
        property: "og:description",
        content: "Three projects. Real metrics. Zero templates.",
      },
      { property: "og:image", content: caseAgency },
    ],
  }),
  component: WorkPage,
});

type CaseStudy = {
  number: string;
  title: string;
  client: string;
  img: string;
  challenge: string;
  solution: string[];
  result: string;
  highlights: string[];
};

const studies: CaseStudy[] = [
  {
    number: "001",
    title: "E-Commerce Elevation",
    client: "Premium Footwear Brand",
    img: caseFootwear,
    challenge:
      "Beautiful products, invisible online. Great inventory, zero digital presence. Their Shopify store was losing customers to better-designed competitors.",
    solution: [
      "Custom product showcase with lifestyle photography",
      "Streamlined checkout (cart abandonment reduced 34%)",
      "Trust signals & social proof integration",
      "Mobile-first design (70% of traffic from phones)",
    ],
    result:
      "30% increase in conversions within 3 months. The website now reflects the premium quality of their products.",
    highlights: [
      "Minimalist product layouts with dramatic imagery",
      "Navy + gold complementary palette",
      "Subtle texture work for premium feel",
      "2.1s load time",
    ],
  },
  {
    number: "002",
    title: "Local Service Authority",
    client: "Financial Advisory Firm",
    img: caseFinance,
    challenge:
      "Competing against national firms with massive budgets. They needed to position themselves as the trusted, local alternative.",
    solution: [
      "Bespoke design reflecting their local roots",
      "Educational content hub",
      "Client testimonials as focal points",
      "Clear service architecture",
    ],
    result:
      "Lead inquiries increased by 45%. Website became their #1 lead generation source.",
    highlights: [
      "Asymmetrical balance for visual interest",
      "Emphasis on client success stories",
      "Typography hierarchy for easy scanning",
      "Strategic white space",
    ],
  },
  {
    number: "003",
    title: "Creative Agency Portfolio",
    client: "Digital Marketing Agency",
    img: caseAgency,
    challenge:
      "Their old portfolio was cluttered and didn't reflect the quality of their work. Prospects couldn't quickly understand their capabilities.",
    solution: [
      "Redesigned with clean 960px grid system",
      "One project per scroll to create emphasis",
      "Filtered navigation by service type",
      "Animated case study reveals",
    ],
    result:
      "30% more qualified leads. Easier client onboarding. 5 new contracts directly attributed to the new website.",
    highlights: [
      "960-grid for professional structure",
      "Strategic project isolation (one per viewport)",
      "Subtle animations (no distraction)",
      "Fully responsive across devices",
    ],
  },
];

function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto pt-16 pb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          Selected Work — 003 Projects
        </span>
        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mt-6">
          Work that<br />speaks for itself.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Here are a few projects that represent the quality and approach we
          bring to every engagement.
        </p>
      </section>

      {/* Case Studies */}
      <div className="space-y-32 md:space-y-48 pb-32">
        {studies.map((s, i) => (
          <article key={s.number} className="px-6 max-w-7xl mx-auto">
            <div className="flex items-baseline justify-between border-b border-border pb-6 mb-12">
              <span className="font-mono text-xs text-muted-foreground">
                CASE / {s.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {s.client}
              </span>
            </div>

            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-7">
                <div className="aspect-[16/10] bg-surface outline-1 -outline-offset-1 outline-border overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col gap-8">
                <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none">
                  {s.title}
                </h2>

                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                    The Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{s.challenge}</p>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                    The Solution
                  </h4>
                  <ul className="space-y-2">
                    {s.solution.map((line) => (
                      <li key={line} className="flex gap-3 text-sm">
                        <span className="text-accent font-mono">→</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface p-6 border-l-2 border-accent">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                    The Result
                  </h4>
                  <p className="font-display text-lg italic">{s.result}</p>
                </div>
              </div>
            </div>

            {/* Design highlights */}
            <div className="mt-16 grid md:grid-cols-4 gap-px bg-border">
              {s.highlights.map((h, j) => (
                <div key={h} className="bg-background p-6">
                  <span className="font-mono text-[10px] text-accent">
                    H/{String(j + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm">{h}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="px-6 max-w-7xl mx-auto pb-16">
        <div className="border-t border-border pt-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            Your project, next.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block bg-accent text-accent-foreground px-10 py-5 font-display font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all"
          >
            Start on WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
