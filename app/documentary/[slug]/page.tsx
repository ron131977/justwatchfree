// import { notFound } from "next/navigation";
// import { getDocumentaryBySlug, getRelatedDocumentaries } from "@/lib/documentaries";
// import { VideoPlayer } from "@/components/video-player";
// import { DocumentaryMeta } from "@/components/documentary-meta";
// import { ShareButtons } from "@/components/share-buttons";
// import { RelatedDocumentaries } from "@/components/related-documentaries";
// import { Separator } from "@/components/ui/separator";
// import { formatDate } from "@/lib/utils";
// import type { Metadata } from "next";
// // import Script from "next/script"

// export async function generateMetadata({
//   params,
// }: { 
//   params: { slug: string } 
// }): Promise<Metadata> {
//   const documentary = await getDocumentaryBySlug(params.slug);

//   if (!documentary) {
//     return {};
//   }


//   return {
//     title: documentary.title,
//     description: documentary.description,
//     openGraph: {
//       title: documentary.title,
//       description: documentary.description,
//       type: "video.movie",
//       url: `${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/documentary/${documentary.slug}`,
//       images: [
//         {
//           url: documentary.thumbnailUrl,
//           width: 1200,
//           height: 630,
//           alt: documentary.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: documentary.title,
//       description: documentary.description,
//       images: [documentary.thumbnailUrl],
//     },
//     alternates: {
//       canonical: `https://justwatchfree.vercel.app/watch/${params.slug}`, // ✅ Fixed this property
//     },
//   };
// }

// export default async function DocumentaryPage({ params }: { params: { slug: string } }) {
//   const documentary = await getDocumentaryBySlug(params.slug);

//   if (!documentary) {
//     notFound();
//   }

//   const relatedDocumentaries = await getRelatedDocumentaries(
//     documentary.id, 
//     documentary.category, 
//     5
//   );

  
//    // ✅ Correct Schema Markup
//    const schema = {
//     "@context": "https://schema.org",
//     "@type": "VideoObject",
//     "name": documentary.title,
//     "description": documentary.description,
//     "thumbnailUrl": documentary.thumbnailUrl,
//     "uploadDate": documentary.releaseDate,
//     "duration": `PT${documentary.duration}M`,
//     "embedUrl": documentary.videoUrl,
//     "contentUrl": documentary.videoUrl,
//     "author": {
//       "@type": "Person",
//       "name": documentary.director
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "JustWatch Free",
//       "logo": {
//         "@type": "ImageObject",
//         "url": `https://justwatchfree.vercel.app/og_image.jpg`
//       }
//     }
//   };


//   return (
//     <>
//      {/* ✅ Correct way to add JSON-LD schema */}
//      <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <VideoPlayer
//             videoUrl={documentary.videoUrl}
//             thumbnailUrl={documentary.thumbnailUrl}
//             title={documentary.title}
//           />

//           <div className="mt-6">
//             <h1 className="text-3xl font-bold mb-2">{documentary.title}</h1>
//             <DocumentaryMeta
//               views={documentary.views}
//               duration={documentary.duration}
//               releaseDate={documentary.releaseDate}
//               category={documentary.category}
//             />

//             <div className="flex items-center justify-between mt-4">
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm text-muted-foreground">Released: {formatDate(documentary.releaseDate)}</span>
//                 <span className="text-sm text-muted-foreground">Director: {documentary.director}</span>
//               </div>
//               <ShareButtons
//                 url={`${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/documentary/${documentary.slug}`}
//                 title={documentary.title}
//                 description={documentary.description}
//               />
//             </div>

//             <Separator className="my-6" />

//             <div className="prose dark:prose-invert max-w-none">
//               <h2 className="text-2xl font-semibold mb-4">About this Movie & Tv Show</h2>
//               <p className="text-base leading-relaxed">{documentary.description}</p>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <h2 className="text-2xl font-semibold mb-4">Related Movie & Tv Show</h2>
//           <RelatedDocumentaries documentaries={relatedDocumentaries} />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }




























































































