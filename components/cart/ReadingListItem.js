/* eslint-disable max-len */
import Button from "@/components/shared/Button"
import Image from "next/image"

const ReadingListItem = ({story}) => {
  return (
    <li
      className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4"
    >
      <Image
        src={`${story.thumbnail}`}
        alt={story.title}
        width={80}
        height={80}
      />
      <div>
        <h3>{story.title}</h3>
      </div>

      <Button className="bg-red-600">
        <Image
          src={"/icons/trash-icon.svg"}
          alt="Trash icon"
          width={30}
          height={30}
        />
      </Button>
    </li>
  )
}

export default ReadingListItem
