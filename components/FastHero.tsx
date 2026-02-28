"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "SZAFTOS BURGER",
    subtitle: "Dupla hús, dupla élvezet.",
    bg: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "GYROS TÁL",
    subtitle: "Roppanós krumplival.",
    bg: "bg-yellow-500",
    image: "https://images.unsplash.com/photo-1634833215982-273523558117?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "SAJTOS PIZZA",
    subtitle: "Ahogy szereted.",
    bg: "bg-red-600",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function FastHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-stone-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={slides[current].image} 
            alt={slides[current].title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-20 h-full flex items-center justify-center px-4 text-center">
        <div>
          <motion.div
            key={`text-${current}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`inline-block px-4 py-1 mb-4 text-sm font-bold uppercase tracking-widest text-white ${slides[current].bg} rounded-full`}>
              {slides[current].subtitle}
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 drop-shadow-lg leading-none tracking-tighter">
              {slides[current].title}
            </h1>
            
            <Link 
              href="/etlap" 
              className={`inline-flex items-center gap-3 px-10 py-5 text-xl font-bold uppercase tracking-wide text-white rounded-full transition-transform hover:scale-105 shadow-xl ${slides[current].bg}`}
            >
              Rendelés Most <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
