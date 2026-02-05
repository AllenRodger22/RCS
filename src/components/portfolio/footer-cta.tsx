
"use client"

import { Button } from "@/components/ui/button"
import { ContactDialog } from "./contact-dialog"

export function FooterCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto rounded-[3.5rem] bg-primary pt-[20px] pb-16 px-6 md:px-12 text-center space-y-8 overflow-hidden relative shadow-[0_20px_50px_rgba(255,65,54,0.3)]">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative flex items-center justify-center w-full p-0">
            <img 
              src="/rcs.png"
              alt="Rodger Creations Studio Logo"
              className="w-[300px] md:w-[500px] h-auto block object-contain max-h-none brightness-[10] filter contrast-200 mb-[-60px] mt-[-80px]"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-headline text-white leading-[1.15] mb-10 max-w-5xl mx-auto tracking-tight relative z-20">
            Let’s chat and take your YouTube channel <br className="hidden md:block" /> to the next level.
          </h2>
          
          <div>
            <ContactDialog>
              <Button 
                size="lg" 
                className="rounded-full bg-white text-primary hover:bg-blue-600 hover:text-white font-bold px-10 h-14 text-lg shadow-xl transition-all hover:scale-105 active:scale-95 border-none"
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
