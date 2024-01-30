import { Counter } from "@/components/others/Counter"
import { Title } from "@/components/shared/Title"

export const metadata = {
  title: "Tarina",
  description: "Story analysis and prediction",
  keywords: ["NextJS", "Analytics", "Prediction", "Tarina"]
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-2">
        <Title>
          Welcome to Tarina
        </Title>
        <p>
          Mientras esta pagina esta en construccion, prueba este contador
        </p>
        <Counter />
      </main>
    </>
  )
}
