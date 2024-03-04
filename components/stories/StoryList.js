import StoryThumbnail from "@/components/stories/StoryThumbnail"
import FullScreenLoading from "@/components/shared/FullScreenLoading"
import { Suspense } from "react"

export default function StoryList({ stories }) {
  return (
    <>
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
