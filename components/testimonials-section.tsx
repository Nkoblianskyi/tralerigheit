import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Rossi",
    text: "Tra le Righe ha trasformato il mio modo di leggere. Le discussioni sono sempre stimolanti e ho scoperto autori che non avrei mai conosciuto altrimenti.",
    rating: 5,
  },
  {
    name: "Giuseppe Bianchi",
    text: "Un ambiente accogliente e culturalmente ricco. Gli eventi sono organizzati con cura e la passione per la letteratura è palpabile in ogni incontro.",
    rating: 5,
  },
  {
    name: "Anna Verdi",
    text: "Finalmente ho trovato una comunità di lettori appassionati come me. Le recensioni condivise mi hanno aperto nuovi orizzonti letterari.",
    rating: 5,
  },
  {
    name: "Marco Esposito",
    text: "Le lezioni di letteratura sono eccezionali. Approfondimenti critici che arricchiscono ogni lettura e rendono i classici ancora più affascinanti.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="recensioni" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Cosa Dicono i Nostri Membri</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Le voci della nostra comunità letteraria. Scopri cosa significa far parte di Tra le Righe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
