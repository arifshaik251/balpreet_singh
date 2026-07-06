import { motion } from "framer-motion";
import { accolades } from "@/data/portfolio";

const aboutImage =
  "https://images.pexels.com/photos/8093910/pexels-photo-8093910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const journey = [
  { year: "2004", place: "Amritsar, IN", note: "First apprenticeship. Tandoor, dawn to dusk." },
  { year: "2009", place: "Mumbai, IN", note: "Sous chef, luxury hotel group." },
  { year: "2013", place: "London, UK", note: "Head chef — the first modern Indian tasting menu." },
  { year: "2019", place: "London · Dubai", note: "Opens Aether. Michelin recognition follows." },
  { year: "2024", place: "New Delhi, IN", note: "Returns home. Founds MITTI." },
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 sm:py-32 bg-[#0A0908]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28 self-start"
          >
            <div className="relative overflow-hidden">
              <motion.img
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                src={aboutImage}
                alt="Chef examining ingredient"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-[#C5A059]/20 pointer-events-none" />
            </div>
            <div className="mt-6 border-l border-[#C5A059]/60 pl-5 py-1">
              <div className="font-small-caps text-[#C5A059]">
                Since 2004
              </div>
              <div className="font-serif-display italic text-[#E6E2DD] text-2xl mt-1">
                From village kitchen to the world stage.
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="font-small-caps text-[#C5A059] mb-6 flex items-center gap-3">
                <span className="w-10 h-px bg-[#C5A059]" /> The Chef
              </div>
              <h2
                data-testid="about-heading"
                className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight tracking-tight"
              >
                A palate shaped
                <br />
                by <span className="italic text-[#C5A059]">fourteen</span> countries.
              </h2>
              <p className="mt-8 text-[#A8A29E] font-body font-light text-lg leading-relaxed max-w-2xl">
                Balpreet trained in the wood-fired kitchens of Punjab before earning
                his stripes across Mumbai, London, Copenhagen and Singapore. Along
                the way, he learned that great food is never loud — it is deeply
                listened to.
              </p>
              <p className="mt-6 text-[#A8A29E] font-body font-light text-lg leading-relaxed max-w-2xl">
                His work bridges the ancestral spice larder of the subcontinent
                with the technical precision of Nordic and French traditions.
                The result is a cuisine that feels at once ancient and startlingly new
                — plates that carry the smell of monsoon smoke and the poise of a
                twelve-course Michelin service.
              </p>
            </motion.div>

            {/* Journey timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-16"
              data-testid="about-journey"
            >
              <div className="font-small-caps text-[#A8A29E] mb-6">
                — The Road So Far
              </div>
              <ul className="space-y-6">
                {journey.map((j) => (
                  <li
                    key={j.year}
                    className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_180px_1fr] gap-4 border-t border-white/10 pt-6"
                  >
                    <span className="font-serif-display text-2xl text-[#C5A059]">
                      {j.year}
                    </span>
                    <span className="hidden sm:block font-small-caps text-[#E6E2DD]">
                      {j.place}
                    </span>
                    <span className="font-body font-light text-[#A8A29E] leading-relaxed">
                      <span className="sm:hidden block text-[#E6E2DD] font-small-caps mb-1">
                        {j.place}
                      </span>
                      {j.note}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Accolades marquee */}
      <div className="mt-24 border-y border-white/10 py-8 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap gap-16">
          {[...accolades, ...accolades].map((a, i) => (
            <span
              key={i}
              className="font-serif-display italic text-2xl text-[#A8A29E] flex items-center gap-16"
            >
              {a}
              <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
