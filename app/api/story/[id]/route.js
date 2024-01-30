import { NextResponse } from "next/server"
import { mockData } from "@/data/stories"

export async function GET(request, {params}) {
  const { id } = params
  const story = mockData.find(story => story.id == id)

  return NextResponse.json(story)
}
