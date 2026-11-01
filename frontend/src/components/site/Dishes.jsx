import { useRef } from "react";
import { motion } from "framer-motion";
import { dishes } from "@/data/portfolio";

const detailImage =
  "https://customer-assets-eiarnc6j.emergentagent.net/job_culinary-nomad/artifacts/km4m9eik_IMG-0501.JPG";

function DishCard({ d, idx }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const paddedIdx = String(idx + 1).padStart(2, "0");
  const total = String(dishes.length).padStart(2, "0");

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      data-testid={`dish-card-${d.id}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: (idx % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative break-inside-avoid mb-6 md:mb-8 overflow-hidden bg-[#141210] border border-white/5 hover:border-[#C5A059]/40 transition-colors duration-500"
      style={{ "--glow": "radial-gradient(220px circle at var(--mx) var(--my), rgba(197,160,89,0.18), transparent 55%)" }}
    >
      <div className={`relative overflow-hidden ${d.tall ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
        <motion.img
          src={d.image}
          alt={d.name}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          loading="lazy"
        />

        {/* Base dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/35 to-transparent" />

        {/* Cursor-follow gold glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "var(--glow)" }}
        />

        {/* Number index — big, editorial */}
        <div className="absolute top-5 right-5 text-right">
          <div className="font-serif-display italic text-5xl md:text-6xl leading-none text-[#C5A059]/90">
            {paddedIdx}
          </div>
          <div className="font-small-caps text-[10px] text-[#C5A059]/70 mt-1 tracking-[0.3em]">
            / {total}
          </div>
        </div>

        {/* Origin tag */}
        <div className="absolute top-5 left-5 font-small-caps text-[#C5A059] max-w-[55%]">
          {d.origin}
        </div>

        {/* Hover reveal — bottom name card */}
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-serif-display text-2xl md:text-3xl text-[#E6E2DD] leading-tight">
            {d.name}
          </h3>
          <p className="mt-3 text-[#A8A29E] font-body font-light leading-relaxed text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {d.note}
          </p>
        </div>

        {/* Gold corner tick */}
        <div className="absolute bottom-0 left-0 w-10 h-10 pointer-events-none">
          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C5A059] group-hover:w-10 transition-all duration-500 delay-150" />
          <span className="absolute bottom-0 left-0 w-px h-0 bg-[#C5A059] group-hover:h-10 transition-all duration-500 delay-150" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Dishes() {
  return (
    <section
      id="dishes"
      data-testid="dishes-section"
      className="relative py-24 sm:py-32 bg-[#0d0b09] overflow-hidden"
    >
      {/* Decorative floating label */}
      <div className="pointer-events-none select-none absolute -top-6 right-4 md:right-10 font-serif-display text-[18vw] md:text-[9rem] text-white/[0.025] leading-none">
        Menu
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="font-small-caps text-[#C5A059] mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#C5A059]" /> Signature Plates
            </div>
            <h2
              data-testid="dishes-heading"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight"
            >
              Eight plates. One <span className="italic text-[#C5A059]">tasting arc</span>.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="font-body font-light text-[#A8A29E] leading-relaxed">
              Ingredient-first. Memory-led. Quietly technical.
            </p>
          </div>
        </div>

        {/* Masonry grid — asymmetric heights */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8" data-testid="dishes-grid">
          {dishes.map((d, idx) => (
            <DishCard key={d.id} d={d} idx={idx} />
          ))}
        </div>

        {/* Editorial detail — plating art */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          data-testid="dishes-detail"
        >
          <div className="md:col-span-5 bg-white p-8 md:p-12 flex items-center justify-center">
            <img
              src={detailImage}
              alt="Curry-leaf tuile — plating detail"
              className="w-full max-w-xs h-auto object-contain drop-shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-7 md:pl-6">
            <div className="font-small-caps text-[#C5A059] mb-4">— Plating Detail</div>
            <h3 className="font-serif-display text-3xl md:text-4xl text-[#E6E2DD] leading-snug">
              Curry-leaf tuiles — the modern grammar of an ancient pantry.
            </h3>
            <p className="mt-5 text-[#A8A29E] font-body font-light leading-relaxed max-w-2xl">
              Dehydrated curry-leaf &amp; spinach crisps — a signature flourish of the tasting menu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
