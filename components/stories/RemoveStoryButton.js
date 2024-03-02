"use client"

import { useRouter } from "next/navigation"
import Button from "@/components/shared/Button"
import { useAuthContext } from "@/components/context/AuthContext"

export default function RemoveStoryButton({id}) {
  const { user } = useAuthContext()
  const router = useRouter()

  const handleDeleteStory = async (e) => {
    e.preventDefault()

    // eslint-disable-next-line max-len
    await fetch(`${process.env.NEXT_PUBLIC_VERCEL_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/story/${id}`, {
      method: "DELETE"
    })

    router.refresh("/stories/labels/all")
    router.push("/stories/labels/all")
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
