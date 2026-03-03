"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const showcaseImages = [
  { src: "/images/Master Bedroom_Scene 3 (1).png", alt: "Master bedroom luxury design" },
  { src: "/images/Kids Bedroom View 3.png", alt: "Kids bedroom creative design" },
  { src: "/images/Master Bedroom_Scene 1 (1).png", alt: "Bedroom warm elegance" },
  { src: "/images/Entrance 2.png", alt: "Grand entrance design" },
  { src: "/images/Master Bedroom_Scene 2 (1).png", alt: "Bedroom panoramic view" },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  // Measure how far we need to translate horizontally
  const [scrollDistance, setScrollDistance] = useState(1800);

  useEffect(() => {
    const measure = () => {
      if (stripRef.current) {
        const totalStripWidth = stripRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollDistance(Math.max(0, totalStripWidth - viewportWidth + 48));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Section is tall enough to accommodate the full horizontal scroll via vertical scroll
  const sectionHeight = `calc(100vh + ${scrollDistance}px)`;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll 0→1 to horizontal translation 0→-scrollDistance
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      ref={sectionRef}
      style={{ height: sectionHeight }}
      className="relative bg-cream"
    >
      {/* Sticky full-screen pane */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 w-full">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-px bg-gold" />
            <span className="font-body text-gold text-[12px] tracking-[0.3em] uppercase font-medium">
              Gallery
            </span>
          </div>
          <div className="flex items-end justify-between">
            <h2 className="font-heading text-charcoal text-3xl md:text-4xl font-medium">
              Design <span className="italic text-gold-dark">Moments</span>
            </h2>
            <p className="hidden md:flex items-center gap-2 font-body text-warm-gray text-[11px] tracking-[0.2em] uppercase">
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
              Scroll to explore
            </p>
          </div>
        </div>

        {/* Horizontally translate images as page scrolls down */}
        <motion.div
          ref={stripRef}
          style={{ x }}
          className="flex gap-5 pl-6 lg:pl-12 pr-12 will-change-transform"
        >
          {showcaseImages.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="relative w-full h-full overflow-hidden group cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
                {/* Image number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-charcoal/60 flex items-center justify-center">
                  <span className="font-body text-cream text-[10px] tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Gold accent bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="absolute bottom-8 left-6 lg:left-12 right-6 lg:right-12">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-charcoal/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gold origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
            <span className="font-body text-warm-gray text-[11px] tracking-widest shrink-0">
              {showcaseImages.length} IMAGES
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
