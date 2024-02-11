export default function TextArea(props) {
  return(
    <textarea
      // eslint-disable-next-line max-len
      className="bg-slate-300 text-slate-800 h-full w-full rounded-md p-3 shadow-lg resize-none"
      {...props}
    />
  )
}
