
"use client"

import * as React from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const WORKS = [
  {
    title: "Viral Retention Gaming Shorts",
    id: "work-1",
    url: "#"
  },
  {
    title: "Roblox Fast-Paced Gameplay",
    id: "work-2",
    url: "#"
  },
  {
    title: "YouTube Growth Strategy Edit",
    id: "work-3",
    url: "#"
  },
  {
    title: "High Hook Rate Montage",
    id: "work-4",
    url: "#"
  }
];

export function WorkCarousel() {
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
              return (
                <CarouselItem key={work.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
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
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <Play className="text-primary w-8 h-8 fill-current ml-1" />
                          </div>
                        </div>

                        {/* Text Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                          <h3 className="text-white font-bold text-lg mb-2">{work.title}</h3>
                          <span 
                            className="text-primary font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                          >
                            Watch Short <Play className="w-3 h-3 fill-current" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
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
