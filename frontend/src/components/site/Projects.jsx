import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";

const tabs = [
  { key: "past", label: "Past Work" },
  { key: "current", label: "Current" },
  { key: "upcoming", label: "Upcoming" },
];

const bg = {
  past: "https://images.pexels.com/photos/4577715/pexels-photo-4577715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  current:
    "https://images.pexels.com/photos/880424/pexels-photo-880424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  upcoming:
    "https://images.pexels.com/photos/4577715/pexels-photo-4577715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export default function Projects() {
  const [active, setActive] = useState("current");
  const list = projects[active];

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 sm:py-32 bg-[#0A0908]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="font-small-caps text-[#C5A059] mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#C5A059]" /> Projects & Ventures
            </div>
            <h2
              data-testid="projects-heading"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight"
            >
              Restaurants, residencies, and <span className="italic text-[#C5A059]">what&apos;s next</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end">
            {tabs.map((t) => (
              <button
                key={t.key}
                data-testid={`projects-tab-${t.key}`}
                onClick={() => setActive(t.key)}
                className={`px-6 py-3 font-small-caps border transition-all duration-300 ${
                  active === t.key
                    ? "bg-[#C5A059] text-black border-[#C5A059]"
                    : "border-white/15 text-[#A8A29E] hover:text-[#E6E2DD] hover:border-white/40"
                }`}
              >
                {t.label} · {projects[t.key].length}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left image */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden aspect-[4/5] lg:sticky lg:top-28"
              >
                <img
                  src={bg[active]}
                  alt="Project imagery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="font-small-caps text-[#C5A059]">
                    {tabs.find((t) => t.key === active)?.label}
                  </div>
                  <div className="font-serif-display italic text-3xl text-[#E6E2DD] mt-1">
                    Chapter {active === "past" ? "One" : active === "current" ? "Two" : "Three"}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right list */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.ol
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
                data-testid={`projects-list-${active}`}
              >
                {list.map((p, i) => (
                  <motion.li
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="grid grid-cols-[40px_1fr] gap-6 border-t border-white/10 pt-8"
                    data-testid={`project-item-${active}-${i}`}
                  >
                    <span className="font-small-caps text-[#C5A059] pt-2">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="font-serif-display text-2xl md:text-3xl text-[#E6E2DD]">
                          {p.title}
                        </h3>
                        <span className="font-small-caps text-[#A8A29E]">
                          {p.year}
                        </span>
                      </div>
                      <div className="mt-2 font-small-caps text-[#C5A059]">
                        {p.role} · {p.city}
                      </div>
                      <p className="mt-4 font-body font-light text-[#A8A29E] leading-relaxed max-w-2xl">
                        {p.blurb}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
