import { Instagram, Facebook, Mail } from "lucide-react";
import { chef } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#0A0908] border-t border-white/10 py-14"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="gold-line mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="font-serif-display text-2xl text-[#E6E2DD]">
              Chef {chef.name}
            </div>
            <div className="font-small-caps text-[#C5A059] mt-2">
              {chef.tagline}
            </div>
            <p className="font-body font-light text-[#A8A29E] mt-4 max-w-sm leading-relaxed">
              For collaborations, private dining and consultations across the globe.
            </p>
          </div>

          <div>
            <div className="font-small-caps text-[#A8A29E] mb-4">Explore</div>
            <ul className="space-y-2 font-body font-light text-[#E6E2DD]">
              <li>
                <a href="#about" className="hover:text-[#C5A059]" data-testid="footer-link-about">
                  About
                </a>
              </li>
              <li>
                <a href="#consulting" className="hover:text-[#C5A059]" data-testid="footer-link-consulting">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#dishes" className="hover:text-[#C5A059]" data-testid="footer-link-dishes">
                  Signature Dishes
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C5A059]" data-testid="footer-link-projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#awards" className="hover:text-[#C5A059]" data-testid="footer-link-awards">
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A059]" data-testid="footer-link-contact">
                  Consultations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-small-caps text-[#A8A29E] mb-4">Reach Out</div>
            <div className="flex items-center gap-4">
              <a
                href={chef.socials.instagram}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-instagram"
                aria-label="Instagram"
                className="w-10 h-10 grid place-items-center border border-white/15 text-[#E6E2DD] hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={chef.socials.facebook}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-facebook"
                aria-label="Facebook"
                className="w-10 h-10 grid place-items-center border border-white/15 text-[#E6E2DD] hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={`mailto:${chef.socials.email}`}
                data-testid="footer-email"
                aria-label="Email"
                className="w-10 h-10 grid place-items-center border border-white/15 text-[#E6E2DD] hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="font-body font-light text-[#6b625b] mt-6 text-sm">
              {chef.socials.email}
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-body font-light text-sm text-[#6b625b]">
            © {new Date().getFullYear()} Chef {chef.name}. All rights reserved.
          </p>
          <p className="font-small-caps text-[#6b625b]">
            Crafted with fire · Served with intent
          </p>
        </div>
      </div>
    </footer>
  );
}
