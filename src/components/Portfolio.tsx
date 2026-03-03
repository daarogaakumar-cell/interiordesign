"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = [
  "All",
  "Master Bedroom",
  "Living & Dining",
  "Kitchen",
  "Kids Bedroom",
  "Entrance & Foyer",
];

const projects = [
  {
    title: "Master Bedroom Suite",
    category: "Master Bedroom",
    image: "/images/Master Bedroom_Scene 1.png",
    description: "Elegant master suite with warm wood accents",
  },
  {
    title: "Living & Dining Space",
    category: "Living & Dining",
    image: "/images/Living Dining 1.png",
    description: "Open-plan living with luxurious dining area",
  },
  {
    title: "Modern Kitchen",
    category: "Kitchen",
    image: "/images/Kitchen 1_Scene 1.png",
    description: "Contemporary kitchen with premium finishes",
  },
  {
    title: "Master Bedroom View",
    category: "Master Bedroom",
    image: "/images/Master Bedroom_Scene 2.png",
    description: "Serene bedroom with panoramic window design",
  },
  {
    title: "Grand Entrance",
    category: "Entrance & Foyer",
    image: "/images/Entrance 1.png",
    description: "Welcoming entrance with statement lighting",
  },
  {
    title: "Kids' Retreat",
    category: "Kids Bedroom",
    image: "/images/Kids Bedroom View 1.png",
    description: "Playful yet sophisticated children's room",
  },
  {
    title: "Bedroom Elegance",
    category: "Master Bedroom",
    image: "/images/Master Bedroom_Scene 3.png",
    description: "Timeless luxury with rich textures",
  },
  {
    title: "Kitchen Details",
    category: "Kitchen",
    image: "/images/Kitchen 1_Scene 2.png",
    description: "Functional beauty in every detail",
  },
  {
    title: "Dining Open Plan",
    category: "Living & Dining",
    image: "/images/Living Dining 2.png",
    description: "Seamless living and entertaining flow",
  },
  {
    title: "Entrance Foyer",
    category: "Entrance & Foyer",
    image: "/images/Entrance 2.png",
    description: "First impressions built to last",
  },
  {
    title: "Master Retreat",
    category: "Master Bedroom",
    image: "/images/Master Bedroom_Scene 4.png",
    description: "A sanctuary of calm and comfort",
  },
  {
    title: "Kids Room View",
    category: "Kids Bedroom",
    image: "/images/Kids Bedroom View 2.png",
    description: "Creative space designed for growing minds",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold" />
            <span className="font-body text-gold text-[12px] tracking-[0.3em] uppercase font-medium">
              Our Portfolio
            </span>
            <div className="w-10 h-px bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-charcoal text-4xl md:text-5xl font-medium leading-[1.15]"
          >
            Featured <span className="italic text-gold-dark">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-warm-gray-dark text-base max-w-2xl mx-auto mt-5 leading-relaxed"
          >
            Explore our curated collection of residential and commercial
            interiors — each project a unique reflection of its owner.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer font-body text-[11px] sm:text-[12px] tracking-[0.12em] uppercase px-3 sm:px-5 py-2 sm:py-2.5 border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-charcoal text-gold border-charcoal"
                  : "bg-transparent text-warm-gray-dark border-charcoal/15 hover:border-gold hover:text-gold-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-4/3 overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/70 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-body text-gold text-[11px] tracking-[0.2em] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-heading text-cream text-xl font-medium mb-1">
                      {project.title}
                    </h3>
                    <p className="font-body text-cream/60 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.behance.net/ascherdesign/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-[13px] tracking-[0.15em] uppercase text-charcoal border-b border-charcoal/30 pb-1 transition-all duration-300 hover:text-gold hover:border-gold cursor-pointer"
          >
            View Full Portfolio on Behance
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M1 13L13 1M13 1H5M13 1V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
