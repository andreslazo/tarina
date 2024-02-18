import { Inter } from "next/font/google"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { ReadingListProvider } from "@/components/context/ReadingListContext"
import { AuthProvider } from "@/components/context/AuthContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tarina"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ReadingListProvider>
            <Header />
            {children}
            <Footer />
          </ReadingListProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
