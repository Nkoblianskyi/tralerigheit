import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { books } from "@/lib/books-data"
import { ArrowRight } from "lucide-react"

export function BooksPreview() {
  const featuredBooks = books.slice(0, 3)

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">La Nostra Biblioteca</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Esplora la nostra collezione curata di capolavori letterari italiani e internazionali
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredBooks.map((book) => (
            <Link key={book.id} href={`/libri/${book.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="aspect-[3/4] relative bg-muted">
                  <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl mb-2 text-foreground">{book.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{book.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/libri">
              Vedi Tutti i Libri
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
