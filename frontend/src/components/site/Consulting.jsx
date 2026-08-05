import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services, cuisines } from "@/data/portfolio";

export default function Consulting() {
  return (
    <section
      id="consulting"
      data-testid="consulting-section"
      className="relative py-24 sm:py-32 bg-[#0A0908]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="font-small-caps text-[#C5A059] mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#C5A059]" /> Global F&amp;B Consultancy &amp; Catering
            </div>
            <h2
              data-testid="consulting-heading"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight"
            >
              Pre-openings, SOPs &amp; turnarounds — engineered for{" "}
              <span className="italic text-[#C5A059]">sustainable profitability</span>.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="font-body font-light text-[#A8A29E] leading-relaxed">
              Twenty years managing hotel, restaurant &amp; banqueting kitchens across three continents.
              Investor-, customer- and employee-centred — from the first concept sketch to opening
              night, and into operations that need a new direction.
            </p>
            <a
              href="#contact"
              data-testid="consulting-cta"
              className="mt-6 inline-flex items-center gap-3 border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-colors duration-300 px-6 py-3 font-small-caps"
            >
              Start a Conversation <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Cuisine badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-wrap gap-3"
          data-testid="cuisine-badges"
        >
          <span className="font-small-caps text-[#A8A29E] mr-2 self-center">
            — Cuisine Expertise:
          </span>
          {cuisines.map((c) => (
            <span
              key={c}
              className="px-4 py-2 border border-[#C5A059]/40 text-[#E6E2DD] font-small-caps"
            >
              {c}
            </span>
          ))}
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((s, i) => (
            <motion.article
              key={s.key}
              data-testid={`service-${s.key}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="group relative bg-[#0d0b09] hover:bg-[#141210] p-8 lg:p-10 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="font-serif-display text-4xl text-[#C5A059]/80 leading-none">
                  0{i + 1}
                </span>
                <span className="mt-2 w-8 h-px bg-[#C5A059]/50 group-hover:w-14 transition-all duration-500" />
              </div>
              <h3 className="font-serif-display text-2xl text-[#E6E2DD] leading-snug">
                {s.title}
              </h3>
              <p className="mt-4 font-body font-light text-[#A8A29E] leading-relaxed">
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Process */}
        <div className="mt-16 border-t border-white/10 pt-14">
          <div className="font-small-caps text-[#A8A29E] mb-10">— How We Work</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Discovery Call", d: "A conversation about your project, goals, timeline & budget — anywhere in the world." },
              { n: "02", t: "Assessment & Proposal", d: "A written scope with deliverables, milestones and fees tailored to the project." },
              { n: "03", t: "Engagement", d: "Hands-on execution with your team — on-site phases plus remote support as required." },
              { n: "04", t: "Handover", d: "Documentation, training and post-launch reviews so results outlast the engagement." },
            ].map((p) => (
              <div key={p.n} data-testid={`process-${p.n}`} className="border-t border-[#C5A059]/40 pt-5">
                <div className="font-serif-display text-3xl text-[#C5A059]">{p.n}</div>
                <div className="mt-2 font-small-caps text-[#E6E2DD]">{p.t}</div>
                <p className="mt-3 font-body font-light text-[#A8A29E] leading-relaxed text-sm">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
