import { VideoGrid } from "@/components/video-grid"
import superdata from "@/data/superdata.json"
import Image from "next/image"
import Link from "next/link"

export default function AdultPage() {
  const adultBlogPosts = superdata.blog.filter((post) => post.category === "adult")

  return (
    // <div className="container py-6 space-y-8">
    <div className="container py-6 space-y-8 px-4 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold mb-6">Adult Content</h1>
      <VideoGrid videos={superdata.adult.map((video) => ({ ...video, type: "Adult" }))} />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Latest Adult Content Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {adultBlogPosts.map((post) => (
            <Link key={post.id} href={`/blog/adult/${post.id}`} className="block group">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  style={{
                    filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
                  }}
                />
              </div>
              <h3 className="font-medium group-hover:text-primary">{post.title}</h3>
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

