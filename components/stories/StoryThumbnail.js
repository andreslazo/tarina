import Link from "next/link"
import StoryImage from "./StoryImage"

export default function StoryThumbnail({story}) {
  return (
    <Link href={`/story/${story.id}`}>
      {/* eslint-disable-next-line max-len */}
      <div className="p-4 bg-slate-600 hover:bg-slate-500 rounded shadow-sm hover:shadow-md">
        <StoryImage story={story}/>
        <div className="text-xl font-bold">
          {story.title}
        </div>
        <div className="text-sm">
          By: {story.userEmail || "Unknown"}
        </div>
      </div>
    </Link>
  )
}
