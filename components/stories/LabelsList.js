import Link from "next/link"

export default function LabelsList({ allLabels }) {
  const buttonClassname = "p-3 bg-slate-950 rounded"
  return (
    <div className="flex space-x-4 items-center p-3">
      <p className="text-sm">Filter by:</p>
      <Link href={`/stories`} key={'all'} className={buttonClassname}>
        <p className="text-sm">All</p>
      </Link>
      {allLabels.map((label, index) => (
        <Link
          href={`/stories/labels/${label}`}
          key={index}
          className={buttonClassname}
        >
          <p className="text-sm">{label}</p>
        </Link>
      ))}
    </div>
  )
}
