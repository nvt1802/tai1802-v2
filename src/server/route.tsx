import React from "react"
import { Route } from "react-router-dom"

// import pages
import HomePage from "pages/HomePage"
import LoginPage from "pages/LoginPage"
import RegisterPage from "pages/RegisterPage"
import SettingsPage from "pages/SettingsPage"
import VideosPage from "pages/VideosPage"
import AboutPage from "pages/AboutPage"
import NotFound404Page from "pages/_404Page"

import AuthLoginRoute from "server/Authenticate/AuthLoginRoute"
import AuthRoute from "server/Authenticate/AuthRoute"

const routes = [
  {
    path: "/",
    exact: true,
    component: (props: any) => (
      <AuthLoginRoute {...props} component={() => <HomePage {...props} />} />
    ),
  },
  {
    path: "/login",
    exact: true,
    component: (props: any) => <LoginPage {...props} />,
  },
  {
    path: "/settings",
    exact: true,
    component: (props: any) => (
      <AuthRoute {...props} component={() => <SettingsPage {...props} />} />
    ),
  },
  {
    path: "/videos",
    exact: true,
    component: (props: any) => (
      <AuthRoute {...props} component={() => <VideosPage {...props} />} />
    ),
  },
  {
    path: "/register",
    exact: true,
    component: (props: any) => <RegisterPage {...props} />,
  },
  {
    path: "/about",
    exact: true,
    component: (props: any) => <AboutPage {...props} />,
  },
  {
    path: "",
    exact: false,
    component: (props: any) => <NotFound404Page {...props} />,
  },
]

export default routes

export const RouteWithSubRoutes = (route: any) => {
  return (
    <>
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => (
          <>
            <route.component {...props} {...route} routes={route.routes} />
          </>
        )}
      />
    </>
  )
}
