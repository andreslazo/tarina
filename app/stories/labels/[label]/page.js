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

export default async function Labels({params}) {
  const { label } = params

  const stories = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/stories/${label}`,
    { cache: "no-store" }
  ).then(res => res.json())

  return (
    <>
      <Title>
        {label === "all" ? "All Stories" : `Stories with label: ${label}`}
      </Title>
      <StoryList stories={stories} />
    </>
  )
}
