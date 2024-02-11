import EditStory from "@/components/stories/EditStory"
import { Title } from "@/components/shared/Title"

export const metadata = {
  title: "New story - Tarina"
}

export default function NewStoryPage() {
  return (
    <>
      <Title>New story</Title>
      <EditStory />
    </>
  )
}
