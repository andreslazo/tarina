import Image from "next/image"

export default function StoryImage({story}) {
  return (
    story.thumbnail ? (
      <div className="relative h-48 w-full bg-gray-200 rounded">
        <Image
          src={story.thumbnail}
          alt="story-thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </div>
    ) : (
      <div className="relative h-48 w-full bg-gray-200 rounded">
        <Image
          src='/placeholder.png'
          alt="story-thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </div>
    )
  )
}
