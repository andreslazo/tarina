export default function Button({children, ...props}) {
  return (
    <button
      {...props}
      // eslint-disable-next-line max-len
      className="bg-slate-950 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl mb-2"
    >
      {children}
    </button>
  )
}
