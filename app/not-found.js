"use client"

import { useRouter } from "next/navigation"
import Button from "@/components/shared/Button"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-slate-300">404</h1>
      <p className="text-slate-300">La página que buscas no existe.</p>

      <div className="p-4">
        <Button onClick={() => router.back()}>Volver</Button>
      </div>
    </div>
  )
}
