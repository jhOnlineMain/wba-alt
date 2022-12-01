import * as React from "react"
import {graphql, useStaticQuery, link} from "gatsby"
import {HeroSplit} from "../components/hero"
import Layout from "../components/layout"

const  Home = () => {
    const pageSlug = "home" 
    const data = useStaticQuery(graphql`
    query {
        wpPage(slug: {eq: "home"} ) {
            components {
              hero {
                ... on WpPage_Components_Hero_Split{
                description
                headingLine1
                headingLine2
                buttons {
                    label
                    link
                }
                backgroundImage {
                    sourceUrl
                    altText
                }
                }
            }
           
            }
        }
}
    `)
    const blocks = data.wpPage.components
    return (
        <Layout>

        <HeroSplit {...blocks.hero} c1="green" slug={pageSlug} />
        
        </Layout>

    )

}

export default Home

