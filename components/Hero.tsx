"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60 grayscale-[80%] contrast-125"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2600&auto=format&fit=crop')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-0"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15vw] leading-[0.8] font-display font-bold tracking-tighter mix-blend-difference mb-8"
        >
          TASTER<br/>HOOD<span className="text-orange-600">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm uppercase tracking-[0.2em] font-bold"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
            Open: 11:00 - 22:00
          </span>
          <span className="hidden md:block text-neutral-600">|</span>
          <span>Budapest Street Food</span>
          <span className="hidden md:block text-neutral-600">|</span>
          <span>Est. 2024</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <a 
            href="#menu" 
            className="inline-block px-12 py-4 bg-white text-black font-display text-xl uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-colors duration-300"
          >
            Order Now
          </a>
        </motion.div>

      </div>
      
      {/* Marquee Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap py-4 bg-orange-600 text-black font-display text-4xl uppercase font-bold tracking-tighter z-20">
        <div className="animate-marquee inline-block">
          PIZZA • BURGER • GYROS • FRESH • FAST • TASTY • PIZZA • BURGER • GYROS • FRESH • FAST • TASTY • 
        </div>
        <div className="animate-marquee inline-block absolute top-4 left-0">
          PIZZA • BURGER • GYROS • FRESH • FAST • TASTY • PIZZA • BURGER • GYROS • FRESH • FAST • TASTY • 
        </div>
      </div>
    </section>
  );
}
