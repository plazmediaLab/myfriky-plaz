import React from "react"
import { Helmet } from "react-helmet"
// Components
import Header from "./Header"

const Layout = props => {
  return (
    <>
      <Helmet>
        <title>MyFriky PLAZ</title>
      </Helmet>
      <Header />

      {props.children}
    </>
  )
}

export default Layout
