import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactDialog } from "./contact-dialog";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 z-10 pt-20 flex flex-col items-center">
        <div className="mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <img 
            src="/rcs.png" 
            alt="Rodger Creations Studio" 
            className="h-72 sm:h-[384px] md:h-[480px] lg:h-[576px] w-auto brightness-[10] filter contrast-200"
          />
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          YOU CREATE.<br />
          <span className="bg-primary text-black px-4 inline-block transform -rotate-1">I RETAIN.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-mono uppercase tracking-tight leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          RETENTION ENGINEERING FOR YOUTUBE AND SHORT-FORM. <br className="hidden md:block" />
          YOUR FIRST EDIT IS ON ME. ZERO RISK.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <ContactDialog>
            <Button size="lg" className="rounded-none bg-primary text-black hover:bg-white hover:text-black font-bold px-12 h-16 text-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] transition-all glitch-hover w-full sm:w-auto">
              GET MY FREE EDIT ➔
            </Button>
          </ContactDialog>
          <Button asChild variant="outline" size="lg" className="rounded-none border-2 border-white text-white hover:bg-white hover:text-black font-bold px-12 h-16 text-xl transition-all w-full sm:w-auto">
            <Link href="#work">VIEW LABS</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#FAFF00_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>
    </section>
  );
}
