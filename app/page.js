import StoryList from "@/components/stories/StoryList"
import { Title } from "@/components/shared/Title"

export const metadata = {
  title: "Tarina - Homepage",
  // eslint-disable-next-line max-len
  description: "The best place to read and share stories. Tarina is a platform for writers and readers to connect and share their stories.",
  keywords: ["NextJS", "Analytics", "Prediction", "Tarina"],
  default: "Tarina",
  openGraph: {
    title: "Tarina - Homepage",
    description: "TThe best place to read and share stories",
    url: "https://https://tarina.vercel.app/",
    siteName: "Tarina",
    images: [
      {
        url: "https://nextjs.org/tarina_logo.png", // Must be an absolute URL
        width: 236,
        height: 236,
      }
    ],
    locale: "en_US",
    type: "website",
  },
}

export default async function Home() {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/stories/all?limit=6`

  const stories = await fetch(
    url, { cache: "no-store" }
  ).then(res => res.json())

  return (
    <>
      <main className="flex flex-col items-center justify-start p-2">
        <Title>
          Welcome to Tarina
        </Title>
        <h2 className="text-xl font-bold mb-4">
          Latest Stories
        </h2>
        <StoryList stories={stories} />
      </main>
    </>
  )
}
