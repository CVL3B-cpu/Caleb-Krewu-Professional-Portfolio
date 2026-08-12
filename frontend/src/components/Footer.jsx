import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const lenis = useLenis();
  return (
    <footer data-testid="site-footer" className="relative border-t border-white/10 px-6 pb-10 pt-20 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <p className="font-heading text-[13vw] font-black uppercase leading-[0.8] tracking-tighter text-outline md:text-[8rem]">
            Krewu
          </p>
          <button
            onClick={() => lenis?.scrollTo(0, { duration: 1.6 })}
            data-testid="back-to-top-button"
            className="group flex items-center gap-3 border border-white/15 px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 transition-all hover:border-turq hover:text-turq"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <span>© 2026 Caleb Emile Krewu</span>
          <span>Cape Town, South Africa</span>
          <span>
            IT Operations <span className="text-turq">/</span> Support <span className="text-turq">/</span> Systems
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
