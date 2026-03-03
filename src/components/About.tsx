"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 md:py-36 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative pb-10 overflow-hidden"
          >
            {/* Main Image */}
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/Foyer 1.png"
                alt="Elegant foyer designed by Ascher Designs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Accent Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-0 right-0 w-40 md:w-56 aspect-square overflow-hidden shadow-2xl border-4 border-cream"
            >
              <Image
                src="/images/Foyer 2.png"
                alt="Foyer detail by Ascher Designs"
                fill
                className="object-cover"
                sizes="224px"
              />
            </motion.div>
            {/* Gold accent line */}
            <div className="absolute top-6 left-0 w-px h-24 bg-gold" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-gold text-[12px] tracking-[0.3em] uppercase font-medium">
                About Us
              </span>
            </div>

            <h2 className="font-heading text-charcoal text-4xl md:text-5xl font-medium leading-[1.15] mb-6">
              Designing Spaces
              <br />
              That{" "}
              <span className="italic text-gold-dark">Inspire</span>
            </h2>

            <p className="font-body text-warm-gray-dark text-base leading-[1.85] mb-6">
              At Ascher Designs, we believe that every space tells a story. We
              specialize in creating bespoke interior experiences that seamlessly
              blend luxury with comfort, aesthetics with functionality.
            </p>

            <p className="font-body text-warm-gray-dark text-base leading-[1.85] mb-8">
              From conceptual design to the final finishing touches, our approach
              is deeply personal. We listen, envision, and craft interiors that
              reflect your unique lifestyle — whether it&apos;s a serene master
              bedroom, a vibrant kids&apos; space, or a sophisticated living
              area.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-charcoal/10">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                >
                  <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-gold-dark font-semibold">
                    {stat.number}
                  </p>
                  <p className="font-body text-warm-gray text-[10px] sm:text-[11px] tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
