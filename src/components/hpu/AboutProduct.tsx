import React from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  Leaf, 
  MessageCircle,
  Pill,
  Award
} from "lucide-react";
import { hpuConfig } from "@/config/site";

export function AboutProduct() {
  return (
    <section id="tentang" className="py-14 sm:py-18 px-4 sm:px-6 bg-white border-b border-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Product Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-pink-200 shadow-lg bg-pink-50 aspect-[3/4]">
                <Image
                  src="/images/hpu-product.jpg"
                  alt="HPU - Herbal Pelangsing Ultimate"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />

                {/* Badges on image */}
                <a
                  href="#legalitas"
                  className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-pink-200 py-1.5 px-3 rounded-full shadow-sm flex items-center gap-1.5 text-xs font-bold text-pink-700 hover:bg-pink-50 transition"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>BPOM TR253007261</span>
                </a>

                <a
                  href="#legalitas"
                  className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm border border-pink-200 py-1.5 px-3 rounded-full shadow-sm flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-50 transition"
                >
                  <Leaf className="w-4 h-4 text-emerald-600" />
                  <span>100% Jamu Alami</span>
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-bold tracking-wider text-pink-600 uppercase">
                Tentang Produk
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 tracking-tight leading-tight mt-1">
                Hempas Lemak Tanpa Ribet, <br className="hidden sm:inline" />
                <span className="text-pink-500">Solusi Alami untuk Tubuh Ideal</span>
              </h2>
            </div>

            <p className="text-pink-900/90 text-sm sm:text-base leading-relaxed">
              <strong>HPU (Herbal Pelangsing Ultimate)</strong> adalah jamu herbal berbentuk kapsul yang diformulasikan dari ekstrak rempah alami pilihan untuk membantu mengurangi lemak tubuh secara efektif. Praktis digunakan tanpa harus tersiksa diet ketat ataupun olahraga berat.
            </p>

            {/* 4 Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50 border border-pink-100">
                <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-pink-800">Izin Resmi BPOM RI</h3>
                  <p className="text-[11px] sm:text-xs text-pink-900/75 mt-0.5">
                    Terdaftar resmi <strong>POM TR253007261</strong>. Teruji aman dikonsumsi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50 border border-pink-100">
                <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-pink-800">100% Jamu Tradisional</h3>
                  <p className="text-[11px] sm:text-xs text-pink-900/75 mt-0.5">
                    Kandungan alami yang membantu meluruhkan lemak secara bertahap dan sehat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50 border border-pink-100">
                <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-pink-800">Isi 30 Kapsul @ 500mg</h3>
                  <p className="text-[11px] sm:text-xs text-pink-900/75 mt-0.5">
                    Kemasan botol higienis dalam box bersegel, cukup 1 kapsul per hari.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50 border border-pink-100">
                <div className="w-9 h-9 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-pink-800">Tanpa Efek Samping</h3>
                  <p className="text-[11px] sm:text-xs text-pink-900/75 mt-0.5">
                    Tidak membuat jantung berdebar, tidak lemas, dan tanpa diare berlebihan.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={hpuConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-md shadow-pink-500/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Pesan HPU Sekarang
              </a>
              <a
                href="#legalitas"
                className="inline-flex items-center gap-1.5 bg-white hover:bg-pink-50 text-pink-700 border border-pink-200 font-semibold text-xs sm:text-sm px-5 py-3 rounded-full transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Lihat Surat Izin BPOM &amp; Halal MUI ↓
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
