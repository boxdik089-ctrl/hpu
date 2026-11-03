import React from "react";
import { hpuConfig } from "@/config/site";
import { Check } from "lucide-react";

export function Benefits() {
  return (
    <section id="manfaat" className="bg-white py-14 sm:py-20 px-4 sm:px-6 border-b border-pink-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 tracking-tight">
            Manfaat HPU Ultimate
          </h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {hpuConfig.benefits.map((benefit, index) => {
            const isLast = index === hpuConfig.benefits.length - 1;
            return (
              <div
                key={index}
                className={`flex items-center p-4 sm:p-5 bg-pink-50 rounded-2xl border border-pink-100 hover:border-pink-200 transition-colors ${
                  isLast ? "md:col-span-2 lg:col-span-1 lg:col-start-2 md:max-w-md md:mx-auto w-full" : ""
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-pink-500 text-white flex items-center justify-center shrink-0 mr-3.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <p className="text-base font-semibold text-pink-900 leading-snug">
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
