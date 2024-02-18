"use client"

import { useRouter } from "next/navigation"
import Button from "@/components/shared/Button"
import { useAuthContext } from "@/components/context/AuthContext"

export default function EditStoryButton({id}) {
  const { user } = useAuthContext()
  const router = useRouter()

  const handleEditStory = (e) => {
    e.preventDefault()

    router.push(`/story/${id}/edit`)
  }

  if (!user.logged) {
    return null
  }

  return(
    <Button onClick={handleEditStory}>
      Edit story
    </Button>
  )
}
