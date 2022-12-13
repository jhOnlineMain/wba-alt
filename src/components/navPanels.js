import * as React from "react"
import {Fragment} from "react"
import {graphql, Link, useStaticQuery } from "gatsby"
import { ArrowCircleRightIcon, ChevronDownIcon } from "@heroicons/react/outline"
import {GatsbyImage} from "gatsby-plugin-image"
import { Popover, Transition } from '@headlessui/react'

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
                                gatsbyImage(width: 100)
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
    console.log(panels)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

   
    

    return (
    panels.map( function(panel) { 
            if (panel.fieldGroupName === "OaMegaMenu_OaMenu_Panels_TextLinks") {
                return (
                    <Popover className="dropdown">
                        {({ open }) => (
                        <>
                        <Popover.Button id="drop" className="dropbtn" onClick={handleOpen}>
                            
                            <span>{panel.title}</span>

                            <span className="h-4 w-4 float-right items-center down-icon">
                                <ChevronDownIcon/>
                            </span> 
                        </Popover.Button>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                        >
                        <Popover.Panel className="dropdown-content hidden md:block absolute z-10 top-20 inset-x-0 transform shadow-lg bg-white">
                                <div className="panel-grid">
                                    <div className="panel-col hero">
                                        <div className="panel-icon">
                                            <GatsbyImage
                                                image={panel.image.gatsbyImage}
                                                alt=""
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

                                            <span className="list-link-wrap">
                                                <Link to={navLink.post.link}>
                                                    {navLink.post.title}
                                                </Link>
                                            </span>
                                            <cpan className="list-icon-wrap">
                                                <ArrowCircleRightIcon className="h-6 w-6"/>
                                            </cpan>
                                        </li>
                                    ))}
                                    </div>
                                </div>
                        </Popover.Panel>
                        </Transition>
                        </>
                        )}
                    </Popover>
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