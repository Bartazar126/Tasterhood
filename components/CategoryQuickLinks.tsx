import Link from "next/link";
import { Pizza, Utensils, Sandwich, Flame } from "lucide-react";

const categories = [
  {
    title: "PIZZA",
    link: "/etlap?cat=Pizza",
    bg: "bg-red-500",
    icon: <Pizza size={32} />
  },
  {
    title: "BURGER",
    link: "/etlap?cat=Burger",
    bg: "bg-orange-600",
    icon: <Flame size={32} />
  },
  {
    title: "GYROS",
    link: "/etlap?cat=Gyros",
    bg: "bg-yellow-500",
    icon: <Utensils size={32} />
  },
  {
    title: "DESSZERT",
    link: "/etlap?cat=Desszert",
    bg: "bg-pink-500",
    icon: <Sandwich size={32} />
  }
];

export default function CategoryQuickLinks() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-8 uppercase tracking-tighter">Mit ennél ma?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Link 
              key={i} 
              href={cat.link}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl ${cat.bg} text-white font-bold text-xl uppercase tracking-wider hover:scale-105 transition-transform shadow-lg group`}
            >
              <div className="mb-3 bg-white/20 p-4 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                {cat.icon}
              </div>
              {cat.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
