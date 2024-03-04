"use client"
import Image from "next/image"

export default function UploadFile({onChange, image}) {
  return(
    <>
      <input type="file" accept="image/*" onChange={onChange} />
      {
        image && <Image src={image} alt="Preview" width={100} height={100}/>
      }
    </>

  )
}
