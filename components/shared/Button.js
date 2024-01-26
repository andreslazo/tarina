export default function Button({onClick, children}) {
  return (
    <button
      onClick={onClick}
      // eslint-disable-next-line max-len
      className="bg-slate-950 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  )
}
