import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"

const events = [
  {
    title: "Incontro con l'Autore",
    description: "Una serata speciale dedicata alla discussione di romanzi contemporanei con la presenza dell'autore.",
    type: "Presentazione",
    location: "Sede del Club",
  },
  {
    title: "Circolo di Lettura",
    description:
      "Discussione approfondita sui temi e personaggi del libro del mese in un ambiente rilassato e stimolante.",
    type: "Discussione",
    location: "Sede del Club",
  },
  {
    title: "Lezione di Letteratura",
    description:
      "Analisi critica e contestualizzazione storica dei grandi classici della letteratura italiana e mondiale.",
    type: "Lezione",
    location: "Sede del Club",
  },
  {
    title: "Recensioni Condivise",
    description:
      "Sessione aperta dove i membri condividono le loro impressioni sulle ultime letture e scoprono nuovi titoli.",
    type: "Recensione",
    location: "Sede del Club",
  },
]

export function EventsSection() {
  return (
    <section id="eventi" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">I Nostri Eventi</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Partecipa ai nostri eventi letterari e culturali. Ogni incontro è un'opportunità per approfondire,
            condividere e crescere insieme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{event.type}</span>
                </div>
                <CardDescription className="text-base leading-relaxed">{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
