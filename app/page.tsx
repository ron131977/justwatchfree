import { VideoGrid } from "@/components/video-grid"
import superdata from "@/data/superdata.json"
import type { Metadata } from "next"
import { JsonLd } from "react-schemaorg"

// export const metadata: Metadata = {
//   title: "JustWatch Free - Watch Movies, Series & More",
//   description:
//     "Stream the latest movies, TV series, adult content, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
// }

// export const metadata: Metadata = {
//   metadataBase: new URL("https://justwatchfree.vercel.app/"),
//   title: {
//     default: "JustWatch Free - Your Ultimate Streaming Platform",
//     template: "%s | JustWatchFree",
//   },
//   description:
//     "Stream the latest movies, TV series, adult content, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//   keywords: ["video streaming", "movies", "TV series", "adult content", "entertainment", "watch online"],
//   authors: [{ name: "Dr Trailer Team" }],
//   creator: "Dr Trailer",
//   publisher: "Dr Trailer",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://justwatchfree.vercel.app/",
//     siteName: "JustWatch Free",
//     title: "JustWatch Free - Your Ultimate Streaming Platform",
//     description:
//       "Stream the latest movies, TV series, adult content, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     images: [
//       {
//         url: "https://justwatchfree.vercel.app/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "JustWatch Free - Your Ultimate Streaming Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "JustWatch Free - Your Ultimate Streaming Platform",
//     description:
//       "Stream the latest movies, TV series, adult content, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     images: ["https://justwatchfree.vercel.app/og-image.jpg"],
//     creator: "@videostream",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "https://justwatchfree.vercel.app/",
//   },
   
// }

