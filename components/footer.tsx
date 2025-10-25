import Link from "next/link"
import Image from "next/image"


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
                <span className="font-semibold text-lg">Tra le Righe</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Una comunità appassionata dedicata alla letteratura e alla cultura.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/chi-siamo"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/eventi"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Eventi
                </Link>
              </li>
              <li>
                <Link
                  href="/libri"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Libri
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informazioni</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>


        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Tra le Righe. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
