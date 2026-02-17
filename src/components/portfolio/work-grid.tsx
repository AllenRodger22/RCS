"use client"

import * as React from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const WORKS = [
  {
    title: "Introduction",
    id: "work-1",
    label: "RETENTION_STRATEGY_01",
    url: "https://youtube.com/shorts/5dd3ZVhdiU4?feature=share"
  },
  {
    title: "Police Frog",
    id: "work-2",
    label: "VIRAL_HOOK_STORY",
    url: "https://youtube.com/shorts/SjNyuxpLyDw?feature=share"
  },
  {
    title: "RANT",
    id: "work-3",
    label: "FAST_PACE_DYNAMICS",
    url: "https://youtube.com/shorts/j2LZhWu-Nwg?feature=share"
  }
];

function getYouTubeEmbedUrl(url: string) {
  if (url === "#") return null;
  const match = url.match(/shorts\/([^?]+)/);
  const videoId = match ? match[1] : null;
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`;
}

export function WorkGrid() {
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
            const image = PlaceHolderImages.find(img => img.id === work.id);
            const embedUrl = getYouTubeEmbedUrl(work.url);

            return (
              <Dialog key={work.id}>
                <DialogTrigger asChild>
                  <Card className="bg-transparent border-none rounded-none group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-4 left-4 z-30 bg-black/80 text-primary font-mono text-[10px] px-2 py-1 border border-primary/30">
                      {work.label}
                    </div>
                    <CardContent className="p-0 aspect-[9/16] relative border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={work.title}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      )}
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