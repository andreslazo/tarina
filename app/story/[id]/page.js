import Story from "@/components/stories/Story"
import { mockData } from "@/data/stories"

export async function generateMetadata({params, searchParams}, parent) {
  const { id } = params
  const story = mockData.find(doc => doc.id == id)

  return {
    title: `Story - ${story.name}`
  }
}

export default function StoryPage({params}) {
  const { id } = params
  const story = mockData.find(doc => doc.id == id)

  if (story == undefined) {
    return (
      <div>Story no encontrado</div>
    )
  }

  return (
    <Story story={story} />
  )
}
