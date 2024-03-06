import Link from "next/link"
import { labels } from "@/data/labels"

export default function LabelsList() {
  // eslint-disable-next-line max-len
  const buttonClassname = "p-3 bg-slate-950 rounded shadow-md hover:bg-slate-900 hover:shadow-lg transition duration-300 ease-in-out"

  const allLabels = [...labels]
  allLabels.unshift({ value: "all", label: "All" })

  return (
    <div className="flex space-x-4 items-center p-4">
      <p className="text-sm">Filter by:</p>
      {allLabels.map((label, index) => (
        <Link
          href={`/stories/labels/${label.value}`}
          key={index}
          className={buttonClassname}
        >
          <p className="text-sm">{label.label}</p>
        </Link>
      ))}
    </div>
  )
}
