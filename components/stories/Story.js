import Image from "next/image"
import Button from "@/components/shared/Button"
import { Title } from "@/components/shared/Title"

export default function Story({story}) {
  return (
    <>
      <Title>{story.name}</Title>
      <div className="p-4 flex flex-wrap rounded">
        <div className="w-full md:w-1/4 bg-slate-500 p-2">
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
          <Button>Dislike</Button>
          <p>
            Likes: {story.likes}
          </p>
          <Button>Like</Button>
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
        <div className="w-full md:w-3/4 bg-slate-400 p-3">
          <p>Aqui va la historia escrita</p>
        </div>
      </div>
    </>
  )
}
