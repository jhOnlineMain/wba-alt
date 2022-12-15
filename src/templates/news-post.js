import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version

// import "../css/@wordpress/block-library/build-style/style.css"
// import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data }) => {
 console.log(data.post.edges)
  const newsPost = data.post.edges[0].node
  const next = data.post.edges[0].next
  const prev = data.post.edges[0].previous


  const featuredImage = {
    data: newsPost.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: newsPost.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={newsPost.title} description={newsPost.excerpt} />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(newsPost.title)}</h1>

          <p>{newsPost.date}</p>

          {/* if we have a featured image for this post let's display it */}
          {newsPost.featuredImage?.data && (
            <GatsbyImage
              image={newsPost.featuredImage.node.GatsbyImage}
              alt={newsPost.featuredImage.node.altText}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!newsPost.content && (
          <section itemProp="articleBody">{parse(newsPost.content)}</section>
        )}

        <hr />

      </article>

      <nav className="news-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {
              <Link to={prev?.uri || "/"} rel="prev">
                ← {prev?.title  || ""}
              </Link>
            }
          </li>

          <li>
            {
              <Link to={next?.uri || "/"} rel="next">
                {next?.title || ""} →
              </Link>
            }
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  
  query NewsPostById($id: String!) {

    post:  allWpPost(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          excerpt
          content
          title
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            node {
              altText
              gatsbyImage(width: 400)
            }
          }
        }
        previous {
          uri
          title
        }
        next {
          uri
          title
        }
      }
    }
  }
`
console.log(pageQuery)