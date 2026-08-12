import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({ children, delay = 0, className = "", ...rest }) => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const ChapterHeading = ({ index, title, hint }) => (
  <Reveal className="mb-14 flex items-end gap-4 md:mb-20 md:gap-8">
    <span className="pb-1 font-mono text-sm tracking-[0.2em] text-turq md:pb-2 md:text-base">
      {index}
    </span>
    <h2 className="font-heading text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl">
      {title}
    </h2>
    <div className="mb-2 h-px flex-1 bg-white/10 md:mb-3" />
    {hint && (
      <span className="mb-2 hidden font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 md:mb-3 lg:block">
        {hint}
      </span>
    )}
  </Reveal>
);
