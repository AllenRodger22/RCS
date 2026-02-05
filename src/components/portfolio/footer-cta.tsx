
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./contact-dialog";

export function FooterCTA() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto rounded-[3rem] bg-primary p-12 md:p-24 text-center space-y-8 overflow-hidden relative">
        {/* Decorative background element for the CTA card */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        <h2 className="text-4xl md:text-6xl font-black font-headline text-white leading-tight relative z-10">
          Let’s chat and take your <br className="hidden md:block" /> YouTube channel to the next level.
        </h2>
        
        <div className="relative z-10">
          <ContactDialog>
            <Button 
              size="lg" 
              className="rounded-full bg-white text-primary hover:bg-neutral-100 font-black px-12 h-16 text-xl shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              Let’s Chat!
            </Button>
          </ContactDialog>
        </div>
      </div>
      
      <footer className="mt-16 text-center text-muted-foreground text-sm uppercase tracking-widest font-bold">
        © {new Date().getFullYear()} Rodger Creations Studio
      </footer>
    </section>
  );
}
