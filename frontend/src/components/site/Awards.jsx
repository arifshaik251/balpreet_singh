import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { accolades, press } from "@/data/portfolio";

const awardsImage =
  "https://images.pexels.com/photos/28435314/pexels-photo-28435314.jpeg";

export default function Awards() {
  return (
    <section
      id="awards"
      data-testid="awards-section"
      className="relative py-24 sm:py-32 bg-[#0d0b09]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="font-small-caps text-[#C5A059] mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#C5A059]" /> Awards & Recognition
            </div>
            <h2
              data-testid="awards-heading"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight"
            >
              A quiet <span className="italic text-[#C5A059]">shelf</span> of
              <br />
              hard-earned honours.
            </h2>

            <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6" data-testid="accolade-list">
              {accolades.map((a, i) => (
                <motion.li
                  key={a}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="flex items-start gap-3 border-t border-white/10 pt-4"
                >
                  <Award className="text-[#C5A059] mt-1 shrink-0" size={16} />
                  <span className="font-body font-light text-[#E6E2DD] leading-relaxed">
                    {a}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Press quotes */}
            <div className="mt-16">
              <div className="font-small-caps text-[#A8A29E] mb-6">
                — Said in the Press
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {press.map((p) => (
                  <motion.blockquote
                    key={p.publication}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="border-l-2 border-[#C5A059]/50 pl-5 py-2"
                    data-testid={`press-${p.publication.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <p className="font-serif-display italic text-xl text-[#E6E2DD] leading-snug">
                      &ldquo;{p.quote}&rdquo;
                    </p>
                    <footer className="mt-3 font-small-caps text-[#C5A059]">
                      — {p.publication}
                    </footer>
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden">
              <motion.img
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                src={awardsImage}
                alt="Gourmet plating"
                className="w-full h-[540px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-[#C5A059]/20 pointer-events-none" />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-serif-display text-5xl text-[#C5A059] leading-none">
                12
              </span>
              <span className="font-body font-light text-[#A8A29E] leading-tight">
                International honours <br />across two decades of service.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
