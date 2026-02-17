"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

export function AudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <button 
        onClick={togglePlay}
        className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-primary transition-all group bg-black/40 backdrop-blur-sm p-2 pr-4 border border-white/10 hover:border-primary/50"
      >
        <div className={cn(
          "w-12 h-12 border flex items-center justify-center transition-all duration-500",
          isPlaying 
            ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(250,255,0,0.3)] animate-pulse" 
            : "border-white/20 bg-white/5"
        )}>
          {isPlaying ? (
            <Volume2 size={18} className="text-primary" />
          ) : (
            <VolumeX size={18} className="text-white/40" />
          )}
        </div>
        <div className="flex flex-col items-start leading-none gap-1.5">
          <span className="text-[9px] font-bold text-white/40 tracking-[0.4em]">AUDIO_MODULE</span>
          <span className={cn(
            "font-black tracking-widest",
            isPlaying ? "text-primary" : "text-white/60"
          )}>
            {isPlaying ? "SYSTEM_ACTIVE" : "SYSTEM_MUTED"}
          </span>
        </div>
      </button>
      <audio 
        ref={audioRef}
        src="/bgm.mp3"
        loop
      />
    </div>
  )
}
