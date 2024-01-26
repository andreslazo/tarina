import UploadFile from "@/components/stories/UploadFile"
import Button from "@/components/shared/Button"
import Input from "@/components/shared/Input"
import { Title } from "@/components/shared/Title"
import TextArea from "@/components/shared/TextArea"

export default function EditStory() {
  return (
    <>
      <Title>New Story</Title>
      <div className="p-4 flex flex-wrap">
        <div className="w-1/4 border p-3 min-h-96 flex flex-col">
          <p className="py-1">
            Title:
          </p>
          <div className="py-2">
            <Input />
          </div>
          <div className="py-1">
            Thumbnail (Optional):
          </div>
          <div className="py-2">
            <UploadFile />
          </div><p className="py-1">
            Labels:
          </p>
          <div className="py-2">
            <Input />
          </div>
          <div className="grow" />
          <Button>Save</Button>
        </div>
        <div className="w-3/4 border">
          <TextArea />
        </div>
      </div>
    </>
  )
}
