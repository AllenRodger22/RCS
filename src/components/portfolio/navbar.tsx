
"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === "logo-rcs");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
      <div className="pointer-events-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-white/10 group-hover:scale-105 transition-transform">
            {logo && (
              <Image 
                src={logo.imageUrl}
                alt="RCS Logo"
                fill
                className="object-cover"
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
