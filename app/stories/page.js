import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"

export const metadata = {
  title: "Stories - Tarina",
  description: "Story analysis and prediction",
  keywords: ["NextJS", "Analytics", "Prediction", "Tarina"]
}

export default function Stories() {
  return (
    <>
      <Title>
        All Stories
      </Title>
      <StoryList label="ALL" />
    </>
  )
}
