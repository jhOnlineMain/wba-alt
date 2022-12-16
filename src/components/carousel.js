import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";


const Carousel = () => {
    const qry = useStaticQuery(graphql`
        {
            newsPosts: allWpPost(
            filter: {categories: {nodes: {elemMatch: {slug: {eq: "news"}}}}}
            limit: 5
            ) {
                nodes {
                    title
                    link
                    featuredImage {
                        node {
                            gatsbyImage(width: 600)
                        }
                    }
                }
            }
        }
    `)

    const newsPosts = qry.newsPosts.nodes
    return (
        <div className="carousel w-full">
            {newsPosts.map( (newsPost, index) => {
                <div key={index} id={'slide' + index} className="carousel-item relative w-full">
                    <GatsbyImage
                        imgClassName="w-full"
                        image={newsPost.featuredImage?.node.GatsbyImage}
                        alt=""
                    />
                    <div className="article-title relative bottom-5" >
                        <Link to={newsPost.link}>
                            <h3>{newsPost.title}</h3>
                        </Link>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            })}

        </div>
    )
}
export default Carousel