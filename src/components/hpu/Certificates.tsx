"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ZoomIn, 
  X, 
  ExternalLink
} from "lucide-react";

interface CertificateDoc {
  id: string;
  title: string;
  institution: string;
  docNumber: string;
  validity: string;
  badge: string;
  description: string;
  image: string;
  colorScheme: "emerald" | "blue";
}

const certificateList: CertificateDoc[] = [
  {
    id: "halal-mui",
    title: "Ketetapan Halal MUI",
    institution: "Majelis Ulama Indonesia (MUI)",
    docNumber: "No. LPPOM-LPPOM-0013023793012",
    validity: "Berlaku s/d 30 Januari 2028",
    badge: "HALAL RESMI",
    description: "Ketetapan Halal resmi dari MUI berdasarkan pengujian Lembaga Pemeriksa Halal (LPH) LPPOM MUI.",
    image: "/certificates/sertifikat-halal-mui.jpg",
    colorScheme: "emerald",
  },
  {
    id: "bpom-ri",
    title: "Izin Edar Resmi BPOM",
    institution: "Badan Pengawas Obat dan Makanan (BPOM RI)",
    docNumber: "Direktorat Registrasi Obat Tradisional & Suplemen",
    validity: "Resmi Terdaftar",
    badge: "BPOM RI",
    description: "Salinan Surat Keputusan Izin Edar resmi dari Badan Pengawas Obat dan Makanan RI.",
    image: "/certificates/izin-resmi-bpom.jpg",
    colorScheme: "blue",
  },
];

export function Certificates() {
  const [selectedDoc, setSelectedDoc] = useState<CertificateDoc | null>(null);

  return (
    <section id="legalitas" className="py-14 sm:py-18 px-4 sm:px-6 bg-pink-50/40 border-b border-pink-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-pink-600 uppercase">
            Sertifikasi Resmi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 tracking-tight mt-1">
            Legalitas &amp; Sertifikat Resmi
          </h2>
          <p className="text-pink-800 text-xs sm:text-sm mt-2 leading-relaxed">
            Produk HPU telah memiliki izin edar resmi dari <strong>BPOM RI</strong> dan ketetapan <strong>Halal MUI</strong>.
          </p>
        </div>

        {/* Certificate Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificateList.map((doc) => {
            const isEmerald = doc.colorScheme === "emerald";
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-5 border border-pink-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isEmerald
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {doc.badge}
                    </span>
                    <span className="text-[11px] text-pink-600 font-medium">
                      Dokumen Asli
                    </span>
                  </div>

                  {/* Document Preview Box */}
                  <div
                    onClick={() => setSelectedDoc(doc)}
                    className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 cursor-pointer shadow-inner mb-3 flex items-center justify-center group"
                  >
                    <Image
                      src={doc.image}
                      alt={doc.title}
                      fill
                      className="object-contain p-2 group-hover:scale-102 transition-transform duration-200"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />

                    {/* Simple Hover Zoom */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-semibold text-white bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-xs flex items-center gap-1.5">
                        <ZoomIn className="w-4 h-4" />
                        Klik untuk Perbesar
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-pink-800 leading-snug mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-xs font-semibold text-pink-600 font-mono mb-1.5">
                    {doc.docNumber}
                  </p>
                  <p className="text-xs text-pink-900/80 leading-relaxed mb-3">
                    {doc.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-pink-100 flex items-center justify-between">
                  <span className="text-[11px] text-pink-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {doc.validity}
                  </span>
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 px-3 py-1 rounded-full transition"
                  >
                    Buka Surat
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-pink-100 flex items-center justify-between bg-pink-50/50">
              <div>
                <h3 className="font-bold text-base text-pink-800 leading-snug">
                  {selectedDoc.title}
                </h3>
                <p className="text-xs text-pink-600 font-mono">
                  {selectedDoc.docNumber}
                </p>
              </div>

              <button
                onClick={() => setSelectedDoc(null)}
                className="bg-white hover:bg-pink-100 text-pink-700 p-1.5 rounded-full border border-pink-200 transition"
                aria-label="Tutup surat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Document Image */}
            <div className="relative w-full flex-1 min-h-[50vh] sm:min-h-[60vh] bg-slate-900 p-2 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[420px]">
                <Image
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-3.5 bg-white border-t border-pink-100 flex items-center justify-between">
              <span className="text-xs text-pink-900/80">
                {selectedDoc.institution}
              </span>
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-pink-500 hover:bg-pink-600 rounded-full transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
