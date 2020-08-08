import React from "react"
import img from "../../images/register.svg"
import { Link } from "@reach/router"
const Register = () => {
  return (
    <section className="container bg-light login">
      <div className="form-grid">
        <div>
          <img src={img} className="my-3 auth-svg" />
        </div>
        <div className="mx-auto  form-register mt-2">
          <form>
            <h2 className="text-primary text-center text-capitalize">
              Register
            </h2>
            <div className="form-group">
              <label htmlFor="name">Username</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input type="password" className="form-control" />
            </div>

            <small className="mt-2">
              <Link to="/app/login">already have an account?</Link>
            </small>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register
