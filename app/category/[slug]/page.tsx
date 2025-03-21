import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDocumentariesByCategory } from '@/lib/documentaries'
import { DocumentaryCard } from '@/components/documentary-card'
import Script from "next/script"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)

  return {
    title: `${category} Movies | Tv Show | Adult`,
    description: `Explore our collection of ${category.toLowerCase()} Movies | Tv Show | Adult.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  const documentaries = await getDocumentariesByCategory(categoryName)

  if (documentaries.length === 0) {
    notFound()
  }

  return (
    <>
       <Script src="/script.js" />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryName} Content.</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {documentaries.map((documentary) => (
          <DocumentaryCard key={documentary.id} documentary={documentary} />
        ))}
      </div>
    </div>
    </>
  )
}
