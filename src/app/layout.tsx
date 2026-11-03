import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "HPU - Herbal Pelangsing Ultimate",
  description:
    "Menurunkan berat badan 1-5 kg dalam 1 botol TANPA OLAHRAGA. Solusi praktis dan aman untuk mendapatkan bentuk tubuh ideal impian Anda.",
  keywords: [
    "HPU",
    "Herbal Pelangsing Ultimate",
    "pelangsing herbal",
    "diet tanpa olahraga",
    "penurun berat badan alami",
  ],
  authors: [{ name: "Herbal Pelangsing Ultimate" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} scroll-smooth`}>
      <body className="bg-pink-50 text-pink-900 antialiased font-sans relative selection:bg-pink-200 selection:text-pink-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
