"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 md:py-36 bg-cream relative">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
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
              Get In Touch
            </span>
            <div className="w-10 h-px bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-charcoal text-4xl md:text-5xl font-medium leading-[1.15]"
          >
            Let&apos;s Create{" "}
            <span className="italic text-gold-dark">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-warm-gray-dark text-base max-w-2xl mx-auto mt-5 leading-relaxed"
          >
            Ready to transform your space? Reach out to us for a free
            consultation and let&apos;s begin crafting your dream interior.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your inquiry! We will get back to you shortly.");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-charcoal text-[12px] tracking-[0.12em] uppercase mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 bg-transparent border border-charcoal/15 font-body text-charcoal text-sm placeholder:text-warm-gray-light focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-charcoal text-[12px] tracking-[0.12em] uppercase mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 bg-transparent border border-charcoal/15 font-body text-charcoal text-sm placeholder:text-warm-gray-light focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-body text-charcoal text-[12px] tracking-[0.12em] uppercase mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3.5 bg-transparent border border-charcoal/15 font-body text-charcoal text-sm placeholder:text-warm-gray-light focus:outline-none focus:border-gold transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block font-body text-charcoal text-[12px] tracking-[0.12em] uppercase mb-2"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3.5 bg-transparent border border-charcoal/15 font-body text-charcoal text-sm focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="bedroom">Bedroom Design</option>
                  <option value="living">Living & Dining</option>
                  <option value="kitchen">Kitchen Design</option>
                  <option value="entrance">Entrance & Foyer</option>
                  <option value="commercial">Commercial Spaces</option>
                  <option value="full-home">Full Home Interiors</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-body text-charcoal text-[12px] tracking-[0.12em] uppercase mb-2"
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your vision, space, and any specific requirements..."
                  className="w-full px-4 py-3.5 bg-transparent border border-charcoal/15 font-body text-charcoal text-sm placeholder:text-warm-gray-light focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full sm:w-auto px-12 py-4 bg-charcoal text-gold font-body text-[13px] tracking-[0.15em] uppercase font-semibold transition-all duration-500 hover:bg-gold hover:text-charcoal"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info + Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Highlight Image */}
            <div className="relative aspect-16/10 overflow-hidden">
              <Image
                src="/images/Master Bedroom_Scene 5.png"
                alt="Beautiful bedroom designed by Ascher Designs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/50 to-transparent" />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold/30">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-charcoal text-[12px] tracking-widest uppercase font-semibold mb-1">
                    Location
                  </p>
                  <p className="font-body text-warm-gray-dark text-sm leading-relaxed">
                    India
                    <br />
                    Available Worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold/30">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-charcoal text-[12px] tracking-widest uppercase font-semibold mb-1">
                    Phone
                  </p>
                  <p className="font-body text-warm-gray-dark text-sm">
                    Available on request
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold/30">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-charcoal text-[12px] tracking-widest uppercase font-semibold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:ascherdesigns@email.com"
                    className="font-body text-warm-gray-dark text-sm hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    ascherdesigns@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-gold/30">
                  <Clock size={16} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-charcoal text-[12px] tracking-widest uppercase font-semibold mb-1">
                    Availability
                  </p>
                  <p className="font-body text-warm-gray-dark text-sm">
                    Freelance &amp; Full-time
                    <br />
                    Available Now
                  </p>
                </div>
              </div>
            </div>

            {/* Social Link */}
            <div className="pt-4 border-t border-charcoal/10">
              <a
                href="https://www.behance.net/ascherdesign/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-[13px] tracking-[0.12em] uppercase text-charcoal hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                View on Behance
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
