import * as React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
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
  wp {
    oaMegaMenu {
      oa_menu {
        nav {
          label
          panel {
            ... on WpOaMegaMenu_OaMenu_nav_Panel_TextLinks {
              fieldGroupName
              textSnippet
              title
              subLinks {
                post {
                  ... on WpPost {
                    title
                    link
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
}
`)
  const navigation = query.wp.oaMegaMenu.oa_menu.nav
  console.log(navigation)
  const blocks = query.wpPage.components
  const posts = query.allWpPost.nodes
  console.log(posts)
    return (
        <Layout>

        <HeroSplit {...blocks.hero} c1="green" />

        <BrandPanel {...blocks.brandPanel} c1="green" />
        
        <div className="panel">
          {navigation.map((item) => (
              buildPanel(item)
          ))}
        </div>
        
        </Layout>

    )
}
export const buildPanel = (item) => {
  const panel = item.panel[0]
  console.log(panel.subLinks)

  if (panel.fieldGroupName == "OaMegaMenu_OaMenu_nav_Panel_TextLinks") {

    return (
      <div className="container">
        <div className="panel-grid">
            <div className="panel-col hero">
                <div className="panel-icon">

                </div>
                <div className="panel-text">
                  <h2> {panel.title}</h2>
                  <p>{panel.textSnippet}</p>
                </div>
            </div>
            <div className="panel-col links">
              {panel.subLinks.map( (navLink) => (
                <li key={navLink.post.title}>
                  <Link to={navLink.post.link}>
                    {navLink.post.title}
                  </Link>
                </li>
              ))}

            </div>

        </div>
    </div>
    )
  }
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

