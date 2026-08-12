import { ChapterHeading, Reveal } from "@/components/Chapter";
import {
  BadgeCheck,
  BrainCircuit,
  Code2,
  Cpu,
  Network,
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
];

const Certifications = () => (
  <section id="certifications" data-testid="certifications-section" className="relative px-6 py-28 md:px-12 md:py-40">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading index="03" title="Certified Knowledge" hint="Proof of work" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {CERTS.map((cert, i) => (
          <Reveal
            key={cert.title}
            delay={(i % 3) * 0.08}
            data-testid={`cert-card-${i}`}
            className={`group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-surface p-8 transition-all duration-500 hover:border-turq/50 hover:shadow-[0_0_40px_rgba(13,245,227,0.12)] md:p-10 ${cert.span}`}
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-turq/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div>
              <div className="flex items-start justify-between gap-4">
                <cert.icon size={cert.featured ? 34 : 26} className="shrink-0 text-turq" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  {cert.provider}
                </span>
              </div>
              <h3
                className={`mt-6 font-heading font-bold tracking-tight transition-colors group-hover:text-turq ${
                  cert.featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                }`}
              >
                {cert.title}
              </h3>
              <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-zinc-400">
                {cert.text}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {cert.tags.map((t) => (
                <span
                  key={t}
                  className="border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400 transition-colors group-hover:border-turq/40 group-hover:text-turq"
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
