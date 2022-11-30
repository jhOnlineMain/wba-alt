import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <div className="navbar bg-green-800 drop-shadow-md">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl text-white"><Link to="/" className="text-white" activeStyle={{ color: "blue" }}>  <StaticImage
          src="../images/wolveslogo.png"
          width={100}
          quality={95}
          formats={["AUTO", "WEBP"]}
          alt="A Gatsby astronaut"
          className="bg-contain"
        /></Link></a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0 true-gray-50">
      <li tabIndex={0}>
        <a className="text-white">
          Season
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a className="text-white">Submenu 1</a></li>
          <li><a className="text-white">Submenu 2</a></li>
        </ul>
      </li>
      <li><Link to="/ladders" className="text-white" activeStyle={{ color: "blue" }}>Ladders</Link></li>
      <li><Link to="/ladders" className="text-white" activeStyle={{ color: "blue" }}>Grades</Link></li>
      </ul>
    </div>
  </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
