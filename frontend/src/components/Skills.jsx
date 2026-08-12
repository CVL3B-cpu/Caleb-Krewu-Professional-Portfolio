import { ChapterHeading, Reveal } from "@/components/Chapter";

const GROUPS = [
  {
    index: "A",
    title: "Systems & Software",
    items: [
      "Windows 7 / 8 / 10 / 11 — configuration & troubleshooting",
      "Microsoft Office Suite — Word, Excel, PowerPoint, Outlook",
      "BAS & LOGIS enterprise platforms",
      "Batch processing & transaction reporting",
    ],
  },
  {
    index: "B",
    title: "Support Operations",
    items: [
      "Service desk ticketing & incident triage",
      "Remote diagnostics & resolution",
      "Hardware, software & network support",
      "Data integrity & duplication detection",
      "Records digitisation & document control",
    ],
  },
  {
    index: "C",
    title: "Human Layer",
    items: [
      "Analytical, systematic problem-solving",
      "Precision under competing priorities",
      "Confidential information handling",
      "English & Afrikaans communication",
      "Rapid adoption of new systems",
    ],
  },
];

const Skills = () => (
  <section id="skills" data-testid="skills-section" className="relative px-6 py-28 md:px-12 md:py-40">
    <div
      aria-hidden
      className="absolute -left-40 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-turq-deep/25 blur-[140px]"
    />
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading index="04" title="Capabilities" hint="The toolkit" />
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="font-heading text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Enterprise discipline,
              <br />
              <span className="text-turq">service-desk speed.</span>
            </p>
            <p className="mt-6 text-base font-light leading-relaxed text-zinc-400">
              A toolkit forged in a high-volume government finance environment
              and sharpened on a live IT service desk — equal parts process
              rigour and hands-on troubleshooting.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08} className="mb-14 last:mb-0">
              <div className="mb-6 flex items-baseline gap-4">
                <span className="font-mono text-sm text-turq">{g.index}/</span>
                <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-zinc-300">
                  {g.title}
                </h3>
              </div>
              <div className="border-t border-white/10">
                {g.items.map((item, i) => (
                  <div
                    key={item}
                    data-testid={`skill-row-${g.index}-${i}`}
                    className="group flex items-baseline justify-between gap-6 border-b border-white/10 py-4 transition-all duration-300 hover:border-turq/40 hover:pl-4"
                  >
                    <span className="text-sm font-light text-zinc-300 transition-colors group-hover:text-turq md:text-base">
                      {item}
                    </span>
                    <span className="font-mono text-xs text-zinc-600 transition-colors group-hover:text-turq">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
