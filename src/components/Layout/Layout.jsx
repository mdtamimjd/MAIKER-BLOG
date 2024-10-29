import PropTypes from "prop-types"
import Footer from "../Footer"
import Header from "../Header"

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}
Layout.propTypes = {
    children: PropTypes.node
}
export default Layout