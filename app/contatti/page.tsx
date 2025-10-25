"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactSuccessDialog } from "@/components/contact-success-dialog"
import { events } from "@/lib/events-data"

export default function ContattiPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    setIsOpen(true)
    setFormData({ name: "", email: "", event: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Contattaci</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hai domande o vuoi unirti al nostro club? Siamo qui per aiutarti. Compila il modulo o vieni a trovarci.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Invia un Messaggio</CardTitle>
                <CardDescription>Compila il modulo e ti risponderemo al più presto</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Il tuo nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tua@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event">Evento di Interesse (Opzionale)</Label>
                    <Select
                      value={formData.event}
                      onValueChange={(value) => setFormData({ ...formData, event: value })}
                    >
                      <SelectTrigger id="event">
                        <SelectValue placeholder="Seleziona un evento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="generale">Informazioni Generali</SelectItem>
                        {events.map((event) => (
                          <SelectItem key={event.id} value={event.id}>
                            {event.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio</Label>
                    <Textarea
                      id="message"
                      placeholder="Scrivi il tuo messaggio..."
                      className="resize-none h-32"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informazioni di Contatto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Indirizzo</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Centro Commerciale Campania
                        <br />
                        Via Circumvallazione Esterna
                        <br />
                        80013 Casalnuovo di Napoli, NA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Telefono</p>
                      <p className="text-muted-foreground">+39 081 3749 2856</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">info@tralerigheit.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Orari di Apertura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunedì - Venerdì</span>
                      <span className="font-semibold">15:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sabato</span>
                      <span className="font-semibold">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domenica</span>
                      <span className="font-semibold">Chiuso</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <ContactSuccessDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Footer />
    </main>
  )
}
