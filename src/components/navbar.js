import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Popover, Transition } from '@headlessui/react'
import {XIcon} from "@heroicons/react/outline"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
  {
  wba: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "wba"}}}}}) {
    nodes {
      title
      link
    }
  }
  edu: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "education"}}}}}) {
    nodes {
      title
      link
    }
  }
  domestic: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "domestic"}}}}}) {
    nodes {
      title
      link
      tags {
        nodes {
          name
        }
      }
    }
  }
  wabl: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "wabl"}}}}}) {
    nodes {
      title
      link
    }
  }
  nbl1: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "nbl1"}}}}}) {
    nodes {
      title
      link
    }
  }
  programs: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "programs"}}}}}) {
    nodes {
      title
      link
    }
  }
  sponsors: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "sponsors"}}}}}) {
    nodes {
      title
      link
    }
  }
  history: allWpPost(filter: {tags: {nodes: {elemMatch: {slug: {eq: "history"}}}}}) {
    nodes {
      title
      link
    }
  }
}
  
  `)
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">

            </div>

            <Transition
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))} */}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
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
