"use client"
import { useState } from "react"
import Button from "@/components/shared/Button"

export function Counter() {
  const [count, setCount] = useState(0)

  return(
    <div className="w-full justify-center items-center gap-y-4 flex flex-col">
      <h2>Contador</h2>
      <div className="flex gap-x-4">
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <span className="text-xl font-bold py-2 px-4">{count}</span>
        <Button onClick={() => setCount(count - 1)}>-</Button>
      </div>
    </div>
  )
}