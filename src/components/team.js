import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

  
const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      wpComponent(slug: {eq: "team"}) {
        team {
          heading
          description
          members {
            name
            role
          }
        }
      }
}
  
  `)
  const qry = data.wpComponent.team
  const people = qry.members
  return (
  <div className="bg-white">
     <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
       <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
         <div className="space-y-5 sm:space-y-4">
           <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{qry.heading}</h2>
           <p className="text-xl text-gray-500">
             {qry.description}
           </p>
         </div>
         <div className="lg:col-span-2">
           <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
             {people.map((person) => (
               <li key={person.name}>
                 <div className="flex items-center space-x-4 lg:space-x-6">
                   <StaticImage  imgClassName="w-8 h-8 rounded-full lg:w-20 lg:h-20" src="https://www-static.spulsecdn.net/pics/00/36/79/58/36795882_1_M.jpg" alt="" />
                   <div className="font-medium text-lg leading-6 space-y-1">
                     <h3>{person.name}</h3>
                     <p className="text-green-800">{person.role}</p>
                   </div>
                 </div>
               </li>
             ))}
           </ul>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Team
