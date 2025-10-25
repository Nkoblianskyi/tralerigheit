import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Heart } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Chi Siamo</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Un rifugio per gli amanti dei libri</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">Passione Letteraria</h3>
            <p className="text-muted-foreground leading-relaxed">
              Condividiamo l'amore per la letteratura attraverso discussioni stimolanti e eventi culturali
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">Comunità Accogliente</h3>
            <p className="text-muted-foreground leading-relaxed">
              Un gruppo di lettori appassionati che si incontrano per esplorare nuovi mondi letterari
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-3 text-foreground">Cultura e Tradizione</h3>
            <p className="text-muted-foreground leading-relaxed">
              Celebriamo la ricca tradizione letteraria italiana e mondiale con eventi esclusivi
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/chi-siamo">Scopri di Più</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
