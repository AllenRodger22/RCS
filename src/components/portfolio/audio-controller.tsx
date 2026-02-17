"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

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
        className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-primary transition-all group"
      >
        <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
          {isPlaying ? (
            <Volume2 size={14} className="text-primary animate-pulse" />
          ) : (
            <VolumeX size={14} />
          )}
        </div>
        <div className="flex flex-col items-start leading-none gap-1">
          <span className="text-[8px] opacity-50">BGM_SYSTEM</span>
          <span className={isPlaying ? "text-primary" : ""}>{isPlaying ? "ACTIVE" : "MUTED"}</span>
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
