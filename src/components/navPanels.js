import * as React from "react"
import {graphql, Link, useStaticQuery } from "gatsby"
import { ArrowCircleRightIcon, ChevronDownIcon } from "@heroicons/react/outline"
import {GatsbyImage} from "gatsby-plugin-image"


const NavPanels = () => {
    const qry = useStaticQuery(graphql`
    query {
        wp {
            oaMegaMenu {
                oa_menu {
                    panels {
                        ... on WpOaMegaMenu_OaMenu_Panels_TextLinks {
                            fieldGroupName
                            title
                            textSnippet
                            image {
                                gatsbyImage(width: 50, aspectRatio: 1)
                            }
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
    `)
    const panels = qry.wp.oaMegaMenu.oa_menu.panels
    return (
    panels.map( function(panel) { 
            if (panel.fieldGroupName === "OaMegaMenu_OaMenu_Panels_TextLinks") {
                return (
                    <div className="dropdown">
                        <button className="dropbtn">
                            
                            <span>{panel.title}</span>

                            <span className="ml-1 mt-1 h-6 w-6 float-right items-center down-icon">
                                <ChevronDownIcon/>
                            </span> 
                        </button>
                        <div className="container dropdown-content">
                            <div className="panel-grid">
                                <div className="panel-col hero">
                                    <div className="panel-icon">
                                        <GatsbyImage
                                            image={panel.image}
                                        />
                                    </div>
                                    <div className="panel-text">
                                    <h2> {panel.title}</h2>
                                    <p>{panel.textSnippet}</p>
                                    </div>
                                </div>
                                <div className="panel-col links">
                                {panel.subLinks.map( (navLink) => (
                                    <li key={navLink.post.title}>
                                        <cpan className="list-icon-wrap">
                                            <ArrowCircleRightIcon className="h-6 w-6"/>
                                        </cpan>
                                        <span className="list-link-wrap">
                                            <Link to={navLink.post.link}>
                                                {navLink.post.title}
                                            </Link>
                                        </span>
                                    </li>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else return <div>yeah nah</div>
        })
    )
}
export default NavPanels
// const TextLinksPanelFields = graphql `

//     fragment TextLinksPanelFields on WpOaMegaMenu_OaMenu_nav_Panel_TextLinks {
//         fieldGroupName
//         textSnippet
//         title
//         subLinks {
//         post {
//             ... on WpPost {
//             title
//             link
//             }
//         }
//         }

// 	}  
// `