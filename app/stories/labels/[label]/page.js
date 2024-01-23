import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"
import { mockData } from "@/data/stories"

export async function generateMetadata({params, searchParams}, parent) {
  return {
    title: `Stories - ${params.label}`
  }
}

export default function Labels({params}) {
  const { label } = params

  return (
    <>
      <Title text={`Stories - ${label}`} />
      <StoryList storyList={mockData} label={label} />
    </>
  )
}
