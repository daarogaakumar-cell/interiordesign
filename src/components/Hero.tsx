"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-150 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Luxury interior design by Ascher Designs"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={90}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-charcoal/40" />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 lg:px-12">
        {/* Top accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-gold mb-8 origin-center"
        />

        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-gold text-[11px] sm:text-[12px] tracking-[0.35em] uppercase font-medium mb-6"
        >
          Luxury Interior Design Studio
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.05] max-w-5xl"
        >
          Crafting Spaces
          <br />
          <span className="italic text-gold">Beyond</span> Ordinary
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-cream/65 text-base sm:text-lg max-w-xl mt-6 leading-relaxed font-light"
        >
          Where vision meets craftsmanship — we transform homes into
          timeless works of art.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <a
            href="#contact"
            className="px-10 py-4 bg-gold text-charcoal font-body text-[12px] tracking-[0.18em] uppercase font-semibold transition-all duration-500 hover:bg-gold-dark hover:shadow-[0_0_40px_rgba(212,168,67,0.25)]"
          >
            Book Consultation
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 border border-cream/25 text-cream font-body text-[12px] tracking-[0.18em] uppercase font-light transition-all duration-500 hover:border-gold hover:text-gold"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-cream/40 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