// import { notFound } from "next/navigation";
// import { getDocumentaryBySlug, getRelatedDocumentaries } from "@/lib/documentaries";
// import { VideoPlayer } from "@/components/video-player";
// import { DocumentaryMeta } from "@/components/documentary-meta";
// import { ShareButtons } from "@/components/share-buttons";
// import { RelatedDocumentaries } from "@/components/related-documentaries";
// import { Separator } from "@/components/ui/separator";
// import { formatDate } from "@/lib/utils";
// import type { Metadata } from "next";

// // ✅ Generate metadata correctly
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const documentary = await getDocumentaryBySlug(params.slug);

//   if (!documentary) {
//     return {};
//   }

//   return {
//     title: documentary.title,
//     description: documentary.description,
//     openGraph: {
//       title: documentary.title,
//       description: documentary.description,
//       type: "video.movie",
//       url: `${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/documentary/${documentary.slug}`,
//       images: [
//         {
//           url: documentary.thumbnailUrl,
//           width: 1200,
//           height: 630,
//           alt: documentary.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: documentary.title,
//       description: documentary.description,
//       images: [documentary.thumbnailUrl],
//     },
//     alternates: {
//       canonical: `https://justwatchfree.vercel.app/watch/${params.slug}`,
//     },
//   };
// }

// // ✅ Default export is a valid React component
// export default async function DocumentaryPage({ params }: { params: { slug: string } }) {
//   const documentary = await getDocumentaryBySlug(params.slug);

//   if (!documentary) {
//     return notFound(); // ✅ Stops execution correctly
//   }

//   let relatedDocumentaries = await getRelatedDocumentaries(
//     documentary.id, 
//     documentary.category, 
//     5
//   );

//   // ✅ Randomize the related documentaries list
//   relatedDocumentaries = relatedDocumentaries.sort(() => Math.random() - 0.5);

//   // ✅ Correct Schema Markup
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "VideoObject",
//     "name": documentary.title,
//     "description": documentary.description,
//     "thumbnailUrl": documentary.thumbnailUrl,
//     "uploadDate": documentary.releaseDate,
//     "duration": `PT${documentary.duration}M`,
//     "embedUrl": documentary.videoUrl,
//     "contentUrl": documentary.videoUrl,
//     "author": {
//       "@type": "Person",
//       "name": documentary.director
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "JustWatch Free",
//       "logo": {
//         "@type": "ImageObject",
//         "url": `https://justwatchfree.vercel.app/og_image.jpg`
//       }
//     }
//   };

//   return (
//     <>
//       {/* ✅ Correct JSON-LD schema injection */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />
      
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <VideoPlayer
//               videoUrl={documentary.videoUrl}
//               thumbnailUrl={documentary.thumbnailUrl}
//               title={documentary.title}
//             />

//             <div className="mt-6">
//               <h1 className="text-3xl font-bold mb-2">{documentary.title}</h1>
//               <DocumentaryMeta
//                 views={documentary.views}
//                 duration={documentary.duration}
//                 releaseDate={documentary.releaseDate}
//                 category={documentary.category}
//               />

//               <div className="flex items-center justify-between mt-4">
//                 <div className="flex items-center space-x-4">
//                   <span className="text-sm text-muted-foreground">Released: {formatDate(documentary.releaseDate)}</span>
//                   <span className="text-sm text-muted-foreground">Director: {documentary.director}</span>
//                 </div>
//                 <ShareButtons
//                   url={`${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/documentary/${documentary.slug}`}
//                   title={documentary.title}
//                   description={documentary.description}
//                 />
//               </div>

//               <Separator className="my-6" />

//               <div className="prose dark:prose-invert max-w-none">
//                 <h2 className="text-2xl font-semibold mb-4">About this Movie & TV Show</h2>
//                 <p className="text-base leading-relaxed">{documentary.description}</p>
//               </div>
//             </div>
//           </div>

//           {/* ✅ Related documentaries now display randomly */}
//           <div className="lg:col-span-1">
//             <h2 className="text-2xl font-semibold mb-4">Related Movie & TV Show</h2>
//             <RelatedDocumentaries documentaries={relatedDocumentaries} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }









