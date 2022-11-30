import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { ExternalLinkIcon } from '@heroicons/react/solid'
import { StaticImage } from "gatsby-plugin-image"

const BrandPanel = () => {
  const data = useStaticQuery(graphql`
    query {
      wpComponent(slug: {eq: "brand-panel"}) {
        brandPanel {
          heading
          subHeading
          fieldGroupName
          description
          button {
            label
            link
          }
        }
      }
    }
  `)
  console.log(data)
  const content = data.wpComponent.brandPanel
  return (
  <div className="relative bg-green-800">
     <div className="h-56 bg-green-900 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
       <StaticImage
         className="w-full h-full object-cover"
         src="https://www-static2.spulsecdn.net/pics/00/36/79/90/36799088_1_L.jpg"
         alt=""
       />
     </div>
     <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
       <div className="md:ml-auto md:w-1/2 md:pl-10">
         <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">{content.heading}</h2>
         <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">{content.subHeading}</p>
         <p className="mt-3 text-lg text-gray-300">
          {content.description}
        
         </p>
         <div className="mt-8">
           <div className="inline-flex rounded-md shadow">
             <Link
               to={content.button.link}
               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
             >
               {content.button.label}
               <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
             </Link>
           </div>
         </div>
       </div>
     </div>
   </div>
  )
}

export default BrandPanel
