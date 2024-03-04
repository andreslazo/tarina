import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"

export const metadata = {
  title: "Tarina",
  description: "Story analysis and prediction",
  keywords: ["NextJS", "Analytics", "Prediction", "Tarina"]
}

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/stories/all?limit=6`

  const stories = await fetch(
    url, { cache: "no-store" }
  ).then(res => res.json())

  return (
    <>
      <main className="flex flex-col items-center justify-start p-2">
        <Title>
          Welcome to Tarina
        </Title>
        <h2 className="text-xl font-bold mb-4">
          Latest Stories
        </h2>
        <StoryList stories={stories} />
      </main>
    </>
  )
}
