export interface Book {
  id: string
  title: string
  author: string
  coverImage: string
  description: string
  review: string
  genre: string
  pages: number
}

export const books: Book[] = [
  {
    id: "1",
    title: "Il Nome della Rosa",
    author: "Umberto Eco",
    coverImage: "/il-nome-della-rosa-cover.jpg",
    description:
      "Un romanzo storico ambientato in un monastero benedettino nel 1327, dove una serie di misteriosi omicidi sconvolge la comunità monastica.",
    review:
      "Un capolavoro della letteratura italiana che unisce mistero, filosofia e storia medievale in un intreccio magistrale. Eco dimostra una profonda erudizione creando un'opera che è allo stesso tempo un giallo avvincente e una riflessione sulla conoscenza.",
    genre: "Romanzo storico",
    pages: 503,
  },
  {
    id: "2",
    title: "La Coscienza di Zeno",
    author: "Italo Svevo",
    coverImage: "/la-coscienza-di-zeno-cover.jpg",
    description:
      "Le memorie di Zeno Cosini, scritte su consiglio del suo psicanalista, raccontano la sua vita, le sue nevrosi e i suoi tentativi di smettere di fumare.",
    review:
      "Un'opera fondamentale del modernismo italiano che esplora con ironia e profondità la psiche umana. Svevo crea un protagonista indimenticabile, inaffidabile e profondamente umano.",
    genre: "Romanzo psicologico",
    pages: 437,
  },
  {
    id: "3",
    title: "Se Questo è un Uomo",
    author: "Primo Levi",
    coverImage: "/se-questo-e-un-uomo-cover.jpg",
    description:
      "La testimonianza diretta di Primo Levi sulla sua deportazione e prigionia ad Auschwitz durante la Seconda Guerra Mondiale.",
    review:
      "Una testimonianza essenziale e straziante che mantiene una dignità letteraria straordinaria. Levi racconta l'orrore con lucidità e umanità, creando un documento storico e letterario di inestimabile valore.",
    genre: "Memoir",
    pages: 174,
  },
  {
    id: "4",
    title: "Il Gattopardo",
    author: "Giuseppe Tomasi di Lampedusa",
    coverImage: "/il-gattopardo-cover.jpg",
    description:
      "La storia del Principe di Salina e della sua famiglia aristocratica durante il Risorgimento italiano e l'unificazione della Sicilia.",
    review:
      "Un affresco magnifico della Sicilia in trasformazione. Lampedusa cattura con eleganza e malinconia il tramonto di un'epoca, creando personaggi indimenticabili e riflessioni profonde sul cambiamento.",
    genre: "Romanzo storico",
    pages: 286,
  },
  {
    id: "5",
    title: "L'Amica Geniale",
    author: "Elena Ferrante",
    coverImage: "/l-amica-geniale-cover.jpg",
    description:
      "La storia dell'amicizia intensa e complessa tra Elena e Lila, due ragazze cresciute in un quartiere povero di Napoli negli anni '50.",
    review:
      "Un romanzo potente che esplora l'amicizia femminile, la classe sociale e l'ambizione con una prosa diretta e coinvolgente. Ferrante crea un mondo vivido e personaggi di straordinaria complessità.",
    genre: "Romanzo contemporaneo",
    pages: 331,
  },
  {
    id: "6",
    title: "Cent'Anni di Solitudine",
    author: "Gabriel García Márquez",
    coverImage: "/cent-anni-di-solitudine-cover.jpg",
    description:
      "La saga della famiglia Buendía attraverso sette generazioni nella città immaginaria di Macondo, in Colombia.",
    review:
      "Un capolavoro del realismo magico che ha ridefinito la narrativa latinoamericana. Márquez intreccia storia, mito e realtà in un'opera di portata epica e bellezza straordinaria.",
    genre: "Realismo magico",
    pages: 417,
  },
]
