"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";

export function HpuNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-pink-100/95 backdrop-blur-md border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-pink-700">
            HPU <span className="text-pink-500 font-medium text-sm">Ultimate</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-pink-800">
          <Link href="#hero" className="hover:text-pink-600 transition-colors">
            Beranda
          </Link>
          <Link href="#tentang" className="hover:text-pink-600 transition-colors">
            Tentang HPU
          </Link>
          <Link href="#legalitas" className="hover:text-pink-600 transition-colors">
            Legalitas
          </Link>
          <Link href="#manfaat" className="hover:text-pink-600 transition-colors">
            Manfaat
          </Link>
          <Link href="#testimoni" className="hover:text-pink-600 transition-colors">
            Testimoni
          </Link>
          <Link href="#aturan-minum" className="hover:text-pink-600 transition-colors">
            Aturan Minum
          </Link>
          <Link href="#kontak" className="hover:text-pink-600 transition-colors">
            Kontak
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-pink-700 hover:bg-pink-200/60 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-pink-50 border-b border-pink-200 px-6 py-4 space-y-2.5 shadow-md">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-pink-800">
            <Link
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:text-pink-600 transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="#tentang"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:text-pink-600 transition-colors"
            >
              Tentang HPU
            </Link>
            <Link
              href="#legalitas"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:text-pink-600 transition-colors"
            >
              Legalitas
            </Link>
            <Link
              href="#manfaat"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:text-pink-600 transition-colors"
            >
              Manfaat
            </Link>
            <Link
              href="#testimoni"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:text-pink-600 transition-colors"
            >
              Testimoni
            </Link>
            <Link
              href="#aturan-minum"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:text-pink-600 transition-colors"
            >
              Aturan Minum
            </Link>
            <Link
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:text-pink-600 transition-colors"
            >
              Kontak
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
