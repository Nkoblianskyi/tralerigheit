import { BookHeart, Users, Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="chi-siamo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Chi Siamo</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tra le Righe è una comunità appassionata di lettori che si riunisce per condividere l'amore per la
            letteratura. La nostra missione è creare uno spazio dove le storie diventano conversazioni e i libri
            diventano ponti tra le persone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <BookHeart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Passione Letteraria</h3>
            <p className="text-muted-foreground leading-relaxed">
              Esploriamo insieme capolavori classici e contemporanei, scoprendo nuove voci e prospettive.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comunità Accogliente</h3>
            <p className="text-muted-foreground leading-relaxed">
              Un ambiente inclusivo dove ogni voce è ascoltata e ogni opinione è valorizzata.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Eventi Culturali</h3>
            <p className="text-muted-foreground leading-relaxed">
              Presentazioni, letture, incontri con autori e molto altro per arricchire la tua esperienza letteraria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
