"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, ChefHat, Bike, Home, Clock, Phone, Store, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const deliveryStages = [
  { id: "received", label: "RENDELÉS FELVÉVE", icon: CheckCircle2, desc: "A rendszer rögzítette a rendelésed." },
  { id: "kitchen", label: "KÉSZÍTÉS ALATT", icon: ChefHat, desc: "A séfek már dolgoznak az ételen." },
  { id: "courier", label: "FUTÁRNÁL", icon: Bike, desc: "A futár úton van feléd." },
  { id: "delivered", label: "KISZÁLLÍTVA", icon: Home, desc: "Jó étvágyat kívánunk!" },
];

const pickupStages = [
  { id: "received", label: "RENDELÉS FELVÉVE", icon: CheckCircle2, desc: "A rendszer rögzítette a rendelésed." },
  { id: "kitchen", label: "KÉSZÍTÉS ALATT", icon: ChefHat, desc: "A séfek már dolgoznak az ételen." },
  { id: "ready", label: "ÁTVEHETŐ", icon: ShoppingBag, desc: "A csomagod elkészült. Várunk az étteremben!" },
  { id: "completed", label: "ÁTVÉVE", icon: CheckCircle2, desc: "Köszönjük, hogy minket választottál!" },
];

export default function OrderTracking() {
  const { id } = useParams();
  const [currentStage, setCurrentStage] = useState(0);
  const [orderData, setOrderData] = useState<any>(null);

  // Load Order Data
  useEffect(() => {
    const data = localStorage.getItem("currentOrder");
    if (data) {
      setOrderData(JSON.parse(data));
    }
  }, []);

  // Simulate Progress
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev < 3 ? prev + 1 : prev));
    }, 8000); // Advance every 8 seconds for demo
    return () => clearInterval(timer);
  }, []);

  const stages = orderData?.deliveryMode === "pickup" ? pickupStages : deliveryStages;

  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block animate-pulse">
              /// LIVE TRACKING
            </span>
            <h1 className="text-5xl md:text-7xl font-heavy text-white mb-4">
              RENDELÉS <span className="text-outline-orange">#{id}</span>
            </h1>
            <p className="text-gray-400 font-display">
              {orderData?.deliveryMode === "pickup" ? (
                <span>Csomag elkészül: <span className="text-white font-bold">15-20 perc</span></span>
              ) : (
                <span>Becsült érkezés: <span className="text-white font-bold">25-35 perc</span></span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Timeline */}
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent animate-pulse"></div>
              
              <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/10 z-0"></div>

                {stages.map((stage, index) => {
                  const isActive = index === currentStage;
                  const isPast = index < currentStage;
                  
                  return (
                    <motion.div 
                      key={stage.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: index <= currentStage ? 1 : 0.3, x: 0 }}
                      className={`relative z-10 flex gap-6 ${isActive ? "scale-105 origin-left" : ""}`}
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                        isActive 
                          ? "bg-primary border-primary text-black shadow-[0_0_20px_rgba(255,69,0,0.5)]" 
                          : isPast 
                            ? "bg-white border-white text-black" 
                            : "bg-[#0a0a0a] border-white/20 text-gray-500"
                      }`}>
                        <stage.icon size={24} />
                      </div>
                      
                      <div>
                        <h3 className={`text-xl font-heavy mb-1 ${isActive ? "text-primary" : "text-white"}`}>
                          {stage.label}
                        </h3>
                        <p className="text-sm text-gray-400 font-body">
                          {stage.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-heavy text-white mb-6 flex items-center gap-2">
                  <Clock size={20} className="text-primary" /> RÉSZLETEK
                </h3>
                
                {orderData && (
                  <div className="space-y-4 text-sm font-display text-gray-300">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span>Vevő neve:</span>
                      <span className="text-white font-bold">{orderData.customer.name}</span>
                    </div>
                    
                    {orderData.deliveryMode === "delivery" ? (
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Szállítási cím:</span>
                        <span className="text-white font-bold text-right">{orderData.customer.address}</span>
                      </div>
                    ) : (
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span>Átvétel helye:</span>
                        <span className="text-white font-bold text-right flex items-center gap-1">
                          <Store size={14} className="text-primary" /> Tasterhood Étterem
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span>Fizetési mód:</span>
                      <span className="text-white font-bold uppercase">
                        {orderData.paymentMethod === "card" ? "Bankkártya (Fizetve)" : (orderData.deliveryMode === "pickup" ? "Helyszínen (Készpénz/Kártya)" : "Utánvét")}
                      </span>
                    </div>
                    <div className="pt-4">
                      <p className="mb-2 font-bold text-gray-500">Rendelt tételek:</p>
                      <ul className="space-y-2">
                        {orderData.items.map((item: any, i: number) => (
                          <li key={i} className="flex justify-between text-white">
                            <span>{item.title}</span>
                            <span>{item.price} Ft</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xl font-heavy text-primary">
                        <span>Összesen:</span>
                        <span>{orderData.total} Ft</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-primary p-6 rounded-2xl text-black text-center">
                <Phone className="mx-auto mb-2" />
                <h4 className="font-heavy text-xl mb-1">KÉRDÉSED VAN?</h4>
                <p className="font-bold text-lg">+36 30 123 4567</p>
              </div>
              
              <Link href="/" className="block w-full py-4 text-center border border-white/20 rounded-xl text-white font-heavy hover:bg-white hover:text-black transition-colors">
                VISSZA A FŐOLDALRA
              </Link>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
