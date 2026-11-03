import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "HPU - Herbal Pelangsing Ultimate",
  description: "Menurunkan berat badan 1-5 kg dalam 1 botol TANPA OLAHRAGA.",
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  mainNav: [
    { title: "Beranda", href: "#hero" },
    { title: "Manfaat", href: "#manfaat" },
    { title: "Aturan Minum", href: "#aturan-minum" },
    { title: "Kontak", href: "#kontak" },
  ],
};

export const hpuConfig = {
  name: "HPU - Herbal Pelangsing Ultimate",
  shortName: "HPU Ultimate",
  tagline: "Menurunkan berat badan 1-5 kg dalam 1 botol TANPA OLAHRAGA.",
  description: "Solusi praktis dan aman untuk mendapatkan bentuk tubuh ideal impian Anda.",
  contact: {
    phone: "+62 838-5178-0320",
    whatsappNumber: "6283851780320",
    whatsappMessage: "Halo Admin, saya tertarik untuk memesan HPU (Herbal Pelangsing Ultimate).",
    whatsappUrl: "https://wa.me/6283851780320?text=Halo%20Admin%2C%20saya%20tertarik%20untuk%20memesan%20HPU%20(Herbal%20Pelangsing%20Ultimate).",
    facebookName: "Widya Giono",
    facebookUrl: "https://facebook.com",
    shopeeName: "WG shop herbal kosmetik",
    shopeeUrl: "https://id.shp.ee/mP7GyGe3",
  },
  benefits: [
    "Mempercepat Pembakaran Lemak",
    "Menekan nafsu makan",
    "Membantu mengeluarkan toksin",
    "Menghalangi Penyerapan Lemak",
    "Bebas Diare",
    "Membuat Miss V keset & Rapat",
    "Melancarkan Kandungan",
  ],
  rules: [
    {
      title: "Untuk Pemula",
      dose: "1",
      unit: "Kapsul / Hari",
      note: "(Diminum 30 menit sebelum makan pagi)",
      type: "beginner",
    },
    {
      title: "Ibu Menyusui",
      dose: "1",
      unit: "Kapsul / Hari",
      note: "(Diminum setelah makan pagi)",
      type: "nursing",
    },
  ],
  warning: {
    title: "PANTANGAN KHUSUS",
    content: "Selama konsumsi HPU, dilarang keras mengonsumsi: Es, Kopi, Soda, Durian, Air Kelapa, serta Makanan & Minuman Manis.",
  },
};
