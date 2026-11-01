import { useEffect, useState } from "react";

/**
 * Thin gold progress line fixed to the very top of the viewport.
 * Scales horizontally as the user scrolls the document.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      data-testid="scroll-progress"
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-[#C5A059]/40 via-[#C5A059] to-[#D4B371]"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left center" }}
      />
    </div>
  );
}
