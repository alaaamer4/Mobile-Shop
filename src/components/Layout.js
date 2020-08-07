import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import Navbar from "./golbals/Navbar"
import Footer from "./golbals/Footer"
const Layout = ({ children }) => {
  return (
    <div className="bg-light">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
