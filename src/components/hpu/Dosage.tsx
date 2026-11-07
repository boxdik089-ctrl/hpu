"use client";

import React from "react";
import { motion } from "motion/react";

export function Dosage() {
  return (
    <section id="aturan-minum" className="bg-pink-500 py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            Aturan Minum &amp; Dosis
          </h2>
          <p className="text-pink-100 text-base sm:text-lg">
            Ikuti petunjuk penggunaan untuk hasil maksimal
          </p>
        </motion.div>

        {/* 2 Dosage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {/* Card 1: Untuk Pemula */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg transition-all"
          >
            <h3 className="text-2xl font-bold text-pink-700 mb-4">
              Untuk Pemula
            </h3>
            <div className="space-y-2 text-pink-900 font-medium text-lg">
              <p className="flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 10 }}
                  className="inline-block text-pink-500 text-3xl font-bold cursor-default"
                >
                  1
                </motion.span>
                Kapsul / Hari
              </p>
              <p className="text-sm text-pink-700 opacity-80">
                (Diminum 30 menit sebelum makan pagi)
              </p>
            </div>
          </motion.div>

          {/* Card 2: Ibu Menyusui */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg transition-all"
          >
            <h3 className="text-2xl font-bold text-pink-700 mb-4">
              Ibu Menyusui
            </h3>
            <div className="space-y-2 text-pink-900 font-medium text-lg">
              <p className="flex items-center gap-3">
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 10 }}
                  className="inline-block text-pink-500 text-3xl font-bold cursor-default"
                >
                  1
                </motion.span>
                Kapsul / Hari
              </p>
              <p className="text-sm text-pink-700 opacity-80">
                (Diminum setelah makan pagi)
              </p>
            </div>
          </motion.div>
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border-l-8 border-pink-700 rounded-r-2xl p-6 shadow-md"
        >
          <h4 className="text-lg sm:text-xl font-bold text-pink-800 mb-2">
            PANTANGAN KHUSUS
          </h4>
          <p className="text-pink-900 font-medium text-sm sm:text-base leading-relaxed">
            Selama konsumsi HPU, <span className="font-bold text-pink-700 underline">dilarang keras</span> mengonsumsi:{" "}
            Es, Kopi, Soda, Durian, Air Kelapa, serta Makanan &amp; Minuman Manis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
