import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundSection from "../components/golbals/BackgroundSection"
import Info from "../components/golbals/Info"

const data = graphql`
  {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default function Home() {
  const result = useStaticQuery(data)
  return (
    <Layout>
      <BackgroundSection
        src={result.file.childImageSharp.fluid}
        Title="best mobile support in the east"
      />
      <Info title={"our story"} btn={"about page"} Path={"/about"} />
    </Layout>
  )
}
