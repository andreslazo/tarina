"use client"
import { useRef } from "react"
import Button from "@/components/shared/Button"

export default function UploadFile() {
  const fileInputRef = useRef(null)

  const handleBrowseClick = () => {
    fileInputRef.current.click()
  }

  return(
    <>
      <input type="file" ref={fileInputRef} style={{ display: "none" }} />
      <Button className="absolute top-0 right-0" onClick={handleBrowseClick}>
        Browse
      </Button>
    </>

  )
}
