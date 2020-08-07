import React from "react"
import BackgroundImage from "gatsby-background-image"
const BackgroundSection = ({ src, Title, children, styleClass }) => {
  return (
    <BackgroundImage fluid={src} className={styleClass}>
      <h2 className="title font-weight-bold mx-5 display-4 text-uppercase main-text">
        {Title}
      </h2>
      {children}
    </BackgroundImage>
  )
}
BackgroundSection.defaultProps = {
  styleClass: "default-background",
}
export default BackgroundSection