export default function Home() {
  const movies = superdata.videos.map((video) => ({
    ...video,
    movieTitle: video.title,
    type: "Movie" as const,
  }))

 
  // const tvSeries = superdata.series.map((series) => ({
  //   ...series,
  //   type: "TVSeries" as const,
  //   duration: `${series.episodes.length} episodes`,
  //   views: series.episodes.reduce((sum, ep) => sum + ep.views, 0),
  // }))

  // const tvEpisodes = superdata.series.flatMap((s) =>
  //   s.episodes.map((ep) => ({
  //     ...ep,
  //     seriesTitle: s.title,
  //     seriesId: s.id,
  //     type: "TVEpisode" as const,
  //   })),
  // )

  const tvSeries = superdata.series.map((series) => ({
    ...series,    
    type: "TVSeries",
    // views: series.rating || (series.episodes.length > 0 ? series.episodes[0].rating : 0), 
  }))

  const adultVideos = superdata.adult.map((video) => ({
    ...video,
    type: "Adult" as const,
  }))

  const allVideos = [...movies, ...tvSeries,  ...adultVideos]

  //   const structuredData = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "ItemList",
  //       itemListElement: movies.map((movie, index) => ({
  //         "@type": "ListItem",
  //         position: index + 1,
  //         item: {
  //           "@type": "Movie",
  //           name: movie.title,
  //           url: `https://justwatchfree.vercel.app/movies/${movie.id}`,
  //           image: movie.thumbnail,
  //           datePublished: movie.uploadDate,
  //           duration: movie.duration,
  //           aggregateRating: {
  //             "@type": "AggregateRating",
  //             ratingValue: movie.rating,
  //             bestRating: 10,
  //             worstRating: 0,
  //             ratingCount: 1,                            
  //           },
  //         },
  //       })),
  //     },
  //     {
  //       "@type": "ItemList",
  //       itemListElement: movies.map((movie, index) => ({
  //         "@type": "ListItem",
  //         position: index + 1,
  //         item: {
  //           "@type": "Movie",
  //           name: movie.title,
  //           url: `https://justwatchfree.vercel.app/adult/${movie.id}`,
  //           image: movie.thumbnail,
  //           datePublished: movie.uploadDate,
  //           duration: movie.duration,
  //           aggregateRating: {
  //             "@type": "AggregateRating",
  //             ratingValue: movie.rating,
  //             bestRating: 10,
  //             worstRating: 0,
  //             ratingCount: 1,
  //           },
  //         },
  //       })),
  //     },
  //     {
  //       "@type": "ItemList",
  //       itemListElement: tvSeries.map((series, index) => ({
  //         "@type": "ListItem",
  //         position: index + 1,
  //         item: {
  //           "@type": "TVSeries",
  //           name: series.title,
  //           url: `https://justwatchfree.vercel.app/series/${series.id}`,
  //           image: series.thumbnail,
  //           aggregateRating: {
  //             "@type": "AggregateRating",
  //             ratingValue: series.rating || 0, 
  //             bestRating: 10,
  //             worstRating: 0,
  //             ratingCount: 1,
  //           },
  //           numberOfEpisodes: series.episodes.length,
  //           episode: series.episodes.map((episode, epIndex) => ({
  //             "@type": "TVEpisode",
  //             episodeNumber: epIndex + 1,
  //             name: episode.title,
  //             url: `https://justwatchfree.vercel.app/series/${episode.id}`,
  //           })),
  //         },
  //       })),
  //     },
  //   ],
  // }

  // const structuredData = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "ItemList",
  //       "itemListElement": movies.map((movie, index) => ({
  //         "@type": "ListItem",
  //         "position": index + 1,
  //         "item": {
  //           "@type": "Movie",
  //           "name": movie.title,
  //           "url": `https://justwatchfree.vercel.app/movies/${movie.id}`,
  //           "image": movie.thumbnail,
  //           "datePublished": movie.uploadDate,
  //           "duration": movie.duration,
  //           "aggregateRating": {
  //             "@type": "AggregateRating",
  //             "ratingValue": movie.rating,
  //             "bestRating": 10,
  //             "worstRating": 0,
  //             "ratingCount": 1,
  //             "ratingExplanation":
  //               "The JustWatch rating is calculated by weighing and measuring how our users interact with shows & movies across different time periods and countries."
  //           },
  //           "author": [],
  //           "genre": [],
  //           "offers": {
  //             "@type": "AggregateOffer",
  //             "offerCount": 0,
  //             "offers": []
  //           },
  //           "countryOfOrigin": "United States"
  //         }
  //       }))
  //     },
  //     {
  //       "@type": "ItemList",
  //       "itemListElement": movies.map((movie, index) => ({
  //         "@type": "ListItem",
  //         "position": index + 1,
  //         "item": {
  //           "@type": "Movie",
  //           "name": movie.title,
  //           "url": `https://justwatchfree.vercel.app/adult/${movie.id}`,
  //           "image": movie.thumbnail,
  //           "datePublished": movie.uploadDate,
  //           "duration": movie.duration,
  //           "aggregateRating": {
  //             "@type": "AggregateRating",
  //             "ratingValue": movie.rating,
  //             "bestRating": 10,
  //             "worstRating": 0,
  //             "ratingCount": 1,
  //             "ratingExplanation":
  //               "The JustWatch rating is calculated by weighing and measuring how our users interact with shows & movies across different time periods and countries."
  //           },
  //           "author": [],
  //           "genre": [],
  //           "offers": {
  //             "@type": "AggregateOffer",
  //             "offerCount": 0,
  //             "offers": []
  //           },
  //           "countryOfOrigin": "United States"
  //         }
  //       }))
  //     },
  //     {
  //       "@type": "ItemList",
  //       "itemListElement": tvSeries.map((series, index) => ({
  //         "@type": "ListItem",
  //         "position": index + 1,
  //         "item": {
  //           "@type": "TVSeries",
  //           "name": series.title,
  //           "url": `https://justwatchfree.vercel.app/series/${series.id}`,
  //           "image": series.thumbnail,
  //           "aggregateRating": {
  //             "@type": "AggregateRating",
  //             "ratingValue": series.rating || 0,
  //             "bestRating": 10,
  //             "worstRating": 0,
  //             "ratingCount": 1,
  //             "ratingExplanation":
  //               "The JustWatch rating is calculated by weighing and measuring how our users interact with shows & movies across different time periods and countries."
  //           },
  //           "numberOfEpisodes": series.episodes.length,
  //           "episode": series.episodes.map((episode, epIndex) => ({
  //             "@type": "TVEpisode",
  //             "episodeNumber": epIndex + 1,
  //             "name": episode.title,
  //             "url": `https://justwatchfree.vercel.app/series/${episode.id}`
  //           })),
  //           "author": [],
  //           "genre": [],
  //           "offers": {
  //             "@type": "AggregateOffer",
  //             "offerCount": 0,
  //             "offers": []
  //           },
  //           "countryOfOrigin": "United States"
  //         }
  //       }))
  //     }
  //   ]
  // };
  
  return (
    <>
      <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "JustWatch Free",
          url: "https://justwatchfree.vercel.app/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://justwatchfree.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
       {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      /> */}
      {/* <JsonLd<any>
        item={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: allVideos.slice(0, 8).map((video, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": video.type === "Movie" ? "Movie" : video.type === "TVSeries" ? "TVSeries" : "VideoObject",
              name: video.title,
              url: `https://justwatchfree.vercel.app/${video.type.toLowerCase()}/${video.id}`,
            },
          })),
        }}
      /> */}
      <div className="container py-6 space-y-8 mx-auto text-center">
        <section>
          <h1 className="text-4xl font-bold mb-6">Welcome to JustWatch Free</h1>
          <p className="text-xl mb-8">Discover the latest movies, TV series, adult content, and exclusive content.</p>
          <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
          <VideoGrid videos={allVideos} />
        </section>
      </div>
    </>
  )
}

