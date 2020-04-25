import React from "react";
import { Helmet } from "react-helmet";
// Modular CSS
import "modular-css/css/modular.css";
import "modular-css/css/modular-css.font.css";
import { ModularCSSfonstRequired } from 'modular-css';
// Components
import Header from "./header"
import Footer from "./footer"
// Hooks
import useSeo from '../hooks/use-seo';

import Favicon from '../images/static/isologo.png'

const Layout = props => {

  const seoInfo = useSeo();
  console.log(seoInfo);
  const { siteName, fallbackSeo: { title, description } } = seoInfo;

  return (
    <>

      <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description}/>
        <link rel="icon" href={Favicon} />
        <meta name="theme-color" content="#191919" />
        <link href={ModularCSSfonstRequired} rel="stylesheet" />
      </Helmet>

      <Header />

      {props.children}

      <Footer 
        title={title}
      />

    </>
  )
}

export default Layout
