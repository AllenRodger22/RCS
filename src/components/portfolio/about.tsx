import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === "profile-photo");

  return (
    <section id="about" className="py-32 px-6 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 space-y-12">
          <div className="space-y-4">
            <span className="text-primary font-mono text-sm tracking-[0.3em]">/ THE_ENGINEER</span>
            <h2 className="text-7xl md:text-8xl font-black leading-[0.85] tracking-tighter">
              NOT JUST<br />AN EDITOR.
            </h2>
          </div>
          
          <div className="space-y-8 font-mono text-lg text-white/60 leading-relaxed uppercase">
            <p>
              I am a Retention Engineer. My focus is the science behind the scroll: psychological hooks, millimetric pacing, and high-impact sound design.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div className="border-l-4 border-primary pl-6 py-4 bg-white/5">
                <span className="text-white font-bold block mb-2">STRATEGIC HOOKS</span>
                <span>CRITICAL 3-SECOND VALIDATION</span>
              </div>
              <div className="border-l-4 border-primary pl-6 py-4 bg-white/5">
                <span className="text-white font-bold block mb-2">PACE PHYSICS</span>
                <span>ZERO-FRICTION STORYTELLING</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="inline-block p-10 border-2 border-primary bg-primary text-black">
              <span className="text-6xl font-black block leading-none">100+</span>
              <span className="uppercase tracking-widest font-black text-sm block mt-2">VIDEOS_OPTIMIZED</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full aspect-square max-w-[500px] border-8 border-white/5">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full z-0" />
            <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-4 border-primary z-10">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt="Rodger Creations Profile"
                  fill
                  className="object-cover"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}