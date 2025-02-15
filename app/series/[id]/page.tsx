// import type { Metadata } from "next"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { VideoGrid } from "@/components/video-grid"
// import Link from "next/link"
// import Image from "next/image"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findSeries(id: string) {
//   return superdata.series.find((s) => s.id === id)
// }

// function getRecommendedSeries(currentSeriesId: string, limit = 4) {
//   return superdata.series.filter((s) => s.id !== currentSeriesId).slice(0, limit)
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const series = findSeries(params.id)

//   if (!series) {
//     return {
//       title: "Series Not Found",
//       description: "The requested series could not be found.",
//     }
//   }

//   return {
//     title: series.title,
//     description: series.description,
//     openGraph: {
//       title: series.title,
//       description: series.description,
//       type: "video.movie",
//     },
//   }
// }

// export default function SeriesPage({ params }: Props) {
//   const series = findSeries(params.id)

//   if (!series) {
//     notFound()
//   }

//   const recommendedSeries = getRecommendedSeries(series.id)

//   return (
//     <>
//       <div className="container py-6 justify-center items-center ml-2"> 
//       <h1 className="text-3xl font-bold mb-4 ml-2">{series.title}</h1>
//       <p className="text-muted-foreground mb-6 ml-2">{series.description}</p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-2">
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-semibold mb-4 ml-2">Episodes</h2>
//           <VideoGrid
//             videos={series.episodes.map((ep) => ({
//               ...ep,
//               seriesTitle: series.title,
//               seriesId: series.id,
//             }))}
//           />
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Recommended Series</h2>
//           <div className="space-y-4">
//             {recommendedSeries.map((s) => (
//               <Link key={s.id} href={`/video/${s.id}`} className="block group">
//                 <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
//                   <Image src={s.thumbnail || "/placeholder.svg"} alt={s.title} layout="fill" objectFit="cover" />
//                 </div>
//                 <h3 className="font-medium group-hover:text-primary">{s.title}</h3>
//                 <p className="text-sm text-muted-foreground">{s.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     </>

//   )
// }




// import { Metadata } from "next"
// import superdata from "@/data/superdata.json"

// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   const series = superdata.series.find((s) => s.id === params.id)

//   if (!series) {
//     return {
//       title: "Series Not Found",
//       description: "The requested series could not be found.",
//     }
//   }

//   return {
//     title: series.title,
//     description: series.description,
//     openGraph: {
//       title: series.title,
//       description: series.description,
//       type: "video.movie", // or type: "series" if you prefer
//     },
//   }
// }















// "use client"

// import { useState, useEffect } from "react"
// import { notFound } from "next/navigation"
// import { VideoPlayer } from "@/components/video-player"
// import { VideoGrid } from "@/components/video-grid"
// import superdata from "@/data/superdata.json"
// import Link from "next/link"
// import Image from "next/image"
// import { StructuredData } from "@/components/structured-data"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findVideo(id: string) {
//   for (const series of superdata.series) {
//     const episode = series.episodes.find((ep) => ep.id === id)
//     if (episode) return { ...episode, type: "series", seriesId: series.id, seriesTitle: series.title }
//   }

//   const video = superdata.videos.find((v) => v.id === id)
//   if (video) return { ...video, type: "movie" }

//   return null
// }

// function getOtherEpisodes(currentVideo: ReturnType<typeof findVideo>) {
//   if (currentVideo?.type !== "series") return []
//   const currentSeries = superdata.series.find((s) => s.id === currentVideo.seriesId)
//   return currentSeries?.episodes.filter((ep) => ep.id !== currentVideo.id) || []
// }

// function getRecommendedSeries(currentSeriesId: string, limit = 500) {
//   return superdata.series.filter((s) => s.id !== currentSeriesId).slice(0, limit)
// }

// function getRecommendedMovies(currentVideoId: string, limit = 500) {
//   return superdata.videos.filter((v) => v.id !== currentVideoId).slice(0, limit)
// }

// export default function VideoPage({ params }: Props) {
//   const video = findVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   const otherEpisodes = getOtherEpisodes(video)

//   // Initial recommendations
//   const initialRecommendedSeries = getRecommendedSeries(video.type === "series" ? video.seriesId : "")
//   const initialRecommendedMovies = getRecommendedMovies(video.id)

//   // State to manage shuffled recommendations
//   const [shuffledSeries, setShuffledSeries] = useState(initialRecommendedSeries)
//   const [shuffledMovies, setShuffledMovies] = useState(initialRecommendedMovies)

//   // Shuffle series every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShuffledSeries((prevSeries) => [...prevSeries].sort(() => Math.random() - 0.5))
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [initialRecommendedSeries])

//   // Shuffle movies every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShuffledMovies((prevMovies) => [...prevMovies].sort(() => Math.random() - 0.5))
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [initialRecommendedMovies])

