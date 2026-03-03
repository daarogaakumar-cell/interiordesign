"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Ruler, Paintbrush, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We begin with a deep understanding of your vision, lifestyle, and preferences. This initial conversation shapes the foundation of your project.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Concept & Planning",
    description:
      "Our team develops detailed mood boards, layouts, and 3D visualizations to bring your dream space to life before construction begins.",
  },
  {
    number: "03",
    icon: Paintbrush,
    title: "Design Development",
    description:
      "We refine every material, finish, and fixture. From fabrics to furniture, every element is meticulously curated for cohesion and quality.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Execution & Install",
    description:
      "Our experienced team manages the entire build-out process, coordinating vendors, craftsmen, and timelines with precision.",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Handover",
    description:
      "The big reveal — a beautifully designed space ready for you to enjoy. We ensure every detail meets our exacting standards.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-28 md:py-36 bg-cream-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-linear-to-r from-gold/3 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold" />
            <span className="font-body text-gold text-[12px] tracking-[0.3em] uppercase font-medium">
              How We Work
            </span>
            <div className="w-10 h-px bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-charcoal text-4xl md:text-5xl font-medium leading-[1.15]"
          >
            Our <span className="italic text-gold-dark">Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-warm-gray-dark text-base max-w-2xl mx-auto mt-5 leading-relaxed"
          >
            A structured yet flexible approach that ensures every project is
            delivered with excellence, on time, and within budget.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center relative"
              >
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mx-auto mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-gold/20" />
                  {/* Inner circle */}
                  <div className="w-18 h-18 rounded-full bg-charcoal flex items-center justify-center relative">
                    <step.icon size={22} className="text-gold" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute top-0 right-0 w-7 h-7 rounded-full bg-gold flex items-center justify-center">
                    <span className="font-body text-charcoal text-[10px] font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-charcoal text-lg font-medium mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-warm-gray-dark text-sm leading-relaxed max-w-55 mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
