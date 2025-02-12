// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { Navigation } from "@/components/navigation"

// import type React from "react"
// import Script from "next/script"

// const inter = Inter({ subsets: ["latin"] })

// // export const metadata: Metadata = {
// //   metadataBase: new URL("https://videostream.vercel.app"),
// //   title: {
// //     default: "VideoStream - Your Ultimate Streaming Platform",
// //     template: "%s | VideoStream",
// //   },
// //   description:
// //     "Stream the latest movies, TV series, adult content, and exclusive content on VideoStream. Your ultimate entertainment destination.",
// //   keywords: ["video streaming", "movies", "TV series", "adult content", "entertainment", "watch online"],
// //   authors: [{ name: "VideoStream Team" }],
// //   creator: "VideoStream",
// //   publisher: "VideoStream",
// //   formatDetection: {
// //     email: false,
// //     address: false,
// //     telephone: false,
// //   },
// //   openGraph: {
// //     type: "website",
// //     locale: "en_US",
// //     url: "https://videostream.vercel.app",
// //     siteName: "VideoStream",
// //     title: "VideoStream - Your Ultimate Streaming Platform",
// //     description:
// //       "Stream the latest movies, TV series, adult content, and exclusive content on VideoStream. Your ultimate entertainment destination.",
// //     images: [
// //       {
// //         url: "https://videostream.vercel.app/og-image.jpg",
// //         width: 1200,
// //         height: 630,
// //         alt: "VideoStream - Your Ultimate Streaming Platform",
// //       },
// //     ],
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: "VideoStream - Your Ultimate Streaming Platform",
// //     description:
// //       "Stream the latest movies, TV series, adult content, and exclusive content on VideoStream. Your ultimate entertainment destination.",
// //     images: ["https://videostream.vercel.app/og-image.jpg"],
// //     creator: "@videostream",
// //   },
// //   robots: {
// //     index: true,
// //     follow: true,
// //     googleBot: {
// //       index: true,
// //       follow: true,
// //       "max-video-preview": -1,
// //       "max-image-preview": "large",
// //       "max-snippet": -1,
// //     },
// //   },
// //   alternates: {
// //     canonical: "https://videostream.vercel.app",
// //   },

// // }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           src="https://www.googletagmanager.com/gtag/js?id=G-P3E2NGMBQ1"
//         />
//         <Script id="ga-config" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-P3E2NGMBQ1');
//           `}
//         </Script>
    
//       </head>
//       <body className={inter.className}>
//         <Navigation />
//         <main className="min-h-screen bg-background">{children}</main>

        // {/* First Ad Script */}
        // <Script id="ad-script-1" strategy="lazyOnload">
        //   {`(function(d,z,s){
        //       s.src='https://'+d+'/401/'+z;
        //       try {
        //           (document.body || document.documentElement).appendChild(s);
        //       } catch(e) {
        //           console.error('Error loading script:', e);
        //       }
        //   })('groleegni.net',8640299,document.createElement('script'))`}
        // </Script>

        // {/* Second Ad Script */}
        // <Script id="ad-script-2" strategy="lazyOnload">
        //   {`(function(d,z,s){
        //       s.src='https://'+d+'/400/'+z;
        //       try {
        //           (document.body || document.documentElement).appendChild(s);
        //       } catch(e) {
        //           console.error('Error loading script:', e);
        //       }
        //   })('vemtoutcheeg.com',8845846,document.createElement('script'))`}
        // </Script>

//       </body>
//     </html>
//   )
// }



// import './globals.css'



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import type React from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

//main used

// export const metadata: Metadata = {
//   metadataBase: new URL("https://justwatchfree.vercel.app"),
//   title: {
//     default: "JustWatch Free - Watch Movies, Series & More",
//     template: "%s | JustWatch Free",
//   },
//   description:
//     "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//   keywords: [
//     "justwatch",
//     "just watch free",
//     "movies",
//     "TV series",
//     "video",
//     "free movies",
//     "free TV series",
//     "watch movie online",
//     "watch TV series online",
//     "free movie streaming",
//     "free TV series streaming",
//     "video streaming",
//     "entertainment",
//     "watch online",
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://justwatchfree.vercel.app",
//     siteName: "JustWatch Free",
//     title: "JustWatch Free - Watch Movies, Series & More",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     images: [
//       {
//         url: "https://justwatchfree.vercel.app/og_image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "JustWatch Free - Your Ultimate Streaming Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "JustWatch Free - Watch Movies, Series & More",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     images: ["https://justwatchfree.vercel.app/og_image.jpg"],
//     creator: "@JustWatch Free",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   alternates: {
//     canonical: "https://justwatchfree.vercel.app",
//   },
  
// };


