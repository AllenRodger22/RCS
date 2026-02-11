import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactDialog } from "./contact-dialog";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 md:py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-[0.95] animate-in fade-in slide-in-from-bottom-8 duration-700">
          Unlock <span className="text-primary">Viral Growth</span> <br />
          With Strategic Editing
        </h1>
        
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          I transform raw footage into high-retention experiences designed for YouTube growth and viral reach. 
          While I specialize in fast-paced gaming content, my techniques drive engagement across any niche.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-blue-600 text-white font-bold px-10 h-14 text-lg border-none transition-all w-full sm:w-auto">
            <Link href="#work">Recent Projects</Link>
          </Button>
          <ContactDialog>
            <Button variant="outline" size="lg" className="rounded-full border-2 border-primary text-primary hover:bg-blue-600 hover:border-blue-600 hover:text-white font-bold px-10 h-14 text-lg bg-transparent transition-all w-full sm:w-auto">
              Get Started
            </Button>
          </ContactDialog>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-0 pointer-events-none" />
    </section>
  );
}
