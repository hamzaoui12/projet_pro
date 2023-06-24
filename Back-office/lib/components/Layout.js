import { Analytics } from "@vercel/analytics/react"
import Nav from "@/lib/components/Nav"
import { Suspense } from "react"

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
