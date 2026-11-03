import React from "react";
import { hpuConfig } from "@/config/site";
import { UserCheck, Heart, AlertTriangle } from "lucide-react";

const pantanganList = [
  "Minuman Dingin / Es",
  "Kopi & Kafein",
  "Minuman Bersoda",
  "Buah Durian",
  "Air Kelapa",
  "Makanan & Minuman Manis",
];

export function Dosage() {
  return (
    <section id="aturan-minum" className="bg-pink-500 py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-wider text-pink-200 uppercase">
            Petunjuk Penggunaan
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mt-1">
            Aturan Minum &amp; Dosis
          </h2>
          <p className="text-pink-100 text-xs sm:text-sm mt-2">
            Ikuti petunjuk penggunaan secara teratur untuk mendapatkan hasil maksimal.
          </p>
        </div>

        {/* 2 Dosage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-10">
          {/* Card 1: Untuk Pemula */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-pink-100">
            <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-5">
              <UserCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-pink-700 mb-2">
              Untuk Pemula
            </h3>
            <div className="space-y-2 text-pink-900 font-medium">
              <p className="flex items-baseline gap-2 text-base sm:text-lg">
                <span className="text-pink-500 text-3xl font-extrabold">1</span>
                Kapsul / Hari
              </p>
              <p className="text-xs sm:text-sm text-pink-700/80 bg-pink-50 p-2.5 rounded-xl border border-pink-100">
                ⏰ Diminum <strong>30 menit sebelum makan pagi</strong> dengan air putih hangat.
              </p>
            </div>
          </div>

          {/* Card 2: Ibu Menyusui */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-pink-100">
            <div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-5">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-pink-700 mb-2">
              Ibu Menyusui
            </h3>
            <div className="space-y-2 text-pink-900 font-medium">
              <p className="flex items-baseline gap-2 text-base sm:text-lg">
                <span className="text-pink-500 text-3xl font-extrabold">1</span>
                Kapsul / Hari
              </p>
              <p className="text-xs sm:text-sm text-pink-700/80 bg-pink-50 p-2.5 rounded-xl border border-pink-100">
                ⏰ Diminum <strong>setelah makan pagi</strong> dengan air putih hangat.
              </p>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-white border-l-6 border-pink-700 rounded-2xl p-5 sm:p-7 shadow-lg">
          <div className="flex items-center gap-2.5 mb-3 text-pink-800">
            <AlertTriangle className="w-5 h-5 text-pink-700 shrink-0" />
            <h4 className="text-base sm:text-lg font-bold tracking-tight">
              PANTANGAN SELAMA KONSUMSI
            </h4>
          </div>

          <p className="text-pink-900 text-xs sm:text-sm mb-4 leading-relaxed">
            Untuk memastikan penyerapan herbal optimal dan lemak terbakar maksimal, <strong>hindari mengonsumsi:</strong>
          </p>

          {/* Scannable Badges */}
          <div className="flex flex-wrap gap-2">
            {pantanganList.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-800 border border-pink-200 text-xs font-semibold px-3 py-1.5 rounded-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-pink-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
