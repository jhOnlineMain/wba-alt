import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import parse from "html-react-parser"



const PageTemplate = ( pageQuery ) => {

    const contextData = pageQuery.data.wpPage
   
    return (
        <Layout>
            <Seo title={contextData.title} ></Seo>
            <h5> {contextData.title} </h5>
            <p> { parse(contextData.content) } </p>
        </Layout>

    )
}

export default PageTemplate

export const pageQuery = graphql`
     query PageBySlug($slug: String!) {
        wpPage(slug: { eq: $slug }) {
            slug
            content
            title

        }
    }
`


