import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/portfolio";

/**
 * Behind the Lens — a hand-made editorial horizontal scroll.
 * Drag, swipe or use arrows. Each card has a subtle tilt + a hand-written caption,
 * so it reads like photographs pinned to a studio wall rather than an AI grid.
 */
export default function Gallery() {
  const scrollerRef = useRef(null);
  const [drag, setDrag] = useState({ active: false, startX: 0, startLeft: 0 });

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.75), behavior: "smooth" });
  };

  const onDown = (e) => {
    const el = scrollerRef.current;
    if (!el) return;
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    setDrag({ active: true, startX: x, startLeft: el.scrollLeft });
  };
  const onMove = (e) => {
    if (!drag.active) return;
    const el = scrollerRef.current;
    const x = (e.touches ? e.touches[0].clientX : e.clientX);
    el.scrollLeft = drag.startLeft - (x - drag.startX);
  };
  const onUp = () => setDrag((d) => ({ ...d, active: false }));

  useEffect(() => {
    const up = () => setDrag((d) => ({ ...d, active: false }));
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="relative py-24 sm:py-32 bg-[#0A0908] overflow-hidden"
    >
      {/* Giant watermark */}
      <div className="pointer-events-none select-none absolute -top-6 left-4 md:left-10 font-serif-display text-[18vw] md:text-[9rem] text-white/[0.025] leading-none">
        Studio
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <div className="font-small-caps text-[#C5A059] mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-[#C5A059]" /> Behind the Lens
            </div>
            <h2
              data-testid="gallery-heading"
              className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#E6E2DD] leading-tight"
            >
              Twenty years, <span className="italic text-[#C5A059]">pinned to the wall</span>.
            </h2>
            <p className="mt-5 text-[#A8A29E] font-body font-light max-w-xl">
              <span className="font-hand text-[#C5A059] text-2xl mr-2">a scrap-book —</span>
              service nights, trials, award evenings and the people in the brigade.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-center gap-3 lg:justify-end">
            <button
              aria-label="Scroll left"
              data-testid="gallery-prev"
              onClick={() => scrollBy(-1)}
              className="w-11 h-11 grid place-items-center border border-white/15 text-[#E6E2DD] hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Scroll right"
              data-testid="gallery-next"
              onClick={() => scrollBy(1)}
              className="w-11 h-11 grid place-items-center border border-white/15 text-[#E6E2DD] hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <span className="hidden lg:inline font-hand text-[#C5A059]/80 text-xl ml-3 select-none">
              drag →
            </span>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
        data-testid="gallery-scroller"
        className={`no-scrollbar relative flex gap-8 md:gap-12 overflow-x-auto scroll-smooth px-6 sm:px-10 lg:px-16 py-10 select-none ${
          drag.active ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {gallery.map((g, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
            data-testid={`gallery-item-${i}`}
            className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]"
            style={{ transform: `rotate(${g.tilt}deg)` }}
          >
            {/* Polaroid-ish card */}
            <div className="bg-[#f4ece0] p-3 pb-14 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)] relative">
              <div className="relative overflow-hidden aspect-[4/5] bg-[#141210]">
                <img
                  src={g.src}
                  alt={g.caption}
                  draggable="false"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
                />
                {/* subtle film-grain overlay */}
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 grain-overlay" />
                {/* subtle gold number */}
                <div className="absolute bottom-2 right-3 font-small-caps text-white/70">
                  No. {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <figcaption className="font-hand text-[#1a1612] text-2xl absolute bottom-2 left-5 right-5 truncate">
                {g.caption}
              </figcaption>
              {/* Pin */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8c6b2a] shadow-md" />
            </div>
          </motion.figure>
        ))}
        {/* Trailing spacer so last card isn't glued to edge */}
        <div className="shrink-0 w-10" aria-hidden="true" />
      </div>

      {/* Note at bottom */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-8">
        <div className="border-t border-white/10 pt-6 flex items-center justify-between">
          <span className="font-hand text-[#A8A29E] text-xl">
            {gallery.length} frames from a working kitchen.
          </span>
          <span className="font-small-caps text-[#A8A29E]">— pulled from the archive</span>
        </div>
      </div>
    </section>
  );
}
