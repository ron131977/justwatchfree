// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { PlayCircle } from "lucide-react"
// import { SearchBar } from "@/components/search-bar"

// interface FeaturedDoc {
//   id: string
//   slug: string
//   title: string
//   description: string
//   thumbnailUrl: string
//   category: string
// }

// const featuredDocs: FeaturedDoc[] = [
//   {
//     id: "1",
//     slug: "planet-earth",
//     title: "Planet Earth",
//     description: "Experience the wonders of our planet through breathtaking footage of wildlife and landscapes.",
//     thumbnailUrl: "/images/planet-earth.jpg",
//     category: "Nature",
//   },
//   {
//     id: "2",
//     slug: "the-social-dilemma",
//     title: "The Social Dilemma",
//     description: "Explore how social media is reprogramming civilization with tech experts sounding the alarm.",
//     thumbnailUrl: "/images/social-dilemma.jpg",
//     category: "Technology",
//   },
//   {
//     id: "3",
//     slug: "free-solo",
//     title: "Free Solo",
//     description: "Follow Alex Honnold as he becomes the first person to ever free solo climb Yosemite's El Capitan.",
//     thumbnailUrl: "/images/free-solo.jpg",
//     category: "Adventure",
//   },
// ]

// export function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const currentDoc = featuredDocs[currentIndex]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDocs.length)
//     }, 8000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="relative h-[600px] overflow-hidden rounded-2xl">
//       {/* Background image with gradient overlay */}
//       <div className="absolute inset-0 w-full h-full">
//         <Image
//           src={currentDoc.thumbnailUrl || "/placeholder.svg"}
//           alt={currentDoc.title}
//           fill
//           className="object-cover transition-opacity duration-1000"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
//         <div className="max-w-3xl mb-8">
//           <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/80 text-primary-foreground">
//             Featured Documentary
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentDoc.title}</h1>
//           <p className="text-lg text-gray-200 mb-6">{currentDoc.description}</p>
//           <div className="flex flex-wrap gap-4">
//             <Link href={`/documentary/${currentDoc.slug}`}>
//               <Button size="lg" className="gap-2">
//                 <PlayCircle className="h-5 w-5" />
//                 Watch Now
//               </Button>
//             </Link>
//             <Link href="/documentaries">
//               <Button size="lg" variant="outline" className="bg-black/50 text-white border-white hover:bg-black/70">
//                 Explore More
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Dots navigation */}
//         <div className="flex justify-center space-x-2 mt-auto">
//           {featuredDocs.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentIndex ? "bg-primary scale-125" : "bg-gray-400/50"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Search bar overlay */}
//       <div className="absolute top-8 left-0 right-0 px-8 md:px-12">
//         <SearchBar />
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"
import { SearchBar } from "@/components/search-bar"

interface FeaturedDoc {
  id: string
  slug: string
  title: string
  description: string
  thumbnailUrl: string
  category: string
}

const featuredDocs: FeaturedDoc[] = [
  {
    id: "1",
    slug: "captain-america-brave-new-world-2025",
    title: "Captain America: Brave New World (2025)",
    description: "'Captain America: Brave New World is a 2025 superhero film, based on the Marvel Comics character of the same name.",
    thumbnailUrl: "https://pacificsciencecenter.org/wp-content/uploads/2025/01/cap-america-web-1.jpg",
    category: "Movie",
  },
  {
    id: "2",
    slug: "dabba-cartel-s01",
    title: "Dabba Cartel Season 1 (2025)",
    description: "Five housewives who run a high stakes secret cartel in which style, ambition, love, friendship and betrayal set in the rich 1960s Mumbai.",
    thumbnailUrl: "https://tomindia.s3.ap-south-1.amazonaws.com/prod/post/ogImage/1739186216436_69911b2b667b44d2aeceef17e407e3e3_Dabba-Cartel_Webseries_TomorrowsIndia.jpg",
    category: "Tvshow",
  },
  {
    id: "3",
    slug: "walker-2025",
    title: "Walker (2025)",
    description: "Alexa, a prostitute haunted by her friend's murder, uses herself as bait to find the killer, sleeping with various men in her quest.",
    thumbnailUrl: "https://images.justwatch.com/backdrop/326119035/s640/walker-2025",
    category: "Adult",
  },
  {
    id: "4",
    slug: "reacher-s03-hindi-dubbed-2025",
    title: "रीचर सीजन 03 हिंदी (2025)",
    description: "जैक रीचर एक घुमक्कड़ की तरह रहता है, तथा संयुक्त राज्य अमेरिका में एक शहर से दूसरे शहर घूमता रहता है।",
    thumbnailUrl: "https://www.tvguide.com/a/img/resize/c6d4c07def64a8638a23117ab4156cc39ad66e73/hub/2024/12/06/f8755a4f-451b-4ca1-b57b-e90c5229703d/reachie.jpg?auto=webp&width=1092",
    category: "Hindi-Dubbed",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentDoc = featuredDocs[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredDocs.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[600px] overflow-hidden rounded-2xl">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={currentDoc.thumbnailUrl || "/placeholder.svg"}
          alt={currentDoc.title}
          quality={90}
          fill
          className="object-cover transition-opacity duration-1000"
          priority
          style={{ filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)"     
           }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
        <div className="max-w-3xl mb-8">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/80 text-primary-foreground">
            Latest Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentDoc.title}</h1>
          <p className="text-lg text-gray-200 mb-6">{currentDoc.description}</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`/documentary/${currentDoc.slug}`}>
              <Button size="lg" className="gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Now
              </Button>
            </Link>
            <Link href="/documentaries">
              <Button size="lg" variant="outline" className="bg-black/50 text-white border-white hover:bg-black/70">
                Explore More
              </Button>
            </Link>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center space-x-2 mt-auto">
          {featuredDocs.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-primary scale-125" : "bg-gray-400/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Search bar overlay */}
      <div className="absolute top-8 left-0 right-0 px-8 md:px-12">
        <SearchBar />
      </div>
    </section>
  )
}

