import React from "react";
import { hpuConfig } from "@/config/site";

export function Benefits() {
  return (
    <section id="manfaat" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Manfaat HPU Ultimate
          </h2>
          <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hpuConfig.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-pink-50 rounded-2xl border border-pink-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0 mr-4 mt-0.5">
                <svg
                  className="w-8 h-8 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium text-pink-900 leading-snug">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

