"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX, Radio } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function AudioController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const handleActivate = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback failed:", err);
      });
    }
    setShowPrompt(false);
  };

  const handleDecline = () => {
    setShowPrompt(false);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Dialog open={showPrompt} onOpenChange={setShowPrompt}>
        <DialogContent className="sm:max-w-[500px] bg-black border-4 border-primary p-12 rounded-none outline-none shadow-[20px_20px_0px_0px_rgba(250,255,0,0.1)]">
          <DialogHeader className="space-y-6">
            <div className="w-16 h-16 border-2 border-primary flex items-center justify-center mx-auto animate-pulse">
              <Radio className="text-primary w-8 h-8" />
            </div>
            <DialogTitle className="text-4xl md:text-5xl font-black font-headline text-center text-white leading-none tracking-tighter uppercase">
              Initialize Full<br />
              <span className="text-primary">Experience?</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col gap-4 mt-8">
            <Button 
              onClick={handleActivate}
              className="bg-primary text-black hover:bg-white hover:text-black h-16 text-xl font-black rounded-none border-none uppercase transition-all"
            >
              Activate Audio_Module ➔
            </Button>
            <Button 
              variant="outline"
              onClick={handleDecline}
              className="border-white/20 text-white/40 hover:bg-white/10 h-12 font-mono text-xs tracking-widest rounded-none uppercase transition-all"
            >
              Stay Muted
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="font-mono text-[10px] text-center text-white/30 uppercase tracking-[0.3em]">
              System_Requirement // Audio_Feedback_Enabled
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <div className="fixed bottom-8 left-8 z-[100]">
        <button 
          onClick={togglePlay}
          className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 hover:text-primary transition-all group bg-black/60 backdrop-blur-md p-2 pr-4 border border-white/10 hover:border-primary/50"
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
            <span className="text-[9px] font-bold text-white/40 tracking-[0.4em]">SYSTEM_STATUS</span>
            <span className={cn(
              "font-black tracking-widest",
              isPlaying ? "text-primary" : "text-white/60"
            )}>
              {isPlaying ? "LIVE_FEED" : "MUTED"}
            </span>
          </div>
        </button>
      </div>

      <audio 
        ref={audioRef}
        src="/bgm.mp3"
        loop
      />
    </>
  )
}