// export const metadata: Metadata = {
//   metadataBase: new URL("https://justwatchfree.vercel.app"),
//   title: {
//     default: "JustWatch Free - Watch Movies, Series & More",
//     template: "%s | JustWatch Free",
//   },
//   description:
//     "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//   keywords: [
//     "justwatch",
//     "just watch free",
//     "movies",
//     "TV series",
//     "video",
//     "free movies",
//     "free TV series",
//     "watch movie online",
//     "watch TV series online",
//     "free movie streaming",
//     "free TV series streaming",
//     "video streaming",
//     "entertainment",
//     "watch online",
//     "download free",
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://justwatchfree.vercel.app",
//     siteName: "JustWatch Free",
//     title: "JustWatch Free - Watch Movies, Series & More",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     images: [
//       {
//         url: "https://justwatchfree.vercel.app/og_image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "JustWatch Free - Your Ultimate Streaming Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "JustWatch Free - Watch Movies, Series & More",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     images: ["https://justwatchfree.vercel.app/og_image.jpg"],
//     creator: "@JustWatch Free",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   alternates: {
//     canonical: "https://justwatchfree.vercel.app",
//   },
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "ItemList",
//       "name": "Movies List",
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
//           },
//         },
//       })),
//     },
//     {
//       "@type": "ItemList",
//       "name": "Adult List",
//       "itemListElement": adultMovies.map((movie, index) => ({
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
//           },
//         },
//       })),
//     },
//     {
//       "@type": "ItemList",
//       "name": "TV Series List",
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
//           },
//           "numberOfEpisodes": series.episodes.length,
//           "episode": series.episodes.map((episode, epIndex) => ({
//             "@type": "TVEpisode",
//             "episodeNumber": epIndex + 1,
//             "name": episode.title,
//             "url": `https://justwatchfree.vercel.app/series/${episode.id}`,
//           })),
//         },
//       })),
//     },
//   ],
// };



// ✅ Define structuredData before using it
// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   name: "JustWatch Free",
//   url: "https://justwatchfree.vercel.app",
//   potentialAction: {
//     "@type": "SearchAction",
//     target: "https://justwatchfree.vercel.app/search?q={search_term_string}",
//     "query-input": "required name=search_term_string",
//   },
// };

// export const metadata: Metadata = {
//   metadataBase: new URL("https://justwatchfree.vercel.app"),
//   title: {
//     default: "JustWatch Free - Watch Movies, Series & More",
//     template: "%s | JustWatch Free",
//   },
//   description:
//     "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//   keywords: [
//     "justwatch",
//     "just watch free",
//     "movies",
//     "TV series",
//     "video",
//     "free movies",
//     "free TV series",
//     "watch movie online",
//     "watch TV series online",
//     "free movie streaming",
//     "free TV series streaming",
//     "video streaming",
//     "entertainment",
//     "watch online",
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://justwatchfree.vercel.app",
//     siteName: "JustWatch Free",
//     title: "JustWatch Free - Watch Movies, Series & More",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     images: [
//       {
//         url: "https://justwatchfree.vercel.app/og_image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "JustWatch Free - Your Ultimate Streaming Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "JustWatch Free - Watch Movies, Series & More",
//     description:
//       "Stream the latest movies, TV series, and exclusive content on JustWatch Free. Your ultimate entertainment destination.",
//     images: ["https://justwatchfree.vercel.app/og_image.jpg"],
//     creator: "@JustWatch Free",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   alternates: {
//     canonical: "https://justwatchfree.vercel.app",
//   },
//   aggregateRating: {
//     "@type": "AggregateRating",
//     bestRating: "100",
//     ratingCount: "47",
//     ratingValue: "56",
//     ratingExplanation:
//       "The JustWatch rating is calculated by weighing and measuring how our users interact with shows & movies across different time periods and countries.",
//   },
//   author: [],
//   genre: [],
//   offers: {
//     "@type": "AggregateOffer",
//     offerCount: 0,
//     offers: [],
//   },
//   countryOfOrigin: "United States",
// };



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-P3E2NGMBQ1"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P3E2NGMBQ1');
          `}
        </Script>

        {/* Structured Data for SEO */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        /> */}
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background">{children}</main>
        
                {/* First Ad Script */}
                <Script id="ad-script-1" strategy="lazyOnload">
          {`(function(d,z,s){
              s.src='https://'+d+'/401/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('groleegni.net',8640299,document.createElement('script'))`}
        </Script>

        {/* Second Ad Script */}
        <Script id="ad-script-2" strategy="lazyOnload">
          {`(function(d,z,s){
              s.src='https://'+d+'/400/'+z;
              try {
                  (document.body || document.documentElement).appendChild(s);
              } catch(e) {
                  console.error('Error loading script:', e);
              }
          })('vemtoutcheeg.com',8845846,document.createElement('script'))`}
        </Script>
      </body>
    </html>
  )
}
