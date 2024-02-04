import { NextResponse } from "next/server"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(request, {params}) {
  const { id } = params
  const storyRef = doc(db, "stories", id)
  const storySnapshot = await getDoc(storyRef)

  return NextResponse.json(storySnapshot.data())
}
