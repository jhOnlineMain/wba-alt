import * as React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import {HeroSplit} from "../components/hero"
import Layout from "../components/layout"
import { gql } from '@apollo/client'
import {BrandPanel} from "../components/brandpanel"
import parse from "html-react-parser"
import { ArrowCircleRightIcon } from "@heroicons/react/outline"
import NavPanels from "../components/navPanels"
import Team from "../components/team"
//--------------------------------------------------------This is a development test page
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
    return (
        <Layout>

          <HeroSplit {...blocks.hero} c1="green" />

          <BrandPanel {...blocks.brandPanel} c1="green" />

          <Team />
          <div className="nav-row">
            <NavPanels/>
          </div>
        
        </Layout>

    )
}
// export const buildPanel = (item) => {
  
//   const panel = item.panel[0]

//   if (panel.fieldGroupName === "OaMegaMenu_OaMenu_nav_Panel_TextLinks") {

//     return (
//       <div className="container">
//         <div className="panel-grid">
//             <div className="panel-col hero">
//                 <div className="panel-icon">

//                 </div>
//                 <div className="panel-text">
//                   <h2> {panel.title}</h2>
//                   <p>{panel.textSnippet}</p>
//                 </div>
//             </div>
//             <div className="panel-col links">
//               {panel.subLinks.map( (navLink) => (
//                 <li key={navLink.post.title}>
//                   <cpan className="list-icon-wrap">
//                         <ArrowCircleRightIcon className="h-6 w-6"/>
//                     </cpan>
//                     <span className="list-link-wrap">
//                         <Link to={navLink.post.link}>
//                             {navLink.post.title}
//                         </Link>
//                     </span>
//                 </li>
//               ))}
//             </div>
//         </div>
//     </div>
//     )
//   }
// }
// // export const query = graphql`
// //   query HomeQuery {
// //   wpPage(slug: {eq: "home"}) {
// //     slug
// //     components {
// //       hero {
// //       ...HeroFields
// //       }
// //     }
    
// //   }
  
// // }
// // `
export default Home

