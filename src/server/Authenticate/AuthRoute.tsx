import React from "react"
import { Route } from "react-router-dom"
import ForbiddenPage from "pages/_403Page"

function AuthLoginRoute(props: any) {
  const { user } = props
  if (user) {
    return <Route {...props} />
  } else {
    return <ForbiddenPage {...props} />
  }
}

export default AuthLoginRoute
