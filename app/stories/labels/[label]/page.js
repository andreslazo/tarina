import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"

export async function generateMetadata({params, searchParams}, parent) {
  return {
    title: `Stories - ${params.label}`
  }
}

export default async function Labels({params}) {
  const { label } = params

  const stories = await fetch(
    `https://${process.env.VERCEL_URL}/api/stories/${label}`,
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
