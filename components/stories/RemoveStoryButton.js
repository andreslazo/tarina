"use client"

import Button from "@/components/shared/Button"
import { deleteStory } from "@/components/redirect"
import { useAuthContext } from "@/components/context/AuthContext"

export default function RemoveStoryButton({id}) {
  const { user } = useAuthContext()

  const handleDeleteStory = async (e) => {
    e.preventDefault()

    deleteStory(id)
  }

  if (!user.logged) {
    return null
  }

  return(
    <Button onClick={handleDeleteStory}>
      Delete story
    </Button>
  )
}
