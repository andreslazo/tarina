"use server"
import { redirect } from "next/navigation"

export async function createStory(cleanValues) {
  // eslint-disable-next-line max-len
  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/story`, {
    method: "POST",
    body: JSON.stringify(cleanValues)
  })

  redirect("/stories/labels/all")
}

export async function editStory(story, values) {
  await fetch(
    // eslint-disable-next-line max-len
    `${process.env.NEXT_PUBLIC_URL}/api/story/${story.id}`, {
    method: "PATCH",
    body: JSON.stringify(values)
  })

  redirect(`/story/${story.id}`)
}

export async function deleteStory(id) {
  // eslint-disable-next-line max-len
  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/story/${id}`, {
    method: "DELETE"
  })

  redirect("/stories/labels/all")
}
