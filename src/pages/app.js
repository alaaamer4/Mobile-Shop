import React from "react"
import Layout from "../components/Layout"
import { Router } from "@reach/router"
import Login from "../components/pages/Login"
import Register from "../components/pages/Register"
const app = () => {
  return (
    <Layout>
      <Router>
        <Login path="/app/login" />
        <Register path="/app/register" />
      </Router>
    </Layout>
  )
}

export default app
