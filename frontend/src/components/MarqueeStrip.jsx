import Marquee from "react-fast-marquee";

const ITEMS = [
  "IT Operations",
  "Service Desk",
  "Windows 7—11",
  "BAS / LOGIS",
  "Ticketing & Triage",
  "Remote Support",
  "Python",
  "Generative AI",
  "Prompt Engineering",
  "Machine Learning",
  "Data Integrity",
];

const MarqueeStrip = () => (
  <div
    data-testid="skills-marquee"
    className="relative border-y border-white/10 bg-obsidian py-6"
  >
    <Marquee speed={35} gradient={false} pauseOnHover>
      {ITEMS.map((item) => (
        <span
          key={item}
          className="mx-6 flex items-center gap-12 font-mono text-sm uppercase tracking-[0.3em] text-zinc-400"
        >
          {item}
          <span className="text-lg text-turq">+</span>
        </span>
      ))}
    </Marquee>
  </div>
);

export default MarqueeStrip;
