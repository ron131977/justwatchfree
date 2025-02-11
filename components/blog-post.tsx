// import Image from "next/image"
// import Link from "next/link"
// import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface BlogPostProps {
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

// export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
//   const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${category}/${id}` : ""

//   return (
//     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
//       <header className="mb-6">
//         <h1 className="text-4xl font-bold mb-2 font-sans">{title}</h1>
//         <div className="text-sm text-gray-600 mb-4">
//           <span>
//             {date} | By {author} | Category: {category}
//           </span>
//         </div>
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           width={800}
//           height={400}
//           className="rounded-lg"
//           quality={90}
//           style={{
//             filter: "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)",
//           }}
//         />
//       </header>

//       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />

//       {youtubeId && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               src={`https://www.youtube.com/embed/${youtubeId}`}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {relatedLink && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
//           <Link href={relatedLink} passHref>
//             <Button as="a">
//               Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page
//             </Button>
//           </Link>
//         </div>
//       )}

//       <div className="flex items-center justify-between border-t pt-4">
//         <div className="flex space-x-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
//           >
//             <Facebook className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
//           >
//             <Twitter className="w-4 h-4 mr-2" />
//             Tweet
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
//           >
//             <Linkedin className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//         </div>
//         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
//           <LinkIcon className="w-4 h-4 mr-2" />
//           Copy Link
//         </Button>
//       </div>
//     </article>
//   )
// }












  // "use client";

  // import Image from "next/image"
  // import Link from "next/link"
  // import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
  // import { Button } from "@/components/ui/button"

  // interface BlogPostProps {
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

  // export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
  //   const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${category}/${id}` : ""

  //   return (
  //     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
  //       <header className="mb-6">
  //         <h1 className="text-4xl font-bold mb-2 font-sans">{title}</h1>
  //         <div className="text-sm text-gray-600 mb-4">
  //           <span>
  //             {date} | By {author} | Category: {category}
  //           </span>
  //         </div>
  //         <Image src={image || "/placeholder.svg"} alt={title} width={800} height={400} className="rounded-lg" />
  //       </header>

  //       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />

  //       {youtubeId && (
  //         <div className="mb-6">
  //           <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
  //           <div className="aspect-w-16 aspect-h-9">
  //             <iframe
  //               src={`https://www.youtube.com/embed/${youtubeId}`}
  //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //               allowFullScreen
  //               className="w-full h-full"
  //             ></iframe>
  //           </div>
  //         </div>
  //       )}

  //       {relatedLink && (
  //         <div className="mb-6">
  //           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
  //           <Link href={relatedLink}>
  //             <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
  //           </Link>
  //         </div>
  //       )}

  //       <div className="flex items-center justify-between border-t pt-4">
  //         <div className="flex space-x-4">
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
  //           >
  //             <Facebook className="w-4 h-4 mr-2" />
  //             Share
  //           </Button>
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
  //           >
  //             <Twitter className="w-4 h-4 mr-2" />
  //             Tweet
  //           </Button>
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
  //           >
  //             <Linkedin className="w-4 h-4 mr-2" />
  //             Share
  //           </Button>
  //         </div>
  //         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
  //           <LinkIcon className="w-4 h-4 mr-2" />
  //           Copy Link
  //         </Button>
  //       </div>
  //     </article>
  //   )
  // }


//   "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface BlogPostProps {
//   id: string;
//   title: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
//   category: "movies" | "tvseries" | "adult";
//   youtubeId?: string;
//   relatedLink?: string;
// }

// export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
//   const [shareUrl, setShareUrl] = useState("");

//   useEffect(() => {
//     setShareUrl(`${window.location.origin}/blog/${category}/${id}`);
//   }, [id, category]);

//   return (
//     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
//       <header className="mb-6">
//         <h1 className="text-4xl font-bold mb-2 font-sans">{title}</h1>
//         <div className="text-sm text-gray-600 mb-4">
//           <span>
//             {date} | By {author} | Category: {category}
//           </span>
//         </div>
//         <Image src={image || "/placeholder.svg"} alt={title} width={800} height={400} className="rounded-lg" />
//       </header>

//       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />

//       {youtubeId && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               src={`https://www.youtube.com/embed/${youtubeId}`}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {relatedLink && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
//           <Link href={relatedLink}>
//             <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
//           </Link>
//         </div>
//       )}

