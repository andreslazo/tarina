"use client"
import { useState } from "react"
import UploadFile from "@/components/stories/UploadFile"
import Button from "@/components/shared/Button"

export default function EditStory() {
  const [values, setValues] = useState({
    title: "",
    content: ""
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3000/api/story", {
      method: "POST",
      body: JSON.stringify(values)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 flex flex-wrap">
        <div className="w-full md:w-3/4 min-h-64 h-64 border">
          <textarea
            name="content"
            required
            placeholder="Tiempo de escribir tu historia"
            onChange={handleChange}
            className="bg-slate-300 text-slate-800 h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/4 border p-3 flex flex-col">
          <p className="py-1">
            Title:
          </p>
          <div className="py-1">
            <input
              type="text"
              name="title"
              required
              placeholder="Ingresa un nombre para tu historia"
              className="bg-slate-500"
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
          <div className="grow" />
        </div>
      </div>

      <div className="p-3">
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
