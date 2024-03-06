import { Title } from "@/components/shared/Title"
import NotFound from "@/app/not-found"
import ReadingListButton from "@/components/stories/ReadingListButton"
import EditStoryButton from "@/components/stories/EditStoryButton"
import RemoveStoryButton from "@/components/stories/RemoveStoryButton"
import StoryImage from "@/components/stories/StoryImage"

export default function Story({story}) {
  let date = new Date(story.createdAt * 1000).toLocaleString()

  if (!story?.title) {
    return <NotFound />
  }

  return (
    <div className="items-center justify-start p-2 h-screen">
      <Title>{story.title}</Title>
      <div className="p-4 flex flex-wrap">
        {/* eslint-disable-next-line max-len */}
        <div className="w-full md:w-1/4 bg-slate-500 p-3 rounded-md shadow-lg">
          <StoryImage story={story}/>
          <ReadingListButton story={story}/>

          <p>
            Labels: {story.labels ? story.labels.join(", ") : "No labels"}
          </p>

          <p>
            Views: {story.views || 0}
          </p>
          <p>
            Written by: {story.userEmail || "Unknown"}
          </p>
          <p>
            Last updated at: {date}
          </p>
          <EditStoryButton story={story}/>
          <RemoveStoryButton story={story}/>
        </div>
        {/* eslint-disable-next-line max-len */}
        <div className="w-full md:w-3/4 bg-slate-400 p-3 mt-2 lg:mt-0 rounded-md shadow-lg">
          <p>{story.content}</p>
        </div>
      </div>
    </div>
  )
}
