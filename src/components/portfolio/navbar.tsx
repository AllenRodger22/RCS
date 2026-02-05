
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300",
      isScrolled ? "bg-background/40 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative flex items-center h-8">
            <img 
              src="/rcs.png"
              alt="Rodger Creations Studio Logo"
              className="h-8 w-auto block object-contain brightness-[5] filter contrast-200"
            />
          </div>
          <span className="font-light tracking-tighter text-xl text-white/90">Rodger Creations Studio</span>
        </Link>
      </div>
    </nav>
  )
}
