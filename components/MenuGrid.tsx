"use client";

import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cart";

const products = [
  {
    id: "pizza-margherita",
    title: "Margherita",
    price: 2490,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    category: "Pizza"
  },
  {
    id: "pizza-pepperoni",
    title: "Pepperoni",
    price: 2890,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    category: "Pizza"
  },
  {
    id: "burger-classic",
    title: "Classic Burger",
    price: 3290,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    category: "Burger"
  },
  {
    id: "burger-bbq",
    title: "BBQ Bacon",
    price: 3690,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
    category: "Burger"
  },
  {
    id: "gyros-plate",
    title: "Gyros Tál",
    price: 2990,
    image: "https://images.unsplash.com/photo-1634833215982-273523558117?q=80&w=800&auto=format&fit=crop",
    category: "Gyros"
  },
  {
    id: "pancake-choco",
    title: "Nutella Boom",
    price: 1890,
    image: "https://images.unsplash.com/photo-1504113882835-1a7fa067bedf?q=80&w=800&auto=format&fit=crop",
    category: "Dessert"
  },
];

export default function MenuGrid() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex items-end justify-between mb-12 border-b border-black pb-4">
          <h2 className="text-6xl md:text-8xl font-display font-bold text-black tracking-tight leading-none">
            MENU <span className="text-orange-600">.</span>
          </h2>
          <div className="hidden md:flex gap-4 font-display text-xl uppercase tracking-widest text-neutral-400">
            <span className="text-black underline decoration-2 decoration-orange-600 underline-offset-4">All</span>
            <span>Pizza</span>
            <span>Burger</span>
            <span>Gyros</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button 
                  onClick={() => addItem({ ...product, productId: product.id })}
                  className="absolute bottom-0 right-0 w-16 h-16 bg-white hover:bg-black text-black hover:text-white flex items-center justify-center transition-colors border-t border-l border-neutral-100 z-10"
                >
                  <Plus size={32} strokeWidth={1.5} />
                </button>
              </div>

              {/* Info */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1 block">{product.category}</span>
                  <h3 className="text-3xl font-display font-bold uppercase leading-none mb-2 group-hover:text-orange-600 transition-colors">
                    {product.title}
                  </h3>
                </div>
                <span className="text-2xl font-display font-bold text-black">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
