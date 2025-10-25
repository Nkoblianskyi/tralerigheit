import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { books } from "@/lib/books-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookOpen, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BooksPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">La Nostra Biblioteca</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Esplora la nostra collezione curata di capolavori letterari italiani e internazionali, selezionati con
              passione per la nostra comunità.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {books.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                  <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-balance">{book.title}</CardTitle>
                  <CardDescription className="text-base">{book.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">{book.genre}</span>
                      <span>•</span>
                      <span>{book.pages} pagine</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                  <Link href={`/libri/${book.id}`}>
                    <Button variant="outline" className="w-full group bg-transparent">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Scopri di più
                      <ArrowRight className="ml-auto h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
