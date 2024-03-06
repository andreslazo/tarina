import Story from "@/components/stories/Story"

export async function generateMetadata({params, searchParams}, parent) {
  const { id } = params

  const story = await fetch(
    // eslint-disable-next-line max-len
    `${process.env.NEXT_PUBLIC_URL}/api/story/${id}`,
    {cache: "no-store"}
  ).then(res => res.json())

  return {
    title: `Story - ${story.title || "Not found"}`,
  }
}

export default async function StoryPage({params}) {
  const { id } = params

  const story = await fetch(
    // eslint-disable-next-line max-len
    `${process.env.NEXT_PUBLIC_URL}/api/story/${id}`,
    {cache: "no-store"}
  ).then(res => res.json())

  if (story.title == undefined) {
    throw new Error("Story not found")
  }

  return (
    <Story story={story} />
  )
}
