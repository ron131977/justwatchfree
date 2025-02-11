"use client"

import { useState } from "react"

interface Video {
  title: string
  videoUrl: string
  server2?: string
  server3?: string
  server4?: string
}

export function VideoPlayer({ video }: { video: Video }) {
  const [currentServer, setCurrentServer] = useState(video.videoUrl)

  const serverButtons = [
    { name: "Server 1", url: video.videoUrl },
    { name: "Server 2", url: video.server2 },
    { name: "Server 3", url: video.server3 },
    { name: "Server 4", url: video.server4 },
  ].filter((server) => server.url)

  return (
    <div className="ml-1">
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <iframe
          src={currentServer}
          title={video.title}
          frameBorder="0"
          allowFullScreen
          style={{ width: "100%", aspectRatio: "16 / 9" }}
        ></iframe>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {serverButtons.map((server, index) => (
          <button
            key={index}
            onClick={() => setCurrentServer(server.url)}
            className={`px-4 py-2 rounded ${currentServer === server.url ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
          >
            {server.name}
          </button>
        ))}
      </div>
    </div>
  )
}

