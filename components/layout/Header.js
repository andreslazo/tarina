import Logo from "@/components/layout/Logo"
import NavBar from "@/components/layout/NavBar"

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="flex justify-between items-center p-2">
        <Logo />
        <NavBar />
      </div>
    </header>
  )
}