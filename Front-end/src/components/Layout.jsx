import { useLocation } from "react-router"
import Footer from "./Footer"
import Navbar from "./Navbar"
import SearchNavbar from "./SearchNavbar"
import { ContextSearch } from "../contexts/Search"

const Layout = (props) => {
  const { children } = props

  const location = useLocation()

  return (
    <ContextSearch>
      <>
        {location.pathname.startsWith("/Search") ? (
          <SearchNavbar />
        ) : (
          <Navbar />
        )}
        <div className="flex flex-col min-h-screen">
          <div>
            <div>{children}</div>
          </div>
        </div>
        <Footer />
      </>
    </ContextSearch>
  )
}
export default Layout
