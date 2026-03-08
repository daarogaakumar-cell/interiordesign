"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#0b3d2e" }}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Radial gold ambient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 52%, rgba(212,168,67,0.12), transparent)",
            }}
          />

          {/* Corner ornament lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="pointer-events-none absolute inset-8 border border-gold/10"
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.55, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mb-7"
              style={{ width: 80, height: 80 }}
            >
              {/* Ring around logo */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1.18, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                className="absolute inset-0 rounded-full border border-gold/25"
                style={{ margin: "-8px" }}
              />
              <Image
                src="/images/logo.jpeg"
                alt="Ascher Designs"
                fill
                className="object-contain rounded-sm"
                sizes="80px"
                priority
              />
            </motion.div>

            {/* Brand name — ASCHER */}
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                className="block font-heading text-4xl font-semibold text-cream leading-none"
                style={{ letterSpacing: "0.28em" }}
              >
                ASCHER
              </motion.span>
            </div>

            {/* Sub-label — DESIGNS */}
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
              className="font-body text-[10px] uppercase text-gold font-medium mt-1.5"
            >
              DESIGNS
            </motion.span>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
              className="mt-8 h-px w-14 bg-gold origin-center"
            />

            {/* Loading dots */}
            <div className="mt-4 flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.6, 0.2, 0.6], scale: 1 }}
                  transition={{
                    opacity: { duration: 1.2, delay: 1.5 + i * 0.18, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.4, delay: 1.4 + i * 0.18, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="w-1 h-1 rounded-full bg-gold"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
