"use client"

import { useRouter } from "next/navigation"
import Button from "@/components/shared/Button"

export default function EditStoryButton({id}) {
  const router = useRouter()

  const handleEditStory = (e) => {
    e.preventDefault()

    router.push(`/story/${id}/edit`)
  }

  return(
    <Button onClick={handleEditStory}>
      Edit story
    </Button>
  )
}
