import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ContactDialog } from "./contact-dialog";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-black">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/fundo.jpg" 
          alt="Studio Background" 
          fill 
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto z-10 flex flex-col items-center relative">
        {/* Logo with massive scale and aggressive negative margins */}
        <div className="relative -mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 -mb-32 sm:-mb-48 md:-mb-56 lg:-mb-64 animate-in fade-in duration-1000">
          <img 
            src="/rcs.png" 
            alt="Rodger Creations Studio" 
            className="h-[400px] sm:h-[600px] md:h-[750px] lg:h-[900px] w-auto brightness-[10] filter contrast-200"
          />
        </div>
        
        <div className="flex flex-col items-center space-y-8 relative z-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-[0.8] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            YOU CREATE.<br />
            <span className="bg-primary text-black px-6 py-2 inline-block transform -rotate-1">
              I RETAIN.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-mono uppercase tracking-tight leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 drop-shadow-lg">
            Retention Engineering for YouTube & Shorts.<br className="hidden md:block" />
            Your first edit is courtesy. Zero risk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <ContactDialog>
              <Button size="lg" className="rounded-none bg-primary text-black hover:bg-white hover:text-black font-black px-12 h-16 text-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all glitch-hover w-full sm:w-auto border-none">
                EXECUTE FREE TEST ➔
              </Button>
            </ContactDialog>
            <Button asChild variant="outline" size="lg" className="rounded-none border-2 border-white text-white hover:bg-white hover:text-black font-black px-12 h-16 text-xl transition-all w-full sm:w-auto bg-black/20 backdrop-blur-sm">
              <Link href="#work">VIEW LABS</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#FAFF00_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
    </section>
  );
}
