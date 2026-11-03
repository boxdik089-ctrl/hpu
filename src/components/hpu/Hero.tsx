import React from "react";
import { hpuConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-pink-100 py-20 lg:py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white text-pink-600 font-semibold text-sm mb-6 shadow-sm border border-pink-200">
          Herbal Pelangsing Ultimate
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-pink-700">
          Menurunkan berat badan <br />
          <span className="text-pink-500">1-5 kg dalam 1 botol</span> <br />
          TANPA OLAHRAGA.
        </h1>

        <p className="text-lg md:text-xl text-pink-800 mb-8 max-w-2xl mx-auto leading-relaxed">
          {hpuConfig.description}
        </p>

        <a
          href={hpuConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-pink-500/50 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/60"
        >
          Pesan Sekarang
        </a>
      </div>
    </section>
  );
}

