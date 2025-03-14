// "use client"

// import { useState, useRef, useEffect } from "react"
// import Image from "next/image"
// import { Play, Pause, Maximize, Minimize } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface VideoPlayerProps {
//   videoUrl: string
//   thumbnailUrl: string
//   title: string
// }

// export function VideoPlayer({ videoUrl, thumbnailUrl, title }: VideoPlayerProps) {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [showControls, setShowControls] = useState(true)
//   const [isFullscreen, setIsFullscreen] = useState(false)

//   const containerRef = useRef<HTMLDivElement>(null)
//   const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

//   // Extract the video ID from the short.icu URL
//   const getVideoId = (url: string) => {
//     const match = url.match(/short\.icu\/([^?]+)/)
//     return match ? match[1] : null
//   }

//   const videoId = getVideoId(videoUrl)

//   // Extract the thumbnail from the URL if available
//   const getThumbnailFromUrl = (url: string) => {
//     const match = url.match(/thumbnail=([^&]+)/)
//     return match ? decodeURIComponent(match[1]) : thumbnailUrl
//   }

//   const displayThumbnail = getThumbnailFromUrl(videoUrl)

//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement)
//     }

//     document.addEventListener("fullscreenchange", handleFullscreenChange)

//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange)
//     }
//   }, [])

//   const toggleFullscreen = () => {
//     const container = containerRef.current
//     if (!container) return

//     if (!isFullscreen) {
//       if (container.requestFullscreen) {
//         container.requestFullscreen()
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen()
//       }
//     }
//   }

//   const handleMouseMove = () => {
//     setShowControls(true)

//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current)
//     }

//     if (isPlaying) {
//       controlsTimeoutRef.current = setTimeout(() => {
//         setShowControls(false)
//       }, 3000)
//     }
//   }

//   const handlePlay = () => {
//     setIsPlaying(true)
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full aspect-video bg-black rounded-lg overflow-hidden"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => isPlaying && setShowControls(false)}
//     >
//       {!isPlaying && (
//         <div className="absolute inset-0 flex items-center justify-center z-10">
//           <Image src={displayThumbnail || "/placeholder.svg"} alt={title} fill className="object-cover" />
//           <div className="absolute inset-0 bg-black/30" />
//           <Button
//             size="icon"
//             variant="ghost"
//             className="w-20 h-20 rounded-full bg-primary/80 text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform z-20"
//             onClick={handlePlay}
//           >
//             <Play className="h-10 w-10" />
//           </Button>
//         </div>
//       )}

//       {/* Embedded iframe player */}
//       <div className={`w-full h-full ${!isPlaying ? "hidden" : ""}`}>
//         <iframe
//           src={`https://short.icu/embed/${videoId}`}
//           title={title}
//           className="absolute inset-0 w-full h-full"
//           allowFullScreen
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           onLoad={() => setIsPlaying(true)}
//         />
//       </div>

//       <div
//         className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
//           showControls || !isPlaying ? "opacity-100" : "opacity-0"
//         } z-20`}
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Button size="icon" variant="ghost" className="h-8 w-8 text-white" onClick={handlePlay}>
//               {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
//             </Button>
//           </div>

//           <div className="flex items-center gap-2">
//             <Button size="icon" variant="ghost" className="h-8 w-8 text-white" onClick={toggleFullscreen}>
//               {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// "use client"


// interface VideoPlayerProps {
//   videoUrl: string;
//   title: string;
// }

