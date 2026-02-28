"use client";

import { useCartStore } from "@/store/cart";
import { Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const items = [
  { id: "p2", title: "Pepperoni", price: 2890, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop", badge: "BESTSELLER" },
  { id: "b2", title: "BBQ Burger", price: 3690, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop", badge: "HOT" },
  { id: "g1", title: "Gyros Tál", price: 2990, image: "https://bekesiburgerbar.hu/wp-content/uploads/2023/10/GyrosTalGorog.jpg", badge: null }, // Fixed Gyros image
  { id: "d1", title: "Nutella Boom", price: 1890, image: "https://www.nutella.com/de/sites/nutella20_de/files/2025-09/1229-boom-nutella-230-300dpi_final_0.jpg?t=1772031097", badge: "SWEET" }, // Fixed Pancake image
];

export default function TopPicks() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="py-24 bg-surface border-t border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-primary font-bold tracking-widest text-sm mb-2 block animate-pulse">/// KIEMELT AJÁNLATOK</span>
            <h2 className="text-5xl md:text-7xl font-heavy text-white leading-none">
              TOP <span className="text-outline-orange">KAJÁK</span>
            </h2>
          </div>
          <Link href="/etlap" className="group flex items-center gap-2 text-white font-bold uppercase tracking-wider hover:text-primary transition-colors">
            Összes Megtekintése 
            <span className="block w-8 h-[2px] bg-primary group-hover:w-12 transition-all"></span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-dark border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Badge */}
              {item.badge && (
                <div className="absolute top-4 left-4 z-20 bg-primary text-black font-heavy px-3 py-1 text-sm shadow-lg rotate-2 group-hover:rotate-0 transition-transform">
                  {item.badge}
                </div>
              )}

              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden w-full">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <h3 className="text-3xl font-heavy text-white mb-1 uppercase leading-none group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xl font-bold text-gray-300">{item.price} Ft</span>
                    <button 
                      onClick={() => addItem({ ...item, productId: item.id } as any)}
                      className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-lg rounded-sm"
                      aria-label="Kosárba"
                    >
                      <Plus size={20} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
