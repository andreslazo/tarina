import { useAuthContext } from "@/components/context/AuthContext"
/* eslint-disable max-len */

export default function GoogleLoginButton() {
  const { googleLogin } = useAuthContext()

  return (
    <button class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 hover:shadow transition duration-150" onClick={googleLogin}>
        <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
        <span>Login with Google</span>
    </button>
  )
}
