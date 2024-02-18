"use client"
import Button from "@/components/shared/Button"
import { useAuthContext } from "@/components/context/AuthContext"

export default function Likes({story}) {
  const { user } = useAuthContext()

  return(
    <div className="flex items-center space-x-4">
      {user.logged && <Button>Dislike</Button>}
      <p>
        Likes: {story.likes || 0}
      </p>
      {user.logged && <Button>Like</Button>}
    </div>
  )
}
