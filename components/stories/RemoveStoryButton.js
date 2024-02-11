"use client"

import { useRouter } from "next/navigation"
import Button from "@/components/shared/Button"

export default function RemoveStoryButton({id}) {
  const router = useRouter()

  const handleDeleteStory = async (e) => {
    e.preventDefault()

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/story/${id}`, {
      method: "DELETE"
    })

    router.push("/stories/labels/all")
  }

  return(
    <Button onClick={handleDeleteStory}>
      Delete story
    </Button>
  )
}
