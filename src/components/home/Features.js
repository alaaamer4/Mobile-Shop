import React, { useState } from "react"
import Image from "gatsby-image"
import Title from "../golbals/Title"
import { Link } from "gatsby"
import { MdAddShoppingCart } from "react-icons/md"
import { FaSearch } from "react-icons/fa"
const Features = ({ data, title }) => {
  const [items, setItems] = useState(data)
  console.log(items)
  if (items.length > 0) {
    return (
      <div className="container">
        <Title title={title} />
        <div className="items-grid mx-auto">
          {items &&
            items.map(item => {
              return (
                <div className="card" key={item.id}>
                  <Image
                    className="card-img-top mx-auto"
                    fluid={item.image.childImageSharp.fluid}
                  />
                  <h5 className="card-title text-center py-2">{item.title}</h5>
                  <p className="card-text ellipse">{item.description}</p>
                  <p className="card-text "> price : {item.price} $</p>
                  <div className="buttons">
                    <Link to={`/products/${item.id}`} className="button">
                      <FaSearch />
                    </Link>
                    <Link to="/app/cart" className="button">
                      <MdAddShoppingCart />
                    </Link>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    )
  } else {
    return (
      <div className="wrapper">
        <div className="row">
          <div className="text-center col mb-3">
            <h4 className="text-capitalize font-wight-strong">
              not featuring any items at the moment
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Features
