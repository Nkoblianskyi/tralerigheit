import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { books } from "@/lib/books-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, BookOpen, Star } from "lucide-react"

export function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }))
}

export default function BookPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === params.id)

  if (!book) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/libri">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Torna alla biblioteca
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden sticky top-24">
                  <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                    <img
                      src={book.coverImage || "/placeholder.svg"}
                      alt={book.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-3">Dettagli del Libro</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Genere</span>
                            <span className="font-medium">{book.genre}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Pagine</span>
                            <span className="font-medium">{book.pages}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Autore</span>
                            <span className="font-medium">{book.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{book.title}</h1>
                  <p className="text-xl text-muted-foreground mb-2">di {book.author}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                      {book.genre}
                    </span>
                  </div>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h2 className="text-2xl font-semibold">Trama</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">{book.description}</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-5 w-5 text-primary fill-primary" />
                      <h2 className="text-2xl font-semibold">La Nostra Recensione</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg italic">"{book.review}"</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Vuoi discutere questo libro?</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Unisciti ai nostri eventi letterari per condividere le tue impressioni e scoprire nuove
                      prospettive su questo capolavoro.
                    </p>
                    <Link href="/eventi">
                      <Button className="w-full sm:w-auto">Scopri gli Eventi</Button>
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
