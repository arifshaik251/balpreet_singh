import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { chef, stats } from "@/data/portfolio";

const heroImage =
  "https://customer-assets.emergentagent.com/job_culinary-nomad/artifacts/zemq8dw0_WhatsApp%20Image%202026-07-06%20at%2012.50.44%20AM%20%281%29.jpeg";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0A0908]"
    >
      {/* Right-side portrait */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] pointer-events-none">
        <img
          src={heroImage}
          alt="Chef Balpreet Singh Chadha"
          className="w-full h-full object-cover object-[center_20%]"
          loading="eager"
        />
        {/* Left fade — heavy on mobile, softer on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908] via-[#0A0908]/85 to-[#0A0908]/20 lg:from-[#0A0908] lg:via-[#0A0908]/60 lg:to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-b from-transparent to-[#0A0908]" />
        {/* Subtle vignette + warm gold flare */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_45%,rgba(197,160,89,0.12),transparent_55%)]" />
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
              {chef.hero_tagline}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-display text-[#E6E2DD] text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-tight"
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
                &ldquo;{chef.philosophy}&rdquo;
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