//       <div className="flex items-center justify-between border-t pt-4">
//         <div className="flex space-x-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
//           >
//             <Facebook className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
//           >
//             <Twitter className="w-4 h-4 mr-2" />
//             Tweet
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
//           >
//             <Linkedin className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//         </div>
//         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
//           <LinkIcon className="w-4 h-4 mr-2" />
//           Copy Link
//         </Button>
//       </div>
//     </article>
//   );
// }



// "use client";

// import Image from "next/image"
// import Link from "next/link"
// import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"


// interface BlogPostProps {
//   id: string;
//   title: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
//   category: "movies" | "tvseries" | "adult";
//   youtubeId?: string;
//   relatedLink?: string;
// }

// export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
//   return (
//     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
//       <header className="mb-6">
//         <Link href={`/blog/${category}/${id}`}>
//           <h1 className="text-4xl font-bold mb-2 font-sans hover:underline cursor-pointer">
//             {title}
//           </h1>
//         </Link>
//         <div className="text-sm text-gray-600 mb-4">
//           <span>
//             {date} | By {author} | Category: {category}
//           </span>
//         </div>
//         <Link href={`/blog/${category}/${id}`}>
//           <Image src={image || "/placeholder.svg"} alt={title} width={800} height={400} className="rounded-lg" />
//         </Link>
//       </header>

//       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />
//       {youtubeId && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               src={`https://www.youtube.com/embed/${youtubeId}`}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {relatedLink && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
//           <Link href={relatedLink}>
//             <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
//           </Link>
//         </div>
//       )}

//       <div className="flex items-center justify-between border-t pt-4">
//         <div className="flex space-x-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
//           >
//             <Facebook className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
//           >
//             <Twitter className="w-4 h-4 mr-2" />
//             Tweet
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
//           >
//             <Linkedin className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//         </div>
//         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
//           <LinkIcon className="w-4 h-4 mr-2" />
//           Copy Link
//         </Button>
//       </div>
//     </article>
//   )
// }



// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface BlogPostProps {
//   id: string;
//   title: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
//   category: "movies" | "tvseries" | "adult";
//   youtubeId?: string;
//   relatedLink?: string;
// }

// export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
//   const [shareUrl, setShareUrl] = useState("");

//   useEffect(() => {
//     setShareUrl(`${window.location.origin}/blog/${category}/${id}`);
//   }, [id, category]);

//   return (
//     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
//       <header className="mb-6">
//         <Link href={`/blog/${category}/${id}`}>
//           <h1 className="text-4xl font-bold mb-2 font-sans hover:no-underline cursor-pointer">
//             {title}
//           </h1>
//         </Link>
//         <div className="text-sm text-gray-600 mb-4">
//           <span>
//             {date} | By {author} | Category: {category}
//           </span>
//         </div>
//         <Link href={`/blog/${category}/${id}`}>
//           <Image src={image || "/placeholder.svg"} alt={title} width={800} height={400} className="rounded-lg" />
//         </Link>
//       </header>

//       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />

//       {youtubeId && (
//   <div className="mb-6">
//     <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
//     <div className="relative w-full aspect-video">
//       <iframe
//         className="absolute top-0 left-0 w-full h-full"
//         src={`https://www.youtube.com/embed/${youtubeId}`}
//         title={title}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   </div>
// )}

//       {relatedLink && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
//           <Link href={relatedLink}>
//             <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
//           </Link>
//         </div>
//       )}

