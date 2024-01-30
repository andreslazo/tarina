import { NextResponse } from "next/server"
import { mockData } from "@/data/stories"

const sleep = (timer) => new Promise((resolve) => setTimeout(resolve, timer))

export async function GET(request, {params}) {
  const { label } = params

  const stories = label === "ALL"
  ? mockData
  : mockData.filter(story => story.labels.includes(label))

  await sleep(1000)

  return NextResponse.json(stories)
}
