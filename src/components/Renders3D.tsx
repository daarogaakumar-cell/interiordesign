"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const renders = [
  { src: "/images/3dsmax/render-4.jpeg",   alt: "Photorealistic exterior visualization",     featured: true  },
  { src: "/images/3dsmax/render-1.jpeg",   alt: "Architectural corona render with lighting", featured: false },
  { src: "/images/3dsmax/bathroom-1.jpeg", alt: "Luxury master bathroom render",             featured: false },
  { src: "/images/3dsmax/render-6.jpeg",   alt: "Interior living space visualization",       featured: false },
  { src: "/images/3dsmax/render-2.jpeg",   alt: "3DS Max corona atmosphere render",          featured: false },
  { src: "/images/3dsmax/render-5.jpeg",   alt: "Exterior architectural visualization",      featured: true  },
  { src: "/images/3dsmax/bathroom-2.jpeg", alt: "Contemporary bathroom design render",       featured: false },
  { src: "/images/3dsmax/render-3.jpeg",   alt: "Detailed architectural visualization",      featured: false },
  { src: "/images/3dsmax/render-7.jpeg",   alt: "Residential interior corona render",        featured: false },
  { src: "/images/3dsmax/render-8.jpeg",   alt: "Premium interior space render",             featured: false },
  { src: "/images/3dsmax/bathroom-3.jpeg", alt: "Elegant bathroom corona render",            featured: true  },
  { src: "/images/3dsmax/render-9.jpeg",   alt: "Interior design corona visualization",      featured: false },
];

export default function Renders3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="3d-renders" className="py-14 md:py-20 bg-cream relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #0b3d2e 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold" />
            <span className="font-body text-gold text-[12px] tracking-[0.3em] uppercase font-medium">
              3D Visualization
            </span>
            <div className="w-10 h-px bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-charcoal text-4xl md:text-[3.25rem] lg:text-6xl font-medium leading-[1.1]"
          >
            3DS Max{" "}
            <span className="italic text-gold-dark">+</span>{" "}
            <span className="italic text-gold-dark">Corona</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-warm-gray-dark text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed"
          >
            Photorealistic architectural renders crafted with 3DS Max &amp; Corona
            Renderer — bringing designs to life before a single brick is laid.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center justify-center flex-wrap gap-3 mt-7"
          >
            {["3DS Max 2024", "Corona Renderer", "Photorealism"].map((tag) => (
              <span
                key={tag}
                className="font-body text-[10px] tracking-[0.18em] uppercase text-charcoal/60 border border-charcoal/15 px-4 py-2"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

          {/* Row 1: featured (col-span-2) + normal */}
          {[renders[0], renders[1]].map((r, i) => (
            <motion.div
              key={r.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden ${r.featured ? "lg:col-span-2" : ""}`}
              style={{ height: "320px" }}
            >
              <Image
                src={r.src} alt={r.alt} fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-all duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-all duration-500" />
            </motion.div>
          ))}

          {/* Row 2: three equal */}
          {[renders[2], renders[3], renders[4]].map((r, i) => (
            <motion.div
              key={r.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden"
              style={{ height: "260px" }}
            >
              <Image
                src={r.src} alt={r.alt} fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-all duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-all duration-500" />
            </motion.div>
          ))}

          {/* Row 3: normal + featured (col-span-2) */}
          {[renders[5], renders[6]].map((r, i) => (
            <motion.div
              key={r.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden ${r.featured ? "lg:col-span-2 lg:order-last" : "lg:order-first"}`}
              style={{ height: "320px" }}
            >
              <Image
                src={r.src} alt={r.alt} fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-all duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-all duration-500" />
            </motion.div>
          ))}

          {/* Row 4: three equal */}
          {[renders[7], renders[8], renders[9]].map((r, i) => (
            <motion.div
              key={r.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.65 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden"
              style={{ height: "260px" }}
            >
              <Image
                src={r.src} alt={r.alt} fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-all duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-all duration-500" />
            </motion.div>
          ))}

          {/* Row 5: featured (col-span-2) + normal */}
          {[renders[10], renders[11]].map((r, i) => (
            <motion.div
              key={r.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden ${r.featured ? "lg:col-span-2" : ""}`}
              style={{ height: "320px" }}
            >
              <Image
                src={r.src} alt={r.alt} fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 33vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-all duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-px bg-gold/40" />
            <span className="font-body text-warm-gray text-[11px] tracking-[0.25em] uppercase">
              Every render crafted to perfection
            </span>
            <div className="w-16 h-px bg-gold/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
