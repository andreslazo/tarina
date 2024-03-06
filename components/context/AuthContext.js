"use client"

import { createContext, useContext, useEffect, useState } from "react"
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"
import { useRouter } from "next/navigation"
import { auth, provider } from "@/app/firebase/config"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null
  })

  const router = useRouter()

  const registerUser = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password)
    } catch (error) {
      alert("Failed to register, please check if your data is correct")
    }
  }

  const loginUser = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
    } catch (error) {
      alert("Failed to login, please check if your data is correct")
    }
  }

  const logout = async () => await signOut(auth)

  const googleLogin = async () => await signInWithPopup(auth, provider)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid
      })

      } else {
        setUser({
          logged: false,
          email: null,
          uid: null
        })
      }
    })
  }, [])

  return (
      <AuthContext.Provider value={{
          user,
          registerUser,
          loginUser,
          logout,
          googleLogin
      }}>
          {children}
      </AuthContext.Provider>
  )
}
