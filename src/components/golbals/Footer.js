import React from "react"

const Footer = () => {
  return (
    <div className="card-footer bg-dark text-white text-capitalize text-center mt-2">
      All rights reserved &copy; {new Date().getFullYear().toString()} Mohamed
      Alaa
    </div>
  )
}

export default Footer
