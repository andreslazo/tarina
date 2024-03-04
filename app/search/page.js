import { Title } from "@/components/shared/Title"
import SearchStory from "@/components/stories/SearchStory"

export async function generateMetadata({params, searchParams}, parent) {
  return {
    title: "Search stories"
  }
}

export default function Search() {
  return (
    <>
      <Title>Search stories</Title>
      <SearchStory />
    </>
  )
}
