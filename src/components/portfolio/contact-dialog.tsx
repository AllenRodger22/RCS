
"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageSquare, Phone, Mail, MessageCircle } from "lucide-react"

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
        <div className="space-y-4 py-6">
          <div className="flex items-center gap-4 p-4 bg-black/20 rounded-2xl group hover:bg-blue-600/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Discord</p>
              <p className="text-lg font-bold text-white">allenrodger.</p>
            </div>
          </div>

          <a 
            href="https://wa.me/5585985315653" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-black/20 rounded-2xl group hover:bg-green-600/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-green-600 group-hover:text-white transition-colors">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">WhatsApp</p>
              <p className="text-lg font-bold text-white">Open Chat</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 bg-black/20 rounded-2xl group hover:bg-blue-600/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Phone</p>
              <p className="text-lg font-bold text-white">+55 85 98531-5653</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-black/20 rounded-2xl group hover:bg-blue-600/20 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
