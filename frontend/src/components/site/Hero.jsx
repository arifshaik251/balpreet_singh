import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { chef, stats } from "@/data/portfolio";

const heroImage =
  "https://images.pexels.com/photos/8477058/pexels-photo-8477058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chef in the kitchen"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/70 via-[#0A0908]/55 to-[#0A0908]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/85 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-40 pb-24 min-h-[100svh] flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end flex-1">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-small-caps text-[#C5A059] mb-8 flex items-center gap-3"
            >
              <span className="w-10 h-px bg-[#C5A059]" />
              Portfolio · Est. 2004
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-display text-[#E6E2DD] text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight"
              data-testid="hero-heading"
            >
              Chef
              <br />
              <span className="italic text-[#C5A059]">Balpreet</span>
              <br />
              Singh Chadha
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="mt-10 max-w-xl text-[#A8A29E] font-body font-light text-lg leading-relaxed"
            >
              {chef.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                data-testid="hero-cta-consult"
                className="inline-flex items-center gap-3 bg-[#C5A059] text-black hover:bg-[#D4B371] transition-colors duration-300 px-8 py-4 font-small-caps"
              >
                Book a Consultation <ArrowRight size={16} />
              </a>
              <a
                href="#dishes"
                data-testid="hero-cta-dishes"
                className="inline-flex items-center gap-3 border border-white/20 text-[#E6E2DD] hover:bg-white/5 transition-colors duration-300 px-8 py-4 font-small-caps"
              >
                Explore the Craft
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-4 lg:justify-self-end"
          >
            <div className="border-l border-[#C5A059]/40 pl-6 max-w-xs">
              <div className="font-small-caps text-[#C5A059] mb-3">
                A Note from the Chef
              </div>
              <p className="font-serif-display italic text-[#E6E2DD] text-2xl leading-snug">
                &ldquo;Cooking is memory made edible. Every plate carries the road that brought me here.&rdquo;
              </p>
              <div className="mt-4 font-small-caps text-[#A8A29E]">
                — {chef.location}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          data-testid="hero-stats"
          className="mt-16 border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} data-testid={`stat-${s.label.replace(/\s+/g, "-").toLowerCase()}`}>
              <div className="font-serif-display text-4xl md:text-5xl text-[#C5A059]">
                {s.value}
              </div>
              <div className="font-small-caps text-[#A8A29E] mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
