import Link from "next/link"
import Image from "next/image"

export default function StoryThumbnail({story}) {
  return (
    <Link href={`/story/${story.id}`}>
      {/* eslint-disable-next-line max-len */}
      <div className="p-4 bg-slate-600 hover:bg-slate-500 rounded shadow-sm hover:shadow-md">
        <div className="relative h-48">
          {story.thumbnail && (
            <Image
              src={story.thumbnail}
              alt="story-thumbnail"
              width={110}
              height={50}
            />
          )}
        </div>
        <div className="text-xl font-bold">
          {story.title}
        </div>
        <div className="text-sm">
          Likes: {story.likes || 0}
        </div>
      </div>
    </Link>
  )
}
