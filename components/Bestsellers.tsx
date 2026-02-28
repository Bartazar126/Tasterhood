"use client";

import { useCartStore } from "@/store/cart";
import { Plus } from "lucide-react";
import Link from "next/link";

const topItems = [
  { id: "p2", title: "Pepperoni Pizza", price: 2890, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop", category: "Pizza" },
  { id: "b2", title: "BBQ Bacon Burger", price: 3690, image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop", category: "Burger" },
  { id: "g1", title: "Gyros Tál", price: 2990, image: "https://images.unsplash.com/photo-1634833215982-273523558117?q=80&w=600&auto=format&fit=crop", category: "Gyros" },
  { id: "d1", title: "Nutella Boom", price: 1890, image: "https://images.unsplash.com/photo-1504113882835-1a7fa067bedf?q=80&w=600&auto=format&fit=crop", category: "Dessert" },
];

export default function Bestsellers() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-4xl font-black text-stone-900 uppercase tracking-tighter">
            Közönség Kedvencek
          </h2>
          <Link href="/etlap" className="text-orange-600 font-bold hover:underline">
            Összes Megtekintése →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
              <div className="relative aspect-[4/3] overflow-hidden">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button 
                  onClick={() => addItem({ ...item, productId: item.id })}
                  className="absolute bottom-3 right-3 w-10 h-10 bg-white text-stone-900 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors z-10"
                >
                  <Plus size={20} />
                </button>
              </div>
              <div className="p-4">
                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block mb-1">{item.category}</span>
                <h3 className="text-xl font-bold text-stone-900 leading-tight mb-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <span className="text-lg font-black text-stone-900 bg-stone-100 px-2 py-1 rounded">
                  {item.price} Ft
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
