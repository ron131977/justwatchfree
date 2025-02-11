import { notFound } from "next/navigation"
import superdata from "@/data/superdata.json"
import { BlogPost } from "@/components/blog-post"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = superdata.blog.find((post) => post.id === params.id)

  if (!post) {
    notFound()
  }

  return <BlogPost {...post} />
}

