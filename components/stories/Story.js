import Image from "next/image"
import Button from "@/components/shared/Button"
import { Title } from "@/components/shared/Title"

export default function Story({story}) {
  return (
    <div className="items-center justify-start p-2 h-screen">
      <Title>{story.name}</Title>
      <div className="p-4 flex flex-wrap">
        <div className="w-full md:w-1/4 bg-slate-500 p-3 rounded-md">
          <div className="relative h-48">
            <Image
              src={story.thumbnail}
              alt="story-thumbnail"
              width={190}
              height={50}
            />
          </div>
          <p>
            Labels: {story.labels.join(", ")}
          </p>
          <div className="flex items-center space-x-4">
            <Button>Dislike</Button>
            <p>
              Likes: {story.likes}
            </p>
            <Button>Like</Button>
          </div>
          <p>
            Views: {story.views}
          </p>
          <p>
            Written by: {story.userId}
          </p>
          <p>
            Created at: {story.createdAt}
          </p>
          <p>
            Comments:
          </p>
        </div>
        <div className="w-full md:w-3/4 bg-slate-400 p-3 mt-2 rounded-md">
          <p>Aqui va la historia escrita</p>
        </div>
      </div>
    </div>
  )
}
