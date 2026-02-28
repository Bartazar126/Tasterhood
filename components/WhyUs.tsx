"use client";

import { motion } from "framer-motion";
import HandIcon, { IconName } from "./HandIcon";

const features = [
  {
    icon: "pizza",
    title: "Minőségi Alapanyagok",
    desc: "Csak friss, válogatott összetevőkből dolgozunk. A tésztánk saját recept alapján, helyben készül minden reggel."
  },
  {
    icon: "burger",
    title: "Szenvedélyes Konyha",
    desc: "Nem futószalagon gyártunk. Minden pizza és gyros mögött ott van a séfünk szakértelme és odafigyelése."
  },
  {
    icon: "bike",
    title: "Gyors Kiszállítás",
    desc: "Tudjuk, hogy éhes vagy. Futárjaink a lehető legrövidebb úton juttatják el hozzád a forró ételt."
  },
  {
    icon: "menu",
    title: "Egyedi Ízvilág",
    desc: "Kísérletező kedvünk határtalan. Kóstold meg különleges szószainkat és extrém feltét kombinációinkat!"
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-neutral-900 border-t-2 border-dashed border-white/20 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-400 font-hand font-bold text-3xl mb-2 block rotate-2">
            ★ A Tasterhood Filozófia ★
          </span>
          <h2 className="text-7xl md:text-9xl font-display font-bold text-white mb-6 leading-[0.8] tracking-wide">
            NEM CSAK EGY <br/> <span className="text-orange-500 decoration-wavy underline decoration-white decoration-4">GYORSÉTTEREM</span>
          </h2>
          <p className="text-neutral-300 text-2xl font-hand leading-relaxed max-w-2xl mx-auto">
            Hiszünk abban, hogy a gyors étel is lehet prémium minőségű. 
            Nálunk a gyorsaság nem megy a minőség rovására.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: (i % 2 === 0 ? -1 : 1) }}
              whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -1 : 1) }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border-2 border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all group shadow-lg border-sketch"
            >
              <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                <HandIcon name={item.icon as IconName} size={48} />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-3 tracking-wide">{item.title}</h3>
              <p className="text-neutral-300 font-hand text-xl leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
