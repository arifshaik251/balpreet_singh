import { motion } from "framer-motion";
import { dishes } from "@/data/portfolio";

export default function Dishes() {
  return (
    <section
      id="dishes"
      data-testid="dishes-section"
      className="relative py-24 sm:py-32 bg-[#0d0b09]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="font-small-caps text-[#C5A059] mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#C5A059]" /> Signature Plates
            </div>
            <h2
              data-testid="dishes-heading"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight"
            >
              Best of the <span className="italic text-[#C5A059]">tasting menu</span>.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="font-body font-light text-[#A8A29E] leading-relaxed">
              Four plates that define the current chapter. Ingredient-first,
              memory-led, quietly technical.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {dishes.map((d, idx) => (
            <motion.article
              key={d.id}
              data-testid={`dish-card-${d.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: (idx % 2) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden bg-[#141210] border border-white/5 ${
                idx % 3 === 0 ? "md:mt-16" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/30 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                <div className="absolute top-6 left-6 font-small-caps text-[#C5A059]">
                  0{idx + 1} — {d.origin}
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="font-serif-display text-2xl md:text-3xl text-[#E6E2DD] leading-tight">
                  {d.name}
                </h3>
                <p className="mt-4 text-[#A8A29E] font-body font-light leading-relaxed">
                  {d.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
