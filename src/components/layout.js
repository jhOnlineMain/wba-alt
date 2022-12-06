import * as React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"

import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import HeaderNew from "./headernew"
import MegaMenu from "./megamenu"


import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="container-fluid p-0">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
