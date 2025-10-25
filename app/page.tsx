import { Hero } from "@/components/hero"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { AboutPreview } from "@/components/about-preview"
import { BooksPreview } from "@/components/books-preview"
import { EventsPreview } from "@/components/events-preview"
import { CommunityPreview } from "@/components/community-preview"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutPreview />
      <BooksPreview />
      <EventsPreview />
      <CommunityPreview />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
