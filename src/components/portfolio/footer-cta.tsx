
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactDialog } from "./contact-dialog"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function FooterCTA() {
  const logo = PlaceHolderImages.find(img => img.id === "logo-rcs");

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto rounded-[3rem] bg-primary p-12 md:p-16 text-center space-y-8 overflow-hidden relative shadow-[0_20px_50px_rgba(255,65,54,0.3)]">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="relative w-64 h-32 mb-4">
            {logo && (
              <Image 
                src={logo.imageUrl}
                alt="RCS Logo"
                fill
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            )}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black font-headline text-white leading-tight">
            Let’s chat and take your <br className="hidden md:block" /> YouTube channel to the next level.
          </h2>
          
          <div className="pt-4">
            <ContactDialog>
              <Button 
                size="lg" 
                className="rounded-full bg-white text-primary hover:bg-blue-600 hover:text-white font-black px-12 h-16 text-xl shadow-xl transition-all hover:scale-105 active:scale-95 border-none"
              >
                Let’s Chat!
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
      
      <footer className="mt-16 text-center text-muted-foreground text-sm uppercase tracking-widest font-bold">
        © {new Date().getFullYear()} Rodger Creations Studio
      </footer>
    </section>
  );
}
