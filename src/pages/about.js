import React from "react"
// Components
import Layout from "../components/layout"
import ContaintAbout from '../components/containtabout';

const IndexPage = () => {
  return (
    <Layout>
       
      <div className="container vm-2">
        <ContaintAbout />
      </div>

    </Layout>
  )
}

export default IndexPage