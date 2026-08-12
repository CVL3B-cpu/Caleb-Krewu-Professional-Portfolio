import { ChapterHeading, Reveal } from "@/components/Chapter";
import { GraduationCap, School } from "lucide-react";

const DISTINCTIONS = [
  "Development Economics",
  "Organisational Development",
  "Workplace Learning",
  "Gender & Development",
  "Local Governance",
];

const TRAINING = [
  "BAS Financial Systems Training — Western Cape Government",
  "Financial Management Internal Training Programme — WCG",
  "Research paper on Integrated Development Plans (IDPs) in local governance",
  "Formal presentation on information & communication management principles",
];

const Education = () => (
  <section id="education" data-testid="education-section" className="relative bg-mist px-6 py-28 text-ink md:px-12 md:py-40">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading index="05" title="Education" hint="Foundations" tone="light" />
      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="group border border-ink/10 bg-white p-10 transition-all duration-500 hover:border-turq-dark/50 lg:col-span-7 md:p-14">
          <div className="flex items-start justify-between gap-6">
            <GraduationCap size={30} className="shrink-0 text-turq-dark" />
            <span className="font-mono text-xs tracking-[0.2em] text-zinc-500">2024 — 2025</span>
          </div>
          <h3 className="mt-8 font-heading text-2xl font-bold tracking-tight transition-colors group-hover:text-turq-dark md:text-3xl">
            Higher Certificate in Economic Development
          </h3>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-turq-dark">
            University of the Western Cape
          </p>
          <p className="mt-6 text-sm font-light leading-relaxed text-zinc-600 md:text-base">
            Coursework spanning managing information &amp; communication,
            training design and facilitation, research methodology and
            organisational development — with five distinctions.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {DISTINCTIONS.map((d) => (
              <span
                key={d}
                className="border border-turq-dark/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-turq-dark"
              >
                {d}
              </span>
            ))}
          </div>
        </Reveal>
        <div className="flex flex-col gap-6 lg:col-span-5">
          <Reveal delay={0.1} className="group border border-ink/10 bg-white p-10 transition-all duration-500 hover:border-turq-dark/50">
            <div className="flex items-start justify-between gap-6">
              <School size={26} className="shrink-0 text-turq-dark" />
              <span className="font-mono text-xs tracking-[0.2em] text-zinc-500">2022</span>
            </div>
            <h3 className="mt-6 font-heading text-xl font-bold tracking-tight transition-colors group-hover:text-turq-dark md:text-2xl">
              National Senior Certificate
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-turq-dark">
              Apex High School
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-zinc-600">
              Mathematics, Physical Sciences, Life Sciences and Geography —
              with a distinction in Afrikaans First Additional Language.
            </p>
          </Reveal>
          <Reveal delay={0.18} className="border border-ink/10 bg-white p-10">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-700">
              Training & Development
            </h4>
            <ul className="mt-6 space-y-4">
              {TRAINING.map((t) => (
                <li key={t} className="flex gap-4 text-sm font-light leading-relaxed text-zinc-600">
                  <span className="mt-2 h-px w-5 shrink-0 bg-turq-dark/60" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