//       <div className="flex items-center justify-between border-t pt-4">
//         <div className="flex space-x-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
//           >
//             <Facebook className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
//           >
//             <Twitter className="w-4 h-4 mr-2" />
//             Tweet
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
//           >
//             <Linkedin className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//         </div>
//         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
//           <LinkIcon className="w-4 h-4 mr-2" />
//           Copy Link
//         </Button>
//       </div>
//     </article>
//   );
// }


  // "use client";

  // import Image from "next/image"
  // import Link from "next/link"
  // import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
  // import { Button } from "@/components/ui/button"

  // interface BlogPostProps {
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

  // export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
  //   const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${category}/${id}` : ""

  //   return (
  //     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
  //       <header className="mb-6">
  //         <h1 className="text-4xl font-bold mb-2 font-sans">{title}</h1>
  //         <div className="text-sm text-gray-600 mb-4">
  //           <span>
  //             {date} | By {author} | Category: {category}
  //           </span>
  //         </div>
  //         <Image src={image || "/placeholder.svg"} alt={title} width={800} height={400} className="rounded-lg" />
  //       </header>

  //       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />

  //       {youtubeId && (
  //         <div className="mb-6">
  //           <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
  //           <div className="aspect-w-16 aspect-h-9">
  //             <iframe
  //               src={`https://www.youtube.com/embed/${youtubeId}`}
  //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //               allowFullScreen
  //               className="w-full h-full"
  //             ></iframe>
  //           </div>
  //         </div>
  //       )}

  //       {relatedLink && (
  //         <div className="mb-6">
  //           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
  //           <Link href={relatedLink}>
  //             <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
  //           </Link>
  //         </div>
  //       )}

  //       <div className="flex items-center justify-between border-t pt-4">
  //         <div className="flex space-x-4">
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
  //           >
  //             <Facebook className="w-4 h-4 mr-2" />
  //             Share
  //           </Button>
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
  //           >
  //             <Twitter className="w-4 h-4 mr-2" />
  //             Tweet
  //           </Button>
  //           <Button
  //             variant="outline"
  //             size="sm"
  //             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
  //           >
  //             <Linkedin className="w-4 h-4 mr-2" />
  //             Share
  //           </Button>
  //         </div>
  //         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
  //           <LinkIcon className="w-4 h-4 mr-2" />
  //           Copy Link
  //         </Button>
  //       </div>
  //     </article>
  //   )
  // }


//   "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface BlogPostProps {
//   id: string;
//   title: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
//   category: "movies" | "tvseries" | "adult";
//   youtubeId?: string;
//   relatedLink?: string;
// }

// export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
//   const [shareUrl, setShareUrl] = useState("");

//   useEffect(() => {
//     setShareUrl(`${window.location.origin}/blog/${category}/${id}`);
//   }, [id, category]);

//   return (
//     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
//       <header className="mb-6">
//         <h1 className="text-4xl font-bold mb-2 font-sans">{title}</h1>
//         <div className="text-sm text-gray-600 mb-4">
//           <span>
//             {date} | By {author} | Category: {category}
//           </span>
//         </div>
//         <Image src={image || "/placeholder.svg"} alt={title} width={800} height={400} className="rounded-lg" />
//       </header>

//       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />

//       {youtubeId && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               src={`https://www.youtube.com/embed/${youtubeId}`}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {relatedLink && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
//           <Link href={relatedLink}>
//             <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
//           </Link>
//         </div>
//       )}

//       <div className="flex items-center justify-between border-t pt-4">
//         <div className="flex space-x-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
//           >
//             <Facebook className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
//           >
//             <Twitter className="w-4 h-4 mr-2" />
//             Tweet
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
//           >
//             <Linkedin className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//         </div>
//         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
//           <LinkIcon className="w-4 h-4 mr-2" />
//           Copy Link
//         </Button>
//       </div>
//     </article>
//   );
// }



// "use client";

// import Image from "next/image"
// import Link from "next/link"
// import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"


// interface BlogPostProps {
//   id: string;
//   title: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
//   category: "movies" | "tvseries" | "adult";
//   youtubeId?: string;
//   relatedLink?: string;
// }

// export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
//   return (
//     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
//       <header className="mb-6">
//         <Link href={`/blog/${category}/${id}`}>
//           <h1 className="text-4xl font-bold mb-2 font-sans hover:underline cursor-pointer">
//             {title}
//           </h1>
//         </Link>
//         <div className="text-sm text-gray-600 mb-4">
//           <span>
//             {date} | By {author} | Category: {category}
//           </span>
//         </div>
//         <Link href={`/blog/${category}/${id}`}>
//           <Image src={image || "/placeholder.svg"} alt={title} width={800} height={400} className="rounded-lg" />
//         </Link>
//       </header>

//       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />
//       {youtubeId && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               src={`https://www.youtube.com/embed/${youtubeId}`}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="w-full h-full"
//             ></iframe>
//           </div>
//         </div>
//       )}

