export default function Button({children, ...props}) {
  return (
    <button
      {...props}
      // eslint-disable-next-line max-len
      className="block px-4 py-2 text-sm dark:text-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-sm w-full text-left"
    >
      {children}
    </button>
  )
}
