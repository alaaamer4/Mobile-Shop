import React from "react"
import Layout from "../components/Layout"
import { Router } from "@reach/router"
import Login from "../components/pages/Login"
import Register from "../components/pages/Register"
import Cart from "../components/pages/Cart"

const app = () => {
  return (
    <Layout>
      {/* <Router>
        <Login path="/app/login" />
        <Register path="/app/register" />
        <Cart path="/app/cart" />
      </Router> */}
    </Layout>
  )
}

export default app
