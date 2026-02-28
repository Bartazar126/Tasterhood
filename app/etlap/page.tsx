"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Filter, Flame, Leaf, Search } from "lucide-react";
import { useCartStore } from "@/store/cart";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const products = [
  // PIZZA
  { id: "p1", title: "Margherita", price: 2490, category: "Pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop", desc: "San Marzano paradicsom, mozzarella, bazsalikom.", spicy: false, veg: true },
  { id: "p2", title: "Pepperoni", price: 2890, category: "Pizza", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop", desc: "Paradicsom, mozzarella, csípős szalámi.", spicy: true, veg: false },
  { id: "p3", title: "Hawaii", price: 2690, category: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", desc: "Paradicsom, mozzarella, sonka, ananász.", spicy: false, veg: false },
  { id: "p4", title: "Négysajtos", price: 2990, category: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop", desc: "Mozzarella, gorgonzola, parmezán, ementáli.", spicy: false, veg: true },
  
  // BURGER
  { id: "b1", title: "Classic Burger", price: 3290, category: "Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop", desc: "100% marhahús, cheddar, saláta, paradicsom, házi szósz.", spicy: false, veg: false },
  { id: "b2", title: "BBQ Bacon", price: 3690, category: "Burger", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop", desc: "Marhahús, bacon, cheddar, hagymalekvár, BBQ szósz.", spicy: false, veg: false },
  { id: "b3", title: "Jalapeno Burger", price: 3490, category: "Burger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop", desc: "Marhahús, jalapeno paprika, csípős majonéz.", spicy: true, veg: false },
  
  // GYROS
  { id: "g1", title: "Gyros Tál", price: 2990, category: "Gyros", image: "https://bekesiburgerbar.hu/wp-content/uploads/2023/10/GyrosTalGorog.jpg", desc: "Csirkehús, hasábburgonya, friss saláta, tzatziki, pita.", spicy: false, veg: false },
  { id: "g3", title: "Gyros", price: 1890, category: "Gyros", image: "https://www.foodandwine.com/thmb/KRLVvdwjn21k5Zs4CfC5mO5y53Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gyros-FT-RECIPE1023-e892c23e0a20476ea12f07f3ec0f3fc6.jpg", desc: "Klasszikus gyros pitában, sok zöldséggel.", spicy: false, veg: false },
  
  // DESSZERT
  { id: "d1", title: "Nutella Boom", price: 1890, category: "Desszert", image: "https://www.nutella.com/de/sites/nutella20_de/files/2025-09/1229-boom-nutella-230-300dpi_final_0.jpg?t=1772031097", desc: "Óriáspalacsinta Nutellával és banánnal töltve.", spicy: false, veg: true },
  { id: "d2", title: "Túrós Palacsinta", price: 1690, category: "Desszert", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop", desc: "Házi túrókrémmel, vanília öntettel.", spicy: false, veg: true },
];

const categories = ["Mind", "Pizza", "Burger", "Gyros", "Desszert"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Mind");
  const [searchQuery, setSearchQuery] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "Mind" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-dark pb-20">
      <Navbar />
      <CartDrawer />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-surface border-b border-white/5">
        <div className="container mx-auto">
          <h1 className="text-6xl md:text-9xl font-heavy text-white mb-4 leading-none">
            TELJES <span className="text-primary">ÉTLAP</span>
          </h1>
        </div>
      </section>

      {/* Filters & Search - Sticky */}
      <div className="sticky top-20 z-30 bg-dark/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-bold uppercase tracking-wider text-sm transition-all border ${
                  activeCategory === cat 
                    ? "bg-primary text-black border-primary" 
                    : "bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="KERESÉS..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-white/10 py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary transition-colors font-display uppercase tracking-wider"
            />
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={product.id}
                className="group bg-surface border border-white/5 hover:border-primary/50 transition-colors"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {product.spicy && (
                      <span className="bg-red-600 text-white p-1" title="Csípős">
                        <Flame size={14} />
                      </span>
                    )}
                    {product.veg && (
                      <span className="bg-green-600 text-white p-1" title="Vegetáriánus">
                        <Leaf size={14} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-[200px]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-heavy text-white leading-none uppercase group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1 font-body">
                    {product.desc}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xl font-bold text-white">{product.price} Ft</span>
                    <button 
                      onClick={() => addItem({ ...product, productId: product.id })}
                      className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Filter size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-xl font-heavy">NINCS TALÁLAT.</p>
            <button 
              onClick={() => { setActiveCategory("Mind"); setSearchQuery(""); }}
              className="mt-4 text-primary hover:underline uppercase tracking-widest font-bold"
            >
              Szűrők törlése
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
