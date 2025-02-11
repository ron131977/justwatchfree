import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface AdultVideo {
  id: string
  title: string
  description: string
  videoUrl: string
  server2?: string
  server3?: string
  server4?: string
  thumbnail: string
  views: number
  duration: string
  uploadDate: string
  tags: string[]
}

interface AdultFormProps {
  data: AdultVideo[]
  onSave: (adultVideos: AdultVideo[]) => void
}

export function AdultForm({ data, onSave }: AdultFormProps) {
  const [adultVideos, setAdultVideos] = useState<AdultVideo[]>(data)

  const handleChange = (index: number, field: keyof AdultVideo, value: string | number | string[]) => {
    const updatedVideos = [...adultVideos]
    if (field === "tags") {
      updatedVideos[index][field] = (value as string).split(",").map((tag) => tag.trim())
    } else {
      updatedVideos[index][field] = value as never
    }
    setAdultVideos(updatedVideos)
  }

  const handleAdd = () => {
    setAdultVideos([
      ...adultVideos,
      {
        id: "",
        title: "",
        description: "",
        videoUrl: "",
        thumbnail: "",
        views: 0,
        duration: "",
        uploadDate: new Date().toISOString().split("T")[0],
        tags: [],
      },
    ])
  }

  const handleDelete = (index: number) => {
    const updatedVideos = adultVideos.filter((_, i) => i !== index)
    setAdultVideos(updatedVideos)
  }

  return (
    <div>
     <h2 className="text-2xl font-semibold mb-4 text-center">Adult Content Section</h2>
      <Accordion type="multiple" className="w-full">
    
        {adultVideos.map((video, index) => (
          
           <AccordionItem key={index} value={`video-${index}`}>
              {/* <AccordionTrigger>Adult Content</AccordionTrigger> */}
           <AccordionTrigger> {video.title || "(New Video)"}</AccordionTrigger>
           <AccordionContent>
           <div className="p-4 border rounded">
            <Input
              className="mb-2"
              placeholder="ID"
              value={video.id}
              onChange={(e) => handleChange(index, "id", e.target.value)}
            />
            <Input
              className="mb-2"
              placeholder="Title"
              value={video.title}
              onChange={(e) => handleChange(index, "title", e.target.value)}
            />
            <Textarea
              className="mb-2"
              placeholder="Description"
              value={video.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
            />
            <Input
              className="mb-2"
              placeholder="Video URL"
              value={video.videoUrl}
              onChange={(e) => handleChange(index, "videoUrl", e.target.value)}
            />
            <Input
              className="mb-2"
              placeholder="Server 2"
              value={video.server2 || ""}
              onChange={(e) => handleChange(index, "server2", e.target.value)}
            />
            <Input
              className="mb-2"
              placeholder="Server 3"
              value={video.server3 || ""}
              onChange={(e) => handleChange(index, "server3", e.target.value)}
            />
            <Input
              className="mb-2"
              placeholder="Server 4"
              value={video.server4 || ""}
              onChange={(e) => handleChange(index, "server4", e.target.value)}
            />
            <Input
              className="mb-2"
              placeholder="Thumbnail"
              value={video.thumbnail}
              onChange={(e) => handleChange(index, "thumbnail", e.target.value)}
            />
            <Input
              className="mb-2"
              type="number"
              placeholder="Views"
              value={video.views}
              onChange={(e) => handleChange(index, "views", Number.parseInt(e.target.value))}
            />
            <Input
              className="mb-2"
              placeholder="Duration"
              value={video.duration}
              onChange={(e) => handleChange(index, "duration", e.target.value)}
            />
            <Input
              className="mb-2"
              type="date"
              value={video.uploadDate}
              onChange={(e) => handleChange(index, "uploadDate", e.target.value)}
            />
            <Input
              className="mb-2"
              placeholder="Tags (comma-separated)"
              value={video.tags.join(", ")}
              onChange={(e) => handleChange(index, "tags", e.target.value)}
            />
                 </div>
                 <Button className="ml-2" onClick={() => onSave(adultVideos)}>Save Changes</Button>
                 <Button className="ml-2" variant="destructive" onClick={() => handleDelete(index)}>Delete</Button>
                 </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Button className="mt-4" onClick={handleAdd}>Add Adult Video</Button>
    </div>
  );
}
