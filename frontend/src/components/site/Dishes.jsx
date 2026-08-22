import { motion } from "framer-motion";
import { dishes } from "@/data/portfolio";

const detailImage =
  "https://customer-assets-eiarnc6j.emergentagent.net/job_culinary-nomad/artifacts/km4m9eik_IMG-0501.JPG";

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
              Ingredient-first, memory-led, quietly technical.
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

        {/* Editorial detail — plating art */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          data-testid="dishes-detail"
        >
          <div className="md:col-span-5 bg-white p-8 md:p-12 flex items-center justify-center">
            <img
              src={detailImage}
              alt="Curry-leaf and herb tuile — plating detail"
              className="w-full max-w-xs h-auto object-contain drop-shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-7 md:pl-6">
            <div className="font-small-caps text-[#C5A059] mb-4">— Plating Detail</div>
            <h3 className="font-serif-display text-3xl md:text-4xl text-[#E6E2DD] leading-snug">
              Curry-leaf &amp; spinach tuiles — the modern grammar of an ancient pantry.
            </h3>
            <p className="mt-5 text-[#A8A29E] font-body font-light leading-relaxed max-w-2xl">
              Dehydrated curry-leaf and spinach crisps, plated as an edible sculpture — a signature flourish across the tasting menu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
