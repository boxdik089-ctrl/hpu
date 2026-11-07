"use client";

import React from "react";
import { hpuConfig } from "@/config/site";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-pink-100 py-16 sm:py-24 lg:py-28 px-4 sm:px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white text-pink-600 font-semibold text-xs sm:text-sm mb-5 shadow-xs border border-pink-200">
            Herbal Pelangsing Ultimate
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-pink-700"
        >
          Menurunkan berat badan <br />
          <motion.span
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35, type: "spring", stiffness: 200 }}
            className="inline-block text-pink-500"
          >
            1-5 kg dalam 1 botol
          </motion.span>{" "}
          <br />
          TANPA OLAHRAGA.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-pink-800 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {hpuConfig.description}
        </motion.p>

        {/* Primary CTA Button with Engaging Micro-interactions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45, type: "spring", stiffness: 250, damping: 18 }}
        >
          <motion.a
            href={hpuConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              y: -2,
              boxShadow: "0 12px 25px -4px rgba(236, 72, 153, 0.4)"
            }}
            whileTap={{ scale: 0.96 }}
            className="relative inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3.5 px-9 rounded-full shadow-md shadow-pink-500/25 transition-colors overflow-hidden group"
          >
            <span className="relative z-10">Pesan Sekarang</span>
            {/* Subtle light sweep shine on hover */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
          </motion.a>
        </motion.div>

        {/* Quick Trust Marks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-pink-800 font-medium"
        >
          <motion.span
            whileHover={{ scale: 1.05, color: "#be185d" }}
            className="cursor-default"
          >
            ✓ POM TR253007261
          </motion.span>
          <span>•</span>
          <motion.span
            whileHover={{ scale: 1.05, color: "#be185d" }}
            className="cursor-default"
          >
            ✓ 100% Halal MUI
          </motion.span>
          <span>•</span>
          <motion.span
            whileHover={{ scale: 1.05, color: "#be185d" }}
            className="cursor-default"
          >
            ✓ Isi 30 Kapsul
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
