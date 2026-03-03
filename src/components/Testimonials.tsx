"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homeowner, Mumbai",
    text: "Ascher Designs transformed our apartment into something we couldn't have imagined. Every room tells a story — the attention to detail is absolutely unmatched. Our master bedroom is now our favorite place in the world.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Business Owner, Pune",
    text: "We needed a commercial space that reflected our brand's premium positioning. Ascher delivered beyond expectations — our clients always comment on how stunning the office looks. Professional, creative, and incredibly thorough.",
    rating: 5,
  },
  {
    name: "Ananya Reddy",
    role: "Homeowner, Hyderabad",
    text: "From the initial consultation to the final reveal, the entire process was seamless. They understood our lifestyle perfectly and created spaces that are both beautiful and incredibly functional. The kids' room is magical!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Villa Owner, Delhi",
    text: "Working with Ascher was an absolute joy. They have an exceptional eye for combining luxury with comfort. Our entrance and foyer set the perfect tone for the rest of the home. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="testimonials"
      className="py-28 md:py-36 bg-charcoal relative overflow-hidden"
    >
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 text-gold/4 font-heading text-[200px] md:text-[300px] leading-none select-none pointer-events-none hidden sm:block">
        &ldquo;
      </div>
      <div className="absolute bottom-10 right-10 text-gold/4 font-heading text-[200px] md:text-[300px] leading-none select-none pointer-events-none rotate-180 hidden sm:block">
        &ldquo;
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-gold/50" />
            <span className="font-body text-gold text-[12px] tracking-[0.3em] uppercase font-medium">
              Testimonials
            </span>
            <div className="w-10 h-px bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-cream text-4xl md:text-5xl font-medium leading-[1.15]"
          >
            What Our <span className="italic text-gold">Clients</span> Say
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="text-center min-h-70 flex flex-col items-center justify-center">
            <Quote size={32} className="text-gold/30 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="text-gold"
                    >
                      <path d="M8 0l2.47 4.88L16 5.73l-4 3.79.94 5.48L8 12.52 3.06 15l.94-5.48-4-3.79 5.53-.85z" />
                    </svg>
                  ))}
                </div>

                <p className="font-body text-cream/80 text-lg md:text-xl leading-relaxed italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="mt-8">
                  <p className="font-heading text-cream text-lg font-medium">
                    {testimonials[current].name}
                  </p>
                  <p className="font-body text-warm-gray-light text-sm mt-1">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="cursor-pointer w-10 h-10 border border-white/10 flex items-center justify-center text-cream/40 transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`cursor-pointer h-0.5 transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-gold"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="cursor-pointer w-10 h-10 border border-white/10 flex items-center justify-center text-cream/40 transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
