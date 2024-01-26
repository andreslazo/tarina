"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import NavBarSubMenu from "@/components/layout/NavBarSubMenu"

export default function NavBar() {
  const contactSubMenuElements = [
    {name: 'Phone', href: 'tel:+1-555-555-5555'},
    {name: 'Telegram Group', href: 'https://t.me/1XXXXXXXXXX'},
    {name: 'Email', href: 'mailto:false@example.com'}
  ]

  const menuElements = [
    {name: 'Stories', href: '/stories'},
    {name: 'Search', href: '/search'},
  ]

  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-x-4 p-2">
      <Link
        href="/story/new"
        // eslint-disable-next-line max-len
        className="text-base text-slate-500 hover:text-slate-700 p-3 bg-slate-950 rounded"
      >
        New story
      </Link>
      {
        menuElements.map(element => {
          const isActive = (
            pathname.includes(element.href) && element.href != '/'
          ) || (pathname === '/' && pathname === element.href)

          return (
            <Link
              key={element.name}
              href={element.href}
              className={`${isActive && 'font-bold'}
                text-base text-slate-500 hover:text-slate-700 p-3`}
            >
              {element.name}
            </Link>
          )
        })
      }
      <NavBarSubMenu name="Contact" elements={contactSubMenuElements} />
    </nav>
  )
}
