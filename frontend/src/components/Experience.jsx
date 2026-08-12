import { ChapterHeading, Reveal } from "@/components/Chapter";

const ROLES = [
  {
    dates: "Jun 2026 — Present",
    title: "IT Support Service Desk Technician",
    org: "CAPACITI",
    tag: "Current",
    points: [
      "Providing technical support for hardware, software, network and system-related issues.",
      "Troubleshooting and resolving user problems through diagnostics, problem-solving and remote support.",
      "Managing and responding to IT support tickets, prioritising incidents based on urgency and impact.",
      "Assisting users with system access, software applications, account issues and general IT queries.",
    ],
  },
  {
    dates: "Sep 2025 — Present",
    title: "Animal Ambulance Operator",
    org: "Diere Ambulans Dienste (D.A.D.)",
    tag: "Current",
    points: [
      "Ensuring safe, humane transportation of animals to veterinary facilities with strict adherence to protocol.",
      "Managing time-sensitive logistics and communicating professionally with clients under pressure.",
    ],
  },
  {
    dates: "May 2023 — Feb 2024",
    title: "Financial Systems & Administration Intern",
    org: "Western Cape Government — Chief Directorate: Finance",
    tag: null,
    points: [
      "Executed data capturing, transaction processing and report generation on the BAS enterprise system.",
      "Conducted pre-audit compliance checks, ensuring data accuracy and adherence to internal control standards.",
      "Performed systematic duplication detection on payment records using Excel-based departmental databases.",
      "Designed and maintained physical and electronic filing systems; digitised paper records through high-volume scanning and archiving.",
    ],
  },
];

const Experience = () => (
  <section id="experience" data-testid="experience-section" className="relative px-6 py-28 text-ink md:px-12 md:py-40">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading index="02" title="Experience" hint="Where the work happened" tone="light" />
      <div className="relative ml-2 border-l border-ink/15 md:ml-40">
        {ROLES.map((role, i) => (
          <Reveal key={role.title} delay={i * 0.05} className="relative pb-20 pl-10 last:pb-0 md:pl-16">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-turq-dark shadow-[0_0_15px_rgba(0,133,122,0.5)]" />
            <span className="absolute -top-1 right-full mr-6 hidden whitespace-nowrap font-mono text-sm tracking-[0.15em] text-zinc-500 md:block">
              {role.dates}
            </span>
            <span className="mb-3 block font-mono text-xs tracking-[0.15em] text-zinc-500 md:hidden">
              {role.dates}
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
                {role.title}
              </h3>
              {role.tag && (
                <span className="border border-turq-dark/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-turq-dark">
                  {role.tag}
                </span>
              )}
            </div>
            <p className="mt-2 font-mono text-sm uppercase tracking-[0.15em] text-turq-dark">
              {role.org}
            </p>
            <ul className="mt-6 max-w-3xl space-y-3">
              {role.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-4 text-sm font-light leading-relaxed text-zinc-600 md:text-base"
                >
                  <span className="mt-2 h-px w-6 shrink-0 bg-turq-dark/60" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
