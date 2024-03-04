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

    if (fetchedStories.length === 0) {
      window.alert("No stories found.")
    } else {
      setStories(fetchedStories)
    }
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
      {stories.length > 0 ? (
        <StoryList stories={stories} />
      ) : (
        <div>
          Type in the EXACT NAME of your story and
          click the search button to begin.
        </div>
      )}
    </>
  )
}
