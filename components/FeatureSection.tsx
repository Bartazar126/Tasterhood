"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import HandIcon from "./HandIcon";

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  reversed?: boolean;
  color?: "orange" | "yellow" | "red";
}

export default function FeatureSection({ 
  id, 
  title, 
  subtitle, 
  description, 
  image, 
  features, 
  reversed = false,
  color = "orange" 
}: FeatureSectionProps) {
  
  const colorClasses = {
    orange: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    yellow: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    red: "text-red-500 bg-red-500/10 border-red-500/20",
  };

  return (
    <section id={id} className="py-24 md:py-32 overflow-hidden bg-neutral-900 border-t-2 border-dashed border-white/20">
      <div className="container mx-auto px-4">
        <div className={clsx(
          "flex flex-col gap-12 lg:gap-20 items-center",
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className={clsx(
              "inline-block px-6 py-2 rounded-full text-2xl font-hand font-bold transform -rotate-2 shadow-md mb-8 border-2",
              colorClasses[color]
            )}>
              {subtitle}
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-[0.8]">
              {title}
            </h2>
            
            <p className="text-2xl md:text-3xl font-hand text-neutral-300 mb-8 leading-relaxed max-w-xl">
              {description}
            </p>

            <ul className="space-y-4 mb-10 pl-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-neutral-200 font-body text-xl">
                  <div className={clsx("shrink-0 mt-1", colorClasses[color].split(" ")[0])}>
                    <HandIcon name="check" size={24} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={clsx(
              "px-8 py-3 rounded-full font-display text-4xl font-bold text-white flex items-center gap-3 transition-transform hover:scale-105 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] border-2 border-white/20",
              color === "orange" ? "bg-orange-600 hover:bg-orange-700" : 
              color === "yellow" ? "bg-yellow-600 hover:bg-yellow-700" :
              "bg-red-600 hover:bg-red-700"
            )}>
              Megkóstolom <HandIcon name="arrow" size={24} />
            </button>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: reversed ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: reversed ? 2 : -2 }}
            whileHover={{ rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative group"
          >
            {/* Paper Clip / Tape effect */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-yellow-100/20 rotate-2 z-10 backdrop-blur-sm border border-white/10 shadow-lg"></div>

            <div className="relative aspect-square md:aspect-[4/3] bg-white p-3 shadow-2xl transform transition-transform duration-500">
               {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover filter contrast-125 saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Doodle Decoration */}
            <div className={clsx(
              "absolute -bottom-10 -right-10 w-32 h-32 opacity-20 rotate-12 pointer-events-none",
              colorClasses[color].split(" ")[0]
            )}>
              <HandIcon name={title.toLowerCase().includes("pizza") ? "pizza" : title.toLowerCase().includes("gyros") ? "gyros" : "pancake"} size={120} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
