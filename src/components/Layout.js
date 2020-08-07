import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./golbals/Navbar"
const Layout = ({ children }) => {
  return (
    <div className="bg-light">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
