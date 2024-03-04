"use client"

import { useAuthContext } from "@/components/context/AuthContext"

export default function CurrentUserInfo() {
  const { user } = useAuthContext()

  return(
    <p className="pl-2">
      { user.logged && `Current user logged: ${user.email} -`} Tarina (c) 2024
    </p>
  )
}
