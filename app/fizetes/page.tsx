"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CreditCard, Lock, ShieldCheck, Loader2 } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const { clearCart } = useCartStore();
  
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      clearCart();
      router.push(`/rendeles/${orderId}`);
    }, 2000);
  };

  // Format card number with spaces
  const handleCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    val = val.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(val.substring(0, 19));
  };

  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-heavy text-white">BIZTONSÁGOS FIZETÉS</h1>
          <div className="flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-widest bg-green-500/10 px-3 py-1 rounded-full">
            <Lock size={12} /> SSL Encrypted
          </div>
        </div>

        {/* Amount Display */}
        <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
          <span className="text-gray-400 font-display text-sm uppercase tracking-widest">Fizetendő összeg</span>
          <span className="text-2xl font-heavy text-white">Rendelés #{orderId}</span>
        </div>

        {/* Card Form */}
        <form onSubmit={handlePayment} className="space-y-6">
          
          <div>
            <label className="block text-gray-400 text-xs uppercase font-bold mb-2 ml-1">Kártyaszám</label>
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input 
                type="text" 
                value={cardNumber}
                onChange={handleCardInput}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors font-mono tracking-wider text-lg"
                placeholder="0000 0000 0000 0000"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-xs uppercase font-bold mb-2 ml-1">Lejárat</label>
              <input 
                type="text" 
                value={expiry}
                onChange={(e) => setExpiry(e.target.value.replace(/\D/g, '').replace(/(.{2})/, '$1/').substring(0, 5))}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-center"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs uppercase font-bold mb-2 ml-1">CVC / CVV</label>
              <div className="relative">
                <ShieldCheck className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').substring(0, 3))}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primary transition-colors text-center"
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-primary hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed text-black font-heavy text-xl uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" /> FELDOLGOZÁS...
                </>
              ) : (
                "FIZETÉS MOST"
              )}
            </button>
          </div>

        </form>

        <div className="mt-6 flex justify-center gap-4 opacity-30 grayscale">
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
        </div>

      </div>
    </main>
  );
}
