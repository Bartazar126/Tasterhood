"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BrutalHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section className="relative h-screen min-h-[800px] flex flex-col justify-center overflow-hidden bg-dark">
      
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,69,0,0.15),transparent_70%)] z-0"></div>
      
      {/* Huge Typography Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-10 pointer-events-none select-none">
        <h1 className="text-[18vw] leading-[0.8] text-white/5 font-heavy whitespace-nowrap">
          STREET FOOD
        </h1>
        <h1 className="text-[18vw] leading-[0.8] text-outline-orange opacity-20 font-heavy whitespace-nowrap ml-20">
          REDEFINED
        </h1>
      </div>

      <div className="container relative z-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary text-black font-bold px-3 py-1 text-sm uppercase tracking-widest">
                Since 2024
              </span>
              <span className="text-primary font-display uppercase tracking-widest text-sm animate-pulse">
                /// Now Open in BP
              </span>
            </div>

            <h2 className="text-7xl md:text-9xl font-heavy text-white mb-6 leading-none mix-blend-difference">
              TASTER<br/>
              <span className="text-primary">HOOD.</span>
            </h2>

            <p className="text-xl text-gray-400 font-display max-w-md mb-10 border-l-2 border-primary pl-6">
              Nem kérünk elnézést. Hangosak vagyunk, merészek vagyunk, és a mi kajánk a legjobb a városban.
            </p>

            <Link 
              href="/etlap"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-heavy text-2xl uppercase tracking-wider hover:bg-primary transition-colors"
            >
              Rendelés Most
              <ArrowDownRight className="group-hover:rotate-45 transition-transform" size={32} />
              <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-primary -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
            </Link>
          </motion.div>

          {/* Floating Image */}
          <motion.div 
            style={{ y, rotate }}
            className="relative hidden lg:block w-full max-w-[600px] aspect-square mx-auto"
          >
            {/* Circle Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite] z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse] z-0"></div>
            
            <Image 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop" 
              alt="Massive Burger" 
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(255,69,0,0.3)] animate-float"
              priority
            />
          </motion.div>

        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 w-full bg-primary text-black py-3 overflow-hidden border-t-4 border-black font-heavy text-2xl uppercase tracking-widest">
        <div className="animate-marquee whitespace-nowrap">
          PIZZA • BURGER • GYROS • FRESH • HOT • TASTY • NO COMPROMISE • PURE FLAVOR • PIZZA • BURGER • GYROS • FRESH • HOT • TASTY •
        </div>
      </div>

    </section>
  );
}
