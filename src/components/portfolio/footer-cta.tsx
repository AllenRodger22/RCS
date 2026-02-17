"use client"

import { Button } from "@/components/ui/button"
import { ContactDialog } from "./contact-dialog"
import { useEffect, useState } from "react"

export function FooterCTA() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto border-4 border-primary p-12 md:p-24 relative overflow-hidden bg-primary/5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary translate-x-16 -translate-y-16 rotate-45" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-12">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black font-headline text-white leading-[0.85] tracking-tighter">
            READY TO<br />
            <span className="text-primary">SCALE YOUR</span><br />
            AUDIENCE?
          </h2>
          
          <ContactDialog>
            <Button 
              size="lg" 
              className="rounded-none bg-primary text-black hover:bg-white hover:text-black font-black px-16 h-20 text-2xl transition-all shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)] glitch-hover uppercase border-none"
            >
              Let&apos;s Work Together ➔
            </Button>
          </ContactDialog>
        </div>
      </div>
      
      <footer className="mt-32 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12">
        <div className="flex items-center gap-6">
          <img src="/rcs.png" alt="Logo" className="h-12 w-auto brightness-[10]" />
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest">© {year || '...'} Rodger Creations Studio</span>
        </div>
        <div className="flex gap-8 font-mono text-[10px] text-white/20 uppercase tracking-[0.5em]">
          <span>RETENTION</span>
          <span>//</span>
          <span>GROWTH</span>
          <span>//</span>
          <span>VIRAL</span>
        </div>
      </footer>
    </section>
  );
}