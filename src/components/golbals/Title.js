import React from "react"

const Title = ({ title }) => {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="text-center col mb-3">
          <h1 className="text-capitalize font-wight-strong display-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Title
