"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { hpuConfig } from "@/config/site";
import { motion } from "motion/react";

export function AboutProduct() {
  const points = [
    {
      label: "Izin Resmi BPOM:",
      desc: "Terdaftar di BPOM RI dengan nomor POM TR253007261.",
    },
    {
      label: "100% Halal MUI:",
      desc: "Resmi tersertifikasi oleh LPPOM Majelis Ulama Indonesia.",
    },
    {
      label: "Aman & Nyaman:",
      desc: "Tidak menyebabkan jantung berdebar, pusing, lemas, ataupun buang air berlebihan (diare).",
    },
    {
      label: "Kemasan:",
      desc: "1 botol isi 30 kapsul (@ 500mg), cukup untuk konsumsi rutin 1 bulan.",
    },
  ];

  return (
    <section id="tentang" className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-pink-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Product Image with Gentle Floating & Hover Effect */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-pink-200 shadow-md bg-pink-50 aspect-[3/4] cursor-pointer"
            >
              <Image
                src="/images/hpu-product.jpg"
                alt="HPU Herbal Pelangsing Ultimate"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 360px"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Product Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 space-y-5"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 tracking-tight">
                Mengenal HPU Ultimate
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-1 bg-pink-400 rounded mt-2 mb-4 origin-left"
              />
            </div>

            <p className="text-pink-900 text-sm sm:text-base leading-relaxed">
              <strong>HPU (Herbal Pelangsing Ultimate)</strong> adalah jamu herbal penurun berat badan berbentuk kapsul yang diformulasikan dari rempah-rempah alami. Membantu meluruhkan lemak berlebih tanpa harus olahraga berat dan tanpa tersiksa lapar.
            </p>

            {/* Staggered Feature List */}
            <ul className="space-y-2.5 text-sm sm:text-base text-pink-900">
              {points.map((pt, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-2.5"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 + i * 0.08 }}
                    className="text-pink-500 font-bold shrink-0 mt-0.5"
                  >
                    ✓
                  </motion.span>
                  <span>
                    <strong>{pt.label}</strong> {pt.desc}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Actions with Spring Micro-interactions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <motion.a
                href={hpuConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-sm shadow-pink-500/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Pesan via WhatsApp
              </motion.a>

              {hpuConfig.contact.shopeeUrl && (
                <motion.a
                  href={hpuConfig.contact.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-pink-700 border border-pink-300 font-bold text-sm px-6 py-3 rounded-full shadow-xs transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-[#EE4D2D]" />
                  Order di Shopee
                </motion.a>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
