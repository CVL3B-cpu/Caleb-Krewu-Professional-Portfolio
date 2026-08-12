import { ChapterHeading, Reveal } from "@/components/Chapter";
import {
  BadgeCheck,
  BrainCircuit,
  Code2,
  Cpu,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const CERTS = [
  {
    icon: Code2,
    title: "Python Programming",
    provider: "Online Courses",
    span: "md:col-span-7 md:row-span-2",
    featured: true,
    text: "Certified knowledge of the Python language through dedicated online coursework — syntax, data structures, problem-solving and scripting fundamentals applied to real IT workflows.",
    tags: ["Python", "Scripting", "Automation"],
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    provider: "Coursera",
    span: "md:col-span-5",
    text: "Intro to Generative AI, AI Essentials and Generative AI Prompt Engineering.",
    tags: ["GenAI", "LLMs"],
  },
  {
    icon: TerminalSquare,
    title: "Prompt Engineering",
    provider: "Coursera",
    span: "md:col-span-5",
    text: "Discover the art of prompting — crafting precise instructions that get reliable, production-ready output from AI systems.",
    tags: ["Prompting", "AI Craft"],
  },
  {
    icon: BrainCircuit,
    title: "Supervised Machine Learning",
    provider: "Online Certification",
    span: "md:col-span-4",
    text: "Regression, classification and model evaluation — the core of applied ML.",
    tags: ["ML", "Models"],
  },
  {
    icon: Network,
    title: "Advanced Learning Algorithms",
    provider: "Online Certification",
    span: "md:col-span-4",
    text: "Neural networks, decision trees and ensemble methods for harder problems.",
    tags: ["Deep Learning"],
  },
  {
    icon: ShieldCheck,
    title: "Trustworthy AI",
    provider: "Online Certification",
    span: "md:col-span-4",
    text: "Responsible, transparent and accountable AI — ethics built into every workflow.",
    tags: ["Ethics", "Governance"],
  },
  {
    icon: BadgeCheck,
    title: "Google AI Essentials",
    provider: "Google — Coursera",
    span: "md:col-span-7",
    text: "Five Google-developed courses with hands-on practice: using AI tools responsibly and effectively to support productivity, improve workflows and enhance task completion.",
    tags: ["Google", "Productivity", "Responsible AI"],
  },
  {
    icon: Cpu,
    title: "ICT Foundations",
    provider: "WCG & Eersterivier Internet Café",
    span: "md:col-span-5",
    text: "WCG Basic ICT Training Course and Basic Computer Literacy Course.",
    tags: ["ICT", "Literacy"],
  },
  {
    icon: Rocket,
    title: "AI Bootcamp",
    provider: "CAPACITI — Completed 11 Aug 2026",
    span: "md:col-span-12",
    gradient: true,
    text: "Intensive, hands-on AI bootcamp at CAPACITI — applying artificial intelligence concepts, tools and workflows to real-world technology and support scenarios.",
    tags: ["CAPACITI", "Applied AI", "Aug 2026"],
  },
];

const Certifications = () => (
  <section id="certifications" data-testid="certifications-section" className="relative bg-white px-6 py-28 text-ink md:px-12 md:py-40">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading index="03" title="Certified Knowledge" hint="Proof of work" tone="light" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {CERTS.map((cert, i) => (
          <Reveal
            key={cert.title}
            delay={(i % 3) * 0.08}
            data-testid={`cert-card-${i}`}
            className={`group relative flex flex-col justify-between overflow-hidden border border-ink/10 bg-mist p-8 transition-all duration-500 hover:border-turq-dark/50 hover:shadow-[0_0_40px_rgba(0,133,122,0.15)] md:p-10 ${cert.span}`}
          >
            {cert.gradient && (
              <div aria-hidden className="gradient-spectrum absolute inset-x-0 top-0 h-[3px]" />
            )}
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-turq/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div>
              <div className="flex items-start justify-between gap-4">
                <cert.icon size={cert.featured ? 34 : 26} className="shrink-0 text-turq-dark" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  {cert.provider}
                </span>
              </div>
              <h3
                className={`mt-6 font-heading font-bold tracking-tight transition-colors group-hover:text-turq-dark ${
                  cert.featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                }`}
              >
                {cert.title}
              </h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-zinc-600">
                {cert.text}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {cert.tags.map((t) => (
                <span
                  key={t}
                  className="border border-ink/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600 transition-colors group-hover:border-turq-dark/40 group-hover:text-turq-dark"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
