import Navbar from "@/components/Navbar";
import BrutalHero from "@/components/BrutalHero";
import TopPicks from "@/components/TopPicks";
import BentoZones from "@/components/BentoZones";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const latestPosts = [
  {
    id: 1,
    slug: "hogyan-keszul-a-toleletes-burger",
    title: "HOGYAN KÉSZÜL A TÖKÉLETES SMASH BURGER?",
    category: "KULISSZÁK",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    excerpt: "Nem titok többé. Megmutatjuk, mitől lesz a hús kívül roppanós, belül szaftos. A Maillard-reakció titkai."
  },
  {
    id: 2,
    slug: "pizza-teszta-titkok",
    title: "MIÉRT KELL 48 ÓRÁT VÁRNI A PIZZÁRA?",
    category: "TUDÁS",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    excerpt: "A türelem rózsát terem... vagyis tökéletes, levegős pizzatésztát. Így dolgozik az élesztő."
  },
  {
    id: 3,
    slug: "uj-nyitvatartas",
    title: "MÁR ÉJFÉLIG NYITVA VAGYUNK HÉTVÉGÉN!",
    category: "HÍREK",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    excerpt: "Ti kértétek, mi teljesítettük. Pénteken és szombaton mostantól tovább maradhatsz."
  }
];

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <CartDrawer />
      
      {/* 1. Hero */}
      <BrutalHero />
      
      {/* 2. Top Items (Grid) */}
      <TopPicks />
      
      {/* 3. Categories */}
      <div id="zones">
        <BentoZones />
      </div>

      {/* 4. Latest News (Blog Teaser) */}
      <section className="py-24 bg-surface border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-5xl md:text-7xl font-heavy text-white leading-none">
              LATEST <span className="text-outline-orange">NEWS</span>
            </h2>
            <Link href="/blog" className="text-white font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
              Összes Cikk <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-dark border border-white/10">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{post.category}</span>
                <h3 className="text-2xl font-heavy text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-body text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
