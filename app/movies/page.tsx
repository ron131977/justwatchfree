import { VideoGrid } from "@/components/video-grid"
import superdata from "@/data/superdata.json"
import Image from "next/image"
import Link from "next/link"

export default function MoviesPage() {
  const movieBlogPosts = superdata.blog.filter((post) => post.category === "movies")
  return (
    <div className="container py-6 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <VideoGrid videos={superdata.videos.map((video) => ({ ...video, type: "Movie" }))} />
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Latest Movie Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movieBlogPosts.map((post) => (
            <Link key={post.id} href={`/blog/movies/${post.id}`} className="block group">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-2">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
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

