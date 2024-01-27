import UploadFile from "@/components/stories/UploadFile"
import Button from "@/components/shared/Button"
import Input from "@/components/shared/Input"
import { Title } from "@/components/shared/Title"
import TextArea from "@/components/shared/TextArea"

export default function EditStory() {
  return (
    <>
      <Title>New Story</Title>
      <div>
        <div className="p-4 flex flex-wrap">
          <div className="w-full md:w-3/4 min-h-64 h-64 border">
            <TextArea />
          </div>
          <div className="w-full md:w-1/4 border p-3 flex flex-col">
            <p className="py-1">
              Title:
            </p>
            <div className="py-1">
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
          </div>
        </div>

        <div className="p-3">
          <Button>Save</Button>
        </div>
      </div>
    </>
  )
}
