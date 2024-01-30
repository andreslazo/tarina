export default function TextArea({name, required, placeholder, onChange }) {

  return(
    <>
      <textarea
        className="bg-slate-300 text-slate-800 h-full w-full rounded-md p-3 shadow-lg"
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}
