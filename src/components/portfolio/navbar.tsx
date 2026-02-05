
"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === "logo-rcs");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pointer-events-auto">
      <div className="pointer-events-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-white/10 group-hover:scale-110 transition-transform bg-black/10 backdrop-blur-md">
            {logo && (
              <Image 
                src={logo.imageUrl}
                alt="RCS Logo"
                fill
                priority
                className="object-cover transition-opacity"
                data-ai-hint={logo.imageHint}
              />
            )}
          </div>
          <span className="font-black tracking-tighter text-xl text-white">RCS</span>
        </Link>
      </div>
    </nav>
  )
}
