import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services, cuisines } from "@/data/portfolio";

const consultingImage =
  "https://customer-assets-eiarnc6j.emergentagent.net/job_culinary-nomad/artifacts/a2a9bi3h_IMG-0033.webp";

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
              Twenty years across three continents. From concept sketch to opening night — and into operations that need a new direction.
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

        {/* Editorial band: chef at the pass */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-16 overflow-hidden"
          data-testid="consulting-editorial"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
            <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto overflow-hidden">
              <motion.img
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                src={consultingImage}
                alt="Chef Chadha plating at the pass"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0908] pointer-events-none" />
            </div>
            <div className="md:col-span-5 bg-[#141210] p-10 lg:p-14 flex flex-col justify-center">
              <div className="font-small-caps text-[#C5A059] mb-4">— At the Pass</div>
              <p className="font-serif-display italic text-2xl md:text-3xl text-[#E6E2DD] leading-snug">
                &ldquo;The kitchen is a business first, a stage second. My job is to make both run — quietly, precisely, night after night.&rdquo;
              </p>
              <div className="mt-6 font-small-caps text-[#A8A29E]">
                — Chef Balpreet Singh Chadha
              </div>
            </div>
          </div>
        </motion.div>

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
              { n: "01", t: "Discovery Call", d: "A conversation about goals, timeline & budget." },
              { n: "02", t: "Assessment & Proposal", d: "Written scope with deliverables, milestones and fees." },
              { n: "03", t: "Engagement", d: "Hands-on execution — on-site plus remote support." },
              { n: "04", t: "Handover", d: "Docs, training and post-launch reviews." },
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
