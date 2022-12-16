import * as React from "react"
import { Link, graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"



export function HeroSplit(props) {
  console.log(props)
  const qry = props[0]
  const color1 = props.c1


return (
  /* Expects from parent
     hero {
        ... on WpPage_Components_Hero_Split{
        description
        headingLine1
        headingLine2
        buttons {
            label
            link
        }
        backgroundImage {
            sourceUrl
            altText
        }
        }
            }
*/
<div id="hero" className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{qry.headingLine1}</span>{' '}
              <span className={"block text-" + String(color1) + "-600 xl:inline"}>{qry.headingLine2}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {qry.description}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                 to={qry.buttons[0].link}
                  className={"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-" + String(color1) + "-600 hover:bg-"+ String(color1) + "-700 md:py-4 md:text-lg md:px-10"}
                >
                  {qry.buttons[0].label}
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to={qry.buttons[1].link}
                  className={"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-" + String(color1) + "-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"}
                >
                  {qry.buttons[1].label}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover object-top"
            src={qry.backgroundImage.sourceUrl}
            alt={qry.backgroundImage.altText}
          />
        </div>
      </div>
    )
}

export function HeroCard(props)  {
  /* Expects from parent
     hero {
        ... on WpPage_Components_Hero_Card{
        description
        headingLine1
        headingLine2
        buttons {
            label
            link
        }
        backgroundImage {
            sourceUrl
            altText
        }
        }
            }
*/

  const qry = props[0]
  const color1 = props.c1
  const color2 = props.c2

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
  return (

<div id="hero-card">
  <div className="relative">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                  <GatsbyImage
                      className="h-full w-full object-cover"
                      image={qry.bgimage.gatsbyImage}
                      alt={qry.bgimage.altText || ""}
                      />
                  <div className="absolute inset-0 bg-blue-400 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white hero-line-1">{qry.heroLine1}</span>
                      <span className="block hero-line-2">{qry.heroLine2}</span>
                  </h1>
                  <p className={"mt-6 max-w-lg mx-auto text-center text-xl text-" + String(color2) + "-200 sm:max-w-3xl"}>
                      {qry.textBlock}
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      {buttons(qry, color1)}
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
  )
}

export const HERO_CARD_FIELDS = graphql`
 fragment HeroCardFields on WpPage_Components_Hero_Card {
        description
        headingLine1
        headingLine2
        buttons {
          label
          link
        }
        backgroundImage {
          sourceUrl
          altText
        }

	}
`

export const HERO_SPLIT_FIELDS = graphql`
 fragment HeroSplitFields on WpPage_Components_Hero_Split {
        description
        headingLine1
        headingLine2
        buttons {
          label
          link
        }
        backgroundImage {
          sourceUrl
          altText
        }

	}
`
