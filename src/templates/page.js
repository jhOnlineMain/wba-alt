import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import parse from "html-react-parser"



export default function PageTemplate({data}) {
    console.log(data)
    const post = data.wpPost
  
    return (
        <Layout>
            <Seo title={post.title} ></Seo>
            <div className="w-1/2 mx-auto" >
                <h5> {post.title} </h5>
                <p> { parse(post.content) } </p>
            </div>
        </Layout>

    )
}

export const query = graphql`
     query ($slug: String!) {
        wpPost(slug: { eq: $slug }) {
            content
            title

        }
    }
`


