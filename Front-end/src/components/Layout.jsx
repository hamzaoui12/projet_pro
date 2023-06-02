import { useLocation } from "react-router"
import Footer from "./footer"
import Navbar from "./Navbar"
import SearchNavbar from "./SearchNavbar"

const Layout = (props) => {
  const { children } = props

  const location = useLocation()

  return (
    <>
      {location.pathname.startsWith("/Search") ? <SearchNavbar /> : <Navbar />}
      <div className="flex flex-col min-h-screen">
        <div>
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Layout
