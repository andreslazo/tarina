/* eslint-disable max-len */
"use client"
import Link from "next/link"
import { useReadingListContext } from "@/components/context/ReadingListContext"
import Image from "next/image"

const ReadingListWidget = () => {
  const { readingList } = useReadingListContext()

  return (
    <Link href={"/reading_list"} className="text-base text-slate-100 p-3 flex items-center">
      <Image
          src={"/icons/reading-list-icon.svg"}
          alt="Reading list icon"
          width={30}
          height={30}
      />
      <span className="p-1">{readingList.length}</span>
    </Link>
  )
}

export default ReadingListWidget
