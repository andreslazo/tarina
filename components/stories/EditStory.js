"use client"
import { useState } from "react"
import Select from "react-select"
import { useRouter } from "next/navigation"
import Image from "next/image"
import UploadFile from "@/components/stories/UploadFile"
import Button from "@/components/shared/Button"
import TextArea from "@/components/shared/TextArea"
import Input from "@/components/shared/Input"
import { labels } from "@/data/labels"

export default function EditStory({story}) {
  const [values, setValues] = useState({
    title: story?.title || "",
    content: story?.content || "",
    labels: story?.labels || "",
    image: story?.image || null
  })

  const router = useRouter()

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (selectedOptions) => {
    setValues({
      ...values,
      labels: selectedOptions.map(option => option.value)
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setValues({
          ...values,
          image: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBack = (e) => {
    e.preventDefault()

    router.push(`/story/${story.id}`)
  }

  const cleanupValues = (values) => {
    return {
      ...values,
      createdAt: Math.floor(Date.now() / 1000),
      userId: 123
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (story) {
      const savedStory = await fetch(
        // eslint-disable-next-line max-len
        `${process.env.NEXT_PUBLIC_VERCEL_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/story/${story.id}`, {
        method: "PATCH",
        body: JSON.stringify(values)
      })

      const data = await savedStory.json()

      router.refresh(`/story/${data.id}`)
      router.push(`/story/${data.id}`)
    } else {
      const cleanValues = cleanupValues(values)
      // eslint-disable-next-line max-len
      await fetch(`${process.env.NEXT_PUBLIC_VERCEL_PROTOCOL}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/story`, {
        method: "POST",
        body: JSON.stringify(cleanValues)
      })

      router.refresh("/stories/labels/all")
      router.push("/stories/labels/all")
    }
  }

  // eslint-disable-next-line max-len
  const selectedLabels = labels.filter(item => (values?.labels || []).includes(item.value))

  return (
    <form onSubmit={handleSubmit} className="pb-8">
      <div className="p-4 flex flex-wrap ">
        <div className="w-full md:w-3/4 min-h-64 h-64">
          <TextArea
            name="content"
            required
            value={values?.content}
            placeholder="Time to write your story"
            onChange={handleChange}
          />
        </div>
        {/* eslint-disable max-len */}
        <div className="w-full md:w-1/4 p-3 flex flex-col bg-slate-400 rounded-sm lg:mt-0 mt-2">
          <p className="py-1">
            Title:
          </p>
          <div className="py-1">
            <Input
              name="title"
              required
              value={values?.title}
              placeholder="Enter a title for your story"
              onChange={handleChange}
            />
          </div>
          <div className="py-1">
            Thumbnail (Optional):
          </div>
          <div className="py-2">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {values.image && <Image src={values.image} alt="Preview" width={100} height={100}/>}
          </div>
          <p className="py-1">
            Labels:
          </p>
          <div className="py-1">
            <Select
              isMulti
              name="labels"
              options={labels}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select one or more labels"
              onChange={handleSelectChange}
              value={values?.labels && selectedLabels}
            />
          </div>
          <div className="grow" />
        </div>
      </div>

      <div className="p-3 pb-5">
        <Button type="submit">Save</Button>
      </div>

      {story && (
        <div className="p-3 pb-5">
          <Button onClick={handleBack}>Go back</Button>
        </div>
      )}
    </form>
  )
}
