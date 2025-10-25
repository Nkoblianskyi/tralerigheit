import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { events } from "@/lib/events-data"
import Link from "next/link"
import Image from "next/image"

export default function EventiPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">I Nostri Eventi</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Partecipa ai nostri eventi letterari e culturali. Ogni incontro è un'opportunità per approfondire,
              condividere e crescere insieme.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-t-lg relative">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                      {event.type}
                    </span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Evento ricorrente</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Aperto a tutti i membri</span>
                    </div>
                  </div>
                  <Link href={`/eventi/${event.id}`}>
                    <Button variant="outline" className="w-full group bg-transparent">
                      Scopri di più
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
