"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm leading-relaxed">
                Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Continuando a navigare, accetti
                la nostra{" "}
                <Link href="/cookie" className="underline hover:text-primary">
                  Cookie Policy
                </Link>{" "}
                e la nostra{" "}
                <Link href="/privacy" className="underline hover:text-primary">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={declineCookies}>
                Rifiuta
              </Button>
              <Button onClick={acceptCookies}>Accetta</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
