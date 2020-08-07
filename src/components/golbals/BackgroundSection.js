import React from "react"
import BackgroundImage from "gatsby-background-image"
const BackgroundSection = ({ src, Title, children }) => {
  return (
    <BackgroundImage fluid={src} className="default-background">
      <h2 className="title text-light font-weight-bold text-center display-4 text-uppercase">
        {Title}
      </h2>
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection
