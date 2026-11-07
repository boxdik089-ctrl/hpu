"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TestimonialPhoto {
  id: number;
  image: string;
  alt: string;
}

const customerPhotos: TestimonialPhoto[] = [
  { id: 1, image: "/testimonials/testi-1.jpg", alt: "Testimoni HPU 1" },
  { id: 2, image: "/testimonials/testi-2.jpg", alt: "Testimoni HPU 2" },
  { id: 3, image: "/testimonials/testi-3.jpg", alt: "Testimoni HPU 3" },
  { id: 4, image: "/testimonials/testi-4.jpg", alt: "Testimoni HPU 4" },
  { id: 5, image: "/testimonials/testi-5.jpg", alt: "Testimoni HPU 5" },
];

export function Testimonials() {
  const [selectedPhoto, setSelectedPhoto] = useState<TestimonialPhoto | null>(null);

  return (
    <section id="testimoni" className="py-14 sm:py-20 px-4 sm:px-6 bg-pink-100/50 border-b border-pink-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 tracking-tight">
            Testimoni Pelanggan
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-pink-300 mx-auto rounded mt-3 mb-3 origin-center"
          />
          <p className="text-pink-800 text-xs sm:text-sm">
            Foto hasil nyata penurunan berat badan dari konsumen HPU Ultimate.
          </p>
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {customerPhotos.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 14px 28px -5px rgba(236, 72, 153, 0.2)",
              }}
              onClick={() => setSelectedPhoto(item)}
              className="bg-white rounded-2xl overflow-hidden border border-pink-200 shadow-xs cursor-pointer group transition-all"
              title="Klik untuk memperbesar foto"
            >
              <div className="relative w-full aspect-[9/14] bg-neutral-900 flex items-center justify-center overflow-hidden">
                {/* Ambient blur */}
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover blur-sm opacity-20 scale-110 pointer-events-none"
                  aria-hidden
                />

                {/* Main uncropped photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />

                {/* Clean hover overlay */}
                <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
                  <motion.span
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs font-semibold text-white bg-black/60 px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    Perbesar
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", stiffness: 320, damping: 25 }}
              className="relative bg-black rounded-2xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-pink-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                type="button"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-30 bg-black/70 hover:bg-black text-white p-2 rounded-full transition shadow"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* Photo */}
              <div className="relative w-full h-[75vh] flex items-center justify-center p-2">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
