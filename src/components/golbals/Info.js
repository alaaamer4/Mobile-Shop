import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
const Info = ({ title, btn, Path }) => {
  return (
    <section className="py-5">
      <Title title={title} />

      <div className="wrapper">
        <div className="row">
          <div className="col-10 col-sm-8 text-center mx-auto">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              officiis sunt facilis omnis praesentium amet autem aut dicta nulla
              alias non quaerat quos consectetur architecto, soluta velit
              cumque? Qui, facilis.
            </p>

            <Link className="btn btn-blue mx-auto text-capitalize" to={Path}>
              {btn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
