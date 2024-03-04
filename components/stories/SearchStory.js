"use client"

import { useState } from "react"
import StoryList from "@/components/stories/StoryList"
import Input from "@/components/shared/Input"
import Button from "@/components/shared/Button"

export default function SearchStory() {
  const [title, setTitle] = useState("")
  const [stories, setStories] = useState([])

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const fetchStories = async (event) => {
    event.preventDefault()

    // eslint-disable-next-line max-len
    const url = `${process.env.NEXT_PUBLIC_URL}/api/stories/search?title=${title}`
    const fetchedStories =
      await fetch(url, { cache: "no-store" }).then(res => res.json())
    setStories(fetchedStories)
  }

  return (
    <>
      <form onSubmit={fetchStories}>
        <Input
          name="title"
          required
          value={title}
          placeholder="Enter the exact name"
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
      <StoryList stories={stories} />
    </>
  )
}
