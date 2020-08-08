import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundSection from "../components/golbals/BackgroundSection"

const data = graphql`
  {
    file(relativePath: { eq: "productsBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
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
    </Layout>
  )
}

export default ProductPage
