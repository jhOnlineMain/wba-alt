import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import parse from "html-react-parser"

const NewsArchive = ({data}) => {

  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout >
      <Seo title="All posts" />


      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title

          return (
            <li key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section itemProp="description">{parse(post.excerpt)}</section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default NewsArchive

export const pageQuery = graphql `
query NewsArchiveQuery {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "news"}}}}}
    limit: 20
  ) {
      nodes {
          uri
          date(formatString: "MMMM DD, YYYY")
          title
          excerpt
      }
    }
}
`