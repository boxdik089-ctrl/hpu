import React from "react";
import { hpuConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-pink-100 py-16 sm:py-24 lg:py-28 px-4 sm:px-6 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-3xl mx-auto">
        <span className="inline-block py-1 px-4 rounded-full bg-white text-pink-600 font-semibold text-xs sm:text-sm mb-5 shadow-xs border border-pink-200">
          Herbal Pelangsing Ultimate
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-pink-700">
          Menurunkan berat badan <br />
          <span className="text-pink-500">1-5 kg dalam 1 botol</span> <br />
          TANPA OLAHRAGA.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-pink-800 mb-8 max-w-2xl mx-auto leading-relaxed">
          {hpuConfig.description}
        </p>

        <a
          href={hpuConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3.5 px-9 rounded-full shadow-md shadow-pink-500/20 transition-colors"
        >
          Pesan Sekarang
        </a>

        {/* Quick Trust Marks */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-pink-800 font-medium">
          <span>✓ POM TR253007261</span>
          <span>•</span>
          <span>✓ 100% Halal MUI</span>
          <span>•</span>
          <span>✓ Isi 30 Kapsul</span>
        </div>
      </div>
    </section>
  );
}
