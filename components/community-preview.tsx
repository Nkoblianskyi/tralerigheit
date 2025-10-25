import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Calendar, MessageCircle, Gift } from "lucide-react"

export function CommunityPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Unisciti alla Comunità</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Diventa parte di una comunità vibrante di lettori appassionati
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg mb-2 text-foreground">Eventi Esclusivi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Accesso prioritario a tutti i nostri eventi</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg mb-2 text-foreground">Discussioni</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Partecipa a conversazioni stimolanti</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg mb-2 text-foreground">Contenuti Speciali</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Recensioni e materiali esclusivi</p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg mb-2 text-foreground">Vantaggi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Sconti e offerte per i membri</p>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/comunita">Scopri i Vantaggi</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
