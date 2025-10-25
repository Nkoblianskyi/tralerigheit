import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function CookiePage() {
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
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

            <p className="text-muted-foreground leading-relaxed">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Cosa Sono i Cookie</h2>
            <p className="leading-relaxed">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo computer o dispositivo mobile quando
              visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web, o per farli funzionare in
              modo più efficiente, nonché per fornire informazioni ai proprietari del sito.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Come Utilizziamo i Cookie</h2>
            <p className="leading-relaxed">
              Utilizziamo i cookie per diversi motivi dettagliati di seguito. Purtroppo, nella maggior parte dei casi,
              non esistono opzioni standard del settore per disabilitare i cookie senza disabilitare completamente le
              funzionalità e le caratteristiche che aggiungono a questo sito.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Tipi di Cookie che Utilizziamo</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Essenziali</h3>
            <p className="leading-relaxed">
              Questi cookie sono necessari per il funzionamento del sito web e non possono essere disattivati nei nostri
              sistemi. Di solito vengono impostati solo in risposta ad azioni da te effettuate che equivalgono a una
              richiesta di servizi, come l'impostazione delle tue preferenze sulla privacy, l'accesso o la compilazione
              di moduli.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Analitici</h3>
            <p className="leading-relaxed">
              Questi cookie ci consentono di contare le visite e le fonti di traffico in modo da poter misurare e
              migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e
              vedere come i visitatori si muovono nel sito.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Cookie di Funzionalità</h3>
            <p className="leading-relaxed">
              Questi cookie consentono al sito web di fornire funzionalità e personalizzazione avanzate. Possono essere
              impostati da noi o da fornitori terzi i cui servizi abbiamo aggiunto alle nostre pagine.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Gestione dei Cookie</h2>
            <p className="leading-relaxed">
              Puoi impedire l'impostazione dei cookie regolando le impostazioni sul tuo browser. Tieni presente che la
              disabilitazione dei cookie influenzerà la funzionalità di questo e di molti altri siti web che visiti. La
              disabilitazione dei cookie di solito comporterà anche la disabilitazione di determinate funzionalità e
              caratteristiche di questo sito.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookie di Terze Parti</h2>
            <p className="leading-relaxed">
              In alcuni casi speciali utilizziamo anche cookie forniti da terze parti fidate. La seguente sezione
              descrive in dettaglio quali cookie di terze parti potresti incontrare attraverso questo sito:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Google Analytics: uno degli strumenti di analisi più diffusi e affidabili sul web per aiutarci a capire
                come utilizzi il sito
              </li>
              <li>Cookie dei social media: per consentirti di condividere contenuti con i tuoi amici e la tua rete</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Ulteriori Informazioni</h2>
            <p className="leading-relaxed">
              Speriamo che questo abbia chiarito le cose per te e, come accennato in precedenza, se c'è qualcosa di cui
              non sei sicuro se hai bisogno o meno, di solito è più sicuro lasciare i cookie abilitati nel caso in cui
              interagiscano con una delle funzionalità che utilizzi sul nostro sito.
            </p>

            <p className="leading-relaxed mt-6">Per ulteriori informazioni, contattaci a: info@tralerigheit.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
