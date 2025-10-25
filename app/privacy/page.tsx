import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Torna alla Home
              </Link>
            </Button>
          </div>

          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <p className="text-muted-foreground leading-relaxed">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduzione</h2>
            <p className="leading-relaxed">
              Tra le Righe ("noi", "nostro") rispetta la tua privacy e si impegna a proteggere i tuoi dati personali.
              Questa privacy policy ti informerà su come gestiamo i tuoi dati personali quando visiti il nostro sito web
              e ti informerà sui tuoi diritti alla privacy e su come la legge ti protegge.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Dati che Raccogliamo</h2>
            <p className="leading-relaxed">
              Potremmo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te, tra
              cui:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dati di identità: nome, cognome</li>
              <li>Dati di contatto: indirizzo email, numero di telefono</li>
              <li>Dati tecnici: indirizzo IP, tipo di browser, fuso orario</li>
              <li>Dati di utilizzo: informazioni su come utilizzi il nostro sito web</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Come Utilizziamo i Tuoi Dati</h2>
            <p className="leading-relaxed">
              Utilizzeremo i tuoi dati personali solo quando la legge ce lo consente. Più comunemente, utilizzeremo i
              tuoi dati personali nelle seguenti circostanze:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Per rispondere alle tue richieste di informazioni</li>
              <li>Per inviarti comunicazioni relative agli eventi del club</li>
              <li>Per migliorare il nostro sito web e i nostri servizi</li>
              <li>Per adempiere agli obblighi legali</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sicurezza dei Dati</h2>
            <p className="leading-relaxed">
              Abbiamo messo in atto misure di sicurezza appropriate per impedire che i tuoi dati personali vengano
              accidentalmente persi, utilizzati o accessibili in modo non autorizzato, alterati o divulgati.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. I Tuoi Diritti Legali</h2>
            <p className="leading-relaxed">
              In determinate circostanze, hai diritti ai sensi delle leggi sulla protezione dei dati in relazione ai
              tuoi dati personali, tra cui:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Il diritto di richiedere l'accesso ai tuoi dati personali</li>
              <li>Il diritto di richiedere la correzione dei tuoi dati personali</li>
              <li>Il diritto di richiedere la cancellazione dei tuoi dati personali</li>
              <li>Il diritto di opporsi al trattamento dei tuoi dati personali</li>
              <li>Il diritto alla portabilità dei dati</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contattaci</h2>
            <p className="leading-relaxed">
              Se hai domande su questa privacy policy o sulle nostre pratiche di privacy, contattaci a:
            </p>
            <p className="leading-relaxed">
              Email: info@tralerigheit.com
              <br />
              Telefono: +39 081 3749 2856
              <br />
              Indirizzo: Centro Commerciale Campania, Via Circumvallazione Esterna, 80013 Casalnuovo di Napoli, NA
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
