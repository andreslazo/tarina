import Link from "next/link";

export default function LabelsList({ allLabels }) {
  return (
    <div className="flex space-x-4">
      <p className="text-sm">Filter by:</p>
      <Link href={`/stories`} key={'all'}>
        <p className="text-sm">All</p>
      </Link>
      {allLabels.map((label, index) => (
        <Link href={`/stories/labels/${label}`} key={index}>
          <p className="text-sm">{label}</p>
        </Link>
      ))}
    </div>
  )
}
