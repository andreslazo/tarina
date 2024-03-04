import { NextResponse } from "next/server"
import { collection, getDocs, query, where, limit } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(request, {params}) {
  const limitValue = Number(request.nextUrl.searchParams.get("limit"))
  const { label } = params
  const storiesRef = collection(db, "stories")
  let storiesQuery

  if (limitValue && limitValue > 0) {
    storiesQuery = label === "all" ?
      query(storiesRef, limit(limitValue)) :
      query(
        storiesRef,
        where("labels", "array-contains", label),
        limit(limitValue)
      )
  } else {
    storiesQuery = label === "all" ?
      query(storiesRef) :
      query(storiesRef, where("labels", "array-contains", label))
  }

  const storiesSnapshot = await getDocs(storiesQuery)
  const stories = storiesSnapshot.docs.map(
    doc => ({ id: doc.id, ...doc.data() })
  )

  return NextResponse.json(stories)
}
