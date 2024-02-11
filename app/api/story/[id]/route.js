import { NextResponse } from "next/server"
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(request, {params}) {
  const { id } = params
  const storyRef = doc(db, "stories", id)
  const storySnapshot = await getDoc(storyRef)

  return NextResponse.json({ id, ...storySnapshot.data() })
}

export async function DELETE(request, {params}) {
  const { id } = params
  const storyRef = doc(db, "stories", id)
  await deleteDoc(storyRef)

  return NextResponse.json("Deleted!")
}

export async function PATCH(request, {params}) {
  const { id } = params
  const formData = await request.json()
  const { image, ...editItems } = formData

  const storyRef = doc(db, "stories", id)
  await updateDoc(storyRef, editItems)
  const updatedDoc = await getDoc(storyRef)

  return NextResponse.json({ id, ...updatedDoc.data() })
}
