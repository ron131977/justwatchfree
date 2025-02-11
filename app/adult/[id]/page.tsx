import type { Metadata } from "next"
import { notFound } from "next/navigation"
import superdata from "@/data/superdata.json"
import Link from "next/link"
import Image from "next/image"
import { VideoPlayer } from "@/components/video-player"
import { JsonLd } from "react-schemaorg"
import { StructuredData } from "@/components/structured-data-adult"

interface Props {
  params: {
    id: string
  }
}

function findAdultVideo(id: string) {
  return superdata.adult.find((v) => v.id === id)
}

function getRecommendedAdultVideos(currentVideoId: string, limit = 900) {
  return superdata.adult.filter((v) => v.id !== currentVideoId).slice(0, limit)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const video = findAdultVideo(params.id)

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

export default function AdultVideoPage({ params }: Props) {
  const video = findAdultVideo(params.id)

  if (!video) {
    notFound()
  }

  const recommendedVideos = getRecommendedAdultVideos(video.id)

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
        <div className="mb-6 ml-2">
          <VideoPlayer video={video} />
          <p className="text-muted-foreground mb-6 mt-4">{video.description}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Recommended Adult Videos</h2>

        {recommendedVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-2">
            {recommendedVideos.map((v) => (
              <Link key={v.id} href={`/adult/${v.id}`} className="block group">
                <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-muted mb-2">
                  <Image
                    src={v.thumbnail || "/placeholder.svg"}
                    alt={v.title}
                    layout="intrinsic"
                    width={300}
                    height={170}
                    objectFit="cover"
                    style={{
                      filter:
                        "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
                    }}
                  />
                </div> 
                <h3 className="font-medium group-hover:text-primary text-center">{v.title}</h3>
              </Link>
            ))}
          </div>
        ) : (
          <p>No recommended videos available.</p>
        )}
      </div>
    </>
  )
}

