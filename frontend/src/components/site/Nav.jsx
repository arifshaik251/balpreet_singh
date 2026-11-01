import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { chef } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Consulting", href: "#consulting" },
  { label: "Dishes", href: "#dishes" },
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#gallery" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0908]/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        <a
          href="#top"
          data-testid="nav-logo"
          className="group flex items-center gap-3"
        >
          <span
            className="w-8 h-8 grid place-items-center border border-[#C5A059]/60 text-[#C5A059] font-serif-display text-lg group-hover:bg-[#C5A059] group-hover:text-[#0A0908] transition-colors duration-500"
          >
            B
          </span>
          <div className="leading-tight">
            <div className="font-serif-display text-lg text-[#E6E2DD]">
              Chef {chef.firstName}
            </div>
            <div className="font-small-caps text-[10px] text-[#A8A29E]">
              {chef.tagline}
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="font-small-caps text-[#A8A29E] hover:text-[#C5A059] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="nav-consult-btn"
          className="hidden md:inline-flex bg-[#C5A059] text-black hover:bg-[#D4B371] transition-colors duration-300 px-6 py-3 font-small-caps"
        >
          Consult
        </a>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-[#E6E2DD]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0A0908] border-t border-white/5"
            data-testid="nav-mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  className="font-small-caps text-[#A8A29E] hover:text-[#C5A059]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                data-testid="nav-mobile-consult-btn"
                className="mt-3 bg-[#C5A059] text-black text-center py-3 font-small-caps"
              >
                Consult
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
