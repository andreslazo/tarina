import StoryThumbnail from "@/components/stories/StoryThumbnail"
import LabelsList from "@/components/stories/LabelsList"

export default async function StoryList({ label }) {
  const stories = await fetch(
    `http://localhost:3000/api/stories/${label}`, {
      cache: "no-store",
      next: {
        tags: ["stories"]
      }
    },
  ).then(res => res.json())

  const allLabels = await fetch(
    "http://localhost:3000/api/labels",
    {cache: "no-store"}
  ).then(res => res.json())

  return (
    <>
      <LabelsList allLabels={allLabels} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 p-3">
        {stories.map((story, index) => (
          <StoryThumbnail key={index} story={story} />
        ))}
      </div>
    </>
  )
}
