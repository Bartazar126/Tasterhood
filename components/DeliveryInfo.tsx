"use client";

import { motion } from "framer-motion";
import HandIcon from "./HandIcon";

export default function DeliveryInfo() {
  return (
    <section id="delivery" className="py-24 bg-neutral-900 border-t-4 border-dashed border-white/20 relative">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-display font-bold text-white mb-6 -rotate-2"
          >
            HOGYAN <span className="text-orange-500">KÉRED?</span>
          </motion.h2>
          <p className="text-neutral-300 font-hand text-3xl max-w-2xl mx-auto rotate-1">
            Válaszd a neked legkényelmesebb módot!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Direct Order */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="md:col-span-1 bg-orange-600 rounded-3xl p-1 relative overflow-hidden group shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]"
          >
            <div className="h-full bg-neutral-900 rounded-[20px] p-8 flex flex-col justify-between relative z-10 border-2 border-orange-500/50 border-dashed">
              <div>
                <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500 mb-6 mx-auto animate-pulse">
                  <HandIcon name="phone" size={40} />
                </div>
                <h3 className="text-5xl font-display font-bold text-white mb-2 text-center tracking-wide">SAJÁT FUTÁR</h3>
                <p className="text-neutral-400 font-hand text-2xl text-center mb-6">
                  A leggyorsabb és legolcsóbb!
                </p>
                <ul className="space-y-3 mb-8 text-neutral-300 font-body text-lg pl-4 list-disc marker:text-orange-500">
                  <li>Ingyenes szállítás*</li>
                  <li>Ajándék üdítő</li>
                  <li>Készpénz / Kártya</li>
                </ul>
              </div>
              <a href="tel:+36301234567" className="w-full py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-display text-4xl font-bold text-center transition-colors shadow-lg transform hover:-translate-y-1">
                HÍVÁS MOST
              </a>
            </div>
          </motion.div>

          {/* Foodora */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="bg-neutral-800 rounded-3xl p-8 border-4 border-pink-500/20 hover:border-pink-500 border-sketch flex flex-col justify-between group"
          >
            <div>
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 mb-6 mx-auto group-hover:bg-pink-500 group-hover:text-white transition-all">
                <HandIcon name="bike" size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2 text-center">Foodora</h3>
              <p className="text-neutral-400 font-hand text-xl text-center mb-6">
                Rendelj kényelmesen az appon!
              </p>
            </div>
            <button className="w-full py-3 bg-pink-600/10 hover:bg-pink-600 text-pink-500 hover:text-white rounded-xl font-display text-3xl font-bold transition-all border-2 border-pink-600/20">
              Megnyitás
            </button>
          </motion.div>

          {/* Wolt */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="bg-neutral-800 rounded-3xl p-8 border-4 border-blue-500/20 hover:border-blue-500 border-sketch flex flex-col justify-between group"
          >
            <div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 mb-6 mx-auto group-hover:bg-blue-500 group-hover:text-white transition-all">
                <HandIcon name="bike" size={32} />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2 text-center">Wolt</h3>
              <p className="text-neutral-400 font-hand text-xl text-center mb-6">
                Kövesd a futárt a térképen!
              </p>
            </div>
            <button className="w-full py-3 bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white rounded-xl font-display text-3xl font-bold transition-all border-2 border-blue-500/20">
              Megnyitás
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
