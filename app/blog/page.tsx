import type { Metadata } from "next"
import Link from "next/link"
import { BlogPost } from "@/components/blog-post"
import superdata from "@/data/superdata.json"

export const metadata: Metadata = {
  title: "Blog | JustWatch Free",
  description: "Read the latest movie reviews, TV series insights, and adult content news on JustWatch Free.",
}

export default function BlogPage() {
  return (
    // <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-4xl font-bold mb-8">JustWatch Free Blog</h1>
    //   <div className="grid gap-8">
    //     {superdata.blog.map((post) => (
    //       <Link key={post.id} href={`/blog/${post.category}/${post.id}`}>
    //         <BlogPost {...post} />
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">JustWatch Free Blog</h1>
    <div className="grid gap-8">
      {superdata.blog.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
    </div>
  </div>
  )
}

