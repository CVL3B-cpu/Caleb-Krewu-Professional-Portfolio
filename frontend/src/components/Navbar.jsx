import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certified", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    lenis?.scrollTo(href, { offset: -20, duration: 1.4 });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-obsidian/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#top"
          data-testid="nav-logo"
          onClick={(e) => go(e, "#top")}
          className="font-mono text-sm font-bold tracking-[0.25em] text-white transition-colors hover:text-turq"
        >
          C.KREWU<span className="text-turq">_</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" data-testid="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={(e) => go(e, l.href)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-turq"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          data-testid="nav-hire-button"
          onClick={(e) => go(e, "#contact")}
          className="flex items-center gap-2 border border-turq/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-turq transition-all hover:bg-turq hover:text-obsidian"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-turq animate-pulse-dot" />
          Open to work
        </a>
      </div>
    </header>
  );
};

export default Navbar;
