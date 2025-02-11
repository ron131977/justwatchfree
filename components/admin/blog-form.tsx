// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// interface BlogPost {
//   id: string
//   title: string
//   content: string
//   image: string
//   date: string
//   author: string
//   category: "movies" | "tvseries" | "adult"
//   youtubeId?: string
//   relatedLink?: string
// }

// interface BlogFormProps {
//   data: BlogPost[]
//   onSave: (blogPosts: BlogPost[]) => void
// }

// export function BlogForm({ data, onSave }: BlogFormProps) {
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>(data)

//   const handleChange = (index: number, field: keyof BlogPost, value: string) => {
//     const updatedPosts = [...blogPosts]
//     updatedPosts[index] = { ...updatedPosts[index], [field]: value }
//     setBlogPosts(updatedPosts)
//   }

//   const handleAdd = () => {
//     setBlogPosts([
//       ...blogPosts,
//       {
//         id: "",
//         title: "",
//         content: "",
//         image: "",
//         date: new Date().toISOString().split("T")[0],
//         author: "",
//         category: "movies",
//         youtubeId: "",
//         relatedLink: "",
//       },
//     ])
//   }

//   const handleDelete = (index: number) => {
//     const updatedPosts = blogPosts.filter((_, i) => i !== index)
//     setBlogPosts(updatedPosts)
//   }

//   return (
//     <div>
//       {blogPosts.map((post, index) => (
//         <div key={index} className="mb-8 p-4 border rounded">
//           <Input
//             className="mb-2"
//             placeholder="ID"
//             value={post.id}
//             onChange={(e) => handleChange(index, "id", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             placeholder="Title"
//             value={post.title}
//             onChange={(e) => handleChange(index, "title", e.target.value)}
//           />
//           <Textarea
//             className="mb-2"
//             placeholder="Content"
//             value={post.content}
//             onChange={(e) => handleChange(index, "content", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             placeholder="Image URL"
//             value={post.image}
//             onChange={(e) => handleChange(index, "image", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             type="date"
//             value={post.date}
//             onChange={(e) => handleChange(index, "date", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             placeholder="Author"
//             value={post.author}
//             onChange={(e) => handleChange(index, "author", e.target.value)}
//           />
//           <Select
//             value={post.category}
//             onValueChange={(value) => handleChange(index, "category", value as "movies" | "tvseries" | "adult")}
//           >
//             <SelectTrigger className="mb-2">
//               <SelectValue placeholder="Select category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="movies">Movies</SelectItem>
//               <SelectItem value="tvseries">TV Series</SelectItem>
//               <SelectItem value="adult">Adult</SelectItem>
//             </SelectContent>
//           </Select>
//           <Input
//             className="mb-2"
//             placeholder="YouTube ID"
//             value={post.youtubeId || ""}
//             onChange={(e) => handleChange(index, "youtubeId", e.target.value)}
//           />
//           <Input
//             className="mb-2"
//             placeholder="Related Link"
//             value={post.relatedLink || ""}
//             onChange={(e) => handleChange(index, "relatedLink", e.target.value)}
//           />
//           <Button variant="destructive" onClick={() => handleDelete(index)}>
//             Delete
//           </Button>
//         </div>
//       ))}
//       <Button onClick={handleAdd}>Add Blog Post</Button>
//       <Button className="ml-2" onClick={() => onSave(blogPosts)}>
//         Save Changes
//       </Button>
//     </div>
//   )
// }



// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// interface BlogPost {
//   id: string
//   title: string
//   content: string
//   image: string
//   date: string
//   author: string
//   category: "movies" | "tvseries" | "adult"
//   youtubeId?: string
//   relatedLink?: string
// }

// interface BlogFormProps {
//   data: BlogPost[]
//   onSave: (blogPosts: BlogPost[]) => void
// }

// export function BlogForm({ data, onSave }: BlogFormProps) {
//   const [blogPosts, setBlogPosts] = useState<BlogPost[]>(data)

//   const handleChange = (index: number, field: keyof BlogPost, value: string) => {
//     const updatedPosts = [...blogPosts]
//     updatedPosts[index] = { ...updatedPosts[index], [field]: value }
//     setBlogPosts(updatedPosts)
//   }

//   const handleAdd = () => {
//     setBlogPosts([
//       ...blogPosts,
//       {
//         id: "",
//         title: "",
//         content: "",
//         image: "",
//         date: new Date().toISOString().split("T")[0],
//         author: "",
//         category: "movies",
//         youtubeId: "",
//         relatedLink: "",
//       },
//     ])
//   }

//   const handleDelete = (index: number) => {
//     const updatedPosts = blogPosts.filter((_, i) => i !== index)
//     setBlogPosts(updatedPosts)
//   }

