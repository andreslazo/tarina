import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function NavBarSubMenu({elements, children}) {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const submenuRef = useRef()

  const toggleSubMenu = (event) => {
    event.preventDefault()
    setShowSubMenu(!showSubMenu)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setShowSubMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative group z-[999]">
      <Link
        href="#"
        className={
          "text-base text-slate-500 hover:text-slate-700 p-3 "
          + (showSubMenu ? "active" : "")
        }
        onClick={toggleSubMenu}
      >
        {children}
      </Link>
      {showSubMenu && (
        <div
          ref={submenuRef}
          // eslint-disable-next-line max-len
          className="absolute left-0 mt-2 w-36 shadow-lg dark:bg-slate-600 bg-white ring-1 ring-black ring-opacity-5 transform translate-x-[-50%] right-0 rounded-sm"
        >
          {elements.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              // eslint-disable-next-line max-len
              className="block px-4 py-2 text-sm dark:text-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-sm" role="menuitem"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
