"use client";

import React from "react";
import { hpuConfig } from "@/config/site";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export function Benefits() {
  return (
    <section id="manfaat" className="bg-white py-14 sm:py-20 px-4 sm:px-6 border-b border-pink-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 tracking-tight">
            Manfaat HPU Ultimate
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-pink-300 mx-auto rounded mt-3 origin-center"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {hpuConfig.benefits.map((benefit, index) => {
            const isLast = index === hpuConfig.benefits.length - 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  borderColor: "#f472b6",
                  boxShadow: "0 10px 22px -3px rgba(236, 72, 153, 0.12)",
                }}
                className={`flex items-center p-4 sm:p-5 bg-pink-50 rounded-2xl border border-pink-100 transition-colors cursor-default ${
                  isLast
                    ? "md:col-span-2 lg:col-span-1 lg:col-start-2 md:max-w-md md:mx-auto w-full"
                    : ""
                }`}
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 350, damping: 12 }}
                  className="w-7 h-7 rounded-full bg-pink-500 text-white flex items-center justify-center shrink-0 mr-3.5 shadow-xs"
                >
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </motion.div>
                <p className="text-base font-semibold text-pink-900 leading-snug">
                  {benefit}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
