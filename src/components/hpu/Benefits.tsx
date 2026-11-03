import React from "react";
import { hpuConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  return (
    <section id="manfaat" className="bg-white py-14 sm:py-20 px-4 sm:px-6 border-b border-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase">
            Khasiat Utama
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 tracking-tight mt-1">
            Manfaat HPU Ultimate
          </h2>
          <div className="w-16 h-1 bg-pink-300 mx-auto rounded-full my-3" />
          <p className="text-pink-800 text-xs sm:text-sm">
            Kombinasi herbal terpilih yang bekerja sinergis meluruhkan lemak dan menyehatkan tubuh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {hpuConfig.benefits.map((benefit, index) => {
            const isLast = index === hpuConfig.benefits.length - 1;
            return (
              <div
                key={index}
                className={`flex items-start p-4 sm:p-5 bg-pink-50/70 rounded-2xl border border-pink-100 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 shadow-xs ${
                  isLast ? "md:col-span-2 lg:col-span-1 lg:col-start-2 md:max-w-md md:mx-auto w-full" : ""
                }`}
              >
                <div className="flex-shrink-0 mr-3.5 mt-0.5">
                  <div className="w-8 h-8 rounded-full bg-pink-500/10 text-pink-600 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-pink-600" />
                  </div>
                </div>
                <p className="text-sm sm:text-base font-semibold text-pink-900 leading-snug pt-1">
                  {benefit}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
