import React from "react"
import img from "../../images/login.svg"
import { Link } from "@reach/router"
const Login = () => {
  return (
    <section className="container bg-light login">
      <div className="form-grid">
        <div>
          <img src={img} className="my-3 auth-svg" />
        </div>
        <div className=" my-auto form">
          <form>
            <h2 className="text-primary text-center text-capitalize">Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" />
            </div>
            <input type="checkbox" name="keep" id="keep" />{" "}
            <small>Remember me</small>
            <br />
            <small className="mt-2">
              <Link to="/app/register">Doesn't have an account?</Link>
            </small>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
