import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"
import { mockData } from "@/data/stories"

export const metadata = {
  title: 'Stories - Tarina',
  description: 'Story analysis and prediction',
  keywords: ['NextJS', 'Analytics', 'Prediction', 'Tarina']
}

export default function Stories() {
  return (
    <>
      <StoryList storyList={mockData} label='ALL' />
    </>
  )
}
