"use client";

import { motion } from "framer-motion";
import { Instagram, Camera } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561758033-d8f69b87d0b8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
];

export default function InstaFeed() {
  return (
    <section className="py-24 md:py-32 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <div className="inline-flex items-center gap-2 text-orange-400 mb-4">
          <Instagram size={20} />
          <span className="font-bold tracking-widest uppercase text-sm">@tasterhood_bp</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Közösségünk Kedvencei
        </h2>
        <p className="text-xl text-stone-400 max-w-2xl mx-auto font-light">
          Oszd meg velünk az élményt! Használd a <span className="text-white font-bold">#tasterhood</span> hashtaget.
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {photos.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={src} 
                alt="Instagram Photo" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
