import React from "react"
import { Router, Redirect } from "@reach/router"

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  userLevel,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)
export default PrivateRoute
