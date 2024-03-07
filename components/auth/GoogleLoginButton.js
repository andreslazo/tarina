/* eslint-disable max-len */
import { useAuthContext } from "@/components/context/AuthContext"
import Image from "next/image"

export default function GoogleLoginButton() {
  const { googleLogin } = useAuthContext()

  return (
    <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 hover:shadow transition duration-150" onClick={googleLogin}>
        <Image width={24} height={24} src="/google-color.svg" alt="Google logo" />
        <span>Login with Google</span>
    </button>
  )
}
