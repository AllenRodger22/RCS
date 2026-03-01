"use client"

import * as React from "react"
import Image from "next/image"
import { Play, Loader2 } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

const WORKS = [
  {
    title: "When everything falls apart",
    id: "work-1",
    url: "https://www.youtube.com/shorts/DN4XYoiloGQ"
  },
  {
    title: "Rice and Meat",
    id: "work-2",
    url: "https://www.youtube.com/shorts/3tRuxHhYtVQ"
  },
  {
    title: "Leozinho voou na briga",
    id: "work-3",
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

export function WorkCarousel() {
  const [loadingImages, setLoadingImages] = React.useState<Record<string, boolean>>(
    Object.fromEntries(WORKS.map(w => [w.id, true]))
  );

  const handleImageLoad = (id: string) => {
    setLoadingImages(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section id="work" className="py-16 md:py-24 px-4 bg-black/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-left px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl font-black font-headline mb-2 text-white">SELECTED_LABS</h2>
          <p className="text-primary font-mono font-bold tracking-[0.3em] uppercase text-xs">// RECENT_MUTATIONS</p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {WORKS.map((work) => {
              const thumbnailUrl = getYouTubeThumbnail(work.url);
              const embedUrl = getYouTubeEmbedUrl(work.url);

              return (
                <CarouselItem key={work.id} className="pl-4 basis-[75%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="bg-secondary border-none overflow-hidden group hover:ring-2 hover:ring-primary transition-all duration-300 rounded-none cursor-pointer">
                          <CardContent className="p-0 flex aspect-[9/16] relative">
                            {/* Loading Symbol */}
                            {loadingImages[work.id] && (
                              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black gap-4">
                                <Loader2 className="w-6 h-6 text-primary animate-spin" />
                              </div>
                            )}

                            <Image
                              src={thumbnailUrl}
                              alt={work.title}
                              fill
                              className={`object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 ${loadingImages[work.id] ? 'opacity-0' : 'opacity-100'}`}
                              onLoadingComplete={() => handleImageLoad(work.id)}
                            />
                            
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                              <div className="w-16 h-16 bg-primary flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-all duration-300">
                                <Play className="text-black w-8 h-8 fill-current ml-1" />
                              </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                              <h3 className="text-white font-bold text-lg mb-2">{work.title}</h3>
                              <span className="text-primary font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2">
                                INIT_PLAYBACK <Play className="w-3 h-3 fill-current" />
                              </span>
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
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-black bg-transparent transition-colors" />
            <CarouselNext className="static translate-y-0 h-12 w-12 rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-black bg-transparent transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}