import React from "react";
import Image from "next/image";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { hpuConfig } from "@/config/site";

export function AboutProduct() {
  return (
    <section id="tentang" className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-pink-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Product Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-pink-200 shadow-md bg-pink-50 aspect-[3/4]">
              <Image
                src="/images/hpu-product.jpg"
                alt="HPU Herbal Pelangsing Ultimate"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 360px"
                priority
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 tracking-tight">
                Mengenal HPU Ultimate
              </h2>
              <div className="w-16 h-1 bg-pink-400 rounded mt-2 mb-4" />
            </div>

            <p className="text-pink-900 text-sm sm:text-base leading-relaxed">
              <strong>HPU (Herbal Pelangsing Ultimate)</strong> adalah jamu herbal penurun berat badan berbentuk kapsul yang diformulasikan dari rempah-rempah alami. Membantu meluruhkan lemak berlebih tanpa harus olahraga berat dan tanpa tersiksa lapar.
            </p>

            <ul className="space-y-2.5 text-sm sm:text-base text-pink-900">
              <li className="flex items-start gap-2.5">
                <span className="text-pink-500 font-bold">✓</span>
                <span><strong>Izin Resmi BPOM:</strong> Terdaftar di BPOM RI dengan nomor <strong>POM TR253007261</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-pink-500 font-bold">✓</span>
                <span><strong>100% Halal MUI:</strong> Resmi tersertifikasi oleh LPPOM Majelis Ulama Indonesia.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-pink-500 font-bold">✓</span>
                <span><strong>Aman &amp; Nyaman:</strong> Tidak menyebabkan jantung berdebar, pusing, lemas, ataupun buang air berlebihan (diare).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-pink-500 font-bold">✓</span>
                <span><strong>Kemasan:</strong> 1 botol isi 30 kapsul (@ 500mg), cukup untuk konsumsi rutin 1 bulan.</span>
              </li>
            </ul>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={hpuConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm px-6 py-3 rounded-full shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Pesan via WhatsApp
              </a>
              {hpuConfig.contact.shopeeUrl && (
                <a
                  href={hpuConfig.contact.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-pink-50 text-pink-700 border border-pink-300 font-bold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-[#EE4D2D]" />
                  Order di Shopee
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
