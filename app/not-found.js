"use client"
import Button from "@/components/shared/Button"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="text-gray-900">La página que buscas no existe.</p>
      <Button onClick={() => router.back()}>Volver</Button>
    </div>
  )
}
