import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"

export async function generateMetadata({params, searchParams}, parent) {
  return {
    title: `Stories - ${params.label}`
  }
}

export default async function Labels({params}) {
  const { label } = params
  // eslint-disable-next-line max-len
  const url = `${process.env.VERCEL_PROTOCOL}://${process.env.VERCEL_URL}/api/stories/${label}`
  console.log(url)

  console.log(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN)
  console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)
  console.log(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET)
  console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID)
  const stories = await fetch(
    url, { cache: "no-store" }
  ).then(res => {
    console.log(res)
    return res
  }).then(res => res.json())

  return (
    <>
      <Title>
        {label === "all" ? "All Stories" : `Stories with label: ${label}`}
      </Title>
      <StoryList stories={stories} />
    </>
  )
}
