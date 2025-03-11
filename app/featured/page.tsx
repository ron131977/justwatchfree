import type { Metadata } from "next"
import { getFeaturedDocumentaries } from "@/lib/documentaries"
import { DocumentaryCard } from "@/components/documentary-card"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Featured Movies & Tv Show",
  description: "Explore our handpicked selection of featured Movies & Tv Show.",
}

export default async function FeaturedPage() {
  const documentaries = await getFeaturedDocumentaries()

  return (
    <>
       <Script src="/script.js" />
    
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Featured Updates</h1>
      <p className="text-muted-foreground mb-8">Explore our handpicked selection of featured Movies | Tv Show | Adult Condent.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {documentaries.map((documentary) => (
          <DocumentaryCard key={documentary.id} documentary={documentary} featured />
        ))}
      </div>
    </div>
    </>
  )
}

