export default function Input({name, required, placeholder, onChange }) {

  return(
    <>
      <input
        type="text"
        className="bg-slate-500 w-full rounded-md p-2 shadow-inner"
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}
