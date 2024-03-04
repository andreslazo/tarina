/* eslint-disable max-len */
import CurrentUserInfo from "@/components/others/CurrentUserInfo"

export default function Footer() {
  return (
    <footer className="w-full bg-slate-500 fixed bottom-0 shadow-md">
      <div className='container m-auto py-2 text-sm text-gray-50 flex justify-between items-center'>
        <CurrentUserInfo />
      </div>
    </footer>
  )
}
