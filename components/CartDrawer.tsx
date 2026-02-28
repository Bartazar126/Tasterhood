"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, ArrowRight, MapPin, User, Phone, CheckCircle, ExternalLink, Bike, CreditCard, Banknote, Store } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, total, clearCart } = useCartStore();
  const [step, setStep] = useState<"cart" | "platform" | "checkout">("cart");
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
  const [deliveryMode, setDeliveryMode] = useState<"delivery" | "pickup">("delivery");
  const router = useRouter();

  const handleOrderSubmit = () => {
    const orderId = "TH-" + Math.floor(1000 + Math.random() * 9000);
    
    const orderData = {
      id: orderId,
      items,
      total: total(),
      customer: {
        ...form,
        address: deliveryMode === "pickup" ? "Személyes Átvétel (1117 Bp, Példa u. 12.)" : form.address
      },
      paymentMethod,
      deliveryMode,
      status: "received",
      timestamp: Date.now()
    };
    localStorage.setItem("currentOrder", JSON.stringify(orderData));

    toggleCart();
    
    if (paymentMethod === "card") {
      router.push(`/fizetes?orderId=${orderId}`);
    } else {
      router.push(`/rendeles/${orderId}`);
      clearCart();
    }
    
    setTimeout(() => {
      setStep("cart");
      setForm({ name: "", phone: "", address: "", note: "" });
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#0a0a0a] z-[70] shadow-2xl flex flex-col border-l border-white/10"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0a0a0a]">
              <h2 className="text-2xl font-heavy text-white flex items-center gap-2">
                {step === "cart" && "KOSÁR"}
                {step === "platform" && "ÁTVÉTEL MÓDJA"}
                {step === "checkout" && "ADATOK"}
                {items.length > 0 && step === "cart" && (
                  <span className="bg-primary text-black text-xs px-2 py-1 font-bold rounded-full">{items.length}</span>
                )}
              </h2>
              <button onClick={toggleCart} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0a0a0a]">
              
              {/* --- STEP 1: CART ITEMS --- */}
              {step === "cart" && (
                items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <ShoppingBag size={64} strokeWidth={1} className="mb-4 opacity-50" />
                    <p className="text-xl font-heavy">ÜRES A KOSARAD</p>
                    <button onClick={toggleCart} className="mt-4 text-primary hover:text-white transition-colors underline font-bold tracking-widest uppercase text-sm">
                      Vásárlás folytatása
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div 
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={item.id} 
                        className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors group"
                      >
                        <div className="w-20 h-20 bg-gray-800 rounded-lg overflow-hidden shrink-0 relative">
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-heavy text-white text-lg leading-tight uppercase tracking-wide">{item.title}</h3>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                          <p className="font-bold text-primary">{item.price} Ft</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )
              )}

              {/* --- STEP 2: PLATFORM / DELIVERY MODE SELECTION --- */}
              {step === "platform" && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-heavy text-white mb-2">HOGYAN KÉRED?</h3>
                    <p className="text-gray-400 font-display text-sm">Válassz átvételi módot.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {/* Delivery Button */}
                    <button 
                      onClick={() => { setDeliveryMode("delivery"); setStep("checkout"); }}
                      className="w-full p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-primary hover:text-black hover:border-primary transition-all text-left group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heavy text-xl uppercase">Házhozszállítás</span>
                        <Bike className="text-primary group-hover:text-black transition-colors" />
                      </div>
                      <p className="text-sm font-bold opacity-70">Futárunk viszi ki neked.</p>
                    </button>

                    {/* Pickup Button */}
                    <button 
                      onClick={() => { setDeliveryMode("pickup"); setStep("checkout"); }}
                      className="w-full p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-primary hover:text-black hover:border-primary transition-all text-left group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heavy text-xl uppercase">Személyes Átvétel</span>
                        <Store className="text-primary group-hover:text-black transition-colors" />
                      </div>
                      <p className="text-sm font-bold opacity-70">Gyere be érte az étterembe.</p>
                    </button>
                  </div>

                  <div className="relative flex py-4 items-center">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-xs uppercase tracking-widest font-bold">Vagy partnereink</span>
                    <div className="flex-grow border-t border-white/10"></div>
                  </div>

                  {/* Partners */}
                  <div className="grid grid-cols-2 gap-4">
                    <a href="https://wolt.com" target="_blank" className="p-4 bg-[#00c2e8] text-white rounded-xl hover:opacity-90 text-center font-heavy uppercase tracking-wider text-sm flex flex-col items-center justify-center gap-2">
                      <ExternalLink size={16} /> Wolt
                    </a>
                    <a href="https://foodora.hu" target="_blank" className="p-4 bg-[#d70f64] text-white rounded-xl hover:opacity-90 text-center font-heavy uppercase tracking-wider text-sm flex flex-col items-center justify-center gap-2">
                      <ExternalLink size={16} /> Foodora
                    </a>
                  </div>
                </div>
              )}

              {/* --- STEP 3: CHECKOUT FORM --- */}
              {step === "checkout" && (
                <div className="space-y-6">
                  {/* Info Banner */}
                  <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl text-primary text-sm flex gap-3 items-center">
                    {deliveryMode === "delivery" ? <Bike size={20} /> : <Store size={20} />}
                    <p className="font-bold uppercase tracking-wide">
                      {deliveryMode === "delivery" ? "Házhozszállítás választva" : "Személyes átvétel választva"}
                    </p>
                  </div>

                  <div className="space-y-4 font-display">
                    <div>
                      <label className="block text-gray-400 text-xs uppercase font-bold mb-2 ml-1">Név</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                          type="text" 
                          value={form.name}
                          onChange={(e) => setForm({...form, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                          placeholder="Kovács János"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs uppercase font-bold mb-2 ml-1">Telefonszám</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                          type="tel" 
                          value={form.phone}
                          onChange={(e) => setForm({...form, phone: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                          placeholder="+36 30 123 4567"
                        />
                      </div>
                    </div>
                    
                    {/* Address Field - Only for Delivery */}
                    {deliveryMode === "delivery" && (
                      <div>
                        <label className="block text-gray-400 text-xs uppercase font-bold mb-2 ml-1">Cím</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                          <input 
                            type="text" 
                            value={form.address}
                            onChange={(e) => setForm({...form, address: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="1117 Budapest, Példa u. 12."
                          />
                        </div>
                      </div>
                    )}

                    {/* Restaurant Info - Only for Pickup */}
                    {deliveryMode === "pickup" && (
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <label className="block text-gray-400 text-xs uppercase font-bold mb-2">Átvételi Pont</label>
                        <div className="flex items-start gap-3">
                          <MapPin className="text-primary mt-1" size={20} />
                          <div>
                            <p className="text-white font-bold">TASTERHOOD ÉTTEREM</p>
                            <p className="text-gray-400 text-sm">1117 Budapest, Példa utca 12.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-400 text-xs uppercase font-bold mb-2 ml-1">Megjegyzés (Opcionális)</label>
                      <textarea 
                        value={form.note}
                        onChange={(e) => setForm({...form, note: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors min-h-[80px]"
                        placeholder={deliveryMode === "delivery" ? "Pl: Kapucsengő 12..." : "Pl: 18:00-ra megyek érte..."}
                      />
                    </div>
                  </div>

                  {/* Payment Selection */}
                  <div className="pt-4 border-t border-white/10">
                    <label className="block text-gray-400 text-xs uppercase font-bold mb-4 ml-1">Fizetési Mód</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setPaymentMethod("card")}
                        className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                          paymentMethod === "card" 
                            ? "bg-primary text-black border-primary" 
                            : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <CreditCard size={24} />
                        <span className="font-heavy uppercase text-sm">Bankkártya</span>
                      </button>
                      <button
                        onClick={() => setPaymentMethod("cash")}
                        className={`p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                          paymentMethod === "cash" 
                            ? "bg-primary text-black border-primary" 
                            : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <Banknote size={24} />
                        <span className="font-heavy uppercase text-sm">
                          {deliveryMode === "pickup" ? "Helyszínen" : "Utánvét"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            {items.length > 0 && step !== "platform" && (
              <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-gray-400 uppercase font-bold text-sm tracking-widest">Összesen</span>
                  <span className="text-4xl font-heavy text-white">{total()} FT</span>
                </div>
                
                {step === "cart" ? (
                  <button 
                    onClick={() => setStep("platform")}
                    className="w-full py-4 bg-white text-black hover:bg-primary font-heavy text-xl uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    Tovább <ArrowRight size={20} />
                  </button>
                ) : (
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setStep("platform")}
                      className="px-6 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors uppercase tracking-wider text-sm"
                    >
                      Vissza
                    </button>
                    <button 
                      onClick={handleOrderSubmit}
                      disabled={!form.name || !form.phone || (deliveryMode === "delivery" && !form.address)}
                      className="flex-1 py-4 bg-primary hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed text-black font-heavy text-xl uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      {paymentMethod === "card" ? "FIZETÉS" : "RENDELÉS"} <CheckCircle size={20} />
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Back button for Platform Step */}
            {step === "platform" && (
               <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
                 <button 
                    onClick={() => setStep("cart")}
                    className="w-full py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors uppercase tracking-wider"
                  >
                    Vissza a Kosárhoz
                  </button>
               </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
