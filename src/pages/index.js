import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HeaderNew from "../components/headernew"
import Team from "../components/team"
import BrandPanel from "../components/brandpanel"
import Stat from "../components/stat"
import Layout from "../components/layout"
import Seo from "../components/seo"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>

    <HeaderNew />

    <Stat />

    <Team />

    <BrandPanel />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage