"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
  const { toggleCart, items } = useCartStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "ÉTLAP", href: "/etlap" },
    { name: "BLOG", href: "/blog" },
    { name: "KAPCSOLAT", href: "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        
        {/* Top Bar - Minimal */}
        <div className="bg-black text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] py-2 px-4 flex justify-center md:justify-between items-center border-b border-white/5">
          <span className="hidden md:inline">Friss ízek, jó társaság.</span>
          <span className="flex items-center gap-2">
            <Phone size={10} className="text-primary" /> +36 30 123 4567
          </span>
        </div>

        {/* Main Nav */}
        <div className="bg-dark/80 backdrop-blur-xl border-b border-white/5 h-20">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-10 h-10 bg-primary text-black font-heavy text-xl flex items-center justify-center rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-300">
                TH
              </div>
              <span className="text-2xl font-heavy text-white tracking-wide">
                TASTER<span className="text-gray-500 group-hover:text-primary transition-colors">HOOD</span>
              </span>
            </Link>

            {/* Desktop Links - Elegant & Spaced */}
            <div className="hidden lg:flex items-center gap-12 font-heavy text-sm tracking-widest text-gray-400">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-white transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link 
                href="/etlap?filter=promo" 
                className="text-primary hover:text-white transition-colors relative flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                AKCIÓK
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              <button 
                onClick={toggleCart} 
                className="group relative p-2"
                aria-label="Kosár"
              >
                <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <ShoppingBag className="text-gray-300 group-hover:text-white relative z-10 transition-colors" size={22} />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-black font-bold text-[10px] flex items-center justify-center rounded-full border-2 border-dark">
                    {items.length}
                  </span>
                )}
              </button>
              
              <button 
                onClick={() => setMenuOpen(true)} 
                className="lg:hidden text-white hover:text-primary transition-colors p-2"
              >
                <Menu size={28} />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-dark flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-heavy text-2xl text-white">MENÜ</span>
              <button 
                onClick={() => setMenuOpen(false)} 
                className="p-2 border border-white/10 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setMenuOpen(false)} 
                  className="font-heavy text-5xl text-transparent text-outline hover:text-primary hover:text-outline-none transition-all duration-300"
                >
                  <span className="text-sm font-sans text-gray-600 block mb-2 tracking-widest">0{i+1}</span>
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/etlap?filter=promo"
                onClick={() => setMenuOpen(false)} 
                className="font-heavy text-5xl text-primary mt-4"
              >
                <span className="text-sm font-sans text-gray-600 block mb-2 tracking-widest">04</span>
                AKCIÓK
              </Link>
            </div>

            <div className="mt-auto border-t border-white/10 pt-8 flex justify-between items-end text-gray-500 font-sans text-sm">
              <div>
                <p className="text-white font-bold mb-1">TASTERHOOD</p>
                <p>1117 Budapest</p>
              </div>
              <p>+36 30 123 4567</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
