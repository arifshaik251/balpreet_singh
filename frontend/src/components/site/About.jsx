import { motion } from "framer-motion";
import { accolades, guests } from "@/data/portfolio";

const aboutImage =
  "https://customer-assets.emergentagent.com/job_culinary-nomad/artifacts/mnolkxds_WhatsApp%20Image%202026-07-06%20at%2012.50.44%20AM.jpeg";

const journey = [
  { year: "1996", place: "Family · India", note: "The Chadha family enters the restaurant business — Punjabi Dhabas, lassi shops, K Resort & Celine's Kitchen (Pondicherry)." },
  { year: "2003", place: "Puducherry, IN", note: "Chef Balpreet begins his professional culinary career, raised inside the family trade." },
  { year: "2005 — 12", place: "Taj · ITC · Marriott", note: "Masala Kraft (Taj Mumbai), Bukhara & Dum Pukht (ITC Maurya), Dakshin (Sheraton), Singh Sahib (Eros InterContinental), Bengaluru Marriott." },
  { year: "2011", place: "ICC World Cup", note: "Banquet Chef — cooked for PM Modi, PM Singh, President Mukherjee, Hillary Clinton & Gulf royalty." },
  { year: "2013 — 15", place: "United Arab Emirates", note: "Brand Chef, De Thali & PepperMill by Tablez — Lulu Group International." },
  { year: "2015 — 16", place: "Madrid, ES", note: "Opening chef, Benares Madrid — Michelin recognized. Stages at 2★ Santceloni & Juanito Kojua, San Sebastián." },
  { year: "2018 — 20", place: "New Delhi, IN", note: "Director of Culinary Ops → Exec Sous Chef, Andaz Delhi. AnnaMaya ranked #20 CNT India; #1 Raw & Fine." },
  { year: "2022", place: "Kolkata, IN", note: "Executive Chef, The Park — launched Beer Garden, the first alfresco concept on Park Street." },
  { year: "2023", place: "Dallas, TX", note: "Appointed Corporate Chef, Tivona Group. Named to Condé Nast Traveller India's '40 Under 40'." },
  { year: "2024 — Now", place: "Texas · Sweden", note: "Opens Sanjh, Nirvana Lounge & The Mango Yard. Mentors Delhi 6 in Växjö. Consulting practice goes global." },
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
                alt="Chef Balpreet Singh Chadha portrait"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-[#C5A059]/20 pointer-events-none" />
            </div>
            <div className="mt-6 border-l border-[#C5A059]/60 pl-5 py-1">
              <div className="font-small-caps text-[#C5A059]">
                A Restaurant Family Since 1996
              </div>
              <div className="font-serif-display italic text-[#E6E2DD] text-2xl mt-1">
                From dhaba to Michelin — and everything in between.
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
                <span className="w-10 h-px bg-[#C5A059]" /> My Story
              </div>
              <h2
                data-testid="about-heading"
                className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight tracking-tight"
              >
                A palate shaped by
                <br />
                <span className="italic text-[#C5A059]">eight countries</span> and
                <br />
                twenty years at the pass.
              </h2>
              <p className="mt-8 text-[#A8A29E] font-body font-light text-lg leading-relaxed max-w-2xl">
                Chef Balpreet began his professional career in Puducherry in 2003, sharpened his craft
                in India's most storied kitchens — Masala Kraft at the Taj Mumbai, Bukhara &amp; Dum
                Pukht at ITC Maurya, and Dakshin at Sheraton — then took Indian cuisine to Madrid,
                where he led the opening of Benares, recognized by the Michelin Guide in 2016.
              </p>
              <p className="mt-6 text-[#A8A29E] font-body font-light text-lg leading-relaxed max-w-2xl">
                He returned to India to helm AnnaMaya at Andaz Delhi — ranked #20 on Condé Nast
                Traveller India's Top Restaurants and #1 in the Raw &amp; Fine category — before
                moving to Texas in 2023 as Corporate Chef of Tivona Group, where he opened Sanjh,
                Nirvana Lounge and The Mango Yard. Today his consulting practice reaches from Delhi 6
                in Sweden to central kitchens under scoping across three continents.
              </p>

              {/* Guests strip */}
              <div className="mt-10 border-t border-white/10 pt-6" data-testid="guests-strip">
                <div className="font-small-caps text-[#A8A29E] mb-3">
                  — Has Cooked For
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-serif-display italic text-lg text-[#E6E2DD]">
                  {guests.map((g, i) => (
                    <span key={g} className="flex items-center gap-6">
                      {g}
                      {i < guests.length - 1 && (
                        <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
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
                    className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_200px_1fr] gap-4 border-t border-white/10 pt-6"
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
