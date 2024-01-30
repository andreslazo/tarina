import Link from "next/link"

export default function LabelsList({ allLabels }) {
  // eslint-disable-next-line max-len
  const buttonClassname = "p-3 bg-slate-950 rounded shadow-md hover:bg-slate-900 hover:shadow-lg transition duration-300 ease-in-out"

  return (
    <div className="flex space-x-4 items-center p-4">
      <p className="text-sm">Filter by:</p>
      <Link href={"/stories"} key={"all"} className={buttonClassname}>
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
