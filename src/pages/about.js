import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundSection from "../components/golbals/BackgroundSection"
import Info from "../components/golbals/Info"

const data = graphql`
  {
    file(relativePath: { eq: "aboutBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const AboutPage = () => {
  const result = useStaticQuery(data)
  return (
    <Layout>
      <BackgroundSection
        src={result.file.childImageSharp.fluid}
        Title="A little bit about us"
        styleClass="about-page"
      />
      <Info title={"who are we"} btn={"Home Page"} Path={"/"} />
    </Layout>
  )
}

export default AboutPage
