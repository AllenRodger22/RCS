
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactDialog } from "./contact-dialog";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-8 duration-700">
          Transforming Vision <br />
          Into <span className="text-primary">Viral Growth</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          High-retention video editing focused on YouTube growth, viral reach, and audience satisfaction. 
          Specialized in fast-paced gaming content and Shorts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-blue-600 text-white font-bold px-10 h-14 text-lg border-none">
            <Link href="#work">Projects</Link>
          </Button>
          <ContactDialog>
            <Button variant="outline" size="lg" className="rounded-full border-2 border-primary text-primary hover:bg-blue-600 hover:border-blue-600 hover:text-white font-bold px-10 h-14 text-lg bg-transparent transition-all">
              Contact
            </Button>
          </ContactDialog>
        </div>
      </div>
      
      {/* Subtle decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-0 pointer-events-none" />
    </section>
  );
}
