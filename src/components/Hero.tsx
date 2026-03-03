"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Living Dining 1.png"
          alt="Luxurious living and dining room designed by Ascher Designs"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gold mx-auto mb-8"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-gold-light text-[13px] tracking-[0.35em] uppercase mb-6"
        >
          Luxury Interior Design Studio
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-cream text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-4"
        >
          Crafting <span className="italic text-gold">Timeless</span>
          <br />
          Living Spaces
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-cream/70 text-lg md:text-xl font-light max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Where elegance meets functionality — bespoke interior design for
          discerning homeowners who seek extraordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="#portfolio"
            className="group cursor-pointer relative px-10 py-4 bg-gold text-charcoal font-body text-[13px] tracking-[0.15em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:bg-gold-dark"
          >
            <span className="relative z-10">View Our Work</span>
          </a>
          <a
            href="#contact"
            className="cursor-pointer px-10 py-4 border border-cream/30 text-cream font-body text-[13px] tracking-[0.15em] uppercase font-light transition-all duration-500 hover:border-gold hover:text-gold"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
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
