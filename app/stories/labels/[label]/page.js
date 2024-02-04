import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"

export async function generateMetadata({params, searchParams}, parent) {
  return {
    title: `Stories - ${params.label}`
  }
}

export function generateStaticParams() {
  return [
    { label: "all" },
    { label: "fantasy" }
  ]
}

export const revalidate = 3600

export default function Labels({params}) {
  const { label } = params

  return (
    <>
      <Title>
        {`Stories with label: ${label}`}
      </Title>
      <StoryList label={label} />
    </>
  )
}
