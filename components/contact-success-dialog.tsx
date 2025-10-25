"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactSuccessDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactSuccessDialog({ isOpen, onClose }: ContactSuccessDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">Messaggio Inviato!</DialogTitle>
          <DialogDescription className="text-center text-base leading-relaxed">
            Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-4">
          <Button onClick={onClose}>Chiudi</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
