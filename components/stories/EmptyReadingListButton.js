/* eslint-disable max-len */
"use client"

import Button from "@/components/shared/Button"
import { useReadingListContext } from "@/components/context/ReadingListContext"

export default function EmptyReadingListButton() {
  const { emptyReadingList } = useReadingListContext()

  return(
    <Button onClick={emptyReadingList}>
      Remove all elements from reading list
    </Button>
  )
}
