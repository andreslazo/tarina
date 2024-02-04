import StoryThumbnail from "@/components/stories/StoryThumbnail"
import LabelsList from "@/components/stories/LabelsList"
import { Suspense } from "react"

export default async function StoryList({ label }) {
  const stories = await fetch(
    `http://localhost:3000/api/stories/${label}`, {
      cache: "no-store",
      next: {
        tags: ["stories"]
      }
    },
  ).then(res => res.json())

  return (
    <>
      <LabelsList />
      <Suspense fallback={<div>Loading section...</div>}>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 p-3 pb-16">
          {stories.map((story, index) => (
            <StoryThumbnail key={index} story={story} />
          ))}
        </div>
      </Suspense>
    </>
  )
}