// export function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
//   return (
//     <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
//       <iframe
//         src={videoUrl} // Pass the full video URL directly
//         title={title}
//         className="absolute inset-0 w-full h-full"
//         allowFullScreen
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         style={{
//           filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)",
//         }}
//       />
//     </div>
//   );
// }



//FINAL WORK 


// "use client"

// interface VideoPlayerProps {
//   videoUrl: string
//   thumbnailUrl: string  // Added missing prop
//   title: string
// }

// export function VideoPlayer({ videoUrl, thumbnailUrl, title }: VideoPlayerProps) {
//   return (
//     <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
//       {/* Add thumbnail implementation */}
//       <div className="absolute inset-0 bg-cover bg-center" 
//            style={{ backgroundImage: `url(${thumbnailUrl})` }} />
      
//       <iframe
//         src={videoUrl}
//         title={title}
//         className="absolute inset-0 w-full h-full"
//         allowFullScreen
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         style={{
//           filter: "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)",
//         }}
//       />
//     </div>
//   )
// }

























// "use client"

// interface VideoPlayerProps {
//   videoUrl: string
//   thumbnailUrl: string  // Added missing prop
//   title: string
// }

// export function VideoPlayer({ videoUrl, thumbnailUrl, title }: VideoPlayerProps) {
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

// const filterStyle = {
//   filter: isMobile
//     // ? "contrast(1.4) saturate(1.5) brightness(1.3) hue-rotate(6deg)" // Softer for small screens
//     // : "contrast(1.5) saturate(1.7) brightness(1.4) hue-rotate(8deg)", // More vibrant on larger screens
 
//     // ? "contrast(1.3) saturate(1.6) brightness(1.5) hue-rotate(6deg)" // Mobile: Softer and brighter
//     // : "contrast(1.4) saturate(1.7) brightness(1.6) hue-rotate(7deg)", // Desktop: Vibrant but not too dark

//     ? "contrast(1.1) saturate(1.4) brightness(1.6) hue-rotate(0deg)" // Mobile: Softer, lighter, and natural
//     : "contrast(1.1) saturate(1.5) brightness(1.7) hue-rotate(0deg)", // Desktop: Balanced vibrance, no harsh blacks

//     // ? "contrast(1.2) saturate(1.1) brightness(1.1) hue-rotate(-2deg)" // Mobile: Softer & slightly brighter
//     // : "contrast(1.3) saturate(1.2) brightness(1.0) hue-rotate(0deg)", // Desktop: Natural & balanced
// };

//   return (
//     <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
//       {/* Add thumbnail implementation */}
//       <div className="absolute inset-0 bg-cover bg-center" 
//            style={{ backgroundImage: `url(${thumbnailUrl})` }} />
      
//       <iframe
//         src={videoUrl}
//         title={title}
//         className="absolute inset-0 w-full h-full"
//         allowFullScreen
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         // style={{
//         //   // filter: "contrast(1.5) saturate(1.4) brightness(1.2) hue-rotate(10deg)",
//         //   filter: "contrast(1.5) saturate(1.7) brightness(1.4) hue-rotate(8deg)",

//         // }}
//         style={filterStyle}

//       />
//     </div>
//   )
// }



"use client";

import { useState } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  videoUrl1?: string; // Player 2
  videoUrl2?: string; // Player 3
  videoUrl3?: string; // Player 4 (vidsrc.cc)
  thumbnailUrl: string;
  title: string;
}

export function VideoPlayer({ videoUrl, videoUrl1, videoUrl2, videoUrl3, thumbnailUrl, title }: VideoPlayerProps) {
  const [activeUrl, setActiveUrl] = useState(videoUrl); // Default Player 1
  const [isBlocked, setIsBlocked] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const filterStyle = {
    filter: isMobile
      ? "contrast(1.1) saturate(1.4) brightness(1.6) hue-rotate(0deg)"
      : "contrast(1.1) saturate(1.5) brightness(1.7) hue-rotate(0deg)",
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      {/* Player Switch Buttons - Centered */}
      <div className="absolute top-2 left-0 w-full flex justify-center space-x-2 z-10">
        <button
          onClick={() => { setActiveUrl(videoUrl); setIsBlocked(false); }}
          className={`px-4 py-1 text-sm font-semibold rounded-md ${
            activeUrl === videoUrl ? "bg-blue-600 text-white" : "bg-gray-500 text-black"
          }`}
        >
          Player 1
        </button>
        {videoUrl1 && (
          <button
            onClick={() => { setActiveUrl(videoUrl1); setIsBlocked(false); }}
            className={`px-4 py-1 text-sm font-semibold rounded-md ${
              activeUrl === videoUrl1 ? "bg-blue-600 text-white" : "bg-gray-500 text-black"
            }`}
          >
            Player 2
          </button>
        )}
        {videoUrl2 && (
          <button
            onClick={() => { setActiveUrl(videoUrl2); setIsBlocked(false); }}
            className={`px-4 py-1 text-sm font-semibold rounded-md ${
              activeUrl === videoUrl2 ? "bg-blue-600 text-white" : "bg-gray-500 text-black"
            }`}
          >
            Player 3
          </button>
        )}
        {videoUrl3 && (
          <button
            onClick={() => { setActiveUrl(videoUrl3); setIsBlocked(false); }}
            className={`px-4 py-1 text-sm font-semibold rounded-md ${
              activeUrl === videoUrl3 ? "bg-blue-600 text-white" : "bg-gray-500 text-black"
            }`}
          >
            Player 4
          </button>
        )}
      </div>

      {/* Background Thumbnail */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${thumbnailUrl})` }} />

      {/* Video Player */}
      {isBlocked ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
          ❌ This player is blocked! Try another one.
        </div>
      ) : (
        <iframe
          src={activeUrl}
          title={title}
          className="absolute inset-0 w-full h-full"
          referrerPolicy="origin"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={filterStyle}
          onError={() => setIsBlocked(true)} // Detects if iframe fails to load
        />
      )}
    </div>
  );
}
