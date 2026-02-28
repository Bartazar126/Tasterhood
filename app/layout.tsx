import type { Metadata } from "next";
import { Anton, Syne, Manrope } from "next/font/google";
import "./globals.css";

const anton = Anton({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-heavy',
  display: 'swap',
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "TASTERHOOD | Budapest Underground Street Food",
  description: "A város legjobb Smash Burgere, Nápolyi Pizzája és Görög Gyrosa. Rendelj online, ingyenes kiszállítással 5000 Ft felett.",
  openGraph: {
    title: "TASTERHOOD | Budapest Underground Street Food",
    description: "Brutális ízek, kompromisszumok nélkül.",
    locale: "hu_HU",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${anton.variable} ${syne.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-[#050505] text-white selection:bg-orange-600 selection:text-black overflow-x-hidden font-body">
        {children}
      </body>
    </html>
  );
}
