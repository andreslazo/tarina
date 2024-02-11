"use client"

import StoryThumbnail from "@/components/stories/StoryThumbnail"
import { Title } from "@/components/shared/Title"
import { useReadingListContext } from "@/components/context/ReadingListContext"
import EmptyReadingListButton from "@/components/stories/EmptyReadingListButton"

const ReadingListPage = () => {
  const { readingList } = useReadingListContext()

  return (
    <main className="container m-auto">
      <Title>Your reading list</Title>

      <EmptyReadingListButton/>
      <ul>
        {readingList.length === 0 ?
          <p>Your reading list is empty</p> :
          readingList.map((story) =>
            <StoryThumbnail story={story} key={story.id}/>
          )
        }
      </ul>
    </main>
  )
}

export default ReadingListPage