//   return (
//     <div>
// <Accordion type="multiple" className="w-full">
//   {blogPosts.map((post, index) => (
//     <AccordionItem key={index} className="mb-8 p-4 border rounded">
//       <AccordionTrigger>{post.title || "New Blog Post"}</AccordionTrigger>
//       <AccordionContent>
//         <Input
//           className="mb-2"
//           placeholder="ID"
//           value={post.id}
//           onChange={(e) => handleChange(index, "id", e.target.value)}
//         />
//         <Input
//           className="mb-2"
//           placeholder="Title"
//           value={post.title}
//           onChange={(e) => handleChange(index, "title", e.target.value)}
//         />
//         <Textarea
//           className="mb-2"
//           placeholder="Content"
//           value={post.content}
//           onChange={(e) => handleChange(index, "content", e.target.value)}
//         />
//         <Input
//           className="mb-2"
//           placeholder="Image URL"
//           value={post.image}
//           onChange={(e) => handleChange(index, "image", e.target.value)}
//         />
//         <Input
//           className="mb-2"
//           type="date"
//           value={post.date}
//           onChange={(e) => handleChange(index, "date", e.target.value)}
//         />
//         <Input
//           className="mb-2"
//           placeholder="Author"
//           value={post.author}
//           onChange={(e) => handleChange(index, "author", e.target.value)}
//         />
//         <Select
//           value={post.category}
//           onValueChange={(value) => handleChange(index, "category", value as "movies" | "tvseries" | "adult")}
//         >
//           <SelectTrigger className="mb-2">
//             <SelectValue placeholder="Select category" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="movies">Movies</SelectItem>
//             <SelectItem value="tvseries">TV Series</SelectItem>
//             <SelectItem value="adult">Adult</SelectItem>
//           </SelectContent>
//         </Select>
//         <Input
//           className="mb-2"
//           placeholder="YouTube ID"
//           value={post.youtubeId || ""}
//           onChange={(e) => handleChange(index, "youtubeId", e.target.value)}
//         />
//         <Input
//           className="mb-2"
//           placeholder="Related Link"
//           value={post.relatedLink || ""}
//           onChange={(e) => handleChange(index, "relatedLink", e.target.value)}
//         />
//         <Button className="ml-2" onClick={() => onSave(blogPosts)}>
//           Save Changes
//         </Button>
//         <Button className="ml-2" variant="destructive" onClick={() => handleDelete(index)}>
//           Delete
//         </Button>
//       </AccordionContent>
//     </AccordionItem>
//   ))}
// </Accordion>
//       <Button onClick={handleAdd}>Add Blog Post</Button>
//       {/* <Button className="ml-2" onClick={() => onSave(blogPosts)}>
//         Save Changes
//       </Button> */}
//     </div>
//   )
// }


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface BlogPost {
  id: string
  title: string
  content: string
  image: string
  date: string
  author: string
  category: "movies" | "tvseries" | "adult"
  youtubeId?: string
  relatedLink?: string
}

interface BlogFormProps {
  data: BlogPost[]
  onSave: (blogPosts: BlogPost[]) => void
}

export function BlogForm({ data, onSave }: BlogFormProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(data)

  const handleChange = (index: number, field: keyof BlogPost, value: string) => {
    const updatedPosts = [...blogPosts]
    updatedPosts[index] = { ...updatedPosts[index], [field]: value }
    setBlogPosts(updatedPosts)
  }

  const handleAdd = () => {
    setBlogPosts([
      ...blogPosts,
      {
        id: "",
        title: "",
        content: "",
        image: "",
        date: new Date().toISOString().split("T")[0],
        author: "",
        category: "movies",
        youtubeId: "",
        relatedLink: "",
      },
    ])
  }

  const handleDelete = (index: number) => {
    const updatedPosts = blogPosts.filter((_, i) => i !== index)
    setBlogPosts(updatedPosts)
  }

  return (
    <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Blog Content Section</h2>
      <Accordion type="multiple" className="w-full">
        {blogPosts.map((post, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-8 p-4 border rounded">
            <AccordionTrigger>{post.title || "New Blog Post"}</AccordionTrigger>
            <AccordionContent>
              <div>
                <Input
                  className="mb-2"
                  placeholder="ID"
                  value={post.id}
                  onChange={(e) => handleChange(index, "id", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Title"
                  value={post.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                />
                <Textarea
                  className="mb-2"
                  placeholder="Content"
                  value={post.content}
                  onChange={(e) => handleChange(index, "content", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Image URL"
                  value={post.image}
                  onChange={(e) => handleChange(index, "image", e.target.value)}
                />
                <Input
                  className="mb-2"
                  type="date"
                  value={post.date}
                  onChange={(e) => handleChange(index, "date", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Author"
                  value={post.author}
                  onChange={(e) => handleChange(index, "author", e.target.value)}
                />
                <Select
                  value={post.category}
                  onValueChange={(value) => handleChange(index, "category", value as "movies" | "tvseries" | "adult")}
                >
                  <SelectTrigger className="mb-2">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="movies">Movies</SelectItem>
                    <SelectItem value="tvseries">TV Series</SelectItem>
                    <SelectItem value="adult">Adult</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  className="mb-2"
                  placeholder="YouTube ID"
                  value={post.youtubeId || ""}
                  onChange={(e) => handleChange(index, "youtubeId", e.target.value)}
                />
                <Input
                  className="mb-2"
                  placeholder="Related Link"
                  value={post.relatedLink || ""}
                  onChange={(e) => handleChange(index, "relatedLink", e.target.value)}
                />
                <Button className="ml-2" onClick={() => onSave(blogPosts)}>
                  Save Changes
                </Button>
                <Button className="ml-2" variant="destructive" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button onClick={handleAdd}>Add Blog Post</Button>
    </div>
  )
}
