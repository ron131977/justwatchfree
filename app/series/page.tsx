// import Link from "next/link"
// import Image from "next/image"
// import superdata from "@/data/superdata.json"

// export default function SeriesPage() {
  
//   return (
//     <div className="container py-6 space-y-8 ">
//       <h1 className="text-3xl font-bold mb-6 ">Tv Series</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//         {superdata.series.map((series) => (
//           <Link key={series.id} href={`/series/${series.id}`} className="group">
//             <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
//               <Image src={series.thumbnail || "/placeholder.svg"} alt={series.title} layout="fill" objectFit="cover" />
//             </div>
//             <div className="mt-2">
//               <h3 className="font-medium line-clamp-2 group-hover:text-primary">{series.title}</h3>
//               <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{series.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }


// import Link from "next/link"
// import Image from "next/image"
// import superdata from "@/data/superdata.json"
// import { Clock, Eye } from "lucide-react"

// export default function SeriesPage() {
//   const allVideos = [
//     ...superdata.series.map((series) => ({
//       ...series,
//       seriesTitle: series.title,  // Correctly set seriesTitle for videos
//     }))
//   ]

//   return (
//     <div className="container py-6 space-y-8 ">
//       <h1 className="text-3xl font-bold mb-6 ">TV Series</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
//         {/* {superdata.series.map((series) => (
//             <Link key={series.id} href={`/series/${series.id}`} className="group"> */}
//               {allVideos.map((series) => (
//           <Link key={series.id} href={`/series/${series.id}`} className="group">
//             <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
//               <Image
//                 src={series.thumbnail || "/placeholder.svg"}
//                 alt={series.title}
//                 quality={90}
//                 layout="fill"
//                 objectFit="cover"
//                 style={{
//                   filter:
//                   "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
//               }}
//               />
//               {/* Display 'Series' label for series titles */}
//               {series.title && (
//                 <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md">
//                   Series
//                 </div>
//               )}
//                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
//               <Clock className="w-3 h-3 mr-1" />
//               {series.duration}
//             </div>
//             </div>
//             <div className="mt-2">
//               <h3 className="font-medium line-clamp-2 group-hover:text-primary">{series.title}</h3>
//               <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{series.description}</p>
//               <p className="text-sm text-muted-foreground flex items-center mt-1">
//               <Eye className="w-4 h-4 mr-1" />
//               {series.views.toLocaleString()} views
//             </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }



import Link from "next/link"
import Image from "next/image"
import superdata from "@/data/superdata.json"
import { Clock, Eye, Film, Tv, Heart } from "lucide-react"

export default function SeriesPage() {
  const allVideos = [
    ...superdata.series.map((series) => ({
      ...series,
      seriesTitle: series.title,  // Correctly set seriesTitle for videos
    }))
  ]

  const seriesBlogPosts = superdata.blog.filter((post) => post.category === "tvseries")
  
  return (
    <div className="container py-6 space-y-8 ">
      <h1 className="text-3xl font-bold mb-6 ">TV Series</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {/* {superdata.series.map((series) => (
            <Link key={series.id} href={`/series/${series.id}`} className="group"> */}
        {allVideos.map((series) => (
          <Link key={series.id} href={`/series/${series.id}`} className="group">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <Image
                src={series.thumbnail || "/placeholder.svg"}
                alt={series.title}
                quality={90}
                layout="fill"
                objectFit="cover"
                style={{
                  filter:
                    "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
                }}
              />

              {/* Display 'Series' label for series titles */}
              {series.title && (
                <div className="absolute top-2 left-2 flex space-x-2">
                  <div className="bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                    <Tv className="w-3 h-3 mr-1" />
                    Series
                  </div>
                  {/* <div className="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded-md flex items-center">
                    <span>TV</span>
                  </div> */}
                </div>
              )}

              <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded-md flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {series.duration}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-medium line-clamp-2 group-hover:text-primary"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{series.title}</h3>
              {/* <p className="text-sm text-muted-foreground mt-1 line-clamp-2"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{series.description}</p> */}

              <p className="text-sm text-muted-foreground flex items-center mt-1"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Eye className="w-4 h-4 mr-1" />
                {series.views.toLocaleString()} views
              </p>
            </div>
          </Link>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Latest TV Series Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seriesBlogPosts.map((post) => (
            <Link key={post.id} href={`/blog/tvseries/${post.id}`} className="block group">
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
