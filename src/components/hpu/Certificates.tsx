"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface CertificateDoc {
  id: string;
  title: string;
  institution: string;
  docNumber: string;
  image: string;
  aspect: "portrait" | "landscape";
}

const certificateList: CertificateDoc[] = [
  {
    id: "halal-mui",
    title: "Ketetapan Halal MUI",
    institution: "Majelis Ulama Indonesia (MUI)",
    docNumber: "No. LPPOM-0013023793012",
    image: "/certificates/sertifikat-halal-mui.jpg",
    aspect: "portrait",
  },
  {
    id: "bpom-ri",
    title: "Izin Edar Resmi BPOM RI",
    institution: "Badan Pengawas Obat dan Makanan (BPOM)",
    docNumber: "POM TR253007261",
    image: "/certificates/izin-resmi-bpom.jpg",
    aspect: "landscape",
  },
];

export function Certificates() {
  const [selectedDoc, setSelectedDoc] = useState<CertificateDoc | null>(null);

  return (
    <section id="legalitas" className="py-14 sm:py-20 px-4 sm:px-6 bg-pink-50/60 border-b border-pink-100">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 tracking-tight">
            Legalitas &amp; Sertifikat Resmi
          </h2>
          <div className="w-16 h-1 bg-pink-300 mx-auto rounded my-3" />
          <p className="text-pink-800 text-xs sm:text-sm">
            HPU telah terdaftar resmi di <strong>BPOM RI</strong> dan mengantongi sertifikat <strong>Halal MUI</strong>.
          </p>
        </div>

        {/* Certificate Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificateList.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl p-5 border border-pink-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Document Preview Box */}
                <div
                  onClick={() => setSelectedDoc(doc)}
                  className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 cursor-pointer mb-4 flex items-center justify-center p-3 group hover:border-pink-300 transition-colors"
                  title="Klik untuk melihat dokumen"
                >
                  <div className="relative max-w-full max-h-full bg-white rounded-md shadow-sm border border-slate-200 overflow-hidden flex items-center justify-center">
                    <Image
                      src={doc.image}
                      alt={doc.title}
                      width={doc.aspect === "landscape" ? 520 : 360}
                      height={doc.aspect === "landscape" ? 375 : 540}
                      className="w-auto h-auto max-h-64 sm:max-h-72 max-w-full object-contain"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>

                  <div className="absolute inset-0 bg-pink-900/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-semibold text-white bg-pink-600 px-3.5 py-1.5 rounded-full shadow flex items-center gap-1.5">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Klik untuk Perbesar
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-base text-pink-800 mb-1">
                  {doc.title}
                </h3>
                <p className="text-xs font-semibold text-pink-600 font-mono mb-1">
                  {doc.docNumber}
                </p>
                <p className="text-xs text-pink-900/70">
                  {doc.institution}
                </p>
              </div>

              {/* Card Action */}
              <div className="pt-3 mt-3 border-t border-pink-100 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedDoc(doc)}
                  className="text-xs font-bold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 px-3.5 py-1.5 rounded-full transition"
                >
                  Buka Surat Lengkap →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 sm:p-5"
          onClick={() => setSelectedDoc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-pink-100 flex items-center justify-between bg-white">
              <div>
                <h3 className="font-bold text-sm sm:text-base text-pink-800">
                  {selectedDoc.title}
                </h3>
                <p className="text-xs text-pink-600 font-mono">
                  {selectedDoc.docNumber}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 flex items-center justify-center transition"
                aria-label="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Document Image */}
            <div className="relative w-full flex-1 min-h-[50vh] max-h-[72vh] bg-slate-100 p-3 sm:p-6 overflow-y-auto flex items-center justify-center">
              <div className="relative bg-white shadow-lg rounded-lg p-2 sm:p-4 border border-slate-200 max-w-full">
                <Image
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  width={selectedDoc.aspect === "landscape" ? 650 : 520}
                  height={selectedDoc.aspect === "landscape" ? 470 : 790}
                  className="w-auto h-auto max-h-[60vh] max-w-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 bg-white border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-pink-900/70">
                {selectedDoc.institution}
              </span>
              <button
                type="button"
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
