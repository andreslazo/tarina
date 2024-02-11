/* eslint-disable max-len */
"use client"
import Button from "@/components/shared/Button"
import { useReadingListContext } from "@/components/context/ReadingListContext"

export default function ReadingListButton({story}) {
  const { addToReadingList, removeFromReadingList, isInReadingList } = useReadingListContext()

  const handleAddToReadingList = () => addToReadingList(story)
  const handleRemoveFromReadingList = () => removeFromReadingList(story)

  if (isInReadingList(story.id)) {
    return(
      <Button onClick={handleRemoveFromReadingList}>
        Remove from reading list
      </Button>
    )
  }

  return(
    <Button onClick={handleAddToReadingList}>
      Add to reading list
    </Button>
  )
}
