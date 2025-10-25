import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, BookOpen, MessageCircle, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function ComunitaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">La Nostra Comunità</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Unisciti a una comunità vibrante di lettori appassionati che condividono l'amore per la letteratura
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Perché Unirsi al Club</h2>
              <p className="text-lg text-muted-foreground">
                Scopri tutti i vantaggi di far parte della nostra comunità letteraria
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Eventi Esclusivi</CardTitle>
                  <CardDescription>
                    Accesso prioritario a presentazioni di libri, incontri con autori e lezioni di letteratura
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Circoli di Lettura</CardTitle>
                  <CardDescription>
                    Partecipa a discussioni stimolanti e condividi le tue interpretazioni con altri lettori appassionati
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Gruppo Privato</CardTitle>
                  <CardDescription>
                    Accesso al nostro gruppo online dove condividere recensioni, consigli e scoprire nuovi titoli
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Newsletter Mensile</CardTitle>
                  <CardDescription>
                    Ricevi consigli di lettura personalizzati, anteprime di eventi e contenuti esclusivi
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Workshop Creativi</CardTitle>
                  <CardDescription>
                    Partecipa a laboratori di scrittura creativa e analisi letteraria guidati da esperti
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-2">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Ambiente Accogliente</CardTitle>
                  <CardDescription>
                    Uno spazio sicuro e inclusivo dove ogni voce è ascoltata e rispettata
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">200+</div>
                <p className="text-lg text-muted-foreground">Membri Attivi</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <p className="text-lg text-muted-foreground">Eventi all'Anno</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">150+</div>
                <p className="text-lg text-muted-foreground">Libri Discussi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-8 pb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Pronto a Unirti?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Diventa parte della nostra comunità letteraria e inizia il tuo viaggio attraverso le pagine dei grandi
                  capolavori insieme a noi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contatti">
                    <Button size="lg" className="w-full sm:w-auto">
                      Contattaci Ora
                    </Button>
                  </Link>
                  <Link href="/eventi">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                      Scopri gli Eventi
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
