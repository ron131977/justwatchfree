import type { Metadata } from "next"
import { notFound } from "next/navigation"
import superdata from "@/data/superdata.json"
import Link from "next/link"
import Image from "next/image"
import { VideoPlayer } from "@/components/video-player"
import { JsonLd } from "react-schemaorg"
import { StructuredData } from "@/components/structured-data-movies"

interface Props {
  params: {
    id: string
  }
}

function findVideo(id: string) {
  return superdata.videos.find((v) => v.id === id)
}

function getRecommendedVideos(currentVideoId: string, limit = 900) {
  return superdata.videos.filter((v) => v.id !== currentVideoId).slice(0, limit)
}

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
    title: video.title,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      images: [video.thumbnail || "/fallback-thumbnail.jpg"],
      type: "video.movie",
    },
  }
}

export default function VideoPage({ params }: Props) {
  const video = findVideo(params.id)

  if (!video) {
    notFound()
  }

  const recommendedVideos = getRecommendedVideos(video.id)

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
      <h1 className="text-3xl font-bold pt-10" style={{ textAlign: "center" }}>
        {video.title}
      </h1>

      <div className="container py-6 justify-center items-center">
       <div className="mb-6 px-4 md:px-8 lg:px-12">
          <VideoPlayer video={video} />
          <p className="text-muted-foreground mb-6 mt-4">{video.description}</p>
        </div>
        <div className="px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl font-semibold mb-4">Recommended Movies</h2>

        {recommendedVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-2">
            {recommendedVideos.map((v) => (
              <Link key={v.id} href={`/movies/${v.id}`} className="block group">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-muted mb-2">
                <div className="relative w-full aspect-[16/9]">
                <Image
                 src={v.thumbnail || "/placeholder.svg"}
                 alt={v.title}
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
                </div>
                <h3 className="font-medium group-hover:text-primary text-center">{v.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <p>No recommended movies available.</p>
        )}
      </div>
      </div>
    </>
  )
}

