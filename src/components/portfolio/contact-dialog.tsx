
"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageSquare } from "lucide-react"

interface ContactDialogProps {
  children: React.ReactNode
}

export function ContactDialog({ children }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-secondary border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black font-headline text-white">Let's Connect</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-6">
          <div className="flex items-center gap-4 p-4 bg-black/20 rounded-2xl group hover:bg-primary/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Discord</p>
              <p className="text-lg font-bold text-white">allenrodger</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-black/20 rounded-2xl group hover:bg-primary/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">WhatsApp / Phone</p>
              <p className="text-lg font-bold text-white">+55 85 9531-5653</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-black/20 rounded-2xl group hover:bg-primary/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email</p>
              <p className="text-sm font-bold text-white break-all">alanrogermoreiraaragao@proton.me</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
