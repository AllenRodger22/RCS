
"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === "logo-rcs");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pointer-events-auto">
      <div className="pointer-events-auto">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-40 h-24 transition-transform group-hover:scale-105">
            {logo && (
              <Image 
                src={logo.imageUrl}
                alt="Rodger Creations Studio Logo"
                fill
                priority
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            )}
          </div>
          <span className="font-black tracking-tighter text-2xl text-white">Rodger Creations Studio</span>
        </Link>
      </div>
    </nav>
  )
}
