import { NextResponse } from "next/server"
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore"
import { ref, uploadString, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/app/firebase/config"

export async function POST(request) {
  const formData = await request.json()
  const { image, ...rest } = formData

  const storyRef = collection(db, "stories")
  const createdDoc = await addDoc(storyRef, rest)
  const id = createdDoc.id

  if(image) {
    const updatedStoryRef = doc(db, "stories", id)
    const imageRef = ref(storage, `images/${id}`)
    await uploadString(imageRef, image, "data_url")
    const imageURL = await getDownloadURL(imageRef)

    await updateDoc(updatedStoryRef, { thumbnail: imageURL })
  }

  const createdStoryRef = doc(db, "stories", id)
  const updatedDoc = await getDoc(createdStoryRef)

  return NextResponse.json({ id, ...updatedDoc.data() })
}
