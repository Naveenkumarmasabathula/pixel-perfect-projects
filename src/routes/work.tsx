import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL } from "@/lib/site";
import caseFootwear from "@/assets/case-footwear.jpg";
import caseFinance from "@/assets/case-finance.jpg";
import caseAgency from "@/assets/case-agency.jpg";
import workedOn1 from "@/assets/workedON1.png";
import workedOn2 from "@/assets/workedON2.png";
import workedOn3 from "@/assets/workedON3.png";
import workedOn4 from "@/assets/workedON4.png";
import workedOn5 from "@/assets/workedON5.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Project Showcase — AAKAAR" },
      {
        name: "description",
        content:
          "A curated showcase of recent projects across e-commerce, financial services, and creative portfolios.",
      },
      { property: "og:title", content: "Project Showcase — AAKAAR" },
      {
        property: "og:description",
        content: "Three projects. Real outcomes. Zero templates.",
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

const featuredProjects = [
  {
    n: "01",
    title: "ScaleOXperts Blog",
    kind: "Content / Growth",
    summary:
      "An editorial layout for marketing insights, built to make the content feel premium, readable, and easy to scan.",
    img: workedOn1,
  },
  {
    n: "02",
    title: "Miftech Solution",
    kind: "Industrial / Services",
    summary:
      "A corporate landing page for a technical services brand, shaped around clarity, trust, and conversion.",
    img: workedOn2,
  },
  {
    n: "03",
    title: "ScaleOXperts Campaign Site",
    kind: "Agency / Lead Gen",
    summary:
      "A high-contrast growth page designed to push attention toward a single conversion goal.",
    img: workedOn3,
  },
  {
    n: "04",
    title: "Venkatesh Yadav Mallethula",
    kind: "Education / Personal Brand",
    summary:
      "A tutor-focused homepage with a strong hero narrative, trust markers, and clear calls to action.",
    img: workedOn4,
  },
  
  {
    n: "05",
    title: "Featured Build",
    kind: "Landing / Conversion",
    summary:
      "A clean, story-led landing page that keeps attention on the offer and makes the next click feel inevitable.",
    img: workedOn5,
  },
];

function WorkPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto pt-16 pb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          Project Showcase — 003 Projects
        </span>
        <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mt-6">
          Projects that<br />speak for themselves.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Some of the projects I worked on. Each one balances story, clarity,
          and performance without losing the brand's voice.
        </p>
      </section>

      {/* Featured Projects */}
      <section className="px-6 max-w-7xl mx-auto pb-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Featured Projects
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter mt-3">
              A quick glide through recent builds
            </h2>
          </div>
          <div className="hidden md:block text-right text-muted-foreground max-w-xs leading-relaxed">
            Drag to explore. Each slide is a different vibe — same obsession with clarity and conversion.
          </div>
        </div>

        <Carousel opts={{ align: "start", loop: true, dragFree: true }} className="relative">
          <CarouselContent className="-ml-6">
            {featuredProjects.map((project) => {
              return (
                <CarouselItem
                  key={project.title}
                  className="pl-6 basis-[92%] sm:basis-[78%] md:basis-[52%] lg:basis-[44%]"
                >
                  <div className="group h-full bg-background border border-border hover:bg-surface transition-colors">
                    <div className="p-6 md:p-8">
                      <div className="flex items-baseline justify-between gap-6">
                        <span className="font-display text-3xl font-bold tracking-tighter text-accent">
                          {project.n}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {project.kind}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-2xl md:text-3xl font-bold uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="relative overflow-hidden border border-border bg-background">
                        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background to-transparent z-10" />
                        <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-border" />
                          <span className="h-2.5 w-2.5 rounded-full bg-border" />
                          <span className="h-2.5 w-2.5 rounded-full bg-border" />
                        </div>
                        <div className="aspect-[16/10] bg-surface">
                          <img
                            src={project.img}
                            alt={`${project.title} preview`}
                            loading="lazy"
                            className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex -left-5" />
          <CarouselNext className="hidden md:inline-flex -right-5" />
        </Carousel>
      </section>

      {/* Showcase */}
      <div className="space-y-32 md:space-y-48 pb-32">
        {studies.map((s, i) => (
          <article key={s.number} className="px-6 max-w-7xl mx-auto">
            <div className="flex items-baseline justify-between border-b border-border pb-6 mb-12">
              <span className="font-mono text-xs text-muted-foreground">PROJECT / {s.number}</span>
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