//   return (
//     <>
//       <StructuredData video={video} />
//       <div className="container py-6 ">
//         <VideoPlayer video={video} />
//         <div className="mt-4">
//           <h1 className="text-2xl font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.title}</h1>
//           <p className="text-muted-foreground" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{video.description}</p>
//         </div>

//         {video.type === "series" && otherEpisodes.length > 0 && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold mb-4">Other Episodes</h2>
//             <VideoGrid videos={otherEpisodes.map((ep) => ({ ...ep, seriesTitle: video.seriesTitle }))} />
//           </div>
//         )}

//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">
//             {video.type === "series" ? "Recommended Series" : "Recommended Movies"}
//           </h2>
//           {video.type === "series" ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {shuffledSeries.map((series) => (
//                 <Link key={series.id} href={`/series/${series.id}`} className="group">
//                   <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
//                     <Image src={series.thumbnail || "/placeholder.svg"} quality={90} alt={series.title} layout="fill" objectFit="cover" />
//                   </div>
//                   <div className="mt-2">
//                     <h3 className="font-medium line-clamp-2 group-hover:text-primary">{series.title}</h3>
//                     <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{series.description}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <VideoGrid videos={shuffledMovies} />
//           )}
//         </div>
//       </div>
//     </>
//   )
// }









// "use client"
// import { notFound } from "next/navigation"
// import superdata from "@/data/superdata.json"
// import { StructuredData } from "@/components/structured-data"
// import Link from "next/link"
// import Image from "next/image"
// import { VideoPlayer } from "@/components/video-player"
// import { useMemo } from "react"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findVideo(id: string) {
//   return superdata.series.flatMap((s) => s.episodes).find((ep) => ep.id === id) 
// }

// function getRecommendedSeries(currentSeriesId: string, limit = 500) {
//   // Exclude the current series and shuffle
//   const filteredSeries = superdata.series.filter((s) => s.id !== currentSeriesId)

//   // Shuffle only once
//   return filteredSeries
//     .sort(() => Math.random() - 0.5) 
//     .slice(0, limit) // Ensure we only take `limit` items
// }

// export default function VideoPage({ params }: Props) {
//   const video = findVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   // UseMemo to prevent re-renders from reshuffling
//   const recommendedSeries = useMemo(() => getRecommendedSeries(video.seriesId), [video.seriesId])

//   return (
//     <>
//       <StructuredData video={video} />
//       <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

//       <div className="container py-6 justify-center items-center">
//         {/* Video Player Component */}
//         <div className="mb-6">
//           <VideoPlayer video={video} />
//           <p className="text-muted-foreground mb-6 mt-5 text-center">{video.description}</p>
//         </div>

//         {/* Recommended Series Section */}
//         <h2 className="text-2xl font-semibold mb-4 text-center">Recommended Series</h2>

//         {recommendedSeries.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {recommendedSeries.map((s) => (
//               <Link key={s.id} href={`/series/${s.id}`} className="block group">
//                 <div className="relative rounded-lg mb-2">
//                   <Image
//                     src={s.thumbnail || "/placeholder.svg"}
//                     alt={s.title}
//                     width={1200}
//                     height={170}
//                     quality={90}
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <h3 className="font-medium group-hover:text-primary text-center"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{s.title}</h3>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center">No recommended series available.</p>
//         )}
//       </div>
//     </>
//   )
// }



// "use client"
// import { notFound } from "next/navigation"
// import type { Metadata } from "next"
// import superdata from "@/data/superdata.json"
// import { StructuredData } from "@/components/structured-data"
// import Link from "next/link"
// import Image from "next/image"
// import { VideoPlayer } from "@/components/video-player"
// import { Clock, Eye, Film, Tv, Heart } from "lucide-react"
// import { useMemo } from "react"
// import { JsonLd } from "react-schemaorg"

// interface Props {
//   params: {
//     id: string
//   }
// }

// function findVideo(id: string) {
//   return superdata.series.flatMap((s) => s.episodes).find((ep) => ep.id === id) 
// }

// function getRecommendedSeries(currentSeriesId: string, limit = 500) {
//   // Exclude the current series and shuffle
//   const filteredSeries = superdata.series.filter((s) => s.id !== currentSeriesId)

//   // Shuffle only once
//   return filteredSeries
//     .sort(() => Math.random() - 0.5) 
//     .slice(0, limit) // Ensure we only take `limit` items
// }

// export default function VideoPage({ params }: Props) {
//   const video = findVideo(params.id)

//   if (!video) {
//     notFound()
//   }

//   // UseMemo to prevent re-renders from reshuffling
//   const recommendedSeries = useMemo(() => getRecommendedSeries(video.seriesId), [video.seriesId])

//   export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const video = findVideo(params.id)
  
//     if (!video) {
//       return {
//         title: "Video Not Found",
//         description: "The requested video could not be found.",
//       }
//     }
  
