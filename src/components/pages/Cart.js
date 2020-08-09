import React from "react"
import { Link } from "@reach/router"
const Cart = () => {
  return (
    <section className=" cart-page">
      <h4>Your Cart is currently empty </h4>
      <Link to="/products">
        <button className="btn btn-darken my-5 px-5 mx-auto ">
          Go Shopping
        </button>
      </Link>
    </section>
  )
}

export default Cart
