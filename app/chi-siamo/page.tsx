import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Chi Siamo</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Un rifugio letterario dove le pagine prendono vita e le storie ci uniscono
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Il Nostro Spazio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src="/cozy-italian-bookstore-interior-with-warm-lighting.jpg"
                  alt="Interno accogliente del nostro club del libro"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">La nostra sala lettura principale</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src="/elegant-italian-library-reading-room-with-antique-.jpg"
                  alt="Biblioteca elegante con scaffali di libri"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">La biblioteca con oltre 2000 volumi</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src="/intimate-book-club-meeting-space-with-round-table-.jpg"
                  alt="Spazio per discussioni letterarie"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">Lo spazio per le nostre discussioni</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src="/charming-italian-cafe-corner-with-espresso-bar--sm.jpg"
                  alt="Angolo caffè del club"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">L'angolo caffè per le pause letterarie</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">La Nostra Storia</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Tra le Righe è nato nel cuore di Napoli dall'incontro di anime affini, unite dalla passione per la
                letteratura e dal desiderio di creare qualcosa di speciale. Quello che è iniziato come un piccolo gruppo
                di amici che si riunivano per discutere dei loro libri preferiti è cresciuto fino a diventare una vivace
                comunità di centinaia di lettori appassionati.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Il nostro spazio, situato nel suggestivo Centro Commerciale Campania, è molto più di una semplice
                libreria. È un rifugio letterario dove le pagine prendono vita, dove ogni libro racconta non solo la sua
                storia, ma anche quella dei lettori che lo hanno amato. Tra scaffali di legno antico e poltrone
                accoglienti, creiamo un'atmosfera che invita alla scoperta e alla riflessione.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Organizziamo eventi letterari che spaziano dalle presentazioni di nuove opere alle lezioni approfondite
                sui grandi classici, dalle discussioni animate sui bestseller contemporanei agli incontri con autori
                emergenti. Ogni evento è un'opportunità per immergersi nella magia della letteratura e per connettersi
                con persone che condividono la stessa passione.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Passione per la Lettura</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Crediamo nel potere trasformativo dei libri e nella loro capacità di arricchire le nostre vite,
                        ampliare i nostri orizzonti e farci vedere il mondo attraverso prospettive diverse.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Comunità Inclusiva</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Accogliamo lettori di tutti i livelli e background, dai neofiti agli esperti, creando uno spazio
                        sicuro e stimolante dove ogni voce è valorizzata e rispettata.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Cultura Letteraria</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Celebriamo la ricca tradizione letteraria italiana, da Dante a Ferrante, mentre esploriamo opere
                        da tutto il mondo, creando ponti tra culture attraverso le storie.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Scoperta Continua</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Organizziamo eventi diversificati che spaziano dai classici alla letteratura contemporanea,
                        dalla poesia al noir, garantendo sempre nuove scoperte letterarie.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mission Statement */}
            <div className="bg-muted/50 rounded-lg p-8 mt-12">
              <h2 className="text-3xl font-bold mb-4 text-center">La Nostra Missione</h2>
              <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Promuovere l'amore per la lettura attraverso eventi coinvolgenti, discussioni stimolanti e una comunità
                accogliente. Vogliamo essere un faro culturale nella città di Napoli, dove ogni libro diventa
                un'opportunità di crescita personale, ogni discussione un momento di connessione umana, e ogni lettore
                trova il suo posto tra le righe delle storie che amiamo condividere.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Membri Attivi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Eventi Organizzati</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">Libri nella Biblioteca</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Autori Ospitati</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
