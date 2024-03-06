export default function Input(props) {

  return(
    <>
      <input
        type="text"
        className="bg-slate-500 w-full rounded-md p-2 shadow-inner mb-2"
        {...props}
      />
    </>
  )
}
