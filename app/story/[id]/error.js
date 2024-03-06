"use client"
import { useEffect } from "react"
import Button from "@/components/shared/Button"
import { Title } from "@/components/shared/Title"

export default function Error({ error, reset }) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <Title>Story not found</Title>
      <div className="flex justify-center">
        <Button onClick={reset}>Reload page</Button>
      </div>
    </div>
  )
}
