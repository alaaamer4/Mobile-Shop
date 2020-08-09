import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import BackgroundSection from "../components/golbals/BackgroundSection"
import Info from "../components/golbals/Info"
import Features from "../components/home/Features"
const data = graphql`
  query background {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    items: allStrapiPhones(
      limit: 4
      sort: { fields: created_at, order: DESC }
    ) {
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
export default function Home() {
  const result = useStaticQuery(data)

  return (
    <Layout>
      <BackgroundSection
        src={result.file.childImageSharp.fluid}
        Title="best mobile support in the east"
      />
      <Info title={"our story"} btn={"about page"} Path={"/about"} />
      <Features data={result.items.nodes} title={"features"} />
    </Layout>
  )
}
