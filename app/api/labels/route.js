import { NextResponse } from "next/server"
import { mockData } from "@/data/stories"

const sleep = (timer) => new Promise((resolve) => setTimeout(resolve, timer))

export async function GET() {
  const allLabels = mockData.map(story => story.labels).flat()
  await sleep(1000)

  return NextResponse.json(allLabels)
}
