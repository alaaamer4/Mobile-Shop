import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Title from "../golbals/Title"
import { GoHome } from "react-icons/go"
import { RiShoppingCartLine } from "react-icons/ri"
const singleProduct = ({
  data: {
    product: {
      price,
      title,
      description,
      image: {
        childImageSharp: { fluid },
      },
    },
  },
}) => {
  return (
    <Layout>
      <div className="container" style={{ minHeight: "76vh" }}>
        <section className="single-product">
          <div className="product-image">
            <Image fluid={fluid} />
          </div>
          <div className="product-info my-5">
            <h1 className="text-capitalize font-wight-strong display-4 my-3">
              {title}
            </h1>
            <div className=" mx-auto">
              <p className="lead text-muted mb-3">{description}</p>
              <h4 className=" text-primary mb-3"> Total price : {price} $</h4>
              <div className=" mx-auto ">
                <Link
                  className="btn btn-blue  text-capitalize ml-5 px-5"
                  to="/"
                >
                  Add to cart{"  "}
                  <RiShoppingCartLine />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query GetProduct($id: String) {
    product: strapiPhones(id: { eq: $id }) {
      price
      title
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default singleProduct
