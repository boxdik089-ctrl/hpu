"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ZoomIn, 
  X, 
  TrendingDown
} from "lucide-react";
import { hpuConfig } from "@/config/site";

interface RealTestimonial {
  id: number;
  title: string;
  badge: string;
  highlight: string;
  description: string;
  image: string;
}

const realTestimonials: RealTestimonial[] = [
  {
    id: 1,
    title: "Turun 14 kg (110 kg → 96 kg)",
    badge: "110 kg ➔ 96 kg",
    highlight: "Real Terbukti",
    description: "Perubahan nyata dari 110 kg menjadi 96 kg, tubuh tampak proporsional dan langsing.",
    image: "/testimonials/testi-1.jpg",
  },
  {
    id: 2,
    title: "Turun 7 kg dalam 2 Bulan",
    badge: "85 kg ➔ 78 kg",
    highlight: "Lost 7 kg",
    description: "Perut buncit mengecil drastis dan pakaian lama kembali muat pas di badan.",
    image: "/testimonials/testi-2.jpg",
  },
  {
    id: 3,
    title: "Turun 12.6 kg (89.0 kg → 76.4 kg)",
    badge: "89 kg ➔ 76.4 kg",
    highlight: "< 1/2 Botol",
    description: "Minum seminggu cuma 3 kali dan belum habis setengah botol, BB sudah turun drastis.",
    image: "/testimonials/testi-3.jpg",
  },
  {
    id: 4,
    title: "Tubuh Ramping Bersama HPU",
    badge: "Original HPU",
    highlight: "Box & Botol",
    description: "Foto pelanggan bersama produk resmi HPU. Badan jauh lebih ramping dan segar.",
    image: "/testimonials/testi-4.jpg",
  },
  {
    id: 5,
    title: "Hasil Permanen Anti-Yoyo",
    badge: "Tetap Singset",
    highlight: "8 Bulan Lepas",
    description: "Sudah 8 bulan tidak minum HPU, bentuk tubuh tetap langsing kencang terjaga.",
    image: "/testimonials/testi-5.jpg",
  },
];

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<RealTestimonial | null>(null);

  return (
    <section id="testimoni" className="py-12 sm:py-16 px-4 sm:px-6 bg-pink-100/50 border-b border-pink-100">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase">
            Testimoni Asli
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 tracking-tight mt-1">
            Bukti Nyata Hasil HPU Ultimate
          </h2>
          <p className="text-pink-800 text-xs sm:text-sm mt-1.5 leading-relaxed">
            Foto hasil penurunan berat badan dari pelanggan Herbal Pelangsing Ultimate.
          </p>
        </div>

        {/* Compact Responsive Gallery Grid: 2 cols on mobile, 3 cols on tablet, 5 cols on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {realTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-pink-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              {/* Photo Container with uncropped display and matching blurred background */}
              <div
                className="relative w-full bg-neutral-900 cursor-pointer overflow-hidden aspect-[9/14] flex items-center justify-center"
                onClick={() => setSelectedImage(item)}
              >
                {/* Blurred ambient background */}
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover blur-md opacity-25 scale-110 pointer-events-none"
                  aria-hidden
                />

                {/* Main uncropped photo */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain relative z-10 group-hover:scale-102 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />

                {/* Subtle gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />

                {/* Badge Highlight (Top Left) */}
                <div className="absolute top-2 left-2 z-20 bg-pink-500 text-white font-bold text-[10px] px-2 py-0.5 rounded-md shadow flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  <span>{item.highlight}</span>
                </div>

                {/* Zoom Hint Icon (Top Right) */}
                <div className="absolute top-2 right-2 z-20 bg-white/90 text-pink-700 p-1.5 rounded-full shadow-xs opacity-90 group-hover:opacity-100 transition">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-2 left-2 right-2 z-20">
                  <span className="inline-block bg-black/70 backdrop-blur-xs text-pink-200 text-[10px] font-semibold px-2 py-0.5 rounded border border-pink-300/30">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Card Footer Detail */}
              <div className="p-3 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-bold text-xs text-pink-800 leading-snug line-clamp-1 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-pink-900/75 text-[11px] leading-tight line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-pink-100 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    ✓ Terbukti
                  </span>
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="text-[10px] font-bold text-pink-600 hover:text-pink-700"
                  >
                    Perbesar →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Photo Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-30 bg-black/70 hover:bg-black text-white p-1.5 rounded-full transition shadow-md"
              aria-label="Tutup foto"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image Display */}
            <div className="relative w-full flex-1 min-h-[50vh] sm:min-h-[60vh] bg-neutral-950 p-2 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[420px]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute top-3 left-3 bg-pink-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow z-20">
                {selectedImage.highlight}
              </div>
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-5 bg-white border-t border-pink-100">
              <div className="mb-1.5">
                <span className="text-[10px] font-bold text-pink-600 bg-pink-100 px-2 py-0.5 rounded">
                  {selectedImage.badge}
                </span>
              </div>

              <h4 className="font-bold text-base text-pink-800 mb-1">
                {selectedImage.title}
              </h4>
              <p className="text-pink-900/80 text-xs leading-relaxed mb-4">
                {selectedImage.description}
              </p>

              <div className="pt-2.5 border-t border-pink-100 flex items-center justify-between gap-2">
                <a
                  href={hpuConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold py-2 rounded-full transition"
                >
                  Konsultasi via WhatsApp
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-3.5 py-2 text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 rounded-full transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
