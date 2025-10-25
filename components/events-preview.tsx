import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { events } from "@/lib/events-data"
import { ArrowRight, MapPin } from "lucide-react"

export function EventsPreview() {
  const featuredEvents = events.slice(0, 3)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">I Nostri Eventi</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Partecipa ai nostri incontri letterari, workshop e presentazioni di libri
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredEvents.map((event) => (
            <Link key={event.id} href={`/eventi/${event.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="aspect-video relative bg-muted">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3">{event.type}</Badge>
                  <h3 className="font-serif text-xl mb-3 text-foreground">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{event.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/eventi">
              Vedi Tutti gli Eventi
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
