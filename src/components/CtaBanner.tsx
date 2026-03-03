"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Master Bedroom_Scene 2 (1).png"
          alt="Luxury interior design by Ascher Designs"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="w-12 h-px bg-gold mx-auto" />

          <h2 className="font-heading text-cream text-3xl md:text-5xl font-medium leading-[1.2]">
            Ready to Transform
            <br />
            Your <span className="italic text-gold">Space</span>?
          </h2>

          <p className="font-body text-cream/60 text-lg max-w-xl mx-auto leading-relaxed">
            Every great space starts with a conversation. Let&apos;s discuss
            your vision and bring it to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="cursor-pointer px-10 py-4 bg-gold text-charcoal font-body text-[13px] tracking-[0.15em] uppercase font-semibold transition-all duration-500 hover:bg-gold-dark"
            >
              Book Free Consultation
            </a>
            <a
              href="https://www.behance.net/ascherdesign/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer px-10 py-4 border border-cream/30 text-cream font-body text-[13px] tracking-[0.15em] uppercase font-light transition-all duration-500 hover:border-gold hover:text-gold"
            >
              Explore Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
