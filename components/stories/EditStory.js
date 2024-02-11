"use client"
import { useState } from "react"
import Select from "react-select"
import { useRouter } from "next/navigation"
import UploadFile from "@/components/stories/UploadFile"
import Button from "@/components/shared/Button"
import TextArea from "@/components/shared/TextArea"
import Input from "@/components/shared/Input"
import { labels } from "@/data/labels"

export default function EditStory() {
  const [values, setValues] = useState({
    title: "",
    content: "",
    labels: "",
  })

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

  const cleanupValues = (values) => {
    return {
      ...values,
      createdAt: Math.floor(Date.now() / 1000),
      userId: 123
    }
  }

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const cleanValues = cleanupValues(values)

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/story`, {
      method: "POST",
      body: JSON.stringify(cleanValues)
    })

    router.push("/stories/labels/all")
  }

  return (
    <form onSubmit={handleSubmit} className="pb-8">
      <div className="p-4 flex flex-wrap ">
        <div className="w-full md:w-3/4 min-h-64 h-64">
          <TextArea
            name="content"
            required
            placeholder="Tiempo de escribir tu historia"
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
              placeholder="Ingresa un nombre para tu historia"
              onChange={handleChange}
            />
          </div>
          <div className="py-1">
            Thumbnail (Optional):
          </div>
          <div className="py-2">
            <UploadFile />
          </div><p className="py-1">
            Labels:
          </p>
          <div className="py-1">
            <Select
              isMulti
              name="labels"
              options={labels}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Ingresa etiquetas separadas por comas"
              onChange={handleSelectChange}
            />
          </div>
          <div className="grow" />
        </div>
      </div>

      <div className="p-3 pb-5">
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
