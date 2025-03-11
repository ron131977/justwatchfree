// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { getFeaturedDocumentaries, getRecentDocumentaries } from "@/lib/documentaries"
// import { DocumentaryCard } from "@/components/documentary-card"
// import { CategoryList } from "@/components/category-list"
// import { HeroSection } from "@/components/hero-section"
// import Script from "next/script"

// export default async function Home() {
//   const featuredDocumentaries = await getFeaturedDocumentaries(4)
//   const recentDocumentaries = await getRecentDocumentaries(12)

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "name": "JustWatch Free",
//     "url": "https://justwatchfree.vercel.app",
//     "description": "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     "keywords": [
//       "justwatch",
//       "just watch free",
//       "justwatch free movies",
//       "justwatch .com free",
//       "just watch movies online free",
//       "movies",
//       "TV series",
//       "video",
//       "free movies",
//       "free TV series",
//       "watch movie online",
//       "watch TV series online",
//       "free movie streaming",
//       "free TV series streaming",
//       "video streaming",
//       "entertainment",
//       "watch online",
//     ],
//     "publisher": {
//       "@type": "Organization",
//       "name": "JustWatch Free",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://justwatchfree.vercel.app/favicon.ico"
//       }
//     },
//     "author": {
//       "@type": "Organization",
//       "name": "JustWatch Free Team"
//     },
//     "image": {
//       "@type": "ImageObject",
//       "url": "https://justwatchfree.vercel.app/og_image.jpg",
//       "width": 1200,
//       "height": 630,
//       "caption": "JustWatch Free"
//     },
//     "sameAs": [
//       "https://www.facebook.com/justwatchfree",
//       "https://twitter.com/bestdocs",
//       "https://www.instagram.com/justwatchfree"
//     ],
//     "potentialAction": {
//       "@type": "SearchAction",
//       "target": "https://justwatchfree.vercel.app/search?q={search_term_string}",
//       "query-input": "required name=search_term_string"
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />

//       <HeroSection />

