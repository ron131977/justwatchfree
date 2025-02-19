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
        <div className="mb-6 px-4 md:px-8 lg:px-12">
          <VideoPlayer video={video} />
          <p className="text-muted-foreground mb-6 mt-5 text-center">{video.description}</p>
        </div>

        {/* Recommended Series */}
        <div className="px-4 md:px-8 lg:px-12">
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
                  {/* <Image
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
                  /> */}
                      <div className="relative w-full aspect-[16/9]">
                <Image
                 src={s.thumbnail || "/placeholder.svg"}
                 alt={s.title}
                  quality={90}
                  fill
                  loading="lazy"
                  className="rounded-lg"
                  style={{
                    objectFit: "cover",
                    filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
                  }}
                />
              </div>
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
      </div>
    </>
  )
}
