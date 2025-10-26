import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, ArrowLeft, CheckCircle } from "lucide-react"
import { events } from "@/lib/events-data"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }))
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const event = events.find((e) => e.id === id)

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/eventi">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Torna agli eventi
              </Button>
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm bg-primary/10 text-primary px-4 py-1.5 rounded-full">{event.type}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{event.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{event.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">Descrizione dell'Evento</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{event.fullDescription}</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">Punti Salienti</h2>
                  <div className="space-y-3">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div>
                      <h3 className="font-semibold mb-3">Dettagli Evento</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Quando</p>
                            <p className="text-muted-foreground">Evento ricorrente</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Dove</p>
                            <p className="text-muted-foreground">{event.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Partecipazione</p>
                            <p className="text-muted-foreground">Aperto a tutti i membri</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3">Interessato?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Contattaci per maggiori informazioni su questo evento e per confermare la tua partecipazione.
                    </p>
                    <Link href="/contatti">
                      <Button className="w-full">Contattaci</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
