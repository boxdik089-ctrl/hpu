import { HpuNavbar } from "@/components/hpu/Navbar";
import { Hero } from "@/components/hpu/Hero";
import { AboutProduct } from "@/components/hpu/AboutProduct";
import { Certificates } from "@/components/hpu/Certificates";
import { Benefits } from "@/components/hpu/Benefits";
import { Testimonials } from "@/components/hpu/Testimonials";
import { Dosage } from "@/components/hpu/Dosage";
import { HpuFooter } from "@/components/hpu/Footer";
import { FloatingWhatsApp } from "@/components/hpu/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50 text-pink-900 font-sans">
      {/* 1. Header Navigation */}
      <HpuNavbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Penjelasan & Deskripsi Produk HPU */}
        <AboutProduct />

        {/* 4. Fitur Bukti Dokumen Surat Izin BPOM & Sertifikat Halal MUI */}
        <Certificates />

        {/* 5. Manfaat Section */}
        <Benefits />

        {/* 6. Foto Testimoni Section */}
        <Testimonials />

        {/* 7. Aturan Minum & Dosis Section */}
        <Dosage />
      </main>

      {/* 8. Footer Section */}
      <HpuFooter />

      {/* 9. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
