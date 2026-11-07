"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

export function HpuNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 origin-left z-50 pointer-events-none"
      />

      <header className="sticky top-0 z-40 w-full bg-pink-100/95 backdrop-blur-md border-b border-pink-200 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Logo with micro-interaction */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-xs"
            >
              <Leaf className="w-5 h-5" />
            </motion.div>
            <span className="font-bold text-xl tracking-tight text-pink-700">
              HPU <span className="text-pink-500 font-medium text-sm">Ultimate</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-pink-800">
            {[
              { href: "#hero", label: "Beranda" },
              { href: "#tentang", label: "Tentang HPU" },
              { href: "#legalitas", label: "Legalitas" },
              { href: "#manfaat", label: "Manfaat" },
              { href: "#testimoni", label: "Testimoni" },
              { href: "#aturan-minum", label: "Aturan Minum" },
              { href: "#kontak", label: "Kontak" },
            ].map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  className="relative py-1 hover:text-pink-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-pink-700 hover:bg-pink-200/60 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Drawer with smooth slide & fade animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-pink-50 border-b border-pink-200 px-6 py-4 shadow-md"
            >
              <nav className="flex flex-col space-y-2 text-sm font-semibold text-pink-800">
                {[
                  { href: "#hero", label: "Beranda" },
                  { href: "#tentang", label: "Tentang HPU" },
                  { href: "#legalitas", label: "Legalitas" },
                  { href: "#manfaat", label: "Manfaat" },
                  { href: "#testimoni", label: "Testimoni" },
                  { href: "#aturan-minum", label: "Aturan Minum" },
                  { href: "#kontak", label: "Kontak" },
                ].map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-1.5 hover:text-pink-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
