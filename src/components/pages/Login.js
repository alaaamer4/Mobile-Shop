import React, { useState } from "react"
import img from "../../images/login.svg"
import { Link } from "@reach/router"

const Login = () => {
  const [input, setInput] = useState({
    identifier: "",
    password: "",
  })

  const { identifier, password } = input
  const handelChange = e => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const handelSubmit = e => {
    e.preventDefault()
    console.log(input)
  }
  return (
    <section className="container bg-light login">
      <div className="form-grid">
        <div>
          <img src={img} className="my-3 auth-svg" />
        </div>
        <div className=" my-auto form">
          <form onSubmit={handelSubmit}>
            <h2 className="text-primary text-center text-capitalize">Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                value={input.identifier}
                name="identifier"
                onChange={handelChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={input.password}
                onChange={handelChange}
              />
            </div>
            <input type="checkbox" name="keep" id="keep" />{" "}
            <button type="submit" className=" btn btn-blue btn-block">
              {" "}
              Login
            </button>
            <div>
              <small>Remember me</small>
              <br />
              <small className="mt-2">
                <Link to="/app/register">Doesn't have an account?</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
