import { ChapterHeading, Reveal } from "@/components/Chapter";
import { Globe, ShieldCheck, Zap } from "lucide-react";

const STATS = [
  { value: "10+", label: "Months inside government finance systems" },
  { value: "09", label: "Certifications across AI, ML & ICT" },
  { value: "02", label: "Languages — English & Afrikaans" },
];

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Rapid adoption",
    text: "New systems, tools and technical workflows are picked up fast — and put to work immediately.",
  },
  {
    icon: ShieldCheck,
    title: "Discretion by default",
    text: "Sensitive and confidential information is handled with the care a government environment demands.",
  },
  {
    icon: Globe,
    title: "Clear communication",
    text: "Fluent in English and Afrikaans, written and verbal — support that people actually understand.",
  },
];

const About = () => (
  <section id="about" data-testid="about-section" className="relative px-6 py-28 md:px-12 md:py-40">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading index="01" title="The Operator" hint="Profile" />
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xl font-light leading-relaxed text-zinc-200 md:text-2xl">
              Detail-oriented and motivated IT support professional with
              demonstrated experience in{" "}
              <span className="text-turq">financial systems administration</span>,{" "}
              <span className="text-turq">data integrity management</span> and{" "}
              <span className="text-turq">end-user support</span> within a
              government environment — now resolving hardware, software and
              network issues on the service desk at CAPACITI.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-zinc-400 md:text-lg">
              From identifying system discrepancies on enterprise platforms like
              BAS and LOGIS, to maintaining accurate electronic records and
              triaging support tickets by urgency and impact — the through-line
              is precision. Analytical thinking, systematic problem-solving, and
              the ability to deliver under competing priorities.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08} className="bg-obsidian p-8">
                <div
                  data-testid={`about-stat-${i}`}
                  className="font-heading text-5xl font-black tracking-tighter text-turq"
                >
                  {s.value}
                </div>
                <div className="mt-3 font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-zinc-500">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="flex flex-col gap-px border border-white/10 bg-white/10">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08} className="group bg-obsidian p-8 transition-colors hover:bg-surface">
                <div className="flex items-start gap-5">
                  <p.icon
                    size={22}
                    className="mt-1 shrink-0 text-turq transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-tight transition-colors group-hover:text-turq">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-zinc-400">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
