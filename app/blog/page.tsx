import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";

export const metadata = {
  title: "BLOG | TASTERHOOD",
  description: "Hírek, receptek és kulisszatitkok a Tasterhood világából.",
};

const posts = [
  {
    slug: "hogyan-keszul-a-toleletes-burger",
    title: "Hogyan készül a tökéletes Smash Burger?",
    excerpt: "Nem titok többé. Megmutatjuk, mitől lesz a hús kívül roppanós, belül szaftos.",
    date: "2024. Feb. 20.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    category: "KULISSZÁK"
  },
  {
    slug: "uj-nyitvatartas",
    title: "Már éjfélig nyitva vagyunk!",
    excerpt: "Ti kértétek, mi teljesítettük. Mostantól pénteken és szombaton éjfélig rendelhetsz.",
    date: "2024. Feb. 15.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    category: "HÍREK"
  },
  {
    slug: "pizza-teszta-titkok",
    title: "48 órás kelesztés: Miért éri meg várni?",
    excerpt: "A nápolyi pizza lelke a tészta. Elmagyarázzuk a fermentáció folyamatát.",
    date: "2024. Jan. 30.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    category: "TUDÁS"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4 border-b border-white/5 bg-surface">
        <div className="container mx-auto">
          <h1 className="text-6xl md:text-9xl font-heavy text-white mb-4 leading-none">
            TASTER <span className="text-primary">BLOG</span>
          </h1>
          <p className="text-xl text-gray-400 font-display max-w-2xl">
            Street food kultúra, receptek és minden, ami a konyhánkban történik.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-surface border border-white/5 hover:border-primary/50 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden w-full">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  
                  <h3 className="text-3xl font-heavy text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 font-body mb-8 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-sm mt-auto group-hover:gap-4 transition-all">
                    Olvass tovább <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
