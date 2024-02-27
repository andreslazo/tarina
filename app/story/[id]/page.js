import Story from "@/components/stories/Story"

export async function generateMetadata({params, searchParams}, parent) {
  const { id } = params

  const story = await fetch(
    `https://${process.env.VERCEL_URL}/api/story/${id}`,
    {cache: "no-store"}
  ).then(res => res.json())

  return {
    title: `Story - ${story.title}`
  }
}

export default async function StoryPage({params}) {
  const { id } = params

  const story = await fetch(
    `https://${process.env.VERCEL_URL}/api/story/${id}`,
    {cache: "no-store"}
  ).then(res => res.json())

  if (story == undefined) {
    return (
      <div>Story no encontrado</div>
    )
  }

  return (
    <Story story={story} />
  )
}
