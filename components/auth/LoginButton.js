"use client"

import Link from "next/link"
import Button from "@/components/shared/Button"
import { useAuthContext } from "@/components/context/AuthContext"

export default function LoginButton() {
  const { user, logout } = useAuthContext()

  return user.logged ? (
    <Button onClick={logout}>Logout</Button>
  ) : (
    <Link
      href="/login"
      // eslint-disable-next-line max-len
      className="bg-slate-950 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl"
    >
      Login
    </Link>
  )
}
