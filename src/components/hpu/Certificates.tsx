"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ZoomIn, 
  X, 
  ExternalLink,
  FileCheck
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
  aspect: "portrait" | "landscape";
}

const certificateList: CertificateDoc[] = [
  {
    id: "halal-mui",
    title: "Ketetapan Halal MUI",
    institution: "Majelis Ulama Indonesia (MUI)",
    docNumber: "No. LPPOM-LPPOM-0013023793012",
    validity: "Berlaku s/d 30 Januari 2028",
    badge: "HALAL RESMI",
    description: "Ketetapan Halal resmi dari MUI berdasarkan hasil audit dan pengujian Lembaga Pemeriksa Halal (LPH) LPPOM MUI.",
    image: "/certificates/sertifikat-halal-mui.jpg",
    colorScheme: "emerald",
    aspect: "portrait",
  },
  {
    id: "bpom-ri",
    title: "Izin Edar Resmi BPOM",
    institution: "Badan Pengawas Obat dan Makanan (BPOM RI)",
    docNumber: "Direktorat Registrasi Obat Tradisional (POM TR253007261)",
    validity: "Resmi Terdaftar & Teruji Aman",
    badge: "BPOM RI",
    description: "Salinan Surat Keputusan Izin Edar resmi dari Direktorat Registrasi Obat Tradisional, Suplemen Kesehatan dan Kosmetik BPOM RI.",
    image: "/certificates/izin-resmi-bpom.jpg",
    colorScheme: "blue",
    aspect: "landscape",
  },
];

export function Certificates() {
  const [selectedDoc, setSelectedDoc] = useState<CertificateDoc | null>(null);

  return (
    <section id="legalitas" className="py-14 sm:py-18 px-4 sm:px-6 bg-gradient-to-b from-pink-50/50 via-white to-pink-50/30 border-b border-pink-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-pink-600 uppercase bg-pink-100/60 px-3 py-1 rounded-full border border-pink-200">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
            Legalitas &amp; Sertifikasi Resmi
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-800 tracking-tight mt-2.5">
            Dokumen Resmi Keaslian Produk
          </h2>
          <p className="text-pink-900/80 text-xs sm:text-sm mt-2 leading-relaxed">
            HPU telah mengantongi izin edar resmi dari <strong>BPOM RI</strong> dan ketetapan <strong>Halal MUI</strong>. 
            Konsumsi dengan rasa tenang dan percaya diri.
          </p>
        </div>

        {/* Certificate Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificateList.map((doc) => {
            const isEmerald = doc.colorScheme === "emerald";
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-5 border border-pink-200/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge Header */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                        isEmerald
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {doc.badge}
                    </span>
                    <span className="text-[11px] text-pink-700 font-semibold flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5 text-pink-500" />
                      Dokumen Asli
                    </span>
                  </div>

                  {/* Document Preview Box (Clean Paper Canvas) */}
                  <div
                    onClick={() => setSelectedDoc(doc)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedDoc(doc);
                      }
                    }}
                    className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-100/80 border border-slate-200/90 cursor-pointer shadow-inner mb-4 flex items-center justify-center p-3 group transition-colors hover:bg-pink-50/40"
                    title={`Klik untuk memperbesar ${doc.title}`}
                  >
                    {/* Paper Sheet Shadow Frame */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative max-w-full max-h-full bg-white rounded-lg shadow-md ring-1 ring-slate-200 overflow-hidden flex items-center justify-center group-hover:shadow-lg group-hover:scale-[1.02] transition-all duration-200">
                        <Image
                          src={doc.image}
                          alt={doc.title}
                          width={doc.aspect === "landscape" ? 520 : 360}
                          height={doc.aspect === "landscape" ? 375 : 540}
                          className="w-auto h-auto max-h-64 sm:max-h-72 max-w-full object-contain"
                          sizes="(max-width: 768px) 100vw, 420px"
                        />
                      </div>
                    </div>

                    {/* Simple Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-pink-900/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs font-bold text-white bg-pink-600/90 hover:bg-pink-600 px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-transform group-hover:scale-105">
                        <ZoomIn className="w-4 h-4" />
                        Klik untuk Membaca Surat
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-pink-900 leading-snug mb-1">
                    {doc.title}
                  </h3>
                  <p className="text-xs font-semibold text-pink-600 font-mono mb-2">
                    {doc.docNumber}
                  </p>
                  <p className="text-xs text-pink-950/80 leading-relaxed mb-4">
                    {doc.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-pink-100 flex items-center justify-between">
                  <span className="text-[11px] text-pink-800 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {doc.validity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedDoc(doc)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 px-3 py-1.5 rounded-full transition"
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

      {/* Lightbox Modal (Clean Document Sheet Viewer) */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
          onClick={() => setSelectedDoc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative border border-pink-100 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 py-3.5 sm:px-5 sm:py-4 border-b border-pink-100 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    selectedDoc.colorScheme === "emerald"
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      : "bg-blue-50 text-blue-600 border border-blue-200"
                  }`}
                >
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-pink-900 leading-snug">
                    {selectedDoc.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-pink-600 font-mono">
                    {selectedDoc.docNumber}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="w-8 h-8 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 flex items-center justify-center transition"
                aria-label="Tutup pratinjau"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Document Viewer Canvas (Soft Paper Gray Background, NOT Harsh Black) */}
            <div className="relative w-full flex-1 min-h-[50vh] max-h-[70vh] bg-slate-100/90 p-3 sm:p-6 overflow-y-auto flex items-center justify-center">
              <div className="relative bg-white shadow-xl rounded-xl p-2 sm:p-4 border border-slate-200 max-w-full flex items-center justify-center">
                <Image
                  src={selectedDoc.image}
                  alt={selectedDoc.title}
                  width={selectedDoc.aspect === "landscape" ? 650 : 520}
                  height={selectedDoc.aspect === "landscape" ? 470 : 790}
                  className="w-auto h-auto max-h-[58vh] max-w-full object-contain rounded"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-white border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{selectedDoc.institution}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-semibold text-white bg-pink-600 hover:bg-pink-700 rounded-full transition shadow-sm"
              >
                Tutup Pratinjau
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
