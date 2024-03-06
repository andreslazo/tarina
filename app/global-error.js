"use client"

export default function Error({error, reset}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <head>
        <title>Error</title>
      </head>
      <body>
        <h1>Something went wrong</h1>
        <button onClick={reset}>Back</button>
      </body>
    </html>
  )
}
