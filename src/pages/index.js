import * as React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import {HeroSplit} from "../components/hero"
import Layout from "../components/layout"
import { gql } from '@apollo/client'
import {BrandPanel} from "../components/brandpanel"
import parse from "html-react-parser"
import { ArrowCircleRightIcon } from "@heroicons/react/outline"
import NavPanels from "../components/navPanels"
import Seo from "../components/seo"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
  query HomeQuery {
  wpPage(slug: {eq: "home"}) {
    slug
    components {
      hero {
        ...HeroSplitFields
      }
      brandPanel {
        ...BrandPanelDefaultFields
      }
    }
  }
  allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "content"}}}}}) {
    nodes {
      id
      content
      title
    }
  }
}
`)
  const blocks = query.wpPage.components
    return (
        <Layout>

          <HeroSplit {...blocks.hero} c1="green" />

          <BrandPanel {...blocks.brandPanel} c1="green" />
          <div className="nav-row">
            <NavPanels/>
          </div>
        </Layout>

    )
}

export default IndexPage

// const IndexPage = query.wpPage.components
//   return (
//   <Layout>
//     <Seo title="Home" />
//     <div className="relative bg-white overflow-hidden">
//       <Stat />
//       <Team />
//       <BrandPanel {...blocks.brandPanel} c1="green" />
//       <NewsletterSignup />
//   </div>
//   </Layout>
// )
// }

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

// export default IndexPage
