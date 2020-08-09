import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundSection from "../components/golbals/BackgroundSection"
import Features from "../components/home/Features"
const data = graphql`
  {
    file(relativePath: { eq: "productsBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    items: allStrapiPhones(sort: { fields: created_at, order: DESC }) {
      nodes {
        id
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        title
        price
        description
      }
    }
  }
`

const ProductPage = () => {
  const result = useStaticQuery(data)
  return (
    <Layout>
      <BackgroundSection
        src={result.file.childImageSharp.fluid}
        Title="Here's a list of our products"
        styleClass="about-page"
      />
      <Features data={result.items.nodes} title={"Our Products"} />
    </Layout>
  )
}

export default ProductPage
