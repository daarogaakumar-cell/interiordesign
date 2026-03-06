"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="Ascher Interior Design"
                  fill
                  className="object-contain rounded-sm"
                  sizes="48px"
                />
              </div>
              <div className="leading-tight">
                <span className="block font-heading text-lg tracking-[0.18em] font-semibold text-cream">
                  ASCHER
                </span>
                <span className="block font-body text-[9px] tracking-[0.3em] uppercase text-gold font-medium -mt-0.5">
                     .    .      DESIGN
                </span>
              </div>
            </div>
            <p className="font-body text-warm-gray-light text-sm leading-relaxed max-w-xs">
              Luxury interior design studio crafting timeless spaces that
              inspire. Available for residential and commercial projects
              worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-cream text-[12px] tracking-[0.2em] uppercase font-semibold mb-5">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-body text-warm-gray-light text-sm hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-cream text-[12px] tracking-[0.2em] uppercase font-semibold mb-5">
              Services
            </h4>
            <nav className="space-y-3">
              {[
                "Bedroom Design",
                "Living & Dining",
                "Kitchen Design",
                "Entrance & Foyer",
                "Commercial Spaces",
                "Full Home Interiors",
              ].map((service) => (
                <span
                  key={service}
                  className="block font-body text-warm-gray-light text-sm"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-body text-cream text-[12px] tracking-[0.2em] uppercase font-semibold mb-5">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.behance.net/ascherdesign/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-warm-gray-light text-sm hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                Behance Portfolio
              </a>
              <a
                href="mailto:ascherdesigns@email.com"
                className="block font-body text-warm-gray-light text-sm hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                ascherdesigns@email.com
              </a>
              <p className="font-body text-warm-gray-light text-sm">
                India — Available Worldwide
              </p>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="cursor-pointer mt-8 w-10 h-10 border border-white/10 flex items-center justify-center text-warm-gray-light hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-warm-gray text-[12px] tracking-[0.05em]">
            &copy; {currentYear} Ascher Designs. All rights reserved.
          </p>
          <p className="font-body text-warm-gray/50 text-[11px] tracking-[0.05em]">
            Crafted with passion for exceptional interiors
          </p>
        </div>
      </div>
    </footer>
  );
}
