
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === "profile-photo");

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-4 border-primary shadow-[0_0_50px_-12px_rgba(255,65,54,0.5)] z-0" />
            <div className="absolute inset-2 rounded-full overflow-hidden z-10">
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

        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-black font-headline">Who I Am</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Hi, Rodger here! I have over a year of specialized experience in high-impact editing for gaming content and YouTube Shorts. 
              My focus isn&apos;t just on putting clips together, but on driving real growth for creators.
            </p>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary font-bold">●</span>
                <span>Specialized in fast-paced editing with strong rhythm and hooks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">●</span>
                <span>Strong understanding of retention, pacing, and viral mechanics.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">●</span>
                <span>Strategic collaborator, able to work alongside channel growth teams.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <div className="inline-block px-8 py-4 bg-secondary rounded-2xl border-l-4 border-primary">
              <span className="text-4xl font-black text-white">100+</span>
              <span className="ml-4 text-muted-foreground uppercase tracking-widest font-bold text-sm">Videos Edited</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
