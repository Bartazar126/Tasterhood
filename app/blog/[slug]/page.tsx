import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      
      <article className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-8 font-bold uppercase tracking-widest text-sm transition-colors">
          <ArrowLeft size={16} /> Vissza a Blogra
        </Link>
        
        <h1 className="text-5xl md:text-7xl font-heavy text-white mb-8 leading-none">
          HOGYAN KÉSZÜL A TÖKÉLETES SMASH BURGER?
        </h1>
        
        <div className="flex items-center gap-6 text-gray-500 font-display text-sm uppercase tracking-widest mb-12 border-b border-white/10 pb-8">
          <span>2024. Feb. 20.</span>
          <span>•</span>
          <span>Olvasási idő: 3 perc</span>
          <span>•</span>
          <span className="text-primary font-bold">Kulisszák</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none font-body text-gray-300">
          <p className="lead text-2xl text-white font-heavy mb-8">
            A titok nem a szószban van (bár az is fontos). A titok a kémiában rejlik. A Maillard-reakcióban.
          </p>
          
          <p>
            Sokan azt hiszik, a vastag húspogácsa a legjobb. Mi a Tasterhoodnál máshogy gondoljuk. 
            A "Smash" technika lényege, hogy a gombócba formált húst a forró rostlapon erőteljesen kilapítjuk.
          </p>

          <h3 className="text-3xl text-white font-heavy mt-12 mb-4">Miért jó ez?</h3>
          <p>
            Mert így maximalizáljuk az érintkezési felületet a forró vaslappal. Ez hozza létre azt a sötétbarna, roppanós kérget (crust), ami tele van ízzel.
            Eközben a belseje szaftos marad, mert a rövid sütési idő alatt nem szárad ki.
          </p>

          <div className="bg-surface border-l-4 border-primary p-8 my-12 italic text-xl text-white">
            "A tökéletes burger nem bonyolult. Csak minőségi hús, só, bors és hő kell hozzá. Meg egy kis szenvedély."
          </div>

          <h3 className="text-3xl text-white font-heavy mt-12 mb-4">Az Összetevők</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li><strong>Hús:</strong> 80/20 arányú marhahús (hús/zsír). Ez az arany középút.</li>
            <li><strong>Buci:</strong> Briós tészta, vajjal pirítva.</li>
            <li><strong>Sajt:</strong> Cheddar. Mert szépen olvad.</li>
          </ul>
        </div>
      </article>

      <Footer />
    </main>
  );
}
