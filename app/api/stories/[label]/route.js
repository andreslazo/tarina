import { NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(request, {params}) {
  const { label } = params
  const storiesRef = collection(db, "stories")
  const storiesQuery =
    label === "all" ?
      storiesRef :
      query(storiesRef, where("labels", "array-contains", label))

  const storiesSnapshot = await getDocs(storiesQuery)
  const stories = storiesSnapshot.docs.map(
    doc => ({ id: doc.id, ...doc.data() })
  )

  return NextResponse.json(stories)
}
