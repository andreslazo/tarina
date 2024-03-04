import StoryList from "@/components/stories/StoryList"
import LabelsList from "@/components/stories/LabelsList"
import { Title } from "@/components/shared/Title"

export async function generateMetadata({params, searchParams}, parent) {
  return {
    title: `Stories - ${params.label}`
  }
}

export default async function Labels({params}) {
  const { label } = params
  // eslint-disable-next-line max-len
  const url = `${process.env.NEXT_PUBLIC_URL}/api/stories/${label}`

  const stories = await fetch(
    url, { cache: "no-store" }
  ).then(res => res.json())

  return (
    <>
      <Title>
        {label === "all" ? "All Stories" : `Stories with label: ${label}`}
      </Title>
      <LabelsList />
      <StoryList stories={stories} />
    </>
  )
}
