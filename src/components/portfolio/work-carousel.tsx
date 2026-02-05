
"use client"

import * as React from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const WORKS = [
  {
    title: "Introduction",
    id: "work-1",
    url: "https://youtube.com/shorts/5dd3ZVhdiU4?feature=share"
  },
  {
    title: "Police Frog",
    id: "work-2",
    url: "https://youtube.com/shorts/SjNyuxpLyDw?feature=share"
  },
  {
    title: "RANT",
    id: "work-3",
    url: "https://youtube.com/shorts/j2LZhWu-Nwg?feature=share"
  },
  {
    title: "Future Project",
    id: "work-4",
    url: "#"
  }
];

function getYouTubeEmbedUrl(url: string) {
  if (url === "#") return null;
  // Extract video ID from shorts URL
  const match = url.match(/shorts\/([^?]+)/);
  const videoId = match ? match[1] : null;
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`;
}

export function WorkCarousel() {
  const [selectedWork, setSelectedWork] = React.useState<typeof WORKS[0] | null>(null);

  return (
    <section id="work" className="py-24 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="text-4xl md:text-5xl font-black font-headline mb-2">My Work</h2>
          <p className="text-primary font-bold tracking-widest uppercase text-sm">Recent Work</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {WORKS.map((work) => {
              const image = PlaceHolderImages.find(img => img.id === work.id);
              const embedUrl = getYouTubeEmbedUrl(work.url);

              return (
                <CarouselItem key={work.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="bg-secondary border-none overflow-hidden group hover:ring-2 hover:ring-primary transition-all duration-300 rounded-2xl cursor-pointer">
                          <CardContent className="p-0 flex aspect-[9/16] relative">
                            {image && (
                              <Image
                                src={image.imageUrl}
                                alt={work.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                data-ai-hint={image.imageHint}
                              />
                            )}
                            
                            {/* Play Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                              <div className="w-16 h-16 rounded-full bg-white group-hover:bg-primary flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-all duration-300">
                                <Play className="text-neutral-500 group-hover:text-white w-8 h-8 fill-current ml-1 transition-colors" />
                              </div>
                            </div>

                            {/* Text Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                              <h3 className="text-white font-bold text-lg mb-2">{work.title}</h3>
                              <span 
                                className="text-primary group-hover:text-white font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-all inline-flex items-center gap-1"
                              >
                                Watch Direct <Play className="w-3 h-3 fill-current" />
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-sm p-0 bg-transparent border-none overflow-hidden sm:max-w-lg aspect-[9/16]">
                        <DialogTitle className="sr-only">{work.title}</DialogTitle>
                        {embedUrl ? (
                          <iframe
                            src={embedUrl}
                            className="w-full h-full rounded-2xl"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-secondary rounded-2xl text-white font-bold">
                            Coming Soon
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent" />
            <CarouselNext className="static translate-y-0 h-12 w-12 border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
