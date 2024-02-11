import { NextResponse } from "next/server"
import { db, storage } from "@/app/firebase/config"
import { collection, addDoc, updateDoc } from "firebase/firestore"
import { ref, uploadString, getDownloadURL } from "firebase/storage"

export async function POST(request) {
  const formData = await request.json()
  const { image, ...rest } = formData

  const storyRef = collection(db, "stories")
  const docRef = await addDoc(storyRef, rest)

  const imageRef = ref(storage, `images/${docRef.id}`)
  await uploadString(imageRef, image, "data_url")
  const imageURL = await getDownloadURL(imageRef)

  await updateDoc(docRef, { thumbnail: imageURL })

  return NextResponse.json("Data received correctly")
}
