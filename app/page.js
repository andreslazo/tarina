import { Counter } from "@/components/others/Counter"

export const metadata = {
  title: 'Tarina',
  description: 'Story analysis and prediction',
  keywords: ['NextJS', 'Analytics', 'Prediction', 'Tarina']
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-2">
        <Counter />
      </main>
    </>
  )
}
