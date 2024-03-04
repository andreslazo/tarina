import EditStory from "@/components/stories/EditStory"
import { Title } from "@/components/shared/Title"

export const metadata = {
  title: "Editing story - Tarina"
}

export default async function EditingStoryPage({params}) {
  const { id } = params

  const story = await fetch(
    // eslint-disable-next-line max-len
    `${process.env.NEXT_PUBLIC_URL}/api/story/${id}`,
    {cache: "no-store"}
  ).then(res => res.json())

  return (
    <>
      <Title>Editing {story.title}</Title>
      <EditStory story={story} />
    </>
  )
}
