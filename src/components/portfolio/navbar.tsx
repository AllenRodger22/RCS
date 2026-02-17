"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300",
      isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative flex items-center h-8 overflow-visible">
            <img 
              src="/rcs.png"
              alt="Rodger Creations Studio Logo"
              className="h-[80px] w-auto block object-contain brightness-[10] filter contrast-200 mt-[-10px] mb-[-10px] transition-transform group-hover:scale-105"
            />
          </div>
          <span className="font-headline text-2xl text-white uppercase tracking-tighter hidden sm:block">Rodger Creations Studio</span>
        </Link>
        <div className="flex gap-8">
          <Link href="#work" className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-primary transition-colors">/work</Link>
          <Link href="#about" className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-primary transition-colors">/about</Link>
        </div>
      </div>
    </nav>
  )
}