"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/shared/Button"
import Input from "@/components/shared/Input"
import { useAuthContext } from "../context/AuthContext"

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin, user } = useAuthContext()
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

  return (
    // eslint-disable-next-line max-len
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="bg-white py-4 px-6 rounded-xl max-w-md w-full"
      >
        <h2>Login</h2>
        <Input
          type="email"
          value={values.email}
          required
          placeholder="Email"
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={values.password}
          required
          placeholder="Password"
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="password"
          onChange={handleChange}
        />
        <Button onClick={() => loginUser(values)} className="mr-4">
          Login
        </Button>
        <Button onClick={() => registerUser(values)}>Register</Button>
        <Button onClick={googleLogin}>
          Login with Google
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
