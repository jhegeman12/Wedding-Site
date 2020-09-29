import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="cover"></div>
  </Layout>
)

export default IndexPage
