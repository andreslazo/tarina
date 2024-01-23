import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href={'/'}>
      <div className="flex items-center">
        <Image src="/tarina_logo.png" alt="Logo" width={50} height={50} priority className="ml-2" />
        <h1 className="text-2xl font-black ml-2">Tarina</h1>
      </div>
    </Link>
  )
}