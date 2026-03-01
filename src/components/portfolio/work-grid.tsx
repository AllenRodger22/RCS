"use client"

import * as React from "react"
import Image from "next/image"
import { Play, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

const WORKS = [
  {
    title: "When everything falls apart",
    id: "work-1",
    label: "RETENTION_STRATEGY_01",
    url: "https://www.youtube.com/shorts/DN4XYoiloGQ"
  },
  {
    title: "Rice and Meat",
    id: "work-2",
    label: "VIRAL_HOOK_STORY",
    url: "https://www.youtube.com/shorts/3tRuxHhYtVQ"
  },
  {
    title: "Leozinho voou na briga",
    id: "work-3",
    label: "FAST_PACE_DYNAMICS",
    url: "https://www.youtube.com/shorts/ebskw1QIbf8"
  }
];

function getYouTubeId(url: string) {
  const match = url.match(/shorts\/([^?]+)/);
  return match ? match[1] : null;
}

function getYouTubeEmbedUrl(url: string) {
  const videoId = getYouTubeId(url);
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`;
}

function getYouTubeThumbnail(url: string) {
  const videoId = getYouTubeId(url);
  if (!videoId) return "/placeholder-work.jpg";
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function WorkGrid() {
  const [loadingImages, setLoadingImages] = React.useState<Record<string, boolean>>(
    Object.fromEntries(WORKS.map(w => [w.id, true]))
  );

  const handleImageLoad = (id: string) => {
    setLoadingImages(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section id="work" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-7xl md:text-8xl font-black leading-none tracking-tighter">LESS THEORY.<br /><span className="text-primary">MORE PLAY.</span></h2>
            <p className="font-mono text-sm text-white/40 mt-6 uppercase tracking-widest">Selected Retention Experiments</p>
          </div>
          <div className="bg-secondary p-6 border border-white/10">
            <span className="text-primary font-bold block text-xl">100% SUCCESS RATE</span>
            <span className="text-white/40 text-xs font-mono">ON VIRAL VALIDATION</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WORKS.map((work) => {
            const thumbnailUrl = getYouTubeThumbnail(work.url);
            const embedUrl = getYouTubeEmbedUrl(work.url);

            return (
              <Dialog key={work.id}>
                <DialogTrigger asChild>
                  <Card className="bg-transparent border-none rounded-none group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-4 left-4 z-30 bg-black/80 text-primary font-mono text-[10px] px-2 py-1 border border-primary/30">
                      {work.label}
                    </div>
                    
                    <CardContent className="p-0 aspect-[9/16] relative border border-white/10 transition-all duration-500 group-hover:scale-[1.02]">
                      {/* Loading Symbol */}
                      {loadingImages[work.id] && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505] gap-4">
                          <Loader2 className="w-8 h-8 text-primary animate-spin" />
                          <span className="font-mono text-[10px] text-primary/50 tracking-[0.3em] animate-pulse">
                            FETCHING_DATA...
                          </span>
                        </div>
                      )}

                      <Image
                        src={thumbnailUrl}
                        alt={work.title}
                        fill
                        className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${loadingImages[work.id] ? 'opacity-0' : 'opacity-100'}`}
                        onLoadingComplete={() => handleImageLoad(work.id)}
                      />

                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10" />
                      
                      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-20 h-20 bg-primary flex items-center justify-center">
                          <Play className="text-black w-10 h-10 fill-current" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 w-full p-6 z-30 translate-y-full group-hover:translate-y-0 transition-transform bg-black/90 border-t border-primary">
                        <h3 className="text-primary font-headline text-2xl uppercase tracking-tighter">{work.title}</h3>
                        <p className="text-white/60 font-mono text-xs mt-2">RETENTION_ENGINEERING_APPLIED</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[320px] p-0 bg-transparent border-none overflow-hidden sm:max-w-md aspect-[9/16] rounded-none">
                  <DialogTitle className="sr-only">{work.title}</DialogTitle>
                  {embedUrl && (
                    <iframe
                      src={embedUrl}
                      className="w-full h-full border-4 border-primary"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  )
}