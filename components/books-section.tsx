import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { books } from "@/lib/books-data"
import { BookOpen } from "lucide-react"

export function BooksSection() {
  const featuredBooks = books.slice(0, 3)

  return (
    <section id="libri" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">La Nostra Biblioteca</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Esplora la nostra selezione curata di libri. Ogni titolo è accompagnato da recensioni approfondite e
            discussioni stimolanti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                <img
                  src={book.coverImage || "/placeholder.svg"}
                  alt={book.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-balance">{book.title}</CardTitle>
                <CardDescription className="text-base">{book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{book.description}</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={`/libri/${book.id}`}>
                    <BookOpen className="h-4 w-4 mr-2" />
                    Leggi di più
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/libri">Vedi Tutti i Libri</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
