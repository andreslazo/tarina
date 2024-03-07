"use client"

import Link from "next/link"
import ButtonLink from "@/components/shared/ButtonLink"
import { useAuthContext } from "@/components/context/AuthContext"
import { homepageRedirect } from "@/components/redirect"

export default function LoginLink() {
  const { user, logout } = useAuthContext()

  const handleLogout = (e) => {
    e.preventDefault()

    logout()
    homepageRedirect()
  }

  return user.logged ? (
    <ButtonLink onClick={handleLogout}>Logout</ButtonLink>
  ) : (
    <Link
      href="/login"
      // eslint-disable-next-line max-len
      className="block px-4 py-2 text-sm dark:text-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-sm"
      role="menuitem"
    >
      Login
    </Link>
  )
}
