import React, { useState } from "react"
import { GiShoppingCart } from "react-icons/gi"
import { FiLogIn, FiUserPlus } from "react-icons/fi"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
const Navbar = () => {
  const [style, setStyle] = useState("collapse , navbar-collapse")
  const [isOpen, setIsOpen] = useState(false)
  const [links, setLinks] = useState([
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "products",
      path: "/products",
    },
  ])
  const openNav = () => {
    if (isOpen) {
      setIsOpen(false)
      setStyle("collapse , navbar-collapse")
    } else {
      setIsOpen(true)
      setStyle("collapse , navbar-collapse show")
    }
  }
  return (
    <nav
      className="navbar  navbar-expand-md navbar-light bg-white p-4 "
      style={{ borderBottom: "#5FB7EA solid 2px" }}
    >
      <div className="container">
        <Link to="/">
          <img src={logo} />
        </Link>
        <button
          onClick={openNav}
          className="navbar-toggler "
          type="button"
          style={{ cursor: "pointer" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={style}>
          <ul className="navbar-nav ml-auto">
            {links.map((link, i) => {
              return (
                <li className="nav-item" key={i}>
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.name}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item mx-2 ">
              <Link to="/">
                <h3>
                  <GiShoppingCart />{" "}
                </h3>
              </Link>
            </li>
            <li className=" mx-2 nav-item text-capitalize ">
              <Link to="/app/login" className="nav-link">
                <FiLogIn />
              </Link>
            </li>
            <li className=" mx-2 nav-item text-capitalize ">
              <Link to="/app/register" className="nav-link">
                <FiUserPlus />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
