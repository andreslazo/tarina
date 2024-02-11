import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"
import { labels } from "@/data/labels"

export async function generateMetadata({params, searchParams}, parent) {
  return {
    title: `Stories - ${params.label}`
  }
}

export function generateStaticParams() {
  return labels.map(label => ({ params: { label: label.value } }))
}

export const revalidate = 3600

export default function Labels({params}) {
  const { label } = params

  return (
    <>
      <Title>
        {label === "all" ? "All Stories" : `Stories with label: ${label}`}
      </Title>
      <StoryList label={label} />
    </>
  )
}
