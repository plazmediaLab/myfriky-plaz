import React from "react";
import { Helmet } from "react-helmet";
// Modular CSS
import "modular-css/css/modular.css";
import "modular-css/css/modular-css.font.css";
import { ModularCSSfonstRequired } from 'modular-css';
// Components
import Header from "./header"

import Favicon from '../images/static/isologo.png'

const Layout = props => {
  return (
    <>

      <Helmet>
        <title>PLAZresort HOTEL</title>
        <link rel="icon" href={Favicon} />
        <meta name="theme-color" content="#191919" />
        <link href={ModularCSSfonstRequired} rel="stylesheet" />
      </Helmet>

      <Header />

      {props.children}

    </>
  )
}

export default Layout
