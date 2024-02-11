"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavBarSubMenu from "@/components/layout/NavBarSubMenu"
import ReadingListWidget from "@/components/shared/ReadingListWidget"

export default function NavBar() {
  const contactSubMenuElements = [
    {name: "Phone", href: "tel:+1-555-555-5555"},
    {name: "Telegram Group", href: "https://t.me/1XXXXXXXXXX"},
    {name: "Email", href: "mailto:false@example.com"}
  ]

  const menuElements = [
    {name: "Stories", href: "/stories/labels/all"},
    {name: "Search", href: "/search"},
  ]

  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-x-4 p-2">
      <Link
        href="/stories/new"
        // eslint-disable-next-line max-len
        className="bg-slate-950 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl"
      >
        New story
      </Link>
      <ul className="md:flex hidden items-center">
        {
          menuElements.map(element => {
            const isActive = (
              pathname.includes(element.href) && element.href != "/"
            ) || (pathname === "/" && pathname === element.href)

            return (
              <Link
                key={element.name}
                href={element.href}
                // eslint-disable-next-line max-len
                className={`${isActive && "text-slate-400 font-bold drop-shadow-xl"}
                  text-base text-slate-500 hover:text-slate-700 p-3`}
              >
                {element.name}
              </Link>
            )
          })
        }

        <NavBarSubMenu elements={contactSubMenuElements}>
          Contact
        </NavBarSubMenu>

        <ReadingListWidget />
      </ul>

      <NavBarSubMenu
        elements={menuElements}
        divClassname="md:hidden inline-block"
      >
        <Image
        src="/menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="md:hidden inline-block"
        />
      </NavBarSubMenu>
    </nav>
  )
}
