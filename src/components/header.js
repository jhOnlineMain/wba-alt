import * as React from "react"
import {Fragment} from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    BriefcaseIcon,
    ChartBarIcon,
    CheckCircleIcon,
    CursorClickIcon,
    DesktopComputerIcon,
    GlobeAltIcon,
    InformationCircleIcon,
    MenuIcon,
    NewspaperIcon,
    OfficeBuildingIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import NavPanels from './navPanels'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      wpComponent(slug: {eq: "header"}) {
        header {
          logo {
            gatsbyImage( width:120 )
          }
        }
      }
    }
  `)
  console.log(data)
  const hdr = data.wpComponent.header
  return (
      <Popover className="relative bg-white h-min" id="header">
      <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link to="/" className="flex">
              <span className="sr-only">Workflow</span>
              <GatsbyImage
                className="h-16 w-auto z-30"
                imgStyle={{objectFit:'scale-down'}}
                image={hdr.logo.gatsbyImage}
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">

            <Popover.Group as="nav" className="flex nav-row">
              <NavPanels/>
            </Popover.Group>

            <div className="flex items-center md:ml-12">
              <Link to="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </Link>
              <Link
                to="#"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  )
}
