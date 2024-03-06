"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/shared/Button"
import Input from "@/components/shared/Input"
import { Title } from "@/components/shared/Title"
import GoogleLoginButton from "@/components/auth/GoogleLoginButton"
import { useAuthContext } from "@/components/context/AuthContext"

const LoginForm = () => {
  const { registerUser, loginUser, user } = useAuthContext()
  const router = useRouter()
  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    if (user && user.logged) {
      router.push("/")
    }
  }, [user, router])

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleRegister = (e) => {
    if (values.email == "" || values.password == "") {
      return
    }

    registerUser(values)
  }

  const handleLogin = (e) => {
    if (values.email == "" || values.password == "") {
      return
    }

    loginUser(values)
  }

  return (
    // eslint-disable-next-line max-len
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-4 px-6 rounded-xl max-w-md w-full mx-auto"
      >
        <h2>Login</h2>
        <Input
          type="email"
          value={values.email}
          required
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={values.password}
          required
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <div className="flex justify-between items-center">
          <Button
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button onClick={handleRegister}>Register</Button>
        </div>

        <GoogleLoginButton />
      </form>
    </div>
  )
}

export default LoginForm