// import { notFound } from "next/navigation";
// import { getDocumentaryBySlug, getRelatedDocumentaries } from "@/lib/documentaries";
// import { VideoPlayer } from "@/components/video-player";
// import { DocumentaryMeta } from "@/components/documentary-meta";
// import { ShareButtons } from "@/components/share-buttons";
// import { RelatedDocumentaries } from "@/components/related-documentaries";
// import { Separator } from "@/components/ui/separator";
// import { formatDate } from "@/lib/utils";
// import type { Metadata } from "next";
// import Head from "next/head";

// // ✅ Generate metadata correctly
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const documentary = await getDocumentaryBySlug(params.slug);

//   if (!documentary) {
//     return {};
//   }

//   const keywords = documentary.tags?.join(", ") || "";

//   return {
//     title: documentary.title,
//     description: documentary.description,
//     openGraph: {
//       title: documentary.title,
//       description: documentary.description,
//       type: "video.movie",
//       url: `${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/documentary/${documentary.slug}`,
//       images: [
//         {
//           url: documentary.thumbnailUrl,
//           width: 1200,
//           height: 630,
//           alt: documentary.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: documentary.title,
//       description: documentary.description,
//       images: [documentary.thumbnailUrl],
//     },
//     alternates: {
//       canonical: `https://justwatchfree.vercel.app/watch/${params.slug}`,
//     },
//   };
// }

// // ✅ Default export is a valid React component
// export default async function DocumentaryPage({ params }: { params: { slug: string } }) {
//   const documentary = await getDocumentaryBySlug(params.slug);

//   if (!documentary) {
//     notFound();
//   }

//   let relatedDocumentaries = await getRelatedDocumentaries(
//     documentary.id, 
//     documentary.category, 
//     5
//   );

//   // ✅ Randomize the related documentaries list across all categories
//   relatedDocumentaries = relatedDocumentaries.sort(() => Math.random() - 0.5);

//   // ✅ Correct Schema Markup
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "VideoObject",
//     "name": documentary.title,
//     "description": documentary.description,
//     "thumbnailUrl": documentary.thumbnailUrl,
//     "uploadDate": documentary.releaseDate,
//     "duration": `PT${documentary.duration}M`,
//     "embedUrl": documentary.videoUrl,
//     "contentUrl": documentary.videoUrl,
//     "author": {
//       "@type": "Person",
//       "name": documentary.director
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "JustWatch Free",
//       "logo": {
//         "@type": "ImageObject",
//         "url": `https://justwatchfree.vercel.app/og_image.jpg`
//       }
//     }
//   };

//   return (
//     <>
//        <Head>
//         <title>{documentary.title} | JustWatch Free</title>
//         <meta name="description" content={documentary.description} />
//         <meta name="keywords" content={keywords} /> {/* ✅ Inject dynamic keywords */}
//       </Head>
//       {/* ✅ Correct JSON-LD schema injection */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />
      
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//             <VideoPlayer
//               videoUrl={documentary.videoUrl}
//               thumbnailUrl={documentary.thumbnailUrl}
//               title={documentary.title}
//             />

//             <div className="mt-6">
//               <h1 className="text-3xl font-bold mb-2">{documentary.title}</h1>
//               <DocumentaryMeta
//                 views={documentary.views}
//                 duration={documentary.duration}
//                 releaseDate={documentary.releaseDate}
//                 category={documentary.category}
//                 tags={documentary.tags} 
//               />

//               <div className="flex items-center justify-between mt-4">
//                 <div className="flex items-center space-x-4">
//                   <span className="text-sm text-muted-foreground">Released: {formatDate(documentary.releaseDate)}</span>
//                   <span className="text-sm text-muted-foreground">Director: {documentary.director}</span>
//                 </div>
//                 <ShareButtons
//                   url={`${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/documentary/${documentary.slug}`}
//                   title={documentary.title}
//                   description={documentary.description}
//                 />
//               </div>

//               <Separator className="my-6" />

//               <div className="prose dark:prose-invert max-w-none">
//                 <h2 className="text-2xl font-semibold mb-4">About this Movie & TV Show</h2>
//                 <p className="text-base leading-relaxed">{documentary.description}</p>
//               </div>
//             </div>
//           </div>

