import React from "react"
// Components
import Layout from "../components/layout"
import Banner from "../components/banner"
import ContaintHome from "../components/containthome"

const IndexPage = () => {
  return (
    <Layout>

      <Banner />

      <div className="container vm-2">
        <ContaintHome />
      </div>
      
    </Layout>
  )
}

export default IndexPage