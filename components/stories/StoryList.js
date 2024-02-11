import StoryThumbnail from "@/components/stories/StoryThumbnail"
import LabelsList from "@/components/stories/LabelsList"
import FullScreenLoading from "@/components/shared/FullScreenLoading"
import { Suspense } from "react"

export default async function StoryList({ label }) {
  const stories = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/stories/${label}`, {
      cache: "no-store",
      next: {
        tags: ["stories"]
      }
    },
  ).then(res => res.json())

  return (
    <>
      <LabelsList />
      <Suspense fallback={<FullScreenLoading />}>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 p-3 pb-16">
          {stories.map((story, index) => (
            <StoryThumbnail key={index} story={story} />
          ))}
        </div>
      </Suspense>
    </>
  )
}