//       {relatedLink && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
//           <Link href={relatedLink}>
//             <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
//           </Link>
//         </div>
//       )}

//       <div className="flex items-center justify-between border-t pt-4">
//         <div className="flex space-x-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
//           >
//             <Facebook className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
//           >
//             <Twitter className="w-4 h-4 mr-2" />
//             Tweet
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
//           >
//             <Linkedin className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//         </div>
//         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
//           <LinkIcon className="w-4 h-4 mr-2" />
//           Copy Link
//         </Button>
//       </div>
//     </article>
//   )
// }



// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface BlogPostProps {
//   id: string;
//   title: string;
//   content: string;
//   image: string;
//   date: string;
//   author: string;
//   category: "movies" | "tvseries" | "adult";
//   youtubeId?: string;
//   relatedLink?: string;
// }

// export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
//   const [shareUrl, setShareUrl] = useState("");

//   useEffect(() => {
//     setShareUrl(`${window.location.origin}/blog/${category}/${id}`);
//   }, [id, category]);

//   return (
//     <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
//       <header className="mb-6">
//         <Link href={`/blog/${category}/${id}`}>
//           <h1 className="text-4xl font-bold mb-2 font-sans hover:no-underline cursor-pointer">
//             {title}
//           </h1>
//         </Link>
//         <div className="text-sm text-gray-600 mb-4">
//           <span>
//             {date} | By {author} | Category: {category}
//           </span>
//         </div>
//         <Link href={`/blog/${category}/${id}`}>
//           <Image src={image || "/placeholder.svg"} alt={title} width={800} height={400} className="rounded-lg" />
//         </Link>
//       </header>

//       <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />

//       {youtubeId && (
//   <div className="mb-6">
//     <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
//     <div className="relative w-full aspect-video">
//       <iframe
//         className="absolute top-0 left-0 w-full h-full"
//         src={`https://www.youtube.com/embed/${youtubeId}`}
//         title={title}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   </div>
// )}

//       {relatedLink && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
//           <Link href={relatedLink}>
//             <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
//           </Link>
//         </div>
//       )}

//       <div className="flex items-center justify-between border-t pt-4">
//         <div className="flex space-x-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
//           >
//             <Facebook className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
//           >
//             <Twitter className="w-4 h-4 mr-2" />
//             Tweet
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
//           >
//             <Linkedin className="w-4 h-4 mr-2" />
//             Share
//           </Button>
//         </div>
//         <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
//           <LinkIcon className="w-4 h-4 mr-2" />
//           Copy Link
//         </Button>
//       </div>
//     </article>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: "movies" | "tvseries" | "adult";
  youtubeId?: string;
  relatedLink?: string;
}

export function BlogPost({ id, title, content, image, date, author, category, youtubeId, relatedLink }: BlogPostProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(`${window.location.origin}/blog/${category}/${id}`);
  }, [id, category]);

  return (
    <article className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-md font-serif">
      <header className="mb-6">
        <Link href={`/blog/${category}/${id}`}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 font-sans hover:no-underline cursor-pointer text-center sm:text-left">
            {title}
          </h1>
        </Link>
        <div className="text-sm text-gray-600 mb-4 text-center sm:text-left">
          <span>
            {date} | By {author} | Category: {category}
          </span>
        </div>
        <Link href={`/blog/${category}/${id}`}>
          <Image 
            src={image || "/placeholder.svg"} 
            alt={title} 
            width={800} 
            height={400} 
            className="rounded-lg w-full h-auto object-cover"
          />
        </Link>
      </header>

      <div className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: content }} />

      {youtubeId && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">Trailer</h2>
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {relatedLink && (
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-2xl font-semibold mb-4">Watch Now</h2>
          <Link href={relatedLink}>
            <Button>Go to {category === "tvseries" ? "Series" : category === "adult" ? "Video" : "Movie"} Page</Button>
          </Link>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center sm:justify-between border-t pt-4 gap-4">
        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
          >
            <Facebook className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`, "_blank")}
          >
            <Twitter className="w-4 h-4 mr-2" />
            Tweet
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`, "_blank")}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
        <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(shareUrl)}>
          <LinkIcon className="w-4 h-4 mr-2" />
          Copy Link
        </Button>
      </div>
    </article>
  );
}
