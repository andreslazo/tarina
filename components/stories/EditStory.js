import Button from "@/components/shared/Button"
import { Title } from "@/components/shared/Title"

export default function EditStory() {
  return (
    <>
      <Title>New Story</Title>
      <div className="border p-4 flex flex-wrap">
        <div className="w-1/4 border">
          <div className="relative h-48">
            <Button className="absolute top-0 right-0">Browse</Button>
          </div>
          <p>
            Labels:
          </p>
          <Button>Dislike</Button>
          <p>
            Likes:
          </p>
          <Button>Like</Button>
          <p>
            Views:
          </p>
          <p>
            Written by:
          </p>
          <p>
            Created at:
          </p>
          <p>
            Comments:
          </p>
        </div>
        <div className="w-3/4 border">
          <p>Aqui va un input para escribir la historia</p>
        </div>
      </div>
    </>
  )
}
