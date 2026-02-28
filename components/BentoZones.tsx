"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const zones = [
  {
    id: "pizza",
    title: "PIZZA",
    subtitle: "FATÜZELÉSŰ / OLASZ",
    link: "/etlap?cat=Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "burger",
    title: "BURGER",
    subtitle: "100% MARHA / SMASH",
    link: "/etlap?cat=Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gyros",
    title: "GYROS",
    subtitle: "EREDETI / SZAFTOS",
    link: "/etlap?cat=Gyros",
    image: "https://www.foodandwine.com/thmb/KRLVvdwjn21k5Zs4CfC5mO5y53Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gyros-FT-RECIPE1023-e892c23e0a20476ea12f07f3ec0f3fc6.jpg",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "dessert",
    title: "DESSZERT",
    subtitle: "ÉDES / BŰNÖS",
    link: "/etlap?cat=Desszert",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function BentoZones() {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-5xl md:text-8xl font-heavy text-white leading-none">
            VÁLASSZ <span className="text-outline-orange">ZÓNÁT</span>
          </h2>
          <div className="hidden md:block w-32 h-1 bg-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {zones.map((zone, i) => (
            <Link 
              key={zone.id} 
              href={zone.link}
              className={`relative group overflow-hidden border border-white/10 ${zone.className}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={zone.image} 
                  alt={zone.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-display font-bold text-primary tracking-widest text-sm border border-primary px-2 py-1">
                    0{i + 1} // {zone.subtitle}
                  </span>
                  <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0" size={32} />
                </div>

                <div>
                  <h3 className="text-5xl md:text-7xl font-heavy text-white leading-none mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {zone.title}
                  </h3>
                  <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