//     return {
//       title: series.title,
//       description: series.description,
//       openGraph: {
//         title: series.title,
//         description: series.description,
//         type: "video.series",
//       },
//     }
//   }
  
  
//   return (
//     <>
//           <JsonLd<any>
//             item={{
//               "@context": "https://schema.org",
//               "@type": "WebSite",
//               name: "JustWatch Free",
//               url: "https://justwatchfree.vercel.app",
//               potentialAction: {
//                 "@type": "SearchAction",
//                 target: "https://justwatchfree.vercel.app/search?q={search_term_string}",
//                 "query-input": "required name=search_term_string",
//               },
//             }}
//           />
//       <StructuredData video={video} />
//       <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

//       <div className="container py-6 justify-center items-center">
//         {/* Video Player Component */}
//         <div className="mb-6">
//           <VideoPlayer video={video} />
//           <p className="text-muted-foreground mb-6 mt-5 text-center">{video.description}</p>
//         </div>

//         {/* Recommended Series Section */}
//         <h2 className="text-2xl font-semibold mb-4 text-center">Recommended Series</h2>

//         {recommendedSeries.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {recommendedSeries.map((s) => (
//               <Link key={s.id} href={`/series/${s.id}`} className="block group">
//                  <div className="relative">
//                   {/* "Adult" Label on the Top Left */}
//                   <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
//                   <Tv className="w-3 h-3 mr-1" />
//                   Series
//                   </div>
//                   <Image
//                     src={s.thumbnail || "/placeholder.svg"}
//                     alt={s.title}
//                     width={1200}
//                     height={170}
//                     quality={90}
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                     <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
//                     <Clock className="w-3 h-3 mr-1" />
//                     {s.duration}
//                   </div>
//                 </div>
//                 <h3 className="font-medium group-hover:text-primary text-center"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{s.title}</h3>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center">No recommended series available.</p>
//         )}
//       </div>
//     </>
//   )
// }



// "use client"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import superdata from "@/data/superdata.json"
import { StructuredData } from "@/components/structured-data"
import Link from "next/link"
import Image from "next/image"
import { VideoPlayer } from "@/components/video-player"
import { Clock, Tv } from "lucide-react"
import { useMemo } from "react"
import { JsonLd } from "react-schemaorg"

interface Props {
  params: {
    id: string
  }
}

// Find video by episode ID
function findVideo(id: string) {
  return superdata.series.flatMap((s) => s.episodes).find((ep) => ep.id === id)
}

// Get recommended series excluding the current one
function getRecommendedSeries(currentSeriesId: string, limit = 900) {
  const filteredSeries = superdata.series.filter((s) => s.id !== currentSeriesId)
  return filteredSeries.sort(() => Math.random() - 0.5).slice(0, limit) // Shuffle and limit
}

// Generate metadata (placed **outside** of the component)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const video = findVideo(params.id)

  if (!video) {
    return {
      title: "Video Not Found",
      description: "The requested video could not be found.",
      openGraph: {
        title: "Video Not Found",
        description: "The requested video could not be found.",
        images: ["/fallback-thumbnail.jpg"], // Default fallback image
        type: "video.episode",
      },
    };
  }

  return {
    title: video.title, // Fixed undefined series reference
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      images: [video.thumbnail || "/fallback-thumbnail.jpg"],
      type: "video.episode",
    },
  }
}

export default function VideoPage({ params }: Props) {
  const video = findVideo(params.id)

  if (!video) {
    notFound()
    return null // Prevents further execution
  }

  // Memoize recommended series to prevent unnecessary re-renders
  const recommendedSeries = useMemo(() => getRecommendedSeries(video.seriesId), [video.seriesId])

  return (
    <>
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "JustWatch Free",
          url: "https://justwatchfree.vercel.app",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://justwatchfree.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      <StructuredData video={video} />
      <h1 className="text-3xl font-bold pt-10 text-center">{video.title}</h1>

      <div className="container py-6 justify-center items-center">
        {/* Video Player */}
        <div className="mb-6">
          <VideoPlayer video={video} />
          <p className="text-muted-foreground mb-6 mt-5 text-center">{video.description}</p>
        </div>

        {/* Recommended Series */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Recommended Series</h2>

        {recommendedSeries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recommendedSeries.map((s) => (
              <Link key={s.id} href={`/series/${s.id}`} className="block group">
                <div className="relative">
                  {/* "Series" Label on Top Left */}
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                    <Tv className="w-3 h-3 mr-1" />
                    Series
                  </div>
                  <Image
                    src={s.thumbnail || "/placeholder.svg"}
                    alt={s.title}
                    width={1200}
                    height={170}
                    quality={90}
                    className="rounded-lg object-cover"
                    style={{
                      filter:
                        "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
                    }}
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {s.duration}
                  </div>
                </div>
                <h3 className="font-medium group-hover:text-primary text-center">
                  {s.title}
                </h3>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center">No recommended series available.</p>
        )}
      </div>
    </>
  )
}
