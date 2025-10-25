export interface Event {
  id: string
  title: string
  description: string
  fullDescription: string
  type: string
  location: string
  image: string
  highlights: string[]
}

export const events: Event[] = [
  {
    id: "incontro-autore",
    title: "Incontro con l'Autore",
    description: "Una serata speciale dedicata alla discussione di romanzi contemporanei con la presenza dell'autore.",
    fullDescription:
      "Un'occasione unica per incontrare gli autori dei libri che amiamo. Durante questi eventi speciali, avrai l'opportunità di ascoltare direttamente dalla voce degli scrittori le storie dietro le loro opere, le ispirazioni e il processo creativo. Dopo la presentazione, ci sarà tempo per domande, discussioni e per far firmare le tue copie. Questi incontri creano un ponte diretto tra lettori e autori, rendendo l'esperienza letteraria ancora più personale e significativa.",
    type: "Presentazione",
    location: "Sede del Club",
    image: "/evento-incontro-autore.jpg",
    highlights: [
      "Presentazione diretta dell'autore",
      "Sessione di domande e risposte",
      "Firma copie",
      "Aperitivo letterario",
    ],
  },
  {
    id: "circolo-lettura",
    title: "Circolo di Lettura",
    description:
      "Discussione approfondita sui temi e personaggi del libro del mese in un ambiente rilassato e stimolante.",
    fullDescription:
      "Il cuore pulsante del nostro club. Ogni mese selezioniamo un libro da leggere insieme e ci incontriamo per discuterne in profondità. Analizziamo i personaggi, i temi, lo stile narrativo e condividiamo le nostre interpretazioni personali. Questi incontri sono moderati da un facilitatore esperto che guida la conversazione, assicurando che tutti abbiano l'opportunità di esprimere le proprie opinioni. È un'esperienza arricchente che trasforma la lettura solitaria in un'avventura condivisa.",
    type: "Discussione",
    location: "Sede del Club",
    image: "/evento-circolo-lettura.jpg",
    highlights: [
      "Discussione moderata",
      "Analisi approfondita dei temi",
      "Condivisione di interpretazioni",
      "Ambiente accogliente e rispettoso",
    ],
  },
  {
    id: "lezione-letteratura",
    title: "Lezione di Letteratura",
    description:
      "Analisi critica e contestualizzazione storica dei grandi classici della letteratura italiana e mondiale.",
    fullDescription:
      "Approfondimenti culturali tenuti da esperti di letteratura, professori universitari e critici letterari. Queste lezioni offrono una comprensione più profonda dei movimenti letterari, del contesto storico e culturale delle opere, e delle tecniche narrative utilizzate dai grandi maestri. Ogni lezione è strutturata per essere accessibile sia ai neofiti che agli appassionati più esperti, con materiali di supporto e bibliografia consigliata per chi vuole approfondire ulteriormente.",
    type: "Lezione",
    location: "Sede del Club",
    image: "/evento-lezione-letteratura.jpg",
    highlights: [
      "Docenti qualificati",
      "Analisi critica approfondita",
      "Contesto storico e culturale",
      "Materiali didattici inclusi",
    ],
  },
  {
    id: "recensioni-condivise",
    title: "Recensioni Condivise",
    description:
      "Sessione aperta dove i membri condividono le loro impressioni sulle ultime letture e scoprono nuovi titoli.",
    fullDescription:
      "Un incontro informale e dinamico dove ogni membro può presentare brevemente un libro che ha letto recentemente. È l'occasione perfetta per scoprire nuovi titoli, generi che non avresti mai considerato, e per ampliare la tua lista di lettura. Questi eventi sono particolarmente vivaci e offrono una panoramica diversificata della letteratura contemporanea e classica. Spesso nascono discussioni spontanee e si formano gruppi di lettura tematici.",
    type: "Recensione",
    location: "Sede del Club",
    image: "/evento-recensioni-condivise.jpg",
    highlights: [
      "Presentazioni brevi dei membri",
      "Scoperta di nuovi titoli",
      "Atmosfera informale",
      "Scambio di raccomandazioni",
    ],
  },
  {
    id: "workshop-scrittura",
    title: "Workshop di Scrittura Creativa",
    description: "Laboratori pratici per sviluppare le tue capacità di scrittura guidati da autori professionisti.",
    fullDescription:
      "Per chi non si accontenta solo di leggere ma vuole anche scrivere. I nostri workshop di scrittura creativa sono condotti da autori pubblicati e offrono esercizi pratici, tecniche narrative, e feedback costruttivo sui tuoi testi. Esploriamo diversi generi letterari, dalla narrativa breve alla poesia, dal memoir al romanzo. Ogni partecipante ha l'opportunità di condividere i propri lavori in un ambiente supportivo e ricevere consigli per migliorare.",
    type: "Workshop",
    location: "Sede del Club",
    image: "/evento-workshop-scrittura.jpg",
    highlights: [
      "Esercizi di scrittura guidati",
      "Feedback personalizzato",
      "Tecniche narrative professionali",
      "Gruppo di supporto tra scrittori",
    ],
  },
  {
    id: "cinema-letteratura",
    title: "Dal Libro al Film",
    description: "Proiezioni di adattamenti cinematografici seguiti da discussioni comparative con le opere originali.",
    fullDescription:
      "Un evento che unisce due forme d'arte: letteratura e cinema. Proiettiamo film tratti da opere letterarie e poi discutiamo le differenze e le somiglianze tra libro e film. Analizziamo le scelte registiche, cosa è stato mantenuto o modificato, e come la narrazione visiva si confronta con quella scritta. Questi eventi offrono una prospettiva unica su come le storie possono essere raccontate attraverso media diversi.",
    type: "Proiezione",
    location: "Sede del Club",
    image: "/evento-cinema-letteratura.jpg",
    highlights: [
      "Proiezione film completo",
      "Discussione comparativa",
      "Analisi delle scelte registiche",
      "Popcorn e bevande inclusi",
    ],
  },
]
