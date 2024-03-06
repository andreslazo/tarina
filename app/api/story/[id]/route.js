import { NextResponse } from "next/server"
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore"
import { ref, uploadString, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/app/firebase/config"

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
  let updatedDoc
  updatedDoc = await getDoc(storyRef)

  if (image) {
    const updatedStoryRef = doc(db, "stories", id)
    const imageRef = ref(storage, `images/${id}`)
    await uploadString(imageRef, image, "data_url")
    const imageURL = await getDownloadURL(imageRef)

    await updateDoc(updatedStoryRef, { thumbnail: imageURL })
    updatedDoc = await getDoc(storyRef)
  }

  return NextResponse.json({ id, ...updatedDoc.data() })
}