//       <section className="my-12">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-bold">Update Movies</h2>
//           <Link href="/documentaries">
//             <Button variant="outline">View All</Button>
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuredDocumentaries.map((documentary) => (
//             <DocumentaryCard key={documentary.id} documentary={documentary} />
//           ))}
//         </div>
//       </section>

//       <section className="my-12 bg-muted rounded-xl p-8">
//         <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
//         <CategoryList />
//       </section>

//       <section className="my-12">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-bold">Recently Added</h2>
//           <Link href="/documentaries">
//             <Button variant="outline">View All</Button>
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {recentDocumentaries.map((documentary) => (
//             <DocumentaryCard key={documentary.id} documentary={documentary} />
//           ))}
//         </div>
//       </section>

//       <section className="my-12 bg-primary/5 rounded-xl p-8 text-center">
//         <h2 className="text-3xl font-bold mb-4">Discover the World Through Entertainment</h2>
//         <p className="text-lg mb-6 max-w-3xl mx-auto">
//           Expand your knowledge and perspective with our curated collection of thought-provoking Movies | Tv Shows | Adult.
//         </p>
//         <Link href="/documentaries">
//           <Button size="lg">Explore All Movies | Tv Shows | Adult</Button>
//         </Link>
//       </section>
//     </div>
//   )
// }














































// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { getFeaturedDocumentaries, getRecentDocumentaries } from "@/lib/documentaries"
// import { DocumentaryCard } from "@/components/documentary-card"
// import { CategoryList } from "@/components/category-list"
// import { HeroSection } from "@/components/hero-section"
// import Script from "next/script"

// // Helper function to shuffle an array (Fisher-Yates algorithm)
// function shuffleArray(array: any[]) {
//   const shuffled = [...array]
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
//   }
//   return shuffled
// }

// export default async function Home() {
//   const featuredDocumentaries = await getFeaturedDocumentaries(4)
//   const recentDocumentariesRaw = await getRecentDocumentaries(12)

//   // Randomize the recent documentaries
//   const recentDocumentaries = shuffleArray(recentDocumentariesRaw)

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     name: "JustWatch Free",
//     url: "https://justwatchfree.vercel.app",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     keywords: [
//       "justwatch",
//       "just watch free",
//       "justwatch free movies",
//       "justwatch .com free",
//       "just watch movies online free",
//       "movies",
//       "TV series",
//       "video",
//       "free movies",
//       "free TV series",
//       "watch movie online",
//       "watch TV series online",
//       "free movie streaming",
//       "free TV series streaming",
//       "video streaming",
//       "entertainment",
//       "watch online",
//     ],
//     publisher: {
//       "@type": "Organization",
//       name: "JustWatch Free",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://justwatchfree.vercel.app/favicon.ico",
//       },
//     },
//     author: {
//       "@type": "Organization",
//       name: "JustWatch Free Team",
//     },
//     image: {
//       "@type": "ImageObject",
//       url: "https://justwatchfree.vercel.app/og_image.jpg",
//       width: 1200,
//       height: 630,
//       caption: "JustWatch Free",
//     },
//     sameAs: [
//       "https://www.facebook.com/justwatchfree",
//       "https://twitter.com/bestdocs",
//       "https://www.instagram.com/justwatchfree",
//     ],
//     potentialAction: {
//       "@type": "SearchAction",
//       target: "https://justwatchfree.vercel.app/search?q={search_term_string}",
//       "query-input": "required name=search_term_string",
//     },
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

//       <HeroSection />

//       <section className="my-12">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-bold">Update Movies</h2>
//           <Link href="/documentaries">
//             <Button variant="outline">View All</Button>
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuredDocumentaries.map((documentary) => (
//             <DocumentaryCard key={documentary.id} documentary={documentary} />
//           ))}
//         </div>
//       </section>

//       <section className="my-12 bg-muted rounded-xl p-8">
//         <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
//         <CategoryList />
//       </section>

//       <section className="my-12">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-bold">Recently Added</h2>
//           <Link href="/documentaries">
//             <Button variant="outline">View All</Button>
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {recentDocumentaries.map((documentary) => (
//             <DocumentaryCard key={documentary.id} documentary={documentary} />
//           ))}
//         </div>
//       </section>

//       <section className="my-12 bg-primary/5 rounded-xl p-8 text-center">
//         <h2 className="text-3xl font-bold mb-4">Discover the World Through Entertainment</h2>
//         <p className="text-lg mb-6 max-w-3xl mx-auto">
//           Expand your knowledge and perspective with our curated collection of thought-provoking Movies | Tv Shows |
//           Adult.
//         </p>
//         <Link href="/documentaries">
//           <Button size="lg">Explore All Movies | Tv Shows | Adult</Button>
//         </Link>
//       </section>
//     </div>
//   )
// }





//GOOD ONE DISPLAY

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { getFeaturedDocumentaries, getRecentDocumentaries } from "@/lib/documentaries"
// import { DocumentaryCard } from "@/components/documentary-card"
// import { CategoryList } from "@/components/category-list"
// import { HeroSection } from "@/components/hero-section"
// import Script from "next/script"

// // Helper function to get random items from an array
// function getRandomItems(array: any[], count: number) {
//   const shuffled = [...array]
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
//   }
//   return shuffled.slice(0, count)
// }

// // Function to get random documentaries
// async function getRandomDocumentaries(count: number) {
//   // Get a larger pool of documentaries (adjust the number as needed)
//   const allDocumentaries = await getRecentDocumentaries(50) // Get more documentaries to have a larger pool

//   // Randomly select 'count' documentaries from the pool
//   return getRandomItems(allDocumentaries, count)
// }

// export default async function Home() {
//   const featuredDocumentaries = await getFeaturedDocumentaries(4)
//   // Get random documentaries instead of just the most recent ones
//   const randomDocumentaries = await getRandomDocumentaries(12)

//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     name: "JustWatch Free",
//     url: "https://justwatchfree.vercel.app",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     keywords: [
//       "justwatch",
//       "just watch free",
//       "justwatch free movies",
//       "justwatch .com free",
//       "just watch movies online free",
//       "movies",
//       "TV series",
//       "video",
//       "free movies",
//       "free TV series",
//       "watch movie online",
//       "watch TV series online",
//       "free movie streaming",
//       "free TV series streaming",
//       "video streaming",
//       "entertainment",
//       "watch online",
//     ],
//     publisher: {
//       "@type": "Organization",
//       name: "JustWatch Free",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://justwatchfree.vercel.app/favicon.ico",
//       },
//     },
//     author: {
//       "@type": "Organization",
//       name: "JustWatch Free Team",
//     },
//     image: {
//       "@type": "ImageObject",
//       url: "https://justwatchfree.vercel.app/og_image.jpg",
//       width: 1200,
//       height: 630,
//       caption: "JustWatch Free",
//     },
//     sameAs: [
//       "https://www.facebook.com/justwatchfree",
//       "https://twitter.com/bestdocs",
//       "https://www.instagram.com/justwatchfree",
//     ],
//     potentialAction: {
//       "@type": "SearchAction",
//       target: "https://justwatchfree.vercel.app/search?q={search_term_string}",
//       "query-input": "required name=search_term_string",
//     },
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

//       <HeroSection />

//       <section className="my-12">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-bold">Update Movies</h2>
//           <Link href="/documentaries">
//             <Button variant="outline">View All</Button>
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuredDocumentaries.map((documentary) => (
//             <DocumentaryCard key={documentary.id} documentary={documentary} />
//           ))}
//         </div>
//       </section>

//       <section className="my-12 bg-muted rounded-xl p-8">
//         <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
//         <CategoryList />
//       </section>

//       <section className="my-12">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-bold">Recently Added</h2>
//           <Link href="/documentaries">
//             <Button variant="outline">View All</Button>
//           </Link>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {randomDocumentaries.map((documentary) => (
//             <DocumentaryCard key={documentary.id} documentary={documentary} />
//           ))}
//         </div>
//       </section>

//       <section className="my-12 bg-primary/5 rounded-xl p-8 text-center">
//         <h2 className="text-3xl font-bold mb-4">Discover the World Through Entertainment</h2>
//         <p className="text-lg mb-6 max-w-3xl mx-auto">
//           Expand your knowledge and perspective with our curated collection of thought-provoking Movies | Tv Shows |
//           Adult.
//         </p>
//         <Link href="/documentaries">
//           <Button size="lg">Explore All Movies | Tv Shows | Adult</Button>
//         </Link>
//       </section>
//     </div>
//   )
// }



import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getFeaturedDocumentaries, getRecentDocumentaries } from "@/lib/documentaries"
import { DocumentaryCard } from "@/components/documentary-card"
import { CategoryList } from "@/components/category-list"
import { HeroSection } from "@/components/hero-section"
import Script from "next/script"

// Helper function to get random items from an array
function getRandomItems(array: any[], count: number) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

// Function to get random documentaries from each category
async function getRandomDocumentariesByCategory(countPerCategory: number) {
  // Get a larger pool of documentaries
  const allDocumentaries = await getRecentDocumentaries(100) // Get more documentaries to have a larger pool

  // Group documentaries by category
  const documentariesByCategory: Record<string, any[]> = {}

  allDocumentaries.forEach((doc) => {
    // Assuming each documentary has a 'category' property
    const category = doc.category || "uncategorized"

    if (!documentariesByCategory[category]) {
      documentariesByCategory[category] = []
    }

    documentariesByCategory[category].push(doc)
  })

  // Get the category names (assuming there are 4 categories)
  const categories = Object.keys(documentariesByCategory)

  // Randomly select documentaries from each category
  let randomDocumentaries: any[] = []

  categories.forEach((category) => {
    const docsInCategory = documentariesByCategory[category]
    const randomDocsFromCategory = getRandomItems(docsInCategory, countPerCategory)
    randomDocumentaries = [...randomDocumentaries, ...randomDocsFromCategory]
  })

  return randomDocumentaries
}

export default async function Home() {
  const featuredDocumentaries = await getFeaturedDocumentaries(4)
  // Get 3 random documentaries from each of the 4 categories
  const randomDocumentaries = await getRandomDocumentariesByCategory(4)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JustWatch Free",
    url: "https://justwatchfree.vercel.app",
    description:
      "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
    keywords: [
      "justwatch",
      "just watch free",
      "justwatch free movies",
      "justwatch .com free",
      "just watch movies online free",
      "movies",
      "TV series",
      "video",
      "free movies",
      "free TV series",
      "watch movie online",
      "watch TV series online",
      "free movie streaming",
      "free TV series streaming",
      "video streaming",
      "entertainment",
      "watch online",
    ],
    publisher: {
      "@type": "Organization",
      name: "JustWatch Free",
      logo: {
        "@type": "ImageObject",
        url: "https://justwatchfree.vercel.app/favicon.ico",
      },
    },
    author: {
      "@type": "Organization",
      name: "JustWatch Free Team",
    },
    image: {
      "@type": "ImageObject",
      url: "https://justwatchfree.vercel.app/og_image.jpg",
      width: 1200,
      height: 630,
      caption: "JustWatch Free",
    },
    sameAs: [
      "https://www.facebook.com/justwatchfree",
      "https://twitter.com/bestdocs",
      "https://www.instagram.com/justwatchfree",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://justwatchfree.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {/* Clicky Analytics Scripts */}
      {/* <Script async data-id="101480127" src="//static.getclicky.com/js" />
      <Script async data-id="101480127" src="/69e4fc5642f327d1b.js" /> */}
      <HeroSection />

      <section className="my-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Latest Updates</h2>
          <Link href="/documentaries">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDocumentaries.map((documentary) => (
            <DocumentaryCard key={documentary.id} documentary={documentary} />
          ))}
        </div>
      </section>

      <section className="my-12 bg-muted rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6">Browse by Category</h2>
        <CategoryList />
      </section>

      <section className="my-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Recently Added</h2>
          <Link href="/documentaries">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomDocumentaries.map((documentary) => (
            <DocumentaryCard key={documentary.id} documentary={documentary} />
          ))}
        </div>
      </section>

      <section className="my-12 bg-primary/5 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Discover the World Through Entertainment</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">
          Expand your knowledge and perspective with our curated collection of thought-provoking Movies | Tv Shows |
          Adult.
        </p>
        <Link href="/documentaries">
          <Button size="lg">Explore All Movies | Tv Shows | Adult</Button>
        </Link>
      </section>
    </div>
  )
}

