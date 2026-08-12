import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { MapPin } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];
const CITY_BG =
  "https://images.unsplash.com/photo-1535391879778-3bae11d29a24?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGNpdHklMjBibHVycnklMjBuZW9uJTIwdHVycXVvaXNlfGVufDB8fHx8MTc4NjUyNjE0N3ww&ixlib=rb-4.1.0&q=85";

const MaskedLine = ({ children, delay, className = "" }) => (
  <div className="overflow-hidden">
    <motion.span
      initial={{ y: "115%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, delay, ease: EASE }}
      className={`block ${className}`}
    >
      {children}
    </motion.span>
  </div>
);

const Hero = () => {
  const ref = useRef(null);
  const lenis = useLenis();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yCity = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 md:px-12 lg:pt-24"
    >
      <motion.div
        aria-hidden
        style={{ y: yCity }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={CITY_BG}
          alt=""
          className="h-full w-full scale-110 object-cover opacity-25 blur-[6px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/60 to-obsidian" />
      </motion.div>
      <div
        aria-hidden
        className="absolute -right-40 top-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-turq-deep/40 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute -left-52 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-turq/10 blur-[120px]"
      />

      <motion.div style={{ opacity: fade }} className="mx-auto grid w-full max-w-[1600px] items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <MaskedLine delay={0.1}>
            <span
              data-testid="hero-overline"
              className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-turq md:text-sm"
            >
              <span className="gradient-spectrum h-[3px] w-10" />
              IT Operations &amp; Support Technician
            </span>
          </MaskedLine>
          <h1 className="font-heading font-black uppercase leading-[0.85] tracking-tighter">
            <MaskedLine delay={0.25} className="text-[17vw] md:text-[9.5rem] lg:text-[11rem]">
              Caleb
            </MaskedLine>
            <MaskedLine delay={0.4} className="text-[17vw] md:text-[9.5rem] lg:text-[11rem]">
              <span className="animated-teal-text">Krewu</span>
            </MaskedLine>
          </h1>
          <MaskedLine delay={0.6}>
            <p
              data-testid="hero-tagline"
              className="mt-8 max-w-xl text-base font-light leading-relaxed text-zinc-300 md:text-lg"
            >
              Keeping systems honest and users productive — from government
              finance platforms to the service desk. Detail-obsessed support,
              powered by a growing arsenal of AI &amp; machine-learning
              certification.
            </p>
          </MaskedLine>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#experience"
              data-testid="hero-cta-experience"
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo("#experience", { offset: -20, duration: 1.4 });
              }}
              className="group relative overflow-hidden border border-turq px-8 py-4 font-mono text-xs uppercase tracking-[0.25em] text-turq transition-colors hover:text-obsidian"
            >
              <span className="absolute inset-0 -translate-x-full bg-turq transition-transform duration-500 ease-out group-hover:translate-x-0" />
              <span className="relative">View Experience</span>
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo("#contact", { offset: -20, duration: 1.4 });
              }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 underline decoration-white/20 underline-offset-8 transition-colors hover:text-turq hover:decoration-turq"
            >
              Get in touch
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-12 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500"
          >
            <MapPin size={14} className="text-turq" />
            Eersterivier, Cape Town, South Africa
          </motion.div>
        </div>

        <div className="relative flex justify-center lg:col-span-4 lg:justify-end">
          <motion.div
            style={{ y: yPortrait }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turq/25 blur-[100px] lg:h-[26rem] lg:w-[26rem]"
            />
            <motion.div
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{ clipPath: "circle(50% at 50% 50%)" }}
              transition={{ duration: 1.4, delay: 0.55, ease: EASE }}
              className="glow-turq relative h-60 w-60 overflow-hidden rounded-full border border-white/15 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
            >
              <img
                src="/assets/caleb.png?v=2"
                alt="Caleb Krewu — portrait"
                data-testid="hero-portrait"
                className="h-full w-full scale-105 object-cover contrast-125 grayscale"
              />
            </motion.div>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              viewBox="0 0 200 200"
              className="animate-spin-slow absolute -bottom-10 -left-10 hidden h-40 w-40 md:block lg:-left-14"
            >
              <defs>
                <path id="circlePath" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
              </defs>
              <text className="fill-turq font-mono text-[10.5px] uppercase tracking-[0.35em]">
                <textPath href="#circlePath">
                  IT Operations • Support • Systems • AI •
                </textPath>
              </text>
            </motion.svg>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-6 flex items-center gap-4 md:left-12"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Scroll
        </span>
        <div className="h-14 w-px overflow-hidden bg-white/10">
          <div className="animate-scroll-line h-full w-full bg-turq" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
