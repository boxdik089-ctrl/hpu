import React from "react";
import { hpuConfig } from "@/config/site";

export function Dosage() {
  return (
    <section id="aturan-minum" className="bg-pink-500 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Aturan Minum & Dosis
          </h2>
          <p className="text-pink-100 text-lg">
            Ikuti petunjuk penggunaan untuk hasil maksimal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Untuk Pemula */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:-translate-y-1 transition duration-300">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-pink-700 mb-4">
              Untuk Pemula
            </h3>
            <div className="space-y-3 text-pink-900 font-medium text-lg">
              <p className="flex items-center gap-3">
                <span className="text-pink-500 text-3xl font-bold">1</span>
                Kapsul / Hari
              </p>
              <p className="text-sm text-pink-700 opacity-80">
                (Diminum 30 menit sebelum makan pagi)
              </p>
            </div>
          </div>

          {/* Card 2: Ibu Menyusui */}
          <div className="bg-white rounded-3xl p-8 shadow-xl transform hover:-translate-y-1 transition duration-300">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-pink-700 mb-4">
              Ibu Menyusui
            </h3>
            <div className="space-y-3 text-pink-900 font-medium text-lg">
              <p className="flex items-center gap-3">
                <span className="text-pink-500 text-3xl font-bold">1</span>
                Kapsul / Hari
              </p>
              <p className="text-sm text-pink-700 opacity-80">
                (Diminum setelah makan pagi)
              </p>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-white border-l-8 border-pink-700 rounded-r-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <svg
              className="w-6 h-6 text-pink-700 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h4 className="text-xl font-bold text-pink-800">
              {hpuConfig.warning.title}
            </h4>
          </div>
          <p className="text-pink-900 font-medium leading-relaxed">
            Selama konsumsi HPU,{" "}
            <span className="font-bold text-pink-700 underline">
              dilarang keras
            </span>{" "}
            mengonsumsi: Es, Kopi, Soda, Durian, Air Kelapa, serta Makanan &amp;
            Minuman Manis.
          </p>
        </div>
      </div>
    </section>
  );
}

