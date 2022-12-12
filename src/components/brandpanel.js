import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { ExternalLinkIcon } from '@heroicons/react/solid'
import { StaticImage } from "gatsby-plugin-image"

export function BrandPanel(props) {
  let buttons = (qry, color1) => {
    return (
    qry.buttons.map ((button) => (

      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid ">
        <Link
        to={button.link}
        className={"flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-" + String(color1) + "-700 bg-white hover:bg-indigo-50 sm:px-8"}
        >
            {button.label}
        </Link>
    </div>
    )



    ))
}
  const qry = props[0]
  const color1 = props.c1

  return (
  <div className={"relative bg-"+ String(color1) +"-800"}>
     <div className={"h-56 bg-"+ String(color1) +"-900 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"}>
       <StaticImage
         className="w-full h-full object-cover"
         src="https://www-static2.spulsecdn.net/pics/00/36/79/90/36799088_1_L.jpg"
         alt=""
       />
     </div>
     <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
       <div className="md:ml-auto md:w-1/2 md:pl-10">
         <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">{qry.heading}</h2>
         <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">{qry.subHeading}</p>
         <p className="mt-3 text-lg text-gray-300">
          {qry.description}

         </p>
         <div className="mt-8">
           { buttons(qry, color1) }
         </div>
       </div>
     </div>
   </div>
  )
}

export const BRANDPANEL_DEFAULT_FIELDS = graphql`
  fragment BrandPanelDefaultFields on WpPage_Components_BrandPanel_Default {
    heading
    subHeading
    description
    buttons {
      label
      link
    }
  }
`
