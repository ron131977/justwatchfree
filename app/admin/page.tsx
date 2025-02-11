// "use client"

// import { useState, useEffect } from "react"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { MovieForm } from "@/components/admin/movie-form"
// import { AdultForm } from "@/components/admin/adult-form"
// import { SeriesForm } from "@/components/admin/series-form"
// import { Button } from "@/components/ui/button"
// import { BlogForm } from "@/components/admin/blog-form"
// import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

// export default function AdminPanel() {
//   const [data, setData] = useState<any>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await fetch("/api/data")
//       if (!response.ok) {
//         throw new Error("Failed to fetch data")
//       }
//       const jsonData = await response.json()
//       setData(jsonData)
//       setLoading(false)
//     } catch (err) {
//       setError("Error fetching data")
//       setLoading(false)
//     }
//   }

//   const handleSave = async (newData: any) => {
//     try {
//       const response = await fetch("/api/data", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newData),
//       })
//       if (!response.ok) {
//         throw new Error("Failed to save data")
//       }
//       setData(newData)
//       alert("Data saved successfully")
//     } catch (err) {
//       setError("Error saving data")
//     }
//   }

//   if (loading) return <div>Loading...</div>
//   if (error) return <div>Error: {error}</div>

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
//       <Tabs defaultValue="movies">
//         <TabsList>
//           <TabsTrigger value="movies">Movies</TabsTrigger>
//           <TabsTrigger value="adult">Adult</TabsTrigger>
//           <TabsTrigger value="series">Series</TabsTrigger>
//           <TabsTrigger value="blog">Blog</TabsTrigger>
//         </TabsList>
//         <TabsContent value="movies">
//           <Accordion type="single" collapsible>
//             <AccordionItem value="movies">
//               <AccordionTrigger>Movies</AccordionTrigger>
//               <AccordionContent>
//                 <MovieForm data={data.videos} onSave={(newMovies) => handleSave({ ...data, videos: newMovies })} />
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </TabsContent>
//         <TabsContent value="adult">
//           <Accordion type="single" collapsible>
//             <AccordionItem value="adult">
//               <AccordionTrigger>Adult Content</AccordionTrigger>
//               <AccordionContent>
//                 <AdultForm data={data.adult} onSave={(newAdult) => handleSave({ ...data, adult: newAdult })} />
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </TabsContent>
//         <TabsContent value="series">
//           <Accordion type="single" collapsible>
//             <AccordionItem value="series">
//               <AccordionTrigger>Series</AccordionTrigger>
//               <AccordionContent>
//                 <SeriesForm data={data.series} onSave={(newSeries) => handleSave({ ...data, series: newSeries })} />
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </TabsContent>
//         <TabsContent value="blog">
//           <Accordion type="single" collapsible>
//             <AccordionItem value="blog">
//               <AccordionTrigger>Blog Posts</AccordionTrigger>
//               <AccordionContent>
//                 <BlogForm data={data.blog || []} onSave={(newBlog) => handleSave({ ...data, blog: newBlog })} />
//               </AccordionContent>
//             </AccordionItem>
//           </Accordion>
//         </TabsContent>
//       </Tabs>
//       <Button className="mt-4" onClick={fetchData}>
//         Refresh Data
//       </Button>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovieForm } from "@/components/admin/movie-form"
import { AdultForm } from "@/components/admin/adult-form"
import { SeriesForm } from "@/components/admin/series-form"
import { Button } from "@/components/ui/button"
import { BlogForm } from "@/components/admin/blog-form"


export default function AdminPanel() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data")
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      const jsonData = await response.json()
      setData(jsonData)
      setLoading(false)
    } catch (err) {
      setError("Error fetching data")
      setLoading(false)
    }
  }

  const handleSave = async (newData: any) => {
    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
      if (!response.ok) {
        throw new Error("Failed to save data")
      }
      setData(newData)
      alert("Data saved successfully")
    } catch (err) {
      setError("Error saving data")
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <Tabs defaultValue="movies">
        <TabsList>
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="adult">Adult</TabsTrigger>
          <TabsTrigger value="series">Series</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>
        <TabsContent value="movies">
          <MovieForm data={data.videos} onSave={(newMovies) => handleSave({ ...data, videos: newMovies })} />
        </TabsContent>
        <TabsContent value="adult">
          <AdultForm data={data.adult} onSave={(newAdult) => handleSave({ ...data, adult: newAdult })} />
        </TabsContent>
        <TabsContent value="series">
          <SeriesForm data={data.series} onSave={(newSeries) => handleSave({ ...data, series: newSeries })} />
        </TabsContent>
        <TabsContent value="blog">
          <BlogForm data={data.blog || []} onSave={(newBlog) => handleSave({ ...data, blog: newBlog })} />
        </TabsContent>
      </Tabs>
      <Button className="mt-4" onClick={fetchData}>
        Refresh Data
      </Button>
    </div>
  )
}

