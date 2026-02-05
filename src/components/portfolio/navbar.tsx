
"use client"

import Image from "next/image"
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
      isScrolled ? "bg-background/40 backdrop-blur-xl border-b border-white/5 py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-[24px] md:h-[28px] w-[80px]">
            <Image 
              src="/rcs.png"
              alt="Rodger Creations Studio Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="font-light tracking-tighter text-xl text-white/90">Rodger Creations Studio</span>
        </Link>
      </div>
    </nav>
  )
}
