import * as React from "react"
import {graphql, useStaticQuery, link} from "gatsby"
import {HeroSplit} from "../components/hero"
import Layout from "../components/layout"
import { gql } from '@apollo/client'
import {BrandPanel} from "../components/brandpanel"
import parse from "html-react-parser"

const Home = () => {
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
    const posts = query.allWpPost.nodes
    console.log(posts)
    return (
        <Layout>

        <HeroSplit {...blocks.hero} c1="green" />

        <BrandPanel {...blocks.brandPanel} c1="green" />
        
        </Layout>

    )
}
// export const query = graphql`
//   query HomeQuery {
//   wpPage(slug: {eq: "home"}) {
//     slug
//     components {
//       hero {
//       ...HeroFields
//       }
//     }
    
//   }
  
// }
// `
export default Home