//           {/* ✅ Related documentaries now display randomly */}
//           <div className="lg:col-span-1">
//             <h2 className="text-2xl font-semibold mb-4">Related Movie & TV Show</h2>
//             <RelatedDocumentaries documentaries={relatedDocumentaries} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { notFound } from "next/navigation";
import { getDocumentaryBySlug, getRelatedDocumentaries } from "@/lib/documentaries";
import { VideoPlayer } from "@/components/video-player";
import { DocumentaryMeta } from "@/components/documentary-meta";
import { ShareButtons } from "@/components/share-buttons";
import { RelatedDocumentaries } from "@/components/related-documentaries";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Script from "next/script"
import Head from "next/head";

// ✅ Generate metadata correctly
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const documentary = await getDocumentaryBySlug(params.slug);

  if (!documentary) {
    return {};
  }

  // ✅ Define keywords inside metadata generation
  const keywords = documentary.tags?.join(", ") || "";

  return {
    title: documentary.title,
    description: documentary.description,
    openGraph: {
      title: documentary.title,
      description: documentary.description,
      type: "video.movie",
      url: `${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/documentary/${documentary.slug}`,
      images: [
        {
          url: documentary.thumbnailUrl,
          width: 1200,
          height: 630,
          alt: documentary.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: documentary.title,
      description: documentary.description,
      images: [documentary.thumbnailUrl],
    },
    alternates: {
      canonical: `https://justwatchfree.vercel.app/watch/${params.slug}`,
    },
    keywords, // ✅ Keep keywords inside metadata
  };
}

// ✅ Keep all parameters in `DocumentaryPage`
export default async function DocumentaryPage({ params }: { params: { slug: string } }) {
  const documentary = await getDocumentaryBySlug(params.slug);

  if (!documentary) {
    notFound();
  }

  let relatedDocumentaries = await getRelatedDocumentaries(
    documentary.id, 
    documentary.category, 
    5
  );

  // ✅ Keep randomization for related documentaries
  relatedDocumentaries = relatedDocumentaries.sort(() => Math.random() - 0.5);

  // ✅ Define keywords inside `DocumentaryPage`
  const keywords = documentary.tags?.join(", ") || "";

  // ✅ Keep full Schema Markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": documentary.title,
    "description": documentary.description,
    "thumbnailUrl": documentary.thumbnailUrl,
    "uploadDate": documentary.releaseDate,
    "duration": `PT${documentary.duration}M`,
    "embedUrl": documentary.videoUrl,
    "contentUrl": documentary.videoUrl,
    "author": {
      "@type": "Person",
      "name": documentary.director
    },
    "publisher": {
      "@type": "Organization",
      "name": "JustWatch Free",
      "logo": {
        "@type": "ImageObject",
        "url": `https://justwatchfree.vercel.app/og_image.jpg`
      }
    }
  };

  return (
    <>
      <Head>
        <title>{documentary.title} | JustWatch Free</title>
        <meta name="description" content={documentary.description} />
        <meta name="keywords" content={keywords} /> {/* ✅ Keywords fixed */}
      </Head>
      <Script src="/script1.js" />
      {/* ✅ JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VideoPlayer
              videoUrl={documentary.videoUrl}
              thumbnailUrl={documentary.thumbnailUrl}
              title={documentary.title}
            />

            <div className="mt-6">
              <h1 className="text-3xl font-bold mb-2">{documentary.title}</h1>
              <DocumentaryMeta
                views={documentary.views}
                duration={documentary.duration}
                releaseDate={documentary.releaseDate}
                category={documentary.category}
                tags={documentary.tags} 
              />

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">Released: {formatDate(documentary.releaseDate)}</span>
                  <span className="text-sm text-muted-foreground">Director: {documentary.director}</span>
                </div>
                <ShareButtons
                  url={`${process.env.NEXT_PUBLIC_APP_URL || "https://justwatchfree.vercel.app"}/documentary/${documentary.slug}`}
                  title={documentary.title}
                  description={documentary.description}
                />
              </div>

              <Separator className="my-6" />

              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold mb-4">About this Movie & TV Show</h2>
                <p className="text-base leading-relaxed">{documentary.description}</p>
              </div>
            </div>
          </div>

          {/* ✅ Keep related documentaries unchanged */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">Related Movie & TV Show</h2>
            <RelatedDocumentaries documentaries={relatedDocumentaries} />
          </div>
        </div>
      </div>
    </>
  );
}
