import Image from "next/image"
import Button from "@/components/shared/Button"
import { Title } from "@/components/shared/Title"
import ReadingListButton from "@/components/stories/ReadingListButton"

export default function Story({story}) {
  let date = new Date(story.createdAt * 1000).toLocaleString()

  return (
    <div className="items-center justify-start p-2 h-screen">
      <Title>{story.title}</Title>
      <div className="p-4 flex flex-wrap">
        {/* eslint-disable-next-line max-len */}
        <div className="w-full md:w-1/4 bg-slate-500 p-3 rounded-md shadow-lg">
          {story.thumbnail &&
            <div className="relative h-100">
                <Image
                  src={story.thumbnail}
                  alt="story-thumbnail"
                  width={190}
                  height={50}
                />
            </div>
          }
          <p>
            Labels: {story.labels.join(", ")}
          </p>
          <div className="flex items-center space-x-4">
            <Button>Dislike</Button>
            <p>
              Likes: {story.likes || 0}
            </p>
            <Button>Like</Button>
          </div>
          <p>
            Views: {story.views || 0}
          </p>
          <p>
            Written by: {story.userId}
          </p>
          <p>
            Created at: {date}
          </p>
          <p>
            Comments:
          </p>
          <ReadingListButton story={story}/>
        </div>
        {/* eslint-disable-next-line max-len */}
        <div className="w-full md:w-3/4 bg-slate-400 p-3 mt-2 lg:mt-0 rounded-md shadow-lg">
          <p>Aqui va la historia escrita</p>
        </div>
      </div>
    </div>
  )
}
