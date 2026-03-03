"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Bed,
  Sofa,
  CookingPot,
  DoorOpen,
  Building2,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Bed,
    title: "Bedroom Design",
    description:
      "Tranquil retreats tailored to your personal style — from master suites to kids' bedrooms, every detail curated for comfort and elegance.",
    image: "/images/Master Bedroom_Scene 1.png",
  },
  {
    icon: Sofa,
    title: "Living & Dining",
    description:
      "Create inviting spaces for family gatherings and entertaining. We design living and dining areas that balance beauty with everyday function.",
    image: "/images/Living Dining 2.png",
  },
  {
    icon: CookingPot,
    title: "Kitchen Design",
    description:
      "Modern kitchens that are as functional as they are beautiful. Smart layouts, premium finishes, and seamless workflow design.",
    image: "/images/Kitchen 1_Scene 1.png",
  },
  {
    icon: DoorOpen,
    title: "Entrance & Foyer",
    description:
      "First impressions matter. We design welcoming entrances and foyers that set the tone for your entire home.",
    image: "/images/Entrance 1.png",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description:
      "Professional environments designed to boost productivity and brand identity — offices, showrooms, and retail spaces.",
    image: "/images/Kitchen 1_Scene 2.png",
  },
  {
    icon: Palette,
    title: "Full Home Interiors",
    description:
      "End-to-end design for your entire home. We create cohesive, flowing spaces that feel effortlessly connected.",
    image: "/images/Master Bedroom_Scene 4.png",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 md:py-36 bg-charcoal relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,169,110,1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold/50" />
            <span className="font-body text-gold text-[12px] tracking-[0.3em] uppercase font-medium">
              What We Do
            </span>
            <div className="w-10 h-px bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-cream text-4xl md:text-5xl font-medium leading-[1.15]"
          >
            Our <span className="italic text-gold">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-warm-gray-light text-base max-w-2xl mx-auto mt-5 leading-relaxed"
          >
            From concept to completion, we offer comprehensive interior design
            services tailored to transform every corner of your space.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden bg-charcoal-light/50 border border-white/5 cursor-pointer transition-all duration-500 hover:border-gold/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/30 to-transparent" />

                {/* Icon floating on image */}
                <div className="absolute bottom-4 left-5 w-11 h-11 flex items-center justify-center bg-gold/90 transition-colors duration-300 group-hover:bg-gold">
                  <service.icon size={20} className="text-charcoal" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-cream text-xl font-medium mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-warm-gray-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
