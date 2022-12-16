import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import Ladders from "../components/ladder"

const AboutPage = () => (
  <Layout>
    <Seo title="About Gatsby Bootsrap 5 starter" />
    <div className="container  my-5">

      <div className="container">
        <h1 >Ladders</h1>
        {/* <Ladders /> */}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage
