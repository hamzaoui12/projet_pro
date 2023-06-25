import { Inter } from "next/font/google"
import IndexPage from "@/lib/components/Page"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className="h-full">
      <IndexPage />
    </div>
  )
}
