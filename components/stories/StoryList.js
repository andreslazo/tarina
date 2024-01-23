import StoryThumbnail from "@/components/stories/StoryThumbnail"
import { mockData } from "@/data/stories";
import LabelsList from "./LabelsList";

export default function StoryList({ storyList, label }) {
  const allLabels = mockData.map(story => story.labels).flat();
  const stories = label === 'ALL' ? storyList : storyList.filter(story => story.labels.includes(label))

  return (
    <>
      <LabelsList allLabels={allLabels} />
      <div className="grid grid-cols-3 gap-4">
        {stories.map((story, index) => (
          <StoryThumbnail key={index} story={story} />
        ))}
      </div>
    </>
  )
}
