import { NextResponse } from "next/server"
import { db } from "@/app/firebase/config"
import { collection, addDoc } from "firebase/firestore"

export async function POST(request) {
  const formData = await request.json()
  console.log(formData)

  // Add a new document with a generated id.
  const storyRef = collection(db, "stories")
  await addDoc(storyRef, formData)

  return NextResponse.json("Data received correctly")
}
