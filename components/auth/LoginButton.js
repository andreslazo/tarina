"use client"

import Link from "next/link"
import Button from "@/components/shared/Button"
import { useAuthContext } from "@/components/context/AuthContext"
import { homepageRedirect } from "@/components/redirect"

export default function LoginButton() {
  const { user, logout } = useAuthContext()

  const handleLogout = (e) => {
    e.preventDefault()

    logout()
    homepageRedirect()
  }

  return user.logged ? (
    <Button onClick={handleLogout}>Logout</Button>
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
